use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	Record,
};


/// Register the given amount as an outcome for the given record account. The total total_balance of the account will be decreased.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` user_record: [Record] The user record account
///
/// Data:
/// - amount: [u32] Number to be added to the outcome accumulator
/// - user_record_seed_index: [u8] Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
pub fn register_outcome(
	_program_id: &Pubkey,
	user_record: &mut AccountPDA<Record>,
	amount: u32,
) -> ProgramResult {
	user_record.data.moves += 1;
	user_record.data.outcome += amount;
	user_record.data.total_balance -= amount as i64;

    Ok(())
}