use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
};


/// Reference `validate_advanced_cases.instruction38`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer2: [AccountInfo]
/// 2. `[signer]` signer3: [AccountInfo]
/// 3. `[signer]` signer1: [State]
/// 4. `[]` validate_advanced_cases_v_0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
pub fn instruction58(
	program_id: &Pubkey,
	for_instruction38: &[&AccountInfo],
	signer1: &Account<validate_advanced_cases::src::state::State>,
) -> ProgramResult {
    // Implement your business logic here...



	validate_advanced_cases::src::cpi::instruction38(
		for_instruction38,
	)?;


    Ok(())
}