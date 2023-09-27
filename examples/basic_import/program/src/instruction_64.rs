use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;



/// Reference `validate_data_types.instruction2`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [AccountInfo] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 5. `[]` validate_data_types_v_0_0_0: [AccountInfo] Auto-generated, ValidateDataTypesProgram v0.0.0
pub fn instruction_64(
	program_id: &Pubkey,
	for_instruction_2: &[&AccountInfo],
	account: &AccountInfo,
	account_info_type: &AccountInfo,
	account_info_type_mut: &AccountInfo,
) -> ProgramResult {
    // Implement your business logic here...

	validate_data_types::src::cpi::instruction_2(
		for_instruction_2,
		u8::MAX,
		u16::MAX,
		u32::MAX,
		u64::MAX,
		u128::MAX,
		i8::MAX,
		i16::MAX,
		i32::MAX,
		i64::MAX,
		i128::MAX,
		String::from("Hello, World!"),
		true,
		f32::MAX,
		f64::MAX,
		*program_id,
		Some(u8::MAX),
		Some(u16::MAX),
		Some(u32::MAX),
		Some(u64::MAX),
		Some(u128::MAX),
		Some(i8::MAX),
		Some(i16::MAX),
		Some(i32::MAX),
		Some(i64::MAX),
		Some(i128::MAX),
		Some(String::from("Hello, World!")),
		Some(true),
		Some(f32::MAX),
		Some(f64::MAX),
		Some(*program_id),
		vec![u8::MIN, u8::MAX],
		vec![u16::MIN, u16::MAX],
		vec![u32::MIN, u32::MAX],
		vec![u64::MIN, u64::MAX],
		vec![u128::MIN, u128::MAX],
		vec![i8::MIN, i8::MAX],
		vec![i16::MIN, i16::MAX],
		vec![i32::MIN, i32::MAX],
		vec![i64::MIN, i64::MAX],
		vec![i128::MIN, i128::MAX],
		vec![false, true],
		vec![f32::MIN, f32::MAX],
		vec![f64::MIN, f64::MAX],
		vec![*program_id],
	)?;

    Ok(())
}