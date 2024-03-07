use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
	Account10Mib,
};


/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
/// 2. `[signer]` account_info: [AccountInfo] 
pub fn init_two_big_account_on_client(
	program_id: &Pubkey,
	account: &Account<Account10Mib>,
	account_info: &AccountInfo,
) -> ProgramResult {
    // Implement your business logic here...






    Ok(())
}