#![cfg(feature = "test-sbf")]
mod close_empty_tree {
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
    use crate::generated::instructions::{ ValidateStateCompressionInstruction };
    use crate::test::create_account;

    #[test]
	fn test_transaction_is_ok() {
	    solana_logger::setup_with_default("solana_program_runtime=debug");
        let program_id = Pubkey::new_unique();

		let (test_validator, fee_payer_info) = TestValidatorGenesis::default()
			.add_program("validate_state_compression", program_id)
			.start();
		let rpc_client = test_validator.get_rpc_client();

		let data = ValidateStateCompressionInstruction::CloseEmptyTree;

		let merkle_tree_info = Keypair::new();
		let authority_info = Keypair::new();
		let recipient_info = Keypair::new();
		let csl_spl_account_compression_v_0_0_0_info = Keypair::new();
		let accounts = vec![
			AccountMeta::new(fee_payer_info.pubkey(), true),
			AccountMeta::new(merkle_tree_info.pubkey(), false),
			AccountMeta::new_readonly(authority_info.pubkey(), true),
			AccountMeta::new(recipient_info.pubkey(), false),
			AccountMeta::new_readonly(csl_spl_account_compression_v_0_0_0_info.pubkey(), false),
		];

		let signers = vec![
			&fee_payer_info,
			&authority_info,
        ];

		create_account(&rpc_client, &fee_payer_info, &merkle_tree_info, &Pubkey::from_str("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK").unwrap(), 0);
		create_account(&rpc_client, &fee_payer_info, &authority_info, &program_id, 0);
		create_account(&rpc_client, &fee_payer_info, &recipient_info, &program_id, 0);
		create_account(&rpc_client, &fee_payer_info, &csl_spl_account_compression_v_0_0_0_info, &program_id, 0);

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