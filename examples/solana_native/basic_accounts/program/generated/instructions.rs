// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::ValidateAccountsError;

#[derive(BorshSerialize, Debug)]
pub enum ValidateAccountsInstruction {
/// Test `mut` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [NonPdaaccountWithOneField] 
///
/// Data:
/// - input_1: [u8] 
	Instruction1(Instruction1Args),

/// Test `mut` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
///
/// Data:
/// - input_1: [u8] 
	Instruction2(Instruction2Args),

/// Test `mut` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	Instruction3(Instruction3Args),

/// Test `mut` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	Instruction4(Instruction4Args),

/// Test `non-mut` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [NonPdaaccountWithOneField] 
	Instruction5,

/// Test `non-mut` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [PdaaccountWithOneStaticSeedAndOneField] 
	Instruction6,

/// Test `non-mut` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	Instruction7(Instruction7Args),

/// Test `non-mut` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	Instruction8(Instruction8Args),

/// Test `init` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [NonPdaaccountWithOneField] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	Instruction9(Instruction9Args),

/// Test `init` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	Instruction10(Instruction10Args),

/// Test `init` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	Instruction11(Instruction11Args),

/// Test `init` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	Instruction12(Instruction12Args),

/// Test `init_if_needed` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [NonPdaaccountWithOneField] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	Instruction13(Instruction13Args),

/// Test `init_if_needed` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
	Instruction14(Instruction14Args),

/// Test `init_if_needed` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	Instruction15(Instruction15Args),

/// Test `init_if_needed` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - input_1: [u8] 
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	Instruction16(Instruction16Args),

/// Test `close` using Non-PDA account that has one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [NonPdaaccountWithOneField] 
	Instruction17,

/// Test `close` using PDA account that has one static seed and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountWithOneStaticSeedAndOneField] 
	Instruction18,

/// Test `close` using PDA account that has one static and dynamic seed, and one field
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountWithOneStaticAndDynamicSeedAndOneField] 
///
/// Data:
/// - account_seed_dynamic: [u8] Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
	Instruction19(Instruction19Args),

/// Test `close` using PDA account that has all the possible data types for dynamic seeds
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [PdaaccountVerifiesSeedsTypes] 
///
/// Data:
/// - account_seed_u_8_type: [u8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
/// - account_seed_u_16_type: [u16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
/// - account_seed_u_32_type: [u32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
/// - account_seed_i_8_type: [i8] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
/// - account_seed_i_16_type: [i16] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
/// - account_seed_i_32_type: [i32] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
/// - account_seed_string_type: [String] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
/// - account_seed_pubkey_type: [Pubkey] Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
	Instruction20(Instruction20Args),

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction1Args {
	pub input_1: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction2Args {
	pub input_1: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction3Args {
	pub input_1: u8,
	pub account_seed_dynamic: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction4Args {
	pub input_1: u8,
	pub account_seed_u_8_type: u8,
	pub account_seed_u_16_type: u16,
	pub account_seed_u_32_type: u32,
	pub account_seed_i_8_type: i8,
	pub account_seed_i_16_type: i16,
	pub account_seed_i_32_type: i32,
	pub account_seed_string_type: String,
	pub account_seed_pubkey_type: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction7Args {
	pub account_seed_dynamic: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction8Args {
	pub account_seed_u_8_type: u8,
	pub account_seed_u_16_type: u16,
	pub account_seed_u_32_type: u32,
	pub account_seed_i_8_type: i8,
	pub account_seed_i_16_type: i16,
	pub account_seed_i_32_type: i32,
	pub account_seed_string_type: String,
	pub account_seed_pubkey_type: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction9Args {
	pub input_1: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction10Args {
	pub input_1: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction11Args {
	pub input_1: u8,
	pub account_seed_dynamic: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction12Args {
	pub input_1: u8,
	pub account_seed_u_8_type: u8,
	pub account_seed_u_16_type: u16,
	pub account_seed_u_32_type: u32,
	pub account_seed_i_8_type: i8,
	pub account_seed_i_16_type: i16,
	pub account_seed_i_32_type: i32,
	pub account_seed_string_type: String,
	pub account_seed_pubkey_type: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction13Args {
	pub input_1: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction14Args {
	pub input_1: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction15Args {
	pub input_1: u8,
	pub account_seed_dynamic: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction16Args {
	pub input_1: u8,
	pub account_seed_u_8_type: u8,
	pub account_seed_u_16_type: u16,
	pub account_seed_u_32_type: u32,
	pub account_seed_i_8_type: i8,
	pub account_seed_i_16_type: i16,
	pub account_seed_i_32_type: i32,
	pub account_seed_string_type: String,
	pub account_seed_pubkey_type: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction19Args {
	pub account_seed_dynamic: u8,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Instruction20Args {
	pub account_seed_u_8_type: u8,
	pub account_seed_u_16_type: u16,
	pub account_seed_u_32_type: u32,
	pub account_seed_i_8_type: i8,
	pub account_seed_i_16_type: i16,
	pub account_seed_i_32_type: i32,
	pub account_seed_string_type: String,
	pub account_seed_pubkey_type: Pubkey,
}

impl ValidateAccountsInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(ValidateAccountsError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::Instruction1(Instruction1Args::try_from_slice(rest).unwrap()),
			1 => Self::Instruction2(Instruction2Args::try_from_slice(rest).unwrap()),
			2 => Self::Instruction3(Instruction3Args::try_from_slice(rest).unwrap()),
			3 => Self::Instruction4(Instruction4Args::try_from_slice(rest).unwrap()),
			4 => Self::Instruction5,
			5 => Self::Instruction6,
			6 => Self::Instruction7(Instruction7Args::try_from_slice(rest).unwrap()),
			7 => Self::Instruction8(Instruction8Args::try_from_slice(rest).unwrap()),
			8 => Self::Instruction9(Instruction9Args::try_from_slice(rest).unwrap()),
			9 => Self::Instruction10(Instruction10Args::try_from_slice(rest).unwrap()),
			10 => Self::Instruction11(Instruction11Args::try_from_slice(rest).unwrap()),
			11 => Self::Instruction12(Instruction12Args::try_from_slice(rest).unwrap()),
			12 => Self::Instruction13(Instruction13Args::try_from_slice(rest).unwrap()),
			13 => Self::Instruction14(Instruction14Args::try_from_slice(rest).unwrap()),
			14 => Self::Instruction15(Instruction15Args::try_from_slice(rest).unwrap()),
			15 => Self::Instruction16(Instruction16Args::try_from_slice(rest).unwrap()),
			16 => Self::Instruction17,
			17 => Self::Instruction18,
			18 => Self::Instruction19(Instruction19Args::try_from_slice(rest).unwrap()),
			19 => Self::Instruction20(Instruction20Args::try_from_slice(rest).unwrap()),
			_ => return Err(ValidateAccountsError::InvalidInstruction.into())
        })
    }
}