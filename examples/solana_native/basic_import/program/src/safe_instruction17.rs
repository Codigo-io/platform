use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
};


/// Reference `validate_accounts_ref.safe_instruction17`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
/// 2. `[]` validate_accounts_v_0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
pub fn safe_instruction17(
	program_id: &Pubkey,
	for_safe_instruction17: &[&AccountInfo],
	account: &Account<validate_accounts::src::state::State>,
) -> ProgramResult {
    // Implement your business logic here...



	validate_accounts::src::cpi::safe_instruction17(
		for_safe_instruction17,
	)?;


    Ok(())
}