// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use std::str::FromStr;
use borsh::BorshSerialize;
use solana_program::account_info::{AccountInfo, next_account_info, next_account_infos};
use solana_program::borsh0_10::try_from_slice_unchecked;
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
	NonPdaaccountWithOneField,
	PdaaccountWithOneStaticSeedAndOneField,
	PdaaccountWithOneStaticSeedAndOneFieldTwo,
	PdaaccountWithOneStaticAndDynamicSeedAndOneField,
	PdaaccountVerifiesSeedsTypes,
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
				Self::process_instruction_0_only_method_with_name(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction1(args) => {
				msg!("Instruction: Instruction1");
				Self::process_instruction_1(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction2(args) => {
				msg!("Instruction: Instruction2");
				Self::process_instruction_2(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction3(args) => {
				msg!("Instruction: Instruction3");
				Self::process_instruction_3(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction4(args) => {
				msg!("Instruction: Instruction4");
				Self::process_instruction_4(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_u_8_type,
					args.account_seed_u_16_type,
					args.account_seed_u_32_type,
					args.account_seed_i_8_type,
					args.account_seed_i_16_type,
					args.account_seed_i_32_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction5 => {
				msg!("Instruction: Instruction5");
				Self::process_instruction_5(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction6 => {
				msg!("Instruction: Instruction6");
				Self::process_instruction_6(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction7(args) => {
				msg!("Instruction: Instruction7");
				Self::process_instruction_7(
					program_id,
					accounts, 
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction8(args) => {
				msg!("Instruction: Instruction8");
				Self::process_instruction_8(
					program_id,
					accounts, 
					args.account_seed_u_8_type,
					args.account_seed_u_16_type,
					args.account_seed_u_32_type,
					args.account_seed_i_8_type,
					args.account_seed_i_16_type,
					args.account_seed_i_32_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction9(args) => {
				msg!("Instruction: Instruction9");
				Self::process_instruction_9(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction10(args) => {
				msg!("Instruction: Instruction10");
				Self::process_instruction_10(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction11(args) => {
				msg!("Instruction: Instruction11");
				Self::process_instruction_11(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction12(args) => {
				msg!("Instruction: Instruction12");
				Self::process_instruction_12(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_u_8_type,
					args.account_seed_u_16_type,
					args.account_seed_u_32_type,
					args.account_seed_i_8_type,
					args.account_seed_i_16_type,
					args.account_seed_i_32_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction13(args) => {
				msg!("Instruction: Instruction13");
				Self::process_instruction_13(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction14(args) => {
				msg!("Instruction: Instruction14");
				Self::process_instruction_14(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction15(args) => {
				msg!("Instruction: Instruction15");
				Self::process_instruction_15(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction16(args) => {
				msg!("Instruction: Instruction16");
				Self::process_instruction_16(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_u_8_type,
					args.account_seed_u_16_type,
					args.account_seed_u_32_type,
					args.account_seed_i_8_type,
					args.account_seed_i_16_type,
					args.account_seed_i_32_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction17 => {
				msg!("Instruction: Instruction17");
				Self::process_instruction_17(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction18 => {
				msg!("Instruction: Instruction18");
				Self::process_instruction_18(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction19(args) => {
				msg!("Instruction: Instruction19");
				Self::process_instruction_19(
					program_id,
					accounts, 
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction20(args) => {
				msg!("Instruction: Instruction20");
				Self::process_instruction_20(
					program_id,
					accounts, 
					args.account_seed_u_8_type,
					args.account_seed_u_16_type,
					args.account_seed_u_32_type,
					args.account_seed_i_8_type,
					args.account_seed_i_16_type,
					args.account_seed_i_32_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction21(args) => {
				msg!("Instruction: Instruction21");
				Self::process_instruction_21(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction22(args) => {
				msg!("Instruction: Instruction22");
				Self::process_instruction_22(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction23(args) => {
				msg!("Instruction: Instruction23");
				Self::process_instruction_23(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction24(args) => {
				msg!("Instruction: Instruction24");
				Self::process_instruction_24(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_u_8_type,
					args.account_seed_u_16_type,
					args.account_seed_u_32_type,
					args.account_seed_i_8_type,
					args.account_seed_i_16_type,
					args.account_seed_i_32_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction25(args) => {
				msg!("Instruction: Instruction25");
				Self::process_instruction_25(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction26(args) => {
				msg!("Instruction: Instruction26");
				Self::process_instruction_26(
					program_id,
					accounts, 
					args.input_1,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction27(args) => {
				msg!("Instruction: Instruction27");
				Self::process_instruction_27(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction28(args) => {
				msg!("Instruction: Instruction28");
				Self::process_instruction_28(
					program_id,
					accounts, 
					args.input_1,
					args.account_seed_u_8_type,
					args.account_seed_u_16_type,
					args.account_seed_u_32_type,
					args.account_seed_i_8_type,
					args.account_seed_i_16_type,
					args.account_seed_i_32_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction29 => {
				msg!("Instruction: Instruction29");
				Self::process_instruction_29(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction30 => {
				msg!("Instruction: Instruction30");
				Self::process_instruction_30(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction31(args) => {
				msg!("Instruction: Instruction31");
				Self::process_instruction_31(
					program_id,
					accounts, 
					args.account_seed_dynamic,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction32(args) => {
				msg!("Instruction: Instruction32");
				Self::process_instruction_32(
					program_id,
					accounts, 
					args.account_seed_u_8_type,
					args.account_seed_u_16_type,
					args.account_seed_u_32_type,
					args.account_seed_i_8_type,
					args.account_seed_i_16_type,
					args.account_seed_i_32_type,
					args.account_seed_string_type,
					args.account_seed_pubkey_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction33(args) => {
				msg!("Instruction: Instruction33");
				Self::process_instruction_33(
					program_id,
					accounts, 
					args.u_8_type,
					args.u_16_type,
					args.u_32_type,
					args.i_8_type,
					args.i_16_type,
					args.i_32_type,
					args.string_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction34(args) => {
				msg!("Instruction: Instruction34");
				Self::process_instruction_34(
					program_id,
					accounts, 
					args.u_8_type,
					args.u_16_type,
					args.u_32_type,
					args.i_8_type,
					args.i_16_type,
					args.i_32_type,
					args.string_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction35(args) => {
				msg!("Instruction: Instruction35");
				Self::process_instruction_35(
					program_id,
					accounts, 
					args.u_8_type,
					args.u_16_type,
					args.u_32_type,
					args.i_8_type,
					args.i_16_type,
					args.i_32_type,
					args.string_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction36(args) => {
				msg!("Instruction: Instruction36");
				Self::process_instruction_36(
					program_id,
					accounts, 
					args.u_8_type,
					args.u_16_type,
					args.u_32_type,
					args.i_8_type,
					args.i_16_type,
					args.i_32_type,
					args.string_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction37(args) => {
				msg!("Instruction: Instruction37");
				Self::process_instruction_37(
					program_id,
					accounts, 
					args.u_8_type,
					args.u_16_type,
					args.u_32_type,
					args.i_8_type,
					args.i_16_type,
					args.i_32_type,
					args.string_type,
				)
			}
			ValidateAdvancedCasesInstruction::Instruction38 => {
				msg!("Instruction: Instruction38");
				Self::process_instruction_38(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction39 => {
				msg!("Instruction: Instruction39");
				Self::process_instruction_39(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction40 => {
				msg!("Instruction: Instruction40");
				Self::process_instruction_40(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction41 => {
				msg!("Instruction: Instruction41");
				Self::process_instruction_41(program_id, accounts)
			}
			ValidateAdvancedCasesInstruction::Instruction42 => {
				msg!("Instruction: Instruction42");
				Self::process_instruction_42(program_id, accounts)
			}
        }
    }

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
	pub fn process_instruction_0_only_method_with_name(
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
		instruction_0_only_method_with_name::instruction_0_only_method_with_name(
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
/// 4. `[writable]` account: [NonPdaaccountWithOneField] 
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction_1(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_1::instruction_1(
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
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction_2(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_2::instruction_2(
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
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	pub fn process_instruction_3(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticAndDynamicSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_3::instruction_3(
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
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	pub fn process_instruction_4(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_u_8_type: u8,
		account_seed_u_16_type: u16,
		account_seed_u_32_type: u32,
		account_seed_i_8_type: i8,
		account_seed_i_16_type: i16,
		account_seed_i_32_type: i32,
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
			&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_4::instruction_4(
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
/// 4. `[]` account: [NonPdaaccountWithOneField] 
	pub fn process_instruction_5(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = Account::new(
			&account_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_5::instruction_5(
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
/// 4. `[]` account: [PdaaccountWithOneStaticSeedAndOneField] 
	pub fn process_instruction_6(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_6::instruction_6(
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
/// 4. `[]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	pub fn process_instruction_7(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticAndDynamicSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_7::instruction_7(
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
/// 4. `[]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	pub fn process_instruction_8(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		account_seed_u_8_type: u8,
		account_seed_u_16_type: u16,
		account_seed_u_32_type: u32,
		account_seed_i_8_type: i8,
		account_seed_i_16_type: i16,
		account_seed_i_32_type: i32,
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
			&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_8::instruction_8(
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
/// 4. `[writable, signer]` account: [NonPdaaccountWithOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction_9(
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
		let space = NonPdaaccountWithOneField::LEN;
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
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_9::instruction_9(
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
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction_10(
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
		let space = PdaaccountWithOneStaticSeedAndOneField::LEN;
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
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_10::instruction_10(
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
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	pub fn process_instruction_11(
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
		let space = PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN;
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
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticAndDynamicSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_11::instruction_11(
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
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	pub fn process_instruction_12(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_u_8_type: u8,
		account_seed_u_16_type: u16,
		account_seed_u_32_type: u32,
		account_seed_i_8_type: i8,
		account_seed_i_16_type: i16,
		account_seed_i_32_type: i32,
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
			&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
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
		let space = PdaaccountVerifiesSeedsTypes::LEN;
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
			&[&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref(), &[account_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_12::instruction_12(
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
/// 4. `[writable, signer]` account: [NonPdaaccountWithOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction_13(
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
			let space = NonPdaaccountWithOneField::LEN;
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
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_13::instruction_13(
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
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction_14(
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
			let space = PdaaccountWithOneStaticSeedAndOneField::LEN;
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
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_14::instruction_14(
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
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	pub fn process_instruction_15(
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
			let space = PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN;
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
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticAndDynamicSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_15::instruction_15(
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
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	pub fn process_instruction_16(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_u_8_type: u8,
		account_seed_u_16_type: u16,
		account_seed_u_32_type: u32,
		account_seed_i_8_type: i8,
		account_seed_i_16_type: i16,
		account_seed_i_32_type: i32,
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
			&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
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
			let space = PdaaccountVerifiesSeedsTypes::LEN;
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
				&[&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref(), &[account_bump]]],
			)?;
		}


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_16::instruction_16(
			program_id,
			account,
			input_1,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `close` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [NonPdaaccountWithOneField] 
	pub fn process_instruction_17(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_17::instruction_17(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;		
		Ok(())
	}

/// Test `close` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
	pub fn process_instruction_18(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_18::instruction_18(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;		
		Ok(())
	}

/// Test `close` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	pub fn process_instruction_19(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticAndDynamicSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_19::instruction_19(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	pub fn process_instruction_20(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		account_seed_u_8_type: u8,
		account_seed_u_16_type: u16,
		account_seed_u_32_type: u32,
		account_seed_i_8_type: i8,
		account_seed_i_16_type: i16,
		account_seed_i_32_type: i32,
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
			&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_20::instruction_20(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `rent-payer` using `init` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [NonPdaaccountWithOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction_21(
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
		let space = NonPdaaccountWithOneField::LEN;
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_21::instruction_21(
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
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneFieldTwo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction_22(
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
			&[b"Static Value 2"],
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
		let space = PdaaccountWithOneStaticSeedAndOneFieldTwo::LEN;
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
			&[&[b"Static Value 2", &[account_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticSeedAndOneFieldTwo::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticSeedAndOneFieldTwo>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_22::instruction_22(
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
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	pub fn process_instruction_23(
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
		let space = PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN;
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticAndDynamicSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_23::instruction_23(
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
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	pub fn process_instruction_24(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_u_8_type: u8,
		account_seed_u_16_type: u16,
		account_seed_u_32_type: u32,
		account_seed_i_8_type: i8,
		account_seed_i_16_type: i16,
		account_seed_i_32_type: i32,
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
			&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
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
		let space = PdaaccountVerifiesSeedsTypes::LEN;
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
			&[&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref(), &[account_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_24::instruction_24(
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
/// 4. `[writable, signer]` account: [NonPdaaccountWithOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction_25(
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
			let space = NonPdaaccountWithOneField::LEN;
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_25::instruction_25(
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
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn process_instruction_26(
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
			let space = PdaaccountWithOneStaticSeedAndOneField::LEN;
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_26::instruction_26(
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
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	pub fn process_instruction_27(
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
			let space = PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN;
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticAndDynamicSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_27::instruction_27(
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
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	pub fn process_instruction_28(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		input_1: u8,
		account_seed_u_8_type: u8,
		account_seed_u_16_type: u16,
		account_seed_u_32_type: u32,
		account_seed_i_8_type: i8,
		account_seed_i_16_type: i16,
		account_seed_i_32_type: i32,
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
			&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
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
			let space = PdaaccountVerifiesSeedsTypes::LEN;
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
				&[&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref(), &[account_bump]]],
			)?;
		}


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_28::instruction_28(
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
/// 4. `[writable]` account: [NonPdaaccountWithOneField] 
	pub fn process_instruction_29(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_29::instruction_29(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;		
		Ok(())
	}

/// Test `rent-receiver` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
	pub fn process_instruction_30(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_30::instruction_30(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;		
		Ok(())
	}

/// Test `rent-receiver` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	pub fn process_instruction_31(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountWithOneStaticAndDynamicSeedAndOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountWithOneStaticAndDynamicSeedAndOneField>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_31::instruction_31(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `rent-receiver` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	pub fn process_instruction_32(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		account_seed_u_8_type: u8,
		account_seed_u_16_type: u16,
		account_seed_u_32_type: u32,
		account_seed_i_8_type: i8,
		account_seed_i_16_type: i16,
		account_seed_i_32_type: i32,
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
			&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_32::instruction_32(
			program_id,
			account,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `non-mut` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
	pub fn process_instruction_33(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u_8_type: u8,
		u_16_type: u16,
		u_32_type: u32,
		i_8_type: i8,
		i_16_type: i16,
		i_32_type: i32,
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
			&[u_8_type.to_le_bytes().as_ref(), u_16_type.to_le_bytes().as_ref(), u_32_type.to_le_bytes().as_ref(), i_8_type.to_le_bytes().as_ref(), i_16_type.to_le_bytes().as_ref(), i_32_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref()],
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_33::instruction_33(
			program_id,
			&account,
			u_8_type,
			u_16_type,
			u_32_type,
			i_8_type,
			i_16_type,
			i_32_type,
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
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
	pub fn process_instruction_34(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u_8_type: u8,
		u_16_type: u16,
		u_32_type: u32,
		i_8_type: i8,
		i_16_type: i16,
		i_32_type: i32,
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
			&[u_8_type.to_le_bytes().as_ref(), u_16_type.to_le_bytes().as_ref(), u_32_type.to_le_bytes().as_ref(), i_8_type.to_le_bytes().as_ref(), i_16_type.to_le_bytes().as_ref(), i_32_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref()],
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_34::instruction_34(
			program_id,
			account,
			u_8_type,
			u_16_type,
			u_32_type,
			i_8_type,
			i_16_type,
			i_32_type,
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
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
	pub fn process_instruction_35(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u_8_type: u8,
		u_16_type: u16,
		u_32_type: u32,
		i_8_type: i8,
		i_16_type: i16,
		i_32_type: i32,
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
			&[u_8_type.to_le_bytes().as_ref(), u_16_type.to_le_bytes().as_ref(), u_32_type.to_le_bytes().as_ref(), i_8_type.to_le_bytes().as_ref(), i_16_type.to_le_bytes().as_ref(), i_32_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref()],
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
		let space = PdaaccountVerifiesSeedsTypes::LEN;
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
			&[&[u_8_type.to_le_bytes().as_ref(), u_16_type.to_le_bytes().as_ref(), u_32_type.to_le_bytes().as_ref(), i_8_type.to_le_bytes().as_ref(), i_16_type.to_le_bytes().as_ref(), i_32_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref(), &[account_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_35::instruction_35(
			program_id,
			account,
			u_8_type,
			u_16_type,
			u_32_type,
			i_8_type,
			i_16_type,
			i_32_type,
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
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
	pub fn process_instruction_36(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u_8_type: u8,
		u_16_type: u16,
		u_32_type: u32,
		i_8_type: i8,
		i_16_type: i16,
		i_32_type: i32,
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
			&[u_8_type.to_le_bytes().as_ref(), u_16_type.to_le_bytes().as_ref(), u_32_type.to_le_bytes().as_ref(), i_8_type.to_le_bytes().as_ref(), i_16_type.to_le_bytes().as_ref(), i_32_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref()],
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
			let space = PdaaccountVerifiesSeedsTypes::LEN;
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
				&[&[u_8_type.to_le_bytes().as_ref(), u_16_type.to_le_bytes().as_ref(), u_32_type.to_le_bytes().as_ref(), i_8_type.to_le_bytes().as_ref(), i_16_type.to_le_bytes().as_ref(), i_32_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref(), &[account_bump]]],
			)?;
		}


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_36::instruction_36(
			program_id,
			account,
			u_8_type,
			u_16_type,
			u_32_type,
			i_8_type,
			i_16_type,
			i_32_type,
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
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
	pub fn process_instruction_37(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u_8_type: u8,
		u_16_type: u16,
		u_32_type: u32,
		i_8_type: i8,
		i_16_type: i16,
		i_32_type: i32,
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
			&[u_8_type.to_le_bytes().as_ref(), u_16_type.to_le_bytes().as_ref(), u_32_type.to_le_bytes().as_ref(), i_8_type.to_le_bytes().as_ref(), i_16_type.to_le_bytes().as_ref(), i_32_type.to_le_bytes().as_ref(), string_type.as_bytes().as_ref(), signer_1_info.key.as_ref()],
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != PdaaccountVerifiesSeedsTypes::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<PdaaccountVerifiesSeedsTypes>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_37::instruction_37(
			program_id,
			account,
			u_8_type,
			u_16_type,
			u_32_type,
			i_8_type,
			i_16_type,
			i_32_type,
			string_type,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test `non-mut` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[signer]` signer_1: [NonPdaaccountWithOneField] 
	pub fn process_instruction_38(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_38::instruction_38(
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
/// 3. `[writable, signer]` signer_1: [NonPdaaccountWithOneField] 
	pub fn process_instruction_39(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = &mut Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_39::instruction_39(
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
/// 3. `[writable, signer]` signer_1: [NonPdaaccountWithOneField] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn process_instruction_40(
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
		let space = NonPdaaccountWithOneField::LEN;
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = &mut Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_40::instruction_40(
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
/// 3. `[writable, signer]` signer_1: [NonPdaaccountWithOneField] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn process_instruction_41(
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
			let space = NonPdaaccountWithOneField::LEN;
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = &mut Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_41::instruction_41(
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
/// 3. `[writable, signer]` signer_1: [NonPdaaccountWithOneField] 
	pub fn process_instruction_42(
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
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_2_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_3_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if *signer_1_info.owner != *program_id {
			return Err(ValidateAdvancedCasesError::WrongAccountOwner.into());
		}

		if signer_1_info.data_len() != NonPdaaccountWithOneField::LEN {
			return Err(ValidateAdvancedCasesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let signer_1 = &mut Account::new(
			&signer_1_info,
			try_from_slice_unchecked::<NonPdaaccountWithOneField>(&signer_1_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_42::instruction_42(
			program_id,
			signer_1,
		)?;

		// Accounts Serialization
		signer_1.data.serialize(&mut &mut signer_1_info.data.borrow_mut()[..])?;		
		Ok(())
	}
}