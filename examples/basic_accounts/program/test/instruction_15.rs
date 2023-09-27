#![cfg(feature = "test-sbf")]
mod instruction_15 {
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
    use crate::generated::instructions::{ ValidateAccountsInstruction };
    use crate::test::create_account;

    #[test]
	fn test_transaction_is_ok() {
	    solana_logger::setup_with_default("solana_program_runtime=debug");
        let program_id = Pubkey::new_unique();

		let (test_validator, fee_payer_info) = TestValidatorGenesis::default()
			.add_program("validate_accounts", program_id)
			.start();
		let rpc_client = test_validator.get_rpc_client();

		let input_1: u8 = Default::default();
		let account_seed_dynamic: u8 = Default::default();

		let (account_pubkey, _) = Pubkey::find_program_address(
			&[b"Static Value", account_seed_dynamic.to_le_bytes().as_ref()],
			&program_id,
		);
		let accounts = vec![
			AccountMeta::new(fee_payer_info.pubkey(), true),
			AccountMeta::new(account_pubkey, false),
			AccountMeta::new_readonly(system_program::id(), false),
		];
		let data = ValidateAccountsInstruction::Instruction15(crate::generated::instructions::Instruction15Args{
			input_1,
			account_seed_dynamic,
		});
		let signers = vec![
			&fee_payer_info,
        ];


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