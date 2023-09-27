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
pub struct NonPdaaccountWithOneField {
	pub field_1: u8,
}

impl NonPdaaccountWithOneField {
	pub const LEN: usize = 1; 
	}

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct PdaaccountWithOneStaticSeedAndOneField {
	pub field_1: u8,
}

impl PdaaccountWithOneStaticSeedAndOneField {
	pub const LEN: usize = 1; 
	}

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct PdaaccountWithOneStaticSeedAndOneFieldTwo {
	pub field_1: u8,
}

impl PdaaccountWithOneStaticSeedAndOneFieldTwo {
	pub const LEN: usize = 1; 
	}

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct PdaaccountWithOneStaticAndDynamicSeedAndOneField {
	pub field_1: u8,
}

impl PdaaccountWithOneStaticAndDynamicSeedAndOneField {
	pub const LEN: usize = 1; 
	}

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct PdaaccountVerifiesSeedsTypes {
	pub field_1: u8,
}

impl PdaaccountVerifiesSeedsTypes {
	pub const LEN: usize = 1; 
	}

