// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::ExpenseSplitterError;

#[derive(BorshSerialize, Debug)]
pub enum ExpenseSplitterInstruction {
/// Creates a new group with initial members and balances.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - group_name: [String] The name of the group.
/// - members: [Vec<Pubkey>] Array of member public keys.
/// - initial_balances: [Vec<i64>] Array of initial balances for each member.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	CreateGroup(CreateGroupArgs),

/// Adds a new member to the group.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
///
/// Data:
/// - new_member: [Pubkey] Public key of the new member.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	AddMember(AddMemberArgs),

/// Removes a member from the group.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
///
/// Data:
/// - member: [Pubkey] Public key of the member to remove.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	RemoveMember(RemoveMemberArgs),

/// Logs a payment made by or for group members, updating balances accordingly.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount] 
///
/// Data:
/// - title: [String] Title or description of the payment.
/// - participants: [Vec<Pubkey>] Array of participating member public keys.
/// - amounts: [Vec<u64>] Array of amounts each participant gave to the group.
/// - participation_factors: [Vec<u64>] Array of participation factors for each participant.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
	LogPayment(LogPaymentArgs),

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateGroupArgs {
	pub group_name: String,
	pub members: Vec<Pubkey>,
	pub initial_balances: Vec<i64>,
	pub group_account_seed_group_name: String,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct AddMemberArgs {
	pub new_member: Pubkey,
	pub group_account_seed_group_name: String,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct RemoveMemberArgs {
	pub member: Pubkey,
	pub group_account_seed_group_name: String,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct LogPaymentArgs {
	pub title: String,
	pub participants: Vec<Pubkey>,
	pub amounts: Vec<u64>,
	pub participation_factors: Vec<u64>,
	pub group_account_seed_group_name: String,
}

impl ExpenseSplitterInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(ExpenseSplitterError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::CreateGroup(CreateGroupArgs::try_from_slice(rest).unwrap()),
			1 => Self::AddMember(AddMemberArgs::try_from_slice(rest).unwrap()),
			2 => Self::RemoveMember(RemoveMemberArgs::try_from_slice(rest).unwrap()),
			3 => Self::LogPayment(LogPaymentArgs::try_from_slice(rest).unwrap()),
			_ => return Err(ExpenseSplitterError::InvalidInstruction.into())
        })
    }
}