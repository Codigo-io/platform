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
 * 1. `[writable, signer]` account: {@link MasterTypesNonPda} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u_8_type: {@link number} 
 * - u_16_type: {@link number} 
 * - u_32_type: {@link number} 
 * - u_64_type: {@link BigInt} 
 * - u_128_type: {@link BigInt} 
 * - i_8_type: {@link number} 
 * - i_16_type: {@link number} 
 * - i_32_type: {@link number} 
 * - i_64_type: {@link BigInt} 
 * - i_128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f_32_type: {@link number} 
 * - f_64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u_8_type_option: {@link number | undefined} 
 * - u_16_type_option: {@link number | undefined} 
 * - u_32_type_option: {@link number | undefined} 
 * - u_64_type_option: {@link BigInt | undefined} 
 * - u_128_type_option: {@link BigInt | undefined} 
 * - i_8_type_option: {@link number | undefined} 
 * - i_16_type_option: {@link number | undefined} 
 * - i_32_type_option: {@link number | undefined} 
 * - i_64_type_option: {@link BigInt | undefined} 
 * - i_128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f_32_type_option: {@link number | undefined} 
 * - f_64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u_8_type_vector: {@link number[]} 
 * - u_16_type_vector: {@link number[]} 
 * - u_32_type_vector: {@link number[]} 
 * - u_64_type_vector: {@link BigInt[]} 
 * - u_128_type_vector: {@link BigInt[]} 
 * - i_8_type_vector: {@link number[]} 
 * - i_16_type_vector: {@link number[]} 
 * - i_32_type_vector: {@link number[]} 
 * - i_64_type_vector: {@link BigInt[]} 
 * - i_128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f_32_type_vector: {@link number[]} 
 * - f_64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
 */
    Instruction1 = 0,

/**
 * Test MasterTypePDA types
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link MasterTypesPda} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u_8_type: {@link number} 
 * - u_16_type: {@link number} 
 * - u_32_type: {@link number} 
 * - u_64_type: {@link BigInt} 
 * - u_128_type: {@link BigInt} 
 * - i_8_type: {@link number} 
 * - i_16_type: {@link number} 
 * - i_32_type: {@link number} 
 * - i_64_type: {@link BigInt} 
 * - i_128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f_32_type: {@link number} 
 * - f_64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u_8_type_option: {@link number | undefined} 
 * - u_16_type_option: {@link number | undefined} 
 * - u_32_type_option: {@link number | undefined} 
 * - u_64_type_option: {@link BigInt | undefined} 
 * - u_128_type_option: {@link BigInt | undefined} 
 * - i_8_type_option: {@link number | undefined} 
 * - i_16_type_option: {@link number | undefined} 
 * - i_32_type_option: {@link number | undefined} 
 * - i_64_type_option: {@link BigInt | undefined} 
 * - i_128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f_32_type_option: {@link number | undefined} 
 * - f_64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u_8_type_vector: {@link number[]} 
 * - u_16_type_vector: {@link number[]} 
 * - u_32_type_vector: {@link number[]} 
 * - u_64_type_vector: {@link BigInt[]} 
 * - u_128_type_vector: {@link BigInt[]} 
 * - i_8_type_vector: {@link number[]} 
 * - i_16_type_vector: {@link number[]} 
 * - i_32_type_vector: {@link number[]} 
 * - i_64_type_vector: {@link BigInt[]} 
 * - i_128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f_32_type_vector: {@link number[]} 
 * - f_64_type_vector: {@link number[]} 
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
 * 1. `[writable, signer]` account: {@link MasterTypesNonPda} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u_8_type: {@link number} 
 * - u_16_type: {@link number} 
 * - u_32_type: {@link number} 
 * - u_64_type: {@link BigInt} 
 * - u_128_type: {@link BigInt} 
 * - i_8_type: {@link number} 
 * - i_16_type: {@link number} 
 * - i_32_type: {@link number} 
 * - i_64_type: {@link BigInt} 
 * - i_128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f_32_type: {@link number} 
 * - f_64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u_8_type_option: {@link number | undefined} 
 * - u_16_type_option: {@link number | undefined} 
 * - u_32_type_option: {@link number | undefined} 
 * - u_64_type_option: {@link BigInt | undefined} 
 * - u_128_type_option: {@link BigInt | undefined} 
 * - i_8_type_option: {@link number | undefined} 
 * - i_16_type_option: {@link number | undefined} 
 * - i_32_type_option: {@link number | undefined} 
 * - i_64_type_option: {@link BigInt | undefined} 
 * - i_128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f_32_type_option: {@link number | undefined} 
 * - f_64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u_8_type_vector: {@link number[]} 
 * - u_16_type_vector: {@link number[]} 
 * - u_32_type_vector: {@link number[]} 
 * - u_64_type_vector: {@link BigInt[]} 
 * - u_128_type_vector: {@link BigInt[]} 
 * - i_8_type_vector: {@link number[]} 
 * - i_16_type_vector: {@link number[]} 
 * - i_32_type_vector: {@link number[]} 
 * - i_64_type_vector: {@link BigInt[]} 
 * - i_128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f_32_type_vector: {@link number[]} 
 * - f_64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
 */
export const instruction1 = (args: Instruction1Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                u_8_type: "u8",
                u_16_type: "u16",
                u_32_type: "u32",
                u_64_type: "u64",
                u_128_type: "u128",
                i_8_type: "i8",
                i_16_type: "i16",
                i_32_type: "i32",
                i_64_type: "i64",
                i_128_type: "i128",
                string_type: "string",
                bool_type: "bool",
                f_32_type: "f32",
                f_64_type: "f64",
                pubkey_type: { array: { type: "u8", len: 32 } },
                u_8_type_option: { option: "u8" },
                u_16_type_option: { option: "u16" },
                u_32_type_option: { option: "u32" },
                u_64_type_option: { option: "u64" },
                u_128_type_option: { option: "u128" },
                i_8_type_option: { option: "i8" },
                i_16_type_option: { option: "i16" },
                i_32_type_option: { option: "i32" },
                i_64_type_option: { option: "i64" },
                i_128_type_option: { option: "i128" },
                string_type_option: { option: "string" },
                bool_type_option: { option: "bool" },
                f_32_type_option: { option: "f32" },
                f_64_type_option: { option: "f64" },
                pubkey_type_option: { option: { array: { type: "u8", len: 32 } } },
                u_8_type_vector: { array: { type: "u8" } },
                u_16_type_vector: { array: { type: "u16" } },
                u_32_type_vector: { array: { type: "u32" } },
                u_64_type_vector: { array: { type: "u64" } },
                u_128_type_vector: { array: { type: "u128" } },
                i_8_type_vector: { array: { type: "i8" } },
                i_16_type_vector: { array: { type: "i16" } },
                i_32_type_vector: { array: { type: "i32" } },
                i_64_type_vector: { array: { type: "i64" } },
                i_128_type_vector: { array: { type: "i128" } },
                bool_type_vector: { array: { type: "bool" } },
                f_32_type_vector: { array: { type: "f32" } },
                f_64_type_vector: { array: { type: "f64" } },
                pubkey_type_vector: { array: { type: { array: { type: "u8", len: 32 } } } },
            },
        },
        {
            id: ValidateDataTypesInstruction.Instruction1,
            u_8_type: args.u8Type,
            u_16_type: args.u16Type,
            u_32_type: args.u32Type,
            u_64_type: args.u64Type,
            u_128_type: args.u128Type,
            i_8_type: args.i8Type,
            i_16_type: args.i16Type,
            i_32_type: args.i32Type,
            i_64_type: args.i64Type,
            i_128_type: args.i128Type,
            string_type: args.stringType,
            bool_type: args.boolType,
            f_32_type: args.f32Type,
            f_64_type: args.f64Type,
            pubkey_type: args.pubkeyType.toBytes(),
            u_8_type_option: args.u8TypeOption,
            u_16_type_option: args.u16TypeOption,
            u_32_type_option: args.u32TypeOption,
            u_64_type_option: args.u64TypeOption,
            u_128_type_option: args.u128TypeOption,
            i_8_type_option: args.i8TypeOption,
            i_16_type_option: args.i16TypeOption,
            i_32_type_option: args.i32TypeOption,
            i_64_type_option: args.i64TypeOption,
            i_128_type_option: args.i128TypeOption,
            string_type_option: args.stringTypeOption,
            bool_type_option: args.boolTypeOption,
            f_32_type_option: args.f32TypeOption,
            f_64_type_option: args.f64TypeOption,
            pubkey_type_option: args.pubkeyTypeOption?.toBytes(),
            u_8_type_vector: args.u8TypeVector,
            u_16_type_vector: args.u16TypeVector,
            u_32_type_vector: args.u32TypeVector,
            u_64_type_vector: args.u64TypeVector,
            u_128_type_vector: args.u128TypeVector,
            i_8_type_vector: args.i8TypeVector,
            i_16_type_vector: args.i16TypeVector,
            i_32_type_vector: args.i32TypeVector,
            i_64_type_vector: args.i64TypeVector,
            i_128_type_vector: args.i128TypeVector,
            bool_type_vector: args.boolTypeVector,
            f_32_type_vector: args.f32TypeVector,
            f_64_type_vector: args.f64TypeVector,
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
 * 1. `[writable, signer]` account: {@link MasterTypesNonPda} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u_8_type: {@link number} 
 * - u_16_type: {@link number} 
 * - u_32_type: {@link number} 
 * - u_64_type: {@link BigInt} 
 * - u_128_type: {@link BigInt} 
 * - i_8_type: {@link number} 
 * - i_16_type: {@link number} 
 * - i_32_type: {@link number} 
 * - i_64_type: {@link BigInt} 
 * - i_128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f_32_type: {@link number} 
 * - f_64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u_8_type_option: {@link number | undefined} 
 * - u_16_type_option: {@link number | undefined} 
 * - u_32_type_option: {@link number | undefined} 
 * - u_64_type_option: {@link BigInt | undefined} 
 * - u_128_type_option: {@link BigInt | undefined} 
 * - i_8_type_option: {@link number | undefined} 
 * - i_16_type_option: {@link number | undefined} 
 * - i_32_type_option: {@link number | undefined} 
 * - i_64_type_option: {@link BigInt | undefined} 
 * - i_128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f_32_type_option: {@link number | undefined} 
 * - f_64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u_8_type_vector: {@link number[]} 
 * - u_16_type_vector: {@link number[]} 
 * - u_32_type_vector: {@link number[]} 
 * - u_64_type_vector: {@link BigInt[]} 
 * - u_128_type_vector: {@link BigInt[]} 
 * - i_8_type_vector: {@link number[]} 
 * - i_16_type_vector: {@link number[]} 
 * - i_32_type_vector: {@link number[]} 
 * - i_64_type_vector: {@link BigInt[]} 
 * - i_128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f_32_type_vector: {@link number[]} 
 * - f_64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
 */
export const instruction1SendAndConfirm = async (
    args: Omit<Instruction1Args, "feePayer" |"account"> & { 
        signers: { feePayer: Keypair,  account: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction1({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        account: args.signers.account.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.account, ]
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
 * 1. `[writable]` account: {@link MasterTypesPda} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u_8_type: {@link number} 
 * - u_16_type: {@link number} 
 * - u_32_type: {@link number} 
 * - u_64_type: {@link BigInt} 
 * - u_128_type: {@link BigInt} 
 * - i_8_type: {@link number} 
 * - i_16_type: {@link number} 
 * - i_32_type: {@link number} 
 * - i_64_type: {@link BigInt} 
 * - i_128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f_32_type: {@link number} 
 * - f_64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u_8_type_option: {@link number | undefined} 
 * - u_16_type_option: {@link number | undefined} 
 * - u_32_type_option: {@link number | undefined} 
 * - u_64_type_option: {@link BigInt | undefined} 
 * - u_128_type_option: {@link BigInt | undefined} 
 * - i_8_type_option: {@link number | undefined} 
 * - i_16_type_option: {@link number | undefined} 
 * - i_32_type_option: {@link number | undefined} 
 * - i_64_type_option: {@link BigInt | undefined} 
 * - i_128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f_32_type_option: {@link number | undefined} 
 * - f_64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u_8_type_vector: {@link number[]} 
 * - u_16_type_vector: {@link number[]} 
 * - u_32_type_vector: {@link number[]} 
 * - u_64_type_vector: {@link BigInt[]} 
 * - u_128_type_vector: {@link BigInt[]} 
 * - i_8_type_vector: {@link number[]} 
 * - i_16_type_vector: {@link number[]} 
 * - i_32_type_vector: {@link number[]} 
 * - i_64_type_vector: {@link BigInt[]} 
 * - i_128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f_32_type_vector: {@link number[]} 
 * - f_64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
 */
export const instruction2 = (args: Instruction2Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                u_8_type: "u8",
                u_16_type: "u16",
                u_32_type: "u32",
                u_64_type: "u64",
                u_128_type: "u128",
                i_8_type: "i8",
                i_16_type: "i16",
                i_32_type: "i32",
                i_64_type: "i64",
                i_128_type: "i128",
                string_type: "string",
                bool_type: "bool",
                f_32_type: "f32",
                f_64_type: "f64",
                pubkey_type: { array: { type: "u8", len: 32 } },
                u_8_type_option: { option: "u8" },
                u_16_type_option: { option: "u16" },
                u_32_type_option: { option: "u32" },
                u_64_type_option: { option: "u64" },
                u_128_type_option: { option: "u128" },
                i_8_type_option: { option: "i8" },
                i_16_type_option: { option: "i16" },
                i_32_type_option: { option: "i32" },
                i_64_type_option: { option: "i64" },
                i_128_type_option: { option: "i128" },
                string_type_option: { option: "string" },
                bool_type_option: { option: "bool" },
                f_32_type_option: { option: "f32" },
                f_64_type_option: { option: "f64" },
                pubkey_type_option: { option: { array: { type: "u8", len: 32 } } },
                u_8_type_vector: { array: { type: "u8" } },
                u_16_type_vector: { array: { type: "u16" } },
                u_32_type_vector: { array: { type: "u32" } },
                u_64_type_vector: { array: { type: "u64" } },
                u_128_type_vector: { array: { type: "u128" } },
                i_8_type_vector: { array: { type: "i8" } },
                i_16_type_vector: { array: { type: "i16" } },
                i_32_type_vector: { array: { type: "i32" } },
                i_64_type_vector: { array: { type: "i64" } },
                i_128_type_vector: { array: { type: "i128" } },
                bool_type_vector: { array: { type: "bool" } },
                f_32_type_vector: { array: { type: "f32" } },
                f_64_type_vector: { array: { type: "f64" } },
                pubkey_type_vector: { array: { type: { array: { type: "u8", len: 32 } } } },
            },
        },
        {
            id: ValidateDataTypesInstruction.Instruction2,
            u_8_type: args.u8Type,
            u_16_type: args.u16Type,
            u_32_type: args.u32Type,
            u_64_type: args.u64Type,
            u_128_type: args.u128Type,
            i_8_type: args.i8Type,
            i_16_type: args.i16Type,
            i_32_type: args.i32Type,
            i_64_type: args.i64Type,
            i_128_type: args.i128Type,
            string_type: args.stringType,
            bool_type: args.boolType,
            f_32_type: args.f32Type,
            f_64_type: args.f64Type,
            pubkey_type: args.pubkeyType.toBytes(),
            u_8_type_option: args.u8TypeOption,
            u_16_type_option: args.u16TypeOption,
            u_32_type_option: args.u32TypeOption,
            u_64_type_option: args.u64TypeOption,
            u_128_type_option: args.u128TypeOption,
            i_8_type_option: args.i8TypeOption,
            i_16_type_option: args.i16TypeOption,
            i_32_type_option: args.i32TypeOption,
            i_64_type_option: args.i64TypeOption,
            i_128_type_option: args.i128TypeOption,
            string_type_option: args.stringTypeOption,
            bool_type_option: args.boolTypeOption,
            f_32_type_option: args.f32TypeOption,
            f_64_type_option: args.f64TypeOption,
            pubkey_type_option: args.pubkeyTypeOption?.toBytes(),
            u_8_type_vector: args.u8TypeVector,
            u_16_type_vector: args.u16TypeVector,
            u_32_type_vector: args.u32TypeVector,
            u_64_type_vector: args.u64TypeVector,
            u_128_type_vector: args.u128TypeVector,
            i_8_type_vector: args.i8TypeVector,
            i_16_type_vector: args.i16TypeVector,
            i_32_type_vector: args.i32TypeVector,
            i_64_type_vector: args.i64TypeVector,
            i_128_type_vector: args.i128TypeVector,
            bool_type_vector: args.boolTypeVector,
            f_32_type_vector: args.f32TypeVector,
            f_64_type_vector: args.f64TypeVector,
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
 * 1. `[writable]` account: {@link MasterTypesPda} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u_8_type: {@link number} 
 * - u_16_type: {@link number} 
 * - u_32_type: {@link number} 
 * - u_64_type: {@link BigInt} 
 * - u_128_type: {@link BigInt} 
 * - i_8_type: {@link number} 
 * - i_16_type: {@link number} 
 * - i_32_type: {@link number} 
 * - i_64_type: {@link BigInt} 
 * - i_128_type: {@link BigInt} 
 * - string_type: {@link string} 
 * - bool_type: {@link boolean} 
 * - f_32_type: {@link number} 
 * - f_64_type: {@link number} 
 * - pubkey_type: {@link PublicKey} 
 * - u_8_type_option: {@link number | undefined} 
 * - u_16_type_option: {@link number | undefined} 
 * - u_32_type_option: {@link number | undefined} 
 * - u_64_type_option: {@link BigInt | undefined} 
 * - u_128_type_option: {@link BigInt | undefined} 
 * - i_8_type_option: {@link number | undefined} 
 * - i_16_type_option: {@link number | undefined} 
 * - i_32_type_option: {@link number | undefined} 
 * - i_64_type_option: {@link BigInt | undefined} 
 * - i_128_type_option: {@link BigInt | undefined} 
 * - string_type_option: {@link string | undefined} 
 * - bool_type_option: {@link boolean | undefined} 
 * - f_32_type_option: {@link number | undefined} 
 * - f_64_type_option: {@link number | undefined} 
 * - pubkey_type_option: {@link PublicKey | undefined} 
 * - u_8_type_vector: {@link number[]} 
 * - u_16_type_vector: {@link number[]} 
 * - u_32_type_vector: {@link number[]} 
 * - u_64_type_vector: {@link BigInt[]} 
 * - u_128_type_vector: {@link BigInt[]} 
 * - i_8_type_vector: {@link number[]} 
 * - i_16_type_vector: {@link number[]} 
 * - i_32_type_vector: {@link number[]} 
 * - i_64_type_vector: {@link BigInt[]} 
 * - i_128_type_vector: {@link BigInt[]} 
 * - bool_type_vector: {@link boolean[]} 
 * - f_32_type_vector: {@link number[]} 
 * - f_64_type_vector: {@link number[]} 
 * - pubkey_type_vector: {@link PublicKey[]} 
 */
export const instruction2SendAndConfirm = async (
    args: Omit<Instruction2Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction2({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

// Getters

export const getMasterTypesNonPda = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.MasterTypesNonPda | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeMasterTypesNonPda(deserialize(T.MasterTypesNonPdaSchema, buffer.data) as Record<string, unknown>);
}

export const getMasterTypesPda = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.MasterTypesPda | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeMasterTypesPda(deserialize(T.MasterTypesPdaSchema, buffer.data) as Record<string, unknown>);
}


// Websocket Events

