#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn handler(ctx: Context<Increment>) -> Result<()> {
    ctx.accounts.counter.count += 1;

    Ok(())
}
