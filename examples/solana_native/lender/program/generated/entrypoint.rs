// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use crate::generated::errors::InformalLenderError;
use crate::generated::processor::Processor;
use solana_program::program_error::PrintProgramError;
use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    data: &[u8],
) -> ProgramResult {
    if let Err(error) = Processor::process(program_id, accounts, data) {
        // catch the error so we can print it
        error.print::<InformalLenderError>();
        return Err(error);
    }
    Ok(())
}