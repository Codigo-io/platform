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
use crate::generated::errors::ValidateDataTypesError;
use crate::generated::instructions::ValidateDataTypesInstruction;

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
        let instruction = ValidateDataTypesInstruction::unpack(data)?;

        match instruction {
			ValidateDataTypesInstruction::Instruction1(args) => {
				msg!("Instruction: Instruction1");
				Self::process_instruction1(
					program_id,
					accounts, 
					args.u8_type,
					args.u16_type,
					args.u32_type,
					args.u64_type,
					args.u128_type,
					args.i8_type,
					args.i16_type,
					args.i32_type,
					args.i64_type,
					args.i128_type,
					args.string_type,
					args.bool_type,
					args.f32_type,
					args.f64_type,
					args.pubkey_type,
					args.u8_type_option,
					args.u16_type_option,
					args.u32_type_option,
					args.u64_type_option,
					args.u128_type_option,
					args.i8_type_option,
					args.i16_type_option,
					args.i32_type_option,
					args.i64_type_option,
					args.i128_type_option,
					args.string_type_option,
					args.bool_type_option,
					args.f32_type_option,
					args.f64_type_option,
					args.pubkey_type_option,
					args.u8_type_vector,
					args.u16_type_vector,
					args.u32_type_vector,
					args.u64_type_vector,
					args.u128_type_vector,
					args.i8_type_vector,
					args.i16_type_vector,
					args.i32_type_vector,
					args.i64_type_vector,
					args.i128_type_vector,
					args.bool_type_vector,
					args.f32_type_vector,
					args.f64_type_vector,
					args.pubkey_type_vector,
				)
			}
			ValidateDataTypesInstruction::Instruction2(args) => {
				msg!("Instruction: Instruction2");
				Self::process_instruction2(
					program_id,
					accounts, 
					args.u8_type,
					args.u16_type,
					args.u32_type,
					args.u64_type,
					args.u128_type,
					args.i8_type,
					args.i16_type,
					args.i32_type,
					args.i64_type,
					args.i128_type,
					args.string_type,
					args.bool_type,
					args.f32_type,
					args.f64_type,
					args.pubkey_type,
					args.u8_type_option,
					args.u16_type_option,
					args.u32_type_option,
					args.u64_type_option,
					args.u128_type_option,
					args.i8_type_option,
					args.i16_type_option,
					args.i32_type_option,
					args.i64_type_option,
					args.i128_type_option,
					args.string_type_option,
					args.bool_type_option,
					args.f32_type_option,
					args.f64_type_option,
					args.pubkey_type_option,
					args.u8_type_vector,
					args.u16_type_vector,
					args.u32_type_vector,
					args.u64_type_vector,
					args.u128_type_vector,
					args.i8_type_vector,
					args.i16_type_vector,
					args.i32_type_vector,
					args.i64_type_vector,
					args.i128_type_vector,
					args.bool_type_vector,
					args.f32_type_vector,
					args.f64_type_vector,
					args.pubkey_type_vector,
				)
			}
        }
    }

/// Test MasterTypeNonPDA types
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - u128_type: [u128] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - i128_type: [i128] 
/// - string_type: [String] 
/// - bool_type: [bool] 
/// - f32_type: [f32] 
/// - f64_type: [f64] 
/// - pubkey_type: [Pubkey] 
/// - u8_type_option: [Option<u8>] 
/// - u16_type_option: [Option<u16>] 
/// - u32_type_option: [Option<u32>] 
/// - u64_type_option: [Option<u64>] 
/// - u128_type_option: [Option<u128>] 
/// - i8_type_option: [Option<i8>] 
/// - i16_type_option: [Option<i16>] 
/// - i32_type_option: [Option<i32>] 
/// - i64_type_option: [Option<i64>] 
/// - i128_type_option: [Option<i128>] 
/// - string_type_option: [Option<String>] 
/// - bool_type_option: [Option<bool>] 
/// - f32_type_option: [Option<f32>] 
/// - f64_type_option: [Option<f64>] 
/// - pubkey_type_option: [Option<Pubkey>] 
/// - u8_type_vector: [Vec<u8>] 
/// - u16_type_vector: [Vec<u16>] 
/// - u32_type_vector: [Vec<u32>] 
/// - u64_type_vector: [Vec<u64>] 
/// - u128_type_vector: [Vec<u128>] 
/// - i8_type_vector: [Vec<i8>] 
/// - i16_type_vector: [Vec<i16>] 
/// - i32_type_vector: [Vec<i32>] 
/// - i64_type_vector: [Vec<i64>] 
/// - i128_type_vector: [Vec<i128>] 
/// - bool_type_vector: [Vec<bool>] 
/// - f32_type_vector: [Vec<f32>] 
/// - f64_type_vector: [Vec<f64>] 
/// - pubkey_type_vector: [Vec<Pubkey>] 
	pub fn process_instruction1(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		u128_type: u128,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		i128_type: i128,
		string_type: String,
		bool_type: bool,
		f32_type: f32,
		f64_type: f64,
		pubkey_type: Pubkey,
		u8_type_option: Option<u8>,
		u16_type_option: Option<u16>,
		u32_type_option: Option<u32>,
		u64_type_option: Option<u64>,
		u128_type_option: Option<u128>,
		i8_type_option: Option<i8>,
		i16_type_option: Option<i16>,
		i32_type_option: Option<i32>,
		i64_type_option: Option<i64>,
		i128_type_option: Option<i128>,
		string_type_option: Option<String>,
		bool_type_option: Option<bool>,
		f32_type_option: Option<f32>,
		f64_type_option: Option<f64>,
		pubkey_type_option: Option<Pubkey>,
		u8_type_vector: Vec<u8>,
		u16_type_vector: Vec<u16>,
		u32_type_vector: Vec<u32>,
		u64_type_vector: Vec<u64>,
		u128_type_vector: Vec<u128>,
		i8_type_vector: Vec<i8>,
		i16_type_vector: Vec<i16>,
		i32_type_vector: Vec<i32>,
		i64_type_vector: Vec<i64>,
		i128_type_vector: Vec<i128>,
		bool_type_vector: Vec<bool>,
		f32_type_vector: Vec<f32>,
		f64_type_vector: Vec<f64>,
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
		let space: usize = 1383;
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

		if account_info.data_len() != 1383usize {
			return Err(ValidateDataTypesError::InvalidAccountLen.into());
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
			account_info_type_info,
			account_info_type_mut_info,
			u8_type,
			u16_type,
			u32_type,
			u64_type,
			u128_type,
			i8_type,
			i16_type,
			i32_type,
			i64_type,
			i128_type,
			string_type,
			bool_type,
			f32_type,
			f64_type,
			pubkey_type,
			u8_type_option,
			u16_type_option,
			u32_type_option,
			u64_type_option,
			u128_type_option,
			i8_type_option,
			i16_type_option,
			i32_type_option,
			i64_type_option,
			i128_type_option,
			string_type_option,
			bool_type_option,
			f32_type_option,
			f64_type_option,
			pubkey_type_option,
			u8_type_vector,
			u16_type_vector,
			u32_type_vector,
			u64_type_vector,
			u128_type_vector,
			i8_type_vector,
			i16_type_vector,
			i32_type_vector,
			i64_type_vector,
			i128_type_vector,
			bool_type_vector,
			f32_type_vector,
			f64_type_vector,
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
/// 1. `[writable]` account: [State] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - u128_type: [u128] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - i128_type: [i128] 
/// - string_type: [String] 
/// - bool_type: [bool] 
/// - f32_type: [f32] 
/// - f64_type: [f64] 
/// - pubkey_type: [Pubkey] 
/// - u8_type_option: [Option<u8>] 
/// - u16_type_option: [Option<u16>] 
/// - u32_type_option: [Option<u32>] 
/// - u64_type_option: [Option<u64>] 
/// - u128_type_option: [Option<u128>] 
/// - i8_type_option: [Option<i8>] 
/// - i16_type_option: [Option<i16>] 
/// - i32_type_option: [Option<i32>] 
/// - i64_type_option: [Option<i64>] 
/// - i128_type_option: [Option<i128>] 
/// - string_type_option: [Option<String>] 
/// - bool_type_option: [Option<bool>] 
/// - f32_type_option: [Option<f32>] 
/// - f64_type_option: [Option<f64>] 
/// - pubkey_type_option: [Option<Pubkey>] 
/// - u8_type_vector: [Vec<u8>] 
/// - u16_type_vector: [Vec<u16>] 
/// - u32_type_vector: [Vec<u32>] 
/// - u64_type_vector: [Vec<u64>] 
/// - u128_type_vector: [Vec<u128>] 
/// - i8_type_vector: [Vec<i8>] 
/// - i16_type_vector: [Vec<i16>] 
/// - i32_type_vector: [Vec<i32>] 
/// - i64_type_vector: [Vec<i64>] 
/// - i128_type_vector: [Vec<i128>] 
/// - bool_type_vector: [Vec<bool>] 
/// - f32_type_vector: [Vec<f32>] 
/// - f64_type_vector: [Vec<f64>] 
/// - pubkey_type_vector: [Vec<Pubkey>] 
	pub fn process_instruction2(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		u128_type: u128,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		i128_type: i128,
		string_type: String,
		bool_type: bool,
		f32_type: f32,
		f64_type: f64,
		pubkey_type: Pubkey,
		u8_type_option: Option<u8>,
		u16_type_option: Option<u16>,
		u32_type_option: Option<u32>,
		u64_type_option: Option<u64>,
		u128_type_option: Option<u128>,
		i8_type_option: Option<i8>,
		i16_type_option: Option<i16>,
		i32_type_option: Option<i32>,
		i64_type_option: Option<i64>,
		i128_type_option: Option<i128>,
		string_type_option: Option<String>,
		bool_type_option: Option<bool>,
		f32_type_option: Option<f32>,
		f64_type_option: Option<f64>,
		pubkey_type_option: Option<Pubkey>,
		u8_type_vector: Vec<u8>,
		u16_type_vector: Vec<u16>,
		u32_type_vector: Vec<u32>,
		u64_type_vector: Vec<u64>,
		u128_type_vector: Vec<u128>,
		i8_type_vector: Vec<i8>,
		i16_type_vector: Vec<i16>,
		i32_type_vector: Vec<i32>,
		i64_type_vector: Vec<i64>,
		i128_type_vector: Vec<i128>,
		bool_type_vector: Vec<bool>,
		f32_type_vector: Vec<f32>,
		f64_type_vector: Vec<f64>,
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
		let space: usize = 1383;
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

		if *account_info.owner != *program_id {
			return Err(ValidateDataTypesError::WrongAccountOwner.into());
		}

		if account_info.data_len() != 1383usize {
			return Err(ValidateDataTypesError::InvalidAccountLen.into());
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
			account_info_type_info,
			account_info_type_mut_info,
			u8_type,
			u16_type,
			u32_type,
			u64_type,
			u128_type,
			i8_type,
			i16_type,
			i32_type,
			i64_type,
			i128_type,
			string_type,
			bool_type,
			f32_type,
			f64_type,
			pubkey_type,
			u8_type_option,
			u16_type_option,
			u32_type_option,
			u64_type_option,
			u128_type_option,
			i8_type_option,
			i16_type_option,
			i32_type_option,
			i64_type_option,
			i128_type_option,
			string_type_option,
			bool_type_option,
			f32_type_option,
			f64_type_option,
			pubkey_type_option,
			u8_type_vector,
			u16_type_vector,
			u32_type_vector,
			u64_type_vector,
			u128_type_vector,
			i8_type_vector,
			i16_type_vector,
			i32_type_vector,
			i64_type_vector,
			i128_type_vector,
			bool_type_vector,
			f32_type_vector,
			f64_type_vector,
			pubkey_type_vector,
		)?;

		// Accounts Serialization
		account.data.serialize(&mut &mut account_info.data.borrow_mut()[..])?;
		
		Ok(())
	}
}