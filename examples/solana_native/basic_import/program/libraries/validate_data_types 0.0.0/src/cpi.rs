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
pub fn instruction_1(
	accounts: &[&AccountInfo],
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
	msg!("CPI Instruction: ValidateDataTypes.Instruction1");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let account_info_type_info = accounts[2];
	let account_info_type_mut_info = accounts[3];
	let system_program_info = accounts[4];

	let data = Instruction1(Instruction1Args {
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
pub fn instruction_2(
	accounts: &[&AccountInfo],
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
	msg!("CPI Instruction: ValidateDataTypes.Instruction2");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let account_info_type_info = accounts[2];
	let account_info_type_mut_info = accounts[3];
	let system_program_info = accounts[4];

	let data = Instruction2(Instruction2Args {
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