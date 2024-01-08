use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;
use solana_program::msg;

use crate::generated::{
    errors::InformalLenderError,
    state::{AccountPDA, Broker, Loan},
};

/// A client can pay a loan through this instruction. When paying
/// the contract will calculate the interest based on the loan approved
/// fee. Additioanlly, it will transfer money from the client's account
/// to the broker account
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` client: [AccountInfo] 
/// 2. `[writable]` loan: [Loan] 
/// 3. `[writable]` broker: [Broker] 
///
/// Data:
/// - amount: [u64] The amount to pay to the loan
/// - loan_seed_index: [u32] Auto-generated, from input loan of type [Loan] set the seed named index, required by the type
pub fn pay_loan(
	program_id: &Pubkey,
	client: &AccountInfo,
	loan: &mut AccountPDA<Loan>,
	broker: &mut AccountPDA<Broker>,
	amount: u64,
) -> ProgramResult {
    // Check if the client is not over-paying
    if loan.data.payed + amount > loan.data.amount {
        return Err(InformalLenderError::InvalidInstruction.into());
    }

    // Calculate how much interest the client need to pay, we round up
    let interest = loan.data.amount / loan.data.fee as u64;

    // Update the broker state
    broker.data.revenue += interest as u128;
    broker.data.capital += amount as u128;
    broker.data.lended -= amount as u128;

    // Update loan's payed amount
    loan.data.payed += amount;

    // Transfer from client's account to broker account
    let total = amount + interest;
    **client.try_borrow_mut_lamports()? -= total;
    **broker.info.try_borrow_mut_lamports()? += total;

    msg!("Loan amount: {}, Interest: {}, Total: {}", loan.data.amount, interest, total);

    Ok(())
}
