#![allow(unused)]
use anchor_lang::prelude::*;
use std::str::FromStr;
pub mod stubs;
pub use stubs::*;
pub mod state;
pub use state::*;



declare_id!("3PLVX53o6MmevYQZhYKJ2FJwLsv1FbM9tDgC24hegjmm");

#[program]
pub mod validate_accounts {
    use super::*;
    
    pub fn instruction1(ctx: Context<Instruction1>,input_1:u8) -> Result<()> {
        stubs::instruction1::instruction1(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8)]
    pub struct Instruction1<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut)]
	pub account: Account<'info,NonPDAAccountWithOneField>,}

    
    pub fn instruction2(ctx: Context<Instruction2>,input_1:u8) -> Result<()> {
        stubs::instruction2::instruction2(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8)]
    pub struct Instruction2<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut, seeds = [b"Static Value"], bump)]
	pub account: Account<'info,PDAAccountWithOneStaticSeedAndOneField>,}

    
    pub fn instruction3(ctx: Context<Instruction3>,input_1:u8, account_seed_dynamic:u8) -> Result<()> {
        stubs::instruction3::instruction3(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8, account_seed_dynamic:u8)]
    pub struct Instruction3<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut, seeds = [b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()], bump)]
	pub account: Account<'info,PDAAccountWithOneStaticAndDynamicSeedAndOneField>,}

    
    pub fn instruction4(ctx: Context<Instruction4>,input_1:u8, account_seed_u_8_type:u8, account_seed_u_16_type:u16, account_seed_u_32_type:u32, account_seed_i_8_type:i8, account_seed_i_16_type:i16, account_seed_i_32_type:i32, account_seed_string_type:String, account_seed_pubkey_type:Pubkey) -> Result<()> {
        stubs::instruction4::instruction4(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8, account_seed_u_8_type:u8, account_seed_u_16_type:u16, account_seed_u_32_type:u32, account_seed_i_8_type:i8, account_seed_i_16_type:i16, account_seed_i_32_type:i32, account_seed_string_type:String, account_seed_pubkey_type:Pubkey)]
    pub struct Instruction4<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut, seeds = [account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes(), account_seed_pubkey_type.key().as_ref()], bump)]
	pub account: Account<'info,PDAAccountVerifiesSeedsTypes>,}

    
    pub fn instruction5(ctx: Context<Instruction5>) -> Result<()> {
        stubs::instruction5::instruction5(ctx,)}

    #[derive(Accounts)]
    pub struct Instruction5<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        
	pub account: Account<'info,NonPDAAccountWithOneField>,}

    
    pub fn instruction6(ctx: Context<Instruction6>) -> Result<()> {
        stubs::instruction6::instruction6(ctx,)}

    #[derive(Accounts)]
    pub struct Instruction6<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(seeds = [b"Static Value"], bump)]
	pub account: Account<'info,PDAAccountWithOneStaticSeedAndOneField>,}

    
    pub fn instruction7(ctx: Context<Instruction7>,account_seed_dynamic:u8) -> Result<()> {
        stubs::instruction7::instruction7(ctx,)}

    #[derive(Accounts)]
    #[instruction(account_seed_dynamic:u8)]
    pub struct Instruction7<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(seeds = [b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()], bump)]
	pub account: Account<'info,PDAAccountWithOneStaticAndDynamicSeedAndOneField>,}

    
    pub fn instruction8(ctx: Context<Instruction8>,account_seed_u_8_type:u8, account_seed_u_16_type:u16, account_seed_u_32_type:u32, account_seed_i_8_type:i8, account_seed_i_16_type:i16, account_seed_i_32_type:i32, account_seed_string_type:String, account_seed_pubkey_type:Pubkey) -> Result<()> {
        stubs::instruction8::instruction8(ctx,)}

    #[derive(Accounts)]
    #[instruction(account_seed_u_8_type:u8, account_seed_u_16_type:u16, account_seed_u_32_type:u32, account_seed_i_8_type:i8, account_seed_i_16_type:i16, account_seed_i_32_type:i32, account_seed_string_type:String, account_seed_pubkey_type:Pubkey)]
    pub struct Instruction8<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(seeds = [account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes(), account_seed_pubkey_type.key().as_ref()], bump)]
	pub account: Account<'info,PDAAccountVerifiesSeedsTypes>,}

    
    pub fn instruction9(ctx: Context<Instruction9>,input_1:u8) -> Result<()> {
        stubs::instruction9::instruction9(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8)]
    pub struct Instruction9<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(signer, init, space=9, payer=fee_payer)]
	pub account: Account<'info,NonPDAAccountWithOneField>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn instruction10(ctx: Context<Instruction10>,input_1:u8) -> Result<()> {
        stubs::instruction10::instruction10(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8)]
    pub struct Instruction10<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(init, space=9, payer=fee_payer, seeds = [b"Static Value"], bump)]
	pub account: Account<'info,PDAAccountWithOneStaticSeedAndOneField>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn instruction11(ctx: Context<Instruction11>,input_1:u8, account_seed_dynamic:u8) -> Result<()> {
        stubs::instruction11::instruction11(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8, account_seed_dynamic:u8)]
    pub struct Instruction11<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(init, space=9, payer=fee_payer, seeds = [b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()], bump)]
	pub account: Account<'info,PDAAccountWithOneStaticAndDynamicSeedAndOneField>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn instruction12(ctx: Context<Instruction12>,input_1:u8, account_seed_u_8_type:u8, account_seed_u_16_type:u16, account_seed_u_32_type:u32, account_seed_i_8_type:i8, account_seed_i_16_type:i16, account_seed_i_32_type:i32, account_seed_string_type:String, account_seed_pubkey_type:Pubkey) -> Result<()> {
        stubs::instruction12::instruction12(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8, account_seed_u_8_type:u8, account_seed_u_16_type:u16, account_seed_u_32_type:u32, account_seed_i_8_type:i8, account_seed_i_16_type:i16, account_seed_i_32_type:i32, account_seed_string_type:String, account_seed_pubkey_type:Pubkey)]
    pub struct Instruction12<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(init, space=9, payer=fee_payer, seeds = [account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes(), account_seed_pubkey_type.key().as_ref()], bump)]
	pub account: Account<'info,PDAAccountVerifiesSeedsTypes>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn instruction13(ctx: Context<Instruction13>,input_1:u8) -> Result<()> {
        stubs::instruction13::instruction13(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8)]
    pub struct Instruction13<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(signer, init_if_needed, space=9, payer=fee_payer)]
	pub account: Account<'info,NonPDAAccountWithOneField>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn instruction14(ctx: Context<Instruction14>,input_1:u8) -> Result<()> {
        stubs::instruction14::instruction14(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8)]
    pub struct Instruction14<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(init_if_needed, space=9, payer=fee_payer, seeds = [b"Static Value"], bump)]
	pub account: Account<'info,PDAAccountWithOneStaticSeedAndOneField>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn instruction15(ctx: Context<Instruction15>,input_1:u8, account_seed_dynamic:u8) -> Result<()> {
        stubs::instruction15::instruction15(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8, account_seed_dynamic:u8)]
    pub struct Instruction15<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(init_if_needed, space=9, payer=fee_payer, seeds = [b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()], bump)]
	pub account: Account<'info,PDAAccountWithOneStaticAndDynamicSeedAndOneField>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn instruction16(ctx: Context<Instruction16>,input_1:u8, account_seed_u_8_type:u8, account_seed_u_16_type:u16, account_seed_u_32_type:u32, account_seed_i_8_type:i8, account_seed_i_16_type:i16, account_seed_i_32_type:i32, account_seed_string_type:String, account_seed_pubkey_type:Pubkey) -> Result<()> {
        stubs::instruction16::instruction16(ctx,input_1)}

    #[derive(Accounts)]
    #[instruction(input_1:u8, account_seed_u_8_type:u8, account_seed_u_16_type:u16, account_seed_u_32_type:u32, account_seed_i_8_type:i8, account_seed_i_16_type:i16, account_seed_i_32_type:i32, account_seed_string_type:String, account_seed_pubkey_type:Pubkey)]
    pub struct Instruction16<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(init_if_needed, space=9, payer=fee_payer, seeds = [account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes(), account_seed_pubkey_type.key().as_ref()], bump)]
	pub account: Account<'info,PDAAccountVerifiesSeedsTypes>,
        
	/// CHECK: system_program requires an account info
	
	pub system_program : AccountInfo<'info>,}

    
    pub fn instruction17(ctx: Context<Instruction17>) -> Result<()> {
        stubs::instruction17::instruction17(ctx,)}

    #[derive(Accounts)]
    pub struct Instruction17<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut, close=fee_payer)]
	pub account: Account<'info,NonPDAAccountWithOneField>,}

    
    pub fn instruction18(ctx: Context<Instruction18>) -> Result<()> {
        stubs::instruction18::instruction18(ctx,)}

    #[derive(Accounts)]
    pub struct Instruction18<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut, close=fee_payer, seeds = [b"Static Value"], bump)]
	pub account: Account<'info,PDAAccountWithOneStaticSeedAndOneField>,}

    
    pub fn instruction19(ctx: Context<Instruction19>,account_seed_dynamic:u8) -> Result<()> {
        stubs::instruction19::instruction19(ctx,)}

    #[derive(Accounts)]
    #[instruction(account_seed_dynamic:u8)]
    pub struct Instruction19<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut, close=fee_payer, seeds = [b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()], bump)]
	pub account: Account<'info,PDAAccountWithOneStaticAndDynamicSeedAndOneField>,}

    
    pub fn instruction20(ctx: Context<Instruction20>,account_seed_u_8_type:u8, account_seed_u_16_type:u16, account_seed_u_32_type:u32, account_seed_i_8_type:i8, account_seed_i_16_type:i16, account_seed_i_32_type:i32, account_seed_string_type:String, account_seed_pubkey_type:Pubkey) -> Result<()> {
        stubs::instruction20::instruction20(ctx,)}

    #[derive(Accounts)]
    #[instruction(account_seed_u_8_type:u8, account_seed_u_16_type:u16, account_seed_u_32_type:u32, account_seed_i_8_type:i8, account_seed_i_16_type:i16, account_seed_i_32_type:i32, account_seed_string_type:String, account_seed_pubkey_type:Pubkey)]
    pub struct Instruction20<'info>{
        
        
	/// CHECK: fee_payer requires an account info
	#[account(mut, signer)]
	pub fee_payer : AccountInfo<'info>,
        #[account(mut, close=fee_payer, seeds = [account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes(), account_seed_pubkey_type.key().as_ref()], bump)]
	pub account: Account<'info,PDAAccountVerifiesSeedsTypes>,}

}
