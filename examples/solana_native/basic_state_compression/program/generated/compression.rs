// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::account_info::{AccountInfo, next_account_info};
use solana_program::pubkey::Pubkey;
use solana_program::entrypoint::ProgramResult;
use csl_spl_account_compression::src::cpi::*;
use crate::generated::state::*;
use solana_program::keccak;

const ARTICLE_DISCRIMINATOR: u32 = 1;

pub fn compress_article_by_append(accounts: &[&AccountInfo], article: &Article) -> ProgramResult {
	let merkle_tree_info = accounts[0];
	let noop_info = accounts[2];
	
	let mut application_data_buffer: Vec<u8> = Vec::new();
	article.serialize(&mut application_data_buffer).unwrap();

	let leaf = keccak::hashv(&[application_data_buffer.as_ref()]);
	
	
	save_application_data(
		&[noop_info],
		ARTICLE_DISCRIMINATOR,
		leaf.as_ref().to_vec(),
		*merkle_tree_info.key,
		application_data_buffer,
	)?;

	append(accounts, leaf.as_ref().to_vec())?;

	Ok(())
}

pub fn compress_article_by_insert_or_append(accounts: &[&AccountInfo], article: &Article, root: Vec<u8>, index: u32) -> ProgramResult {
	let merkle_tree_info = accounts[0];
	let noop_info = accounts[2];
	
	let mut application_data_buffer: Vec<u8> = Vec::new();
	article.serialize(&mut application_data_buffer).unwrap();

	let leaf = keccak::hashv(&[application_data_buffer.as_ref()]);
	
	
	save_application_data(
		&[noop_info],
		ARTICLE_DISCRIMINATOR,
		leaf.as_ref().to_vec(),
		*merkle_tree_info.key,
		application_data_buffer,
	)?;

	insert_or_append(accounts, root, leaf.as_ref().to_vec(), index)?;

	Ok(())
}

pub fn compress_article_by_replace_leaf(accounts: &[&AccountInfo], article: &Article, previous_leaf: Vec<u8>, root: Vec<u8>, index: u32) -> ProgramResult {
	let merkle_tree_info = accounts[0];
	let noop_info = accounts[2];
	
	let mut application_data_buffer: Vec<u8> = Vec::new();
	article.serialize(&mut application_data_buffer).unwrap();

	let leaf = keccak::hashv(&[application_data_buffer.as_ref()]);
	
	
	save_application_data(
		&[noop_info],
		ARTICLE_DISCRIMINATOR,
		leaf.as_ref().to_vec(),
		*merkle_tree_info.key,
		application_data_buffer,
	)?;

	replace_leaf(accounts, root, previous_leaf, leaf.as_ref().to_vec(), index)?;

	Ok(())
}

