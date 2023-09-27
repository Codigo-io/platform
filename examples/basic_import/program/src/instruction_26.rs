use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};

/// Reference `validate_advanced_cases.instruction6`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 5. `[]` validate_advanced_cases_v_0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
pub fn instruction_26(
	program_id: &Pubkey,
	for_instruction_6: &[&AccountInfo],
	account: &AccountPDA<validate_advanced_cases::src::state::PdaaccountWithOneStaticSeedAndOneField>,
) -> ProgramResult {
    // Implement your business logic here...

	validate_advanced_cases::src::cpi::instruction_6(
		for_instruction_6,
	)?;

    Ok(())
}