use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::{
    errors::InformalLenderError,
    state::{AccountPDA, Broker, Loan},
};

/// Through this instruction the delegate can approve a loan.
/// Upon approval, the funds will be transfer from the broker
/// account to the client's account.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` delegate: [AccountInfo] 
/// 2. `[writable]` loan: [Loan] 
/// 3. `[writable]` broker: [Broker] 
/// 4. `[writable]` client: [AccountInfo] 
///
/// Data:
/// - loan_seed_index: [u32] Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
pub fn approve_loan(
	program_id: &Pubkey,
	delegate: &AccountInfo,
	loan: &mut AccountPDA<Loan>,
	broker: &mut AccountPDA<Broker>,
	client: &AccountInfo,
) -> ProgramResult {
    // Check if the broker has enough capital to lend
    if broker.data.capital.saturating_sub(loan.data.amount as u128) <= 0 {
        return Err(InformalLenderError::InvalidInstruction.into());
    }

    // Check if the delegate is the authorized user by the broker
    if broker.data.delegate != *delegate.key {
        return Err(InformalLenderError::InvalidInstruction.into());
    }

    // Check if the client to which we will transfer the funds is the client that requested the loan
    if *client.key != loan.data.client {
        return Err(InformalLenderError::InvalidInstruction.into());
    }

    // Update the broker state
    broker.data.capital -= loan.data.amount as u128;
    broker.data.lended += loan.data.amount as u128;
    loan.data.approved = true;

    // Transfer from broker account to client's account
    **broker.info.try_borrow_mut_lamports()? -= loan.data.amount;
    **client.try_borrow_mut_lamports()? += loan.data.amount;

    Ok(())
}
