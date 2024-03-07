use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
};

/// Reference `validate_security.instruction10`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer1: [SelfOwnerNonPdaaccount]
/// 2. `[]` validate_security_v_0_0_0: [AccountInfo] Auto-generated, ValidateSecurityProgram v0.0.0
pub fn instruction74(
	program_id: &Pubkey,
	for_instruction10: &[&AccountInfo],
	signer1: &Account<validate_security::src::state::SelfOwnerNonPdaaccount>,
) -> ProgramResult {
    // Implement your business logic here...

	validate_security::src::cpi::instruction10(
		for_instruction10,
	)?;

    Ok(())
}