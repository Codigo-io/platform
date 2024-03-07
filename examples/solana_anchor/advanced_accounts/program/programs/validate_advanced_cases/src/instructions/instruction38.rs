#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn handler(ctx: Context<Instruction38>) -> Result<()> {
    let acc_info = ctx.accounts.signer_1.to_account_info();
    assert!(acc_info.is_signer == true);
    Ok(())
}
