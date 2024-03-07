use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
	State,
};

/// Test `init_if_needed` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State]
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction13(
	program_id: &Pubkey,
	account: &mut Account<State>,
	input_1: u8,
) -> ProgramResult {
	account.data.field_1 = input_1;

    Ok(())
}