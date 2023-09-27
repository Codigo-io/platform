use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Article,
};


/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` merkle_tree: [AccountInfo] 
/// 2. `[]` noop: [AccountInfo] Noop program
/// 3. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
///
/// Data:
/// - leaf: [Vec<u8>] 
/// - root: [Vec<u8>] 
/// - index: [u32] 
pub fn verify_leaf_article(
	program_id: &Pubkey,
	for_verify_leaf: &[&AccountInfo],
	merkle_tree: &AccountInfo,
	noop: &AccountInfo,
	leaf: Vec<u8>,
	root: Vec<u8>,
	index: u32,
) -> ProgramResult {
    // Implement your business logic here...



	csl_spl_account_compression::src::cpi::verify_leaf(
		for_verify_leaf,
		root,
		leaf,
		index,
	)?;


    Ok(())
}