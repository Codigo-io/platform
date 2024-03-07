// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use std::str::FromStr;

use solana_program::{declare_id, msg};
use solana_program::account_info::{AccountInfo, next_account_info};
use solana_program::entrypoint::ProgramResult;
use solana_program::instruction::{AccountMeta, Instruction};
use solana_program::program::invoke;
use solana_program::pubkey::Pubkey;

use borsh::BorshSerialize;



declare_id!("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK");


#[derive(BorshSerialize)]
pub struct AppendInstruction {
	pub discriminator: [u8; 8],
	pub leaf: [u8; 32],
}

#[derive(BorshSerialize)]
pub struct CloseEmptyTreeInstruction {
	pub discriminator: [u8; 8],
}

#[derive(BorshSerialize)]
pub struct InitEmptyMerkleTreeInstruction {
	pub discriminator: [u8; 8],
	pub max_depth: u32,
	pub max_buffer_size: u32,
}

#[derive(BorshSerialize)]
pub struct InsertOrAppendInstruction {
	pub discriminator: [u8; 8],
	pub root: [u8; 32],
	pub leaf: [u8; 32],
	pub index: u32,
}

#[derive(BorshSerialize)]
pub struct ReplaceLeafInstruction {
	pub discriminator: [u8; 8],
	pub root: [u8; 32],
	pub previous_leaf: [u8; 32],
	pub new_leaf: [u8; 32],
	pub index: u32,
}

#[derive(BorshSerialize)]
pub struct TransferAuthorityInstruction {
	pub discriminator: [u8; 8],
	pub new_authority: Pubkey,
}

#[derive(BorshSerialize)]
pub struct VerifyLeafInstruction {
	pub discriminator: [u8; 8],
	pub root: [u8; 32],
	pub leaf: [u8; 32],
	pub index: u32,
}

#[derive(BorshSerialize)]
pub struct SaveApplicationDataInstruction {
	pub discriminator: u32,
	pub merkle_tree: Pubkey,
	pub hash: [u8; 32],
	pub data: Vec<u8>,
}

/// Creates a new merkle tree with maximum leaf capacity of `power(2, max_depth)` and a minimum concurrency limit of `max_buffer_size`.
/// 
/// Concurrency limit represents the # of replace instructions that can be successfully executed with proofs dated for the same root. For example, a maximum buffer size of 1024
/// means that a minimum of 1024 replaces can be executed before a new proof must be generated for the next replace instruction.
/// 
/// Concurrency limit should be determined by empirically testing the demand for state built on top of SPL Compression.
/// 
/// For instructions on enabling the canopy, see [canopy].
///
/// Accounts:
/// 0. `[writable]` merkle_tree: [AccountInfo] The merkle tree account.
/// 1. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 2. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
/// 3. `[]` account_compression: [AccountInfo] Account Compression program it self
///
/// Data:
/// - max_depth: [u32] 
/// - max_buffer_size: [u32] 
pub fn init_empty_merkle_tree(
	accounts: &[&AccountInfo],
	max_depth: u32,
	max_buffer_size: u32,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplAccountCompression.InitEmptyMerkleTree");

	let merkle_tree_info = accounts[0];
	let authority_info = accounts[1];
	let noop_info = accounts[2];
	let account_compression_info = accounts[3];

	let mut meta_accounts: Vec<AccountMeta> = Vec::with_capacity(3);

	meta_accounts.push(AccountMeta::new(*merkle_tree_info.key, false));
	meta_accounts.push(AccountMeta::new_readonly(*authority_info.key, true));
	meta_accounts.push(AccountMeta::new_readonly(*noop_info.key, false));

	let data = InitEmptyMerkleTreeInstruction {
		discriminator: [191, 11, 119, 7, 180, 107, 220, 110],
		max_depth,
		max_buffer_size,
	};

	let mut buffer: Vec<u8> = Vec::new();
	data.serialize(&mut buffer).unwrap();

	let instruction = Instruction {
		program_id: id(),
		accounts: meta_accounts,
		data: buffer,
	};

	invoke(
		&instruction,
		&[merkle_tree_info.clone(), authority_info.clone(), noop_info.clone(), account_compression_info.clone()],
	)
}

/// Executes an instruction that overwrites a leaf node. Composing programs should check that the data hashed into previous_leaf matches the authority information necessary to execute this instruction.
///
/// Accounts:
/// 0. `[writable]` merkle_tree: [AccountInfo] The merkle tree account.
/// 1. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 2. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
///
/// Data:
/// - root: [Vec<u8>] 
/// - previous_leaf: [Vec<u8>] 
/// - new_leaf: [Vec<u8>] 
/// - index: [u32] 
pub fn replace_leaf(
	accounts: &[&AccountInfo],
	root: Vec<u8>,
	previous_leaf: Vec<u8>,
	new_leaf: Vec<u8>,
	index: u32,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplAccountCompression.ReplaceLeaf");

	let merkle_tree_info = accounts[0];
	let authority_info = accounts[1];
	let noop_info = accounts[2];

	let mut meta_accounts: Vec<AccountMeta> = Vec::new();

	meta_accounts.push(AccountMeta::new(*merkle_tree_info.key, false));
	meta_accounts.push(AccountMeta::new_readonly(*authority_info.key, true));
	meta_accounts.push(AccountMeta::new_readonly(*noop_info.key, false));

	for ra_index in 3..accounts.len() {
		meta_accounts.push(AccountMeta::new_readonly(*accounts[ra_index].key, false));
	}

	let data = ReplaceLeafInstruction {
		discriminator: [204, 165, 76, 100, 73, 147, 0, 128],
		root: root.try_into().unwrap(),
		previous_leaf: previous_leaf.try_into().unwrap(),
		new_leaf: new_leaf.try_into().unwrap(),
		index,
	};

	let mut buffer: Vec<u8> = Vec::new();
	data.serialize(&mut buffer).unwrap();

	let instruction = Instruction {
		program_id: id(),
		accounts: meta_accounts,
		data: buffer,
	};

	let mut accounts_vec:Vec<AccountInfo> = Vec::new();
	accounts_vec.push(merkle_tree_info.clone());
	accounts_vec.push(authority_info.clone());
	accounts_vec.push(noop_info.clone());
	for ra_index in 3..accounts.len() {
		accounts_vec.push(accounts[ra_index].clone());
	}

	invoke(
		&instruction,
		&accounts_vec.as_slice(),
	)
}

/// Transfers `authority`.", "Requires `authority` to sign
///
/// Accounts:
/// 0. `[writable]` merkle_tree: [AccountInfo] The merkle tree account.
/// 1. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
///
/// Data:
/// - new_authority: [Pubkey] 
pub fn transfer_authority(
	accounts: &[&AccountInfo],
	new_authority: Pubkey,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplAccountCompression.TransferAuthority");

	let merkle_tree_info = accounts[0];
	let authority_info = accounts[1];

	let mut meta_accounts: Vec<AccountMeta> = Vec::with_capacity(2);

	meta_accounts.push(AccountMeta::new(*merkle_tree_info.key, false));
	meta_accounts.push(AccountMeta::new_readonly(*authority_info.key, true));

	let data = TransferAuthorityInstruction {
		discriminator: [48, 169, 76, 72, 229, 180, 55, 161],
		new_authority,
	};

	let mut buffer: Vec<u8> = Vec::new();
	data.serialize(&mut buffer).unwrap();

	let instruction = Instruction {
		program_id: id(),
		accounts: meta_accounts,
		data: buffer,
	};

	invoke(
		&instruction,
		&[merkle_tree_info.clone(), authority_info.clone()],
	)
}

/// Verifies a provided proof and leaf. If invalid, throws an error.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` merkle_tree: [AccountInfo] The merkle tree account.
///
/// Data:
/// - root: [Vec<u8>] 
/// - leaf: [Vec<u8>] 
/// - index: [u32] 
pub fn verify_leaf(
	accounts: &[&AccountInfo],
	root: Vec<u8>,
	leaf: Vec<u8>,
	index: u32,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplAccountCompression.VerifyLeaf");

	let merkle_tree_info = accounts[0];

	let mut meta_accounts: Vec<AccountMeta> = Vec::with_capacity(1);

	meta_accounts.push(AccountMeta::new_readonly(*merkle_tree_info.key, false));

	for ra_index in 1..accounts.len() {
		meta_accounts.push(AccountMeta::new_readonly(*accounts[ra_index].key, false));
	}

	let data = VerifyLeafInstruction {
		discriminator: [124, 220, 22, 223, 104, 10, 250, 224],
		root: root.try_into().unwrap(),
		leaf: leaf.try_into().unwrap(),
		index,
	};

	let mut buffer: Vec<u8> = Vec::new();
	data.serialize(&mut buffer).unwrap();

	let instruction = Instruction {
		program_id: id(),
		accounts: meta_accounts,
		data: buffer,
	};

	let mut accounts_vec:Vec<AccountInfo> = Vec::new();
	accounts_vec.push(merkle_tree_info.clone());
	for ra_index in 1..accounts.len() {
		accounts_vec.push(accounts[ra_index].clone());
	}

	invoke(
		&instruction,
		&accounts_vec.as_slice(),
	)
}

/// This instruction allows the tree's `authority` to append a new leaf to the tree without having to supply a proof.
/// 
/// Learn more about SPL
/// ConcurrentMerkleTree
/// https://github.com/solana-labs/solana-program-library/tree/master/libraries/concurrent-merkle-tree
///
/// Accounts:
/// 0. `[writable]` merkle_tree: [AccountInfo] The merkle tree account.
/// 1. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 2. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
///
/// Data:
/// - leaf: [Vec<u8>] 
pub fn append(
	accounts: &[&AccountInfo],
	leaf: Vec<u8>,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplAccountCompression.Append");

	let merkle_tree_info = accounts[0];
	let authority_info = accounts[1];
	let noop_info = accounts[2];

	let mut meta_accounts: Vec<AccountMeta> = Vec::with_capacity(3);

	meta_accounts.push(AccountMeta::new(*merkle_tree_info.key, false));
	meta_accounts.push(AccountMeta::new_readonly(*authority_info.key, true));
	meta_accounts.push(AccountMeta::new_readonly(*noop_info.key, false));

	let data = AppendInstruction {
		discriminator: [149, 120, 18, 222, 236, 225, 88, 203],
		leaf: leaf.try_into().unwrap(),
	};

	let mut buffer: Vec<u8> = Vec::new();
	data.serialize(&mut buffer).unwrap();

	let instruction = Instruction {
		program_id: id(),
		accounts: meta_accounts,
		data: buffer,
	};

	invoke(
		&instruction,
		&[merkle_tree_info.clone(), authority_info.clone(), noop_info.clone()],
	)
}

/// This instruction takes a proof, and will attempt to write the given leaf
/// to the specified index in the tree. If the insert operation fails, the leaf will be appended to the tree.
/// It is up to the indexer to parse the final location of the leaf from the emitted changelog.
///
/// Accounts:
/// 0. `[writable]` merkle_tree: [AccountInfo] The merkle tree account.
/// 1. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 2. `[]` noop: [AccountInfo] Program used to emit changelogs as cpi instruction data.
///
/// Data:
/// - root: [Vec<u8>] 
/// - leaf: [Vec<u8>] 
/// - index: [u32] 
pub fn insert_or_append(
	accounts: &[&AccountInfo],
	root: Vec<u8>,
	leaf: Vec<u8>,
	index: u32,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplAccountCompression.InsertOrAppend");

	let merkle_tree_info = accounts[0];
	let authority_info = accounts[1];
	let noop_info = accounts[2];

	let mut meta_accounts: Vec<AccountMeta> = Vec::new();

	meta_accounts.push(AccountMeta::new(*merkle_tree_info.key, false));
	meta_accounts.push(AccountMeta::new_readonly(*authority_info.key, true));
	meta_accounts.push(AccountMeta::new_readonly(*noop_info.key, false));

	for ra_index in 3..accounts.len() {
		meta_accounts.push(AccountMeta::new_readonly(*accounts[ra_index].key, false));
	}

	let data = InsertOrAppendInstruction {
		discriminator: [6, 42, 50, 190, 51, 109, 178, 168],
		root: root.try_into().unwrap(),
		leaf: leaf.try_into().unwrap(),
		index,
	};

	let mut buffer: Vec<u8> = Vec::new();
	data.serialize(&mut buffer).unwrap();

	let instruction = Instruction {
		program_id: id(),
		accounts: meta_accounts,
		data: buffer,
	};

	let mut accounts_vec:Vec<AccountInfo> = Vec::new();
	accounts_vec.push(merkle_tree_info.clone());
	accounts_vec.push(authority_info.clone());
	accounts_vec.push(noop_info.clone());
	for ra_index in 3..accounts.len() {
		accounts_vec.push(accounts[ra_index].clone());
	}

	invoke(
		&instruction,
		&accounts_vec.as_slice(),
	)
}

/// Close the tree and give back lamports to the recipient spesified.
///
/// Accounts:
/// 0. `[writable]` merkle_tree: [AccountInfo] The merkle tree account.
/// 1. `[signer]` authority: [AccountInfo] Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
/// 2. `[writable]` recipient: [AccountInfo] The SOL recevier.
pub fn close_empty_tree(
	accounts: &[&AccountInfo],
) -> ProgramResult {
	msg!("CPI Instruction: CslSplAccountCompression.CloseEmptyTree");

	let merkle_tree_info = accounts[0];
	let authority_info = accounts[1];
	let recipient_info = accounts[2];

	let mut meta_accounts: Vec<AccountMeta> = Vec::with_capacity(3);

	meta_accounts.push(AccountMeta::new(*merkle_tree_info.key, false));
	meta_accounts.push(AccountMeta::new_readonly(*authority_info.key, true));
	meta_accounts.push(AccountMeta::new(*recipient_info.key, false));

	let data = CloseEmptyTreeInstruction {
		discriminator: [50, 14, 219, 107, 78, 103, 16, 103],
	};

	let mut buffer: Vec<u8> = Vec::new();
	data.serialize(&mut buffer).unwrap();

	let instruction = Instruction {
		program_id: id(),
		accounts: meta_accounts,
		data: buffer,
	};

	invoke(
		&instruction,
		&[merkle_tree_info.clone(), authority_info.clone(), recipient_info.clone()],
	)
}

/// Save a custom data to the chain
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` noop: [AccountInfo] Noop program
///
/// Data:
/// - discriminator: [u32] Compressed account index starting by 1
/// - hash: [Vec<u8>] 
/// - merkle_tree: [Pubkey] 
/// - data: [Vec<u8>] 
pub fn save_application_data(
	accounts: &[&AccountInfo],
	discriminator: u32,
	hash: Vec<u8>,
	merkle_tree: Pubkey,
	data: Vec<u8>,
) -> ProgramResult {
	msg!("CPI Instruction: CslSplAccountCompression.SaveApplicationData");

	let noop_info = accounts[0];

	let mut meta_accounts: Vec<AccountMeta> = Vec::with_capacity(1);

	meta_accounts.push(AccountMeta::new_readonly(*noop_info.key, false));

	let data = SaveApplicationDataInstruction {
		discriminator,
		merkle_tree,
		hash: hash.try_into().unwrap(),
		data: data.try_into().unwrap(),
	};

	let mut buffer: Vec<u8> = Vec::new();
	data.serialize(&mut buffer).unwrap();

	let instruction = Instruction {
		program_id: *noop_info.key,
		accounts: meta_accounts,
		data: buffer,
	};

	invoke(
		&instruction,
		&[noop_info.clone()],
	)
}