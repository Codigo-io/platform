#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn handler(
    ctx: Context<Instruction35>,
    u8_type: u8,
    u16_type: u16,
    u32_type: u32,
    u64_type: u64,
    i8_type: i8,
    i16_type: i16,
    i32_type: i32,
    i64_type: i64,
    string_type: String,
) -> Result<()> {
    ctx.accounts.account.field_1 = 35;
    Ok(())
}
