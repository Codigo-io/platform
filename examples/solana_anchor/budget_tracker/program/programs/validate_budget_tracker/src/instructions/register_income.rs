#![allow(unused)]
use anchor_lang::prelude::*;
use crate::*;

pub fn handler(ctx: Context<RegisterIncome>,amount:u32) -> Result<()> {
    ctx.accounts.user_record.moves += 1;
	ctx.accounts.user_record.income += amount;
	ctx.accounts.user_record.total_balance += amount as i64;
    Ok(())
}
