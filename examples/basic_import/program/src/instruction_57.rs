use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};

/// Reference `validate_advanced_cases.instruction37`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 5. `[]` validate_advanced_cases_v_0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - account_seed_u_8_type: [u8] Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
pub fn instruction_57(
	program_id: &Pubkey,
	for_instruction_37: &[&AccountInfo],
	account: &AccountPDA<validate_advanced_cases::src::state::PdaaccountVerifiesSeedsTypes>,
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_string_type: String,
) -> ProgramResult {
    // Implement your business logic here...

	validate_advanced_cases::src::cpi::instruction_37(
		for_instruction_37,
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_string_type,
	)?;

    Ok(())
}