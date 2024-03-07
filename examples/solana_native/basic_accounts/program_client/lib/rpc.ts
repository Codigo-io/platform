// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import * as pda from "./pda";
import * as T from "./types";
import {
    Commitment,
    Connection,
    GetAccountInfoConfig,
    Keypair,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction,
    TransactionInstruction,
    TransactionSignature,
} from "@solana/web3.js";
import {deserialize, serialize} from "borsh";


let _programId: PublicKey;
let _connection: Connection;

export const initializeClient = (
    programId: PublicKey,
    connection: Connection
) => {
    _programId = programId;
    _connection = connection;
};

export enum ValidateAccountsInstruction {
/**
 * Test `mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction1 = 0,

/**
 * Test `mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction2 = 1,

/**
 * Test `mut` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction3 = 2,

/**
 * Test `mut` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction4 = 3,

/**
 * Test `non-mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
    Instruction5 = 4,

/**
 * Test `non-mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
    Instruction6 = 5,

/**
 * Test `non-mut` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction7 = 6,

/**
 * Test `non-mut` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction8 = 7,

/**
 * Test `init` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction9 = 8,

/**
 * Test `init` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction10 = 9,

/**
 * Test `init` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction11 = 10,

/**
 * Test `init` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction12 = 11,

/**
 * Test `init_if_needed` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction13 = 12,

/**
 * Test `init_if_needed` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction14 = 13,

/**
 * Test `init_if_needed` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction15 = 14,

/**
 * Test `init_if_needed` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction16 = 15,

/**
 * Test `close_uncheck` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
    Instruction17 = 16,

/**
 * Test `close` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 */
    SafeInstruction17 = 17,

/**
 * Test `close` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
    Instruction18 = 18,

/**
 * Test `close` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction19 = 19,

/**
 * Test `close` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction20 = 20,
}

export type Instruction1Args = {
	feePayer: PublicKey;
	account: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction1 = (args: Instruction1Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction1,
						input_1: args.input1,
        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction1SendAndConfirm = async (
	args: Omit<Instruction1Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction1({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction2Args = {
	feePayer: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction2 = (args: Instruction2Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction2,
						input_1: args.input1,
        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction2SendAndConfirm = async (
	args: Omit<Instruction2Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction2({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction3Args = {
	feePayer: PublicKey;
	input1: number;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `mut` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3 = (args: Instruction3Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction3,
						input_1: args.input1,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `mut` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3SendAndConfirm = async (
	args: Omit<Instruction3Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction3({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction4Args = {
	feePayer: PublicKey;
	input1: number;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `mut` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction4 = (args: Instruction4Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction4,
						input_1: args.input1,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `mut` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction4SendAndConfirm = async (
	args: Omit<Instruction4Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction4({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction5Args = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `non-mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
export const instruction5 = (args: Instruction5Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAccountsInstruction.Instruction5,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `non-mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
export const instruction5SendAndConfirm = async (
	args: Omit<Instruction5Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction5({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction6Args = {
	feePayer: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `non-mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
export const instruction6 = (args: Instruction6Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAccountsInstruction.Instruction6,

        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `non-mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
export const instruction6SendAndConfirm = async (
	args: Omit<Instruction6Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction6({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction7Args = {
	feePayer: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `non-mut` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction7 = (args: Instruction7Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction7,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `non-mut` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction7SendAndConfirm = async (
	args: Omit<Instruction7Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction7({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction8Args = {
	feePayer: PublicKey;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `non-mut` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction8 = (args: Instruction8Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction8,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `non-mut` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction8SendAndConfirm = async (
	args: Omit<Instruction8Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction8({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction9Args = {
	feePayer: PublicKey;
	account: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction9 = (args: Instruction9Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction9,
						input_1: args.input1,
        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction9SendAndConfirm = async (
	args: Omit<Instruction9Args, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction9({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export type Instruction10Args = {
	feePayer: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction10 = (args: Instruction10Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction10,
						input_1: args.input1,
        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction10SendAndConfirm = async (
	args: Omit<Instruction10Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction10({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction11Args = {
	feePayer: PublicKey;
	input1: number;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11 = (args: Instruction11Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction11,
						input_1: args.input1,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11SendAndConfirm = async (
	args: Omit<Instruction11Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction11({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction12Args = {
	feePayer: PublicKey;
	input1: number;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction12 = (args: Instruction12Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction12,
						input_1: args.input1,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction12SendAndConfirm = async (
	args: Omit<Instruction12Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction12({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction13Args = {
	feePayer: PublicKey;
	account: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init_if_needed` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction13 = (args: Instruction13Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction13,
						input_1: args.input1,
        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init_if_needed` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction13SendAndConfirm = async (
	args: Omit<Instruction13Args, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction13({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export type Instruction14Args = {
	feePayer: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init_if_needed` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction14 = (args: Instruction14Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction14,
						input_1: args.input1,
        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init_if_needed` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction14SendAndConfirm = async (
	args: Omit<Instruction14Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction14({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction15Args = {
	feePayer: PublicKey;
	input1: number;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init_if_needed` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15 = (args: Instruction15Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction15,
						input_1: args.input1,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init_if_needed` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15SendAndConfirm = async (
	args: Omit<Instruction15Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction15({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction16Args = {
	feePayer: PublicKey;
	input1: number;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init_if_needed` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction16 = (args: Instruction16Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction16,
						input_1: args.input1,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init_if_needed` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction16SendAndConfirm = async (
	args: Omit<Instruction16Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction16({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction17Args = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close_uncheck` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
export const instruction17 = (args: Instruction17Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAccountsInstruction.Instruction17,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close_uncheck` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
export const instruction17SendAndConfirm = async (
	args: Omit<Instruction17Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction17({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type SafeInstruction17Args = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction17 = (args: SafeInstruction17Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAccountsInstruction.SafeInstruction17,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction17SendAndConfirm = async (
	args: Omit<SafeInstruction17Args, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(safeInstruction17({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export type Instruction18Args = {
	feePayer: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
export const instruction18 = (args: Instruction18Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAccountsInstruction.Instruction18,

        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
export const instruction18SendAndConfirm = async (
	args: Omit<Instruction18Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction18({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction19Args = {
	feePayer: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction19 = (args: Instruction19Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction19,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction19SendAndConfirm = async (
	args: Omit<Instruction19Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction19({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction20Args = {
	feePayer: PublicKey;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction20 = (args: Instruction20Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAccountsInstruction.Instruction20,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close` using PDA account that has all the possible data types for dynamic seeds
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction20SendAndConfirm = async (
	args: Omit<Instruction20Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction20({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

// Getters

export const getState = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.State | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeState(deserialize(T.StateSchema, buffer.data) as Record<string, unknown>);
}


// Websocket Events

