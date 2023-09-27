#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn instruction14(ctx: Context<Instruction14>, input_1: u8) -> Result<()> {
    ctx.accounts.account.field_1 = input_1;
    Ok(())
}
