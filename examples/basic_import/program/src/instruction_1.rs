use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
};

/// Reference `validate_accounts.instruction1`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [NonPdaaccountWithOneField] 
/// 2. `[]` validate_accounts_v_0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
pub fn instruction_1(
	program_id: &Pubkey,
	for_instruction_1: &[&AccountInfo],
	account: &Account<validate_accounts::src::state::NonPdaaccountWithOneField>,
) -> ProgramResult {
    // Implement your business logic here...

	validate_accounts::src::cpi::instruction_1(
		for_instruction_1,
		1,
	)?;

    Ok(())
}