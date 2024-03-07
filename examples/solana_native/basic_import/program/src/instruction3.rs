use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};


/// Reference `validate_accounts_ref.instruction3`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` validate_accounts_v_0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
pub fn instruction3(
	program_id: &Pubkey,
	for_instruction3: &[&AccountInfo],
	account: &AccountPDA<validate_accounts::src::state::State>,
	account_seed_dynamic: u8,
) -> ProgramResult {
    // Implement your business logic here...

	validate_accounts::src::cpi::instruction3(
		for_instruction3,
		3,
		account_seed_dynamic,
	)?;

    Ok(())
}