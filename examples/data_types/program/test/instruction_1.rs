#![cfg(feature = "test-sbf")]
mod instruction_1 {
    use assert_matches::assert_matches;
    use solana_program::instruction::{AccountMeta, Instruction};
    use solana_program::pubkey::Pubkey;
    use solana_program::{system_instruction, system_program};
    use solana_rpc_client::rpc_client::RpcClient;
    use solana_sdk::signer::keypair::Keypair;
    use solana_sdk::signer::Signer;
    use solana_sdk::transaction::Transaction;
    use solana_validator::test_validator::*;
    use std::str::FromStr;

    use crate::generated::entrypoint::process_instruction;
    use crate::generated::instructions::{ ValidateDataTypesInstruction };
    use crate::test::create_account;

    #[test]
	fn test_transaction_is_ok() {
	    solana_logger::setup_with_default("solana_program_runtime=debug");
        let program_id = Pubkey::new_unique();

		let (test_validator, fee_payer_info) = TestValidatorGenesis::default()
			.add_program("validate_data_types", program_id)
			.start();
		let rpc_client = test_validator.get_rpc_client();

		let u_8_type: u8 = Default::default();
		let u_16_type: u16 = Default::default();
		let u_32_type: u32 = Default::default();
		let u_64_type: u64 = Default::default();
		let u_128_type: u128 = Default::default();
		let i_8_type: i8 = Default::default();
		let i_16_type: i16 = Default::default();
		let i_32_type: i32 = Default::default();
		let i_64_type: i64 = Default::default();
		let i_128_type: i128 = Default::default();
		let string_type: String = Default::default();
		let bool_type: bool = Default::default();
		let f_32_type: f32 = Default::default();
		let f_64_type: f64 = Default::default();
		let pubkey_type: Pubkey = Pubkey::new_unique();
		let u_8_type_option: Option<u8> = Default::default();
		let u_16_type_option: Option<u16> = Default::default();
		let u_32_type_option: Option<u32> = Default::default();
		let u_64_type_option: Option<u64> = Default::default();
		let u_128_type_option: Option<u128> = Default::default();
		let i_8_type_option: Option<i8> = Default::default();
		let i_16_type_option: Option<i16> = Default::default();
		let i_32_type_option: Option<i32> = Default::default();
		let i_64_type_option: Option<i64> = Default::default();
		let i_128_type_option: Option<i128> = Default::default();
		let string_type_option: Option<String> = Default::default();
		let bool_type_option: Option<bool> = Default::default();
		let f_32_type_option: Option<f32> = Default::default();
		let f_64_type_option: Option<f64> = Default::default();
		let pubkey_type_option: Option<Pubkey> = Some(Pubkey::new_unique());
		let u_8_type_vector: Vec<u8> = Default::default();
		let u_16_type_vector: Vec<u16> = Default::default();
		let u_32_type_vector: Vec<u32> = Default::default();
		let u_64_type_vector: Vec<u64> = Default::default();
		let u_128_type_vector: Vec<u128> = Default::default();
		let i_8_type_vector: Vec<i8> = Default::default();
		let i_16_type_vector: Vec<i16> = Default::default();
		let i_32_type_vector: Vec<i32> = Default::default();
		let i_64_type_vector: Vec<i64> = Default::default();
		let i_128_type_vector: Vec<i128> = Default::default();
		let bool_type_vector: Vec<bool> = Default::default();
		let f_32_type_vector: Vec<f32> = Default::default();
		let f_64_type_vector: Vec<f64> = Default::default();
		let pubkey_type_vector: Vec<Pubkey> = vec![Pubkey::new_unique()];

		let account_info = Keypair::new();
		let account_info_type_info = Keypair::new();
		let account_info_type_mut_info = Keypair::new();
		let accounts = vec![
			AccountMeta::new(fee_payer_info.pubkey(), true),
			AccountMeta::new(account_info.pubkey(), true),
			AccountMeta::new_readonly(account_info_type_info.pubkey(), false),
			AccountMeta::new(account_info_type_mut_info.pubkey(), false),
			AccountMeta::new_readonly(system_program::id(), false),
		];
		let data = ValidateDataTypesInstruction::Instruction1(crate::generated::instructions::Instruction1Args{
			u_8_type,
			u_16_type,
			u_32_type,
			u_64_type,
			u_128_type,
			i_8_type,
			i_16_type,
			i_32_type,
			i_64_type,
			i_128_type,
			string_type,
			bool_type,
			f_32_type,
			f_64_type,
			pubkey_type,
			u_8_type_option,
			u_16_type_option,
			u_32_type_option,
			u_64_type_option,
			u_128_type_option,
			i_8_type_option,
			i_16_type_option,
			i_32_type_option,
			i_64_type_option,
			i_128_type_option,
			string_type_option,
			bool_type_option,
			f_32_type_option,
			f_64_type_option,
			pubkey_type_option,
			u_8_type_vector,
			u_16_type_vector,
			u_32_type_vector,
			u_64_type_vector,
			u_128_type_vector,
			i_8_type_vector,
			i_16_type_vector,
			i_32_type_vector,
			i_64_type_vector,
			i_128_type_vector,
			bool_type_vector,
			f_32_type_vector,
			f_64_type_vector,
			pubkey_type_vector,
		});
		let signers = vec![
			&fee_payer_info,
			&account_info,
        ];

		create_account(&rpc_client, &fee_payer_info, &account_info_type_info, &program_id, 0);
		create_account(&rpc_client, &fee_payer_info, &account_info_type_mut_info, &program_id, 0);

        let instruction = Instruction::new_with_borsh(program_id, &data, accounts.to_vec());
		let recent_blockhash = rpc_client.get_latest_blockhash().unwrap();
        let mut transaction = Transaction::new_with_payer(
            &[instruction],
            Some(&fee_payer_info.pubkey()),
        );
        transaction.sign(&signers, recent_blockhash);

	    assert_matches!(rpc_client.send_and_confirm_transaction(&transaction), Ok(_));
    }
}