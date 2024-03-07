#![allow(unused)]
use anchor_lang::prelude::*;
use crate::*;

pub fn handler(ctx: Context<Instruction3>,input_1:u8) -> Result<()> {
    ctx.accounts.account.field_1 = input_1;
    
    Ok(())
}
