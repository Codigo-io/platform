use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};

/// Reference `validate_security.instruction6`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [SystemProgramOwnsPdaaccount] 
/// 2. `[]` validate_security_v_0_0_0: [AccountInfo] Auto-generated, ValidateSecurityProgram v0.0.0
///
/// Data:
/// - account_seed_owner: [Pubkey] Auto-generated, from input account of type [SystemProgramOwnsPdaaccount] set the seed named owner, required by the type
/// - account_seed_index: [u16] Auto-generated, from input account of type [SystemProgramOwnsPdaaccount] set the seed named index, required by the type
pub fn instruction70(
	program_id: &Pubkey,
	for_instruction6: &[&AccountInfo],
	account: &AccountPDA<validate_security::src::state::SystemProgramOwnsPdaaccount>,
	account_seed_owner: Pubkey,
	account_seed_index: u16,
) -> ProgramResult {
    // Implement your business logic here...

	validate_security::src::cpi::instruction6(
		for_instruction6,
		account_seed_owner,
		account_seed_index,
	)?;

    Ok(())
}