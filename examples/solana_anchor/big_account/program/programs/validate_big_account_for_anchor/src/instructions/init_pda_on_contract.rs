use crate::*;
use anchor_lang::prelude::*;

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [Account10Kb] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - account_seed_index: [u32] Auto-generated, from the input "account" for the its seed definition "Array", sets the seed named "index"
pub fn handler(
	ctx: Context<InitPdaOnContract>,
) -> Result<()> {
    // Implement your business logic here...
	
	Ok(())
}
