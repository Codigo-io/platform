use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{AccountPDA, Broker};

/// Through this insturction any one can add capital to the broker
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` delegate: [AccountInfo] 
/// 2. `[writable]` broker: [Broker] 
///
/// Data:
/// - amount: [u64] The amount to be added to the capital. It will be debited from the delegate account
pub fn add_capital_to_broker(
	program_id: &Pubkey,
	delegate: &AccountInfo,
	broker: &mut AccountPDA<Broker>,
	amount: u64,
) -> ProgramResult {
    // Update broker's capital amount
    broker.data.capital = amount as u128;

    // Transfer from delegate account to broker's account
    **delegate.try_borrow_mut_lamports()? -= amount;
    **broker.info.try_borrow_mut_lamports()? += amount;

    Ok(())
}
