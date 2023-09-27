use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};

/// Reference `validate_accounts.instruction4`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 2. `[]` validate_accounts_v_0_0_0: [AccountInfo] Auto-generated, ValidateAccountsProgram v0.0.0
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
pub fn instruction_4(
	program_id: &Pubkey,
	for_instruction_4: &[&AccountInfo],
	account: &AccountPDA<validate_accounts::src::state::PdaaccountVerifiesSeedsTypes>,
	account_seed_u_8_type: u8,
	account_seed_u_16_type: u16,
	account_seed_u_32_type: u32,
	account_seed_i_8_type: i8,
	account_seed_i_16_type: i16,
	account_seed_i_32_type: i32,
	account_seed_string_type: String,
	account_seed_pubkey_type: Pubkey,
) -> ProgramResult {
    // Implement your business logic here...

	validate_accounts::src::cpi::instruction_4(
		for_instruction_4,
		4,
		account_seed_u_8_type,
		account_seed_u_16_type,
		account_seed_u_32_type,
		account_seed_i_8_type,
		account_seed_i_16_type,
		account_seed_i_32_type,
		account_seed_string_type,
		account_seed_pubkey_type,
	)?;

    Ok(())
}