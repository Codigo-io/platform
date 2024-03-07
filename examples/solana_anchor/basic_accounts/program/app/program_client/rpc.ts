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
import { ValidateAccounts } from "../../target/types/validate_accounts";
import idl from "../../target/idl/validate_accounts.json";
import * as pda from "./pda";



let _program: Program<ValidateAccounts>;


export const initializeClient = (
    programId: web3.PublicKey,
    anchorProvider = AnchorProvider.env(),
) => {
    _program = new Program<ValidateAccounts>(
        idl as never,
        programId,
        anchorProvider,
    );


};

export type Instruction1Args = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction1Builder = (
	args: Instruction1Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {


  return _program
    .methods
    .instruction1(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction1Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction2Args = {
  feePayer: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction2Builder = (
	args: Instruction2Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction2(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
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

export type Instruction3Args = {
  feePayer: web3.PublicKey;
  input1: number;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
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
export const instruction3Builder = (
	args: Instruction3Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
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
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction3 = (
	args: Instruction3Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction3Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction3Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction4Args = {
  feePayer: web3.PublicKey;
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
export const instruction4Builder = (
	args: Instruction4Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
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
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction4 = (
	args: Instruction4Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction4Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction4Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction5Args = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `non-mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
export const instruction5Builder = (
	args: Instruction5Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {


  return _program
    .methods
    .instruction5(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `non-mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
export const instruction5 = (
	args: Instruction5Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction5Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `non-mut` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
export const instruction5SendAndConfirm = async (
  args: Omit<Instruction5Args, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction5Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction6Args = {
  feePayer: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `non-mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
export const instruction6Builder = (
	args: Instruction6Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction6(

    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `non-mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
export const instruction6 = (
	args: Instruction6Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction6Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `non-mut` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 */
export const instruction6SendAndConfirm = async (
  args: Omit<Instruction6Args, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction6Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction7Args = {
  feePayer: web3.PublicKey;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `non-mut` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction7Builder = (
	args: Instruction7Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
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
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `non-mut` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction7Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction8Args = {
  feePayer: web3.PublicKey;
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
export const instruction8Builder = (
	args: Instruction8Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
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
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction8 = (
	args: Instruction8Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction8Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction8Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction9Args = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
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
export const instruction9Builder = (
	args: Instruction9Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {


  return _program
    .methods
    .instruction9(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction9 = (
	args: Instruction9Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction9Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction9Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export type Instruction10Args = {
  feePayer: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
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
export const instruction10Builder = (
	args: Instruction10Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction10(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction10 = (
	args: Instruction10Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction10Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction10Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction11Args = {
  feePayer: web3.PublicKey;
  input1: number;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
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
export const instruction11Builder = (
	args: Instruction11Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
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
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction11 = (
	args: Instruction11Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction11Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction11Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction12Args = {
  feePayer: web3.PublicKey;
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
export const instruction12Builder = (
	args: Instruction12Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
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
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction12 = (
	args: Instruction12Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction12Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction12Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction13Args = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
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
export const instruction13Builder = (
	args: Instruction13Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {


  return _program
    .methods
    .instruction13(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction13 = (
	args: Instruction13Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction13Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction13Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export type Instruction14Args = {
  feePayer: web3.PublicKey;
  input1: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
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
export const instruction14Builder = (
	args: Instruction14Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction14(
      args.input1,
    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction14 = (
	args: Instruction14Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction14Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction14Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction15Args = {
  feePayer: web3.PublicKey;
  input1: number;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
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
export const instruction15Builder = (
	args: Instruction15Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
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
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction15 = (
	args: Instruction15Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction15Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction15Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction16Args = {
  feePayer: web3.PublicKey;
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
export const instruction16Builder = (
	args: Instruction16Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
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
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction16 = (
	args: Instruction16Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction16Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction16Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction17Args = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close_uncheck` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
export const instruction17Builder = (
	args: Instruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {


  return _program
    .methods
    .instruction17(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close_uncheck` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
export const instruction17 = (
	args: Instruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction17Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close_uncheck` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
export const instruction17SendAndConfirm = async (
  args: Omit<Instruction17Args, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction17Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type SafeInstruction17Args = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction17Builder = (
	args: SafeInstruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {


  return _program
    .methods
    .safeInstruction17(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction17 = (
	args: SafeInstruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    safeInstruction17Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close` using Non-PDA account that has one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction17SendAndConfirm = async (
  args: Omit<SafeInstruction17Args, "feePayer" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return safeInstruction17Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export type Instruction18Args = {
  feePayer: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
export const instruction18Builder = (
	args: Instruction18Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
  const [accountPubkey] = pda.deriveStaticPdaPDA(_program.programId);

  return _program
    .methods
    .instruction18(

    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
export const instruction18 = (
	args: Instruction18Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction18Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Test `close` using PDA account that has one static seed and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 */
export const instruction18SendAndConfirm = async (
  args: Omit<Instruction18Args, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction18Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction19Args = {
  feePayer: web3.PublicKey;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Test `close` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction19Builder = (
	args: Instruction19Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
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
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Test `close` using PDA account that has one static and dynamic seed, and one field
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction19Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction20Args = {
  feePayer: web3.PublicKey;
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
export const instruction20Builder = (
	args: Instruction20Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateAccounts, never> => {
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
      account: accountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
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
export const instruction20 = (
	args: Instruction20Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction20Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
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
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction20Builder({
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
): Promise<IdlAccounts<ValidateAccounts>["state"]> => _program.account.state.fetch(publicKey, commitment);
