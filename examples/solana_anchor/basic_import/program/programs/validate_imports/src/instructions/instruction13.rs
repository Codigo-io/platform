use crate::*;
use anchor_lang::prelude::*;

/// Reference `validate_accounts_ref.instruction13`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 3. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
pub fn handler(
	ctx: Context<Instruction13>,
) -> Result<()> {
    // Implement your business logic here...
	
	// Cpi calls wrappers
	ctx.accounts.cpi_validate_accounts_ref_instruction13(
		13,
	)?;

	Ok(())
}
