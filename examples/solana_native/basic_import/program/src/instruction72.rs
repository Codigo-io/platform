use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};

/// Reference `validate_security.instruction8`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [CheckPdaaccountLength] 
/// 2. `[]` validate_security_v_0_0_0: [AccountInfo] Auto-generated, ValidateSecurityProgram v0.0.0
pub fn instruction72(
	program_id: &Pubkey,
	for_instruction8: &[&AccountInfo],
	account: &AccountPDA<validate_security::src::state::CheckPdaaccountLength>,
) -> ProgramResult {
    // Implement your business logic here...

	validate_security::src::cpi::instruction8(
		for_instruction8,
	)?;

    Ok(())
}