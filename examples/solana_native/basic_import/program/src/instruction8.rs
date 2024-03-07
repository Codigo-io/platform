use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};


/// Reference `validate_accounts_ref.instruction8`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [State] 
/// 2. `[]` validate_accounts_v_0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
///
/// Data:
/// - account_seed_u_8_type: [u8] Auto-generated, from the input "account" for the its seed definition "PdawithAllTypes", sets the seed named "u8_type"
/// - account_seed_u_16_type: [u16] Auto-generated, from the input "account" for the its seed definition "PdawithAllTypes", sets the seed named "u16_type"
/// - account_seed_u_32_type: [u32] Auto-generated, from the input "account" for the its seed definition "PdawithAllTypes", sets the seed named "u32_type"
/// - account_seed_u_64_type: [u64] Auto-generated, from the input "account" for the its seed definition "PdawithAllTypes", sets the seed named "u64_type"
/// - account_seed_i_8_type: [i8] Auto-generated, from the input "account" for the its seed definition "PdawithAllTypes", sets the seed named "i8_type"
/// - account_seed_i_16_type: [i16] Auto-generated, from the input "account" for the its seed definition "PdawithAllTypes", sets the seed named "i16_type"
/// - account_seed_i_32_type: [i32] Auto-generated, from the input "account" for the its seed definition "PdawithAllTypes", sets the seed named "i32_type"
/// - account_seed_i_64_type: [i64] Auto-generated, from the input "account" for the its seed definition "PdawithAllTypes", sets the seed named "i64_type"
/// - account_seed_string_type: [String] Auto-generated, from the input "account" for the its seed definition "PdawithAllTypes", sets the seed named "string_type"
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from the input "account" for the its seed definition "PdawithAllTypes", sets the seed named "pubkey_type"
pub fn instruction8(
	program_id: &Pubkey,
	for_instruction8: &[&AccountInfo],
	account: &AccountPDA<validate_accounts::src::state::State>,
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_u_64_type: u64,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_i_64_type: i64,
	account_seed_string_type: String,
	account_seed_pubkey_type: Pubkey,
) -> ProgramResult {
    // Implement your business logic here...



	validate_accounts::src::cpi::instruction8(
		for_instruction8,
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_u_64_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_i_64_type,
		account_seed_string_type,
		account_seed_pubkey_type,
	)?;


    Ok(())
}