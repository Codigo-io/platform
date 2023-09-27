use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	PdaaccountWithOneStaticSeedAndOneField,
};

/// Test `init_if_needed` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
pub fn instruction_14(
	program_id: &Pubkey,
	account: &mut AccountPDA<PdaaccountWithOneStaticSeedAndOneField>,
	input_1: u8,
) -> ProgramResult {
	account.data.field_1 = input_1;

    Ok(())
}