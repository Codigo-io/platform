use crate::*;
use anchor_lang::prelude::*;

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
pub fn handler(
	ctx: Context<CreateGroup>,
	group_name: String,
	members: Vec<Pubkey>,
	initial_balances: Vec<i64>,
) -> Result<()> {
    assert!(members.len() > 0, "members list should provide at least one address");
    
    assert!(initial_balances.len() == members.len(), "members and initial balances lists should be of equal size");

    assert!(initial_balances.sum() == 0, "initial balances should sum zero");

    let group_account = ctx.accounts.group_account;

    group_account.name = group_name;
    group_account.members = members;
    group_account.balances = initial_balances;
	
	Ok(())
}
