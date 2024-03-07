use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	Warehouse,
};


/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` warehouse: [Warehouse] 
/// 2. `[signer]` owner: [AccountInfo] 
/// 3. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - name: [String] 
/// - description: [String] type
pub fn create_warehouse(
	program_id: &Pubkey,
	warehouse: &mut AccountPDA<Warehouse>,
	owner: &AccountInfo,
	name: String,
	description: String,
) -> ProgramResult {
	warehouse.data.name = name;
	warehouse.data.description = description;
	warehouse.data.owner = *owner.key;

    Ok(())
}