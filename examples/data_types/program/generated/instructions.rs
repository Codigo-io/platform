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
	Instruction1(Instruction1Args),

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
	Instruction2(Instruction2Args),

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction1Args {
	pub u_8_type: u8,
	pub u_16_type: u16,
	pub u_32_type: u32,
	pub u_64_type: u64,
	pub u_128_type: u128,
	pub i_8_type: i8,
	pub i_16_type: i16,
	pub i_32_type: i32,
	pub i_64_type: i64,
	pub i_128_type: i128,
	pub string_type: String,
	pub bool_type: bool,
	pub f_32_type: f32,
	pub f_64_type: f64,
	pub pubkey_type: Pubkey,
	pub u_8_type_option: Option<u8>,
	pub u_16_type_option: Option<u16>,
	pub u_32_type_option: Option<u32>,
	pub u_64_type_option: Option<u64>,
	pub u_128_type_option: Option<u128>,
	pub i_8_type_option: Option<i8>,
	pub i_16_type_option: Option<i16>,
	pub i_32_type_option: Option<i32>,
	pub i_64_type_option: Option<i64>,
	pub i_128_type_option: Option<i128>,
	pub string_type_option: Option<String>,
	pub bool_type_option: Option<bool>,
	pub f_32_type_option: Option<f32>,
	pub f_64_type_option: Option<f64>,
	pub pubkey_type_option: Option<Pubkey>,
	pub u_8_type_vector: Vec<u8>,
	pub u_16_type_vector: Vec<u16>,
	pub u_32_type_vector: Vec<u32>,
	pub u_64_type_vector: Vec<u64>,
	pub u_128_type_vector: Vec<u128>,
	pub i_8_type_vector: Vec<i8>,
	pub i_16_type_vector: Vec<i16>,
	pub i_32_type_vector: Vec<i32>,
	pub i_64_type_vector: Vec<i64>,
	pub i_128_type_vector: Vec<i128>,
	pub bool_type_vector: Vec<bool>,
	pub f_32_type_vector: Vec<f32>,
	pub f_64_type_vector: Vec<f64>,
	pub pubkey_type_vector: Vec<Pubkey>,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction2Args {
	pub u_8_type: u8,
	pub u_16_type: u16,
	pub u_32_type: u32,
	pub u_64_type: u64,
	pub u_128_type: u128,
	pub i_8_type: i8,
	pub i_16_type: i16,
	pub i_32_type: i32,
	pub i_64_type: i64,
	pub i_128_type: i128,
	pub string_type: String,
	pub bool_type: bool,
	pub f_32_type: f32,
	pub f_64_type: f64,
	pub pubkey_type: Pubkey,
	pub u_8_type_option: Option<u8>,
	pub u_16_type_option: Option<u16>,
	pub u_32_type_option: Option<u32>,
	pub u_64_type_option: Option<u64>,
	pub u_128_type_option: Option<u128>,
	pub i_8_type_option: Option<i8>,
	pub i_16_type_option: Option<i16>,
	pub i_32_type_option: Option<i32>,
	pub i_64_type_option: Option<i64>,
	pub i_128_type_option: Option<i128>,
	pub string_type_option: Option<String>,
	pub bool_type_option: Option<bool>,
	pub f_32_type_option: Option<f32>,
	pub f_64_type_option: Option<f64>,
	pub pubkey_type_option: Option<Pubkey>,
	pub u_8_type_vector: Vec<u8>,
	pub u_16_type_vector: Vec<u16>,
	pub u_32_type_vector: Vec<u32>,
	pub u_64_type_vector: Vec<u64>,
	pub u_128_type_vector: Vec<u128>,
	pub i_8_type_vector: Vec<i8>,
	pub i_16_type_vector: Vec<i16>,
	pub i_32_type_vector: Vec<i32>,
	pub i_64_type_vector: Vec<i64>,
	pub i_128_type_vector: Vec<i128>,
	pub bool_type_vector: Vec<bool>,
	pub f_32_type_vector: Vec<f32>,
	pub f_64_type_vector: Vec<f64>,
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