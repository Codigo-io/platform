// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use anchor_lang::prelude::*;

#[account]
pub struct Record {
	pub name: String,
	pub moves: u16,
	pub outcome: u32,
	pub income: u32,
	pub total_balance: i64,
}
