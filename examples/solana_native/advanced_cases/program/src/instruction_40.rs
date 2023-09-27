use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::msg;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
	NonPdaaccountWithOneField,
};

/// Test `init` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [NonPdaaccountWithOneField] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
pub fn instruction_40(
	program_id: &Pubkey,
	signer_1: &mut Account<NonPdaaccountWithOneField>,
) -> ProgramResult {
	signer_1.data.field_1 = 40;
	msg!("Account.data.field_1 = {}", signer_1.data.field_1);

    Ok(())
}