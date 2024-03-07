use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::errors::ValidateInventoryError;
use crate::generated::state::{
    AccountPDA,
    Warehouse,
};

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` warehouse: [Warehouse] 
/// 2. `[signer]` owner: [AccountInfo] 
///
/// Data:
/// - new_owner: [Pubkey] 
pub fn transfer_warehouse_owner(
	program_id: &Pubkey,
	warehouse: &mut AccountPDA<Warehouse>,
	owner: &AccountInfo,
	new_owner: Pubkey,
) -> ProgramResult {
	if warehouse.data.owner != *owner.key {
		return Err(ValidateInventoryError::NotExpectedAddress.into());
	}

	warehouse.data.owner = new_owner;

    Ok(())
}