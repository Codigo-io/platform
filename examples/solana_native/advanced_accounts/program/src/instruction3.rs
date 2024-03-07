use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	State,
};


/// Test `mut` with PDA account that has one static and dynamic seed, one field and 4 signers
///
/// Accounts:
/// 0. `[signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer1: [AccountInfo]
/// 2. `[signer]` signer2: [AccountInfo]
/// 3. `[signer]` signer3: [AccountInfo]
/// 4. `[writable]` account: [State] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
pub fn instruction3(
	program_id: &Pubkey,
	account: &mut AccountPDA<State>,
	input_1: u8,
) -> ProgramResult {
	account.data.field_1 = input_1;

    Ok(())
}