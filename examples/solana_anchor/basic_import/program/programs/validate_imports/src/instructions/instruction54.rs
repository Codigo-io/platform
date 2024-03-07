use crate::*;
use anchor_lang::prelude::*;

/// Reference `validate_advanced_cases.instruction34`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` signer_1: [AccountInfo] 
/// 2. `[signer]` signer_2: [AccountInfo] 
/// 3. `[signer]` signer_3: [AccountInfo] 
/// 4. `[writable]` account: [State] 
/// 5. `[]` validate_advanced_cases_v0_0_0: [AccountInfo] Auto-generated, ValidateAdvancedCasesProgram v0.0.0
///
/// Data:
/// - u8_type: [u8] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - u16_type: [u16] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - u32_type: [u32] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - u64_type: [u64] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i8_type: [i8] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i16_type: [i16] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i32_type: [i32] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - i64_type: [i64] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
/// - string_type: [String] This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
pub fn handler(
	ctx: Context<Instruction54>,
	u8_type: u8,
	u16_type: u16,
	u32_type: u32,
	u64_type: u64,
	i8_type: i8,
	i16_type: i16,
	i32_type: i32,
	i64_type: i64,
	string_type: String,
) -> Result<()> {
    // Implement your business logic here...
	
	// Cpi calls wrappers
	ctx.accounts.cpi_validate_advanced_cases_instruction34(
		u8_type,
		u16_type,
		u32_type,
		u64_type,
		i8_type,
		i16_type,
		i32_type,
		i64_type,
		string_type,
	)?;

	Ok(())
}
