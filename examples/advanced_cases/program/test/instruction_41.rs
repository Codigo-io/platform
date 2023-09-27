#![cfg(feature = "test-sbf")]
mod instruction_41 {
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

		let data = ValidateAdvancedCasesInstruction::Instruction41;

		let signer_2_info = Keypair::new();
		let signer_3_info = Keypair::new();
		let signer_1_info = Keypair::new();
		let accounts = vec![
			AccountMeta::new(fee_payer_info.pubkey(), true),
			AccountMeta::new_readonly(signer_2_info.pubkey(), true),
			AccountMeta::new_readonly(signer_3_info.pubkey(), true),
			AccountMeta::new(signer_1_info.pubkey(), true),
			AccountMeta::new_readonly(system_program::id(), false),
		];

		let signers = vec![
			&fee_payer_info,
			&signer_2_info,
			&signer_3_info,
			&signer_1_info,
        ];

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