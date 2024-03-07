use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::msg;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	State,
};

/// Test `close` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State]
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [State] set the seed named dynamic, required by the type
pub fn instruction19(
	program_id: &Pubkey,
	account: &mut AccountPDA<State>,
) -> ProgramResult {
	msg!("Account field_1 value {}", account.data.field_1);

    Ok(())
}