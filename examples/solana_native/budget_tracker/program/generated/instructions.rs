// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::BudgetTrackerError;

#[derive(BorshSerialize, Debug)]
pub enum BudgetTrackerInstruction {
/// To call once per account. Initialize a Record account. The total_balance of the account will be set to 0.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` user_record: [Record] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - user_name: [String] The username to be assigned to the Record.name property
/// - user_record_seed_index: [u8] Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
	CreateUserRecord(CreateUserRecordArgs),

/// Register the given amount as an income for the given record account. The total total_balance of the account will be increased.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` user_record: [Record] 
///
/// Data:
/// - amount: [u32] The amount to be registered as the income.
/// - user_record_seed_index: [u8] Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
	RegisterIncome(RegisterIncomeArgs),

/// Register the given amount as an outcome for the given record account. The total total_balance of the account will be decreased.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` user_record: [Record] The user record account
///
/// Data:
/// - amount: [u32] Number to be added to the outcome accumulator
/// - user_record_seed_index: [u8] Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
	RegisterOutcome(RegisterOutcomeArgs),

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateUserRecordArgs {
	pub user_name: String,
	pub user_record_seed_index: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct RegisterIncomeArgs {
	pub amount: u32,
	pub user_record_seed_index: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct RegisterOutcomeArgs {
	pub amount: u32,
	pub user_record_seed_index: u8,
}

impl BudgetTrackerInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(BudgetTrackerError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::CreateUserRecord(CreateUserRecordArgs::try_from_slice(rest).unwrap()),
			1 => Self::RegisterIncome(RegisterIncomeArgs::try_from_slice(rest).unwrap()),
			2 => Self::RegisterOutcome(RegisterOutcomeArgs::try_from_slice(rest).unwrap()),
			_ => return Err(BudgetTrackerError::InvalidInstruction.into())
        })
    }
}