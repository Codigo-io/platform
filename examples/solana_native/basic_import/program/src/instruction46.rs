use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;



/// Reference `validate_advanced_cases.instruction26`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer1: [AccountInfo]
/// 2. `[writable, signer]` signer2: [AccountInfo]
/// 3. `[signer]` signer3: [AccountInfo]
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v_0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
pub fn instruction46(
	program_id: &Pubkey,
	for_instruction26: &[&AccountInfo],
	account: &AccountInfo,
) -> ProgramResult {
    // Implement your business logic here...



	validate_advanced_cases::src::cpi::instruction26(
		for_instruction26,
		46,
	)?;


    Ok(())
}