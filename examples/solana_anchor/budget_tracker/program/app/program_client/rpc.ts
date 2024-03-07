// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {
  AnchorProvider,
  BN,
  IdlAccounts,
  Program,
  web3,
} from "@coral-xyz/anchor";
import { MethodsBuilder } from "@coral-xyz/anchor/dist/cjs/program/namespace/methods";
import { ValidateBudgetTracker } from "../../target/types/validate_budget_tracker";
import idl from "../../target/idl/validate_budget_tracker.json";
import * as pda from "./pda";



let _program: Program<ValidateBudgetTracker>;


export const initializeClient = (
    programId: web3.PublicKey,
    anchorProvider = AnchorProvider.env(),
) => {
    _program = new Program<ValidateBudgetTracker>(
        idl as never,
        programId,
        anchorProvider,
    );


};

export type CreateUserRecordArgs = {
  feePayer: web3.PublicKey;
  userName: string;
  userRecordSeedIndex: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * To call once per account. Initialize a Record account. The total_balance of the account will be set to 0.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - user_name: {@link string} The username to be assigned to the Record.name property
 * - user_record_seed_index: {@link number} Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
 */
export const createUserRecordBuilder = (
	args: CreateUserRecordArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBudgetTracker, never> => {
    const [userRecordPubkey] = pda.deriveRecordCollectionPDA({
        signer: args.feePayer,
        index: args.userRecordSeedIndex,
    }, _program.programId);

  return _program
    .methods
    .createUserRecord(
      args.userName,
      args.userRecordSeedIndex,
    )
    .accounts({
      feePayer: args.feePayer,
      userRecord: userRecordPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * To call once per account. Initialize a Record account. The total_balance of the account will be set to 0.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - user_name: {@link string} The username to be assigned to the Record.name property
 * - user_record_seed_index: {@link number} Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
 */
export const createUserRecord = (
	args: CreateUserRecordArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    createUserRecordBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * To call once per account. Initialize a Record account. The total_balance of the account will be set to 0.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - user_name: {@link string} The username to be assigned to the Record.name property
 * - user_record_seed_index: {@link number} Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
 */
export const createUserRecordSendAndConfirm = async (
  args: Omit<CreateUserRecordArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return createUserRecordBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type RegisterIncomeArgs = {
  feePayer: web3.PublicKey;
  amount: number;
  userRecordSeedIndex: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Register the given amount as an income for the given record account. The total total_balance of the account will be increased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 *
 * Data:
 * - amount: {@link number} The amount to be registered as the income.
 * - user_record_seed_index: {@link number} Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
 */
export const registerIncomeBuilder = (
	args: RegisterIncomeArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBudgetTracker, never> => {
    const [userRecordPubkey] = pda.deriveRecordCollectionPDA({
        signer: args.feePayer,
        index: args.userRecordSeedIndex,
    }, _program.programId);

  return _program
    .methods
    .registerIncome(
      args.amount,
      args.userRecordSeedIndex,
    )
    .accounts({
      feePayer: args.feePayer,
      userRecord: userRecordPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Register the given amount as an income for the given record account. The total total_balance of the account will be increased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 *
 * Data:
 * - amount: {@link number} The amount to be registered as the income.
 * - user_record_seed_index: {@link number} Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
 */
export const registerIncome = (
	args: RegisterIncomeArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    registerIncomeBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Register the given amount as an income for the given record account. The total total_balance of the account will be increased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 *
 * Data:
 * - amount: {@link number} The amount to be registered as the income.
 * - user_record_seed_index: {@link number} Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
 */
export const registerIncomeSendAndConfirm = async (
  args: Omit<RegisterIncomeArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return registerIncomeBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type RegisterOutcomeArgs = {
  feePayer: web3.PublicKey;
  amount: number;
  userRecordSeedIndex: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Register the given amount as an outcome for the given record account. The total total_balance of the account will be decreased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} The user record account
 *
 * Data:
 * - amount: {@link number} Number to be added to the outcome accumulator
 * - user_record_seed_index: {@link number} Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
 */
export const registerOutcomeBuilder = (
	args: RegisterOutcomeArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBudgetTracker, never> => {
    const [userRecordPubkey] = pda.deriveRecordCollectionPDA({
        signer: args.feePayer,
        index: args.userRecordSeedIndex,
    }, _program.programId);

  return _program
    .methods
    .registerOutcome(
      args.amount,
      args.userRecordSeedIndex,
    )
    .accounts({
      feePayer: args.feePayer,
      userRecord: userRecordPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Register the given amount as an outcome for the given record account. The total total_balance of the account will be decreased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} The user record account
 *
 * Data:
 * - amount: {@link number} Number to be added to the outcome accumulator
 * - user_record_seed_index: {@link number} Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
 */
export const registerOutcome = (
	args: RegisterOutcomeArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    registerOutcomeBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Register the given amount as an outcome for the given record account. The total total_balance of the account will be decreased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} The user record account
 *
 * Data:
 * - amount: {@link number} Number to be added to the outcome accumulator
 * - user_record_seed_index: {@link number} Auto-generated, from the input "user_record" for the its seed definition "RecordCollection", sets the seed named "index"
 */
export const registerOutcomeSendAndConfirm = async (
  args: Omit<RegisterOutcomeArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return registerOutcomeBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

// Getters

export const getRecord = (
    publicKey: web3.PublicKey,
    commitment?: web3.Commitment
): Promise<IdlAccounts<ValidateBudgetTracker>["record"]> => _program.account.record.fetch(publicKey, commitment);
