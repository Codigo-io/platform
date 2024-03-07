use crate::*;
use anchor_lang::prelude::*;

/// Reference `validate_data_types.instruction1`, where caller doesn't have inputs
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [AccountInfo] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 5. `[]` validate_data_types_v0_0_0: [AccountInfo] Auto-generated, ValidateDataTypesProgram v0.0.0
pub fn handler(
	ctx: Context<Instruction63>,
) -> Result<()> {
    // Implement your business logic here...
	
	// Cpi calls wrappers
	ctx.accounts.cpi_validate_data_types_instruction1(
		8,
		16,
		32,
		64,
		128,
		-8,
		-16,
		-32,
		-64,
		-128,
		"string".to_string(),
		true,
		3.14,
		9.99,
		Pubkey::from_str("DS2tt4BX7YwCw7yrDNwbAdnYrxjeCPeGJbHmZEYC8RTb").unwrap(),
		Some(8),
		Some(16),
		Some(32),
		Some(64),
		Some(128),
		Some(-8),
		Some(-16),
		Some(-32),
		Some(-64),
		Some(-128),
		Some("string".to_string()),
		Some(true),
		Some(3.14),
		Some(9.99),
		Some(Pubkey::from_str("DS2tt4BX7YwCw7yrDNwbAdnYrxjeCPeGJbHmZEYC8RTb").unwrap()),
		vec![8, 8],
		vec![16, 16],
		vec![32, 32],
		vec![64, 64],
		vec![128, 128],
		vec![-8, -8],
		vec![-16, -16],
		vec![-32, -32],
		vec![-64, -64],
		vec![-128, -128],
		vec![true, true],
		vec![3.14, 3.14],
		vec![9.99, 9.99],
		vec![
			Pubkey::from_str("DS2tt4BX7YwCw7yrDNwbAdnYrxjeCPeGJbHmZEYC8RTb").unwrap(),
			Pubkey::from_str("DS2tt4BX7YwCw7yrDNwbAdnYrxjeCPeGJbHmZEYC8RTb").unwrap(),
		],
	)?;

	Ok(())
}
