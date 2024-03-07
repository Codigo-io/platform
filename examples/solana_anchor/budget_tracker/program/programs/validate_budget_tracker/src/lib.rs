// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

pub mod constants;
pub mod error;
pub mod instructions;
pub mod state;

use anchor_lang::prelude::*;
use std::str::FromStr;

pub use constants::*;
pub use instructions::*;
pub use state::*;

declare_id!("GZwozvtQoWXLHjdobT7pM28nPC3R31pamqwww6gKvN39");

#[program]
pub mod validate_budget_tracker {
    use super::*;

/// To call once per account. Initialize a Record account. The total_balance of the account will be set to 0.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` user_record: [Record] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - user_name: [String] The username to be assigned to the Record.name property
/// - user_record_seed_index: [u8] Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
	pub fn create_user_record(ctx: Context<CreateUserRecord>, user_name: String, _user_record_seed_index: u8) -> Result<()> {
		create_user_record::handler(ctx, user_name)
	}

/// Register the given amount as an income for the given record account. The total total_balance of the account will be increased.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` user_record: [Record] 
///
/// Data:
/// - amount: [u32] The amount to be registered as the income.
/// - user_record_seed_index: [u8] Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
	pub fn register_income(ctx: Context<RegisterIncome>, amount: u32, _user_record_seed_index: u8) -> Result<()> {
		register_income::handler(ctx, amount)
	}

/// Register the given amount as an outcome for the given record account. The total total_balance of the account will be decreased.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` user_record: [Record] The user record account
///
/// Data:
/// - amount: [u32] Number to be added to the outcome accumulator
/// - user_record_seed_index: [u8] Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
	pub fn register_outcome(ctx: Context<RegisterOutcome>, amount: u32, _user_record_seed_index: u8) -> Result<()> {
		register_outcome::handler(ctx, amount)
	}


	#[derive(Accounts)]
	#[instruction(
		user_name: String,
		user_record_seed_index: u8,
	)]
	pub struct CreateUserRecord<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			init,
			space=80,
			payer=fee_payer,
			seeds = [
				b"record",
				fee_payer.key().as_ref(),
				user_record_seed_index.to_le_bytes().as_ref(),
			],
			bump,
		)]
		pub user_record: Account<'info, Record>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		amount: u32,
		user_record_seed_index: u8,
	)]
	pub struct RegisterIncome<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			seeds = [
				b"record",
				fee_payer.key().as_ref(),
				user_record_seed_index.to_le_bytes().as_ref(),
			],
			bump,
		)]
		pub user_record: Account<'info, Record>,
	}

	#[derive(Accounts)]
	#[instruction(
		amount: u32,
		user_record_seed_index: u8,
	)]
	pub struct RegisterOutcome<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			seeds = [
				b"record",
				fee_payer.key().as_ref(),
				user_record_seed_index.to_le_bytes().as_ref(),
			],
			bump,
		)]
		pub user_record: Account<'info, Record>,
	}
}
