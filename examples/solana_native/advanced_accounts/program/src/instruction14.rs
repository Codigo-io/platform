use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	State,
};


/// Test `init_if_needed` with PDA account that has one static seed, one field and 4 signers
///
/// Accounts:
/// 0. `[signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer1: [AccountInfo]
/// 2. `[signer]` signer2: [AccountInfo]
/// 3. `[signer]` signer3: [AccountInfo]
/// 4. `[writable]` account: [State] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction14(
	program_id: &Pubkey,
	account: &mut AccountPDA<State>,
	input_1: u8,
) -> ProgramResult {
	account.data.field_1 = input_1;

    Ok(())
}