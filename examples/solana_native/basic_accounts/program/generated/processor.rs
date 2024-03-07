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
use crate::generated::errors::ValidateAccountsError;
use crate::generated::instructions::ValidateAccountsInstruction;

use crate::generated::state::{
	Account,
	AccountPDA,
	State,
};
use crate::src::*;

pub struct Processor;

impl Processor {
    pub fn process(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        data: &[u8],
    ) -> ProgramResult {
        let instruction = ValidateAccountsInstruction::unpack(data)?;

        match instruction {
			ValidateAccountsInstruction::Instruction1(args) => {
				msg!("Instruction: Instruction1");
				Self::process_instruction1(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAccountsInstruction::Instruction2(args) => {
				msg!("Instruction: Instruction2");
				Self::process_instruction2(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAccountsInstruction::Instruction3(args) => {
				msg!("Instruction: Instruction3");
				Self::process_instruction3(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAccountsInstruction::Instruction4(args) => {
				msg!("Instruction: Instruction4");
				Self::process_instruction4(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_u8_type,
					args.account_seed_u16_type,
					args.account_seed_u32_type,
					args.account_seed_u64_type,
					args.account_seed_i8_type,
					args.account_seed_i16_type,
					args.account_seed_i32_type,
					args.account_seed_i64_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAccountsInstruction::Instruction5 => {
				msg!("Instruction: Instruction5");
				Self::process_instruction5(program_id, accounts)
			}
			ValidateAccountsInstruction::Instruction6 => {
				msg!("Instruction: Instruction6");
				Self::process_instruction6(program_id, accounts)
			}
			ValidateAccountsInstruction::Instruction7(args) => {
				msg!("Instruction: Instruction7");
				Self::process_instruction7(
					program_id,
					accounts, 
					args.account_seed_dynamic,
				)
			}
			ValidateAccountsInstruction::Instruction8(args) => {
				msg!("Instruction: Instruction8");
				Self::process_instruction8(
					program_id,
					accounts, 
					args.account_seed_u8_type,
					args.account_seed_u16_type,
					args.account_seed_u32_type,
					args.account_seed_u64_type,
					args.account_seed_i8_type,
					args.account_seed_i16_type,
					args.account_seed_i32_type,
					args.account_seed_i64_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAccountsInstruction::Instruction9(args) => {
				msg!("Instruction: Instruction9");
				Self::process_instruction9(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAccountsInstruction::Instruction10(args) => {
				msg!("Instruction: Instruction10");
				Self::process_instruction10(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAccountsInstruction::Instruction11(args) => {
				msg!("Instruction: Instruction11");
				Self::process_instruction11(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAccountsInstruction::Instruction12(args) => {
				msg!("Instruction: Instruction12");
				Self::process_instruction12(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_u8_type,
					args.account_seed_u16_type,
					args.account_seed_u32_type,
					args.account_seed_u64_type,
					args.account_seed_i8_type,
					args.account_seed_i16_type,
					args.account_seed_i32_type,
					args.account_seed_i64_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAccountsInstruction::Instruction13(args) => {
				msg!("Instruction: Instruction13");
				Self::process_instruction13(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAccountsInstruction::Instruction14(args) => {
				msg!("Instruction: Instruction14");
				Self::process_instruction14(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAccountsInstruction::Instruction15(args) => {
				msg!("Instruction: Instruction15");
				Self::process_instruction15(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAccountsInstruction::Instruction16(args) => {
				msg!("Instruction: Instruction16");
				Self::process_instruction16(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_u8_type,
					args.account_seed_u16_type,
					args.account_seed_u32_type,
					args.account_seed_u64_type,
					args.account_seed_i8_type,
					args.account_seed_i16_type,
					args.account_seed_i32_type,
					args.account_seed_i64_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAccountsInstruction::Instruction17 => {
				msg!("Instruction: Instruction17");
				Self::process_instruction17(program_id, accounts)
			}
			ValidateAccountsInstruction::SafeInstruction17 => {
				msg!("Instruction: SafeInstruction17");
				Self::process_safe_instruction17(program_id, accounts)
			}
			ValidateAccountsInstruction::Instruction18 => {
				msg!("Instruction: Instruction18");
				Self::process_instruction18(program_id, accounts)
			}
			ValidateAccountsInstruction::Instruction19(args) => {
				msg!("Instruction: Instruction19");
				Self::process_instruction19(
					program_id,
					accounts, 
					args.account_seed_dynamic,
				)
			}
			ValidateAccountsInstruction::Instruction20(args) => {
				msg!("Instruction: Instruction20");
				Self::process_instruction20(
					program_id,
					accounts, 
					args.account_seed_u8_type,
					args.account_seed_u16_type,
					args.account_seed_u32_type,
					args.account_seed_u64_type,
					args.account_seed_i8_type,
					args.account_seed_i16_type,
					args.account_seed_i32_type,
					args.account_seed_i64_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
        }
    }

/// Test `mut` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction1(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction1::instruction1(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `mut` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction2(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction2::instruction2(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `mut` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn process_instruction3(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_dynamic: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction3::instruction3(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `mut` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
/// - account_seed_u16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
/// - account_seed_u32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
/// - account_seed_u64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
/// - account_seed_i8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
/// - account_seed_i16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
/// - account_seed_i32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
/// - account_seed_i64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
	pub fn process_instruction4(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_u8_type: u8,
		account_seed_u16_type: u16,
		account_seed_u32_type: u32,
		account_seed_u64_type: u64,
		account_seed_i8_type: i8,
		account_seed_i16_type: i16,
		account_seed_i32_type: i32,
		account_seed_i64_type: i64,
		account_seed_string_type: String,
		account_seed_pubkey_type: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction4::instruction4(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `non-mut` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
	pub fn process_instruction5(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = Account::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction5::instruction5(
			program_id,
			&account,
		)?;
		
		Ok(())
	}

/// Test `non-mut` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
	pub fn process_instruction6(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction6::instruction6(
			program_id,
			&account,
		)?;
		
		Ok(())
	}

/// Test `non-mut` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn process_instruction7(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		account_seed_dynamic: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction7::instruction7(
			program_id,
			&account,
		)?;


		
		Ok(())
	}

/// Test `non-mut` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
///
/// Data:
/// - account_seed_u8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
/// - account_seed_u16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
/// - account_seed_u32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
/// - account_seed_u64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
/// - account_seed_i8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
/// - account_seed_i16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
/// - account_seed_i32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
/// - account_seed_i64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
	pub fn process_instruction8(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		account_seed_u8_type: u8,
		account_seed_u16_type: u16,
		account_seed_u32_type: u32,
		account_seed_u64_type: u64,
		account_seed_i8_type: i8,
		account_seed_i16_type: i16,
		account_seed_i32_type: i32,
		account_seed_i64_type: i64,
		account_seed_string_type: String,
		account_seed_pubkey_type: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction8::instruction8(
			program_id,
			&account,
		)?;


		
		Ok(())
	}

/// Test `init` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction9(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 1;
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
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction9::instruction9(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `init` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction10(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 1;
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
			&[&[b"Static Value", &[account_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction10::instruction10(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `init` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn process_instruction11(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_dynamic: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 1;
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
			&[&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref(), &[account_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction11::instruction11(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `init` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
/// - account_seed_u16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
/// - account_seed_u32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
/// - account_seed_u64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
/// - account_seed_i8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
/// - account_seed_i16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
/// - account_seed_i32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
/// - account_seed_i64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
	pub fn process_instruction12(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_u8_type: u8,
		account_seed_u16_type: u16,
		account_seed_u32_type: u32,
		account_seed_u64_type: u64,
		account_seed_i8_type: i8,
		account_seed_i16_type: i16,
		account_seed_i32_type: i32,
		account_seed_i64_type: i64,
		account_seed_string_type: String,
		account_seed_pubkey_type: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 1;
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
			&[&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref(), &[account_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction12::instruction12(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `init_if_needed` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction13(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		if account_info.lamports() == 0 && *account_info.owner == system_program::id() {
			let space: usize = 1;
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
		}


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction13::instruction13(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `init_if_needed` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction14(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		if account_info.lamports() == 0 && *account_info.owner == system_program::id() {
			let space: usize = 1;
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
				&[&[b"Static Value", &[account_bump]]],
			)?;
		}


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction14::instruction14(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `init_if_needed` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn process_instruction15(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_dynamic: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		if account_info.lamports() == 0 && *account_info.owner == system_program::id() {
			let space: usize = 1;
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
				&[&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref(), &[account_bump]]],
			)?;
		}


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction15::instruction15(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `init_if_needed` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
/// - account_seed_u16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
/// - account_seed_u32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
/// - account_seed_u64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
/// - account_seed_i8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
/// - account_seed_i16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
/// - account_seed_i32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
/// - account_seed_i64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
	pub fn process_instruction16(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_u8_type: u8,
		account_seed_u16_type: u16,
		account_seed_u32_type: u32,
		account_seed_u64_type: u64,
		account_seed_i8_type: i8,
		account_seed_i16_type: i16,
		account_seed_i32_type: i32,
		account_seed_i64_type: i64,
		account_seed_string_type: String,
		account_seed_pubkey_type: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		if account_info.lamports() == 0 && *account_info.owner == system_program::id() {
			let space: usize = 1;
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
				&[&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref(), &[account_bump]]],
			)?;
		}


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction16::instruction16(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `close_uncheck` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
	pub fn process_instruction17(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction17::instruction17(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAccountsError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}

/// Test `close` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
	pub fn process_safe_instruction17(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		safe_instruction17::safe_instruction17(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAccountsError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}

/// Test `close` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
	pub fn process_instruction18(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction18::instruction18(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAccountsError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}

/// Test `close` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn process_instruction19(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		account_seed_dynamic: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction19::instruction19(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAccountsError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}


		
		Ok(())
	}

/// Test `close` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - account_seed_u8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
/// - account_seed_u16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
/// - account_seed_u32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
/// - account_seed_u64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
/// - account_seed_i8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
/// - account_seed_i16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
/// - account_seed_i32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
/// - account_seed_i64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
	pub fn process_instruction20(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		account_seed_u8_type: u8,
		account_seed_u16_type: u16,
		account_seed_u32_type: u32,
		account_seed_u64_type: u64,
		account_seed_i8_type: i8,
		account_seed_i16_type: i16,
		account_seed_i32_type: i32,
		account_seed_i64_type: i64,
		account_seed_string_type: String,
		account_seed_pubkey_type: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAccountsError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAccountsError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAccountsError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAccountsError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction20::instruction20(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAccountsError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}


		
		Ok(())
	}
}