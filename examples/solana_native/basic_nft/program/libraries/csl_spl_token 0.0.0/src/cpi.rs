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



declare_id!("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");



/// Like [`InitializeMint`], but does not require the Rent sysvar to be provided
///
/// Accounts:
/// 0. `[writable]` mint: [Mint] 
///
/// Data:
/// - decimals: [u8] Number of base 10 digits to the right of the decimal place.
/// - mint_authority: [Pubkey] The authority/multisignature to mint tokens.
/// - freeze_authority: [Option<Pubkey>] The freeze authority/multisignature of the mint.
pub fn initialize_mint_2(
	accounts: &[&AccountInfo],
	decimals: u8,
	mint_authority: Pubkey,
	freeze_authority: Option<Pubkey>,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.InitializeMint2");

	let mint_info = accounts[0];

	invoke(
		&spl_token::instruction::initialize_mint2(&id(), mint_info.key, &mint_authority, freeze_authority.as_ref(), decimals).unwrap(),
		&[mint_info.clone()],
	)
}

/// Mints new tokens to an account.  The native mint does not support minting.
///
/// Accounts:
/// 0. `[writable]` mint: [Mint] The mint.
/// 1. `[writable]` assoc_token_account: [Account] The account to mint tokens to.
/// 2. `[signer]` owner: [AccountInfo] The mint's minting authority.
/// 3. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 4. `[]` token_program: [AccountInfo] SPL Token program
///
/// Data:
/// - amount: [u64] The amount of new tokens to mint.
pub fn mint_to(
	accounts: &[&AccountInfo],
	amount: u64,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.MintTo");

	let mint_info = accounts[0];
	let assoc_token_account_info = accounts[1];
	let owner_info = accounts[2];
	let wallet_info = accounts[3];
	let token_program_info = accounts[4];

	invoke(
		&spl_token::instruction::mint_to(&id(), mint_info.key, assoc_token_account_info.key, owner_info.key, &[], amount).unwrap(),
		&[mint_info.clone(), assoc_token_account_info.clone(), owner_info.clone(), wallet_info.clone(), token_program_info.clone()],
	)
}

/// Sets a new authority of a mint or account.
///
/// Accounts:
/// 0. `[writable]` mint: [Mint] The mint or account to change the authority of.
/// 1. `[signer]` owner: [AccountInfo] The current authority of the mint or account.
///
/// Data:
/// - authority_type: [u8] The type of authority to update.
/// - new_authority: [Option<Pubkey>] 
pub fn set_authority(
	accounts: &[&AccountInfo],
	authority_type: u8,
	new_authority: Option<Pubkey>,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.SetAuthority");

	let mint_info = accounts[0];
	let owner_info = accounts[1];

	let authority = match authority_type {
		0 => Ok(spl_token::instruction::AuthorityType::MintTokens),
		1 => Ok(spl_token::instruction::AuthorityType::FreezeAccount),
		2 => Ok(spl_token::instruction::AuthorityType::AccountOwner),
		3 => Ok(spl_token::instruction::AuthorityType::CloseAccount),
		_ => Err(solana_program::program_error::ProgramError::InvalidInstructionData),
	}.unwrap();

	invoke(
		&spl_token::instruction::set_authority(&id(), mint_info.key, new_authority.as_ref(), authority, owner_info.key, &[]).unwrap(),
		&[mint_info.clone(), owner_info.clone()],
	)
}

/// Transfers tokens from one account to another either directly or via a
/// delegate.  If this account is associated with the native mint then equal
/// amounts of SOL and Tokens will be transferred to the destination
/// account.
/// 
/// This instruction differs from Transfer in that the token mint and
/// decimals value is checked by the caller.  This may be useful when
/// creating transactions offline or within a hardware wallet.
///
/// Accounts:
/// 0. `[writable]` source: [AccountInfo] The source account.
/// 1. `[]` mint: [Mint] The token mint.
/// 2. `[writable]` destination: [AccountInfo] The destination account.
/// 3. `[signer]` authority: [AccountInfo] The source account's owner/delegate.
///
/// Data:
/// - amount: [u64] The amount of tokens to transfer.
/// - decimals: [u8] Expected number of base 10 digits to the right of the decimal place.
pub fn transfer_checked(
	accounts: &[&AccountInfo],
	amount: u64,
	decimals: u8,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.TransferChecked");

	let source_info = accounts[0];
	let mint_info = accounts[1];
	let destination_info = accounts[2];
	let authority_info = accounts[3];

	invoke(
		&spl_token::instruction::transfer_checked(&id(), source_info.key, mint_info.key, destination_info.key, authority_info.key, &[], amount, decimals).unwrap(),
		&[source_info.clone(), mint_info.clone(), destination_info.clone(), authority_info.clone()],
	)
}

/// Burns tokens by removing them from an account.  `Burn` does not support
/// accounts associated with the native mint, use `CloseAccount` instead.
///
/// Accounts:
/// 0. `[writable]` account: [Account] The account to burn from.
/// 1. `[writable]` mint: [Mint] The token mint.
/// 2. `[signer]` owner: [AccountInfo] The account's owner/delegate.
/// 3. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 4. `[]` token_program: [AccountInfo] SPL Token program
///
/// Data:
/// - amount: [u64] The amount of tokens to burn.
pub fn burn(
	accounts: &[&AccountInfo],
	amount: u64,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.Burn");

	let account_info = accounts[0];
	let mint_info = accounts[1];
	let owner_info = accounts[2];
	let wallet_info = accounts[3];
	let token_program_info = accounts[4];

	invoke(
		&spl_token::instruction::burn(&id(), account_info.key, mint_info.key, owner_info.key,&[], amount).unwrap(),
		&[account_info.clone(), mint_info.clone(), owner_info.clone(), wallet_info.clone(), token_program_info.clone()],
	)
}