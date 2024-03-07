// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::ValidateBigAccountError;

#[derive(BorshSerialize, Debug)]
pub enum ValidateBigAccountInstruction {
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [Account10Kb] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - account_seed_index: [u32] Auto-generated, from the input "account" for the its seed definition "Array", sets the seed named "index"
	InitPdaOnContract(InitPdaOnContractArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [Account10Kb] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	InitOnContract,

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
	InitOnClient,

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
	InitOnClientWithCustomOwner,

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [AccountInfo] 
	InitAccountInfoOnClient,

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [AccountInfo] 
	InitAccountInfoOnClientWithCustomOwner,

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
	InitAccountInfoOnContract,

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [Account10Mib] 
/// 2. `[signer]` account_info: [AccountInfo] 
	InitTwoBigAccountOnClient,

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct InitPdaOnContractArgs {
	pub account_seed_index: u32,
}

impl ValidateBigAccountInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(ValidateBigAccountError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::InitPdaOnContract(InitPdaOnContractArgs::try_from_slice(rest).unwrap()),
			1 => Self::InitOnContract,
			2 => Self::InitOnClient,
			3 => Self::InitOnClientWithCustomOwner,
			4 => Self::InitAccountInfoOnClient,
			5 => Self::InitAccountInfoOnClientWithCustomOwner,
			6 => Self::InitAccountInfoOnContract,
			7 => Self::InitTwoBigAccountOnClient,
			_ => return Err(ValidateBigAccountError::InvalidInstruction.into())
        })
    }
}