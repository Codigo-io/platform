use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;



/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[writable]` recipient: [AccountInfo] The SOL recevier.
/// 4. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
pub fn close_empty_tree(
	program_id: &Pubkey,
	for_close_empty_tree: &[&AccountInfo],
	merkle_tree: &AccountInfo,
	authority: &AccountInfo,
	recipient: &AccountInfo,
) -> ProgramResult {
    // Implement your business logic here...



	csl_spl_account_compression::src::cpi::close_empty_tree(
		for_close_empty_tree,
	)?;


    Ok(())
}