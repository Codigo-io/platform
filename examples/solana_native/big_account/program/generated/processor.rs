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
use crate::generated::errors::ValidateBigAccountError;
use crate::generated::instructions::ValidateBigAccountInstruction;

use crate::generated::state::{
	Account,
	AccountPDA,
	Account10Kb,
	Account10Mib,
};
use crate::src::*;

pub struct Processor;

impl Processor {
    pub fn process(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        data: &[u8],
    ) -> ProgramResult {
        let instruction = ValidateBigAccountInstruction::unpack(data)?;

        match instruction {
			ValidateBigAccountInstruction::InitPdaOnContract(args) => {
				msg!("Instruction: InitPdaOnContract");
				Self::process_init_pda_on_contract(
					program_id,
					accounts, 
					args.account_seed_index,
				)
			}
			ValidateBigAccountInstruction::InitOnContract => {
				msg!("Instruction: InitOnContract");
				Self::process_init_on_contract(program_id, accounts)
			}
			ValidateBigAccountInstruction::InitOnClient => {
				msg!("Instruction: InitOnClient");
				Self::process_init_on_client(program_id, accounts)
			}
			ValidateBigAccountInstruction::InitOnClientWithCustomOwner => {
				msg!("Instruction: InitOnClientWithCustomOwner");
				Self::process_init_on_client_with_custom_owner(program_id, accounts)
			}
			ValidateBigAccountInstruction::InitAccountInfoOnClient => {
				msg!("Instruction: InitAccountInfoOnClient");
				Self::process_init_account_info_on_client(program_id, accounts)
			}
			ValidateBigAccountInstruction::InitAccountInfoOnClientWithCustomOwner => {
				msg!("Instruction: InitAccountInfoOnClientWithCustomOwner");
				Self::process_init_account_info_on_client_with_custom_owner(program_id, accounts)
			}
			ValidateBigAccountInstruction::InitAccountInfoOnContract => {
				msg!("Instruction: InitAccountInfoOnContract");
				Self::process_init_account_info_on_contract(program_id, accounts)
			}
			ValidateBigAccountInstruction::InitTwoBigAccountOnClient => {
				msg!("Instruction: InitTwoBigAccountOnClient");
				Self::process_init_two_big_account_on_client(program_id, accounts)
			}
        }
    }

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [Account10Kb] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - account_seed_index: [u32] Auto-generated, from the input "account" for the its seed definition "Array", sets the seed named "index"
	pub fn process_init_pda_on_contract(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		account_seed_index: u32,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_index.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateBigAccountError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 10240;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&account_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), account_info.clone()],
			&[&[account_seed_index.to_le_bytes().as_ref(), &[account_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 10240usize {
			return Err(ValidateBigAccountError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<Account10Kb>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		init_pda_on_contract::init_pda_on_contract(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [Account10Kb] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn process_init_on_contract(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 10240;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke(
			&create_account(
				&fee_payer_info.key,
				&account_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), account_info.clone()],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 10240usize {
			return Err(ValidateBigAccountError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<Account10Kb>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		init_on_contract::init_on_contract(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
	pub fn process_init_on_client(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 10485760usize {
			return Err(ValidateBigAccountError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = Account::new(
			&account_info,
			try_from_slice_unchecked::<Account10Mib>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		init_on_client::init_on_client(
			program_id,
			&account,
		)?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
	pub fn process_init_on_client_with_custom_owner(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if *account_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 10485760usize {
			return Err(ValidateBigAccountError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = Account::new(
			&account_info,
			try_from_slice_unchecked::<Account10Mib>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		init_on_client_with_custom_owner::init_on_client_with_custom_owner(
			program_id,
			&account,
		)?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [AccountInfo] 
	pub fn process_init_account_info_on_client(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 10485760usize {
			return Err(ValidateBigAccountError::InvalidAccountLen.into());
		}



		// Calling STUB
		init_account_info_on_client::init_account_info_on_client(
			program_id,
			account_info,
		)?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [AccountInfo] 
	pub fn process_init_account_info_on_client_with_custom_owner(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if *account_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 10485760usize {
			return Err(ValidateBigAccountError::InvalidAccountLen.into());
		}



		// Calling STUB
		init_account_info_on_client_with_custom_owner::init_account_info_on_client_with_custom_owner(
			program_id,
			account_info,
		)?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn process_init_account_info_on_contract(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 10240;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke(
			&create_account(
				&fee_payer_info.key,
				&account_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), account_info.clone()],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 10240usize {
			return Err(ValidateBigAccountError::InvalidAccountLen.into());
		}



		// Calling STUB
		init_account_info_on_contract::init_account_info_on_contract(
			program_id,
			account_info,
		)?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
/// 2. `[signer]` account_info: [AccountInfo] 
	pub fn process_init_two_big_account_on_client(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let account_info_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}

		if account_info_info.is_signer != true {
			return Err(ValidateBigAccountError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if *account_info_info.owner != *program_id {
			return Err(ValidateBigAccountError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 10485760usize {
			return Err(ValidateBigAccountError::InvalidAccountLen.into());
		}

		if account_info_info.data_len() != 10485760usize {
			return Err(ValidateBigAccountError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = Account::new(
			&account_info,
			try_from_slice_unchecked::<Account10Mib>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		init_two_big_account_on_client::init_two_big_account_on_client(
			program_id,
			&account,
			account_info_info,
		)?;
		
		Ok(())
	}
}