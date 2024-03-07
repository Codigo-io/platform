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

export enum ValidateDataTypesInstruction {
/**
 * Test MasterTypeNonPDA types
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - u128_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - i128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f32_type: {@link number} 
 * - f64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u8_type_option: {@link number | undefined} 
 * - u16_type_option: {@link number | undefined} 
 * - u32_type_option: {@link number | undefined} 
 * - u64_type_option: {@link BigInt | undefined} 
 * - u128_type_option: {@link BigInt | undefined} 
 * - i8_type_option: {@link number | undefined} 
 * - i16_type_option: {@link number | undefined} 
 * - i32_type_option: {@link number | undefined} 
 * - i64_type_option: {@link BigInt | undefined} 
 * - i128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f32_type_option: {@link number | undefined} 
 * - f64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u8_type_vector: {@link number[]} 
 * - u16_type_vector: {@link number[]} 
 * - u32_type_vector: {@link number[]} 
 * - u64_type_vector: {@link BigInt[]} 
 * - u128_type_vector: {@link BigInt[]} 
 * - i8_type_vector: {@link number[]} 
 * - i16_type_vector: {@link number[]} 
 * - i32_type_vector: {@link number[]} 
 * - i64_type_vector: {@link BigInt[]} 
 * - i128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f32_type_vector: {@link number[]} 
 * - f64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
 */
    Instruction1 = 0,

/**
 * Test MasterTypePDA types
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - u128_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - i128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f32_type: {@link number} 
 * - f64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u8_type_option: {@link number | undefined} 
 * - u16_type_option: {@link number | undefined} 
 * - u32_type_option: {@link number | undefined} 
 * - u64_type_option: {@link BigInt | undefined} 
 * - u128_type_option: {@link BigInt | undefined} 
 * - i8_type_option: {@link number | undefined} 
 * - i16_type_option: {@link number | undefined} 
 * - i32_type_option: {@link number | undefined} 
 * - i64_type_option: {@link BigInt | undefined} 
 * - i128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f32_type_option: {@link number | undefined} 
 * - f64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u8_type_vector: {@link number[]} 
 * - u16_type_vector: {@link number[]} 
 * - u32_type_vector: {@link number[]} 
 * - u64_type_vector: {@link BigInt[]} 
 * - u128_type_vector: {@link BigInt[]} 
 * - i8_type_vector: {@link number[]} 
 * - i16_type_vector: {@link number[]} 
 * - i32_type_vector: {@link number[]} 
 * - i64_type_vector: {@link BigInt[]} 
 * - i128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f32_type_vector: {@link number[]} 
 * - f64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
 */
    Instruction2 = 1,
}

export type Instruction1Args = {
	feePayer: PublicKey;
	account: PublicKey;
	accountInfoType: PublicKey;
	accountInfoTypeMut: PublicKey;
	u8Type: number;
	u16Type: number;
	u32Type: number;
	u64Type: bigint;
	u128Type: bigint;
	i8Type: number;
	i16Type: number;
	i32Type: number;
	i64Type: bigint;
	i128Type: bigint;
	stringType: string;
	boolType: boolean;
	f32Type: number;
	f64Type: number;
	pubkeyType: PublicKey;
	u8TypeOption: number | undefined;
	u16TypeOption: number | undefined;
	u32TypeOption: number | undefined;
	u64TypeOption: bigint | undefined;
	u128TypeOption: bigint | undefined;
	i8TypeOption: number | undefined;
	i16TypeOption: number | undefined;
	i32TypeOption: number | undefined;
	i64TypeOption: bigint | undefined;
	i128TypeOption: bigint | undefined;
	stringTypeOption: string | undefined;
	boolTypeOption: boolean | undefined;
	f32TypeOption: number | undefined;
	f64TypeOption: number | undefined;
	pubkeyTypeOption: PublicKey | undefined;
	u8TypeVector: number[];
	u16TypeVector: number[];
	u32TypeVector: number[];
	u64TypeVector: bigint[];
	u128TypeVector: bigint[];
	i8TypeVector: number[];
	i16TypeVector: number[];
	i32TypeVector: number[];
	i64TypeVector: bigint[];
	i128TypeVector: bigint[];
	boolTypeVector: boolean[];
	f32TypeVector: number[];
	f64TypeVector: number[];
	pubkeyTypeVector: PublicKey[];
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test MasterTypeNonPDA types
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - u128_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - i128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f32_type: {@link number} 
 * - f64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u8_type_option: {@link number | undefined} 
 * - u16_type_option: {@link number | undefined} 
 * - u32_type_option: {@link number | undefined} 
 * - u64_type_option: {@link BigInt | undefined} 
 * - u128_type_option: {@link BigInt | undefined} 
 * - i8_type_option: {@link number | undefined} 
 * - i16_type_option: {@link number | undefined} 
 * - i32_type_option: {@link number | undefined} 
 * - i64_type_option: {@link BigInt | undefined} 
 * - i128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f32_type_option: {@link number | undefined} 
 * - f64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u8_type_vector: {@link number[]} 
 * - u16_type_vector: {@link number[]} 
 * - u32_type_vector: {@link number[]} 
 * - u64_type_vector: {@link BigInt[]} 
 * - u128_type_vector: {@link BigInt[]} 
 * - i8_type_vector: {@link number[]} 
 * - i16_type_vector: {@link number[]} 
 * - i32_type_vector: {@link number[]} 
 * - i64_type_vector: {@link BigInt[]} 
 * - i128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f32_type_vector: {@link number[]} 
 * - f64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
 */
export const instruction1 = (args: Instruction1Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								u8_type: "u8",
								u16_type: "u16",
								u32_type: "u32",
								u64_type: "u64",
								u128_type: "u128",
								i8_type: "i8",
								i16_type: "i16",
								i32_type: "i32",
								i64_type: "i64",
								i128_type: "i128",
								string_type: "string",
								bool_type: "bool",
								f32_type: "f32",
								f64_type: "f64",
								pubkey_type: { array: { type: "u8", len: 32 } },
								u8_type_option: { option: "u8" },
								u16_type_option: { option: "u16" },
								u32_type_option: { option: "u32" },
								u64_type_option: { option: "u64" },
								u128_type_option: { option: "u128" },
								i8_type_option: { option: "i8" },
								i16_type_option: { option: "i16" },
								i32_type_option: { option: "i32" },
								i64_type_option: { option: "i64" },
								i128_type_option: { option: "i128" },
								string_type_option: { option: "string" },
								bool_type_option: { option: "bool" },
								f32_type_option: { option: "f32" },
								f64_type_option: { option: "f64" },
								pubkey_type_option: { option: { array: { type: "u8", len: 32 } } },
								u8_type_vector: { array: { type: "u8" } },
								u16_type_vector: { array: { type: "u16" } },
								u32_type_vector: { array: { type: "u32" } },
								u64_type_vector: { array: { type: "u64" } },
								u128_type_vector: { array: { type: "u128" } },
								i8_type_vector: { array: { type: "i8" } },
								i16_type_vector: { array: { type: "i16" } },
								i32_type_vector: { array: { type: "i32" } },
								i64_type_vector: { array: { type: "i64" } },
								i128_type_vector: { array: { type: "i128" } },
								bool_type_vector: { array: { type: "bool" } },
								f32_type_vector: { array: { type: "f32" } },
								f64_type_vector: { array: { type: "f64" } },
								pubkey_type_vector: { array: { type: { array: { type: "u8", len: 32 } } } },
            },
        },
        {
            id: ValidateDataTypesInstruction.Instruction1,
						u8_type: args.u8Type,
						u16_type: args.u16Type,
						u32_type: args.u32Type,
						u64_type: args.u64Type,
						u128_type: args.u128Type,
						i8_type: args.i8Type,
						i16_type: args.i16Type,
						i32_type: args.i32Type,
						i64_type: args.i64Type,
						i128_type: args.i128Type,
						string_type: args.stringType,
						bool_type: args.boolType,
						f32_type: args.f32Type,
						f64_type: args.f64Type,
						pubkey_type: args.pubkeyType.toBytes(),
						u8_type_option: args.u8TypeOption,
						u16_type_option: args.u16TypeOption,
						u32_type_option: args.u32TypeOption,
						u64_type_option: args.u64TypeOption,
						u128_type_option: args.u128TypeOption,
						i8_type_option: args.i8TypeOption,
						i16_type_option: args.i16TypeOption,
						i32_type_option: args.i32TypeOption,
						i64_type_option: args.i64TypeOption,
						i128_type_option: args.i128TypeOption,
						string_type_option: args.stringTypeOption,
						bool_type_option: args.boolTypeOption,
						f32_type_option: args.f32TypeOption,
						f64_type_option: args.f64TypeOption,
						pubkey_type_option: args.pubkeyTypeOption?.toBytes(),
						u8_type_vector: args.u8TypeVector,
						u16_type_vector: args.u16TypeVector,
						u32_type_vector: args.u32TypeVector,
						u64_type_vector: args.u64TypeVector,
						u128_type_vector: args.u128TypeVector,
						i8_type_vector: args.i8TypeVector,
						i16_type_vector: args.i16TypeVector,
						i32_type_vector: args.i32TypeVector,
						i64_type_vector: args.i64TypeVector,
						i128_type_vector: args.i128TypeVector,
						bool_type_vector: args.boolTypeVector,
						f32_type_vector: args.f32TypeVector,
						f64_type_vector: args.f64TypeVector,
						pubkey_type_vector: args.pubkeyTypeVector.map(e => e.toBytes()),
        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: args.accountInfoType, isSigner: false, isWritable: false},
						{pubkey: args.accountInfoTypeMut, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test MasterTypeNonPDA types
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - u128_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - i128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f32_type: {@link number} 
 * - f64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u8_type_option: {@link number | undefined} 
 * - u16_type_option: {@link number | undefined} 
 * - u32_type_option: {@link number | undefined} 
 * - u64_type_option: {@link BigInt | undefined} 
 * - u128_type_option: {@link BigInt | undefined} 
 * - i8_type_option: {@link number | undefined} 
 * - i16_type_option: {@link number | undefined} 
 * - i32_type_option: {@link number | undefined} 
 * - i64_type_option: {@link BigInt | undefined} 
 * - i128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f32_type_option: {@link number | undefined} 
 * - f64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u8_type_vector: {@link number[]} 
 * - u16_type_vector: {@link number[]} 
 * - u32_type_vector: {@link number[]} 
 * - u64_type_vector: {@link BigInt[]} 
 * - u128_type_vector: {@link BigInt[]} 
 * - i8_type_vector: {@link number[]} 
 * - i16_type_vector: {@link number[]} 
 * - i32_type_vector: {@link number[]} 
 * - i64_type_vector: {@link BigInt[]} 
 * - i128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f32_type_vector: {@link number[]} 
 * - f64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
 */
export const instruction1SendAndConfirm = async (
	args: Omit<Instruction1Args, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction1({
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

export type Instruction2Args = {
	feePayer: PublicKey;
	accountInfoType: PublicKey;
	accountInfoTypeMut: PublicKey;
	u8Type: number;
	u16Type: number;
	u32Type: number;
	u64Type: bigint;
	u128Type: bigint;
	i8Type: number;
	i16Type: number;
	i32Type: number;
	i64Type: bigint;
	i128Type: bigint;
	stringType: string;
	boolType: boolean;
	f32Type: number;
	f64Type: number;
	pubkeyType: PublicKey;
	u8TypeOption: number | undefined;
	u16TypeOption: number | undefined;
	u32TypeOption: number | undefined;
	u64TypeOption: bigint | undefined;
	u128TypeOption: bigint | undefined;
	i8TypeOption: number | undefined;
	i16TypeOption: number | undefined;
	i32TypeOption: number | undefined;
	i64TypeOption: bigint | undefined;
	i128TypeOption: bigint | undefined;
	stringTypeOption: string | undefined;
	boolTypeOption: boolean | undefined;
	f32TypeOption: number | undefined;
	f64TypeOption: number | undefined;
	pubkeyTypeOption: PublicKey | undefined;
	u8TypeVector: number[];
	u16TypeVector: number[];
	u32TypeVector: number[];
	u64TypeVector: bigint[];
	u128TypeVector: bigint[];
	i8TypeVector: number[];
	i16TypeVector: number[];
	i32TypeVector: number[];
	i64TypeVector: bigint[];
	i128TypeVector: bigint[];
	boolTypeVector: boolean[];
	f32TypeVector: number[];
	f64TypeVector: number[];
	pubkeyTypeVector: PublicKey[];
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test MasterTypePDA types
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - u128_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - i128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f32_type: {@link number} 
 * - f64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u8_type_option: {@link number | undefined} 
 * - u16_type_option: {@link number | undefined} 
 * - u32_type_option: {@link number | undefined} 
 * - u64_type_option: {@link BigInt | undefined} 
 * - u128_type_option: {@link BigInt | undefined} 
 * - i8_type_option: {@link number | undefined} 
 * - i16_type_option: {@link number | undefined} 
 * - i32_type_option: {@link number | undefined} 
 * - i64_type_option: {@link BigInt | undefined} 
 * - i128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f32_type_option: {@link number | undefined} 
 * - f64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u8_type_vector: {@link number[]} 
 * - u16_type_vector: {@link number[]} 
 * - u32_type_vector: {@link number[]} 
 * - u64_type_vector: {@link BigInt[]} 
 * - u128_type_vector: {@link BigInt[]} 
 * - i8_type_vector: {@link number[]} 
 * - i16_type_vector: {@link number[]} 
 * - i32_type_vector: {@link number[]} 
 * - i64_type_vector: {@link BigInt[]} 
 * - i128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f32_type_vector: {@link number[]} 
 * - f64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
 */
export const instruction2 = (args: Instruction2Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								u8_type: "u8",
								u16_type: "u16",
								u32_type: "u32",
								u64_type: "u64",
								u128_type: "u128",
								i8_type: "i8",
								i16_type: "i16",
								i32_type: "i32",
								i64_type: "i64",
								i128_type: "i128",
								string_type: "string",
								bool_type: "bool",
								f32_type: "f32",
								f64_type: "f64",
								pubkey_type: { array: { type: "u8", len: 32 } },
								u8_type_option: { option: "u8" },
								u16_type_option: { option: "u16" },
								u32_type_option: { option: "u32" },
								u64_type_option: { option: "u64" },
								u128_type_option: { option: "u128" },
								i8_type_option: { option: "i8" },
								i16_type_option: { option: "i16" },
								i32_type_option: { option: "i32" },
								i64_type_option: { option: "i64" },
								i128_type_option: { option: "i128" },
								string_type_option: { option: "string" },
								bool_type_option: { option: "bool" },
								f32_type_option: { option: "f32" },
								f64_type_option: { option: "f64" },
								pubkey_type_option: { option: { array: { type: "u8", len: 32 } } },
								u8_type_vector: { array: { type: "u8" } },
								u16_type_vector: { array: { type: "u16" } },
								u32_type_vector: { array: { type: "u32" } },
								u64_type_vector: { array: { type: "u64" } },
								u128_type_vector: { array: { type: "u128" } },
								i8_type_vector: { array: { type: "i8" } },
								i16_type_vector: { array: { type: "i16" } },
								i32_type_vector: { array: { type: "i32" } },
								i64_type_vector: { array: { type: "i64" } },
								i128_type_vector: { array: { type: "i128" } },
								bool_type_vector: { array: { type: "bool" } },
								f32_type_vector: { array: { type: "f32" } },
								f64_type_vector: { array: { type: "f64" } },
								pubkey_type_vector: { array: { type: { array: { type: "u8", len: 32 } } } },
            },
        },
        {
            id: ValidateDataTypesInstruction.Instruction2,
						u8_type: args.u8Type,
						u16_type: args.u16Type,
						u32_type: args.u32Type,
						u64_type: args.u64Type,
						u128_type: args.u128Type,
						i8_type: args.i8Type,
						i16_type: args.i16Type,
						i32_type: args.i32Type,
						i64_type: args.i64Type,
						i128_type: args.i128Type,
						string_type: args.stringType,
						bool_type: args.boolType,
						f32_type: args.f32Type,
						f64_type: args.f64Type,
						pubkey_type: args.pubkeyType.toBytes(),
						u8_type_option: args.u8TypeOption,
						u16_type_option: args.u16TypeOption,
						u32_type_option: args.u32TypeOption,
						u64_type_option: args.u64TypeOption,
						u128_type_option: args.u128TypeOption,
						i8_type_option: args.i8TypeOption,
						i16_type_option: args.i16TypeOption,
						i32_type_option: args.i32TypeOption,
						i64_type_option: args.i64TypeOption,
						i128_type_option: args.i128TypeOption,
						string_type_option: args.stringTypeOption,
						bool_type_option: args.boolTypeOption,
						f32_type_option: args.f32TypeOption,
						f64_type_option: args.f64TypeOption,
						pubkey_type_option: args.pubkeyTypeOption?.toBytes(),
						u8_type_vector: args.u8TypeVector,
						u16_type_vector: args.u16TypeVector,
						u32_type_vector: args.u32TypeVector,
						u64_type_vector: args.u64TypeVector,
						u128_type_vector: args.u128TypeVector,
						i8_type_vector: args.i8TypeVector,
						i16_type_vector: args.i16TypeVector,
						i32_type_vector: args.i32TypeVector,
						i64_type_vector: args.i64TypeVector,
						i128_type_vector: args.i128TypeVector,
						bool_type_vector: args.boolTypeVector,
						f32_type_vector: args.f32TypeVector,
						f64_type_vector: args.f64TypeVector,
						pubkey_type_vector: args.pubkeyTypeVector.map(e => e.toBytes()),
        }
    );

	const [accountPubkey] = pda.deriveMasterTypesPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: args.accountInfoType, isSigner: false, isWritable: false},
						{pubkey: args.accountInfoTypeMut, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test MasterTypePDA types
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - u128_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - i128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f32_type: {@link number} 
 * - f64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u8_type_option: {@link number | undefined} 
 * - u16_type_option: {@link number | undefined} 
 * - u32_type_option: {@link number | undefined} 
 * - u64_type_option: {@link BigInt | undefined} 
 * - u128_type_option: {@link BigInt | undefined} 
 * - i8_type_option: {@link number | undefined} 
 * - i16_type_option: {@link number | undefined} 
 * - i32_type_option: {@link number | undefined} 
 * - i64_type_option: {@link BigInt | undefined} 
 * - i128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f32_type_option: {@link number | undefined} 
 * - f64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u8_type_vector: {@link number[]} 
 * - u16_type_vector: {@link number[]} 
 * - u32_type_vector: {@link number[]} 
 * - u64_type_vector: {@link BigInt[]} 
 * - u128_type_vector: {@link BigInt[]} 
 * - i8_type_vector: {@link number[]} 
 * - i16_type_vector: {@link number[]} 
 * - i32_type_vector: {@link number[]} 
 * - i64_type_vector: {@link BigInt[]} 
 * - i128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f32_type_vector: {@link number[]} 
 * - f64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
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

