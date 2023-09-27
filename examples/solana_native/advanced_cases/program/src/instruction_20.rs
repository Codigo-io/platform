use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::msg;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	PdaaccountVerifiesSeedsTypes,
};

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
	program_id: &Pubkey,
	account: &mut AccountPDA<PdaaccountVerifiesSeedsTypes>,
) -> ProgramResult {
	msg!("Account.data.field_1 = {}", account.data.field_1);

    Ok(())
}