use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;
use solana_program::msg;

use crate::generated::state::{
	AccountPDA,
	State,
};


/// Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
///
/// Accounts:
/// 0. `[signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer1: [AccountInfo]
/// 2. `[signer]` signer2: [AccountInfo]
/// 3. `[signer]` signer3: [AccountInfo]
/// 4. `[writable]` account: [State] 
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
pub fn instruction20(
	program_id: &Pubkey,
	account: &mut AccountPDA<State>,
) -> ProgramResult {
	msg!("Account.data.field_1 = {}", account.data.field_1);

    Ok(())
}