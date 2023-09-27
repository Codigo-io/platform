#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn instruction5(ctx: Context<Instruction5>) -> Result<()> {
    ctx.accounts.account.field_1 += 1;
    Ok(())
}
