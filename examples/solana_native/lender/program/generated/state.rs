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

/// Broker is an account that can only exist once per contract.
/// It stores all the require information to lend money.
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct Broker {
	pub delegate: Pubkey,
	pub capital: u128,
	pub lended: u128,
	pub revenue: u128,
	pub fee: u8,
}

/// Loan is an account that will exist as many times is required
/// per client it stores a request to a Loan and if the loan is approved
/// it stores the amount payed.
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct Loan {
	pub client: Pubkey,
	pub amount: u64,
	pub payed: u64,
	pub kyc_url: String,
	pub fee: u8,
	pub approved: bool,
}

