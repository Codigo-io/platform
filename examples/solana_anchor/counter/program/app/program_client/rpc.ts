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
import { ValidateCounter } from "../../target/types/validate_counter";
import idl from "../../target/idl/validate_counter.json";
import * as pda from "./pda";



let _program: Program<ValidateCounter>;


export const initializeClient = (
    programId: web3.PublicKey,
    anchorProvider = AnchorProvider.env(),
) => {
    _program = new Program<ValidateCounter>(
        idl as never,
        programId,
        anchorProvider,
    );


};

export type InitCounterArgs = {
  feePayer: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` counter: {@link Counter} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initCounterBuilder = (
	args: InitCounterArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateCounter, never> => {
    const [counterPubkey] = pda.deriveCounterPDA({
        user: args.feePayer,
    }, _program.programId);

  return _program
    .methods
    .initCounter(

    )
    .accounts({
      feePayer: args.feePayer,
      counter: counterPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` counter: {@link Counter} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initCounter = (
	args: InitCounterArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    initCounterBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` counter: {@link Counter} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initCounterSendAndConfirm = async (
  args: Omit<InitCounterArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return initCounterBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type IncrementArgs = {
  feePayer: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Increment counter account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` counter: {@link Counter} 
 */
export const incrementBuilder = (
	args: IncrementArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateCounter, never> => {
    const [counterPubkey] = pda.deriveCounterPDA({
        user: args.feePayer,
    }, _program.programId);

  return _program
    .methods
    .increment(

    )
    .accounts({
      feePayer: args.feePayer,
      counter: counterPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Increment counter account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` counter: {@link Counter} 
 */
export const increment = (
	args: IncrementArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    incrementBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Increment counter account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` counter: {@link Counter} 
 */
export const incrementSendAndConfirm = async (
  args: Omit<IncrementArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return incrementBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type InitIfNeededAndIncrementArgs = {
  feePayer: web3.PublicKey;
  rentPayer: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Init if needed, and then increment counter account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` rent_payer: {@link PublicKey} 
 * 2. `[writable]` counter: {@link Counter} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initIfNeededAndIncrementBuilder = (
	args: InitIfNeededAndIncrementArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateCounter, never> => {
    const [counterPubkey] = pda.deriveCounterPDA({
        user: args.rentPayer,
    }, _program.programId);

  return _program
    .methods
    .initIfNeededAndIncrement(

    )
    .accounts({
      feePayer: args.feePayer,
      rentPayer: args.rentPayer,
      counter: counterPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Init if needed, and then increment counter account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` rent_payer: {@link PublicKey} 
 * 2. `[writable]` counter: {@link Counter} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initIfNeededAndIncrement = (
	args: InitIfNeededAndIncrementArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    initIfNeededAndIncrementBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Init if needed, and then increment counter account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` rent_payer: {@link PublicKey} 
 * 2. `[writable]` counter: {@link Counter} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initIfNeededAndIncrementSendAndConfirm = async (
  args: Omit<InitIfNeededAndIncrementArgs, "feePayer" | "rentPayer"> & {
    signers: {
      feePayer: web3.Signer,
      rentPayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return initIfNeededAndIncrementBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      rentPayer: args.signers.rentPayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.rentPayer])
    .rpc();
}

export type CloseCounterArgs = {
  feePayer: web3.PublicKey;
  rentReceiver: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * close the counter account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` rent_receiver: {@link PublicKey} 
 * 2. `[writable]` counter: {@link Counter} 
 */
export const closeCounterBuilder = (
	args: CloseCounterArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ValidateCounter, never> => {
    const [counterPubkey] = pda.deriveCounterPDA({
        user: args.rentReceiver,
    }, _program.programId);

  return _program
    .methods
    .closeCounter(

    )
    .accounts({
      feePayer: args.feePayer,
      rentReceiver: args.rentReceiver,
      counter: counterPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * close the counter account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` rent_receiver: {@link PublicKey} 
 * 2. `[writable]` counter: {@link Counter} 
 */
export const closeCounter = (
	args: CloseCounterArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    closeCounterBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * close the counter account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` rent_receiver: {@link PublicKey} 
 * 2. `[writable]` counter: {@link Counter} 
 */
export const closeCounterSendAndConfirm = async (
  args: Omit<CloseCounterArgs, "feePayer" | "rentReceiver"> & {
    signers: {
      feePayer: web3.Signer,
      rentReceiver: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return closeCounterBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
      rentReceiver: args.signers.rentReceiver.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer, args.signers.rentReceiver])
    .rpc();
}

// Getters

export const getCounter = (
    publicKey: web3.PublicKey,
    commitment?: web3.Commitment
): Promise<IdlAccounts<ValidateCounter>["counter"]> => _program.account.counter.fetch(publicKey, commitment);
