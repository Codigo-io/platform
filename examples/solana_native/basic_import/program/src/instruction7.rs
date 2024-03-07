use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};


/// Reference `validate_accounts_ref.instruction7`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
/// 2. `[]` validate_accounts_v_0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
pub fn instruction7(
	program_id: &Pubkey,
	for_instruction7: &[&AccountInfo],
	account: &AccountPDA<validate_accounts::src::state::State>,
	account_seed_dynamic: u8,
) -> ProgramResult {
    // Implement your business logic here...



	validate_accounts::src::cpi::instruction7(
		for_instruction7,
		account_seed_dynamic,
	)?;


    Ok(())
}