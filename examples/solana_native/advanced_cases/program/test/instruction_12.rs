#![cfg(feature = "test-sbf")]
mod instruction_12 {
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
    use crate::generated::instructions::{ ValidateAdvancedCasesInstruction };
    use crate::test::create_account;

    #[test]
	fn test_transaction_is_ok() {
	    solana_logger::setup_with_default("solana_program_runtime=debug");
        let program_id = Pubkey::new_unique();

		let (test_validator, fee_payer_info) = TestValidatorGenesis::default()
			.add_program("validate_advanced_cases", program_id)
			.start();
		let rpc_client = test_validator.get_rpc_client();

		let input_1: u8 = Default::default();
		let account_seed_u_8_type: u8 = Default::default();
		let account_seed_u_16_type: u16 = Default::default();
		let account_seed_u_32_type: u32 = Default::default();
		let account_seed_i_8_type: i8 = Default::default();
		let account_seed_i_16_type: i16 = Default::default();
		let account_seed_i_32_type: i32 = Default::default();
		let account_seed_string_type: String = Default::default();
		let account_seed_pubkey_type: Pubkey = Pubkey::new_unique();

		let signer_1_info = Keypair::new();
		let signer_2_info = Keypair::new();
		let signer_3_info = Keypair::new();
		let (account_pubkey, _) = Pubkey::find_program_address(
			&[account_seed_u_8_type.to_le_bytes().as_ref(), account_seed_u_16_type.to_le_bytes().as_ref(), account_seed_u_32_type.to_le_bytes().as_ref(), account_seed_i_8_type.to_le_bytes().as_ref(), account_seed_i_16_type.to_le_bytes().as_ref(), account_seed_i_32_type.to_le_bytes().as_ref(), account_seed_string_type.as_bytes().as_ref(), account_seed_pubkey_type.as_ref()],
			&program_id,
		);
		let accounts = vec![
			AccountMeta::new(fee_payer_info.pubkey(), true),
			AccountMeta::new_readonly(signer_1_info.pubkey(), true),
			AccountMeta::new_readonly(signer_2_info.pubkey(), true),
			AccountMeta::new_readonly(signer_3_info.pubkey(), true),
			AccountMeta::new(account_pubkey, false),
			AccountMeta::new_readonly(system_program::id(), false),
		];
		let data = ValidateAdvancedCasesInstruction::Instruction12(crate::generated::instructions::Instruction12Args{
			input_1,
			account_seed_u_8_type,
			account_seed_u_16_type,
			account_seed_u_32_type,
			account_seed_i_8_type,
			account_seed_i_16_type,
			account_seed_i_32_type,
			account_seed_string_type,
			account_seed_pubkey_type,
		});
		let signers = vec![
			&fee_payer_info,
			&signer_1_info,
			&signer_2_info,
			&signer_3_info,
        ];

		create_account(&rpc_client, &fee_payer_info, &signer_1_info, &Pubkey::from_str("11111111111111111111111111111111").unwrap(), 0);
		create_account(&rpc_client, &fee_payer_info, &signer_2_info, &Pubkey::from_str("11111111111111111111111111111111").unwrap(), 0);
		create_account(&rpc_client, &fee_payer_info, &signer_3_info, &Pubkey::from_str("11111111111111111111111111111111").unwrap(), 0);

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