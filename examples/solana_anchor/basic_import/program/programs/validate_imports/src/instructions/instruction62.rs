use crate::*;
use anchor_lang::prelude::*;

/// Reference `validate_advanced_cases.instruction42`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
/// 4. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
pub fn handler(
	ctx: Context<Instruction62>,
) -> Result<()> {
    // Implement your business logic here...
	
	// Cpi calls wrappers
	ctx.accounts.cpi_validate_advanced_cases_instruction42()?;

	Ok(())
}
