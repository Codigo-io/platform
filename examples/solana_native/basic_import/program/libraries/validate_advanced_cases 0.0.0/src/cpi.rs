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

use crate::src::instructions::ValidateAdvancedCasesInstruction::*;
use crate::src::instructions::*;

declare_id!("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm");



/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
pub fn instruction_0_only_method_with_name(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction0OnlyMethodWithName");

	let fee_payer_info = accounts[0];

	let data = Instruction0OnlyMethodWithName;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone()],
	)
}

/// Test `mut` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [NonPdaaccountWithOneField] 
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_1(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction1");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction1(Instruction1Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `mut` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_2(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction2");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction2(Instruction2Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `mut` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
pub fn instruction_3(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction3");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction3(Instruction3Args {
		input_1,
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
pub fn instruction_4(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_string_type: String,
	account_seed_pubkey_type: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction4");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction4(Instruction4Args {
		input_1,
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_string_type,
		account_seed_pubkey_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `non-mut` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [NonPdaaccountWithOneField] 
pub fn instruction_5(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction5");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction5;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new_readonly(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `non-mut` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [PdaaccountWithOneStaticSeedAndOneField] 
pub fn instruction_6(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction6");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction6;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new_readonly(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `non-mut` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
pub fn instruction_7(
	accounts: &[&AccountInfo],
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction7");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction7(Instruction7Args {
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new_readonly(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `non-mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
pub fn instruction_8(
	accounts: &[&AccountInfo],
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_string_type: String,
	account_seed_pubkey_type: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction8");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction8(Instruction8Args {
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_string_type,
		account_seed_pubkey_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new_readonly(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `init` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [NonPdaaccountWithOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_9(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction9");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction9(Instruction9Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, true),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `init` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_10(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction10");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction10(Instruction10Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `init` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
pub fn instruction_11(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction11");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction11(Instruction11Args {
		input_1,
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
pub fn instruction_12(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_string_type: String,
	account_seed_pubkey_type: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction12");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction12(Instruction12Args {
		input_1,
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_string_type,
		account_seed_pubkey_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `init_if_needed` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [NonPdaaccountWithOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_13(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction13");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction13(Instruction13Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, true),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `init_if_needed` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_14(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction14");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction14(Instruction14Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
pub fn instruction_15(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction15");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction15(Instruction15Args {
		input_1,
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
pub fn instruction_16(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_string_type: String,
	account_seed_pubkey_type: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction16");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction16(Instruction16Args {
		input_1,
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_string_type,
		account_seed_pubkey_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `close` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [NonPdaaccountWithOneField] 
pub fn instruction_17(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction17");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction17;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `close` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
pub fn instruction_18(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction18");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction18;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `close` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
pub fn instruction_19(
	accounts: &[&AccountInfo],
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction19");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction19(Instruction19Args {
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
pub fn instruction_20(
	accounts: &[&AccountInfo],
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_string_type: String,
	account_seed_pubkey_type: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction20");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction20(Instruction20Args {
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_string_type,
		account_seed_pubkey_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `rent-payer` using `init` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [NonPdaaccountWithOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_21(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction21");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction21(Instruction21Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, true),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `rent-payer` using `init` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneFieldTwo] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_22(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction22");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction22(Instruction22Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `rent-payer` using `init` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
pub fn instruction_23(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction23");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction23(Instruction23Args {
		input_1,
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `rent-payer` using `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
pub fn instruction_24(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_string_type: String,
	account_seed_pubkey_type: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction24");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction24(Instruction24Args {
		input_1,
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_string_type,
		account_seed_pubkey_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `rent-payer` using `init_if_needed` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable, signer]` account: [NonPdaaccountWithOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_25(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction25");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction25(Instruction25Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, true),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_26(
	accounts: &[&AccountInfo],
	input_1: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction26");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction26(Instruction26Args {
		input_1,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `rent-payer` using `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
pub fn instruction_27(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction27");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction27(Instruction27Args {
		input_1,
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
pub fn instruction_28(
	accounts: &[&AccountInfo],
	input_1: u8,
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_string_type: String,
	account_seed_pubkey_type: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction28");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction28(Instruction28Args {
		input_1,
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_string_type,
		account_seed_pubkey_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `rent-receiver` with Non-PDA account and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable, signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [NonPdaaccountWithOneField] 
pub fn instruction_29(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction29");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction29;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `rent-receiver` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[writable, signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
pub fn instruction_30(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction30");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction30;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `rent-receiver` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
pub fn instruction_31(
	accounts: &[&AccountInfo],
	account_seed_dynamic: u8,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction31");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction31(Instruction31Args {
		account_seed_dynamic,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `rent-receiver` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[writable, signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
pub fn instruction_32(
	accounts: &[&AccountInfo],
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_string_type: String,
	account_seed_pubkey_type: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction32");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction32(Instruction32Args {
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_string_type,
		account_seed_pubkey_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `non-mut` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
pub fn instruction_33(
	accounts: &[&AccountInfo],
	u_8_type: u8,
	u_16_type: u16,
	u_32_type: u32,
	i_8_type: i8,
	i_16_type: i16,
	i_32_type: i32,
	string_type: String,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction33");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction33(Instruction33Args {
		u_8_type,
		u_16_type,
		u_32_type,
		i_8_type,
		i_16_type,
		i_32_type,
		string_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new_readonly(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `mut` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
pub fn instruction_34(
	accounts: &[&AccountInfo],
	u_8_type: u8,
	u_16_type: u16,
	u_32_type: u32,
	i_8_type: i8,
	i_16_type: i16,
	i_32_type: i32,
	string_type: String,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction34");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction34(Instruction34Args {
		u_8_type,
		u_16_type,
		u_32_type,
		i_8_type,
		i_16_type,
		i_32_type,
		string_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `init` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
pub fn instruction_35(
	accounts: &[&AccountInfo],
	u_8_type: u8,
	u_16_type: u16,
	u_32_type: u32,
	i_8_type: i8,
	i_16_type: i16,
	i_32_type: i32,
	string_type: String,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction35");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction35(Instruction35Args {
		u_8_type,
		u_16_type,
		u_32_type,
		i_8_type,
		i_16_type,
		i_32_type,
		string_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `init_if_needed` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
pub fn instruction_36(
	accounts: &[&AccountInfo],
	u_8_type: u8,
	u_16_type: u16,
	u_32_type: u32,
	i_8_type: i8,
	i_16_type: i16,
	i_32_type: i32,
	string_type: String,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction36");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];
	let system_program_info = accounts[5];

	let data = Instruction36(Instruction36Args {
		u_8_type,
		u_16_type,
		u_32_type,
		i_8_type,
		i_16_type,
		i_32_type,
		string_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone(), system_program_info.clone()],
	)
}

/// Test `close` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
pub fn instruction_37(
	accounts: &[&AccountInfo],
	u_8_type: u8,
	u_16_type: u16,
	u_32_type: u32,
	i_8_type: i8,
	i_16_type: i16,
	i_32_type: i32,
	string_type: String,
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction37");

	let fee_payer_info = accounts[0];
	let signer_1_info = accounts[1];
	let signer_2_info = accounts[2];
	let signer_3_info = accounts[3];
	let account_info = accounts[4];

	let data = Instruction37(Instruction37Args {
		u_8_type,
		u_16_type,
		u_32_type,
		i_8_type,
		i_16_type,
		i_32_type,
		string_type,
	});
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*account_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_1_info.clone(), signer_2_info.clone(), signer_3_info.clone(), account_info.clone()],
	)
}

/// Test `non-mut` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[signer]` signer_1: [NonPdaaccountWithOneField] 
pub fn instruction_38(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction38");

	let fee_payer_info = accounts[0];
	let signer_2_info = accounts[1];
	let signer_3_info = accounts[2];
	let signer_1_info = accounts[3];

	let data = Instruction38;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new_readonly(*signer_1_info.key, true),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_2_info.clone(), signer_3_info.clone(), signer_1_info.clone()],
	)
}

/// Test `mut` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [NonPdaaccountWithOneField] 
pub fn instruction_39(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction39");

	let fee_payer_info = accounts[0];
	let signer_2_info = accounts[1];
	let signer_3_info = accounts[2];
	let signer_1_info = accounts[3];

	let data = Instruction39;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*signer_1_info.key, true),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_2_info.clone(), signer_3_info.clone(), signer_1_info.clone()],
	)
}

/// Test `init` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [NonPdaaccountWithOneField] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
pub fn instruction_40(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction40");

	let fee_payer_info = accounts[0];
	let signer_2_info = accounts[1];
	let signer_3_info = accounts[2];
	let signer_1_info = accounts[3];
	let system_program_info = accounts[4];

	let data = Instruction40;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*signer_1_info.key, true),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_2_info.clone(), signer_3_info.clone(), signer_1_info.clone(), system_program_info.clone()],
	)
}

/// Test `init_if_needed` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [NonPdaaccountWithOneField] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
pub fn instruction_41(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction41");

	let fee_payer_info = accounts[0];
	let signer_2_info = accounts[1];
	let signer_3_info = accounts[2];
	let signer_1_info = accounts[3];
	let system_program_info = accounts[4];

	let data = Instruction41;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*signer_1_info.key, true),
		AccountMeta::new_readonly(*system_program_info.key, false),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_2_info.clone(), signer_3_info.clone(), signer_1_info.clone(), system_program_info.clone()],
	)
}

/// Test `close` Non-PDA account as a signer
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_2: [AccountInfo] 
/// 2. `[signer]` signer_3: [AccountInfo] 
/// 3. `[writable, signer]` signer_1: [NonPdaaccountWithOneField] 
pub fn instruction_42(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: ValidateAdvancedCases.Instruction42");

	let fee_payer_info = accounts[0];
	let signer_2_info = accounts[1];
	let signer_3_info = accounts[2];
	let signer_1_info = accounts[3];

	let data = Instruction42;
	let accounts_meta = vec![
		AccountMeta::new(*fee_payer_info.key, true),
		AccountMeta::new_readonly(*signer_2_info.key, true),
		AccountMeta::new_readonly(*signer_3_info.key, true),
		AccountMeta::new(*signer_1_info.key, true),
	];

	invoke(
		&Instruction::new_with_borsh(id(), &data, accounts_meta),
		&[fee_payer_info.clone(), signer_2_info.clone(), signer_3_info.clone(), signer_1_info.clone()],
	)
}