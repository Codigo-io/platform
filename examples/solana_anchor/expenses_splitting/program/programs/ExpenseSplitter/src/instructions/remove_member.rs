use crate::*;
use anchor_lang::prelude::*;

/// Removes a member from the group.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount]
///
/// Data:
/// - member: [Pubkey] Public key of the member to remove.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
pub fn handler(ctx: Context<RemoveMember>, member: Pubkey) -> Result<()> {
    let group_account = ctx.accounts.group_account;

    assert!(
        group_account.members.contains(group_account.info.key),
        "only group members can remove members from the group account"
    );

    let member_idx = group_account
        .members
        .iter()
        .position(|&address| address == member)
        .expect("could not find member to remove within this group");

    assert!(
        group_account.balances[member_idx] == 0,
        "member balance should be zero before removal"
    );

    group_account.members.remove(member_idx);
    group_account.balances.remove(member_idx);

    Ok(())
}
