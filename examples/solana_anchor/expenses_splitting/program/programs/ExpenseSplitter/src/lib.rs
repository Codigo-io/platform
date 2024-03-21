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

declare_id!("CBdZHhteKeEySFipeE9w2zRsigs3CsGyFEQ9UKwEpfJ5");

#[program]
pub mod ExpenseSplitter {
    use super::*;

/// Creates a new group with initial members and balances.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - group_name: [String] The name of the group.
/// - members: [Vec<Pubkey>] Array of member public keys.
/// - initial_balances: [Vec<i64>] Array of initial balances for each member.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	pub fn create_group(ctx: Context<CreateGroup>, group_name: String, members: Vec<Pubkey>, initial_balances: Vec<i64>, _group_account_seed_group_name: String) -> Result<()> {
		create_group::handler(ctx, group_name, members, initial_balances)
	}

/// Adds a new member to the group.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
///
/// Data:
/// - new_member: [Pubkey] Public key of the new member.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	pub fn add_member(ctx: Context<AddMember>, new_member: Pubkey, _group_account_seed_group_name: String) -> Result<()> {
		add_member::handler(ctx, new_member)
	}

/// Removes a member from the group.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
///
/// Data:
/// - member: [Pubkey] Public key of the member to remove.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	pub fn remove_member(ctx: Context<RemoveMember>, member: Pubkey, _group_account_seed_group_name: String) -> Result<()> {
		remove_member::handler(ctx, member)
	}

/// Logs a payment made by or for group members, updating balances accordingly.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
///
/// Data:
/// - title: [String] Title or description of the payment.
/// - participants: [Vec<Pubkey>] Array of participating member public keys.
/// - amounts: [Vec<u64>] Array of amounts each participant gave to the group.
/// - participation_factors: [Vec<u64>] Array of participation factors for each participant.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	pub fn log_payment(ctx: Context<LogPayment>, title: String, participants: Vec<Pubkey>, amounts: Vec<u64>, participation_factors: Vec<u64>, _group_account_seed_group_name: String) -> Result<()> {
		log_payment::handler(ctx, title, participants, amounts, participation_factors)
	}


	#[derive(Accounts)]
	#[instruction(
		group_name: String,
		members: Vec<Pubkey>,
		initial_balances: Vec<i64>,
		group_account_seed_group_name: String,
	)]
	pub struct CreateGroup<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			init,
			space=4120,
			payer=fee_payer,
			seeds = [
				group_account_seed_group_name.as_bytes().as_ref(),
			],
			bump,
		)]
		pub group_account: Account<'info, GroupAccount>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		new_member: Pubkey,
		group_account_seed_group_name: String,
	)]
	pub struct AddMember<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			seeds = [
				group_account_seed_group_name.as_bytes().as_ref(),
			],
			bump,
		)]
		pub group_account: Account<'info, GroupAccount>,
	}

	#[derive(Accounts)]
	#[instruction(
		member: Pubkey,
		group_account_seed_group_name: String,
	)]
	pub struct RemoveMember<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			seeds = [
				group_account_seed_group_name.as_bytes().as_ref(),
			],
			bump,
		)]
		pub group_account: Account<'info, GroupAccount>,
	}

	#[derive(Accounts)]
	#[instruction(
		title: String,
		participants: Vec<Pubkey>,
		amounts: Vec<u64>,
		participation_factors: Vec<u64>,
		group_account_seed_group_name: String,
	)]
	pub struct LogPayment<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			seeds = [
				group_account_seed_group_name.as_bytes().as_ref(),
			],
			bump,
		)]
		pub group_account: Account<'info, GroupAccount>,
	}
}
