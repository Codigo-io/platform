// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use std::str::FromStr;

use solana_program::{declare_id, msg};
use solana_program::account_info::{AccountInfo, next_account_info};
use solana_program::entrypoint::ProgramResult;
use solana_program::instruction::{AccountMeta, Instruction};
use solana_program::program::invoke;
use solana_program::pubkey::Pubkey;

use solana_program::system_program;

use crate::src::instructions::ValidateAccountsInstruction::*;
use crate::src::instructions::*;

declare_id!("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs");



/// Test `mut` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
pub fn instruction1(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction1");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction1(Instruction1Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
}

/// Test `mut` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
pub fn instruction2(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction2");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction2(Instruction2Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
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
pub fn instruction3(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction3");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction3(Instruction3Args {
		input_1,
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
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
pub fn instruction4(
	accounts: &[&AccountInfo],
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
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction4");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction4(Instruction4Args {
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
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
}

/// Test `non-mut` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
pub fn instruction5(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction5");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction5;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
}

/// Test `non-mut` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
pub fn instruction6(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction6");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction6;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
}

/// Test `non-mut` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
pub fn instruction7(
	accounts: &[&AccountInfo],
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction7");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction7(Instruction7Args {
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
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
pub fn instruction8(
	accounts: &[&AccountInfo],
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
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction8");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction8(Instruction8Args {
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
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
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
pub fn instruction9(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction9");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let system_program_info = accounts[2];

	let data = Instruction9(Instruction9Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, true),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone(), system_program_info.clone()],
	)
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
pub fn instruction10(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction10");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let system_program_info = accounts[2];

	let data = Instruction10(Instruction10Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone(), system_program_info.clone()],
	)
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
pub fn instruction11(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction11");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let system_program_info = accounts[2];

	let data = Instruction11(Instruction11Args {
		input_1,
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone(), system_program_info.clone()],
	)
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
pub fn instruction12(
	accounts: &[&AccountInfo],
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
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction12");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let system_program_info = accounts[2];

	let data = Instruction12(Instruction12Args {
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
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone(), system_program_info.clone()],
	)
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
pub fn instruction13(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction13");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let system_program_info = accounts[2];

	let data = Instruction13(Instruction13Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, true),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone(), system_program_info.clone()],
	)
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
pub fn instruction14(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction14");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let system_program_info = accounts[2];

	let data = Instruction14(Instruction14Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone(), system_program_info.clone()],
	)
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
pub fn instruction15(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction15");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let system_program_info = accounts[2];

	let data = Instruction15(Instruction15Args {
		input_1,
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone(), system_program_info.clone()],
	)
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
pub fn instruction16(
	accounts: &[&AccountInfo],
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
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction16");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];
	let system_program_info = accounts[2];

	let data = Instruction16(Instruction16Args {
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
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `close_uncheck` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
pub fn instruction17(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction17");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction17;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
}

/// Test `close` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
pub fn safe_instruction17(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.SafeInstruction17");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = SafeInstruction17;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, true),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
}

/// Test `close` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
pub fn instruction18(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction18");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction18;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
}

/// Test `close` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
pub fn instruction19(
	accounts: &[&AccountInfo],
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction19");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction19(Instruction19Args {
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
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
pub fn instruction20(
	accounts: &[&AccountInfo],
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
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAccounts.Instruction20");

	let fee_payer_info = accounts[0];
	let account_info = accounts[1];

	let data = Instruction20(Instruction20Args {
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
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), account_info.clone()],
	)
}