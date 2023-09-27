// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.
#![cfg(feature = "test-sbf")]

use solana_program::native_token::sol_to_lamports;
use solana_program::pubkey::Pubkey;
use solana_program::system_instruction;
use solana_rpc_client::rpc_client::RpcClient;
use solana_sdk::signature::Keypair;
use solana_sdk::signature::Signer;
use solana_sdk::transaction::Transaction;

pub fn create_account(
    rpc_client: &RpcClient,
    payer: &Keypair,
    keypair: &Keypair,
    owner: &Pubkey,
    space: usize,
) {
    let rent_exemption_amount = rpc_client
        .get_minimum_balance_for_rent_exemption(space)
        .unwrap();
    let create_account_ix = system_instruction::create_account(
        &payer.pubkey(),
        &keypair.pubkey(),
        // We add 2 more SOL, in case
        // this account is a rent payer
        rent_exemption_amount + sol_to_lamports(2.0),
        space as u64,
        owner,
    );
    let recent_blockhash = rpc_client.get_latest_blockhash().unwrap();
    let mut transaction = Transaction::new_with_payer(&[create_account_ix], Some(&payer.pubkey()));
    transaction.sign(&[payer, keypair], recent_blockhash);
    rpc_client.send_and_confirm_transaction(&transaction).unwrap();
}

pub mod instruction_1;
pub mod instruction_5;
pub mod instruction_9;
pub mod instruction_10;
pub mod instruction_11;
pub mod instruction_12;
pub mod instruction_13;
pub mod instruction_14;
pub mod instruction_15;
pub mod instruction_16;
pub mod instruction_0;
pub mod instruction_21;
pub mod instruction_25;
pub mod instruction_29;
pub mod instruction_30;
pub mod instruction_31;
pub mod instruction_32;
pub mod instruction_33;
pub mod instruction_34;
pub mod instruction_35;
pub mod instruction_36;
pub mod instruction_41;
pub mod instruction_42;
pub mod instruction_43;
pub mod instruction_44;
pub mod instruction_45;
pub mod instruction_46;
pub mod instruction_47;
pub mod instruction_48;
pub mod instruction_55;
pub mod instruction_56;
pub mod instruction_58;
pub mod instruction_59;
pub mod instruction_60;
pub mod instruction_61;
pub mod instruction_63;
pub mod instruction_64;
