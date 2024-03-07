// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use std::str::FromStr;
use std::ops::DerefMut;
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::borsh0_10::try_from_slice_unchecked;
use solana_program::account_info::{AccountInfo, next_account_info, next_account_infos};
use solana_program::entrypoint::ProgramResult;
use solana_program::program::{invoke, invoke_signed};
use solana_program::pubkey::Pubkey;
use solana_program::rent::Rent;
use solana_program::system_instruction::create_account;
use solana_program::{msg, system_program};
use solana_program::sysvar::Sysvar;
use solana_program::program_pack::Pack;
use crate::generated::errors::InformalLenderError;
use crate::generated::instructions::InformalLenderInstruction;

use crate::generated::state::{
	Account,
	AccountPDA,
	Broker,
	Loan,
};
use crate::src::*;

pub struct Processor;

impl Processor {
    pub fn process(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        data: &[u8],
    ) -> ProgramResult {
        let instruction = InformalLenderInstruction::unpack(data)?;

        match instruction {
			InformalLenderInstruction::CreateBroker(args) => {
				msg!("Instruction: CreateBroker");
				Self::process_create_broker(
					program_id,
					accounts, 
					args.amount,
					args.fee,
				)
			}
			InformalLenderInstruction::AddCapitalToBroker(args) => {
				msg!("Instruction: AddCapitalToBroker");
				Self::process_add_capital_to_broker(
					program_id,
					accounts, 
					args.amount,
				)
			}
			InformalLenderInstruction::RequestLoan(args) => {
				msg!("Instruction: RequestLoan");
				Self::process_request_loan(
					program_id,
					accounts, 
					args.amount,
					args.kyc_url,
					args.loan_seed_index,
				)
			}
			InformalLenderInstruction::ApproveLoan(args) => {
				msg!("Instruction: ApproveLoan");
				Self::process_approve_loan(
					program_id,
					accounts, 
					args.loan_seed_index,
				)
			}
			InformalLenderInstruction::PayLoan(args) => {
				msg!("Instruction: PayLoan");
				Self::process_pay_loan(
					program_id,
					accounts, 
					args.amount,
					args.loan_seed_index,
				)
			}
        }
    }

/// After deploying the contract this must be the first instruction
/// to call. It will configure the broker account.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` delegate: [AccountInfo] This will be the account that has permission to update the broker and approved request.
/// 2. `[writable]` broker: [Broker] 
/// 3. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - amount: [u64] The amount to be added to the capital. It will be debited from the delegate account
/// - fee: [u8] 
	pub fn process_create_broker(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		amount: u64,
		fee: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let delegate_info = next_account_info(account_info_iter)?;
		let broker_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (broker_pubkey, broker_bump) = Pubkey::find_program_address(
			&[b"broker"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(InformalLenderError::InvalidSignerPermission.into());
		}

		if delegate_info.is_signer != true {
			return Err(InformalLenderError::InvalidSignerPermission.into());
		}

		if *broker_info.key != broker_pubkey {
			return Err(InformalLenderError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(InformalLenderError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 81;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&broker_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), broker_info.clone()],
			&[&[b"broker", &[broker_bump]]],
		)?;


		// Security Checks
		if *delegate_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if *broker_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if broker_info.data_len() != 81usize {
			return Err(InformalLenderError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let broker = &mut AccountPDA::new(
			&broker_info,
			try_from_slice_unchecked::<Broker>(&broker_info.data.borrow()).unwrap(),
			broker_bump,
		);

		// Calling STUB
		create_broker::create_broker(
			program_id,
			delegate_info,
			broker,
			amount,
			fee,
		)?;

		// Accounts Serialization
		broker.data.serialize(&mut &mut broker_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Through this instruction any one can add capital to the broker
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` delegate: [AccountInfo] 
/// 2. `[writable]` broker: [Broker] 
///
/// Data:
/// - amount: [u64] The amount to be added to the capital. It will be debited from the delegate account
	pub fn process_add_capital_to_broker(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		amount: u64,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let delegate_info = next_account_info(account_info_iter)?;
		let broker_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (broker_pubkey, broker_bump) = Pubkey::find_program_address(
			&[b"broker"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(InformalLenderError::InvalidSignerPermission.into());
		}

		if delegate_info.is_signer != true {
			return Err(InformalLenderError::InvalidSignerPermission.into());
		}

		if *broker_info.key != broker_pubkey {
			return Err(InformalLenderError::NotExpectedAddress.into());
		}



		// Security Checks
		if *delegate_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if *broker_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if broker_info.data_len() != 81usize {
			return Err(InformalLenderError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let broker = &mut AccountPDA::new(
			&broker_info,
			try_from_slice_unchecked::<Broker>(&broker_info.data.borrow()).unwrap(),
			broker_bump,
		);

		// Calling STUB
		add_capital_to_broker::add_capital_to_broker(
			program_id,
			delegate_info,
			broker,
			amount,
		)?;

		// Accounts Serialization
		broker.data.serialize(&mut &mut broker_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// This instruction is used by a client to request a loan
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` client: [AccountInfo] 
/// 2. `[writable]` loan: [Loan] 
/// 3. `[]` broker: [Broker] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - amount: [u64] The request amount to borrow
/// - kyc_url: [String] 
/// - loan_seed_index: [u32] Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
	pub fn process_request_loan(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		amount: u64,
		kyc_url: String,
		loan_seed_index: u32,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let client_info = next_account_info(account_info_iter)?;
		let loan_info = next_account_info(account_info_iter)?;
		let broker_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (loan_pubkey, loan_bump) = Pubkey::find_program_address(
			&[b"loan", client_info.key.as_ref(), loan_seed_index.to_le_bytes().as_ref()],
			program_id,
		);
		let (broker_pubkey, broker_bump) = Pubkey::find_program_address(
			&[b"broker"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(InformalLenderError::InvalidSignerPermission.into());
		}

		if client_info.is_signer != true {
			return Err(InformalLenderError::InvalidSignerPermission.into());
		}

		if *loan_info.key != loan_pubkey {
			return Err(InformalLenderError::NotExpectedAddress.into());
		}

		if *broker_info.key != broker_pubkey {
			return Err(InformalLenderError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(InformalLenderError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 150;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&loan_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), loan_info.clone()],
			&[&[b"loan", client_info.key.as_ref(), loan_seed_index.to_le_bytes().as_ref(), &[loan_bump]]],
		)?;


		// Security Checks
		if *client_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if *loan_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if *broker_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if loan_info.data_len() != 150usize {
			return Err(InformalLenderError::InvalidAccountLen.into());
		}

		if broker_info.data_len() != 81usize {
			return Err(InformalLenderError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let loan = &mut AccountPDA::new(
			&loan_info,
			try_from_slice_unchecked::<Loan>(&loan_info.data.borrow()).unwrap(),
			loan_bump,
		);
		let broker = AccountPDA::new(
			&broker_info,
			try_from_slice_unchecked::<Broker>(&broker_info.data.borrow()).unwrap(),
			broker_bump,
		);

		// Calling STUB
		request_loan::request_loan(
			program_id,
			client_info,
			loan,
			&broker,
			amount,
			kyc_url,
		)?;

		// Accounts Serialization
		loan.data.serialize(&mut &mut loan_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Through this instruction the delegate can approve a loan.
/// Upon approval, the funds will be transfer from the broker
/// account to the client's account.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` delegate: [AccountInfo] 
/// 2. `[writable]` loan: [Loan] 
/// 3. `[writable]` broker: [Broker] 
/// 4. `[writable]` client: [AccountInfo] 
///
/// Data:
/// - loan_seed_index: [u32] Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
	pub fn process_approve_loan(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		loan_seed_index: u32,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let delegate_info = next_account_info(account_info_iter)?;
		let loan_info = next_account_info(account_info_iter)?;
		let broker_info = next_account_info(account_info_iter)?;
		let client_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (loan_pubkey, loan_bump) = Pubkey::find_program_address(
			&[b"loan", client_info.key.as_ref(), loan_seed_index.to_le_bytes().as_ref()],
			program_id,
		);
		let (broker_pubkey, broker_bump) = Pubkey::find_program_address(
			&[b"broker"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(InformalLenderError::InvalidSignerPermission.into());
		}

		if delegate_info.is_signer != true {
			return Err(InformalLenderError::InvalidSignerPermission.into());
		}

		if *loan_info.key != loan_pubkey {
			return Err(InformalLenderError::NotExpectedAddress.into());
		}

		if *broker_info.key != broker_pubkey {
			return Err(InformalLenderError::NotExpectedAddress.into());
		}



		// Security Checks
		if *delegate_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if *loan_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if *broker_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if *client_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if loan_info.data_len() != 150usize {
			return Err(InformalLenderError::InvalidAccountLen.into());
		}

		if broker_info.data_len() != 81usize {
			return Err(InformalLenderError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let loan = &mut AccountPDA::new(
			&loan_info,
			try_from_slice_unchecked::<Loan>(&loan_info.data.borrow()).unwrap(),
			loan_bump,
		);
		let broker = &mut AccountPDA::new(
			&broker_info,
			try_from_slice_unchecked::<Broker>(&broker_info.data.borrow()).unwrap(),
			broker_bump,
		);

		// Calling STUB
		approve_loan::approve_loan(
			program_id,
			delegate_info,
			loan,
			broker,
			client_info,
		)?;

		// Accounts Serialization
		loan.data.serialize(&mut &mut loan_info.data.borrow_mut()[..])?;		broker.data.serialize(&mut &mut broker_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// A client can pay a loan through this instruction. When paying
/// the contract will calculate the interest based on the loan approved
/// fee. Additioanlly, it will transfer money from the client's account
/// to the broker account
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` client: [AccountInfo] 
/// 2. `[writable]` loan: [Loan] 
/// 3. `[writable]` broker: [Broker] 
///
/// Data:
/// - amount: [u64] The amount to pay to the loan
/// - loan_seed_index: [u32] Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
	pub fn process_pay_loan(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		amount: u64,
		loan_seed_index: u32,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let client_info = next_account_info(account_info_iter)?;
		let loan_info = next_account_info(account_info_iter)?;
		let broker_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (loan_pubkey, loan_bump) = Pubkey::find_program_address(
			&[b"loan", client_info.key.as_ref(), loan_seed_index.to_le_bytes().as_ref()],
			program_id,
		);
		let (broker_pubkey, broker_bump) = Pubkey::find_program_address(
			&[b"broker"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(InformalLenderError::InvalidSignerPermission.into());
		}

		if client_info.is_signer != true {
			return Err(InformalLenderError::InvalidSignerPermission.into());
		}

		if *loan_info.key != loan_pubkey {
			return Err(InformalLenderError::NotExpectedAddress.into());
		}

		if *broker_info.key != broker_pubkey {
			return Err(InformalLenderError::NotExpectedAddress.into());
		}



		// Security Checks
		if *client_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if *loan_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if *broker_info.owner != *program_id {
			return Err(InformalLenderError::WrongAccountOwner.into());
		}

		if loan_info.data_len() != 150usize {
			return Err(InformalLenderError::InvalidAccountLen.into());
		}

		if broker_info.data_len() != 81usize {
			return Err(InformalLenderError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let loan = &mut AccountPDA::new(
			&loan_info,
			try_from_slice_unchecked::<Loan>(&loan_info.data.borrow()).unwrap(),
			loan_bump,
		);
		let broker = &mut AccountPDA::new(
			&broker_info,
			try_from_slice_unchecked::<Broker>(&broker_info.data.borrow()).unwrap(),
			broker_bump,
		);

		// Calling STUB
		pay_loan::pay_loan(
			program_id,
			client_info,
			loan,
			broker,
			amount,
		)?;

		// Accounts Serialization
		loan.data.serialize(&mut &mut loan_info.data.borrow_mut()[..])?;		broker.data.serialize(&mut &mut broker_info.data.borrow_mut()[..])?;
		
		Ok(())
	}
}