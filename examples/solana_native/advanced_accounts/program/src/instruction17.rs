use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;
use solana_program::msg;

use crate::generated::state::{
	Account,
	State,
};


/// Test `close_unsafe` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer1: [AccountInfo]
/// 2. `[signer]` signer2: [AccountInfo]
/// 3. `[signer]` signer3: [AccountInfo]
/// 4. `[writable]` account: [State] 
pub fn instruction17(
	program_id: &Pubkey,
	account: &mut Account<State>,
) -> ProgramResult {
	msg!("Account.data.field_1 = {}", account.data.field_1);

    Ok(())
}