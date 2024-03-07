use crate::*;
use anchor_lang::prelude::*;

/// Reference `validate_advanced_cases.instruction17`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
pub fn handler(
	ctx: Context<Instruction37>,
) -> Result<()> {
    // Implement your business logic here...
	
	// Cpi calls wrappers
	ctx.accounts.cpi_validate_advanced_cases_instruction17()?;

	Ok(())
}
