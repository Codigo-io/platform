// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::account_info::AccountInfo;
use solana_program::pubkey::Pubkey;

#[derive(Clone, Debug)]
pub struct Account<'a, 'b, T> {
    pub data: T,
    pub info: &'a AccountInfo<'b>,
}

#[derive(Clone, Debug)]
pub struct AccountPDA<'a, 'b, T> {
    pub data: T,
    pub info: &'a AccountInfo<'b>,
    pub bump: u8,
}

impl<'a, 'b, T> Account<'a, 'b, T> {
    pub fn new(info: &'a AccountInfo<'b>, data: T) -> Self {
        Self { data, info }
    }
}

impl<'a, 'b, T> AccountPDA<'a, 'b, T> {
    pub fn new(info: &'a AccountInfo<'b>, data: T, bump: u8) -> Self {
        Self { data, info, bump }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct State {
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

