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
use crate::generated::errors::ValidateAdvancedCasesError;
use crate::generated::instructions::ValidateAdvancedCasesInstruction;

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
        let instruction = ValidateAdvancedCasesInstruction::unpack(data)?;

        match instruction {
			ValidateAdvancedCasesInstruction::Instruction0OnlyMethodWithName => {
				msg!("Instruction: Instruction0OnlyMethodWithName");
				Self::process_instruction0_only_method_with_name(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction1(args) => {
				msg!("Instruction: Instruction1");
				Self::process_instruction1(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction2(args) => {
				msg!("Instruction: Instruction2");
				Self::process_instruction2(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction3(args) => {
				msg!("Instruction: Instruction3");
				Self::process_instruction3(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction4(args) => {
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
			ValidateAdvancedCasesInstruction::Instruction5 => {
				msg!("Instruction: Instruction5");
				Self::process_instruction5(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction6 => {
				msg!("Instruction: Instruction6");
				Self::process_instruction6(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction7(args) => {
				msg!("Instruction: Instruction7");
				Self::process_instruction7(
					program_id,
					accounts, 
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction8(args) => {
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
			ValidateAdvancedCasesInstruction::Instruction9(args) => {
				msg!("Instruction: Instruction9");
				Self::process_instruction9(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction10(args) => {
				msg!("Instruction: Instruction10");
				Self::process_instruction10(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction11(args) => {
				msg!("Instruction: Instruction11");
				Self::process_instruction11(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction12(args) => {
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
			ValidateAdvancedCasesInstruction::Instruction13(args) => {
				msg!("Instruction: Instruction13");
				Self::process_instruction13(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction14(args) => {
				msg!("Instruction: Instruction14");
				Self::process_instruction14(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction15(args) => {
				msg!("Instruction: Instruction15");
				Self::process_instruction15(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction16(args) => {
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
			ValidateAdvancedCasesInstruction::Instruction17 => {
				msg!("Instruction: Instruction17");
				Self::process_instruction17(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::SafeInstruction17 => {
				msg!("Instruction: SafeInstruction17");
				Self::process_safe_instruction17(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction18 => {
				msg!("Instruction: Instruction18");
				Self::process_instruction18(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction19(args) => {
				msg!("Instruction: Instruction19");
				Self::process_instruction19(
					program_id,
					accounts, 
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction20(args) => {
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
			ValidateAdvancedCasesInstruction::Instruction21(args) => {
				msg!("Instruction: Instruction21");
				Self::process_instruction21(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction22(args) => {
				msg!("Instruction: Instruction22");
				Self::process_instruction22(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction23(args) => {
				msg!("Instruction: Instruction23");
				Self::process_instruction23(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction24(args) => {
				msg!("Instruction: Instruction24");
				Self::process_instruction24(
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
			ValidateAdvancedCasesInstruction::Instruction25(args) => {
				msg!("Instruction: Instruction25");
				Self::process_instruction25(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction26(args) => {
				msg!("Instruction: Instruction26");
				Self::process_instruction26(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction27(args) => {
				msg!("Instruction: Instruction27");
				Self::process_instruction27(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction28(args) => {
				msg!("Instruction: Instruction28");
				Self::process_instruction28(
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
			ValidateAdvancedCasesInstruction::Instruction29 => {
				msg!("Instruction: Instruction29");
				Self::process_instruction29(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::SafeInstruction29 => {
				msg!("Instruction: SafeInstruction29");
				Self::process_safe_instruction29(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction30 => {
				msg!("Instruction: Instruction30");
				Self::process_instruction30(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction31(args) => {
				msg!("Instruction: Instruction31");
				Self::process_instruction31(
					program_id,
					accounts, 
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction32(args) => {
				msg!("Instruction: Instruction32");
				Self::process_instruction32(
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
			ValidateAdvancedCasesInstruction::Instruction33(args) => {
				msg!("Instruction: Instruction33");
				Self::process_instruction33(
					program_id,
					accounts, 
					args.u8_type,
					args.u16_type,
					args.u32_type,
					args.u64_type,
					args.i8_type,
					args.i16_type,
					args.i32_type,
					args.i64_type,
					args.string_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction34(args) => {
				msg!("Instruction: Instruction34");
				Self::process_instruction34(
					program_id,
					accounts, 
					args.u8_type,
					args.u16_type,
					args.u32_type,
					args.u64_type,
					args.i8_type,
					args.i16_type,
					args.i32_type,
					args.i64_type,
					args.string_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction35(args) => {
				msg!("Instruction: Instruction35");
				Self::process_instruction35(
					program_id,
					accounts, 
					args.u8_type,
					args.u16_type,
					args.u32_type,
					args.u64_type,
					args.i8_type,
					args.i16_type,
					args.i32_type,
					args.i64_type,
					args.string_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction36(args) => {
				msg!("Instruction: Instruction36");
				Self::process_instruction36(
					program_id,
					accounts, 
					args.u8_type,
					args.u16_type,
					args.u32_type,
					args.u64_type,
					args.i8_type,
					args.i16_type,
					args.i32_type,
					args.i64_type,
					args.string_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction37(args) => {
				msg!("Instruction: Instruction37");
				Self::process_instruction37(
					program_id,
					accounts, 
					args.u8_type,
					args.u16_type,
					args.u32_type,
					args.u64_type,
					args.i8_type,
					args.i16_type,
					args.i32_type,
					args.i64_type,
					args.string_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction38 => {
				msg!("Instruction: Instruction38");
				Self::process_instruction38(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction39 => {
				msg!("Instruction: Instruction39");
				Self::process_instruction39(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction40 => {
				msg!("Instruction: Instruction40");
				Self::process_instruction40(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction41 => {
				msg!("Instruction: Instruction41");
				Self::process_instruction41(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction42 => {
				msg!("Instruction: Instruction42");
				Self::process_instruction42(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::SafeInstruction42 => {
				msg!("Instruction: SafeInstruction42");
				Self::process_safe_instruction42(program_id, accounts)
			}
        }
    }

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
	pub fn process_instruction0_only_method_with_name(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}



		// Calling STUB
		instruction0_only_method_with_name::instruction0_only_method_with_name(
			program_id,

		)?;
		
		Ok(())
	}

/// Test `mut` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `mut` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `mut` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `non-mut` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
	pub fn process_instruction5(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `non-mut` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
	pub fn process_instruction6(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `non-mut` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `non-mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `init` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
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
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `init` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
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
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `init` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
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
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
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
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `init_if_needed` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
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
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `init_if_needed` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
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
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
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
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
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
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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

/// Test `close_unsafe` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
	pub fn process_instruction17(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}

/// Test `close` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
	pub fn process_safe_instruction17(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}

/// Test `close` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
	pub fn process_instruction18(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}

/// Test `close` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}


		
		Ok(())
	}

/// Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
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
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}


		
		Ok(())
	}

/// Test `rent-payer` using `init` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction21(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 1;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke(
			&create_account(
				&signer_1_info.key,
				&account_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[signer_1_info.clone(), account_info.clone()],
		)?;


		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction21::instruction21(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `rent-payer` using `init` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction22(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 1;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&signer_2_info.key,
				&account_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[signer_2_info.clone(), account_info.clone()],
			&[&[b"Static Value", &[account_bump]]],
		)?;


		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction22::instruction22(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `rent-payer` using `init` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn process_instruction23(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_dynamic: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 1;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&signer_3_info.key,
				&account_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[signer_3_info.clone(), account_info.clone()],
			&[&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref(), &[account_bump]]],
		)?;


		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction23::instruction23(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `rent-payer` using `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
	pub fn process_instruction24(
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 1;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&signer_3_info.key,
				&account_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[signer_3_info.clone(), account_info.clone()],
			&[&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref(), &[account_bump]]],
		)?;


		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction24::instruction24(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `rent-payer` using `init_if_needed` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction25(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		if account_info.lamports() == 0 && *account_info.owner == system_program::id() {
			let space: usize = 1;
			let rent = Rent::get()?;
			let rent_minimum_balance = rent.minimum_balance(space);

			invoke(
				&create_account(
					&signer_1_info.key,
					&account_info.key,
					rent_minimum_balance,
					space as u64,
					program_id,
				),
				&[signer_1_info.clone(), account_info.clone()],
			)?;
		}


		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction25::instruction25(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction26(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		if account_info.lamports() == 0 && *account_info.owner == system_program::id() {
			let space: usize = 1;
			let rent = Rent::get()?;
			let rent_minimum_balance = rent.minimum_balance(space);

			invoke_signed(
				&create_account(
					&signer_2_info.key,
					&account_info.key,
					rent_minimum_balance,
					space as u64,
					program_id,
				),
				&[signer_2_info.clone(), account_info.clone()],
				&[&[b"Static Value", &[account_bump]]],
			)?;
		}


		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction26::instruction26(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `rent-payer` using `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn process_instruction27(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_dynamic: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		if account_info.lamports() == 0 && *account_info.owner == system_program::id() {
			let space: usize = 1;
			let rent = Rent::get()?;
			let rent_minimum_balance = rent.minimum_balance(space);

			invoke_signed(
				&create_account(
					&signer_3_info.key,
					&account_info.key,
					rent_minimum_balance,
					space as u64,
					program_id,
				),
				&[signer_3_info.clone(), account_info.clone()],
				&[&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref(), &[account_bump]]],
			)?;
		}


		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction27::instruction27(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
	pub fn process_instruction28(
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		if account_info.lamports() == 0 && *account_info.owner == system_program::id() {
			let space: usize = 1;
			let rent = Rent::get()?;
			let rent_minimum_balance = rent.minimum_balance(space);

			invoke_signed(
				&create_account(
					&signer_3_info.key,
					&account_info.key,
					rent_minimum_balance,
					space as u64,
					program_id,
				),
				&[signer_3_info.clone(), account_info.clone()],
				&[&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref(), &[account_bump]]],
			)?;
		}


		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction28::instruction28(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `rent-receiver` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
	pub fn process_instruction29(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction29::instruction29(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**signer_1_info.lamports.borrow_mut() = signer_1_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}

/// Test `rent-receiver` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
	pub fn process_safe_instruction29(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		safe_instruction29::safe_instruction29(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**signer_1_info.lamports.borrow_mut() = signer_1_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}

/// Test `rent-receiver` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
	pub fn process_instruction30(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction30::instruction30(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**signer_2_info.lamports.borrow_mut() = signer_2_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}

/// Test `rent-receiver` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn process_instruction31(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		account_seed_dynamic: u8,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction31::instruction31(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**signer_3_info.lamports.borrow_mut() = signer_3_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}


		
		Ok(())
	}

/// Test `rent-receiver` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
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
	pub fn process_instruction32(
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
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[account_seed_u8_type.to_le_bytes().as_ref(), account_seed_u16_type.to_le_bytes().as_ref(), account_seed_u32_type.to_le_bytes().as_ref(), account_seed_u64_type.to_le_bytes().as_ref(), account_seed_i8_type.to_le_bytes().as_ref(), account_seed_i16_type.to_le_bytes().as_ref(), account_seed_i32_type.to_le_bytes().as_ref(), account_seed_i64_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction32::instruction32(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**signer_3_info.lamports.borrow_mut() = signer_3_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}


		
		Ok(())
	}

/// Test `non-mut` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - string_type: [String] 
	pub fn process_instruction33(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		string_type: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[u8_type.to_le_bytes().as_ref(), u16_type.to_le_bytes().as_ref(), u32_type.to_le_bytes().as_ref(), u64_type.to_le_bytes().as_ref(), i8_type.to_le_bytes().as_ref(), i16_type.to_le_bytes().as_ref(), i32_type.to_le_bytes().as_ref(), i64_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction33::instruction33(
			program_id,
			&account,
			u8_type,
			u16_type,
			u32_type,
			u64_type,
			i8_type,
			i16_type,
			i32_type,
			i64_type,
			string_type,
		)?;


		
		Ok(())
	}

/// Test `mut` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - string_type: [String] 
	pub fn process_instruction34(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		string_type: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[u8_type.to_le_bytes().as_ref(), u16_type.to_le_bytes().as_ref(), u32_type.to_le_bytes().as_ref(), u64_type.to_le_bytes().as_ref(), i8_type.to_le_bytes().as_ref(), i16_type.to_le_bytes().as_ref(), i32_type.to_le_bytes().as_ref(), i64_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction34::instruction34(
			program_id,
			account,
			u8_type,
			u16_type,
			u32_type,
			u64_type,
			i8_type,
			i16_type,
			i32_type,
			i64_type,
			string_type,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `init` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - string_type: [String] 
	pub fn process_instruction35(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		string_type: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[u8_type.to_le_bytes().as_ref(), u16_type.to_le_bytes().as_ref(), u32_type.to_le_bytes().as_ref(), u64_type.to_le_bytes().as_ref(), i8_type.to_le_bytes().as_ref(), i16_type.to_le_bytes().as_ref(), i32_type.to_le_bytes().as_ref(), i64_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
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
			&[&[u8_type.to_le_bytes().as_ref(), u16_type.to_le_bytes().as_ref(), u32_type.to_le_bytes().as_ref(), u64_type.to_le_bytes().as_ref(), i8_type.to_le_bytes().as_ref(), i16_type.to_le_bytes().as_ref(), i32_type.to_le_bytes().as_ref(), i64_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref(), &[account_bump]]],
		)?;


		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction35::instruction35(
			program_id,
			account,
			u8_type,
			u16_type,
			u32_type,
			u64_type,
			i8_type,
			i16_type,
			i32_type,
			i64_type,
			string_type,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `init_if_needed` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - string_type: [String] 
	pub fn process_instruction36(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		string_type: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[u8_type.to_le_bytes().as_ref(), u16_type.to_le_bytes().as_ref(), u32_type.to_le_bytes().as_ref(), u64_type.to_le_bytes().as_ref(), i8_type.to_le_bytes().as_ref(), i16_type.to_le_bytes().as_ref(), i32_type.to_le_bytes().as_ref(), i64_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
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
				&[&[u8_type.to_le_bytes().as_ref(), u16_type.to_le_bytes().as_ref(), u32_type.to_le_bytes().as_ref(), u64_type.to_le_bytes().as_ref(), i8_type.to_le_bytes().as_ref(), i16_type.to_le_bytes().as_ref(), i32_type.to_le_bytes().as_ref(), i64_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref(), &[account_bump]]],
			)?;
		}


		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction36::instruction36(
			program_id,
			account,
			u8_type,
			u16_type,
			u32_type,
			u64_type,
			i8_type,
			i16_type,
			i32_type,
			i64_type,
			string_type,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `close` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - string_type: [String] 
	pub fn process_instruction37(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		string_type: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[u8_type.to_le_bytes().as_ref(), u16_type.to_le_bytes().as_ref(), u32_type.to_le_bytes().as_ref(), u64_type.to_le_bytes().as_ref(), i8_type.to_le_bytes().as_ref(), i16_type.to_le_bytes().as_ref(), i32_type.to_le_bytes().as_ref(), i64_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}



		// Security Checks
		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<State>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction37::instruction37(
			program_id,
			account,
			u8_type,
			u16_type,
			u32_type,
			u64_type,
			i8_type,
			i16_type,
			i32_type,
			i64_type,
			string_type,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;

		// Close Accounts
		if account_info.lamports() == 0 {
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(account_info.lamports()).unwrap();
		**account_info.lamports.borrow_mut() = 0;

		let mut account_data = account_info.try_borrow_mut_data()?;

		for byte in account_data.deref_mut().iter_mut() {
			*byte = 0;
		}


		
		Ok(())
	}

/// Test `non-mut` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[signer]` signer_1: [State] 
	pub fn process_instruction38(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<State>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction38::instruction38(
			program_id,
			&signer_1,
		)?;
		
		Ok(())
	}

/// Test `mut` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
	pub fn process_instruction39(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = &mut Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<State>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction39::instruction39(
			program_id,
			signer_1,
		)?;

		// Accounts Serialization
		signer_1.data.serialize(&mut &mut signer_1_info.data.borrow_mut()[..])?;		
		Ok(())
	}

/// Test `init` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn process_instruction40(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 1;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke(
			&create_account(
				&fee_payer_info.key,
				&signer_1_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), signer_1_info.clone()],
		)?;


		// Security Checks
		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = &mut Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<State>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction40::instruction40(
			program_id,
			signer_1,
		)?;

		// Accounts Serialization
		signer_1.data.serialize(&mut &mut signer_1_info.data.borrow_mut()[..])?;		
		Ok(())
	}

/// Test `init_if_needed` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn process_instruction41(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		if signer_1_info.lamports() == 0 && *signer_1_info.owner == system_program::id() {
			let space: usize = 1;
			let rent = Rent::get()?;
			let rent_minimum_balance = rent.minimum_balance(space);

			invoke(
				&create_account(
					&fee_payer_info.key,
					&signer_1_info.key,
					rent_minimum_balance,
					space as u64,
					program_id,
				),
				&[fee_payer_info.clone(), signer_1_info.clone()],
			)?;
		}


		// Security Checks
		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = &mut Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<State>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction41::instruction41(
			program_id,
			signer_1,
		)?;

		// Accounts Serialization
		signer_1.data.serialize(&mut &mut signer_1_info.data.borrow_mut()[..])?;		
		Ok(())
	}

/// Test `close` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
	pub fn process_instruction42(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = &mut Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<State>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction42::instruction42(
			program_id,
			signer_1,
		)?;

		// Accounts Serialization
		signer_1.data.serialize(&mut &mut signer_1_info.data.borrow_mut()[..])?;

		// Close Accounts
		if signer_1_info.lamports() == 0 {
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(signer_1_info.lamports()).unwrap();
		**signer_1_info.lamports.borrow_mut() = 0;

		let mut signer_1_data = signer_1_info.try_borrow_mut_data()?;

		for byte in signer_1_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}

/// Test `close_uncheck` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
	pub fn process_safe_instruction42(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let signer_2_info = next_account_info(account_info_iter)?;
		let signer_3_info = next_account_info(account_info_iter)?;
		let signer_1_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_2_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_3_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}

		if signer_1_info.is_signer != true {
			return Err(ValidateAdvancedCasesError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != 1usize {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = &mut Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<State>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		safe_instruction42::safe_instruction42(
			program_id,
			signer_1,
		)?;

		// Accounts Serialization
		signer_1.data.serialize(&mut &mut signer_1_info.data.borrow_mut()[..])?;

		// Close Accounts
		if signer_1_info.lamports() == 0 {
			return Err(ValidateAdvancedCasesError::AccountAlreadyClosed.into());
		}

		**fee_payer_info.lamports.borrow_mut() = fee_payer_info.lamports().checked_add(signer_1_info.lamports()).unwrap();
		**signer_1_info.lamports.borrow_mut() = 0;

		let mut signer_1_data = signer_1_info.try_borrow_mut_data()?;

		for byte in signer_1_data.deref_mut().iter_mut() {
			*byte = 0;
		}
		
		Ok(())
	}
}