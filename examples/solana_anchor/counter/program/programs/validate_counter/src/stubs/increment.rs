#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn increment(ctx: Context<Increment>) -> Result<()> {
    ctx.accounts.counter.count += 1;

    Ok(())
}
