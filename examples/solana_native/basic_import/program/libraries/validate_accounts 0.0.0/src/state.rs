// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::account_info::AccountInfo;
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone)]
pub struct NonPdaaccountWithOneField {
	pub field_1: u8,
}

impl NonPdaaccountWithOneField {
	pub const LEN: usize = 1;
}

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone)]
pub struct PdaaccountWithOneStaticSeedAndOneField {
	pub field_1: u8,
}

impl PdaaccountWithOneStaticSeedAndOneField {
	pub const LEN: usize = 1;
}

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone)]
pub struct PdaaccountWithOneStaticAndDynamicSeedAndOneField {
	pub field_1: u8,
}

impl PdaaccountWithOneStaticAndDynamicSeedAndOneField {
	pub const LEN: usize = 1;
}

#[derive(BorshSerialize, BorshDeserialize, Debug, Clone)]
pub struct PdaaccountVerifiesSeedsTypes {
	pub field_1: u8,
}

impl PdaaccountVerifiesSeedsTypes {
	pub const LEN: usize = 1;
}

