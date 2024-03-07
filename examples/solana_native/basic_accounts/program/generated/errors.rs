// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use num_derive::FromPrimitive;
use solana_program::decode_error::DecodeError;
use solana_program::msg;
use solana_program::program_error::{PrintProgramError, ProgramError};
use thiserror::Error;

#[derive(Error, FromPrimitive, Debug, Clone)]
pub enum ValidateAccountsError {
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

impl From<ValidateAccountsError> for ProgramError {
    fn from(e: ValidateAccountsError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for ValidateAccountsError {
    fn type_of() -> &'static str {
        "ValidateAccountsError"
    }
}

impl PrintProgramError for ValidateAccountsError {
    fn print<E>(&self)
    where
        E: 'static
            + std::error::Error
            + DecodeError<E>
            + PrintProgramError
            + num_traits::FromPrimitive,
    {
        match self {
            ValidateAccountsError::InvalidInstruction => msg!("Error: Invalid instruction"),
            ValidateAccountsError::InvalidSignerPermission => msg!("Error: The account is_signer value is not the expected one"),
            ValidateAccountsError::NotExpectedAddress => {
                msg!("Error: Not the expected account address")
            }
            ValidateAccountsError::WrongAccountOwner => msg!("Error: Wrong account owner"),
            ValidateAccountsError::InvalidAccountLen => msg!("Error: Invalid account length"),
            ValidateAccountsError::ExecutableAccountExpected => msg!("Error: Executable account expected"),
            ValidateAccountsError::AccountAlreadyClosed => msg!("Error: Account Already Closed"),
 
        }
    }
}