use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;
use solana_program::msg;

use crate::generated::state::{
	Account,
	State,
};


/// Test `close` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer2: [AccountInfo]
/// 2. `[signer]` signer3: [AccountInfo]
/// 3. `[writable, signer]` signer1: [State]
pub fn instruction42(
	program_id: &Pubkey,
	signer1: &mut Account<State>,
) -> ProgramResult {
	signer1.data.field_1 = 42;
	msg!("Account.data.field_1 = {}", signer1.data.field_1);

    Ok(())
}