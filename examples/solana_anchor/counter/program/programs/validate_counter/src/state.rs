use anchor_lang::prelude::*;
#[account]
pub struct Counter {
    pub count: u64,
}
