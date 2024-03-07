use crate::*;
use anchor_lang::prelude::*;

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [AccountInfo] 
pub fn handler(
	ctx: Context<InitAccountInfoOnClientWithCustomOwner>,
) -> Result<()> {
    // Implement your business logic here...
	
	Ok(())
}
