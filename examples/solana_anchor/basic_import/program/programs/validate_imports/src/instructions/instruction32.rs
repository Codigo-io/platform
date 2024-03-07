use crate::*;
use anchor_lang::prelude::*;

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
pub fn handler(
	ctx: Context<Instruction32>,
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
) -> Result<()> {
    // Implement your business logic here...
	
	// Cpi calls wrappers
	ctx.accounts.cpi_validate_advanced_cases_instruction12(
		32,
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
	)?;

	Ok(())
}
