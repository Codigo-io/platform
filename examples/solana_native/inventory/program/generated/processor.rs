// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use std::str::FromStr;
use std::ops::DerefMut;
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::borsh0_10::try_from_slice_unchecked;
use solana_program::account_info::{AccountInfo, next_account_info, next_account_infos};
use solana_program::entrypoint::ProgramResult;
use solana_program::program::{invoke, invoke_signed};
use solana_program::pubkey::Pubkey;
use solana_program::rent::Rent;
use solana_program::system_instruction::create_account;
use solana_program::{msg, system_program};
use solana_program::sysvar::Sysvar;
use solana_program::program_pack::Pack;
use crate::generated::errors::ValidateInventoryError;
use crate::generated::instructions::ValidateInventoryInstruction;

use crate::generated::state::{
	Account,
	AccountPDA,
	Warehouse,
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
        let instruction = ValidateInventoryInstruction::unpack(data)?;

        match instruction {
			ValidateInventoryInstruction::CreateWarehouse(args) => {
				msg!("Instruction: CreateWarehouse");
				Self::process_create_warehouse(
					program_id,
					accounts, 
					args.name,
					args.description,
				)
			}
			ValidateInventoryInstruction::AssignWarehouseDelegate(args) => {
				msg!("Instruction: AssignWarehouseDelegate");
				Self::process_assign_warehouse_delegate(
					program_id,
					accounts, 
					args.delegate,
				)
			}
			ValidateInventoryInstruction::TransferWarehouseOwner(args) => {
				msg!("Instruction: TransferWarehouseOwner");
				Self::process_transfer_warehouse_owner(
					program_id,
					accounts, 
					args.new_owner,
				)
			}
			ValidateInventoryInstruction::InitializeMerkleTree => {
				msg!("Instruction: InitializeMerkleTree");
				Self::process_initialize_merkle_tree(program_id, accounts)
			}
			ValidateInventoryInstruction::CreateArticle(args) => {
				msg!("Instruction: CreateArticle");
				Self::process_create_article(
					program_id,
					accounts, 
					args.name,
					args.description,
					args.thumbnail,
				)
			}
        }
    }

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` warehouse: [Warehouse] 
/// 2. `[signer]` owner: [AccountInfo] 
/// 3. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - name: [String] 
/// - description: [String] type
	pub fn process_create_warehouse(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		name: String,
		description: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let warehouse_info = next_account_info(account_info_iter)?;
		let owner_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (warehouse_pubkey, warehouse_bump) = Pubkey::find_program_address(
			&[owner_info.key.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if *warehouse_info.key != warehouse_pubkey {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if owner_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 715;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&warehouse_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), warehouse_info.clone()],
			&[&[owner_info.key.as_ref(), &[warehouse_bump]]],
		)?;


		// Security Checks
		if *warehouse_info.owner != *program_id {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if *owner_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if warehouse_info.data_len() != 715usize {
			return Err(ValidateInventoryError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let warehouse = &mut AccountPDA::new(
			&warehouse_info,
			try_from_slice_unchecked::<Warehouse>(&warehouse_info.data.borrow()).unwrap(),
			warehouse_bump,
		);

		// Calling STUB
		create_warehouse::create_warehouse(
			program_id,
			warehouse,
			owner_info,
			name,
			description,
		)?;

		// Accounts Serialization
		warehouse.data.serialize(&mut &mut warehouse_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` warehouse: [Warehouse] 
/// 2. `[signer]` owner: [AccountInfo] 
///
/// Data:
/// - delegate: [Pubkey] 
	pub fn process_assign_warehouse_delegate(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		delegate: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let warehouse_info = next_account_info(account_info_iter)?;
		let owner_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (warehouse_pubkey, warehouse_bump) = Pubkey::find_program_address(
			&[owner_info.key.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if *warehouse_info.key != warehouse_pubkey {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if owner_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *warehouse_info.owner != *program_id {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if *owner_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if warehouse_info.data_len() != 715usize {
			return Err(ValidateInventoryError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let warehouse = &mut AccountPDA::new(
			&warehouse_info,
			try_from_slice_unchecked::<Warehouse>(&warehouse_info.data.borrow()).unwrap(),
			warehouse_bump,
		);

		// Calling STUB
		assign_warehouse_delegate::assign_warehouse_delegate(
			program_id,
			warehouse,
			owner_info,
			delegate,
		)?;

		// Accounts Serialization
		warehouse.data.serialize(&mut &mut warehouse_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] 
/// 1. `[writable]` warehouse: [Warehouse] 
/// 2. `[signer]` owner: [AccountInfo] 
///
/// Data:
/// - new_owner: [Pubkey] 
	pub fn process_transfer_warehouse_owner(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		new_owner: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let warehouse_info = next_account_info(account_info_iter)?;
		let owner_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (warehouse_pubkey, warehouse_bump) = Pubkey::find_program_address(
			&[owner_info.key.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if *warehouse_info.key != warehouse_pubkey {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if owner_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}



		// Security Checks
		if *warehouse_info.owner != *program_id {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if *owner_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if warehouse_info.data_len() != 715usize {
			return Err(ValidateInventoryError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let warehouse = &mut AccountPDA::new(
			&warehouse_info,
			try_from_slice_unchecked::<Warehouse>(&warehouse_info.data.borrow()).unwrap(),
			warehouse_bump,
		);

		// Calling STUB
		transfer_warehouse_owner::transfer_warehouse_owner(
			program_id,
			warehouse,
			owner_info,
			new_owner,
		)?;

		// Accounts Serialization
		warehouse.data.serialize(&mut &mut warehouse_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` merkle_tree: [AccountInfo] 
/// 2. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 3. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 4. `[]` account_compression: [AccountInfo] Account Compression program it self
/// 5. `[]` csl_spl_account_compression_v0_0_0: [AccountInfo] Auto-generated, CslSplAccountCompressionProgram v0.0.0
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
		let csl_spl_account_compression_v0_0_0_info = next_account_info(account_info_iter)?;


		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if merkle_tree_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if authority_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if *noop_info.key != Pubkey::from_str("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV").unwrap() {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if *account_compression_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if *csl_spl_account_compression_v0_0_0_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}



		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if *merkle_tree_info.owner != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if merkle_tree_info.data_len() != 2610168usize {
			return Err(ValidateInventoryError::InvalidAccountLen.into());
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
	pub fn process_create_article(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		name: String,
		description: String,
		thumbnail: String,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let warehouse_info = next_account_info(account_info_iter)?;
		let mint_info = next_account_info(account_info_iter)?;
		let delegate_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;
		let funding_info = next_account_info(account_info_iter)?;
		let assoc_token_account_info = next_account_info(account_info_iter)?;
		let wallet_info = next_account_info(account_info_iter)?;
		let token_program_info = next_account_info(account_info_iter)?;
		let owner_info = next_account_info(account_info_iter)?;
		let merkle_tree_info = next_account_info(account_info_iter)?;
		let authority_info = next_account_info(account_info_iter)?;
		let noop_info = next_account_info(account_info_iter)?;
		let csl_spl_token_v0_0_0_info = next_account_info(account_info_iter)?;
		let csl_spl_assoc_token_v0_0_0_info = next_account_info(account_info_iter)?;
		let csl_spl_account_compression_v0_0_0_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (warehouse_pubkey, warehouse_bump) = Pubkey::find_program_address(
			&[owner_info.key.as_ref()],
			program_id,
		);
		let (assoc_token_account_pubkey, assoc_token_account_bump) = Pubkey::find_program_address(
			&[wallet_info.key.as_ref(), token_program_info.key.as_ref(), mint_info.key.as_ref()],
			&Pubkey::from_str("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL").unwrap(),
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if *warehouse_info.key != warehouse_pubkey {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if mint_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if delegate_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if funding_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if *assoc_token_account_info.key != assoc_token_account_pubkey {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if *token_program_info.key != Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap() {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if owner_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if authority_info.is_signer != true {
			return Err(ValidateInventoryError::InvalidSignerPermission.into());
		}

		if *noop_info.key != Pubkey::from_str("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV").unwrap() {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if *csl_spl_token_v0_0_0_info.key != Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap() {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if *csl_spl_assoc_token_v0_0_0_info.key != Pubkey::from_str("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL").unwrap() {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}

		if *csl_spl_account_compression_v0_0_0_info.key != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateInventoryError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space: usize = 82;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke(
			&create_account(
				&fee_payer_info.key,
				&mint_info.key,
				rent_minimum_balance,
				space as u64,
				&Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap(),
			),
			&[fee_payer_info.clone(), mint_info.clone()],
		)?;


		// Security Checks
		if *warehouse_info.owner != *program_id {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if *mint_info.owner != Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap() {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if *delegate_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if *funding_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if *wallet_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if *merkle_tree_info.owner != Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap() {
			return Err(ValidateInventoryError::WrongAccountOwner.into());
		}

		if warehouse_info.data_len() != 715usize {
			return Err(ValidateInventoryError::InvalidAccountLen.into());
		}

		if mint_info.data_len() != 82usize {
			return Err(ValidateInventoryError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let warehouse = AccountPDA::new(
			&warehouse_info,
			try_from_slice_unchecked::<Warehouse>(&warehouse_info.data.borrow()).unwrap(),
			warehouse_bump,
		);
		let mint = Account::new(
			&mint_info,
			spl_token::state::Mint::unpack_from_slice(&mint_info.data.borrow()).unwrap(),
		);

		// Calling STUB
		create_article::create_article(
			program_id,
			&vec![
				mint_info,
			],
			&vec![
				funding_info,
				assoc_token_account_info,
				wallet_info,
				mint_info,
				system_program_info,
				token_program_info,
			],
			&vec![
				mint_info,
				assoc_token_account_info,
				owner_info,
				wallet_info,
				token_program_info,
			],
			&vec![
				mint_info,
				owner_info,
			],
			&vec![
				merkle_tree_info,
				authority_info,
				noop_info,
			],
			&warehouse,
			&mint,
			delegate_info,
			funding_info,
			assoc_token_account_info,
			wallet_info,
			owner_info,
			merkle_tree_info,
			authority_info,
			noop_info,
			name,
			description,
			thumbnail,
		)?;


		
		Ok(())
	}
}