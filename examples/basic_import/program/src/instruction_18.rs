use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};

/// Reference `validate_accounts.instruction18`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 2. `[]` validate_accounts_v_0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
pub fn instruction_18(
	program_id: &Pubkey,
	for_instruction_18: &[&AccountInfo],
	account: &AccountPDA<validate_accounts::src::state::PdaaccountWithOneStaticSeedAndOneField>,
) -> ProgramResult {
    // Implement your business logic here...

	validate_accounts::src::cpi::instruction_18(
		for_instruction_18,
	)?;

    Ok(())
}