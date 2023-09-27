// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use num_derive::FromPrimitive;
use solana_program::decode_error::DecodeError;
use solana_program::msg;
use solana_program::program_error::{PrintProgramError, ProgramError};
use thiserror::Error;

#[derive(Error, FromPrimitive, Debug, Clone)]
pub enum ValidateBasicNftError {
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

impl From<ValidateBasicNftError> for ProgramError {
    fn from(e: ValidateBasicNftError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for ValidateBasicNftError {
    fn type_of() -> &'static str {
        "ValidateBasicNftError"
    }
}

impl PrintProgramError for ValidateBasicNftError {
    fn print<E>(&self)
    where
        E: 'static
            + std::error::Error
            + DecodeError<E>
            + PrintProgramError
            + num_traits::FromPrimitive,
    {
        match self {
            ValidateBasicNftError::InvalidInstruction => msg!("Error: Invalid instruction"),
            ValidateBasicNftError::InvalidSignerPermission => msg!("Error: The account is_signer value is not the expected one"),
            ValidateBasicNftError::NotExpectedAddress => {
                msg!("Error: Not the expected account address")
            }
            ValidateBasicNftError::WrongAccountOwner => msg!("Error: Wrong account owner"),
            ValidateBasicNftError::InvalidAccountLen => msg!("Error: Invalid account length"),
            ValidateBasicNftError::ExecutableAccountExpected => msg!("Error: Executable account expected"),
 
        }
    }
}