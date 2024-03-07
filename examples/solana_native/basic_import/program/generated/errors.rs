// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use num_derive::FromPrimitive;
use solana_program::decode_error::DecodeError;
use solana_program::msg;
use solana_program::program_error::{PrintProgramError, ProgramError};
use thiserror::Error;

#[derive(Error, FromPrimitive, Debug, Clone)]
pub enum ValidateImportsError {
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

impl From<ValidateImportsError> for ProgramError {
    fn from(e: ValidateImportsError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for ValidateImportsError {
    fn type_of() -> &'static str {
        "ValidateImportsError"
    }
}

impl PrintProgramError for ValidateImportsError {
    fn print<E>(&self)
    where
        E: 'static
            + std::error::Error
            + DecodeError<E>
            + PrintProgramError
            + num_traits::FromPrimitive,
    {
        match self {
            ValidateImportsError::InvalidInstruction => msg!("Error: Invalid instruction"),
            ValidateImportsError::InvalidSignerPermission => msg!("Error: The account is_signer value is not the expected one"),
            ValidateImportsError::NotExpectedAddress => {
                msg!("Error: Not the expected account address")
            }
            ValidateImportsError::WrongAccountOwner => msg!("Error: Wrong account owner"),
            ValidateImportsError::InvalidAccountLen => msg!("Error: Invalid account length"),
            ValidateImportsError::ExecutableAccountExpected => msg!("Error: Executable account expected"),
            ValidateImportsError::AccountAlreadyClosed => msg!("Error: Account Already Closed"),
 
        }
    }
}