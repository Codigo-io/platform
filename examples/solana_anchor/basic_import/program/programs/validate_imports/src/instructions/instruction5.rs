use crate::*;
use anchor_lang::prelude::*;

/// Reference `validate_accounts_ref.instruction5`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
pub fn handler(
	ctx: Context<Instruction5>,
) -> Result<()> {
    // Implement your business logic here...
	
	// Cpi calls wrappers
	ctx.accounts.cpi_validate_accounts_ref_instruction5()?;

	Ok(())
}
