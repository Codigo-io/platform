// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use std::str::FromStr;
use borsh::BorshSerialize;
use solana_program::account_info::{AccountInfo, next_account_info, next_account_infos};
use solana_program::borsh0_10::try_from_slice_unchecked;
use solana_program::entrypoint::ProgramResult;
use solana_program::program::{invoke, invoke_signed};
use solana_program::pubkey::Pubkey;
use solana_program::rent::Rent;
use solana_program::system_instruction::create_account;
use solana_program::{msg, system_program};
use solana_program::sysvar::Sysvar;
use solana_program::program_pack::Pack;
use crate::generated::errors::ValidateStateCompressionError;
use crate::generated::instructions::ValidateStateCompressionInstruction;

use crate::generated::state::{
	Account,
	AccountPDA,
	Article,
};
use crate::src::*;

pub struct Processor;

impl Processor {
    pub fn process(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        data: &[u8],
    ) -> ProgramResult {
        let instruction = ValidateStateCompressionInstruction::unpack(data)?;

        match instruction {
			ValidateStateCompressionInstruction::InitializeMerkleTree => {
				msg!("Instruction: InitializeMerkleTree");
				Self::process_initialize_merkle_tree(program_id, accounts)
			}
			ValidateStateCompressionInstruction::AppendArticle(args) => {
				msg!("Instruction: AppendArticle");
				Self::process_append_article(
					program_id,
					accounts, 
					args.name,
					args.description,
					args.thumbnail,
				)
			}
			ValidateStateCompressionInstruction::InsertOrAppendArticle(args) => {
				msg!("Instruction: InsertOrAppendArticle");
				Self::process_insert_or_append_article(
					program_id,
					accounts, 
					args.root,
					args.index,
					args.name,
					args.description,
					args.thumbnail,
				)
			}
			ValidateStateCompressionInstruction::ReplaceLeafArticle(args) => {
				msg!("Instruction: ReplaceLeafArticle");
				Self::process_replace_leaf_article(
					program_id,
					accounts, 
					args.previous_leaf,
					args.root,
					args.index,
					args.name,
					args.description,
					args.thumbnail,
				)
			}
			ValidateStateCompressionInstruction::VerifyLeafArticle(args) => {
				msg!("Instruction: VerifyLeafArticle");
				Self::process_verify_leaf_article(
					program_id,
					accounts, 
					args.leaf,
					args.root,
					args.index,
				)
			}
			ValidateStateCompressionInstruction::TransferAuthority(args) => {
				msg!("Instruction: TransferAuthority");
				Self::process_transfer_authority(
					program_id,
					accounts, 
					args.new_authority,
				)
			}
			ValidateStateCompressionInstruction::CloseEmptyTree => {
				msg!("Instruction: CloseEmptyTree");
				Self::process_close_empty_tree(program_id, accounts)
			}
        }
    }

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 4. `[]` account_compression: [AccountInfo] Account Compression program it self
/// 5. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
	pub fn process_initialize_merkle_tree(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let merkle_tree_info = next_account_info(account_info_iter)?;
		let authority_info = next_account_info(account_info_iter)?;
		let noop_info = next_account_info(account_info_iter)?;
		let account_compression_info = next_account_info(account_info_iter)?;
		let csl_spl_account_compression_v_0_0_0_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if authority_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if *noop_info.key != Pubkey::from_str("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}

		if *account_compression_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}

		if *csl_spl_account_compression_v_0_0_0_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if *merkle_tree_info.owner != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if merkle_tree_info.data_len() != 35832usize {
			return Err(ValidateStateCompressionError::InvalidAccountLen.into());
		}



		// Calling STUB
		initialize_merkle_tree::initialize_merkle_tree(
			program_id,
			&vec![
				merkle_tree_info,
				authority_info,
				noop_info,
				account_compression_info,
			],
			merkle_tree_info,
			authority_info,
			noop_info,
			account_compression_info,
		)?;
		
		Ok(())
	}

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
	pub fn process_append_article(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		name: String,
		description: String,
		thumbnail: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let merkle_tree_info = next_account_info(account_info_iter)?;
		let authority_info = next_account_info(account_info_iter)?;
		let noop_info = next_account_info(account_info_iter)?;
		let csl_spl_account_compression_v_0_0_0_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if authority_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if *noop_info.key != Pubkey::from_str("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}

		if *csl_spl_account_compression_v_0_0_0_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if *merkle_tree_info.owner != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}



		// Calling STUB
		append_article::append_article(
			program_id,
			&vec![
				merkle_tree_info,
				authority_info,
				noop_info,
			],
			merkle_tree_info,
			authority_info,
			noop_info,
			name,
			description,
			thumbnail,
		)?;


		
		Ok(())
	}

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
	pub fn process_insert_or_append_article(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		root: Vec<u8>,
		index: u32,
		name: String,
		description: String,
		thumbnail: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let merkle_tree_info = next_account_info(account_info_iter)?;
		let authority_info = next_account_info(account_info_iter)?;
		let noop_info = next_account_info(account_info_iter)?;
		let csl_spl_account_compression_v_0_0_0_info = next_account_info(account_info_iter)?;

		let remaining_accounts = next_account_infos(account_info_iter, 8)?;
		

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if authority_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if *noop_info.key != Pubkey::from_str("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}

		if *csl_spl_account_compression_v_0_0_0_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if *merkle_tree_info.owner != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if merkle_tree_info.data_len() != 35832usize {
			return Err(ValidateStateCompressionError::InvalidAccountLen.into());
		}



		// Calling STUB

		let mut account_vec = vec![
				merkle_tree_info,
				authority_info,
				noop_info,
		];

		for remaining_account in remaining_accounts {
			account_vec.push(&remaining_account);
		}

		insert_or_append_article::insert_or_append_article(
			program_id,
			&account_vec,
			merkle_tree_info,
			authority_info,
			noop_info,
			root,
			index,
			name,
			description,
			thumbnail,
		)?;


		
		Ok(())
	}

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
	pub fn process_replace_leaf_article(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		previous_leaf: Vec<u8>,
		root: Vec<u8>,
		index: u32,
		name: String,
		description: String,
		thumbnail: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let merkle_tree_info = next_account_info(account_info_iter)?;
		let authority_info = next_account_info(account_info_iter)?;
		let noop_info = next_account_info(account_info_iter)?;
		let csl_spl_account_compression_v_0_0_0_info = next_account_info(account_info_iter)?;

		let remaining_accounts = next_account_infos(account_info_iter, 8)?;
		

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if authority_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if *noop_info.key != Pubkey::from_str("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}

		if *csl_spl_account_compression_v_0_0_0_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if *merkle_tree_info.owner != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if merkle_tree_info.data_len() != 35832usize {
			return Err(ValidateStateCompressionError::InvalidAccountLen.into());
		}



		// Calling STUB

		let mut account_vec = vec![
				merkle_tree_info,
				authority_info,
				noop_info,
		];

		for remaining_account in remaining_accounts {
			account_vec.push(&remaining_account);
		}

		replace_leaf_article::replace_leaf_article(
			program_id,
			&account_vec,
			merkle_tree_info,
			authority_info,
			noop_info,
			previous_leaf,
			root,
			index,
			name,
			description,
			thumbnail,
		)?;


		
		Ok(())
	}

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
	pub fn process_verify_leaf_article(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		leaf: Vec<u8>,
		root: Vec<u8>,
		index: u32,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let merkle_tree_info = next_account_info(account_info_iter)?;
		let noop_info = next_account_info(account_info_iter)?;
		let csl_spl_account_compression_v_0_0_0_info = next_account_info(account_info_iter)?;

		let remaining_accounts = next_account_infos(account_info_iter, 8)?;
		

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if *noop_info.key != Pubkey::from_str("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}

		if *csl_spl_account_compression_v_0_0_0_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if *merkle_tree_info.owner != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if merkle_tree_info.data_len() != 35832usize {
			return Err(ValidateStateCompressionError::InvalidAccountLen.into());
		}



		// Calling STUB

		let mut account_vec = vec![
				merkle_tree_info,
		];

		for remaining_account in remaining_accounts {
			account_vec.push(&remaining_account);
		}

		verify_leaf_article::verify_leaf_article(
			program_id,
			&account_vec,
			merkle_tree_info,
			noop_info,
			leaf,
			root,
			index,
		)?;


		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
///
/// Data:
/// - new_authority: [Pubkey] 
	pub fn process_transfer_authority(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		new_authority: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let merkle_tree_info = next_account_info(account_info_iter)?;
		let authority_info = next_account_info(account_info_iter)?;
		let csl_spl_account_compression_v_0_0_0_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if authority_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if *csl_spl_account_compression_v_0_0_0_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if *merkle_tree_info.owner != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}



		// Calling STUB
		transfer_authority::transfer_authority(
			program_id,
			&vec![
				merkle_tree_info,
				authority_info,
			],
			merkle_tree_info,
			authority_info,
			new_authority,
		)?;


		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[writable]` recipient: [AccountInfo] The SOL recevier.
/// 4. `[]` csl_spl_account_compression_v_0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
	pub fn process_close_empty_tree(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let merkle_tree_info = next_account_info(account_info_iter)?;
		let authority_info = next_account_info(account_info_iter)?;
		let recipient_info = next_account_info(account_info_iter)?;
		let csl_spl_account_compression_v_0_0_0_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if authority_info.is_signer != true {
			return Err(ValidateStateCompressionError::InvalidSignerPermission.into());
		}

		if *csl_spl_account_compression_v_0_0_0_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}

		if *merkle_tree_info.owner != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateStateCompressionError::WrongAccountOwner.into());
		}



		// Calling STUB
		close_empty_tree::close_empty_tree(
			program_id,
			&vec![
				merkle_tree_info,
				authority_info,
				recipient_info,
			],
			merkle_tree_info,
			authority_info,
			recipient_info,
		)?;
		
		Ok(())
	}
}