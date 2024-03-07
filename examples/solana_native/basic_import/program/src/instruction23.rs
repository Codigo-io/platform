use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};


/// Reference `validate_advanced_cases.instruction3`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer1: [AccountInfo]
/// 2. `[signer]` signer2: [AccountInfo]
/// 3. `[signer]` signer3: [AccountInfo]
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v_0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
pub fn instruction23(
	program_id: &Pubkey,
	for_instruction3: &[&AccountInfo],
	account: &AccountPDA<validate_advanced_cases::src::state::State>,
	account_seed_dynamic: u8,
) -> ProgramResult {
    // Implement your business logic here...



	validate_advanced_cases::src::cpi::instruction3(
		for_instruction3,
		23,
		account_seed_dynamic,
	)?;


    Ok(())
}