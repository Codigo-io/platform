#![allow(unused)]
use anchor_lang::prelude::*;
use std::str::FromStr;
pub mod stubs;
pub use stubs::*;
pub mod state;
pub use state::*;



declare_id!("E7UrqiKK9etDpeBci1FjDps3tzwrySqkroyQvG2xNjcL");

#[program]
pub mod validate_counter {
    use super::*;
    
    pub fn init_counter(ctx: Context<InitCounter>) -> Result<()> {
        stubs::init_counter::init_counter(ctx,)}

    #[derive(Accounts)]
    pub struct InitCounter<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(init, space=16, payer=fee_payer, seeds = [fee_payer.key().as_ref()], bump)]
	pub counter: Account<'info,Counter>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn increment(ctx: Context<Increment>) -> Result<()> {
        stubs::increment::increment(ctx,)}

    #[derive(Accounts)]
    pub struct Increment<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut, seeds = [fee_payer.key().as_ref()], bump)]
	pub counter: Account<'info,Counter>,}

    
    pub fn init_if_needed_and_increment(ctx: Context<InitIfNeededAndIncrement>) -> Result<()> {
        stubs::init_if_needed_and_increment::init_if_needed_and_increment(ctx,)}

    #[derive(Accounts)]
    pub struct InitIfNeededAndIncrement<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        
	/// CHECK: rent_payer requires an account info
	#[account(mut, signer)]
	pub rent_payer : AccountInfo<'info>,
        #[account(init_if_needed, space=16, payer=rent_payer, seeds = [rent_payer.key().as_ref()], bump)]
	pub counter: Account<'info,Counter>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn close_counter(ctx: Context<CloseCounter>) -> Result<()> {
        stubs::close_counter::close_counter(ctx,)}

    #[derive(Accounts)]
    pub struct CloseCounter<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        
	/// CHECK: rent_receiver requires an account info
	#[account(mut, signer)]
	pub rent_receiver : AccountInfo<'info>,
        #[account(mut, close=rent_receiver, seeds = [rent_receiver.key().as_ref()], bump)]
	pub counter: Account<'info,Counter>,}

}
