// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::account_info::AccountInfo;
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone)]
pub struct MasterTypesNonPda {
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

impl MasterTypesNonPda {
	pub const LEN: usize = 1383;
}

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone)]
pub struct MasterTypesPda {
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

impl MasterTypesPda {
	pub const LEN: usize = 1383;
}

