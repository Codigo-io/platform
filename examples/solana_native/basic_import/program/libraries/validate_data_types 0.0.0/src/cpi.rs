// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use std::str::FromStr;

use solana_program::{declare_id, msg};
use solana_program::account_info::{AccountInfo, next_account_info};
use solana_program::entrypoint::ProgramResult;
use solana_program::instruction::{AccountMeta, Instruction};
use solana_program::program::invoke;
use solana_program::pubkey::Pubkey;

use solana_program::system_program;

use crate::src::instructions::ValidateDataTypesInstruction::*;
use crate::src::instructions::*;

declare_id!("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY");



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
pub fn instruction1(
	accounts: &[&AccountInfo],
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
	msg!("CPI Instruction: ValidateDataTypes.Instruction1");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let account_info_type_info = accounts[2];
	let account_info_type_mut_info = accounts[3];
	let system_program_info = accounts[4];

	let data = Instruction1(Instruction1Args {
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
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, true),
		AccountMeta::new_readonly(*account_info_type_info.key, false),
		AccountMeta::new(*account_info_type_mut_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone(), account_info_type_info.clone(), account_info_type_mut_info.clone(), system_program_info.clone()],
	)
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
pub fn instruction2(
	accounts: &[&AccountInfo],
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
	msg!("CPI Instruction: ValidateDataTypes.Instruction2");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let account_info_type_info = accounts[2];
	let account_info_type_mut_info = accounts[3];
	let system_program_info = accounts[4];

	let data = Instruction2(Instruction2Args {
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
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*account_info_type_info.key, false),
		AccountMeta::new(*account_info_type_mut_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone(), account_info_type_info.clone(), account_info_type_mut_info.clone(), system_program_info.clone()],
	)
}