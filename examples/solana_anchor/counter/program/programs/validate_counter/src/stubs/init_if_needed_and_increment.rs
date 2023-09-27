#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn init_if_needed_and_increment(ctx: Context<InitIfNeededAndIncrement>) -> Result<()> {
    ctx.accounts.counter.count += 1;

    Ok(())
}
