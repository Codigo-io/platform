use crate::*;
use anchor_lang::prelude::*;

/// Adds a new member to the group.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` group_account: [GroupAccount]
///
/// Data:
/// - new_member: [Pubkey] Public key of the new member.
/// - group_account_seed_group_name: [String] Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
pub fn handler(ctx: Context<AddMember>, new_member: Pubkey) -> Result<()> {
    let group_account = ctx.accounts.group_account;

    assert!(
        group_account.members.contains(group_account.info.key),
        "only group members can add new members to the group account"
    );

    assert!(
        !group_account.members.contains(&new_member),
        "provided new member is already a member of this group"
    );

    group_account.members.push(new_member);
    group_account.balances.push(0);

    Ok(())
}
