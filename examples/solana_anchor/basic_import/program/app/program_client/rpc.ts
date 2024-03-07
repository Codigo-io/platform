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
import { ValidateImports } from "../../target/types/validate_imports";
import idl from "../../target/idl/validate_imports.json";
import * as pda from "./pda";

import { ValidateAccounts } from "../../target/types/validate_accounts";
import idlValidateAccounts from "../../target/idl/validate_accounts.json";

import { ValidateAdvancedCases } from "../../target/types/validate_advanced_cases";
import idlValidateAdvancedCases from "../../target/idl/validate_advanced_cases.json";

import { ValidateDataTypes } from "../../target/types/validate_data_types";
import idlValidateDataTypes from "../../target/idl/validate_data_types.json";



let _program: Program<ValidateImports>;
let _programValidateAccounts: Program<ValidateAccounts>;
let _programValidateAdvancedCases: Program<ValidateAdvancedCases>;
let _programValidateDataTypes: Program<ValidateDataTypes>;


export const initializeClient = (
    programId: web3.PublicKey,
    anchorProvider = AnchorProvider.env(),
) => {
    _program = new Program<ValidateImports>(
        idl as never,
        programId,
        anchorProvider,
    );

    _programValidateAccounts = new Program<ValidateAccounts>(
        idlValidateAccounts as never,
        new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
        anchorProvider,
    );
    _programValidateAdvancedCases = new Program<ValidateAdvancedCases>(
        idlValidateAdvancedCases as never,
        new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
        anchorProvider,
    );
    _programValidateDataTypes = new Program<ValidateDataTypes>(
        idlValidateDataTypes as never,
        new web3.PublicKey("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY"),
        anchorProvider,
    );

};

export type Instruction1Args = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_accounts_ref.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction1Builder = (
	args: Instruction1Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction1(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction1 = (
	args: Instruction1Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction1Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_accounts_ref.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction2Builder = (
	args: Instruction2Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAccountsPDAs.deriveStaticPdaPDA(new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction2(

    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction2 = (
	args: Instruction2Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction2Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_accounts_ref.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3Builder = (
	args: Instruction3Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAccountsPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction3(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3 = (
	args: Instruction3Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction3Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
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
 * Reference `validate_accounts_ref.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction4Builder = (
	args: Instruction4Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction4(
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
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction4 = (
	args: Instruction4Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction4Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction5Builder = (
	args: Instruction5Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction5(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction5 = (
	args: Instruction5Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction5Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction6Builder = (
	args: Instruction6Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAccountsPDAs.deriveStaticPdaPDA(new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction6(

    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction6 = (
	args: Instruction6Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction6Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction7Builder = (
	args: Instruction7Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAccountsPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction7(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

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
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_accounts_ref.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction9Builder = (
	args: Instruction9Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction9(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction9 = (
	args: Instruction9Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction9Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_accounts_ref.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction10Builder = (
	args: Instruction10Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAccountsPDAs.deriveStaticPdaPDA(new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction10(

    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction10 = (
	args: Instruction10Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction10Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_accounts_ref.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11Builder = (
	args: Instruction11Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAccountsPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction11(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11 = (
	args: Instruction11Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction11Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
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
 * Reference `validate_accounts_ref.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction12Builder = (
	args: Instruction12Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction12(
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
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction12 = (
	args: Instruction12Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction12Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_accounts_ref.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction13Builder = (
	args: Instruction13Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction13(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction13 = (
	args: Instruction13Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction13Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_accounts_ref.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction14Builder = (
	args: Instruction14Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAccountsPDAs.deriveStaticPdaPDA(new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction14(

    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction14 = (
	args: Instruction14Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction14Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_accounts_ref.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15Builder = (
	args: Instruction15Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAccountsPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction15(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15 = (
	args: Instruction15Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction15Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
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
 * Reference `validate_accounts_ref.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction16Builder = (
	args: Instruction16Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction16(
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
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction16 = (
	args: Instruction16Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction16Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction17Builder = (
	args: Instruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction17(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction17 = (
	args: Instruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction17Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const safeInstruction17Builder = (
	args: SafeInstruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .safeInstruction17(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const safeInstruction17 = (
	args: SafeInstruction17Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    safeInstruction17Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction18Builder = (
	args: Instruction18Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAccountsPDAs.deriveStaticPdaPDA(new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction18(

    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction18 = (
	args: Instruction18Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction18Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_accounts_ref.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction19Builder = (
	args: Instruction19Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAccountsPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

  return _program
    .methods
    .instruction19(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

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
      validateAccountsV000: new web3.PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_accounts_ref.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
 * Reference `validate_accounts_ref.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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

export type Instruction0Args = {
  feePayer: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction0_only_method_with_name`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction0Builder = (
	args: Instruction0Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction0(

    )
    .accounts({
      feePayer: args.feePayer,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction0_only_method_with_name`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction0 = (
	args: Instruction0Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction0Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction0_only_method_with_name`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction0SendAndConfirm = async (
  args: Omit<Instruction0Args, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction0Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type Instruction21Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction21Builder = (
	args: Instruction21Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction21(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction21 = (
	args: Instruction21Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction21Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction21SendAndConfirm = async (
  args: Omit<Instruction21Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction21Builder({
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

export type Instruction22Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction22Builder = (
	args: Instruction22Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction22(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction22 = (
	args: Instruction22Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction22Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction23Builder = (
	args: Instruction23Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction23(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction23 = (
	args: Instruction23Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction23Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
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
 * Reference `validate_advanced_cases.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction24Builder = (
	args: Instruction24Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction24(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction24 = (
	args: Instruction24Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction24Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction25Builder = (
	args: Instruction25Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction25(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction25 = (
	args: Instruction25Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction25Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction25SendAndConfirm = async (
  args: Omit<Instruction25Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction25Builder({
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

export type Instruction26Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction26Builder = (
	args: Instruction26Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction26(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction26 = (
	args: Instruction26Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction26Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction27Builder = (
	args: Instruction27Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction27(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction27 = (
	args: Instruction27Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction27Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
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
 * Reference `validate_advanced_cases.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction28Builder = (
	args: Instruction28Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction28(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction28 = (
	args: Instruction28Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction28Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
 * Reference `validate_advanced_cases.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction29Builder = (
	args: Instruction29Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


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
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction29 = (
	args: Instruction29Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction29Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction29SendAndConfirm = async (
  args: Omit<Instruction29Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


  return instruction29Builder({
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
 * Reference `validate_advanced_cases.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction30Builder = (
	args: Instruction30Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

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
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction30 = (
	args: Instruction30Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction30Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
 * Reference `validate_advanced_cases.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction31Builder = (
	args: Instruction31Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

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
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
 * Reference `validate_advanced_cases.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
 * Reference `validate_advanced_cases.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

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
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
 * Reference `validate_advanced_cases.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction33Builder = (
	args: Instruction33Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction33(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction33 = (
	args: Instruction33Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction33Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction33SendAndConfirm = async (
  args: Omit<Instruction33Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


  return instruction33Builder({
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

export type Instruction34Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction34Builder = (
	args: Instruction34Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction34(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction34 = (
	args: Instruction34Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction34Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction35Builder = (
	args: Instruction35Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction35(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction35 = (
	args: Instruction35Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction35Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
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
 * Reference `validate_advanced_cases.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction36Builder = (
	args: Instruction36Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction36(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction36 = (
	args: Instruction36Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction36Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction37Builder = (
	args: Instruction37Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction37(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction37 = (
	args: Instruction37Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction37Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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

export type SafeInstruction37Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction37Builder = (
	args: SafeInstruction37Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .safeInstruction37(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction37 = (
	args: SafeInstruction37Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    safeInstruction37Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction37SendAndConfirm = async (
  args: Omit<SafeInstruction37Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


  return safeInstruction37Builder({
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

export type Instruction38Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction38Builder = (
	args: Instruction38Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction38(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction38 = (
	args: Instruction38Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction38Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction38SendAndConfirm = async (
  args: Omit<Instruction38Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction38Builder({
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

export type Instruction39Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction39Builder = (
	args: Instruction39Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction39(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction39 = (
	args: Instruction39Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction39Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction39SendAndConfirm = async (
  args: Omit<Instruction39Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction39Builder({
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

export type Instruction40Args = {
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
 * Reference `validate_advanced_cases.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction40Builder = (
	args: Instruction40Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction40(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction40 = (
	args: Instruction40Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction40Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction40SendAndConfirm = async (
  args: Omit<Instruction40Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction40Builder({
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

export type Instruction41Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction21`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction41Builder = (
	args: Instruction41Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction41(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction21`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction41 = (
	args: Instruction41Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction41Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction21`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction41SendAndConfirm = async (
  args: Omit<Instruction41Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


  return instruction41Builder({
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

export type Instruction42Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction22`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction42Builder = (
	args: Instruction42Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction42(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction22`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction42 = (
	args: Instruction42Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction42Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction22`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction42SendAndConfirm = async (
  args: Omit<Instruction42Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction42Builder({
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

export type Instruction43Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction23`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction43Builder = (
	args: Instruction43Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction43(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction23`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction43 = (
	args: Instruction43Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction43Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction23`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction43SendAndConfirm = async (
  args: Omit<Instruction43Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction43Builder({
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

export type Instruction44Args = {
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
 * Reference `validate_advanced_cases.instruction24`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction44Builder = (
	args: Instruction44Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction44(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction24`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction44 = (
	args: Instruction44Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction44Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction24`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction44SendAndConfirm = async (
  args: Omit<Instruction44Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction44Builder({
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

export type Instruction45Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction25`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction45Builder = (
	args: Instruction45Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction45(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction25`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction45 = (
	args: Instruction45Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction45Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction25`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction45SendAndConfirm = async (
  args: Omit<Instruction45Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


  return instruction45Builder({
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

export type Instruction46Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction26`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction46Builder = (
	args: Instruction46Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction46(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction26`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction46 = (
	args: Instruction46Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction46Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction26`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction46SendAndConfirm = async (
  args: Omit<Instruction46Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction46Builder({
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

export type Instruction47Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction27`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction47Builder = (
	args: Instruction47Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction47(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction27`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction47 = (
	args: Instruction47Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction47Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction27`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction47SendAndConfirm = async (
  args: Omit<Instruction47Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction47Builder({
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

export type Instruction48Args = {
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
 * Reference `validate_advanced_cases.instruction28`, where caller maps with a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction48Builder = (
	args: Instruction48Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction48(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction28`, where caller maps with a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction48 = (
	args: Instruction48Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction48Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction28`, where caller maps with a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction48SendAndConfirm = async (
  args: Omit<Instruction48Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction48Builder({
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

export type Instruction49Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction49Builder = (
	args: Instruction49Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction49(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction49 = (
	args: Instruction49Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction49Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction49SendAndConfirm = async (
  args: Omit<Instruction49Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction49Builder({
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

export type SafeInstruction49Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.safe_instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction49Builder = (
	args: SafeInstruction49Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .safeInstruction49(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: args.account,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.safe_instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction49 = (
	args: SafeInstruction49Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    safeInstruction49Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.safe_instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction49SendAndConfirm = async (
  args: Omit<SafeInstruction49Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


  return safeInstruction49Builder({
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

export type Instruction50Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction30`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction50Builder = (
	args: Instruction50Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction50(

    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction30`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction50 = (
	args: Instruction50Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction50Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction30`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction50SendAndConfirm = async (
  args: Omit<Instruction50Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction50Builder({
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

export type Instruction51Args = {
  feePayer: web3.PublicKey;
  signer1: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  accountSeedDynamic: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction31`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction51Builder = (
	args: Instruction51Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
        dynamic: args.accountSeedDynamic,
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction51(
      args.accountSeedDynamic,
    )
    .accounts({
      feePayer: args.feePayer,
      signer1: args.signer1,
      signer2: args.signer2,
      signer3: args.signer3,
      account: accountPubkey,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction31`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction51 = (
	args: Instruction51Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction51Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction31`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction51SendAndConfirm = async (
  args: Omit<Instruction51Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction51Builder({
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

export type Instruction52Args = {
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
 * Reference `validate_advanced_cases.instruction32`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction52Builder = (
	args: Instruction52Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction52(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction32`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction52 = (
	args: Instruction52Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction52Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction32`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction52SendAndConfirm = async (
  args: Omit<Instruction52Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction52Builder({
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

export type Instruction53Args = {
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
 * Reference `validate_advanced_cases.instruction33`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 */
export const instruction53Builder = (
	args: Instruction53Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction53(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction33`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 */
export const instruction53 = (
	args: Instruction53Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction53Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction33`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 */
export const instruction53SendAndConfirm = async (
  args: Omit<Instruction53Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction53Builder({
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

export type Instruction54Args = {
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
 * Reference `validate_advanced_cases.instruction34`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 */
export const instruction54Builder = (
	args: Instruction54Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction54(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction34`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 */
export const instruction54 = (
	args: Instruction54Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction54Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction34`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 */
export const instruction54SendAndConfirm = async (
  args: Omit<Instruction54Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction54Builder({
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

export type Instruction55Args = {
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
 * Reference `validate_advanced_cases.instruction35`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 */
export const instruction55Builder = (
	args: Instruction55Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction55(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction35`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 */
export const instruction55 = (
	args: Instruction55Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction55Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction35`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 */
export const instruction55SendAndConfirm = async (
  args: Omit<Instruction55Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction55Builder({
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

export type Instruction56Args = {
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
 * Reference `validate_advanced_cases.instruction36`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 */
export const instruction56Builder = (
	args: Instruction56Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction56(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction36`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 */
export const instruction56 = (
	args: Instruction56Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction56Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction36`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 */
export const instruction56SendAndConfirm = async (
  args: Omit<Instruction56Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction56Builder({
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

export type Instruction57Args = {
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
 * Reference `validate_advanced_cases.instruction37`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 */
export const instruction57Builder = (
	args: Instruction57Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

  return _program
    .methods
    .instruction57(
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
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction37`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 */
export const instruction57 = (
	args: Instruction57Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction57Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction37`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 */
export const instruction57SendAndConfirm = async (
  args: Omit<Instruction57Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


  return instruction57Builder({
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

export type Instruction58Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction38`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction58Builder = (
	args: Instruction58Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction58(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction38`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction58 = (
	args: Instruction58Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction58Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction38`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction58SendAndConfirm = async (
  args: Omit<Instruction58Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


  return instruction58Builder({
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

export type Instruction59Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction39`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction59Builder = (
	args: Instruction59Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction59(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction39`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction59 = (
	args: Instruction59Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction59Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction39`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction59SendAndConfirm = async (
  args: Omit<Instruction59Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


  return instruction59Builder({
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

export type Instruction60Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction40`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction60Builder = (
	args: Instruction60Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction60(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction40`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction60 = (
	args: Instruction60Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction60Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction40`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction60SendAndConfirm = async (
  args: Omit<Instruction60Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


  return instruction60Builder({
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

export type Instruction61Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction41`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction61Builder = (
	args: Instruction61Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction61(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction41`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction61 = (
	args: Instruction61Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction61Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction41`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction61SendAndConfirm = async (
  args: Omit<Instruction61Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


  return instruction61Builder({
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

export type Instruction62Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction62Builder = (
	args: Instruction62Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction62(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction62 = (
	args: Instruction62Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction62Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction62SendAndConfirm = async (
  args: Omit<Instruction62Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


  return instruction62Builder({
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

export type SafeInstruction62Args = {
  feePayer: web3.PublicKey;
  signer2: web3.PublicKey;
  signer3: web3.PublicKey;
  signer1: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_advanced_cases.safe_instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction62Builder = (
	args: SafeInstruction62Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .safeInstruction62(

    )
    .accounts({
      feePayer: args.feePayer,
      signer2: args.signer2,
      signer3: args.signer3,
      signer1: args.signer1,
      validateAdvancedCasesV000: new web3.PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_advanced_cases.safe_instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction62 = (
	args: SafeInstruction62Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    safeInstruction62Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_advanced_cases.safe_instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction62SendAndConfirm = async (
  args: Omit<SafeInstruction62Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


  return safeInstruction62Builder({
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

export type Instruction63Args = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
  accountInfoType: web3.PublicKey;
  accountInfoTypeMut: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_data_types.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction63Builder = (
	args: Instruction63Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {


  return _program
    .methods
    .instruction63(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      accountInfoType: args.accountInfoType,
      accountInfoTypeMut: args.accountInfoTypeMut,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateDataTypesV000: new web3.PublicKey("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_data_types.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction63 = (
	args: Instruction63Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction63Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_data_types.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction63SendAndConfirm = async (
  args: Omit<Instruction63Args, "feePayer" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction63Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export type Instruction64Args = {
  feePayer: web3.PublicKey;
  accountInfoType: web3.PublicKey;
  accountInfoTypeMut: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Reference `validate_data_types.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction64Builder = (
	args: Instruction64Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateImports, never> => {
  const [accountPubkey] = pda.ValidateDataTypesPDAs.deriveMasterTypesPdaPDA(new web3.PublicKey("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY"));

  return _program
    .methods
    .instruction64(

    )
    .accounts({
      feePayer: args.feePayer,
      account: accountPubkey,
      accountInfoType: args.accountInfoType,
      accountInfoTypeMut: args.accountInfoTypeMut,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
      validateDataTypesV000: new web3.PublicKey("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Reference `validate_data_types.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction64 = (
	args: Instruction64Args,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    instruction64Builder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Reference `validate_data_types.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction64SendAndConfirm = async (
  args: Omit<Instruction64Args, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return instruction64Builder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

// Getters

export module ValidateAccountsGetters {
    export const getState = (
        publicKey: web3.PublicKey,
        commitment?: web3.Commitment
    ): Promise<IdlAccounts<ValidateAccounts>["state"]> => _programValidateAccounts.account.state.fetch(publicKey, commitment);
}

export module ValidateAdvancedCasesGetters {
    export const getState = (
        publicKey: web3.PublicKey,
        commitment?: web3.Commitment
    ): Promise<IdlAccounts<ValidateAdvancedCases>["state"]> => _programValidateAdvancedCases.account.state.fetch(publicKey, commitment);
}

export module ValidateDataTypesGetters {
    export const getState = (
        publicKey: web3.PublicKey,
        commitment?: web3.Commitment
    ): Promise<IdlAccounts<ValidateDataTypes>["state"]> => _programValidateDataTypes.account.state.fetch(publicKey, commitment);
}

