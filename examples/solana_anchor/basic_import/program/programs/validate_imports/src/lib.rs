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

declare_id!("2Eebu25YAYPPru4jo2oxS6g5rR79WFenff6Ejf7yoMnG");

#[program]
pub mod validate_imports {
    use super::*;

/// Reference `validate_accounts_ref.instruction1`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn instruction1(ctx: Context<Instruction1>) -> Result<()> {
		instruction1::handler(ctx)
	}

/// Reference `validate_accounts_ref.instruction2`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn instruction2(ctx: Context<Instruction2>) -> Result<()> {
		instruction2::handler(ctx)
	}

/// Reference `validate_accounts_ref.instruction3`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction3(ctx: Context<Instruction3>, account_seed_dynamic: u8) -> Result<()> {
		instruction3::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_accounts_ref.instruction4`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
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
	pub fn instruction4(ctx: Context<Instruction4>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction4::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_accounts_ref.instruction5`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn instruction5(ctx: Context<Instruction5>) -> Result<()> {
		instruction5::handler(ctx)
	}

/// Reference `validate_accounts_ref.instruction6`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn instruction6(ctx: Context<Instruction6>) -> Result<()> {
		instruction6::handler(ctx)
	}

/// Reference `validate_accounts_ref.instruction7`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction7(ctx: Context<Instruction7>, account_seed_dynamic: u8) -> Result<()> {
		instruction7::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_accounts_ref.instruction8`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
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
	pub fn instruction8(ctx: Context<Instruction8>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction8::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_accounts_ref.instruction9`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 3. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn instruction9(ctx: Context<Instruction9>) -> Result<()> {
		instruction9::handler(ctx)
	}

/// Reference `validate_accounts_ref.instruction10`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 3. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn instruction10(ctx: Context<Instruction10>) -> Result<()> {
		instruction10::handler(ctx)
	}

/// Reference `validate_accounts_ref.instruction11`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 3. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction11(ctx: Context<Instruction11>, account_seed_dynamic: u8) -> Result<()> {
		instruction11::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_accounts_ref.instruction12`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 3. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
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
	pub fn instruction12(ctx: Context<Instruction12>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction12::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_accounts_ref.instruction13`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 3. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn instruction13(ctx: Context<Instruction13>) -> Result<()> {
		instruction13::handler(ctx)
	}

/// Reference `validate_accounts_ref.instruction14`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 3. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn instruction14(ctx: Context<Instruction14>) -> Result<()> {
		instruction14::handler(ctx)
	}

/// Reference `validate_accounts_ref.instruction15`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 3. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction15(ctx: Context<Instruction15>, account_seed_dynamic: u8) -> Result<()> {
		instruction15::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_accounts_ref.instruction16`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 3. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
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
	pub fn instruction16(ctx: Context<Instruction16>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction16::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_accounts_ref.instruction17`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn instruction17(ctx: Context<Instruction17>) -> Result<()> {
		instruction17::handler(ctx)
	}

/// Reference `validate_accounts_ref.safe_instruction17`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn safe_instruction17(ctx: Context<SafeInstruction17>) -> Result<()> {
		safe_instruction17::handler(ctx)
	}

/// Reference `validate_accounts_ref.instruction18`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
	pub fn instruction18(ctx: Context<Instruction18>) -> Result<()> {
		instruction18::handler(ctx)
	}

/// Reference `validate_accounts_ref.instruction19`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction19(ctx: Context<Instruction19>, account_seed_dynamic: u8) -> Result<()> {
		instruction19::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_accounts_ref.instruction20`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` validate_accounts_v0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
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
	pub fn instruction20(ctx: Context<Instruction20>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction20::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_advanced_cases.instruction0_only_method_with_name`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction0(ctx: Context<Instruction0>) -> Result<()> {
		instruction0::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction1`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction21(ctx: Context<Instruction21>) -> Result<()> {
		instruction21::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction2`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction22(ctx: Context<Instruction22>) -> Result<()> {
		instruction22::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction3`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction23(ctx: Context<Instruction23>, account_seed_dynamic: u8) -> Result<()> {
		instruction23::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_advanced_cases.instruction4`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	pub fn instruction24(ctx: Context<Instruction24>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction24::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_advanced_cases.instruction5`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction25(ctx: Context<Instruction25>) -> Result<()> {
		instruction25::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction6`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction26(ctx: Context<Instruction26>) -> Result<()> {
		instruction26::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction7`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction27(ctx: Context<Instruction27>, account_seed_dynamic: u8) -> Result<()> {
		instruction27::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_advanced_cases.instruction8`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	pub fn instruction28(ctx: Context<Instruction28>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction28::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_advanced_cases.instruction9`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction29(ctx: Context<Instruction29>) -> Result<()> {
		instruction29::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction10`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction30(ctx: Context<Instruction30>) -> Result<()> {
		instruction30::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction11`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction31(ctx: Context<Instruction31>, account_seed_dynamic: u8) -> Result<()> {
		instruction31::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_advanced_cases.instruction12`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	pub fn instruction32(ctx: Context<Instruction32>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction32::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_advanced_cases.instruction13`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction33(ctx: Context<Instruction33>) -> Result<()> {
		instruction33::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction14`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction34(ctx: Context<Instruction34>) -> Result<()> {
		instruction34::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction15`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction35(ctx: Context<Instruction35>, account_seed_dynamic: u8) -> Result<()> {
		instruction35::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_advanced_cases.instruction16`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	pub fn instruction36(ctx: Context<Instruction36>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction36::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_advanced_cases.instruction17`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction37(ctx: Context<Instruction37>) -> Result<()> {
		instruction37::handler(ctx)
	}

/// Reference `validate_advanced_cases.safe_instruction17`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn safe_instruction37(ctx: Context<SafeInstruction37>) -> Result<()> {
		safe_instruction37::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction18`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction38(ctx: Context<Instruction38>) -> Result<()> {
		instruction38::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction19`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction39(ctx: Context<Instruction39>, account_seed_dynamic: u8) -> Result<()> {
		instruction39::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_advanced_cases.instruction20`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	pub fn instruction40(ctx: Context<Instruction40>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction40::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_advanced_cases.instruction21`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction41(ctx: Context<Instruction41>) -> Result<()> {
		instruction41::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction22`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction42(ctx: Context<Instruction42>) -> Result<()> {
		instruction42::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction23`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction43(ctx: Context<Instruction43>, account_seed_dynamic: u8) -> Result<()> {
		instruction43::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_advanced_cases.instruction24`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	pub fn instruction44(ctx: Context<Instruction44>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction44::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_advanced_cases.instruction25`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction45(ctx: Context<Instruction45>) -> Result<()> {
		instruction45::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction26`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction46(ctx: Context<Instruction46>) -> Result<()> {
		instruction46::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction27`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction47(ctx: Context<Instruction47>, account_seed_dynamic: u8) -> Result<()> {
		instruction47::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_advanced_cases.instruction28`, where caller maps with a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	pub fn instruction48(ctx: Context<Instruction48>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction48::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_advanced_cases.instruction29`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction49(ctx: Context<Instruction49>) -> Result<()> {
		instruction49::handler(ctx)
	}

/// Reference `validate_advanced_cases.safe_instruction29`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn safe_instruction49(ctx: Context<SafeInstruction49>) -> Result<()> {
		safe_instruction49::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction30`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction50(ctx: Context<Instruction50>) -> Result<()> {
		instruction50::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction31`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
	pub fn instruction51(ctx: Context<Instruction51>, account_seed_dynamic: u8) -> Result<()> {
		instruction51::handler(ctx, account_seed_dynamic)
	}

/// Reference `validate_advanced_cases.instruction32`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	pub fn instruction52(ctx: Context<Instruction52>, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
		instruction52::handler(ctx, account_seed_u8_type, account_seed_u16_type, account_seed_u32_type, account_seed_u64_type, account_seed_i8_type, account_seed_i16_type, account_seed_i32_type, account_seed_i64_type, account_seed_string_type, account_seed_pubkey_type)
	}

/// Reference `validate_advanced_cases.instruction33`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - u8_type: [u8] This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
/// - u16_type: [u16] This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
/// - u32_type: [u32] This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
/// - u64_type: [u64] This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
/// - i8_type: [i8] This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
/// - i16_type: [i16] This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
/// - i32_type: [i32] This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
/// - i64_type: [i64] This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
/// - string_type: [String] This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
	pub fn instruction53(ctx: Context<Instruction53>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
		instruction53::handler(ctx, u8_type, u16_type, u32_type, u64_type, i8_type, i16_type, i32_type, i64_type, string_type)
	}

/// Reference `validate_advanced_cases.instruction34`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - u8_type: [u8] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - u16_type: [u16] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - u32_type: [u32] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - u64_type: [u64] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i8_type: [i8] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i16_type: [i16] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i32_type: [i32] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i64_type: [i64] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - string_type: [String] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
	pub fn instruction54(ctx: Context<Instruction54>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
		instruction54::handler(ctx, u8_type, u16_type, u32_type, u64_type, i8_type, i16_type, i32_type, i64_type, string_type)
	}

/// Reference `validate_advanced_cases.instruction35`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - u8_type: [u8] This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
/// - u16_type: [u16] This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
/// - u32_type: [u32] This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
/// - u64_type: [u64] This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
/// - i8_type: [i8] This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
/// - i16_type: [i16] This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
/// - i32_type: [i32] This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
/// - i64_type: [i64] This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
/// - string_type: [String] This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
	pub fn instruction55(ctx: Context<Instruction55>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
		instruction55::handler(ctx, u8_type, u16_type, u32_type, u64_type, i8_type, i16_type, i32_type, i64_type, string_type)
	}

/// Reference `validate_advanced_cases.instruction36`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [AccountInfo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 6. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - u8_type: [u8] This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
/// - u16_type: [u16] This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
/// - u32_type: [u32] This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
/// - u64_type: [u64] This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
/// - i8_type: [i8] This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
/// - i16_type: [i16] This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
/// - i32_type: [i32] This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
/// - i64_type: [i64] This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
/// - string_type: [String] This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
	pub fn instruction56(ctx: Context<Instruction56>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
		instruction56::handler(ctx, u8_type, u16_type, u32_type, u64_type, i8_type, i16_type, i32_type, i64_type, string_type)
	}

/// Reference `validate_advanced_cases.instruction37`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - u8_type: [u8] This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
/// - u16_type: [u16] This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
/// - u32_type: [u32] This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
/// - u64_type: [u64] This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
/// - i8_type: [i8] This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
/// - i16_type: [i16] This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
/// - i32_type: [i32] This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
/// - i64_type: [i64] This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
/// - string_type: [String] This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
	pub fn instruction57(ctx: Context<Instruction57>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
		instruction57::handler(ctx, u8_type, u16_type, u32_type, u64_type, i8_type, i16_type, i32_type, i64_type, string_type)
	}

/// Reference `validate_advanced_cases.instruction38`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[signer]` signer_1: [State] 
/// 4. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction58(ctx: Context<Instruction58>) -> Result<()> {
		instruction58::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction39`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
/// 4. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction59(ctx: Context<Instruction59>) -> Result<()> {
		instruction59::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction40`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction60(ctx: Context<Instruction60>) -> Result<()> {
		instruction60::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction41`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction61(ctx: Context<Instruction61>) -> Result<()> {
		instruction61::handler(ctx)
	}

/// Reference `validate_advanced_cases.instruction42`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
/// 4. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn instruction62(ctx: Context<Instruction62>) -> Result<()> {
		instruction62::handler(ctx)
	}

/// Reference `validate_advanced_cases.safe_instruction42`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [State] 
/// 4. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
	pub fn safe_instruction62(ctx: Context<SafeInstruction62>) -> Result<()> {
		safe_instruction62::handler(ctx)
	}

/// Reference `validate_data_types.instruction1`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [AccountInfo] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 5. `[]` validate_data_types_v0_0_0: [AccountInfo] Auto-generated, ValidateDataTypesProgram v0.0.0
	pub fn instruction63(ctx: Context<Instruction63>) -> Result<()> {
		instruction63::handler(ctx)
	}

/// Reference `validate_data_types.instruction2`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [AccountInfo] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 5. `[]` validate_data_types_v0_0_0: [AccountInfo] Auto-generated, ValidateDataTypesProgram v0.0.0
	pub fn instruction64(ctx: Context<Instruction64>) -> Result<()> {
		instruction64::handler(ctx)
	}


	#[derive(Accounts)]
	pub struct Instruction1<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction1<'info> {
		pub fn cpi_validate_accounts_ref_instruction1(&self, input_1: u8) -> Result<()> {
			validate_accounts::cpi::instruction1(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction1 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction2<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
			seeds = [
				b"Static Value",
			],
			bump,
			seeds::program=validate_accounts::id(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction2<'info> {
		pub fn cpi_validate_accounts_ref_instruction2(&self, input_1: u8) -> Result<()> {
			validate_accounts::cpi::instruction2(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction2 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
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
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
			seeds::program=validate_accounts::id(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction3<'info> {
		pub fn cpi_validate_accounts_ref_instruction3(&self, input_1: u8, account_seed_dynamic: u8) -> Result<()> {
			validate_accounts::cpi::instruction3(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction3 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				input_1, 
				account_seed_dynamic, 
			)
		}
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
	pub struct Instruction4<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
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
			seeds::program=validate_accounts::id(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction4<'info> {
		pub fn cpi_validate_accounts_ref_instruction4(&self, input_1: u8, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_accounts::cpi::instruction4(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction4 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				input_1, 
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction5<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction5<'info> {
		pub fn cpi_validate_accounts_ref_instruction5(&self, ) -> Result<()> {
			validate_accounts::cpi::instruction5(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction5 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction6<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
			seeds = [
				b"Static Value",
			],
			bump,
			seeds::program=validate_accounts::id(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction6<'info> {
		pub fn cpi_validate_accounts_ref_instruction6(&self, ) -> Result<()> {
			validate_accounts::cpi::instruction6(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction6 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
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
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
			seeds::program=validate_accounts::id(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction7<'info> {
		pub fn cpi_validate_accounts_ref_instruction7(&self, account_seed_dynamic: u8) -> Result<()> {
			validate_accounts::cpi::instruction7(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction7 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				account_seed_dynamic, 
			)
		}
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
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
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
			seeds::program=validate_accounts::id(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction8<'info> {
		pub fn cpi_validate_accounts_ref_instruction8(&self, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_accounts::cpi::instruction8(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction8 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction9<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
		)]
		pub account: Signer<'info>,

		pub system_program: Program<'info, System>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction9<'info> {
		pub fn cpi_validate_accounts_ref_instruction9(&self, input_1: u8) -> Result<()> {
			validate_accounts::cpi::instruction9(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction9 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction10<'info> {
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
			seeds::program=validate_accounts::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction10<'info> {
		pub fn cpi_validate_accounts_ref_instruction10(&self, input_1: u8) -> Result<()> {
			validate_accounts::cpi::instruction10(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction10 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction11<'info> {
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
			seeds::program=validate_accounts::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction11<'info> {
		pub fn cpi_validate_accounts_ref_instruction11(&self, input_1: u8, account_seed_dynamic: u8) -> Result<()> {
			validate_accounts::cpi::instruction11(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction11 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_dynamic, 
			)
		}
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
	pub struct Instruction12<'info> {
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
			seeds::program=validate_accounts::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction12<'info> {
		pub fn cpi_validate_accounts_ref_instruction12(&self, input_1: u8, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_accounts::cpi::instruction12(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction12 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction13<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
		)]
		pub account: Signer<'info>,

		pub system_program: Program<'info, System>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction13<'info> {
		pub fn cpi_validate_accounts_ref_instruction13(&self, input_1: u8) -> Result<()> {
			validate_accounts::cpi::instruction13(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction13 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction14<'info> {
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
			seeds::program=validate_accounts::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction14<'info> {
		pub fn cpi_validate_accounts_ref_instruction14(&self, input_1: u8) -> Result<()> {
			validate_accounts::cpi::instruction14(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction14 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction15<'info> {
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
			seeds::program=validate_accounts::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction15<'info> {
		pub fn cpi_validate_accounts_ref_instruction15(&self, input_1: u8, account_seed_dynamic: u8) -> Result<()> {
			validate_accounts::cpi::instruction15(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction15 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_dynamic, 
			)
		}
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
	pub struct Instruction16<'info> {
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
			seeds::program=validate_accounts::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction16<'info> {
		pub fn cpi_validate_accounts_ref_instruction16(&self, input_1: u8, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_accounts::cpi::instruction16(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction16 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
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
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction17<'info> {
		pub fn cpi_validate_accounts_ref_instruction17(&self, ) -> Result<()> {
			validate_accounts::cpi::instruction17(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction17 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
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
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> SafeInstruction17<'info> {
		pub fn cpi_validate_accounts_ref_safe_instruction17(&self, ) -> Result<()> {
			validate_accounts::cpi::safe_instruction17(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::SafeInstruction17 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
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
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
			seeds = [
				b"Static Value",
			],
			bump,
			seeds::program=validate_accounts::id(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction18<'info> {
		pub fn cpi_validate_accounts_ref_instruction18(&self, ) -> Result<()> {
			validate_accounts::cpi::instruction18(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction18 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
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
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
			seeds::program=validate_accounts::id(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction19<'info> {
		pub fn cpi_validate_accounts_ref_instruction19(&self, account_seed_dynamic: u8) -> Result<()> {
			validate_accounts::cpi::instruction19(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction19 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				account_seed_dynamic, 
			)
		}
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
			owner=Pubkey::from_str("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs").unwrap(),
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
			seeds::program=validate_accounts::id(),
		)]
		pub account: Account<'info, validate_accounts::State>,

		pub validate_accounts_v0_0_0: Program<'info, validate_accounts::program::ValidateAccounts>,
	}

	impl<'info> Instruction20<'info> {
		pub fn cpi_validate_accounts_ref_instruction20(&self, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_accounts::cpi::instruction20(
				CpiContext::new(self.validate_accounts_v0_0_0.to_account_info(), {
					validate_accounts::cpi::accounts::Instruction20 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction0<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction0<'info> {
		pub fn cpi_validate_advanced_cases_instruction0_only_method_with_name(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction0_only_method_with_name(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction0OnlyMethodWithName {
						fee_payer: self.fee_payer.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction21<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction21<'info> {
		pub fn cpi_validate_advanced_cases_instruction1(&self, input_1: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction1(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction1 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction22<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
			seeds = [
				b"Static Value",
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction22<'info> {
		pub fn cpi_validate_advanced_cases_instruction2(&self, input_1: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction2(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction2 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction23<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction23<'info> {
		pub fn cpi_validate_advanced_cases_instruction3(&self, input_1: u8, account_seed_dynamic: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction3(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction3 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				input_1, 
				account_seed_dynamic, 
			)
		}
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
	pub struct Instruction24<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction24<'info> {
		pub fn cpi_validate_advanced_cases_instruction4(&self, input_1: u8, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_advanced_cases::cpi::instruction4(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction4 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				input_1, 
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction25<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction25<'info> {
		pub fn cpi_validate_advanced_cases_instruction5(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction5(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction5 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction26<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
			seeds = [
				b"Static Value",
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction26<'info> {
		pub fn cpi_validate_advanced_cases_instruction6(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction6(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction6 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction27<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction27<'info> {
		pub fn cpi_validate_advanced_cases_instruction7(&self, account_seed_dynamic: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction7(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction7 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				account_seed_dynamic, 
			)
		}
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
	pub struct Instruction28<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction28<'info> {
		pub fn cpi_validate_advanced_cases_instruction8(&self, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_advanced_cases::cpi::instruction8(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction8 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction29<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
		)]
		pub account: Signer<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction29<'info> {
		pub fn cpi_validate_advanced_cases_instruction9(&self, input_1: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction9(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction9 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction30<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction30<'info> {
		pub fn cpi_validate_advanced_cases_instruction10(&self, input_1: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction10(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction10 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction31<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction31<'info> {
		pub fn cpi_validate_advanced_cases_instruction11(&self, input_1: u8, account_seed_dynamic: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction11(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction11 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_dynamic, 
			)
		}
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
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction32<'info> {
		pub fn cpi_validate_advanced_cases_instruction12(&self, input_1: u8, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_advanced_cases::cpi::instruction12(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction12 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction33<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
		)]
		pub account: Signer<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction33<'info> {
		pub fn cpi_validate_advanced_cases_instruction13(&self, input_1: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction13(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction13 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction34<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction34<'info> {
		pub fn cpi_validate_advanced_cases_instruction14(&self, input_1: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction14(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction14 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction35<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction35<'info> {
		pub fn cpi_validate_advanced_cases_instruction15(&self, input_1: u8, account_seed_dynamic: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction15(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction15 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_dynamic, 
			)
		}
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
	pub struct Instruction36<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction36<'info> {
		pub fn cpi_validate_advanced_cases_instruction16(&self, input_1: u8, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_advanced_cases::cpi::instruction16(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction16 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction37<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			close=fee_payer,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction37<'info> {
		pub fn cpi_validate_advanced_cases_instruction17(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction17(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction17 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct SafeInstruction37<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			signer,
			close=fee_payer,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> SafeInstruction37<'info> {
		pub fn cpi_validate_advanced_cases_safe_instruction17(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::safe_instruction17(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::SafeInstruction17 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction38<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			close=fee_payer,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
			seeds = [
				b"Static Value",
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction38<'info> {
		pub fn cpi_validate_advanced_cases_instruction18(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction18(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction18 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction39<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			close=fee_payer,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction39<'info> {
		pub fn cpi_validate_advanced_cases_instruction19(&self, account_seed_dynamic: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction19(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction19 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				account_seed_dynamic, 
			)
		}
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
	pub struct Instruction40<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			close=fee_payer,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction40<'info> {
		pub fn cpi_validate_advanced_cases_instruction20(&self, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_advanced_cases::cpi::instruction20(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction20 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction41<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
		)]
		pub account: Signer<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction41<'info> {
		pub fn cpi_validate_advanced_cases_instruction21(&self, input_1: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction21(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction21 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction42<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds = [
				b"Static Value",
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction42<'info> {
		pub fn cpi_validate_advanced_cases_instruction22(&self, input_1: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction22(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction22 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction43<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction43<'info> {
		pub fn cpi_validate_advanced_cases_instruction23(&self, input_1: u8, account_seed_dynamic: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction23(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction23 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_dynamic, 
			)
		}
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
	pub struct Instruction44<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction44<'info> {
		pub fn cpi_validate_advanced_cases_instruction24(&self, input_1: u8, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_advanced_cases::cpi::instruction24(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction24 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction45<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
		)]
		pub account: Signer<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction45<'info> {
		pub fn cpi_validate_advanced_cases_instruction25(&self, input_1: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction25(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction25 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction46<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds = [
				b"Static Value",
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction46<'info> {
		pub fn cpi_validate_advanced_cases_instruction26(&self, input_1: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction26(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction26 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction47<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction47<'info> {
		pub fn cpi_validate_advanced_cases_instruction27(&self, input_1: u8, account_seed_dynamic: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction27(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction27 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_dynamic, 
			)
		}
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
	pub struct Instruction48<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction48<'info> {
		pub fn cpi_validate_advanced_cases_instruction28(&self, input_1: u8, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_advanced_cases::cpi::instruction28(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction28 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				input_1, 
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction49<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction49<'info> {
		pub fn cpi_validate_advanced_cases_instruction29(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction29(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction29 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct SafeInstruction49<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> SafeInstruction49<'info> {
		pub fn cpi_validate_advanced_cases_safe_instruction29(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::safe_instruction29(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::SafeInstruction29 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction50<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
			seeds = [
				b"Static Value",
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction50<'info> {
		pub fn cpi_validate_advanced_cases_instruction30(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction30(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction30 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	#[instruction(
		account_seed_dynamic: u8,
	)]
	pub struct Instruction51<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
			seeds = [
				b"Static Value",
				account_seed_dynamic.to_le_bytes().as_ref(),
			],
			bump,
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction51<'info> {
		pub fn cpi_validate_advanced_cases_instruction31(&self, account_seed_dynamic: u8) -> Result<()> {
			validate_advanced_cases::cpi::instruction31(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction31 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				account_seed_dynamic, 
			)
		}
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
	pub struct Instruction52<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction52<'info> {
		pub fn cpi_validate_advanced_cases_instruction32(&self, account_seed_u8_type: u8, account_seed_u16_type: u16, account_seed_u32_type: u32, account_seed_u64_type: u64, account_seed_i8_type: i8, account_seed_i16_type: i16, account_seed_i32_type: i32, account_seed_i64_type: i64, account_seed_string_type: String, account_seed_pubkey_type: Pubkey) -> Result<()> {
			validate_advanced_cases::cpi::instruction32(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction32 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				account_seed_u8_type, 
				account_seed_u16_type, 
				account_seed_u32_type, 
				account_seed_u64_type, 
				account_seed_i8_type, 
				account_seed_i16_type, 
				account_seed_i32_type, 
				account_seed_i64_type, 
				account_seed_string_type, 
				account_seed_pubkey_type, 
			)
		}
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
	pub struct Instruction53<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction53<'info> {
		pub fn cpi_validate_advanced_cases_instruction33(&self, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
			validate_advanced_cases::cpi::instruction33(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction33 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				u8_type, 
				u16_type, 
				u32_type, 
				u64_type, 
				i8_type, 
				i16_type, 
				i32_type, 
				i64_type, 
				string_type, 
			)
		}
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
	pub struct Instruction54<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction54<'info> {
		pub fn cpi_validate_advanced_cases_instruction34(&self, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
			validate_advanced_cases::cpi::instruction34(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction34 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				u8_type, 
				u16_type, 
				u32_type, 
				u64_type, 
				i8_type, 
				i16_type, 
				i32_type, 
				i64_type, 
				string_type, 
			)
		}
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
	pub struct Instruction55<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction55<'info> {
		pub fn cpi_validate_advanced_cases_instruction35(&self, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
			validate_advanced_cases::cpi::instruction35(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction35 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				u8_type, 
				u16_type, 
				u32_type, 
				u64_type, 
				i8_type, 
				i16_type, 
				i32_type, 
				i64_type, 
				string_type, 
			)
		}
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
	pub struct Instruction56<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction56<'info> {
		pub fn cpi_validate_advanced_cases_instruction36(&self, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
			validate_advanced_cases::cpi::instruction36(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction36 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				u8_type, 
				u16_type, 
				u32_type, 
				u64_type, 
				i8_type, 
				i16_type, 
				i32_type, 
				i64_type, 
				string_type, 
			)
		}
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
	pub struct Instruction57<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_1: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			close=fee_payer,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
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
			seeds::program=validate_advanced_cases::id(),
		)]
		pub account: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction57<'info> {
		pub fn cpi_validate_advanced_cases_instruction37(&self, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, string_type: String) -> Result<()> {
			validate_advanced_cases::cpi::instruction37(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction37 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						account: self.account.to_account_info(),
					}
				}),
				u8_type, 
				u16_type, 
				u32_type, 
				u64_type, 
				i8_type, 
				i16_type, 
				i32_type, 
				i64_type, 
				string_type, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction58<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			signer,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
		)]
		pub signer_1: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction58<'info> {
		pub fn cpi_validate_advanced_cases_instruction38(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction38(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction38 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction59<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			signer,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
		)]
		pub signer_1: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction59<'info> {
		pub fn cpi_validate_advanced_cases_instruction39(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction39(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction39 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction60<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_1: Signer<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction60<'info> {
		pub fn cpi_validate_advanced_cases_instruction40(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction40(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction40 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction61<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
		)]
		pub signer_1: Signer<'info>,

		pub system_program: Program<'info, System>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction61<'info> {
		pub fn cpi_validate_advanced_cases_instruction41(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction41(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction41 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction62<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			signer,
			close=fee_payer,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
		)]
		pub signer_1: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> Instruction62<'info> {
		pub fn cpi_validate_advanced_cases_instruction42(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::instruction42(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::Instruction42 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct SafeInstruction62<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub signer_2: Signer<'info>,

		pub signer_3: Signer<'info>,

		#[account(
			mut,
			signer,
			close=fee_payer,
			owner=Pubkey::from_str("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm").unwrap(),
		)]
		pub signer_1: Account<'info, validate_advanced_cases::State>,

		pub validate_advanced_cases_v0_0_0: Program<'info, validate_advanced_cases::program::ValidateAdvancedCases>,
	}

	impl<'info> SafeInstruction62<'info> {
		pub fn cpi_validate_advanced_cases_safe_instruction42(&self, ) -> Result<()> {
			validate_advanced_cases::cpi::safe_instruction42(
				CpiContext::new(self.validate_advanced_cases_v0_0_0.to_account_info(), {
					validate_advanced_cases::cpi::accounts::SafeInstruction42 {
						fee_payer: self.fee_payer.to_account_info(),
						signer_2: self.signer_2.to_account_info(),
						signer_3: self.signer_3.to_account_info(),
						signer_1: self.signer_1.to_account_info(),
					}
				}),
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction63<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
		)]
		pub account: Signer<'info>,

		/// CHECK: implement manual checks if needed
		pub account_info_type: UncheckedAccount<'info>,

		#[account(
			mut,
		)]
		/// CHECK: implement manual checks if needed
		pub account_info_type_mut: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_data_types_v0_0_0: Program<'info, validate_data_types::program::ValidateDataTypes>,
	}

	impl<'info> Instruction63<'info> {
		pub fn cpi_validate_data_types_instruction1(&self, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, u128_type: u128, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, i128_type: i128, string_type: String, bool_type: bool, f32_type: f32, f64_type: f64, pubkey_type: Pubkey, u8_type_option: Option<u8>, u16_type_option: Option<u16>, u32_type_option: Option<u32>, u64_type_option: Option<u64>, u128_type_option: Option<u128>, i8_type_option: Option<i8>, i16_type_option: Option<i16>, i32_type_option: Option<i32>, i64_type_option: Option<i64>, i128_type_option: Option<i128>, string_type_option: Option<String>, bool_type_option: Option<bool>, f32_type_option: Option<f32>, f64_type_option: Option<f64>, pubkey_type_option: Option<Pubkey>, u8_type_vector: Vec<u8>, u16_type_vector: Vec<u16>, u32_type_vector: Vec<u32>, u64_type_vector: Vec<u64>, u128_type_vector: Vec<u128>, i8_type_vector: Vec<i8>, i16_type_vector: Vec<i16>, i32_type_vector: Vec<i32>, i64_type_vector: Vec<i64>, i128_type_vector: Vec<i128>, bool_type_vector: Vec<bool>, f32_type_vector: Vec<f32>, f64_type_vector: Vec<f64>, pubkey_type_vector: Vec<Pubkey>) -> Result<()> {
			validate_data_types::cpi::instruction1(
				CpiContext::new(self.validate_data_types_v0_0_0.to_account_info(), {
					validate_data_types::cpi::accounts::Instruction1 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
						account_info_type: self.account_info_type.to_account_info(),
						account_info_type_mut: self.account_info_type_mut.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				u8_type, 
				u16_type, 
				u32_type, 
				u64_type, 
				u128_type, 
				i8_type, 
				i16_type, 
				i32_type, 
				i64_type, 
				i128_type, 
				string_type, 
				bool_type, 
				f32_type, 
				f64_type, 
				pubkey_type, 
				u8_type_option, 
				u16_type_option, 
				u32_type_option, 
				u64_type_option, 
				u128_type_option, 
				i8_type_option, 
				i16_type_option, 
				i32_type_option, 
				i64_type_option, 
				i128_type_option, 
				string_type_option, 
				bool_type_option, 
				f32_type_option, 
				f64_type_option, 
				pubkey_type_option, 
				u8_type_vector, 
				u16_type_vector, 
				u32_type_vector, 
				u64_type_vector, 
				u128_type_vector, 
				i8_type_vector, 
				i16_type_vector, 
				i32_type_vector, 
				i64_type_vector, 
				i128_type_vector, 
				bool_type_vector, 
				f32_type_vector, 
				f64_type_vector, 
				pubkey_type_vector, 
			)
		}
	}


	#[derive(Accounts)]
	pub struct Instruction64<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		#[account(
			mut,
			seeds = [
				b"master_type_pda",
			],
			bump,
			seeds::program=validate_data_types::id(),
		)]
		/// CHECK: implement manual checks if needed
		pub account: UncheckedAccount<'info>,

		/// CHECK: implement manual checks if needed
		pub account_info_type: UncheckedAccount<'info>,

		#[account(
			mut,
		)]
		/// CHECK: implement manual checks if needed
		pub account_info_type_mut: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,

		pub validate_data_types_v0_0_0: Program<'info, validate_data_types::program::ValidateDataTypes>,
	}

	impl<'info> Instruction64<'info> {
		pub fn cpi_validate_data_types_instruction2(&self, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, u128_type: u128, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, i128_type: i128, string_type: String, bool_type: bool, f32_type: f32, f64_type: f64, pubkey_type: Pubkey, u8_type_option: Option<u8>, u16_type_option: Option<u16>, u32_type_option: Option<u32>, u64_type_option: Option<u64>, u128_type_option: Option<u128>, i8_type_option: Option<i8>, i16_type_option: Option<i16>, i32_type_option: Option<i32>, i64_type_option: Option<i64>, i128_type_option: Option<i128>, string_type_option: Option<String>, bool_type_option: Option<bool>, f32_type_option: Option<f32>, f64_type_option: Option<f64>, pubkey_type_option: Option<Pubkey>, u8_type_vector: Vec<u8>, u16_type_vector: Vec<u16>, u32_type_vector: Vec<u32>, u64_type_vector: Vec<u64>, u128_type_vector: Vec<u128>, i8_type_vector: Vec<i8>, i16_type_vector: Vec<i16>, i32_type_vector: Vec<i32>, i64_type_vector: Vec<i64>, i128_type_vector: Vec<i128>, bool_type_vector: Vec<bool>, f32_type_vector: Vec<f32>, f64_type_vector: Vec<f64>, pubkey_type_vector: Vec<Pubkey>) -> Result<()> {
			validate_data_types::cpi::instruction2(
				CpiContext::new(self.validate_data_types_v0_0_0.to_account_info(), {
					validate_data_types::cpi::accounts::Instruction2 {
						fee_payer: self.fee_payer.to_account_info(),
						account: self.account.to_account_info(),
						account_info_type: self.account_info_type.to_account_info(),
						account_info_type_mut: self.account_info_type_mut.to_account_info(),
						system_program: self.system_program.to_account_info(),
					}
				}),
				u8_type, 
				u16_type, 
				u32_type, 
				u64_type, 
				u128_type, 
				i8_type, 
				i16_type, 
				i32_type, 
				i64_type, 
				i128_type, 
				string_type, 
				bool_type, 
				f32_type, 
				f64_type, 
				pubkey_type, 
				u8_type_option, 
				u16_type_option, 
				u32_type_option, 
				u64_type_option, 
				u128_type_option, 
				i8_type_option, 
				i16_type_option, 
				i32_type_option, 
				i64_type_option, 
				i128_type_option, 
				string_type_option, 
				bool_type_option, 
				f32_type_option, 
				f64_type_option, 
				pubkey_type_option, 
				u8_type_vector, 
				u16_type_vector, 
				u32_type_vector, 
				u64_type_vector, 
				u128_type_vector, 
				i8_type_vector, 
				i16_type_vector, 
				i32_type_vector, 
				i64_type_vector, 
				i128_type_vector, 
				bool_type_vector, 
				f32_type_vector, 
				f64_type_vector, 
				pubkey_type_vector, 
			)
		}
	}

}
