// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::InformalLenderError;

#[derive(BorshSerialize, Debug)]
pub enum InformalLenderInstruction {
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
	CreateBroker(CreateBrokerArgs),

/// Through this instruction any one can add capital to the broker
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` delegate: [AccountInfo] 
/// 2. `[writable]` broker: [Broker] 
///
/// Data:
/// - amount: [u64] The amount to be added to the capital. It will be debited from the delegate account
	AddCapitalToBroker(AddCapitalToBrokerArgs),

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
	RequestLoan(RequestLoanArgs),

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
	ApproveLoan(ApproveLoanArgs),

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
/// - loan_seed_index: [u32] Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
	PayLoan(PayLoanArgs),

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateBrokerArgs {
	pub amount: u64,
	pub fee: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct AddCapitalToBrokerArgs {
	pub amount: u64,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct RequestLoanArgs {
	pub amount: u64,
	pub kyc_url: String,
	pub loan_seed_index: u32,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct ApproveLoanArgs {
	pub loan_seed_index: u32,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct PayLoanArgs {
	pub amount: u64,
	pub loan_seed_index: u32,
}

impl InformalLenderInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(InformalLenderError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::CreateBroker(CreateBrokerArgs::try_from_slice(rest).unwrap()),
			1 => Self::AddCapitalToBroker(AddCapitalToBrokerArgs::try_from_slice(rest).unwrap()),
			2 => Self::RequestLoan(RequestLoanArgs::try_from_slice(rest).unwrap()),
			3 => Self::ApproveLoan(ApproveLoanArgs::try_from_slice(rest).unwrap()),
			4 => Self::PayLoan(PayLoanArgs::try_from_slice(rest).unwrap()),
			_ => return Err(InformalLenderError::InvalidInstruction.into())
        })
    }
}