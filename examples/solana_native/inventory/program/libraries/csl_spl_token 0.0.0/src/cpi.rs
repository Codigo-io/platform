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



/// Approves a delegate.  A delegate is given the authority over tokens on
/// behalf of the source account's owner.
///
/// Accounts:
/// 0. `[writable]` source: [AccountInfo] The source account.
/// 1. `[]` delegate: [AccountInfo] The delegate.
/// 2. `[signer]` owner: [AccountInfo] The source account owner.
///
/// Data:
/// - amount: [u64] 
pub fn approve(
	accounts: &[&AccountInfo],
	amount: u64,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.Approve");

	let source_info = accounts[0];
	let delegate_info = accounts[1];
	let owner_info = accounts[2];

	invoke(
		&spl_token::instruction::approve(&id(), source_info.key, delegate_info.key, owner_info.key, &[], amount).unwrap(),
		&[source_info.clone(), delegate_info.clone(), owner_info.clone()],
	)
}

/// Approves a delegate.  A delegate is given the authority over tokens on
/// behalf of the source account's owner.
/// 
/// This instruction differs from Approve in that the token mint and
/// decimals value is checked by the caller.  This may be useful when
/// creating transactions offline or within a hardware wallet.
///
/// Accounts:
/// 0. `[writable]` source: [AccountInfo] The source account.
/// 1. `[]` mint: [Mint] The token mint.
/// 2. `[]` delegate: [AccountInfo] The delegate.
/// 3. `[signer]` owner: [AccountInfo] The source account owner.
///
/// Data:
/// - amount: [u64] The amount of tokens the delegate is approved for.
/// - decimals: [u8] Expected number of base 10 digits to the right of the decimal place.
pub fn approve_checked(
	accounts: &[&AccountInfo],
	amount: u64,
	decimals: u8,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.ApproveChecked");

	let source_info = accounts[0];
	let mint_info = accounts[1];
	let delegate_info = accounts[2];
	let owner_info = accounts[3];

	invoke(
		&spl_token::instruction::approve_checked(&id(), source_info.key, mint_info.key,delegate_info.key, owner_info.key, &[], amount, decimals).unwrap(),
		&[source_info.clone(), mint_info.clone(), delegate_info.clone(), owner_info.clone()],
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

/// Freeze an Initialized account using the Mint's freeze_authority (if set).
///
/// Accounts:
/// 0. `[writable]` account: [AccountInfo] The account to freeze.
/// 1. `[]` mint: [Mint] The token mint.
/// 2. `[signer]` owner: [AccountInfo] The mint freeze authority.
pub fn freeze_account(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.FreezeAccount");

	let account_info = accounts[0];
	let mint_info = accounts[1];
	let owner_info = accounts[2];

	invoke(
		&spl_token::instruction::freeze_account(&id(), account_info.key, mint_info.key, owner_info.key, &[]).unwrap(),
		&[account_info.clone(), mint_info.clone(), owner_info.clone()],
	)
}

/// Close an account by transferring all its SOL to the destination account.
/// Non-native accounts may only be closed if its token amount is zero.
///
/// Accounts:
/// 0. `[writable]` account: [AccountInfo] The account to close.
/// 1. `[writable]` destination: [AccountInfo] The destination account.
/// 2. `[signer]` owner: [AccountInfo] The account's owner.
pub fn close_account(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.CloseAccount");

	let account_info = accounts[0];
	let destination_info = accounts[1];
	let owner_info = accounts[2];

	invoke(
		&spl_token::instruction::close_account(&id(), account_info.key, destination_info.key, owner_info.key, &[]).unwrap(),
		&[account_info.clone(), destination_info.clone(), owner_info.clone()],
	)
}

/// Initializes a new account to hold tokens.  If this account is associated
/// with the native mint then the token balance of the initialized account
/// will be equal to the amount of SOL in the account. If this account is
/// associated with another mint, that mint must be initialized before this
/// command can succeed.
/// 
/// The `InitializeAccount` instruction requires no signers and MUST be
/// included within the same Transaction as the system program's
/// `CreateAccount` instruction that creates the account being initialized.
/// Otherwise another party can acquire ownership of the uninitialized
/// account.
///
/// Accounts:
/// 0. `[writable]` account: [AccountInfo] The account to initialize.
/// 1. `[]` mint: [Mint] The mint this account will be associated with.
/// 2. `[]` owner: [AccountInfo] The new account's owner/multisignature.
/// 3. `[]` rent_sysvar: [AccountInfo] Rent sysvar
pub fn initialize_account(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.InitializeAccount");

	let account_info = accounts[0];
	let mint_info = accounts[1];
	let owner_info = accounts[2];
	let rent_sysvar_info = accounts[3];

	invoke(
		&spl_token::instruction::initialize_account(&id(), account_info.key, mint_info.key, owner_info.key).unwrap(),
		&[account_info.clone(), mint_info.clone(), owner_info.clone(), rent_sysvar_info.clone()],
	)
}

/// Like InitializeAccount, but the owner pubkey is passed via instruction data
/// rather than the accounts list. This variant may be preferable when using
/// Cross Program Invocation from an instruction that does not need the owner's
/// `AccountInfo` otherwise.
///
/// Accounts:
/// 0. `[writable]` account: [AccountInfo] The account to initialize.
/// 1. `[]` mint: [Mint] The mint this account will be associated with.
/// 2. `[]` rent_sysvar: [AccountInfo] Rent sysvar
///
/// Data:
/// - owner: [Pubkey] The new account's owner/multisignature.
pub fn initialize_account2(
	accounts: &[&AccountInfo],
	owner: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.InitializeAccount2");

	let account_info = accounts[0];
	let mint_info = accounts[1];
	let rent_sysvar_info = accounts[2];

	invoke(
		&spl_token::instruction::initialize_account2(&id(), account_info.key, mint_info.key, &owner).unwrap(),
		&[account_info.clone(), mint_info.clone(), rent_sysvar_info.clone()],
	)
}

/// Like InitializeAccount2, but does not require the Rent sysvar to be provided
///
/// Accounts:
/// 0. `[writable]` account: [AccountInfo] The account to initialize.
/// 1. `[]` mint: [Mint] The mint this account will be associated with.
///
/// Data:
/// - owner: [Pubkey] The new account's owner/multisignature.
pub fn initialize_account3(
	accounts: &[&AccountInfo],
	owner: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.InitializeAccount3");

	let account_info = accounts[0];
	let mint_info = accounts[1];

	invoke(
		&spl_token::instruction::initialize_account3(&id(), account_info.key, mint_info.key, &owner).unwrap(),
		&[account_info.clone(), mint_info.clone()],
	)
}

/// Initializes a new mint and optionally deposits all the newly minted tokens in an account.
/// 
/// The `InitializeMint` instruction requires no signers and MUST be
/// included within the same Transaction as the system program's
/// `CreateAccount` instruction that creates the account being initialized.
/// Otherwise another party can acquire ownership of the uninitialized
/// account.
///
/// Accounts:
/// 0. `[writable]` mint: [Mint] 
/// 1. `[]` rent_sysvar: [AccountInfo] 
///
/// Data:
/// - decimals: [u8] Number of base 10 digits to the right of the decimal place.
/// - mint_authority: [Pubkey] The authority/multisignature to mint tokens.
/// - freeze_authority: [Option<Pubkey>] The freeze authority/multisignature of the mint.
pub fn initialize_mint(
	accounts: &[&AccountInfo],
	decimals: u8,
	mint_authority: Pubkey,
	freeze_authority: Option<Pubkey>,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.InitializeMint");

	let mint_info = accounts[0];
	let rent_sysvar_info = accounts[1];

	invoke(
		&spl_token::instruction::initialize_mint(&id(), mint_info.key, &mint_authority, freeze_authority.as_ref(), decimals).unwrap(),
		&[mint_info.clone(), rent_sysvar_info.clone()],
	)
}

/// Like [`InitializeMint`], but does not require the Rent sysvar to be provided
///
/// Accounts:
/// 0. `[writable]` mint: [Mint] 
///
/// Data:
/// - decimals: [u8] Number of base 10 digits to the right of the decimal place.
/// - mint_authority: [Pubkey] The authority/multisignature to mint tokens.
/// - freeze_authority: [Option<Pubkey>] The freeze authority/multisignature of the mint.
pub fn initialize_mint2(
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

/// Revokes the delegate's authority.
///
/// Accounts:
/// 0. `[writable]` source: [AccountInfo] The source account.
/// 1. `[signer]` owner: [AccountInfo] The source account owner.
pub fn revoke(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.Revoke");

	let source_info = accounts[0];
	let owner_info = accounts[1];

	invoke(
		&spl_token::instruction::revoke(&id(), source_info.key, owner_info.key, &[]).unwrap(),
		&[source_info.clone(), owner_info.clone()],
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

/// Given a wrapped / native token account (a token account containing SOL)
/// updates its amount field based on the account's underlying `lamports`.
/// This is useful if a non-wrapped SOL account uses `system_instruction::transfer`
/// to move lamports to a wrapped token account, and needs to have its token
/// `amount` field updated.
///
/// Accounts:
/// 0. `[writable]` account: [AccountInfo] The native token account to sync with its underlying lamports.
pub fn sync_native(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.SyncNative");

	let account_info = accounts[0];

	invoke(
		&spl_token::instruction::sync_native(&id(), account_info.key).unwrap(),
		&[account_info.clone()],
	)
}

/// Thaw a Frozen account using the Mint's freeze_authority (if set).
///
/// Accounts:
/// 0. `[writable]` account: [AccountInfo] The account to freeze.
/// 1. `[]` mint: [Mint] The token mint.
/// 2. `[signer]` owner: [AccountInfo] The mint freeze authority.
pub fn thaw_account(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.ThawAccount");

	let account_info = accounts[0];
	let mint_info = accounts[1];
	let owner_info = accounts[2];

	invoke(
		&spl_token::instruction::thaw_account(&id(), account_info.key, mint_info.key, owner_info.key, &[]).unwrap(),
		&[account_info.clone(), mint_info.clone(), owner_info.clone()],
	)
}

/// Transfers tokens from one account to another either directly or via a
/// delegate.  If this account is associated with the native mint then equal
/// amounts of SOL and Tokens will be transferred to the destination
/// account.
///
/// Accounts:
/// 0. `[writable]` source: [AccountInfo] The source account.
/// 1. `[writable]` destination: [AccountInfo] The destination account.
/// 2. `[signer]` authority: [AccountInfo] The source account's owner/delegate.
///
/// Data:
/// - amount: [u64] The amount of tokens to transfer.
pub fn transfer(
	accounts: &[&AccountInfo],
	amount: u64,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplToken.Transfer");

	let source_info = accounts[0];
	let destination_info = accounts[1];
	let authority_info = accounts[2];

	invoke(
		&spl_token::instruction::transfer(&id(), source_info.key, destination_info.key, authority_info.key, &[], amount).unwrap(),
		&[source_info.clone(), destination_info.clone(), authority_info.clone()],
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