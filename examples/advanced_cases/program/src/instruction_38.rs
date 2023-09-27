use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::msg;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
    Account,
    NonPdaaccountWithOneField,
};

/// Test `non-mut` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[signer]` signer_1: [NonPdaaccountWithOneField] 
pub fn instruction_38(
	program_id: &Pubkey,
	signer_1: &Account<NonPdaaccountWithOneField>,
) -> ProgramResult {
	msg!("Account.data.field_1 = {}", signer_1.data.field_1);

    Ok(())
}