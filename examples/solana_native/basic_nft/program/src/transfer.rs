use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
    Account,
    AccountPDA,
	Gem,
};

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` mint: [Mint] 
/// 2. `[writable]` gem: [GemMetadata] 
/// 3. `[writable, signer]` funding: [AccountInfo] Funding account (must be a system account)
/// 4. `[writable]` assoc_token_account: [Account] Associated token account address to be created
/// 5. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 6. `[]` system_program: [AccountInfo] System program
/// 7. `[]` token_program: [AccountInfo] SPL Token program
/// 8. `[writable]` source: [AccountInfo] The source account.
/// 9. `[writable]` destination: [AccountInfo] The destination account.
/// 10. `[signer]` authority: [AccountInfo] The source account's owner/delegate.
/// 11. `[]` csl_spl_assoc_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplAssocTokenProgram v0.0.0
/// 12. `[]` csl_spl_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplTokenProgram v0.0.0
pub fn transfer(
	program_id: &Pubkey,
	for_create: &[&AccountInfo],
	for_transfer_checked: &[&AccountInfo],
	mint: &Account<spl_token::state::Mint>,
	gem: &mut AccountPDA<Gem>,
	funding: &AccountInfo,
	assoc_token_account: &AccountInfo,
	wallet: &AccountInfo,
	source: &AccountInfo,
	destination: &AccountInfo,
	authority: &AccountInfo,
) -> ProgramResult {
	gem.data.assoc_account = Some(*destination.key);

	// Create the ATA account for new owner if it hasn't been created
	if assoc_token_account.lamports() == 0 {
		csl_spl_assoc_token::src::cpi::create(for_create)?;
	}

	csl_spl_token::src::cpi::transfer_checked(for_transfer_checked, 1, 0)?;

	Ok(())
}