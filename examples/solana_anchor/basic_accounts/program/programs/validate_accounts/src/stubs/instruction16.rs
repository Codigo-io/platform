#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn instruction16(ctx: Context<Instruction16>, input_1: u8) -> Result<()> {
    ctx.accounts.account.field_1 = input_1;
    Ok(())
}
