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
/// - delegate: [Pubkey] 
pub fn assign_warehouse_delegate(
	program_id: &Pubkey,
	warehouse: &mut AccountPDA<Warehouse>,
	owner: &AccountInfo,
	delegate: Pubkey,
) -> ProgramResult {
	if warehouse.data.owner != *owner.key {
		return Err(ValidateInventoryError::NotExpectedAddress.into());
	}

	if warehouse.data.delegates.len() > 10usize {
		return Err(ValidateInventoryError::InvalidInstruction.into());
	}

	warehouse.data.delegates.push(delegate);

    Ok(())
}