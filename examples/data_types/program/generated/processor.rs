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
use crate::generated::errors::ValidateDataTypesError;
use crate::generated::instructions::ValidateDataTypesInstruction;

use crate::generated::state::{
	Account,
	AccountPDA,
	MasterTypesNonPda,
	MasterTypesPda,
};
use crate::src::*;

pub struct Processor;

impl Processor {
    pub fn process(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        data: &[u8],
    ) -> ProgramResult {
        let instruction = ValidateDataTypesInstruction::unpack(data)?;

        match instruction {
			ValidateDataTypesInstruction::Instruction1(args) => {
				msg!("Instruction: Instruction1");
				Self::process_instruction_1(
					program_id,
					accounts, 
					args.u_8_type,
					args.u_16_type,
					args.u_32_type,
					args.u_64_type,
					args.u_128_type,
					args.i_8_type,
					args.i_16_type,
					args.i_32_type,
					args.i_64_type,
					args.i_128_type,
					args.string_type,
					args.bool_type,
					args.f_32_type,
					args.f_64_type,
					args.pubkey_type,
					args.u_8_type_option,
					args.u_16_type_option,
					args.u_32_type_option,
					args.u_64_type_option,
					args.u_128_type_option,
					args.i_8_type_option,
					args.i_16_type_option,
					args.i_32_type_option,
					args.i_64_type_option,
					args.i_128_type_option,
					args.string_type_option,
					args.bool_type_option,
					args.f_32_type_option,
					args.f_64_type_option,
					args.pubkey_type_option,
					args.u_8_type_vector,
					args.u_16_type_vector,
					args.u_32_type_vector,
					args.u_64_type_vector,
					args.u_128_type_vector,
					args.i_8_type_vector,
					args.i_16_type_vector,
					args.i_32_type_vector,
					args.i_64_type_vector,
					args.i_128_type_vector,
					args.bool_type_vector,
					args.f_32_type_vector,
					args.f_64_type_vector,
					args.pubkey_type_vector,
				)
			}
			ValidateDataTypesInstruction::Instruction2(args) => {
				msg!("Instruction: Instruction2");
				Self::process_instruction_2(
					program_id,
					accounts, 
					args.u_8_type,
					args.u_16_type,
					args.u_32_type,
					args.u_64_type,
					args.u_128_type,
					args.i_8_type,
					args.i_16_type,
					args.i_32_type,
					args.i_64_type,
					args.i_128_type,
					args.string_type,
					args.bool_type,
					args.f_32_type,
					args.f_64_type,
					args.pubkey_type,
					args.u_8_type_option,
					args.u_16_type_option,
					args.u_32_type_option,
					args.u_64_type_option,
					args.u_128_type_option,
					args.i_8_type_option,
					args.i_16_type_option,
					args.i_32_type_option,
					args.i_64_type_option,
					args.i_128_type_option,
					args.string_type_option,
					args.bool_type_option,
					args.f_32_type_option,
					args.f_64_type_option,
					args.pubkey_type_option,
					args.u_8_type_vector,
					args.u_16_type_vector,
					args.u_32_type_vector,
					args.u_64_type_vector,
					args.u_128_type_vector,
					args.i_8_type_vector,
					args.i_16_type_vector,
					args.i_32_type_vector,
					args.i_64_type_vector,
					args.i_128_type_vector,
					args.bool_type_vector,
					args.f_32_type_vector,
					args.f_64_type_vector,
					args.pubkey_type_vector,
				)
			}
        }
    }

/// Test MasterTypeNonPDA types
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [MasterTypesNonPda] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - u_64_type: [u64] 
/// - u_128_type: [u128] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - i_64_type: [i64] 
/// - i_128_type: [i128] 
/// - string_type: [String] 
/// - bool_type: [bool] 
/// - f_32_type: [f32] 
/// - f_64_type: [f64] 
/// - pubkey_type: [Pubkey] 
/// - u_8_type_option: [Option<u8>] 
/// - u_16_type_option: [Option<u16>] 
/// - u_32_type_option: [Option<u32>] 
/// - u_64_type_option: [Option<u64>] 
/// - u_128_type_option: [Option<u128>] 
/// - i_8_type_option: [Option<i8>] 
/// - i_16_type_option: [Option<i16>] 
/// - i_32_type_option: [Option<i32>] 
/// - i_64_type_option: [Option<i64>] 
/// - i_128_type_option: [Option<i128>] 
/// - string_type_option: [Option<String>] 
/// - bool_type_option: [Option<bool>] 
/// - f_32_type_option: [Option<f32>] 
/// - f_64_type_option: [Option<f64>] 
/// - pubkey_type_option: [Option<Pubkey>] 
/// - u_8_type_vector: [Vec<u8>] 
/// - u_16_type_vector: [Vec<u16>] 
/// - u_32_type_vector: [Vec<u32>] 
/// - u_64_type_vector: [Vec<u64>] 
/// - u_128_type_vector: [Vec<u128>] 
/// - i_8_type_vector: [Vec<i8>] 
/// - i_16_type_vector: [Vec<i16>] 
/// - i_32_type_vector: [Vec<i32>] 
/// - i_64_type_vector: [Vec<i64>] 
/// - i_128_type_vector: [Vec<i128>] 
/// - bool_type_vector: [Vec<bool>] 
/// - f_32_type_vector: [Vec<f32>] 
/// - f_64_type_vector: [Vec<f64>] 
/// - pubkey_type_vector: [Vec<Pubkey>] 
	pub fn process_instruction_1(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u_8_type: u8,
		u_16_type: u16,
		u_32_type: u32,
		u_64_type: u64,
		u_128_type: u128,
		i_8_type: i8,
		i_16_type: i16,
		i_32_type: i32,
		i_64_type: i64,
		i_128_type: i128,
		string_type: String,
		bool_type: bool,
		f_32_type: f32,
		f_64_type: f64,
		pubkey_type: Pubkey,
		u_8_type_option: Option<u8>,
		u_16_type_option: Option<u16>,
		u_32_type_option: Option<u32>,
		u_64_type_option: Option<u64>,
		u_128_type_option: Option<u128>,
		i_8_type_option: Option<i8>,
		i_16_type_option: Option<i16>,
		i_32_type_option: Option<i32>,
		i_64_type_option: Option<i64>,
		i_128_type_option: Option<i128>,
		string_type_option: Option<String>,
		bool_type_option: Option<bool>,
		f_32_type_option: Option<f32>,
		f_64_type_option: Option<f64>,
		pubkey_type_option: Option<Pubkey>,
		u_8_type_vector: Vec<u8>,
		u_16_type_vector: Vec<u16>,
		u_32_type_vector: Vec<u32>,
		u_64_type_vector: Vec<u64>,
		u_128_type_vector: Vec<u128>,
		i_8_type_vector: Vec<i8>,
		i_16_type_vector: Vec<i16>,
		i_32_type_vector: Vec<i32>,
		i_64_type_vector: Vec<i64>,
		i_128_type_vector: Vec<i128>,
		bool_type_vector: Vec<bool>,
		f_32_type_vector: Vec<f32>,
		f_64_type_vector: Vec<f64>,
		pubkey_type_vector: Vec<Pubkey>,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let account_info_type_info = next_account_info(account_info_iter)?;
		let account_info_type_mut_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateDataTypesError::InvalidSignerPermission.into());
		}

		if account_info.is_signer != true {
			return Err(ValidateDataTypesError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateDataTypesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = MasterTypesNonPda::LEN;
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
			return Err(ValidateDataTypesError::WrongAccountOwner.into());
		}

		if *account_info.owner != *program_id {
			return Err(ValidateDataTypesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != MasterTypesNonPda::LEN {
			return Err(ValidateDataTypesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut Account::new(
			&account_info,
			try_from_slice_unchecked::<MasterTypesNonPda>(&account_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		instruction_1::instruction_1(
			program_id,
			account,
			account_info_type_info,
			account_info_type_mut_info,
			u_8_type,
			u_16_type,
			u_32_type,
			u_64_type,
			u_128_type,
			i_8_type,
			i_16_type,
			i_32_type,
			i_64_type,
			i_128_type,
			string_type,
			bool_type,
			f_32_type,
			f_64_type,
			pubkey_type,
			u_8_type_option,
			u_16_type_option,
			u_32_type_option,
			u_64_type_option,
			u_128_type_option,
			i_8_type_option,
			i_16_type_option,
			i_32_type_option,
			i_64_type_option,
			i_128_type_option,
			string_type_option,
			bool_type_option,
			f_32_type_option,
			f_64_type_option,
			pubkey_type_option,
			u_8_type_vector,
			u_16_type_vector,
			u_32_type_vector,
			u_64_type_vector,
			u_128_type_vector,
			i_8_type_vector,
			i_16_type_vector,
			i_32_type_vector,
			i_64_type_vector,
			i_128_type_vector,
			bool_type_vector,
			f_32_type_vector,
			f_64_type_vector,
			pubkey_type_vector,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Test MasterTypePDA types
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [MasterTypesPda] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - u_64_type: [u64] 
/// - u_128_type: [u128] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - i_64_type: [i64] 
/// - i_128_type: [i128] 
/// - string_type: [String] 
/// - bool_type: [bool] 
/// - f_32_type: [f32] 
/// - f_64_type: [f64] 
/// - pubkey_type: [Pubkey] 
/// - u_8_type_option: [Option<u8>] 
/// - u_16_type_option: [Option<u16>] 
/// - u_32_type_option: [Option<u32>] 
/// - u_64_type_option: [Option<u64>] 
/// - u_128_type_option: [Option<u128>] 
/// - i_8_type_option: [Option<i8>] 
/// - i_16_type_option: [Option<i16>] 
/// - i_32_type_option: [Option<i32>] 
/// - i_64_type_option: [Option<i64>] 
/// - i_128_type_option: [Option<i128>] 
/// - string_type_option: [Option<String>] 
/// - bool_type_option: [Option<bool>] 
/// - f_32_type_option: [Option<f32>] 
/// - f_64_type_option: [Option<f64>] 
/// - pubkey_type_option: [Option<Pubkey>] 
/// - u_8_type_vector: [Vec<u8>] 
/// - u_16_type_vector: [Vec<u16>] 
/// - u_32_type_vector: [Vec<u32>] 
/// - u_64_type_vector: [Vec<u64>] 
/// - u_128_type_vector: [Vec<u128>] 
/// - i_8_type_vector: [Vec<i8>] 
/// - i_16_type_vector: [Vec<i16>] 
/// - i_32_type_vector: [Vec<i32>] 
/// - i_64_type_vector: [Vec<i64>] 
/// - i_128_type_vector: [Vec<i128>] 
/// - bool_type_vector: [Vec<bool>] 
/// - f_32_type_vector: [Vec<f32>] 
/// - f_64_type_vector: [Vec<f64>] 
/// - pubkey_type_vector: [Vec<Pubkey>] 
	pub fn process_instruction_2(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u_8_type: u8,
		u_16_type: u16,
		u_32_type: u32,
		u_64_type: u64,
		u_128_type: u128,
		i_8_type: i8,
		i_16_type: i16,
		i_32_type: i32,
		i_64_type: i64,
		i_128_type: i128,
		string_type: String,
		bool_type: bool,
		f_32_type: f32,
		f_64_type: f64,
		pubkey_type: Pubkey,
		u_8_type_option: Option<u8>,
		u_16_type_option: Option<u16>,
		u_32_type_option: Option<u32>,
		u_64_type_option: Option<u64>,
		u_128_type_option: Option<u128>,
		i_8_type_option: Option<i8>,
		i_16_type_option: Option<i16>,
		i_32_type_option: Option<i32>,
		i_64_type_option: Option<i64>,
		i_128_type_option: Option<i128>,
		string_type_option: Option<String>,
		bool_type_option: Option<bool>,
		f_32_type_option: Option<f32>,
		f_64_type_option: Option<f64>,
		pubkey_type_option: Option<Pubkey>,
		u_8_type_vector: Vec<u8>,
		u_16_type_vector: Vec<u16>,
		u_32_type_vector: Vec<u32>,
		u_64_type_vector: Vec<u64>,
		u_128_type_vector: Vec<u128>,
		i_8_type_vector: Vec<i8>,
		i_16_type_vector: Vec<i16>,
		i_32_type_vector: Vec<i32>,
		i_64_type_vector: Vec<i64>,
		i_128_type_vector: Vec<i128>,
		bool_type_vector: Vec<bool>,
		f_32_type_vector: Vec<f32>,
		f_64_type_vector: Vec<f64>,
		pubkey_type_vector: Vec<Pubkey>,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let account_info = next_account_info(account_info_iter)?;
		let account_info_type_info = next_account_info(account_info_iter)?;
		let account_info_type_mut_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (account_pubkey, account_bump) = Pubkey::find_program_address(
			&[b"master_type_pda"],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateDataTypesError::InvalidSignerPermission.into());
		}

		if *account_info.key != account_pubkey {
			return Err(ValidateDataTypesError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateDataTypesError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = MasterTypesPda::LEN;
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
			&[&[b"master_type_pda", &[account_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateDataTypesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != MasterTypesPda::LEN {
			return Err(ValidateDataTypesError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let account = &mut AccountPDA::new(
			&account_info,
			try_from_slice_unchecked::<MasterTypesPda>(&account_info.data.borrow()).unwrap(),
			account_bump,
		);

		// Calling STUB
		instruction_2::instruction_2(
			program_id,
			account,
			account_info_type_info,
			account_info_type_mut_info,
			u_8_type,
			u_16_type,
			u_32_type,
			u_64_type,
			u_128_type,
			i_8_type,
			i_16_type,
			i_32_type,
			i_64_type,
			i_128_type,
			string_type,
			bool_type,
			f_32_type,
			f_64_type,
			pubkey_type,
			u_8_type_option,
			u_16_type_option,
			u_32_type_option,
			u_64_type_option,
			u_128_type_option,
			i_8_type_option,
			i_16_type_option,
			i_32_type_option,
			i_64_type_option,
			i_128_type_option,
			string_type_option,
			bool_type_option,
			f_32_type_option,
			f_64_type_option,
			pubkey_type_option,
			u_8_type_vector,
			u_16_type_vector,
			u_32_type_vector,
			u_64_type_vector,
			u_128_type_vector,
			i_8_type_vector,
			i_16_type_vector,
			i_32_type_vector,
			i_64_type_vector,
			i_128_type_vector,
			bool_type_vector,
			f_32_type_vector,
			f_64_type_vector,
			pubkey_type_vector,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}
}