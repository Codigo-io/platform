#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn instruction2(ctx: Context<Instruction2>, input_1: u8) -> Result<()> {
    ctx.accounts.account.field_1 = input_1;
    Ok(())
}
