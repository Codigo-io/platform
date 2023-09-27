// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use num_derive::FromPrimitive;
use solana_program::decode_error::DecodeError;
use solana_program::msg;
use solana_program::program_error::{PrintProgramError, ProgramError};
use thiserror::Error;

#[derive(Error, FromPrimitive, Debug, Clone)]
pub enum ValidateStateCompressionError {
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

 
}

impl From<ValidateStateCompressionError> for ProgramError {
    fn from(e: ValidateStateCompressionError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for ValidateStateCompressionError {
    fn type_of() -> &'static str {
        "ValidateStateCompressionError"
    }
}

impl PrintProgramError for ValidateStateCompressionError {
    fn print<E>(&self)
    where
        E: 'static
            + std::error::Error
            + DecodeError<E>
            + PrintProgramError
            + num_traits::FromPrimitive,
    {
        match self {
            ValidateStateCompressionError::InvalidInstruction => msg!("Error: Invalid instruction"),
            ValidateStateCompressionError::InvalidSignerPermission => msg!("Error: The account is_signer value is not the expected one"),
            ValidateStateCompressionError::NotExpectedAddress => {
                msg!("Error: Not the expected account address")
            }
            ValidateStateCompressionError::WrongAccountOwner => msg!("Error: Wrong account owner"),
            ValidateStateCompressionError::InvalidAccountLen => msg!("Error: Invalid account length"),
            ValidateStateCompressionError::ExecutableAccountExpected => msg!("Error: Executable account expected"),
 
        }
    }
}