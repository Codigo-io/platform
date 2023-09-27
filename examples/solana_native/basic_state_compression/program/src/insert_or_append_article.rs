use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Article,
};


/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 4. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
///
/// Data:
/// - root: [Vec<u8>] 
/// - index: [u32] 
/// - name: [String] 
/// - description: [String] type
/// - thumbnail: [String] 
pub fn insert_or_append_article(
	program_id: &Pubkey,
	for_insert_or_append: &[&AccountInfo],
	merkle_tree: &AccountInfo,
	authority: &AccountInfo,
	noop: &AccountInfo,
	root: Vec<u8>,
	index: u32,
	name: String,
	description: String,
	thumbnail: String,
) -> ProgramResult {
    // Implement your business logic here...

	let mut article = Article::default();

	article.name = name;
	article.description = description;
	article.thumbnail = thumbnail;

	crate::generated::compression::compress_article_by_insert_or_append(for_insert_or_append, &article, root, index)?;

    Ok(())
}