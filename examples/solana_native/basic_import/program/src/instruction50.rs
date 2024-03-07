use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};


/// Reference `validate_advanced_cases.instruction30`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer1: [AccountInfo]
/// 2. `[writable, signer]` signer2: [AccountInfo]
/// 3. `[signer]` signer3: [AccountInfo]
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v_0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
pub fn instruction50(
	program_id: &Pubkey,
	for_instruction30: &[&AccountInfo],
	account: &AccountPDA<validate_advanced_cases::src::state::State>,
) -> ProgramResult {
    // Implement your business logic here...



	validate_advanced_cases::src::cpi::instruction30(
		for_instruction30,
	)?;


    Ok(())
}