use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};

/// Reference `validate_security.instruction4`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [SelfOwnerPdaaccountOmitted] 
/// 2. `[]` validate_security_v_0_0_0: [AccountInfo] Auto-generated, ValidateSecurityProgram v0.0.0
pub fn instruction68(
	program_id: &Pubkey,
	for_instruction4: &[&AccountInfo],
	account: &AccountPDA<validate_security::src::state::SelfOwnerPdaaccountOmitted>,
) -> ProgramResult {
    // Implement your business logic here...

	validate_security::src::cpi::instruction4(
		for_instruction4,
	)?;

    Ok(())
}