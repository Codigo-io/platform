use solana_program::entrypoint::ProgramResult;
use solana_program::msg;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{AccountPDA, GroupAccount};

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
pub fn log_payment(
    program_id: &Pubkey,
    group_account: &mut AccountPDA<GroupAccount>,
    title: String,
    participants: Vec<Pubkey>,
    amounts: Vec<u64>,
    participation_factors: Vec<u64>,
) -> ProgramResult {
    assert!(
        group_account.data.members.contains(group_account.info.key),
        "only group members can log payments in the group account"
    );

    assert!(
        participants.len() > 0,
        "participants list should provide at least one address"
    );
    assert!(
        participants.len() == amounts.len(),
        "participants and amounts lists should be of equal size"
    );
    assert!(
        participants.len() == participation_factors.len(),
        "participants and participation factors lists should be of equal size"
    );

    let total_amount: u64 = amounts.iter().sum();
    let total_participation: u64 = participation_factors.iter().sum();

    assert!(
        total_participation > 0,
        "participation factors sum should be greater than zero"
    );

    for (participant_idx, participant_address) in participants.iter().enumerate() {
        // payment log participant addresses could be in any order, we need to match them with group account members order
        let member_idx = group_account
            .data
            .members
            .iter()
            .position(|&member_address| member_address == *participant_address)
            .expect(
                format!(
                    "participant {} is not a member of this group",
                    participant_address
                )
                .as_str(),
            );

        // high-level formula: member balance += payment - total expenditure * participation
        let expenditure =
            total_amount * participation_factors[participant_idx] / total_participation;

        group_account.data.balances[member_idx] += (amounts[participant_idx] - expenditure) as i64;

        msg!(
            "Group '{}' payment '{}' of {:?}. Member {} spended {:?} and paid {:?}",
            group_account.data.group_name,
            title,
            total_amount,
            participant_address,
            expenditure,
            amounts[participant_idx]
        );
    }

    // just in case
    assert!(
        group_account.data.balances.iter().sum::<i64>() == 0,
        "group balances should sum zero, something went wrong"
    );

    Ok(())
}
