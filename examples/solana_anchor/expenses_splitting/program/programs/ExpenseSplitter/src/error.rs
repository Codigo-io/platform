// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.
//
// Docs: https://docs.codigo.ai/c%C3%B3digo-interface-description-language/specification#errors

use anchor_lang::prelude::*;

#[error_code]
pub enum ExpenseSplitterError {
	#[msg("The sum of balances in the group must always sum to zero.")]
	GroupBalanceError,
	#[msg("The specified member does not exist in the group.")]
	InvalidMemberError,
	#[msg("The specified group does not exist.")]
	InvalidGroupError,
	#[msg("The sum of initial balances does not sum to zero.")]
	BalanceMismatchError,
}
