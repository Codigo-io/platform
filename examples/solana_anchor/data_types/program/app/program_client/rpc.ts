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
import { ValidateDataTypes } from "../../target/types/validate_data_types";
import idl from "../../target/idl/validate_data_types.json";
import * as pda from "./pda";



let _program: Program<ValidateDataTypes>;


export const initializeClient = (
    programId: web3.PublicKey,
    anchorProvider = AnchorProvider.env(),
) => {
    _program = new Program<ValidateDataTypes>(
        idl as never,
        programId,
        anchorProvider,
    );


};

export type Instruction1Args = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
  accountInfoType: web3.PublicKey;
  accountInfoTypeMut: web3.PublicKey;
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
  pubkeyType: web3.PublicKey;
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
  pubkeyTypeOption: web3.PublicKey | undefined;
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
  pubkeyTypeVector: web3.PublicKey[];
};

/**
 * ### Returns a {@link MethodsBuilder}
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
export const instruction1Builder = (
	args: Instruction1Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateDataTypes, never> => {


  return _program
    .methods
    .instruction1(
      args.u8Type,
      args.u16Type,
      args.u32Type,
      new BN(args.u64Type.toString()),
      new BN(args.u128Type.toString()),
      args.i8Type,
      args.i16Type,
      args.i32Type,
      new BN(args.i64Type.toString()),
      new BN(args.i128Type.toString()),
      args.stringType,
      args.boolType,
      args.f32Type,
      args.f64Type,
      args.pubkeyType,
      args.u8TypeOption,
      args.u16TypeOption,
      args.u32TypeOption,
      args.u64TypeOption ? new BN(args.u64TypeOption.toString()) : undefined,
      args.u128TypeOption ? new BN(args.u128TypeOption.toString()) : undefined,
      args.i8TypeOption,
      args.i16TypeOption,
      args.i32TypeOption,
      args.i64TypeOption ? new BN(args.i64TypeOption.toString()) : undefined,
      args.i128TypeOption ? new BN(args.i128TypeOption.toString()) : undefined,
      args.stringTypeOption,
      args.boolTypeOption,
      args.f32TypeOption,
      args.f64TypeOption,
      args.pubkeyTypeOption,
      Buffer.from(args.u8TypeVector),
      args.u16TypeVector,
      args.u32TypeVector,
      args.u64TypeVector.map(e => new BN(e.toString())),
      args.u128TypeVector.map(e => new BN(e.toString())),
      args.i8TypeVector,
      args.i16TypeVector,
      args.i32TypeVector,
      args.i64TypeVector.map(e => new BN(e.toString())),
      args.i128TypeVector.map(e => new BN(e.toString())),
      args.boolTypeVector,
      args.f32TypeVector,
      args.f64TypeVector,
      args.pubkeyTypeVector,
    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      accountInfoType: args.accountInfoType,
      accountInfoTypeMut: args.accountInfoTypeMut,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction1 = (
	args: Instruction1Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction1Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction1Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export type Instruction2Args = {
  feePayer: web3.PublicKey;
  accountInfoType: web3.PublicKey;
  accountInfoTypeMut: web3.PublicKey;
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
  pubkeyType: web3.PublicKey;
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
  pubkeyTypeOption: web3.PublicKey | undefined;
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
  pubkeyTypeVector: web3.PublicKey[];
};

/**
 * ### Returns a {@link MethodsBuilder}
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
export const instruction2Builder = (
	args: Instruction2Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateDataTypes, never> => {
  const [accountPubkey] = pda.deriveMasterTypesPdaPDA(_program.programId);

  return _program
    .methods
    .instruction2(
      args.u8Type,
      args.u16Type,
      args.u32Type,
      new BN(args.u64Type.toString()),
      new BN(args.u128Type.toString()),
      args.i8Type,
      args.i16Type,
      args.i32Type,
      new BN(args.i64Type.toString()),
      new BN(args.i128Type.toString()),
      args.stringType,
      args.boolType,
      args.f32Type,
      args.f64Type,
      args.pubkeyType,
      args.u8TypeOption,
      args.u16TypeOption,
      args.u32TypeOption,
      args.u64TypeOption ? new BN(args.u64TypeOption.toString()) : undefined,
      args.u128TypeOption ? new BN(args.u128TypeOption.toString()) : undefined,
      args.i8TypeOption,
      args.i16TypeOption,
      args.i32TypeOption,
      args.i64TypeOption ? new BN(args.i64TypeOption.toString()) : undefined,
      args.i128TypeOption ? new BN(args.i128TypeOption.toString()) : undefined,
      args.stringTypeOption,
      args.boolTypeOption,
      args.f32TypeOption,
      args.f64TypeOption,
      args.pubkeyTypeOption,
      Buffer.from(args.u8TypeVector),
      args.u16TypeVector,
      args.u32TypeVector,
      args.u64TypeVector.map(e => new BN(e.toString())),
      args.u128TypeVector.map(e => new BN(e.toString())),
      args.i8TypeVector,
      args.i16TypeVector,
      args.i32TypeVector,
      args.i64TypeVector.map(e => new BN(e.toString())),
      args.i128TypeVector.map(e => new BN(e.toString())),
      args.boolTypeVector,
      args.f32TypeVector,
      args.f64TypeVector,
      args.pubkeyTypeVector,
    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      accountInfoType: args.accountInfoType,
      accountInfoTypeMut: args.accountInfoTypeMut,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction2 = (
	args: Instruction2Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction2Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction2Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

// Getters

export const getState = (
    publicKey: web3.PublicKey,
    commitment?: web3.Commitment
): Promise<IdlAccounts<ValidateDataTypes>["state"]> => _program.account.state.fetch(publicKey, commitment);
