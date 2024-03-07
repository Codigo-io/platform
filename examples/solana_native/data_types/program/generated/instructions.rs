// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::ValidateDataTypesError;

#[derive(BorshSerialize, Debug)]
pub enum ValidateDataTypesInstruction {
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
	Instruction1(Instruction1Args),

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
	Instruction2(Instruction2Args),

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction1Args {
	pub u8_type: u8,
	pub u16_type: u16,
	pub u32_type: u32,
	pub u64_type: u64,
	pub u128_type: u128,
	pub i8_type: i8,
	pub i16_type: i16,
	pub i32_type: i32,
	pub i64_type: i64,
	pub i128_type: i128,
	pub string_type: String,
	pub bool_type: bool,
	pub f32_type: f32,
	pub f64_type: f64,
	pub pubkey_type: Pubkey,
	pub u8_type_option: Option<u8>,
	pub u16_type_option: Option<u16>,
	pub u32_type_option: Option<u32>,
	pub u64_type_option: Option<u64>,
	pub u128_type_option: Option<u128>,
	pub i8_type_option: Option<i8>,
	pub i16_type_option: Option<i16>,
	pub i32_type_option: Option<i32>,
	pub i64_type_option: Option<i64>,
	pub i128_type_option: Option<i128>,
	pub string_type_option: Option<String>,
	pub bool_type_option: Option<bool>,
	pub f32_type_option: Option<f32>,
	pub f64_type_option: Option<f64>,
	pub pubkey_type_option: Option<Pubkey>,
	pub u8_type_vector: Vec<u8>,
	pub u16_type_vector: Vec<u16>,
	pub u32_type_vector: Vec<u32>,
	pub u64_type_vector: Vec<u64>,
	pub u128_type_vector: Vec<u128>,
	pub i8_type_vector: Vec<i8>,
	pub i16_type_vector: Vec<i16>,
	pub i32_type_vector: Vec<i32>,
	pub i64_type_vector: Vec<i64>,
	pub i128_type_vector: Vec<i128>,
	pub bool_type_vector: Vec<bool>,
	pub f32_type_vector: Vec<f32>,
	pub f64_type_vector: Vec<f64>,
	pub pubkey_type_vector: Vec<Pubkey>,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction2Args {
	pub u8_type: u8,
	pub u16_type: u16,
	pub u32_type: u32,
	pub u64_type: u64,
	pub u128_type: u128,
	pub i8_type: i8,
	pub i16_type: i16,
	pub i32_type: i32,
	pub i64_type: i64,
	pub i128_type: i128,
	pub string_type: String,
	pub bool_type: bool,
	pub f32_type: f32,
	pub f64_type: f64,
	pub pubkey_type: Pubkey,
	pub u8_type_option: Option<u8>,
	pub u16_type_option: Option<u16>,
	pub u32_type_option: Option<u32>,
	pub u64_type_option: Option<u64>,
	pub u128_type_option: Option<u128>,
	pub i8_type_option: Option<i8>,
	pub i16_type_option: Option<i16>,
	pub i32_type_option: Option<i32>,
	pub i64_type_option: Option<i64>,
	pub i128_type_option: Option<i128>,
	pub string_type_option: Option<String>,
	pub bool_type_option: Option<bool>,
	pub f32_type_option: Option<f32>,
	pub f64_type_option: Option<f64>,
	pub pubkey_type_option: Option<Pubkey>,
	pub u8_type_vector: Vec<u8>,
	pub u16_type_vector: Vec<u16>,
	pub u32_type_vector: Vec<u32>,
	pub u64_type_vector: Vec<u64>,
	pub u128_type_vector: Vec<u128>,
	pub i8_type_vector: Vec<i8>,
	pub i16_type_vector: Vec<i16>,
	pub i32_type_vector: Vec<i32>,
	pub i64_type_vector: Vec<i64>,
	pub i128_type_vector: Vec<i128>,
	pub bool_type_vector: Vec<bool>,
	pub f32_type_vector: Vec<f32>,
	pub f64_type_vector: Vec<f64>,
	pub pubkey_type_vector: Vec<Pubkey>,
}

impl ValidateDataTypesInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(ValidateDataTypesError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::Instruction1(Instruction1Args::try_from_slice(rest).unwrap()),
			1 => Self::Instruction2(Instruction2Args::try_from_slice(rest).unwrap()),
			_ => return Err(ValidateDataTypesError::InvalidInstruction.into())
        })
    }
}