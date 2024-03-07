use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
};


/// Reference `validate_advanced_cases.instruction34`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer1: [AccountInfo]
/// 2. `[signer]` signer2: [AccountInfo]
/// 3. `[signer]` signer3: [AccountInfo]
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v_0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - u_8_type: [u8] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - u_16_type: [u16] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - u_32_type: [u32] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - u_64_type: [u64] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i_8_type: [i8] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i_16_type: [i16] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i_32_type: [i32] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i_64_type: [i64] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - string_type: [String] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
pub fn instruction54(
	program_id: &Pubkey,
	for_instruction34: &[&AccountInfo],
	account: &AccountPDA<validate_advanced_cases::src::state::State>,
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
    // Implement your business logic here...



	validate_advanced_cases::src::cpi::instruction34(
		for_instruction34,
		u_8_type,
		u_16_type,
		u_32_type,
		u_64_type,
		i_8_type,
		i_16_type,
		i_32_type,
		i_64_type,
		string_type,
	)?;


    Ok(())
}