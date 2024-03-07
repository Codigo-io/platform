use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account10Kb,
	AccountPDA,
};


/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [Account10Kb] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - account_seed_index: [u32] Auto-generated, from the input "account" for the its seed definition "Array", sets the seed named "index"
pub fn init_pda_on_contract(
	program_id: &Pubkey,
	account: &mut AccountPDA<Account10Kb>,
) -> ProgramResult {
    // Implement your business logic here...






    Ok(())
}