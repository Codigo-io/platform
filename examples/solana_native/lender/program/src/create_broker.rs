use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	Broker,
};


/// After deploying the contract this must be the first instruction
/// to call. It will configure the broker account.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` delegate: [AccountInfo] This will be the account that has permission to update the broker and approved request.
/// 2. `[writable]` broker: [Broker] 
/// 3. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - amount: [u64] The amount to be added to the capital. It will be debited from the delegate account
/// - fee: [u8] 
pub fn create_broker(
	program_id: &Pubkey,
	delegate: &AccountInfo,
	broker: &mut AccountPDA<Broker>,
	amount: u64,
	fee: u8,
) -> ProgramResult {
    // Set initial broker state
    broker.data.delegate = *delegate.key;
    broker.data.capital = amount as u128;
    broker.data.lended = 0;
    broker.data.revenue = 0;
    broker.data.fee = fee;

    // Transfer from delegate account to broker's account
    **delegate.try_borrow_mut_lamports()? -= amount;
    **broker.info.try_borrow_mut_lamports()? += amount;

    Ok(())
}
