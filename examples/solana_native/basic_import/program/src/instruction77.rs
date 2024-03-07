use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;



/// Reference `validate_security.instruction13`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer1: [AccountInfo]
/// 2. `[]` validate_security_v_0_0_0: [AccountInfo] Auto-generated, ValidateSecurityProgram v0.0.0
pub fn instruction77(
	program_id: &Pubkey,
	for_instruction13: &[&AccountInfo],
) -> ProgramResult {
    // Implement your business logic here...

	validate_security::src::cpi::instruction13(
		for_instruction13,
	)?;

    Ok(())
}