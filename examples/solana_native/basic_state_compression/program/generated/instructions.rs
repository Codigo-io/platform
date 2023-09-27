// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::ValidateStateCompressionError;

#[derive(BorshSerialize, Debug)]
pub enum ValidateStateCompressionInstruction {
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 4. `[]` account_compression: [AccountInfo] Account Compression program it self
/// 5. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
	InitializeMerkleTree,

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 4. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
///
/// Data:
/// - name: [String] 
/// - description: [String] type
/// - thumbnail: [String] 
	AppendArticle(AppendArticleArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 4. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
///
/// Data:
/// - root: [Vec<u8>] 
/// - index: [u32] 
/// - name: [String] 
/// - description: [String] type
/// - thumbnail: [String] 
	InsertOrAppendArticle(InsertOrAppendArticleArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 4. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
///
/// Data:
/// - previous_leaf: [Vec<u8>] 
/// - root: [Vec<u8>] 
/// - index: [u32] 
/// - name: [String] 
/// - description: [String] type
/// - thumbnail: [String] 
	ReplaceLeafArticle(ReplaceLeafArticleArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` merkle_tree: [AccountInfo] 
/// 2. `[]` noop: [AccountInfo] Noop program
/// 3. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
///
/// Data:
/// - leaf: [Vec<u8>] 
/// - root: [Vec<u8>] 
/// - index: [u32] 
	VerifyLeafArticle(VerifyLeafArticleArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
///
/// Data:
/// - new_authority: [Pubkey] 
	TransferAuthority(TransferAuthorityArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[writable]` recipient: [AccountInfo] The SOL recevier.
/// 4. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
	CloseEmptyTree,

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct AppendArticleArgs {
	pub name: String,
	pub description: String,
	pub thumbnail: String,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct InsertOrAppendArticleArgs {
	pub root: Vec<u8>,
	pub index: u32,
	pub name: String,
	pub description: String,
	pub thumbnail: String,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct ReplaceLeafArticleArgs {
	pub previous_leaf: Vec<u8>,
	pub root: Vec<u8>,
	pub index: u32,
	pub name: String,
	pub description: String,
	pub thumbnail: String,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct VerifyLeafArticleArgs {
	pub leaf: Vec<u8>,
	pub root: Vec<u8>,
	pub index: u32,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct TransferAuthorityArgs {
	pub new_authority: Pubkey,
}

impl ValidateStateCompressionInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(ValidateStateCompressionError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::InitializeMerkleTree,
			1 => Self::AppendArticle(AppendArticleArgs::try_from_slice(rest).unwrap()),
			2 => Self::InsertOrAppendArticle(InsertOrAppendArticleArgs::try_from_slice(rest).unwrap()),
			3 => Self::ReplaceLeafArticle(ReplaceLeafArticleArgs::try_from_slice(rest).unwrap()),
			4 => Self::VerifyLeafArticle(VerifyLeafArticleArgs::try_from_slice(rest).unwrap()),
			5 => Self::TransferAuthority(TransferAuthorityArgs::try_from_slice(rest).unwrap()),
			6 => Self::CloseEmptyTree,
			_ => return Err(ValidateStateCompressionError::InvalidInstruction.into())
        })
    }
}