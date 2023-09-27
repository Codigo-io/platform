#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn instruction4(ctx: Context<Instruction4>, input_1: u8) -> Result<()> {
    ctx.accounts.account.field_1 = input_1;
    Ok(())
}
