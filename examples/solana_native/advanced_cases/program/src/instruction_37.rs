use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::msg;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	PdaaccountVerifiesSeedsTypes,
};

/// Test `close` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - string_type: [String] 
pub fn instruction_37(
	program_id: &Pubkey,
	account: &mut AccountPDA<PdaaccountVerifiesSeedsTypes>,
	u_8_type: u8,
	u_16_type: u16,
	u_32_type: u32,
	i_8_type: i8,
	i_16_type: i16,
	i_32_type: i32,
	string_type: String,
) -> ProgramResult {
	account.data.field_1 = 37;
	msg!("Account.data.field_1 = {}", account.data.field_1);
	msg!("u_8_type = {}", u_8_type);
	msg!("u_16_type = {}", u_16_type);
	msg!("u_32_type = {}", u_32_type);
	msg!("i_8_type = {}", i_8_type);
	msg!("i_16_type = {}", i_16_type);
	msg!("i_32_type = {}", i_32_type);
	msg!("string_type = {}", string_type);


    Ok(())
}