// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

pub mod constants;
pub mod error;
pub mod instructions;
pub mod state;

use anchor_lang::prelude::*;
use std::str::FromStr;

pub use constants::*;
pub use instructions::*;
pub use state::*;

declare_id!("5wtHhpJfLMC5Gx6aLvmPyzSLedjybJesXcaoT9BMxj5J");

#[program]
pub mod validate_accounts {
    use super::*;

/// Test `mut` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction1(ctx: Context<Instruction1>, input_1: u8) -> Result<()> {
		instruction1::handler(ctx, input_1)
	}

/// Test `mut` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction2(ctx: Context<Instruction2>, input_1: u8) -> Result<()> {
		instruction2::handler(ctx, input_1)
	}

/// Test `mut` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction3(ctx: Context<Instruction3>, input_1: u8, _account_seed_dynamic: u8) -> Result<()> {
		instruction3::handler(ctx, input_1)
	}

/// Test `mut` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
/// - account_seed_u16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
/// - account_seed_u32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
/// - account_seed_u64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
/// - account_seed_i8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
/// - account_seed_i16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
/// - account_seed_i32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
/// - account_seed_i64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
	pub fn instruction4(ctx: Context<Instruction4>, input_1: u8, _account_seed_u8_type: u8, _account_seed_u16_type: u16, _account_seed_u32_type: u32, _account_seed_u64_type: u64, _account_seed_i8_type: i8, _account_seed_i16_type: i16, _account_seed_i32_type: i32, _account_seed_i64_type: i64, _account_seed_string_type: String, _account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction4::handler(ctx, input_1)
	}

/// Test `non-mut` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
	pub fn instruction5(ctx: Context<Instruction5>) -> Result<()> {
		instruction5::handler(ctx)
	}

/// Test `non-mut` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
	pub fn instruction6(ctx: Context<Instruction6>) -> Result<()> {
		instruction6::handler(ctx)
	}

/// Test `non-mut` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction7(ctx: Context<Instruction7>, _account_seed_dynamic: u8) -> Result<()> {
		instruction7::handler(ctx, )
	}

/// Test `non-mut` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
///
/// Data:
/// - account_seed_u8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
/// - account_seed_u16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
/// - account_seed_u32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
/// - account_seed_u64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
/// - account_seed_i8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
/// - account_seed_i16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
/// - account_seed_i32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
/// - account_seed_i64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
	pub fn instruction8(ctx: Context<Instruction8>, _account_seed_u8_type: u8, _account_seed_u16_type: u16, _account_seed_u32_type: u32, _account_seed_u64_type: u64, _account_seed_i8_type: i8, _account_seed_i16_type: i16, _account_seed_i32_type: i32, _account_seed_i64_type: i64, _account_seed_string_type: String, _account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction8::handler(ctx, )
	}

/// Test `init` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction9(ctx: Context<Instruction9>, input_1: u8) -> Result<()> {
		instruction9::handler(ctx, input_1)
	}

/// Test `init` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction10(ctx: Context<Instruction10>, input_1: u8) -> Result<()> {
		instruction10::handler(ctx, input_1)
	}

/// Test `init` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction11(ctx: Context<Instruction11>, input_1: u8, _account_seed_dynamic: u8) -> Result<()> {
		instruction11::handler(ctx, input_1)
	}

/// Test `init` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
/// - account_seed_u16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
/// - account_seed_u32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
/// - account_seed_u64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
/// - account_seed_i8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
/// - account_seed_i16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
/// - account_seed_i32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
/// - account_seed_i64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
	pub fn instruction12(ctx: Context<Instruction12>, input_1: u8, _account_seed_u8_type: u8, _account_seed_u16_type: u16, _account_seed_u32_type: u32, _account_seed_u64_type: u64, _account_seed_i8_type: i8, _account_seed_i16_type: i16, _account_seed_i32_type: i32, _account_seed_i64_type: i64, _account_seed_string_type: String, _account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction12::handler(ctx, input_1)
	}

/// Test `init_if_needed` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction13(ctx: Context<Instruction13>, input_1: u8) -> Result<()> {
		instruction13::handler(ctx, input_1)
	}

/// Test `init_if_needed` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction14(ctx: Context<Instruction14>, input_1: u8) -> Result<()> {
		instruction14::handler(ctx, input_1)
	}

/// Test `init_if_needed` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction15(ctx: Context<Instruction15>, input_1: u8, _account_seed_dynamic: u8) -> Result<()> {
		instruction15::handler(ctx, input_1)
	}

/// Test `init_if_needed` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
/// - account_seed_u16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
/// - account_seed_u32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
/// - account_seed_u64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
/// - account_seed_i8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
/// - account_seed_i16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
/// - account_seed_i32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
/// - account_seed_i64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
	pub fn instruction16(ctx: Context<Instruction16>, input_1: u8, _account_seed_u8_type: u8, _account_seed_u16_type: u16, _account_seed_u32_type: u32, _account_seed_u64_type: u64, _account_seed_i8_type: i8, _account_seed_i16_type: i16, _account_seed_i32_type: i32, _account_seed_i64_type: i64, _account_seed_string_type: String, _account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction16::handler(ctx, input_1)
	}

/// Test `close_uncheck` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
	pub fn instruction17(ctx: Context<Instruction17>) -> Result<()> {
		instruction17::handler(ctx)
	}

/// Test `close` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
	pub fn safe_instruction17(ctx: Context<SafeInstruction17>) -> Result<()> {
		safe_instruction17::handler(ctx)
	}

/// Test `close` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
	pub fn instruction18(ctx: Context<Instruction18>) -> Result<()> {
		instruction18::handler(ctx)
	}

/// Test `close` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction19(ctx: Context<Instruction19>, _account_seed_dynamic: u8) -> Result<()> {
		instruction19::handler(ctx, )
	}

/// Test `close` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - account_seed_u8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
/// - account_seed_u16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
/// - account_seed_u32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
/// - account_seed_u64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
/// - account_seed_i8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
/// - account_seed_i16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
/// - account_seed_i32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
/// - account_seed_i64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
	pub fn instruction20(ctx: Context<Instruction20>, _account_seed_u8_type: u8, _account_seed_u16_type: u16, _account_seed_u32_type: u32, _account_seed_u64_type: u64, _account_seed_i8_type: i8, _account_seed_i16_type: i16, _account_seed_i32_type: i32, _account_seed_i64_type: i64, _account_seed_string_type: String, _account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction20::handler(ctx, )
	}


	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
	)]
	pub struct Instruction1<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
	)]
	pub struct Instruction2<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			seeds = [
				b"Static Value",
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
		account_seed_dynamic: u8,
	)]
	pub struct Instruction3<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
		account_seed_u8_type: u8,
		account_seed_u16_type: u16,
		account_seed_u32_type: u32,
		account_seed_u64_type: u64,
		account_seed_i8_type: i8,
		account_seed_i16_type: i16,
		account_seed_i32_type: i32,
		account_seed_i64_type: i64,
		account_seed_string_type: String,
		account_seed_pubkey_type: Pubkey,
	)]
	pub struct Instruction4<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			seeds = [
				account_seed_u8_type.to_le_bytes().as_ref(),
				account_seed_u16_type.to_le_bytes().as_ref(),
				account_seed_u32_type.to_le_bytes().as_ref(),
				account_seed_u64_type.to_le_bytes().as_ref(),
				account_seed_i8_type.to_le_bytes().as_ref(),
				account_seed_i16_type.to_le_bytes().as_ref(),
				account_seed_i32_type.to_le_bytes().as_ref(),
				account_seed_i64_type.to_le_bytes().as_ref(),
				account_seed_string_type.as_bytes().as_ref(),
				account_seed_pubkey_type.as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct Instruction5<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct Instruction6<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			seeds = [
				b"Static Value",
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction7<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	#[instruction(
		account_seed_u8_type: u8,
		account_seed_u16_type: u16,
		account_seed_u32_type: u32,
		account_seed_u64_type: u64,
		account_seed_i8_type: i8,
		account_seed_i16_type: i16,
		account_seed_i32_type: i32,
		account_seed_i64_type: i64,
		account_seed_string_type: String,
		account_seed_pubkey_type: Pubkey,
	)]
	pub struct Instruction8<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			seeds = [
				account_seed_u8_type.to_le_bytes().as_ref(),
				account_seed_u16_type.to_le_bytes().as_ref(),
				account_seed_u32_type.to_le_bytes().as_ref(),
				account_seed_u64_type.to_le_bytes().as_ref(),
				account_seed_i8_type.to_le_bytes().as_ref(),
				account_seed_i16_type.to_le_bytes().as_ref(),
				account_seed_i32_type.to_le_bytes().as_ref(),
				account_seed_i64_type.to_le_bytes().as_ref(),
				account_seed_string_type.as_bytes().as_ref(),
				account_seed_pubkey_type.as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
	)]
	pub struct Instruction9<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			signer,
			init,
			space=9,
			payer=fee_payer,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
	)]
	pub struct Instruction10<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			init,
			space=9,
			payer=fee_payer,
			seeds = [
				b"Static Value",
			],
			bump,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
		account_seed_dynamic: u8,
	)]
	pub struct Instruction11<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			init,
			space=9,
			payer=fee_payer,
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
		account_seed_u8_type: u8,
		account_seed_u16_type: u16,
		account_seed_u32_type: u32,
		account_seed_u64_type: u64,
		account_seed_i8_type: i8,
		account_seed_i16_type: i16,
		account_seed_i32_type: i32,
		account_seed_i64_type: i64,
		account_seed_string_type: String,
		account_seed_pubkey_type: Pubkey,
	)]
	pub struct Instruction12<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			init,
			space=9,
			payer=fee_payer,
			seeds = [
				account_seed_u8_type.to_le_bytes().as_ref(),
				account_seed_u16_type.to_le_bytes().as_ref(),
				account_seed_u32_type.to_le_bytes().as_ref(),
				account_seed_u64_type.to_le_bytes().as_ref(),
				account_seed_i8_type.to_le_bytes().as_ref(),
				account_seed_i16_type.to_le_bytes().as_ref(),
				account_seed_i32_type.to_le_bytes().as_ref(),
				account_seed_i64_type.to_le_bytes().as_ref(),
				account_seed_string_type.as_bytes().as_ref(),
				account_seed_pubkey_type.as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
	)]
	pub struct Instruction13<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			signer,
			init_if_needed,
			space=9,
			payer=fee_payer,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
	)]
	pub struct Instruction14<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			init_if_needed,
			space=9,
			payer=fee_payer,
			seeds = [
				b"Static Value",
			],
			bump,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
		account_seed_dynamic: u8,
	)]
	pub struct Instruction15<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			init_if_needed,
			space=9,
			payer=fee_payer,
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
		account_seed_u8_type: u8,
		account_seed_u16_type: u16,
		account_seed_u32_type: u32,
		account_seed_u64_type: u64,
		account_seed_i8_type: i8,
		account_seed_i16_type: i16,
		account_seed_i32_type: i32,
		account_seed_i64_type: i64,
		account_seed_string_type: String,
		account_seed_pubkey_type: Pubkey,
	)]
	pub struct Instruction16<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			init_if_needed,
			space=9,
			payer=fee_payer,
			seeds = [
				account_seed_u8_type.to_le_bytes().as_ref(),
				account_seed_u16_type.to_le_bytes().as_ref(),
				account_seed_u32_type.to_le_bytes().as_ref(),
				account_seed_u64_type.to_le_bytes().as_ref(),
				account_seed_i8_type.to_le_bytes().as_ref(),
				account_seed_i16_type.to_le_bytes().as_ref(),
				account_seed_i32_type.to_le_bytes().as_ref(),
				account_seed_i64_type.to_le_bytes().as_ref(),
				account_seed_string_type.as_bytes().as_ref(),
				account_seed_pubkey_type.as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	pub struct Instruction17<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			close=fee_payer,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct SafeInstruction17<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			signer,
			close=fee_payer,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct Instruction18<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			close=fee_payer,
			seeds = [
				b"Static Value",
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction19<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			close=fee_payer,
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	#[instruction(
		account_seed_u8_type: u8,
		account_seed_u16_type: u16,
		account_seed_u32_type: u32,
		account_seed_u64_type: u64,
		account_seed_i8_type: i8,
		account_seed_i16_type: i16,
		account_seed_i32_type: i32,
		account_seed_i64_type: i64,
		account_seed_string_type: String,
		account_seed_pubkey_type: Pubkey,
	)]
	pub struct Instruction20<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			close=fee_payer,
			seeds = [
				account_seed_u8_type.to_le_bytes().as_ref(),
				account_seed_u16_type.to_le_bytes().as_ref(),
				account_seed_u32_type.to_le_bytes().as_ref(),
				account_seed_u64_type.to_le_bytes().as_ref(),
				account_seed_i8_type.to_le_bytes().as_ref(),
				account_seed_i16_type.to_le_bytes().as_ref(),
				account_seed_i32_type.to_le_bytes().as_ref(),
				account_seed_i64_type.to_le_bytes().as_ref(),
				account_seed_string_type.as_bytes().as_ref(),
				account_seed_pubkey_type.as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}
}
