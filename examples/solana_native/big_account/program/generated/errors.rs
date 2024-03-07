// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use num_derive::FromPrimitive;
use solana_program::decode_error::DecodeError;
use solana_program::msg;
use solana_program::program_error::{PrintProgramError, ProgramError};
use thiserror::Error;

#[derive(Error, FromPrimitive, Debug, Clone)]
pub enum ValidateBigAccountError {
    #[error("Invalid Instruction")]
    InvalidInstruction,

    #[error("Invalid Signer Permission")]
    InvalidSignerPermission,

    #[error("Not The Expected Account Address")]
    NotExpectedAddress,

    #[error("Wrong Account Owner")]
    WrongAccountOwner,

    #[error("Invalid Account Len")]
    InvalidAccountLen,

    #[error("Executable Account Expected")]
    ExecutableAccountExpected,

	#[error("Account Already Closed")]
	AccountAlreadyClosed,

 
}

impl From<ValidateBigAccountError> for ProgramError {
    fn from(e: ValidateBigAccountError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for ValidateBigAccountError {
    fn type_of() -> &'static str {
        "ValidateBigAccountError"
    }
}

impl PrintProgramError for ValidateBigAccountError {
    fn print<E>(&self)
    where
        E: 'static
            + std::error::Error
            + DecodeError<E>
            + PrintProgramError
            + num_traits::FromPrimitive,
    {
        match self {
            ValidateBigAccountError::InvalidInstruction => msg!("Error: Invalid instruction"),
            ValidateBigAccountError::InvalidSignerPermission => msg!("Error: The account is_signer value is not the expected one"),
            ValidateBigAccountError::NotExpectedAddress => {
                msg!("Error: Not the expected account address")
            }
            ValidateBigAccountError::WrongAccountOwner => msg!("Error: Wrong account owner"),
            ValidateBigAccountError::InvalidAccountLen => msg!("Error: Invalid account length"),
            ValidateBigAccountError::ExecutableAccountExpected => msg!("Error: Executable account expected"),
            ValidateBigAccountError::AccountAlreadyClosed => msg!("Error: Account Already Closed"),
 
        }
    }
}