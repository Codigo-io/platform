use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;
use solana_program::msg;

use crate::generated::state::{
	AccountPDA,
	State,
};


/// Test `non-mut` with PDA account that maps seeds with signers and inputs
///
/// Accounts:
/// 0. `[signer]` fee_payer: [AccountInfo] 
/// 1. `[signer]` signer1: [AccountInfo]
/// 2. `[signer]` signer2: [AccountInfo]
/// 3. `[signer]` signer3: [AccountInfo]
/// 4. `[]` account: [State] 
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - u_64_type: [u64] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - i_64_type: [i64] 
/// - string_type: [String] 
pub fn instruction33(
	program_id: &Pubkey,
	account: &AccountPDA<State>,
	u_8_type: u8,
	u_16_type: u16,
	u_32_type: u32,
	u_64_type: u64,
	i_8_type: i8,
	i_16_type: i16,
	i_32_type: i32,
	i_64_type: i64,
	string_type: String,
) -> ProgramResult {
	msg!("Account.data.field_1 = {}", account.data.field_1);
	msg!("u_8_type = {}", u_8_type);
	msg!("u_16_type = {}", u_16_type);
	msg!("u_32_type = {}", u_32_type);
	msg!("u_64_type = {}", u_64_type);
	msg!("i_8_type = {}", i_8_type);
	msg!("i_16_type = {}", i_16_type);
	msg!("i_32_type = {}", i_32_type);
	msg!("i_64_type = {}", i_64_type);
	msg!("string_type = {}", string_type);

    Ok(())
}