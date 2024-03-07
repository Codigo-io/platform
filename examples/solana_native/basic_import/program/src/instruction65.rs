use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
};

/// Reference `validate_security.instruction1`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [SelfOwnerNonPdaaccount] 
/// 2. `[]` validate_security_v_0_0_0: [AccountInfo] Auto-generated, ValidateSecurityProgram v0.0.0
pub fn instruction65(
	program_id: &Pubkey,
	for_instruction1: &[&AccountInfo],
	account: &Account<validate_security::src::state::SelfOwnerNonPdaaccount>,
) -> ProgramResult {
    // Implement your business logic here...

	validate_security::src::cpi::instruction1(
		for_instruction1,
	)?;

    Ok(())
}