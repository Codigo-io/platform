// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use anchor_lang::prelude::*;
pub mod state;
pub use state::*;

declare_id!("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY");

#[program]
pub mod validate_data_types {
    use super::*;

/// Test MasterTypeNonPDA types
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [State] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - u128_type: [u128] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - i128_type: [i128] 
/// - string_type: [String] 
/// - bool_type: [bool] 
/// - f32_type: [f32] 
/// - f64_type: [f64] 
/// - pubkey_type: [Pubkey] 
/// - u8_type_option: [Option<u8>] 
/// - u16_type_option: [Option<u16>] 
/// - u32_type_option: [Option<u32>] 
/// - u64_type_option: [Option<u64>] 
/// - u128_type_option: [Option<u128>] 
/// - i8_type_option: [Option<i8>] 
/// - i16_type_option: [Option<i16>] 
/// - i32_type_option: [Option<i32>] 
/// - i64_type_option: [Option<i64>] 
/// - i128_type_option: [Option<i128>] 
/// - string_type_option: [Option<String>] 
/// - bool_type_option: [Option<bool>] 
/// - f32_type_option: [Option<f32>] 
/// - f64_type_option: [Option<f64>] 
/// - pubkey_type_option: [Option<Pubkey>] 
/// - u8_type_vector: [Vec<u8>] 
/// - u16_type_vector: [Vec<u16>] 
/// - u32_type_vector: [Vec<u32>] 
/// - u64_type_vector: [Vec<u64>] 
/// - u128_type_vector: [Vec<u128>] 
/// - i8_type_vector: [Vec<i8>] 
/// - i16_type_vector: [Vec<i16>] 
/// - i32_type_vector: [Vec<i32>] 
/// - i64_type_vector: [Vec<i64>] 
/// - i128_type_vector: [Vec<i128>] 
/// - bool_type_vector: [Vec<bool>] 
/// - f32_type_vector: [Vec<f32>] 
/// - f64_type_vector: [Vec<f64>] 
/// - pubkey_type_vector: [Vec<Pubkey>] 
	pub fn instruction1(ctx: Context<Instruction1>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, u128_type: u128, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, i128_type: i128, string_type: String, bool_type: bool, f32_type: f32, f64_type: f64, pubkey_type: Pubkey, u8_type_option: Option<u8>, u16_type_option: Option<u16>, u32_type_option: Option<u32>, u64_type_option: Option<u64>, u128_type_option: Option<u128>, i8_type_option: Option<i8>, i16_type_option: Option<i16>, i32_type_option: Option<i32>, i64_type_option: Option<i64>, i128_type_option: Option<i128>, string_type_option: Option<String>, bool_type_option: Option<bool>, f32_type_option: Option<f32>, f64_type_option: Option<f64>, pubkey_type_option: Option<Pubkey>, u8_type_vector: Vec<u8>, u16_type_vector: Vec<u16>, u32_type_vector: Vec<u32>, u64_type_vector: Vec<u64>, u128_type_vector: Vec<u128>, i8_type_vector: Vec<i8>, i16_type_vector: Vec<i16>, i32_type_vector: Vec<i32>, i64_type_vector: Vec<i64>, i128_type_vector: Vec<i128>, bool_type_vector: Vec<bool>, f32_type_vector: Vec<f32>, f64_type_vector: Vec<f64>, pubkey_type_vector: Vec<Pubkey>) -> Result<()> {
		Ok(())
	}

/// Test MasterTypePDA types
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` account: [State] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u8_type: [u8] 
/// - u16_type: [u16] 
/// - u32_type: [u32] 
/// - u64_type: [u64] 
/// - u128_type: [u128] 
/// - i8_type: [i8] 
/// - i16_type: [i16] 
/// - i32_type: [i32] 
/// - i64_type: [i64] 
/// - i128_type: [i128] 
/// - string_type: [String] 
/// - bool_type: [bool] 
/// - f32_type: [f32] 
/// - f64_type: [f64] 
/// - pubkey_type: [Pubkey] 
/// - u8_type_option: [Option<u8>] 
/// - u16_type_option: [Option<u16>] 
/// - u32_type_option: [Option<u32>] 
/// - u64_type_option: [Option<u64>] 
/// - u128_type_option: [Option<u128>] 
/// - i8_type_option: [Option<i8>] 
/// - i16_type_option: [Option<i16>] 
/// - i32_type_option: [Option<i32>] 
/// - i64_type_option: [Option<i64>] 
/// - i128_type_option: [Option<i128>] 
/// - string_type_option: [Option<String>] 
/// - bool_type_option: [Option<bool>] 
/// - f32_type_option: [Option<f32>] 
/// - f64_type_option: [Option<f64>] 
/// - pubkey_type_option: [Option<Pubkey>] 
/// - u8_type_vector: [Vec<u8>] 
/// - u16_type_vector: [Vec<u16>] 
/// - u32_type_vector: [Vec<u32>] 
/// - u64_type_vector: [Vec<u64>] 
/// - u128_type_vector: [Vec<u128>] 
/// - i8_type_vector: [Vec<i8>] 
/// - i16_type_vector: [Vec<i16>] 
/// - i32_type_vector: [Vec<i32>] 
/// - i64_type_vector: [Vec<i64>] 
/// - i128_type_vector: [Vec<i128>] 
/// - bool_type_vector: [Vec<bool>] 
/// - f32_type_vector: [Vec<f32>] 
/// - f64_type_vector: [Vec<f64>] 
/// - pubkey_type_vector: [Vec<Pubkey>] 
	pub fn instruction2(ctx: Context<Instruction2>, u8_type: u8, u16_type: u16, u32_type: u32, u64_type: u64, u128_type: u128, i8_type: i8, i16_type: i16, i32_type: i32, i64_type: i64, i128_type: i128, string_type: String, bool_type: bool, f32_type: f32, f64_type: f64, pubkey_type: Pubkey, u8_type_option: Option<u8>, u16_type_option: Option<u16>, u32_type_option: Option<u32>, u64_type_option: Option<u64>, u128_type_option: Option<u128>, i8_type_option: Option<i8>, i16_type_option: Option<i16>, i32_type_option: Option<i32>, i64_type_option: Option<i64>, i128_type_option: Option<i128>, string_type_option: Option<String>, bool_type_option: Option<bool>, f32_type_option: Option<f32>, f64_type_option: Option<f64>, pubkey_type_option: Option<Pubkey>, u8_type_vector: Vec<u8>, u16_type_vector: Vec<u16>, u32_type_vector: Vec<u32>, u64_type_vector: Vec<u64>, u128_type_vector: Vec<u128>, i8_type_vector: Vec<i8>, i16_type_vector: Vec<i16>, i32_type_vector: Vec<i32>, i64_type_vector: Vec<i64>, i128_type_vector: Vec<i128>, bool_type_vector: Vec<bool>, f32_type_vector: Vec<f32>, f64_type_vector: Vec<f64>, pubkey_type_vector: Vec<Pubkey>) -> Result<()> {
		Ok(())
	}


	#[derive(Accounts)]
	pub struct Instruction1<'info> {
		#[account(mut)]
		pub fee_payer: Signer<'info>,

		#[account(mut, signer)]
		pub account: Account<'info, State>,

		/// CHECK: implement manual checks if needed
		pub account_info_type: UncheckedAccount<'info>,

		#[account(mut)]
		/// CHECK: implement manual checks if needed
		pub account_info_type_mut: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,
	}

	#[derive(Accounts)]
	pub struct Instruction2<'info> {
		#[account(mut)]
		pub fee_payer: Signer<'info>,

		#[account(mut)]
		pub account: Account<'info, State>,

		/// CHECK: implement manual checks if needed
		pub account_info_type: UncheckedAccount<'info>,

		#[account(mut)]
		/// CHECK: implement manual checks if needed
		pub account_info_type_mut: UncheckedAccount<'info>,

		pub system_program: Program<'info, System>,
	}
}
