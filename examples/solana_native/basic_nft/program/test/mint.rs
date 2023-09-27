#![cfg(feature = "test-sbf")]
mod mint {
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
    use crate::generated::instructions::{ ValidateBasicNftInstruction };
    use crate::test::create_account;

    #[test]
	fn test_transaction_is_ok() {
	    solana_logger::setup_with_default("solana_program_runtime=debug");
        let program_id = Pubkey::new_unique();

		let (test_validator, fee_payer_info) = TestValidatorGenesis::default()
			.add_program("validate_basic_nft", program_id)
			.start();
		let rpc_client = test_validator.get_rpc_client();

		let color: String = Default::default();
		let rarity: String = Default::default();
		let short_description: String = Default::default();

		let mint_info = Keypair::new();
		let funding_info = Keypair::new();
		let assoc_token_account_info = Keypair::new();
		let wallet_info = Keypair::new();
		let token_program_info = Keypair::new();
		let owner_info = Keypair::new();
		let csl_spl_token_v_0_0_0_info = Keypair::new();
		let csl_spl_assoc_token_v_0_0_0_info = Keypair::new();
		let (gem_pubkey, _) = Pubkey::find_program_address(
			&[b"gem", mint_info.pubkey().as_ref()],
			&program_id,
		);
		let accounts = vec![
			AccountMeta::new(fee_payer_info.pubkey(), true),
			AccountMeta::new(mint_info.pubkey(), true),
			AccountMeta::new(gem_pubkey, false),
			AccountMeta::new_readonly(system_program::id(), false),
			AccountMeta::new(funding_info.pubkey(), true),
			AccountMeta::new(assoc_token_account_info.pubkey(), false),
			AccountMeta::new_readonly(wallet_info.pubkey(), false),
			AccountMeta::new_readonly(token_program_info.pubkey(), false),
			AccountMeta::new_readonly(owner_info.pubkey(), true),
			AccountMeta::new_readonly(csl_spl_token_v_0_0_0_info.pubkey(), false),
			AccountMeta::new_readonly(csl_spl_assoc_token_v_0_0_0_info.pubkey(), false),
		];
		let data = ValidateBasicNftInstruction::Mint(crate::generated::instructions::MintArgs{
			color,
			rarity,
			short_description,
		});
		let signers = vec![
			&fee_payer_info,
			&mint_info,
			&funding_info,
			&owner_info,
        ];

		create_account(&rpc_client, &fee_payer_info, &funding_info, &Pubkey::from_str("11111111111111111111111111111111").unwrap(), 0);
		create_account(&rpc_client, &fee_payer_info, &assoc_token_account_info, &program_id, 0);
		create_account(&rpc_client, &fee_payer_info, &wallet_info, &Pubkey::from_str("11111111111111111111111111111111").unwrap(), 0);
		create_account(&rpc_client, &fee_payer_info, &token_program_info, &program_id, 0);
		create_account(&rpc_client, &fee_payer_info, &owner_info, &program_id, 0);
		create_account(&rpc_client, &fee_payer_info, &csl_spl_token_v_0_0_0_info, &program_id, 0);
		create_account(&rpc_client, &fee_payer_info, &csl_spl_assoc_token_v_0_0_0_info, &program_id, 0);

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