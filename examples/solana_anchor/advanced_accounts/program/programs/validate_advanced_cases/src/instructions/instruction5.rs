#![allow(unused)]
use anchor_lang::prelude::*;
use crate::*;

pub fn handler(ctx: Context<Instruction5>) -> Result<()> {
    ctx.accounts.account.field_1 += 1;
    
    Ok(())
}
