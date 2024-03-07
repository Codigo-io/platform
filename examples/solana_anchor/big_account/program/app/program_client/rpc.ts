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
import { ValidateBigAccountForAnchor } from "../../target/types/validate_big_account_for_anchor";
import idl from "../../target/idl/validate_big_account_for_anchor.json";
import * as pda from "./pda";



let _program: Program<ValidateBigAccountForAnchor>;


export const initializeClient = (
    programId: web3.PublicKey,
    anchorProvider = AnchorProvider.env(),
) => {
    _program = new Program<ValidateBigAccountForAnchor>(
        idl as never,
        programId,
        anchorProvider,
    );


};

export type InitPdaOnContractArgs = {
  feePayer: web3.PublicKey;
  accountSeedIndex: number;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - account_seed_index: {@link number} Auto-generated, from the input "account" for the its seed definition "Array", sets the seed named "index"
 */
export const initPdaOnContractBuilder = (
	args: InitPdaOnContractArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBigAccountForAnchor, never> => {
    const [accountPubkey] = pda.deriveArrayPDA({
        index: args.accountSeedIndex,
    }, _program.programId);

  return _program
    .methods
    .initPdaOnContract(
      args.accountSeedIndex,
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
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - account_seed_index: {@link number} Auto-generated, from the input "account" for the its seed definition "Array", sets the seed named "index"
 */
export const initPdaOnContract = (
	args: InitPdaOnContractArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    initPdaOnContractBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - account_seed_index: {@link number} Auto-generated, from the input "account" for the its seed definition "Array", sets the seed named "index"
 */
export const initPdaOnContractSendAndConfirm = async (
  args: Omit<InitPdaOnContractArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return initPdaOnContractBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type InitOnContractArgs = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initOnContractBuilder = (
	args: InitOnContractArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBigAccountForAnchor, never> => {


  return _program
    .methods
    .initOnContract(

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
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initOnContract = (
	args: InitOnContractArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    initOnContractBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initOnContractSendAndConfirm = async (
  args: Omit<InitOnContractArgs, "feePayer" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return initOnContractBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export const createAccountAccountForInitOnClient = async (newAccountPubkey: web3.PublicKey, fromPubkey: web3.PublicKey): Promise<web3.TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _program.provider.connection.getMinimumBalanceForRentExemption(space);

    return web3.SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: _program.programId,
    });
}

export type InitOnClientArgs = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
export const initOnClientBuilder = (
	args: InitOnClientArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBigAccountForAnchor, never> => {


  return _program
    .methods
    .initOnClient(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
export const initOnClient = (
	args: InitOnClientArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    initOnClientBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
export const initOnClientSendAndConfirm = async (
  args: Omit<InitOnClientArgs, "feePayer" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];

  preInstructions.push(await createAccountAccountForInitOnClient(
    args.signers.account.publicKey, 
    args.signers.feePayer.publicKey
  ));

  return initOnClientBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export const createAccountAccountForInitOnClientWithCustomOwner = async (newAccountPubkey: web3.PublicKey, fromPubkey: web3.PublicKey): Promise<web3.TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _program.provider.connection.getMinimumBalanceForRentExemption(space);

    return web3.SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: new web3.PublicKey("FR5N3j1fDE5mUYd2Gi9hEWDt3SSt6YmcBYSPmnowmCDk"),
    });
}

export type InitOnClientWithCustomOwnerArgs = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
export const initOnClientWithCustomOwnerBuilder = (
	args: InitOnClientWithCustomOwnerArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBigAccountForAnchor, never> => {


  return _program
    .methods
    .initOnClientWithCustomOwner(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
export const initOnClientWithCustomOwner = (
	args: InitOnClientWithCustomOwnerArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    initOnClientWithCustomOwnerBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
export const initOnClientWithCustomOwnerSendAndConfirm = async (
  args: Omit<InitOnClientWithCustomOwnerArgs, "feePayer" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];

  preInstructions.push(await createAccountAccountForInitOnClientWithCustomOwner(
    args.signers.account.publicKey, 
    args.signers.feePayer.publicKey
  ));

  return initOnClientWithCustomOwnerBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export const createAccountAccountForInitAccountInfoOnClient = async (newAccountPubkey: web3.PublicKey, fromPubkey: web3.PublicKey): Promise<web3.TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _program.provider.connection.getMinimumBalanceForRentExemption(space);

    return web3.SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: _program.programId,
    });
}

export type InitAccountInfoOnClientArgs = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
export const initAccountInfoOnClientBuilder = (
	args: InitAccountInfoOnClientArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBigAccountForAnchor, never> => {


  return _program
    .methods
    .initAccountInfoOnClient(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
export const initAccountInfoOnClient = (
	args: InitAccountInfoOnClientArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    initAccountInfoOnClientBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
export const initAccountInfoOnClientSendAndConfirm = async (
  args: Omit<InitAccountInfoOnClientArgs, "feePayer" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];

  preInstructions.push(await createAccountAccountForInitAccountInfoOnClient(
    args.signers.account.publicKey, 
    args.signers.feePayer.publicKey
  ));

  return initAccountInfoOnClientBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export const createAccountAccountForInitAccountInfoOnClientWithCustomOwner = async (newAccountPubkey: web3.PublicKey, fromPubkey: web3.PublicKey): Promise<web3.TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _program.provider.connection.getMinimumBalanceForRentExemption(space);

    return web3.SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: new web3.PublicKey("FR5N3j1fDE5mUYd2Gi9hEWDt3SSt6YmcBYSPmnowmCDk"),
    });
}

export type InitAccountInfoOnClientWithCustomOwnerArgs = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
export const initAccountInfoOnClientWithCustomOwnerBuilder = (
	args: InitAccountInfoOnClientWithCustomOwnerArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBigAccountForAnchor, never> => {


  return _program
    .methods
    .initAccountInfoOnClientWithCustomOwner(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
export const initAccountInfoOnClientWithCustomOwner = (
	args: InitAccountInfoOnClientWithCustomOwnerArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    initAccountInfoOnClientWithCustomOwnerBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
export const initAccountInfoOnClientWithCustomOwnerSendAndConfirm = async (
  args: Omit<InitAccountInfoOnClientWithCustomOwnerArgs, "feePayer" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];

  preInstructions.push(await createAccountAccountForInitAccountInfoOnClientWithCustomOwner(
    args.signers.account.publicKey, 
    args.signers.feePayer.publicKey
  ));

  return initAccountInfoOnClientWithCustomOwnerBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export type InitAccountInfoOnContractArgs = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initAccountInfoOnContractBuilder = (
	args: InitAccountInfoOnContractArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBigAccountForAnchor, never> => {


  return _program
    .methods
    .initAccountInfoOnContract(

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
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initAccountInfoOnContract = (
	args: InitAccountInfoOnContractArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    initAccountInfoOnContractBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initAccountInfoOnContractSendAndConfirm = async (
  args: Omit<InitAccountInfoOnContractArgs, "feePayer" | "account"> & {
    signers: {
      feePayer: web3.Signer,
      account: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return initAccountInfoOnContractBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account])
    .rpc();
}

export const createAccountAccountForInitTwoBigAccountOnClient = async (newAccountPubkey: web3.PublicKey, fromPubkey: web3.PublicKey): Promise<web3.TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _program.provider.connection.getMinimumBalanceForRentExemption(space);

    return web3.SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: _program.programId,
    });
}

export const createAccountInfoAccountForInitTwoBigAccountOnClient = async (newAccountPubkey: web3.PublicKey, fromPubkey: web3.PublicKey): Promise<web3.TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _program.provider.connection.getMinimumBalanceForRentExemption(space);

    return web3.SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: _program.programId,
    });
}

export type InitTwoBigAccountOnClientArgs = {
  feePayer: web3.PublicKey;
  account: web3.PublicKey;
  accountInfo: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 * 2. `[signer]` account_info: {@link PublicKey} 
 */
export const initTwoBigAccountOnClientBuilder = (
	args: InitTwoBigAccountOnClientArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateBigAccountForAnchor, never> => {


  return _program
    .methods
    .initTwoBigAccountOnClient(

    )
    .accounts({
      feePayer: args.feePayer,
      account: args.account,
      accountInfo: args.accountInfo,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 * 2. `[signer]` account_info: {@link PublicKey} 
 */
export const initTwoBigAccountOnClient = (
	args: InitTwoBigAccountOnClientArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    initTwoBigAccountOnClientBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 * 2. `[signer]` account_info: {@link PublicKey} 
 */
export const initTwoBigAccountOnClientSendAndConfirm = async (
  args: Omit<InitTwoBigAccountOnClientArgs, "feePayer" | "account" | "accountInfo"> & {
    signers: {
      feePayer: web3.Signer,
      account: web3.Signer,
      accountInfo: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];

  preInstructions.push(await createAccountAccountForInitTwoBigAccountOnClient(
    args.signers.account.publicKey, 
    args.signers.feePayer.publicKey
  ));



  if (!(await _program.provider.connection.getAccountInfo(args.signers.accountInfo.publicKey))) {
    preInstructions.push(await createAccountInfoAccountForInitTwoBigAccountOnClient(
      args.signers.accountInfo.publicKey, 
      args.signers.feePayer.publicKey
    ));
  }

  return initTwoBigAccountOnClientBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      account: args.signers.account.publicKey,
      accountInfo: args.signers.accountInfo.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.account, args.signers.accountInfo])
    .rpc();
}

// Getters

export const getAccount10Kb = (
    publicKey: web3.PublicKey,
    commitment?: web3.Commitment
): Promise<IdlAccounts<ValidateBigAccountForAnchor>["account10Kb"]> => _program.account.account10Kb.fetch(publicKey, commitment);

export const getAccount10Mib = (
    publicKey: web3.PublicKey,
    commitment?: web3.Commitment
): Promise<IdlAccounts<ValidateBigAccountForAnchor>["account10Mib"]> => _program.account.account10Mib.fetch(publicKey, commitment);
