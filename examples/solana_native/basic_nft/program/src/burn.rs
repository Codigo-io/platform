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
/// 1. `[writable]` mint: [Mint] 
/// 2. `[writable]` gem: [GemMetadata] 
/// 3. `[writable]` account: [Account] The account to burn from.
/// 4. `[signer]` owner: [AccountInfo] The account's owner/delegate.
/// 5. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 6. `[]` token_program: [AccountInfo] SPL Token program
/// 7. `[]` csl_spl_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplTokenProgram v0.0.0
pub fn burn(
	program_id: &Pubkey,
	for_burn: &[&AccountInfo],
	mint: &Account<spl_token::state::Mint>,
	gem: &mut AccountPDA<Gem>,
	account: &AccountPDA<spl_token::state::Account>,
	owner: &AccountInfo,
	wallet: &AccountInfo,
) -> ProgramResult {
	gem.data.assoc_account = None;
	csl_spl_token::src::cpi::burn(for_burn, 1)?;

    Ok(())
}