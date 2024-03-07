use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::errors::ValidateInventoryError;
use crate::generated::state::{
    Account,
    AccountPDA,
    Article,
    Warehouse,
};

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[]` warehouse: [Warehouse]
/// 2. `[writable, signer]` mint: [Mint]
/// 3. `[signer]` delegate: [AccountInfo]
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 5. `[writable, signer]` funding: [AccountInfo] Funding account (must be a system account)
/// 6. `[writable]` assoc_token_account: [AccountInfo] Associated token account address to be created
/// 7. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 8. `[]` token_program: [AccountInfo] SPL Token program
/// 9. `[signer]` owner: [AccountInfo] The mint's minting authority.
/// 10. `[writable]` merkle_tree: [AccountInfo] The merkle tree account.
/// 11. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 12. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 13. `[]` csl_spl_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplTokenProgram v0.0.0
/// 14. `[]` csl_spl_assoc_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplAssocTokenProgram v0.0.0
/// 15. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
///
/// Data:
/// - name: [String]
/// - description: [String] type
/// - thumbnail: [String]
pub fn create_article(
	program_id: &Pubkey,
	for_initialize_mint2: &[&AccountInfo],
	for_create: &[&AccountInfo],
	for_mint_to: &[&AccountInfo],
	for_set_authority: &[&AccountInfo],
	for_append: &[&AccountInfo],
	warehouse: &AccountPDA<Warehouse>,
	mint: &Account<spl_token::state::Mint>,
	delegate: &AccountInfo,
	funding: &AccountInfo,
	assoc_token_account: &AccountInfo,
	wallet: &AccountInfo,
	owner: &AccountInfo,
	merkle_tree: &AccountInfo,
	authority: &AccountInfo,
	noop: &AccountInfo,
	name: String,
	description: String,
	thumbnail: String,
) -> ProgramResult {
	if !warehouse.data.delegates.contains(delegate.key) && warehouse.data.owner != *delegate.key {
		return Err(ValidateInventoryError::NotExpectedAddress.into());
	}

	let mut article = Article::default();
	article.name = name;
	article.description = description;
	article.thumbnail = thumbnail;
	article.mint = *mint.info.key;
	article.current_warehouse = Some(*warehouse.info.key);
	article.owner = *assoc_token_account.key;

	csl_spl_token::src::cpi::initialize_mint2(for_initialize_mint2, 0, *wallet.key, None)?;
	csl_spl_assoc_token::src::cpi::create(for_create)?;
	csl_spl_token::src::cpi::mint_to(for_mint_to, 1)?;
	csl_spl_token::src::cpi::set_authority(for_set_authority, 0, None)?;

	crate::generated::compression::compress_article_by_append(for_append, &article)?;

    Ok(())
}