// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use num_derive::FromPrimitive;
use solana_program::decode_error::DecodeError;
use solana_program::msg;
use solana_program::program_error::{PrintProgramError, ProgramError};
use thiserror::Error;

#[derive(Error, FromPrimitive, Debug, Clone)]
pub enum ExpenseSplitterError {
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

	#[error("GroupBalanceError")]
	GroupBalanceError
	#[error("InvalidMemberError")]
	InvalidMemberError
	#[error("InvalidGroupError")]
	InvalidGroupError
	#[error("BalanceMismatchError")]
	BalanceMismatchError
 
}

impl From<ExpenseSplitterError> for ProgramError {
    fn from(e: ExpenseSplitterError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for ExpenseSplitterError {
    fn type_of() -> &'static str {
        "ExpenseSplitterError"
    }
}

impl PrintProgramError for ExpenseSplitterError {
    fn print<E>(&self)
    where
        E: 'static
            + std::error::Error
            + DecodeError<E>
            + PrintProgramError
            + num_traits::FromPrimitive,
    {
        match self {
            ExpenseSplitterError::InvalidInstruction => msg!("Error: Invalid instruction"),
            ExpenseSplitterError::InvalidSignerPermission => msg!("Error: The account is_signer value is not the expected one"),
            ExpenseSplitterError::NotExpectedAddress => {
                msg!("Error: Not the expected account address")
            }
            ExpenseSplitterError::WrongAccountOwner => msg!("Error: Wrong account owner"),
            ExpenseSplitterError::InvalidAccountLen => msg!("Error: Invalid account length"),
            ExpenseSplitterError::ExecutableAccountExpected => msg!("Error: Executable account expected"),
            ExpenseSplitterError::AccountAlreadyClosed => msg!("Error: Account Already Closed"),
			ExpenseSplitterError::GroupBalanceError => msg!("Error: The sum of balances in the group must always sum to zero."),
			ExpenseSplitterError::InvalidMemberError => msg!("Error: The specified member does not exist in the group."),
			ExpenseSplitterError::InvalidGroupError => msg!("Error: The specified group does not exist."),
			ExpenseSplitterError::BalanceMismatchError => msg!("Error: The sum of initial balances does not sum to zero."),
 
        }
    }
}