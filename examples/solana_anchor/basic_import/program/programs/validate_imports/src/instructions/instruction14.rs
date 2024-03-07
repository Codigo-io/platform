use crate::*;
use anchor_lang::prelude::*;

/// Reference `validate_accounts_ref.instruction14`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 3. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
pub fn handler(
	ctx: Context<Instruction14>,
) -> Result<()> {
    // Implement your business logic here...
	
	// Cpi calls wrappers
	ctx.accounts.cpi_validate_accounts_ref_instruction14(
		14,
	)?;

	Ok(())
}
