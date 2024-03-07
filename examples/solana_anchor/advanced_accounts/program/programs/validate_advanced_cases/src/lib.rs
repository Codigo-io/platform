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

declare_id!("AKe8PCZjyRuxUksNfFEZcpsLk9EKEnvoEEa7qRz88edg");

#[program]
pub mod validate_advanced_cases {
    use super::*;

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
	pub fn instruction0_only_method_with_name(ctx: Context<Instruction0OnlyMethodWithName>) -> Result<()> {
		instruction0_only_method_with_name::handler(ctx)
	}

/// Test `mut` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction1(ctx: Context<Instruction1>, input_1: u8) -> Result<()> {
		instruction1::handler(ctx, input_1)
	}

/// Test `mut` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction2(ctx: Context<Instruction2>, input_1: u8) -> Result<()> {
		instruction2::handler(ctx, input_1)
	}

/// Test `mut` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction3(ctx: Context<Instruction3>, input_1: u8, _account_seed_dynamic: u8) -> Result<()> {
		instruction3::handler(ctx, input_1)
	}

/// Test `mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
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

/// Test `non-mut` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
	pub fn instruction5(ctx: Context<Instruction5>) -> Result<()> {
		instruction5::handler(ctx)
	}

/// Test `non-mut` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
	pub fn instruction6(ctx: Context<Instruction6>) -> Result<()> {
		instruction6::handler(ctx)
	}

/// Test `non-mut` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction7(ctx: Context<Instruction7>, _account_seed_dynamic: u8) -> Result<()> {
		instruction7::handler(ctx, )
	}

/// Test `non-mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
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

/// Test `init` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction9(ctx: Context<Instruction9>, input_1: u8) -> Result<()> {
		instruction9::handler(ctx, input_1)
	}

/// Test `init` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction10(ctx: Context<Instruction10>, input_1: u8) -> Result<()> {
		instruction10::handler(ctx, input_1)
	}

/// Test `init` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction11(ctx: Context<Instruction11>, input_1: u8, _account_seed_dynamic: u8) -> Result<()> {
		instruction11::handler(ctx, input_1)
	}

/// Test `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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

/// Test `init_if_needed` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction13(ctx: Context<Instruction13>, input_1: u8) -> Result<()> {
		instruction13::handler(ctx, input_1)
	}

/// Test `init_if_needed` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction14(ctx: Context<Instruction14>, input_1: u8) -> Result<()> {
		instruction14::handler(ctx, input_1)
	}

/// Test `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction15(ctx: Context<Instruction15>, input_1: u8, _account_seed_dynamic: u8) -> Result<()> {
		instruction15::handler(ctx, input_1)
	}

/// Test `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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

/// Test `close_unsafe` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
	pub fn instruction17(ctx: Context<Instruction17>) -> Result<()> {
		instruction17::handler(ctx)
	}

/// Test `close` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
	pub fn safe_instruction17(ctx: Context<SafeInstruction17>) -> Result<()> {
		safe_instruction17::handler(ctx)
	}

/// Test `close` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
	pub fn instruction18(ctx: Context<Instruction18>) -> Result<()> {
		instruction18::handler(ctx)
	}

/// Test `close` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction19(ctx: Context<Instruction19>, _account_seed_dynamic: u8) -> Result<()> {
		instruction19::handler(ctx, )
	}

/// Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
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

/// Test `rent-payer` using `init` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction21(ctx: Context<Instruction21>, input_1: u8) -> Result<()> {
		instruction21::handler(ctx, input_1)
	}

/// Test `rent-payer` using `init` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction22(ctx: Context<Instruction22>, input_1: u8) -> Result<()> {
		instruction22::handler(ctx, input_1)
	}

/// Test `rent-payer` using `init` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction23(ctx: Context<Instruction23>, input_1: u8, _account_seed_dynamic: u8) -> Result<()> {
		instruction23::handler(ctx, input_1)
	}

/// Test `rent-payer` using `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
	pub fn instruction24(ctx: Context<Instruction24>, input_1: u8, _account_seed_u8_type: u8, _account_seed_u16_type: u16, _account_seed_u32_type: u32, _account_seed_u64_type: u64, _account_seed_i8_type: i8, _account_seed_i16_type: i16, _account_seed_i32_type: i32, _account_seed_i64_type: i64, _account_seed_string_type: String, _account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction24::handler(ctx, input_1)
	}

/// Test `rent-payer` using `init_if_needed` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction25(ctx: Context<Instruction25>, input_1: u8) -> Result<()> {
		instruction25::handler(ctx, input_1)
	}

/// Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	pub fn instruction26(ctx: Context<Instruction26>, input_1: u8) -> Result<()> {
		instruction26::handler(ctx, input_1)
	}

/// Test `rent-payer` using `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction27(ctx: Context<Instruction27>, input_1: u8, _account_seed_dynamic: u8) -> Result<()> {
		instruction27::handler(ctx, input_1)
	}

/// Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
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
	pub fn instruction28(ctx: Context<Instruction28>, input_1: u8, _account_seed_u8_type: u8, _account_seed_u16_type: u16, _account_seed_u32_type: u32, _account_seed_u64_type: u64, _account_seed_i8_type: i8, _account_seed_i16_type: i16, _account_seed_i32_type: i32, _account_seed_i64_type: i64, _account_seed_string_type: String, _account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction28::handler(ctx, input_1)
	}

/// Test `rent-receiver` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
	pub fn instruction29(ctx: Context<Instruction29>) -> Result<()> {
		instruction29::handler(ctx)
	}

/// Test `rent-receiver` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
	pub fn safe_instruction29(ctx: Context<SafeInstruction29>) -> Result<()> {
		safe_instruction29::handler(ctx)
	}

/// Test `rent-receiver` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
	pub fn instruction30(ctx: Context<Instruction30>) -> Result<()> {
		instruction30::handler(ctx)
	}

/// Test `rent-receiver` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction31(ctx: Context<Instruction31>, _account_seed_dynamic: u8) -> Result<()> {
		instruction31::handler(ctx, )
	}

/// Test `rent-receiver` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
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
	pub fn instruction32(ctx: Context<Instruction32>, _account_seed_u8_type: u8, _account_seed_u16_type: u16, _account_seed_u32_type: u32, _account_seed_u64_type: u64, _account_seed_i8_type: i8, _account_seed_i16_type: i16, _account_seed_i32_type: i32, _account_seed_i64_type: i64, _account_seed_string_type: String, _account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction32::handler(ctx, )
	}

/// Test `non-mut` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - string_type: [String] 
	pub fn instruction33(ctx: Context<Instruction33>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
		instruction33::handler(ctx, u8_type, u16_type, u32_type, u64_type, i8_type, i16_type, i32_type, i64_type, string_type)
	}

/// Test `mut` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - string_type: [String] 
	pub fn instruction34(ctx: Context<Instruction34>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
		instruction34::handler(ctx, u8_type, u16_type, u32_type, u64_type, i8_type, i16_type, i32_type, i64_type, string_type)
	}

/// Test `init` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - string_type: [String] 
	pub fn instruction35(ctx: Context<Instruction35>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
		instruction35::handler(ctx, u8_type, u16_type, u32_type, u64_type, i8_type, i16_type, i32_type, i64_type, string_type)
	}

/// Test `init_if_needed` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - string_type: [String] 
	pub fn instruction36(ctx: Context<Instruction36>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
		instruction36::handler(ctx, u8_type, u16_type, u32_type, u64_type, i8_type, i16_type, i32_type, i64_type, string_type)
	}

/// Test `close` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - string_type: [String] 
	pub fn instruction37(ctx: Context<Instruction37>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
		instruction37::handler(ctx, u8_type, u16_type, u32_type, u64_type, i8_type, i16_type, i32_type, i64_type, string_type)
	}

/// Test `non-mut` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[signer]` signer_1: [State] 
	pub fn instruction38(ctx: Context<Instruction38>) -> Result<()> {
		instruction38::handler(ctx)
	}

/// Test `mut` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
	pub fn instruction39(ctx: Context<Instruction39>) -> Result<()> {
		instruction39::handler(ctx)
	}

/// Test `init` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn instruction40(ctx: Context<Instruction40>) -> Result<()> {
		instruction40::handler(ctx)
	}

/// Test `init_if_needed` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	pub fn instruction41(ctx: Context<Instruction41>) -> Result<()> {
		instruction41::handler(ctx)
	}

/// Test `close` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
	pub fn instruction42(ctx: Context<Instruction42>) -> Result<()> {
		instruction42::handler(ctx)
	}

/// Test `close_uncheck` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
	pub fn safe_instruction42(ctx: Context<SafeInstruction42>) -> Result<()> {
		safe_instruction42::handler(ctx)
	}


	#[derive(Accounts)]
	pub struct Instruction0OnlyMethodWithName<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
	)]
	pub struct Instruction1<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct Instruction6<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

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

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
	)]
	pub struct Instruction21<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			signer,
			init,
			space=9,
			payer=signer_1,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
	)]
	pub struct Instruction22<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			init,
			space=9,
			payer=signer_2,
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
	pub struct Instruction23<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_3: Signer<'info>,

		#[account(
			init,
			space=9,
			payer=signer_3,
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
	pub struct Instruction24<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_3: Signer<'info>,

		#[account(
			init,
			space=9,
			payer=signer_3,
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
	pub struct Instruction25<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			signer,
			init_if_needed,
			space=9,
			payer=signer_1,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		input_1: u8,
	)]
	pub struct Instruction26<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			init_if_needed,
			space=9,
			payer=signer_2,
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
	pub struct Instruction27<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_3: Signer<'info>,

		#[account(
			init_if_needed,
			space=9,
			payer=signer_3,
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
	pub struct Instruction28<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_3: Signer<'info>,

		#[account(
			init_if_needed,
			space=9,
			payer=signer_3,
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
	pub struct Instruction29<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			close=signer_1,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct SafeInstruction29<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			signer,
			close=signer_1,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct Instruction30<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			close=signer_2,
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
	pub struct Instruction31<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_3: Signer<'info>,

		#[account(
			mut,
			close=signer_3,
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
	pub struct Instruction32<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_3: Signer<'info>,

		#[account(
			mut,
			close=signer_3,
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
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		string_type: String,
	)]
	pub struct Instruction33<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			seeds = [
				u8_type.to_le_bytes().as_ref(),
				u16_type.to_le_bytes().as_ref(),
				u32_type.to_le_bytes().as_ref(),
				u64_type.to_le_bytes().as_ref(),
				i8_type.to_le_bytes().as_ref(),
				i16_type.to_le_bytes().as_ref(),
				i32_type.to_le_bytes().as_ref(),
				i64_type.to_le_bytes().as_ref(),
				string_type.as_bytes().as_ref(),
				signer_1.key().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	#[instruction(
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		string_type: String,
	)]
	pub struct Instruction34<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			seeds = [
				u8_type.to_le_bytes().as_ref(),
				u16_type.to_le_bytes().as_ref(),
				u32_type.to_le_bytes().as_ref(),
				u64_type.to_le_bytes().as_ref(),
				i8_type.to_le_bytes().as_ref(),
				i16_type.to_le_bytes().as_ref(),
				i32_type.to_le_bytes().as_ref(),
				i64_type.to_le_bytes().as_ref(),
				string_type.as_bytes().as_ref(),
				signer_1.key().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	#[instruction(
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		string_type: String,
	)]
	pub struct Instruction35<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			init,
			space=9,
			payer=fee_payer,
			seeds = [
				u8_type.to_le_bytes().as_ref(),
				u16_type.to_le_bytes().as_ref(),
				u32_type.to_le_bytes().as_ref(),
				u64_type.to_le_bytes().as_ref(),
				i8_type.to_le_bytes().as_ref(),
				i16_type.to_le_bytes().as_ref(),
				i32_type.to_le_bytes().as_ref(),
				i64_type.to_le_bytes().as_ref(),
				string_type.as_bytes().as_ref(),
				signer_1.key().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		string_type: String,
	)]
	pub struct Instruction36<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			init_if_needed,
			space=9,
			payer=fee_payer,
			seeds = [
				u8_type.to_le_bytes().as_ref(),
				u16_type.to_le_bytes().as_ref(),
				u32_type.to_le_bytes().as_ref(),
				u64_type.to_le_bytes().as_ref(),
				i8_type.to_le_bytes().as_ref(),
				i16_type.to_le_bytes().as_ref(),
				i32_type.to_le_bytes().as_ref(),
				i64_type.to_le_bytes().as_ref(),
				string_type.as_bytes().as_ref(),
				signer_1.key().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	#[instruction(
		u8_type: u8,
		u16_type: u16,
		u32_type: u32,
		u64_type: u64,
		i8_type: i8,
		i16_type: i16,
		i32_type: i32,
		i64_type: i64,
		string_type: String,
	)]
	pub struct Instruction37<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			close=fee_payer,
			seeds = [
				u8_type.to_le_bytes().as_ref(),
				u16_type.to_le_bytes().as_ref(),
				u32_type.to_le_bytes().as_ref(),
				u64_type.to_le_bytes().as_ref(),
				i8_type.to_le_bytes().as_ref(),
				i16_type.to_le_bytes().as_ref(),
				i32_type.to_le_bytes().as_ref(),
				i64_type.to_le_bytes().as_ref(),
				string_type.as_bytes().as_ref(),
				signer_1.key().as_ref(),
			],
			bump,
		)]
		pub account: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct Instruction38<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			signer,
		)]
		pub signer_1: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct Instruction39<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			signer,
		)]
		pub signer_1: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct Instruction40<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			signer,
			init,
			space=9,
			payer=fee_payer,
		)]
		pub signer_1: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	pub struct Instruction41<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			signer,
			init_if_needed,
			space=9,
			payer=fee_payer,
		)]
		pub signer_1: Account<'info, State>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	pub struct Instruction42<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			signer,
			close=fee_payer,
		)]
		pub signer_1: Account<'info, State>,
	}

	#[derive(Accounts)]
	pub struct SafeInstruction42<'info> {
		#[account(
			mut,
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			signer,
			close=fee_payer,
		)]
		pub signer_1: Account<'info, State>,
	}
}
