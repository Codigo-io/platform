use crate::*;
use anchor_lang::prelude::*;

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
pub fn handler(
	ctx: Context<LogPayment>,
	title: String,
	participants: Vec<Pubkey>,
	amounts: Vec<u64>,
	participation_factors: Vec<u64>,
) -> Result<()> {
    let group_account = ctx.accounts.group_account;
    
    assert!( group_account.members.contains(group_account.info.key), "only group members can log payments in the group account" );

    assert!(participants.len() > 0, "participants list should provide at least one address");
    assert!(participants.len() ==  amounts.len() == participation_factors.len(), "participants, amounts and participation factors lists should be of equal size");

    let total_amount: u64 = amounts.sum();
    let total_participation: u64 = participation_factors.sum();

    assert!(total_participation > 0, "participation factors sum should be greater than zero");

    for (participant_idx, participant_address) in participants.iter().enumerate() {
        // payment log participant addresses could be in any order, we need to match them with group account members order
        member_idx = group_account.members.iter().position(|&member_address| member_address == participant_address).expect( format!("participant {} is not a member of this group", participant_address) );
        
        // high-level formula: member balance += payment - total expenditure * participation
        let expenditure = total_amount * participation_factors[participant_idx] / total_participation;
        group_account.balances[member_idx] += amounts[participant_idx] - expenditure;

        msg!("Group '{}' payment '{}' of {:?}. Member {} spended {:?} and paid {:?}", group_account.name, title, total_amount, participant_address, expenditure, amounts[participant_idx]);
    }

    // just in case
    assert!(group_account.balances.sum() == 0, "group balances should sum zero, something went wrong");
	
	Ok(())
}
