// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use anchor_lang::prelude::*;

#[account]
pub struct GroupAccount {
	pub group_name: String,
	pub members: Vec<Pubkey>,
	pub balances: Vec<i64>,
}
