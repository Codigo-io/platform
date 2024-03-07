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

declare_id!("6ZgubyS8iKZFJYX2LtoshNgp9jMazoLepyfKoM2YPeQH");

#[program]
pub mod validate_big_account_for_anchor {
    use super::*;

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [Account10Kb] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - account_seed_index: [u32] Auto-generated, from the input "account" for the its seed definition "Array", sets the seed named "index"
	pub fn init_pda_on_contract(ctx: Context<InitPdaOnContract>, _account_seed_index: u32) -> Result<()> {
		init_pda_on_contract::handler(ctx, )
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [Account10Kb] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn init_on_contract(ctx: Context<InitOnContract>) -> Result<()> {
		init_on_contract::handler(ctx)
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
	pub fn init_on_client(ctx: Context<InitOnClient>) -> Result<()> {
		init_on_client::handler(ctx)
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
	pub fn init_on_client_with_custom_owner(ctx: Context<InitOnClientWithCustomOwner>) -> Result<()> {
		init_on_client_with_custom_owner::handler(ctx)
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [AccountInfo] 
	pub fn init_account_info_on_client(ctx: Context<InitAccountInfoOnClient>) -> Result<()> {
		init_account_info_on_client::handler(ctx)
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [AccountInfo] 
	pub fn init_account_info_on_client_with_custom_owner(ctx: Context<InitAccountInfoOnClientWithCustomOwner>) -> Result<()> {
		init_account_info_on_client_with_custom_owner::handler(ctx)
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn init_account_info_on_contract(ctx: Context<InitAccountInfoOnContract>) -> Result<()> {
		init_account_info_on_contract::handler(ctx)
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
/// 2. `[signer]` account_info: [AccountInfo] 
	pub fn init_two_big_account_on_client(ctx: Context<InitTwoBigAccountOnClient>) -> Result<()> {
		init_two_big_account_on_client::handler(ctx)
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_index: u32,
	)]
	pub struct InitPdaOnContract<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			init,
			space=10240,
			payer=fee_payer,
			seeds = [
				account_seed_index.to_le_bytes().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, Account10Kb>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	pub struct InitOnContract<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			signer,
			init,
			space=10240,
			payer=fee_payer,
		)]
		pub account: Account<'info, Account10Kb>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	pub struct InitOnClient<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			signer,
			zero,
		)]
		pub account: Account<'info, Account10Mib>,
	}

	#[derive(Accounts)]
	pub struct InitOnClientWithCustomOwner<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			signer,
			zero,
			owner=Pubkey::from_str("FR5N3j1fDE5mUYd2Gi9hEWDt3SSt6YmcBYSPmnowmCDk").unwrap(),
		)]
		pub account: Account<'info, Account10Mib>,
	}

	#[derive(Accounts)]
	pub struct InitAccountInfoOnClient<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			signer,
			zero,
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,
	}

	#[derive(Accounts)]
	pub struct InitAccountInfoOnClientWithCustomOwner<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			signer,
			zero,
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,
	}

	#[derive(Accounts)]
	pub struct InitAccountInfoOnContract<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			signer,
			init,
			space=10240,
			payer=fee_payer,
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	pub struct InitTwoBigAccountOnClient<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			signer,
			zero,
		)]
		pub account: Account<'info, Account10Mib>,

		#[account(
			signer,
			zero,
		)]
		/// CHECK: implement manual checks if needed
		pub account_info: UncheckedAccount<'info>,
	}
}
