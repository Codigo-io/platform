use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
	GreetingAccount,
};


/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` greeting_account: [GreetingAccount] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
pub fn increment(
	_program_id: &Pubkey,
	greeting_account: &mut Account<GreetingAccount>,
) -> ProgramResult {
	greeting_account.data.counter += 1;

    Ok(())
}