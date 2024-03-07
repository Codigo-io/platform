use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::{
    errors::InformalLenderError,
    state::{AccountPDA, Broker, Loan},
};

/// This instruction is used by a client to request a loan
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` client: [AccountInfo] 
/// 2. `[writable]` loan: [Loan] 
/// 3. `[]` broker: [Broker] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - amount: [u64] The request amount to borrow
/// - kyc_url: [String]
/// - loan_seed_index: [u32] Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
pub fn request_loan(
    program_id: &Pubkey,
    client: &AccountInfo,
    loan: &mut AccountPDA<Loan>,
    broker: &AccountPDA<Broker>,
    amount: u64,
    kyc_url: String,
) -> ProgramResult {
    // Check if the broker has enough capital to lend
    if broker.data.capital.saturating_sub(amount as u128) <= 0 {
        return Err(InformalLenderError::InvalidInstruction.into());
    }

    loan.data.client = *client.key;
    loan.data.amount = amount;
    loan.data.payed = 0;
    loan.data.kyc_url = kyc_url;
    loan.data.fee = broker.data.fee;
    loan.data.approved = false;

    Ok(())
}
