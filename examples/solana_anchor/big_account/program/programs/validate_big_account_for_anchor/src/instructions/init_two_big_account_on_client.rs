use crate::*;
use anchor_lang::prelude::*;

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
/// 2. `[signer]` account_info: [AccountInfo] 
pub fn handler(
	ctx: Context<InitTwoBigAccountOnClient>,
) -> Result<()> {
    // Implement your business logic here...
	
	Ok(())
}
