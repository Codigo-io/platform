use crate::*;
use anchor_lang::prelude::*;

/// Reference `validate_advanced_cases.instruction23`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
pub fn handler(
	ctx: Context<Instruction43>,
	account_seed_dynamic: u8,
) -> Result<()> {
    // Implement your business logic here...
	
	// Cpi calls wrappers
	ctx.accounts.cpi_validate_advanced_cases_instruction23(
		43,
		account_seed_dynamic,
	)?;

	Ok(())
}
