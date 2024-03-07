// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::ValidateInventoryError;

#[derive(BorshSerialize, Debug)]
pub enum ValidateInventoryInstruction {
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` warehouse: [Warehouse] 
/// 2. `[signer]` owner: [AccountInfo] 
/// 3. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - name: [String] 
/// - description: [String] type
	CreateWarehouse(CreateWarehouseArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` warehouse: [Warehouse] 
/// 2. `[signer]` owner: [AccountInfo] 
///
/// Data:
/// - delegate: [Pubkey] 
	AssignWarehouseDelegate(AssignWarehouseDelegateArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` warehouse: [Warehouse] 
/// 2. `[signer]` owner: [AccountInfo] 
///
/// Data:
/// - new_owner: [Pubkey] 
	TransferWarehouseOwner(TransferWarehouseOwnerArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 4. `[]` account_compression: [AccountInfo] Account Compression program it self
/// 5. `[]` csl_spl_account_compression_v0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
	InitializeMerkleTree,

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[]` warehouse: [Warehouse] 
/// 2. `[writable, signer]` mint: [Mint] 
/// 3. `[signer]` delegate: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 5. `[writable, signer]` funding: [AccountInfo] Funding account (must be a system account)
/// 6. `[writable]` assoc_token_account: [AccountInfo] Associated token account address to be created
/// 7. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 8. `[]` token_program: [AccountInfo] SPL Token program
/// 9. `[signer]` owner: [AccountInfo] The mint's minting authority.
/// 10. `[writable]` merkle_tree: [AccountInfo] The merkle tree account.
/// 11. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 12. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 13. `[]` csl_spl_token_v0_0_0: [AccountInfo] Auto-generated, CslSplTokenProgram v0.0.0
/// 14. `[]` csl_spl_assoc_token_v0_0_0: [AccountInfo] Auto-generated, CslSplAssocTokenProgram v0.0.0
/// 15. `[]` csl_spl_account_compression_v0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
///
/// Data:
/// - name: [String] 
/// - description: [String] type
/// - thumbnail: [String] 
	CreateArticle(CreateArticleArgs),

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateWarehouseArgs {
	pub name: String,
	pub description: String,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct AssignWarehouseDelegateArgs {
	pub delegate: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct TransferWarehouseOwnerArgs {
	pub new_owner: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateArticleArgs {
	pub name: String,
	pub description: String,
	pub thumbnail: String,
}

impl ValidateInventoryInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(ValidateInventoryError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::CreateWarehouse(CreateWarehouseArgs::try_from_slice(rest).unwrap()),
			1 => Self::AssignWarehouseDelegate(AssignWarehouseDelegateArgs::try_from_slice(rest).unwrap()),
			2 => Self::TransferWarehouseOwner(TransferWarehouseOwnerArgs::try_from_slice(rest).unwrap()),
			3 => Self::InitializeMerkleTree,
			4 => Self::CreateArticle(CreateArticleArgs::try_from_slice(rest).unwrap()),
			_ => return Err(ValidateInventoryError::InvalidInstruction.into())
        })
    }
}