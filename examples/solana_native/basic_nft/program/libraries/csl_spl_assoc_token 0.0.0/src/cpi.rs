// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use std::str::FromStr;

use solana_program::{declare_id, msg};
use solana_program::account_info::{AccountInfo, next_account_info};
use solana_program::entrypoint::ProgramResult;
use solana_program::instruction::{AccountMeta, Instruction};
use solana_program::program::invoke;
use solana_program::pubkey::Pubkey;

use solana_program::system_program;



declare_id!("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");



/// Creates an associated token account for the given wallet address and token mint.
/// Returns an error if the account exists.
///
/// Accounts:
/// 0. `[writable, signer]` funding: [AccountInfo] Funding account (must be a system account)
/// 1. `[writable]` assoc_token_account: [Account] Associated token account address to be created
/// 2. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 3. `[]` mint: [Mint] The token mint for the new associated token account
/// 4. `[]` system_program: [AccountInfo] System program
/// 5. `[]` token_program: [AccountInfo] SPL Token program
pub fn create(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: CslSplAssocToken.Create");

	let funding_info = accounts[0];
	let assoc_token_account_info = accounts[1];
	let wallet_info = accounts[2];
	let mint_info = accounts[3];
	let system_program_info = accounts[4];
	let token_program_info = accounts[5];

	invoke(
		&spl_associated_token_account::instruction::create_associated_token_account(funding_info.key, wallet_info.key, mint_info.key, token_program_info.key),
		&[funding_info.clone(), assoc_token_account_info.clone(), wallet_info.clone(), mint_info.clone(), system_program_info.clone(), token_program_info.clone()],
	)
}