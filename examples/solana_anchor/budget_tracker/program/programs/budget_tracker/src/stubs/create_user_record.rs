#![allow(unused)]
use crate::*;
use anchor_lang::prelude::*;

pub fn create_user_record(ctx: Context<CreateUserRecord>, user_name: String) -> Result<()> {
    ctx.accounts.user_record.name = user_name;
    Ok(())
}
