#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn handler(ctx: Context<Instruction6>) -> Result<()> {
    ctx.accounts.account.field_1 += 1;
    Ok(())
}
