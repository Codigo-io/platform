use anchor_lang::prelude::*;
#[account]
pub struct Record {
    pub name: String,
    pub moves: u16,
    pub outcome: u32,
    pub income: u32,
    pub total_balance: i64,
}
