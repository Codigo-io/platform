// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use num_derive::FromPrimitive;
use solana_program::decode_error::DecodeError;
use solana_program::msg;
use solana_program::program_error::{PrintProgramError, ProgramError};
use thiserror::Error;

#[derive(Error, FromPrimitive, Debug, Clone)]
pub enum CounterError {
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

impl From<CounterError> for ProgramError {
    fn from(e: CounterError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for CounterError {
    fn type_of() -> &'static str {
        "CounterError"
    }
}

impl PrintProgramError for CounterError {
    fn print<E>(&self)
    where
        E: 'static
            + std::error::Error
            + DecodeError<E>
            + PrintProgramError
            + num_traits::FromPrimitive,
    {
        match self {
            CounterError::InvalidInstruction => msg!("Error: Invalid instruction"),
            CounterError::InvalidSignerPermission => msg!("Error: The account is_signer value is not the expected one"),
            CounterError::NotExpectedAddress => {
                msg!("Error: Not the expected account address")
            }
            CounterError::WrongAccountOwner => msg!("Error: Wrong account owner"),
            CounterError::InvalidAccountLen => msg!("Error: Invalid account length"),
            CounterError::ExecutableAccountExpected => msg!("Error: Executable account expected"),
 
        }
    }
}