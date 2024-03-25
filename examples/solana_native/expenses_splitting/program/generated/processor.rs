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
use crate::generated::errors::ExpenseSplitterError;
use crate::generated::instructions::ExpenseSplitterInstruction;

use crate::generated::state::{
	Account,
	AccountPDA,
	GroupAccount,
};
use crate::src::*;

pub struct Processor;

impl Processor {
    pub fn process(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        data: &[u8],
    ) -> ProgramResult {
        let instruction = ExpenseSplitterInstruction::unpack(data)?;

        match instruction {
			ExpenseSplitterInstruction::CreateGroup(args) => {
				msg!("Instruction: CreateGroup");
				Self::process_create_group(
					program_id,
					accounts, 
					args.group_name,
					args.members,
					args.initial_balances,
					args.group_account_seed_group_name,
				)
			}
			ExpenseSplitterInstruction::AddMember(args) => {
				msg!("Instruction: AddMember");
				Self::process_add_member(
					program_id,
					accounts, 
					args.new_member,
					args.group_account_seed_group_name,
				)
			}
			ExpenseSplitterInstruction::RemoveMember(args) => {
				msg!("Instruction: RemoveMember");
				Self::process_remove_member(
					program_id,
					accounts, 
					args.member,
					args.group_account_seed_group_name,
				)
			}
			ExpenseSplitterInstruction::LogPayment(args) => {
				msg!("Instruction: LogPayment");
				Self::process_log_payment(
					program_id,
					accounts, 
					args.title,
					args.participants,
					args.amounts,
					args.participation_factors,
					args.group_account_seed_group_name,
				)
			}
        }
    }

/// Creates a new group with initial members and balances.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - group_name: [String] The name of the group.
/// - members: [Vec<Pubkey>] Array of member public keys.
/// - initial_balances: [Vec<i64>] Array of initial balances for each member.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	pub fn process_create_group(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		group_name: String,
		members: Vec<Pubkey>,
		initial_balances: Vec<i64>,
		group_account_seed_group_name: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let group_account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (group_account_pubkey, group_account_bump) = Pubkey::find_program_address(
			&[group_account_seed_group_name.as_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ExpenseSplitterError::InvalidSignerPermission.into());
		}

		if *group_account_info.key != group_account_pubkey {
			return Err(ExpenseSplitterError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ExpenseSplitterError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 4112;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&group_account_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), group_account_info.clone()],
			&[&[group_account_seed_group_name.as_bytes().as_ref(), &[group_account_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ExpenseSplitterError::WrongAccountOwner.into());
		}

		if *group_account_info.owner != *program_id {
			return Err(ExpenseSplitterError::WrongAccountOwner.into());
		}

		if group_account_info.data_len() != 4112usize {
			return Err(ExpenseSplitterError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let group_account = &mut AccountPDA::new(
			&group_account_info,
			try_from_slice_unchecked::<GroupAccount>(&group_account_info.data.borrow()).unwrap(),
			group_account_bump,
		);

		// Calling STUB
		create_group::create_group(
			program_id,
			group_account,
			group_name,
			members,
			initial_balances,
		)?;

		// Accounts Serialization
		group_account.data.serialize(&mut &mut group_account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Adds a new member to the group.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
///
/// Data:
/// - new_member: [Pubkey] Public key of the new member.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	pub fn process_add_member(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		new_member: Pubkey,
		group_account_seed_group_name: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let group_account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (group_account_pubkey, group_account_bump) = Pubkey::find_program_address(
			&[group_account_seed_group_name.as_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ExpenseSplitterError::InvalidSignerPermission.into());
		}

		if *group_account_info.key != group_account_pubkey {
			return Err(ExpenseSplitterError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ExpenseSplitterError::WrongAccountOwner.into());
		}

		if *group_account_info.owner != *program_id {
			return Err(ExpenseSplitterError::WrongAccountOwner.into());
		}

		if group_account_info.data_len() != 4112usize {
			return Err(ExpenseSplitterError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let group_account = &mut AccountPDA::new(
			&group_account_info,
			try_from_slice_unchecked::<GroupAccount>(&group_account_info.data.borrow()).unwrap(),
			group_account_bump,
		);

		// Calling STUB
		add_member::add_member(
			program_id,
			group_account,
			new_member,
		)?;

		// Accounts Serialization
		group_account.data.serialize(&mut &mut group_account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Removes a member from the group.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
///
/// Data:
/// - member: [Pubkey] Public key of the member to remove.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	pub fn process_remove_member(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		member: Pubkey,
		group_account_seed_group_name: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let group_account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (group_account_pubkey, group_account_bump) = Pubkey::find_program_address(
			&[group_account_seed_group_name.as_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ExpenseSplitterError::InvalidSignerPermission.into());
		}

		if *group_account_info.key != group_account_pubkey {
			return Err(ExpenseSplitterError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ExpenseSplitterError::WrongAccountOwner.into());
		}

		if *group_account_info.owner != *program_id {
			return Err(ExpenseSplitterError::WrongAccountOwner.into());
		}

		if group_account_info.data_len() != 4112usize {
			return Err(ExpenseSplitterError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let group_account = &mut AccountPDA::new(
			&group_account_info,
			try_from_slice_unchecked::<GroupAccount>(&group_account_info.data.borrow()).unwrap(),
			group_account_bump,
		);

		// Calling STUB
		remove_member::remove_member(
			program_id,
			group_account,
			member,
		)?;

		// Accounts Serialization
		group_account.data.serialize(&mut &mut group_account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Logs a payment made by or for group members, updating balances accordingly.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
///
/// Data:
/// - title: [String] Title or description of the payment.
/// - participants: [Vec<Pubkey>] Array of participating member public keys.
/// - amounts: [Vec<u64>] Array of amounts each participant gave to the group.
/// - participation_factors: [Vec<u64>] Array of participation factors for each participant.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	pub fn process_log_payment(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		title: String,
		participants: Vec<Pubkey>,
		amounts: Vec<u64>,
		participation_factors: Vec<u64>,
		group_account_seed_group_name: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let group_account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (group_account_pubkey, group_account_bump) = Pubkey::find_program_address(
			&[group_account_seed_group_name.as_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ExpenseSplitterError::InvalidSignerPermission.into());
		}

		if *group_account_info.key != group_account_pubkey {
			return Err(ExpenseSplitterError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ExpenseSplitterError::WrongAccountOwner.into());
		}

		if *group_account_info.owner != *program_id {
			return Err(ExpenseSplitterError::WrongAccountOwner.into());
		}

		if group_account_info.data_len() != 4112usize {
			return Err(ExpenseSplitterError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let group_account = &mut AccountPDA::new(
			&group_account_info,
			try_from_slice_unchecked::<GroupAccount>(&group_account_info.data.borrow()).unwrap(),
			group_account_bump,
		);

		// Calling STUB
		log_payment::log_payment(
			program_id,
			group_account,
			title,
			participants,
			amounts,
			participation_factors,
		)?;

		// Accounts Serialization
		group_account.data.serialize(&mut &mut group_account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}
}