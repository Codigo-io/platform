// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use num_derive::FromPrimitive;
use solana_program::decode_error::DecodeError;
use solana_program::msg;
use solana_program::program_error::{PrintProgramError, ProgramError};
use thiserror::Error;

#[derive(Error, FromPrimitive, Debug, Clone)]
pub enum ValidateAdvancedCasesError {
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

impl From<ValidateAdvancedCasesError> for ProgramError {
    fn from(e: ValidateAdvancedCasesError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for ValidateAdvancedCasesError {
    fn type_of() -> &'static str {
        "ValidateAdvancedCasesError"
    }
}

impl PrintProgramError for ValidateAdvancedCasesError {
    fn print<E>(&self)
    where
        E: 'static
            + std::error::Error
            + DecodeError<E>
            + PrintProgramError
            + num_traits::FromPrimitive,
    {
        match self {
            ValidateAdvancedCasesError::InvalidInstruction => msg!("Error: Invalid instruction"),
            ValidateAdvancedCasesError::InvalidSignerPermission => msg!("Error: The account is_signer value is not the expected one"),
            ValidateAdvancedCasesError::NotExpectedAddress => {
                msg!("Error: Not the expected account address")
            }
            ValidateAdvancedCasesError::WrongAccountOwner => msg!("Error: Wrong account owner"),
            ValidateAdvancedCasesError::InvalidAccountLen => msg!("Error: Invalid account length"),
            ValidateAdvancedCasesError::ExecutableAccountExpected => msg!("Error: Executable account expected"),
            ValidateAdvancedCasesError::AccountAlreadyClosed => msg!("Error: Account Already Closed"),
 
        }
    }
}