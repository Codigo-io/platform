// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use num_derive::FromPrimitive;
use solana_program::decode_error::DecodeError;
use solana_program::msg;
use solana_program::program_error::{PrintProgramError, ProgramError};
use thiserror::Error;

#[derive(Error, FromPrimitive, Debug, Clone)]
pub enum ValidateDataTypesError {
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

impl From<ValidateDataTypesError> for ProgramError {
    fn from(e: ValidateDataTypesError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for ValidateDataTypesError {
    fn type_of() -> &'static str {
        "ValidateDataTypesError"
    }
}

impl PrintProgramError for ValidateDataTypesError {
    fn print<E>(&self)
    where
        E: 'static
            + std::error::Error
            + DecodeError<E>
            + PrintProgramError
            + num_traits::FromPrimitive,
    {
        match self {
            ValidateDataTypesError::InvalidInstruction => msg!("Error: Invalid instruction"),
            ValidateDataTypesError::InvalidSignerPermission => msg!("Error: The account is_signer value is not the expected one"),
            ValidateDataTypesError::NotExpectedAddress => {
                msg!("Error: Not the expected account address")
            }
            ValidateDataTypesError::WrongAccountOwner => msg!("Error: Wrong account owner"),
            ValidateDataTypesError::InvalidAccountLen => msg!("Error: Invalid account length"),
            ValidateDataTypesError::ExecutableAccountExpected => msg!("Error: Executable account expected"),
            ValidateDataTypesError::AccountAlreadyClosed => msg!("Error: Account Already Closed"),
 
        }
    }
}