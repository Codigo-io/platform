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
import { ValidateAdvancedCases } from "../../target/types/validate_advanced_cases";
import idl from "../../target/idl/validate_advanced_cases.json";
import * as pda from "./pda";



let _program: Program<ValidateAdvancedCases>;


export const initializeClient = (
    programId: web3.PublicKey,
    anchorProvider = AnchorProvider.env(),
) => {
    _program = new Program<ValidateAdvancedCases>(
        idl as never,
        programId,
        anchorProvider,
    );


};

export type Instruction0OnlyMethodWithNameArgs = {
  feePayer: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 */
export const instruction0OnlyMethodWithNameBuilder = (
	args: Instruction0OnlyMethodWithNameArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction0OnlyMethodWithName(

    )
    .accounts({
      feePayer: args.feePayer,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 */
export const instruction0OnlyMethodWithName = (
	args: Instruction0OnlyMethodWithNameArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction0OnlyMethodWithNameBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 */
export const instruction0OnlyMethodWithNameSendAndConfirm = async (
  args: Omit<Instruction0OnlyMethodWithNameArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction0OnlyMethodWithNameBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction1Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction1Builder = (
	args: Instruction1Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction1(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction1 = (
	args: Instruction1Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction1Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction1SendAndConfirm = async (
  args: Omit<Instruction1Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction1Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction2Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction2Builder = (
	args: Instruction2Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction2(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction2 = (
	args: Instruction2Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction2Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction2SendAndConfirm = async (
  args: Omit<Instruction2Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction2Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction3Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  input1: number;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3Builder = (
	args: Instruction3Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, _program.programId);

  return _program
    .methods
    .instruction3(
      args.input1,
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3 = (
	args: Instruction3Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction3Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3SendAndConfirm = async (
  args: Omit<Instruction3Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction3Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction4Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
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
  accountSeedPubkeyType: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
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
export const instruction4Builder = (
	args: Instruction4Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
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
    }, _program.programId);

  return _program
    .methods
    .instruction4(
      args.input1,
      args.accountSeedU8Type,
      args.accountSeedU16Type,
      args.accountSeedU32Type,
      new BN(args.accountSeedU64Type.toString()),
      args.accountSeedI8Type,
      args.accountSeedI16Type,
      args.accountSeedI32Type,
      new BN(args.accountSeedI64Type.toString()),
      args.accountSeedStringType,
      args.accountSeedPubkeyType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
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
export const instruction4 = (
	args: Instruction4Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction4Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
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
  args: Omit<Instruction4Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction4Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction5Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `non-mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
export const instruction5Builder = (
	args: Instruction5Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction5(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `non-mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
export const instruction5 = (
	args: Instruction5Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction5Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `non-mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
export const instruction5SendAndConfirm = async (
  args: Omit<Instruction5Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction5Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction6Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `non-mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
export const instruction6Builder = (
	args: Instruction6Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction6(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `non-mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
export const instruction6 = (
	args: Instruction6Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction6Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `non-mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
export const instruction6SendAndConfirm = async (
  args: Omit<Instruction6Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction6Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction7Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `non-mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction7Builder = (
	args: Instruction7Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, _program.programId);

  return _program
    .methods
    .instruction7(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `non-mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction7 = (
	args: Instruction7Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction7Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `non-mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction7SendAndConfirm = async (
  args: Omit<Instruction7Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction7Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction8Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  accountSeedU8Type: number;
  accountSeedU16Type: number;
  accountSeedU32Type: number;
  accountSeedU64Type: bigint;
  accountSeedI8Type: number;
  accountSeedI16Type: number;
  accountSeedI32Type: number;
  accountSeedI64Type: bigint;
  accountSeedStringType: string;
  accountSeedPubkeyType: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `non-mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
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
export const instruction8Builder = (
	args: Instruction8Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
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
    }, _program.programId);

  return _program
    .methods
    .instruction8(
      args.accountSeedU8Type,
      args.accountSeedU16Type,
      args.accountSeedU32Type,
      new BN(args.accountSeedU64Type.toString()),
      args.accountSeedI8Type,
      args.accountSeedI16Type,
      args.accountSeedI32Type,
      new BN(args.accountSeedI64Type.toString()),
      args.accountSeedStringType,
      args.accountSeedPubkeyType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `non-mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
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
export const instruction8 = (
	args: Instruction8Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction8Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `non-mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
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
  args: Omit<Instruction8Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction8Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction9Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction9Builder = (
	args: Instruction9Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction9(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction9 = (
	args: Instruction9Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction9Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction9SendAndConfirm = async (
  args: Omit<Instruction9Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction9Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, args.signers.account])
    .rpc();
}

export type Instruction10Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction10Builder = (
	args: Instruction10Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction10(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction10 = (
	args: Instruction10Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction10Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction10SendAndConfirm = async (
  args: Omit<Instruction10Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction10Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction11Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  input1: number;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11Builder = (
	args: Instruction11Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, _program.programId);

  return _program
    .methods
    .instruction11(
      args.input1,
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11 = (
	args: Instruction11Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction11Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11SendAndConfirm = async (
  args: Omit<Instruction11Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction11Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction12Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
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
  accountSeedPubkeyType: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
export const instruction12Builder = (
	args: Instruction12Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
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
    }, _program.programId);

  return _program
    .methods
    .instruction12(
      args.input1,
      args.accountSeedU8Type,
      args.accountSeedU16Type,
      args.accountSeedU32Type,
      new BN(args.accountSeedU64Type.toString()),
      args.accountSeedI8Type,
      args.accountSeedI16Type,
      args.accountSeedI32Type,
      new BN(args.accountSeedI64Type.toString()),
      args.accountSeedStringType,
      args.accountSeedPubkeyType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
export const instruction12 = (
	args: Instruction12Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction12Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
  args: Omit<Instruction12Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction12Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction13Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction13Builder = (
	args: Instruction13Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction13(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction13 = (
	args: Instruction13Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction13Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction13SendAndConfirm = async (
  args: Omit<Instruction13Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction13Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, args.signers.account])
    .rpc();
}

export type Instruction14Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction14Builder = (
	args: Instruction14Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction14(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction14 = (
	args: Instruction14Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction14Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction14SendAndConfirm = async (
  args: Omit<Instruction14Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction14Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction15Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  input1: number;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15Builder = (
	args: Instruction15Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, _program.programId);

  return _program
    .methods
    .instruction15(
      args.input1,
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15 = (
	args: Instruction15Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction15Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15SendAndConfirm = async (
  args: Omit<Instruction15Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction15Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction16Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
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
  accountSeedPubkeyType: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
export const instruction16Builder = (
	args: Instruction16Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
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
    }, _program.programId);

  return _program
    .methods
    .instruction16(
      args.input1,
      args.accountSeedU8Type,
      args.accountSeedU16Type,
      args.accountSeedU32Type,
      new BN(args.accountSeedU64Type.toString()),
      args.accountSeedI8Type,
      args.accountSeedI16Type,
      args.accountSeedI32Type,
      new BN(args.accountSeedI64Type.toString()),
      args.accountSeedStringType,
      args.accountSeedPubkeyType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
export const instruction16 = (
	args: Instruction16Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction16Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
  args: Omit<Instruction16Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction16Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction17Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close_unsafe` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction17Builder = (
	args: Instruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction17(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close_unsafe` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction17 = (
	args: Instruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction17Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close_unsafe` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction17SendAndConfirm = async (
  args: Omit<Instruction17Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction17Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type SafeInstruction17Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction17Builder = (
	args: SafeInstruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .safeInstruction17(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction17 = (
	args: SafeInstruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    safeInstruction17Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction17SendAndConfirm = async (
  args: Omit<SafeInstruction17Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return safeInstruction17Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, args.signers.account])
    .rpc();
}

export type Instruction18Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction18Builder = (
	args: Instruction18Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction18(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction18 = (
	args: Instruction18Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction18Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction18SendAndConfirm = async (
  args: Omit<Instruction18Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction18Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction19Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction19Builder = (
	args: Instruction19Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, _program.programId);

  return _program
    .methods
    .instruction19(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction19 = (
	args: Instruction19Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction19Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction19SendAndConfirm = async (
  args: Omit<Instruction19Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction19Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction20Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  accountSeedU8Type: number;
  accountSeedU16Type: number;
  accountSeedU32Type: number;
  accountSeedU64Type: bigint;
  accountSeedI8Type: number;
  accountSeedI16Type: number;
  accountSeedI32Type: number;
  accountSeedI64Type: bigint;
  accountSeedStringType: string;
  accountSeedPubkeyType: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
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
export const instruction20Builder = (
	args: Instruction20Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
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
    }, _program.programId);

  return _program
    .methods
    .instruction20(
      args.accountSeedU8Type,
      args.accountSeedU16Type,
      args.accountSeedU32Type,
      new BN(args.accountSeedU64Type.toString()),
      args.accountSeedI8Type,
      args.accountSeedI16Type,
      args.accountSeedI32Type,
      new BN(args.accountSeedI64Type.toString()),
      args.accountSeedStringType,
      args.accountSeedPubkeyType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
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
export const instruction20 = (
	args: Instruction20Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction20Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
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
  args: Omit<Instruction20Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction20Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction21Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-payer` using `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction21Builder = (
	args: Instruction21Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction21(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-payer` using `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction21 = (
	args: Instruction21Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction21Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-payer` using `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction21SendAndConfirm = async (
  args: Omit<Instruction21Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction21Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, args.signers.account])
    .rpc();
}

export type Instruction22Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-payer` using `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction22Builder = (
	args: Instruction22Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction22(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-payer` using `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction22 = (
	args: Instruction22Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction22Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-payer` using `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction22SendAndConfirm = async (
  args: Omit<Instruction22Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction22Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction23Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  input1: number;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-payer` using `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction23Builder = (
	args: Instruction23Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, _program.programId);

  return _program
    .methods
    .instruction23(
      args.input1,
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-payer` using `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction23 = (
	args: Instruction23Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction23Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-payer` using `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction23SendAndConfirm = async (
  args: Omit<Instruction23Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction23Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction24Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
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
  accountSeedPubkeyType: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-payer` using `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
export const instruction24Builder = (
	args: Instruction24Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
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
    }, _program.programId);

  return _program
    .methods
    .instruction24(
      args.input1,
      args.accountSeedU8Type,
      args.accountSeedU16Type,
      args.accountSeedU32Type,
      new BN(args.accountSeedU64Type.toString()),
      args.accountSeedI8Type,
      args.accountSeedI16Type,
      args.accountSeedI32Type,
      new BN(args.accountSeedI64Type.toString()),
      args.accountSeedStringType,
      args.accountSeedPubkeyType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-payer` using `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
export const instruction24 = (
	args: Instruction24Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction24Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-payer` using `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
export const instruction24SendAndConfirm = async (
  args: Omit<Instruction24Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction24Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction25Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-payer` using `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction25Builder = (
	args: Instruction25Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction25(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-payer` using `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction25 = (
	args: Instruction25Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction25Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-payer` using `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction25SendAndConfirm = async (
  args: Omit<Instruction25Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction25Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, args.signers.account])
    .rpc();
}

export type Instruction26Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction26Builder = (
	args: Instruction26Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction26(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction26 = (
	args: Instruction26Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction26Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction26SendAndConfirm = async (
  args: Omit<Instruction26Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction26Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction27Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  input1: number;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction27Builder = (
	args: Instruction27Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, _program.programId);

  return _program
    .methods
    .instruction27(
      args.input1,
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction27 = (
	args: Instruction27Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction27Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction27SendAndConfirm = async (
  args: Omit<Instruction27Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction27Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction28Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
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
  accountSeedPubkeyType: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
export const instruction28Builder = (
	args: Instruction28Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
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
    }, _program.programId);

  return _program
    .methods
    .instruction28(
      args.input1,
      args.accountSeedU8Type,
      args.accountSeedU16Type,
      args.accountSeedU32Type,
      new BN(args.accountSeedU64Type.toString()),
      args.accountSeedI8Type,
      args.accountSeedI16Type,
      args.accountSeedI32Type,
      new BN(args.accountSeedI64Type.toString()),
      args.accountSeedStringType,
      args.accountSeedPubkeyType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
export const instruction28 = (
	args: Instruction28Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction28Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
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
export const instruction28SendAndConfirm = async (
  args: Omit<Instruction28Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction28Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction29Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction29Builder = (
	args: Instruction29Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction29(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction29 = (
	args: Instruction29Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction29Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction29SendAndConfirm = async (
  args: Omit<Instruction29Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction29Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type SafeInstruction29Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction29Builder = (
	args: SafeInstruction29Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .safeInstruction29(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction29 = (
	args: SafeInstruction29Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    safeInstruction29Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction29SendAndConfirm = async (
  args: Omit<SafeInstruction29Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return safeInstruction29Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, args.signers.account])
    .rpc();
}

export type Instruction30Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-receiver` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction30Builder = (
	args: Instruction30Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction30(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-receiver` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction30 = (
	args: Instruction30Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction30Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-receiver` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction30SendAndConfirm = async (
  args: Omit<Instruction30Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction30Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction31Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-receiver` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction31Builder = (
	args: Instruction31Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, _program.programId);

  return _program
    .methods
    .instruction31(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-receiver` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction31 = (
	args: Instruction31Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction31Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-receiver` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction31SendAndConfirm = async (
  args: Omit<Instruction31Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction31Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction32Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  accountSeedU8Type: number;
  accountSeedU16Type: number;
  accountSeedU32Type: number;
  accountSeedU64Type: bigint;
  accountSeedI8Type: number;
  accountSeedI16Type: number;
  accountSeedI32Type: number;
  accountSeedI64Type: bigint;
  accountSeedStringType: string;
  accountSeedPubkeyType: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `rent-receiver` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
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
export const instruction32Builder = (
	args: Instruction32Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
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
    }, _program.programId);

  return _program
    .methods
    .instruction32(
      args.accountSeedU8Type,
      args.accountSeedU16Type,
      args.accountSeedU32Type,
      new BN(args.accountSeedU64Type.toString()),
      args.accountSeedI8Type,
      args.accountSeedI16Type,
      args.accountSeedI32Type,
      new BN(args.accountSeedI64Type.toString()),
      args.accountSeedStringType,
      args.accountSeedPubkeyType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `rent-receiver` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
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
export const instruction32 = (
	args: Instruction32Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction32Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `rent-receiver` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
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
export const instruction32SendAndConfirm = async (
  args: Omit<Instruction32Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction32Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction33Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  u8Type: number;
  u16Type: number;
  u32Type: number;
  u64Type: bigint;
  i8Type: number;
  i16Type: number;
  i32Type: number;
  i64Type: bigint;
  stringType: string;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `non-mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction33Builder = (
	args: Instruction33Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
        u8Type: args.u8Type,
        u16Type: args.u16Type,
        u32Type: args.u32Type,
        u64Type: args.u64Type,
        i8Type: args.i8Type,
        i16Type: args.i16Type,
        i32Type: args.i32Type,
        i64Type: args.i64Type,
        stringType: args.stringType,
        pubkeyType: args.signer1,
    }, _program.programId);

  return _program
    .methods
    .instruction33(
      args.u8Type,
      args.u16Type,
      args.u32Type,
      new BN(args.u64Type.toString()),
      args.i8Type,
      args.i16Type,
      args.i32Type,
      new BN(args.i64Type.toString()),
      args.stringType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `non-mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction33 = (
	args: Instruction33Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction33Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `non-mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction33SendAndConfirm = async (
  args: Omit<Instruction33Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction33Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction34Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  u8Type: number;
  u16Type: number;
  u32Type: number;
  u64Type: bigint;
  i8Type: number;
  i16Type: number;
  i32Type: number;
  i64Type: bigint;
  stringType: string;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction34Builder = (
	args: Instruction34Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
        u8Type: args.u8Type,
        u16Type: args.u16Type,
        u32Type: args.u32Type,
        u64Type: args.u64Type,
        i8Type: args.i8Type,
        i16Type: args.i16Type,
        i32Type: args.i32Type,
        i64Type: args.i64Type,
        stringType: args.stringType,
        pubkeyType: args.signer1,
    }, _program.programId);

  return _program
    .methods
    .instruction34(
      args.u8Type,
      args.u16Type,
      args.u32Type,
      new BN(args.u64Type.toString()),
      args.i8Type,
      args.i16Type,
      args.i32Type,
      new BN(args.i64Type.toString()),
      args.stringType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction34 = (
	args: Instruction34Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction34Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction34SendAndConfirm = async (
  args: Omit<Instruction34Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction34Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction35Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  u8Type: number;
  u16Type: number;
  u32Type: number;
  u64Type: bigint;
  i8Type: number;
  i16Type: number;
  i32Type: number;
  i64Type: bigint;
  stringType: string;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction35Builder = (
	args: Instruction35Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
        u8Type: args.u8Type,
        u16Type: args.u16Type,
        u32Type: args.u32Type,
        u64Type: args.u64Type,
        i8Type: args.i8Type,
        i16Type: args.i16Type,
        i32Type: args.i32Type,
        i64Type: args.i64Type,
        stringType: args.stringType,
        pubkeyType: args.signer1,
    }, _program.programId);

  return _program
    .methods
    .instruction35(
      args.u8Type,
      args.u16Type,
      args.u32Type,
      new BN(args.u64Type.toString()),
      args.i8Type,
      args.i16Type,
      args.i32Type,
      new BN(args.i64Type.toString()),
      args.stringType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction35 = (
	args: Instruction35Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction35Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction35SendAndConfirm = async (
  args: Omit<Instruction35Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction35Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction36Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  u8Type: number;
  u16Type: number;
  u32Type: number;
  u64Type: bigint;
  i8Type: number;
  i16Type: number;
  i32Type: number;
  i64Type: bigint;
  stringType: string;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init_if_needed` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction36Builder = (
	args: Instruction36Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
        u8Type: args.u8Type,
        u16Type: args.u16Type,
        u32Type: args.u32Type,
        u64Type: args.u64Type,
        i8Type: args.i8Type,
        i16Type: args.i16Type,
        i32Type: args.i32Type,
        i64Type: args.i64Type,
        stringType: args.stringType,
        pubkeyType: args.signer1,
    }, _program.programId);

  return _program
    .methods
    .instruction36(
      args.u8Type,
      args.u16Type,
      args.u32Type,
      new BN(args.u64Type.toString()),
      args.i8Type,
      args.i16Type,
      args.i32Type,
      new BN(args.i64Type.toString()),
      args.stringType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init_if_needed` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction36 = (
	args: Instruction36Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction36Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init_if_needed` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction36SendAndConfirm = async (
  args: Omit<Instruction36Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction36Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction37Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  u8Type: number;
  u16Type: number;
  u32Type: number;
  u64Type: bigint;
  i8Type: number;
  i16Type: number;
  i32Type: number;
  i64Type: bigint;
  stringType: string;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction37Builder = (
	args: Instruction37Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {
    const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
        u8Type: args.u8Type,
        u16Type: args.u16Type,
        u32Type: args.u32Type,
        u64Type: args.u64Type,
        i8Type: args.i8Type,
        i16Type: args.i16Type,
        i32Type: args.i32Type,
        i64Type: args.i64Type,
        stringType: args.stringType,
        pubkeyType: args.signer1,
    }, _program.programId);

  return _program
    .methods
    .instruction37(
      args.u8Type,
      args.u16Type,
      args.u32Type,
      new BN(args.u64Type.toString()),
      args.i8Type,
      args.i16Type,
      args.i32Type,
      new BN(args.i64Type.toString()),
      args.stringType,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction37 = (
	args: Instruction37Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction37Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction37SendAndConfirm = async (
  args: Omit<Instruction37Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
    signers: {
      feePayer: web3.Signer,
      signer1: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction37Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer1: args.signers.signer1.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3])
    .rpc();
}

export type Instruction38Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `non-mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 */
export const instruction38Builder = (
	args: Instruction38Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction38(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `non-mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 */
export const instruction38 = (
	args: Instruction38Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction38Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `non-mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 */
export const instruction38SendAndConfirm = async (
  args: Omit<Instruction38Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
    signers: {
      feePayer: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      signer1: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction38Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      signer1: args.signers.signer1.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1])
    .rpc();
}

export type Instruction39Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const instruction39Builder = (
	args: Instruction39Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction39(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const instruction39 = (
	args: Instruction39Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction39Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const instruction39SendAndConfirm = async (
  args: Omit<Instruction39Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
    signers: {
      feePayer: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      signer1: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction39Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      signer1: args.signers.signer1.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1])
    .rpc();
}

export type Instruction40Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const instruction40Builder = (
	args: Instruction40Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction40(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const instruction40 = (
	args: Instruction40Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction40Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const instruction40SendAndConfirm = async (
  args: Omit<Instruction40Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
    signers: {
      feePayer: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      signer1: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction40Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      signer1: args.signers.signer1.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1])
    .rpc();
}

export type Instruction41Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `init_if_needed` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const instruction41Builder = (
	args: Instruction41Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction41(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `init_if_needed` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const instruction41 = (
	args: Instruction41Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction41Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `init_if_needed` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const instruction41SendAndConfirm = async (
  args: Omit<Instruction41Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
    signers: {
      feePayer: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      signer1: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction41Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      signer1: args.signers.signer1.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1])
    .rpc();
}

export type Instruction42Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const instruction42Builder = (
	args: Instruction42Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .instruction42(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const instruction42 = (
	args: Instruction42Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction42Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const instruction42SendAndConfirm = async (
  args: Omit<Instruction42Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
    signers: {
      feePayer: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      signer1: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction42Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      signer1: args.signers.signer1.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1])
    .rpc();
}

export type SafeInstruction42Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close_uncheck` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const safeInstruction42Builder = (
	args: SafeInstruction42Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAdvancedCases, never> => {


  return _program
    .methods
    .safeInstruction42(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close_uncheck` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const safeInstruction42 = (
	args: SafeInstruction42Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    safeInstruction42Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close_uncheck` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const safeInstruction42SendAndConfirm = async (
  args: Omit<SafeInstruction42Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
    signers: {
      feePayer: web3.Signer,
      signer2: web3.Signer,
      signer3: web3.Signer,
      signer1: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return safeInstruction42Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      signer2: args.signers.signer2.publicKey,
      signer3: args.signers.signer3.publicKey,
      signer1: args.signers.signer1.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1])
    .rpc();
}

// Getters

export const getState = (
    publicKey: web3.PublicKey,
    commitment?: web3.Commitment
): Promise<IdlAccounts<ValidateAdvancedCases>["state"]> => _program.account.state.fetch(publicKey, commitment);
