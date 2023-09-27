#![allow(unused)]
use anchor_lang::prelude::*;
use std::str::FromStr;
pub mod stubs;
pub use stubs::*;
pub mod state;
pub use state::*;



declare_id!("EdFcxcCZvYnTssF9MKZJxEERWNwJrbFdhHDgxNfqajnE");

#[program]
pub mod budget_tracker {
    use super::*;
    
    pub fn create_user_record(ctx: Context<CreateUserRecord>,user_name:String, user_record_seed_index:u8) -> Result<()> {
        stubs::create_user_record::create_user_record(ctx,user_name)}

    #[derive(Accounts)]
    #[instruction(user_name:String, user_record_seed_index:u8)]
    pub struct CreateUserRecord<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(init, space=80, payer=fee_payer, seeds = [b"record", fee_payer.key().as_ref(), user_record_seed_index.to_le_bytes().as_ref()], bump)]
	pub user_record: Account<'info,Record>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn register_income(ctx: Context<RegisterIncome>,amount:u32, user_record_seed_index:u8) -> Result<()> {
        stubs::register_income::register_income(ctx,amount)}

    #[derive(Accounts)]
    #[instruction(amount:u32, user_record_seed_index:u8)]
    pub struct RegisterIncome<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut, seeds = [b"record", fee_payer.key().as_ref(), user_record_seed_index.to_le_bytes().as_ref()], bump)]
	pub user_record: Account<'info,Record>,}

    
    pub fn register_outcome(ctx: Context<RegisterOutcome>,amount:u32, user_record_seed_index:u8) -> Result<()> {
        stubs::register_outcome::register_outcome(ctx,amount)}

    #[derive(Accounts)]
    #[instruction(amount:u32, user_record_seed_index:u8)]
    pub struct RegisterOutcome<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut, seeds = [b"record", fee_payer.key().as_ref(), user_record_seed_index.to_le_bytes().as_ref()], bump)]
	pub user_record: Account<'info,Record>,}

}
