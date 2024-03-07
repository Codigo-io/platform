use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	State,
};


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
pub fn instruction2(
	program_id: &Pubkey,
	account: &mut AccountPDA<State>,
	account_info_type: &AccountInfo,
	account_info_type_mut: &AccountInfo,
	u8_type: u8,
	u16_type: u16,
	u32_type: u32,
	u64_type: u64,
	u128_type: u128,
	i8_type: i8,
	i16_type: i16,
	i32_type: i32,
	i64_type: i64,
	i128_type: i128,
	string_type: String,
	bool_type: bool,
	f32_type: f32,
	f64_type: f64,
	pubkey_type: Pubkey,
	u8_type_option: Option<u8>,
	u16_type_option: Option<u16>,
	u32_type_option: Option<u32>,
	u64_type_option: Option<u64>,
	u128_type_option: Option<u128>,
	i8_type_option: Option<i8>,
	i16_type_option: Option<i16>,
	i32_type_option: Option<i32>,
	i64_type_option: Option<i64>,
	i128_type_option: Option<i128>,
	string_type_option: Option<String>,
	bool_type_option: Option<bool>,
	f32_type_option: Option<f32>,
	f64_type_option: Option<f64>,
	pubkey_type_option: Option<Pubkey>,
	u8_type_vector: Vec<u8>,
	u16_type_vector: Vec<u16>,
	u32_type_vector: Vec<u32>,
	u64_type_vector: Vec<u64>,
	u128_type_vector: Vec<u128>,
	i8_type_vector: Vec<i8>,
	i16_type_vector: Vec<i16>,
	i32_type_vector: Vec<i32>,
	i64_type_vector: Vec<i64>,
	i128_type_vector: Vec<i128>,
	bool_type_vector: Vec<bool>,
	f32_type_vector: Vec<f32>,
	f64_type_vector: Vec<f64>,
	pubkey_type_vector: Vec<Pubkey>,
) -> ProgramResult {
	account.data.u8_type = u8_type;
	account.data.u16_type = u16_type;
	account.data.u32_type = u32_type;
	account.data.u64_type = u64_type;
	account.data.u128_type = u128_type;
	account.data.i8_type = i8_type;
	account.data.i16_type = i16_type;
	account.data.i32_type = i32_type;
	account.data.i64_type = i64_type;
	account.data.i128_type = i128_type;
	account.data.string_type = string_type;
	account.data.bool_type = bool_type;
	account.data.f32_type = f32_type;
	account.data.f64_type = f64_type;
	account.data.pubkey_type = pubkey_type;
	account.data.u8_type_option = u8_type_option;
	account.data.u16_type_option = u16_type_option;
	account.data.u32_type_option = u32_type_option;
	account.data.u64_type_option = u64_type_option;
	account.data.u128_type_option = u128_type_option;
	account.data.i8_type_option = i8_type_option;
	account.data.i16_type_option = i16_type_option;
	account.data.i32_type_option = i32_type_option;
	account.data.i64_type_option = i64_type_option;
	account.data.i128_type_option = i128_type_option;
	account.data.string_type_option = string_type_option;
	account.data.bool_type_option = bool_type_option;
	account.data.f32_type_option = f32_type_option;
	account.data.f64_type_option = f64_type_option;
	account.data.pubkey_type_option = pubkey_type_option;
	account.data.u8_type_vector = u8_type_vector;
	account.data.u16_type_vector = u16_type_vector;
	account.data.u32_type_vector = u32_type_vector;
	account.data.u64_type_vector = u64_type_vector;
	account.data.u128_type_vector = u128_type_vector;
	account.data.i8_type_vector = i8_type_vector;
	account.data.i16_type_vector = i16_type_vector;
	account.data.i32_type_vector = i32_type_vector;
	account.data.i64_type_vector = i64_type_vector;
	account.data.i128_type_vector = i128_type_vector;
	account.data.bool_type_vector = bool_type_vector;
	account.data.f32_type_vector = f32_type_vector;
	account.data.f64_type_vector = f64_type_vector;
	account.data.pubkey_type_vector = pubkey_type_vector;

    Ok(())
}