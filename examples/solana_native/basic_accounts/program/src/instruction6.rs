use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::msg;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	State,
};

/// Test `non-mut` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State]
pub fn instruction6(
	program_id: &Pubkey,
	account: &AccountPDA<State>,
) -> ProgramResult {
	msg!("Account field_1 value {}", account.data.field_1);

    Ok(())
}