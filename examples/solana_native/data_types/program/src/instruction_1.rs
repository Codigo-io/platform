use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
	MasterTypesNonPda,
};

/// Test MasterTypeNonPDA types
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [MasterTypesNonPda] 
/// 2. `[]` account_info_type: [AccountInfo] 
/// 3. `[writable]` account_info_type_mut: [AccountInfo] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - u_8_type: [u8] 
/// - u_16_type: [u16] 
/// - u_32_type: [u32] 
/// - u_64_type: [u64] 
/// - u_128_type: [u128] 
/// - i_8_type: [i8] 
/// - i_16_type: [i16] 
/// - i_32_type: [i32] 
/// - i_64_type: [i64] 
/// - i_128_type: [i128] 
/// - string_type: [String] 
/// - bool_type: [bool] 
/// - f_32_type: [f32] 
/// - f_64_type: [f64] 
/// - pubkey_type: [Pubkey] 
/// - u_8_type_option: [Option<u8>] 
/// - u_16_type_option: [Option<u16>] 
/// - u_32_type_option: [Option<u32>] 
/// - u_64_type_option: [Option<u64>] 
/// - u_128_type_option: [Option<u128>] 
/// - i_8_type_option: [Option<i8>] 
/// - i_16_type_option: [Option<i16>] 
/// - i_32_type_option: [Option<i32>] 
/// - i_64_type_option: [Option<i64>] 
/// - i_128_type_option: [Option<i128>] 
/// - string_type_option: [Option<String>] 
/// - bool_type_option: [Option<bool>] 
/// - f_32_type_option: [Option<f32>] 
/// - f_64_type_option: [Option<f64>] 
/// - pubkey_type_option: [Option<Pubkey>] 
/// - u_8_type_vector: [Vec<u8>] 
/// - u_16_type_vector: [Vec<u16>] 
/// - u_32_type_vector: [Vec<u32>] 
/// - u_64_type_vector: [Vec<u64>] 
/// - u_128_type_vector: [Vec<u128>] 
/// - i_8_type_vector: [Vec<i8>] 
/// - i_16_type_vector: [Vec<i16>] 
/// - i_32_type_vector: [Vec<i32>] 
/// - i_64_type_vector: [Vec<i64>] 
/// - i_128_type_vector: [Vec<i128>] 
/// - bool_type_vector: [Vec<bool>] 
/// - f_32_type_vector: [Vec<f32>] 
/// - f_64_type_vector: [Vec<f64>] 
/// - pubkey_type_vector: [Vec<Pubkey>] 
pub fn instruction_1(
	program_id: &Pubkey,
	account: &mut Account<MasterTypesNonPda>,
	account_info_type: &AccountInfo,
	account_info_type_mut: &AccountInfo,
	u_8_type: u8,
	u_16_type: u16,
	u_32_type: u32,
	u_64_type: u64,
	u_128_type: u128,
	i_8_type: i8,
	i_16_type: i16,
	i_32_type: i32,
	i_64_type: i64,
	i_128_type: i128,
	string_type: String,
	bool_type: bool,
	f_32_type: f32,
	f_64_type: f64,
	pubkey_type: Pubkey,
	u_8_type_option: Option<u8>,
	u_16_type_option: Option<u16>,
	u_32_type_option: Option<u32>,
	u_64_type_option: Option<u64>,
	u_128_type_option: Option<u128>,
	i_8_type_option: Option<i8>,
	i_16_type_option: Option<i16>,
	i_32_type_option: Option<i32>,
	i_64_type_option: Option<i64>,
	i_128_type_option: Option<i128>,
	string_type_option: Option<String>,
	bool_type_option: Option<bool>,
	f_32_type_option: Option<f32>,
	f_64_type_option: Option<f64>,
	pubkey_type_option: Option<Pubkey>,
	u_8_type_vector: Vec<u8>,
	u_16_type_vector: Vec<u16>,
	u_32_type_vector: Vec<u32>,
	u_64_type_vector: Vec<u64>,
	u_128_type_vector: Vec<u128>,
	i_8_type_vector: Vec<i8>,
	i_16_type_vector: Vec<i16>,
	i_32_type_vector: Vec<i32>,
	i_64_type_vector: Vec<i64>,
	i_128_type_vector: Vec<i128>,
	bool_type_vector: Vec<bool>,
	f_32_type_vector: Vec<f32>,
	f_64_type_vector: Vec<f64>,
	pubkey_type_vector: Vec<Pubkey>,
) -> ProgramResult {
	account.data.u_8_type = u_8_type;
	account.data.u_16_type = u_16_type;
	account.data.u_32_type = u_32_type;
	account.data.u_64_type = u_64_type;
	account.data.u_128_type = u_128_type;
	account.data.i_8_type = i_8_type;
	account.data.i_16_type = i_16_type;
	account.data.i_32_type = i_32_type;
	account.data.i_64_type = i_64_type;
	account.data.i_128_type = i_128_type;
	account.data.string_type = string_type;
	account.data.bool_type = bool_type;
	account.data.f_32_type = f_32_type;
	account.data.f_64_type = f_64_type;
	account.data.pubkey_type = pubkey_type;
	account.data.u_8_type_option = u_8_type_option;
	account.data.u_16_type_option = u_16_type_option;
	account.data.u_32_type_option = u_32_type_option;
	account.data.u_64_type_option = u_64_type_option;
	account.data.u_128_type_option = u_128_type_option;
	account.data.i_8_type_option = i_8_type_option;
	account.data.i_16_type_option = i_16_type_option;
	account.data.i_32_type_option = i_32_type_option;
	account.data.i_64_type_option = i_64_type_option;
	account.data.i_128_type_option = i_128_type_option;
	account.data.string_type_option = string_type_option;
	account.data.bool_type_option = bool_type_option;
	account.data.f_32_type_option = f_32_type_option;
	account.data.f_64_type_option = f_64_type_option;
	account.data.pubkey_type_option = pubkey_type_option;
	account.data.u_8_type_vector = u_8_type_vector;
	account.data.u_16_type_vector = u_16_type_vector;
	account.data.u_32_type_vector = u_32_type_vector;
	account.data.u_64_type_vector = u_64_type_vector;
	account.data.u_128_type_vector = u_128_type_vector;
	account.data.i_8_type_vector = i_8_type_vector;
	account.data.i_16_type_vector = i_16_type_vector;
	account.data.i_32_type_vector = i_32_type_vector;
	account.data.i_64_type_vector = i_64_type_vector;
	account.data.i_128_type_vector = i_128_type_vector;
	account.data.bool_type_vector = bool_type_vector;
	account.data.f_32_type_vector = f_32_type_vector;
	account.data.f_64_type_vector = f_64_type_vector;
	account.data.pubkey_type_vector = pubkey_type_vector;

    Ok(())
}