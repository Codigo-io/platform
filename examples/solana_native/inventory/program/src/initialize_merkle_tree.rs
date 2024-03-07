use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;



/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` merkle_tree: [AccountInfo]
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 4. `[]` account_compression: [AccountInfo] Account Compression program it self
/// 5. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
pub fn initialize_merkle_tree(
	program_id: &Pubkey,
	for_init_empty_merkle_tree: &[&AccountInfo],
	merkle_tree: &AccountInfo,
	authority: &AccountInfo,
	noop: &AccountInfo,
	account_compression: &AccountInfo,
) -> ProgramResult {
	csl_spl_account_compression::src::cpi::init_empty_merkle_tree(
		for_init_empty_merkle_tree,
		30,
		512,
	)?;

    Ok(())
}