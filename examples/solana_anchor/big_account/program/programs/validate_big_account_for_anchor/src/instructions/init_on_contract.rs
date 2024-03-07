use crate::*;
use anchor_lang::prelude::*;

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [Account10Kb] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
pub fn handler(
	ctx: Context<InitOnContract>,
) -> Result<()> {
    // Implement your business logic here...
	
	Ok(())
}
