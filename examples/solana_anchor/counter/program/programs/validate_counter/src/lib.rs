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

declare_id!("CLXWjLcyiRMLucSyugrFP1dhSghDaq5qGn1JrceJjynV");

#[program]
pub mod validate_counter {
    use super::*;

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` counter: [Counter] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn init_counter(ctx: Context<InitCounter>) -> Result<()> {
		init_counter::handler(ctx)
	}

/// Increment counter account
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` counter: [Counter] 
	pub fn increment(ctx: Context<Increment>) -> Result<()> {
		increment::handler(ctx)
	}

/// Init if needed, and then increment counter account
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` rent_payer: [AccountInfo] 
/// 2. `[writable]` counter: [Counter] 
/// 3. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn init_if_needed_and_increment(ctx: Context<InitIfNeededAndIncrement>) -> Result<()> {
		init_if_needed_and_increment::handler(ctx)
	}

/// close the counter account
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` rent_receiver: [AccountInfo] 
/// 2. `[writable]` counter: [Counter] 
	pub fn close_counter(ctx: Context<CloseCounter>) -> Result<()> {
		close_counter::handler(ctx)
	}


	#[derive(Accounts)]
	pub struct InitCounter<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			init,
			space=16,
			payer=fee_payer,
			seeds = [
				fee_payer.key().as_ref(),
			],
			bump,
		)]
		pub counter: Account<'info, Counter>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	pub struct Increment<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			seeds = [
				fee_payer.key().as_ref(),
			],
			bump,
		)]
		pub counter: Account<'info, Counter>,
	}

	#[derive(Accounts)]
	pub struct InitIfNeededAndIncrement<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
		)]
		pub rent_payer: Signer<'info>,

		#[account(
			init_if_needed,
			space=16,
			payer=rent_payer,
			seeds = [
				rent_payer.key().as_ref(),
			],
			bump,
		)]
		pub counter: Account<'info, Counter>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	pub struct CloseCounter<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
		)]
		pub rent_receiver: Signer<'info>,

		#[account(
			mut,
			close=rent_receiver,
			seeds = [
				rent_receiver.key().as_ref(),
			],
			bump,
		)]
		pub counter: Account<'info, Counter>,
	}
}
