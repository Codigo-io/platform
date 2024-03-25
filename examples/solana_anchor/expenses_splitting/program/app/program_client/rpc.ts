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
import { ExpenseSplitter } from "../../target/types/expense_splitter";
import idl from "../../target/idl/expense_splitter.json";
import * as pda from "./pda";



let _program: Program<ExpenseSplitter>;


export const initializeClient = (
    programId: web3.PublicKey,
    anchorProvider = AnchorProvider.env(),
) => {
    _program = new Program<ExpenseSplitter>(
        idl as never,
        programId,
        anchorProvider,
    );


};

export type CreateGroupArgs = {
  feePayer: web3.PublicKey;
  groupName: string;
  members: web3.PublicKey[];
  initialBalances: bigint[];
  groupAccountSeedGroupName: string;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Creates a new group with initial members and balances.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - group_name: {@link string} The name of the group.
 * - members: {@link PublicKey[]} Array of member public keys.
 * - initial_balances: {@link BigInt[]} Array of initial balances for each member.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const createGroupBuilder = (
	args: CreateGroupArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ExpenseSplitter, never> => {
    const [groupAccountPubkey] = pda.deriveGroupAccountPDA({
        groupName: args.groupAccountSeedGroupName,
    }, _program.programId);

  return _program
    .methods
    .createGroup(
      args.groupName,
      args.members,
      args.initialBalances.map(e => new BN(e.toString())),
      args.groupAccountSeedGroupName,
    )
    .accounts({
      feePayer: args.feePayer,
      groupAccount: groupAccountPubkey,
      systemProgram: new web3.PublicKey("11111111111111111111111111111111"),
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Creates a new group with initial members and balances.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - group_name: {@link string} The name of the group.
 * - members: {@link PublicKey[]} Array of member public keys.
 * - initial_balances: {@link BigInt[]} Array of initial balances for each member.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const createGroup = (
	args: CreateGroupArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    createGroupBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Creates a new group with initial members and balances.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - group_name: {@link string} The name of the group.
 * - members: {@link PublicKey[]} Array of member public keys.
 * - initial_balances: {@link BigInt[]} Array of initial balances for each member.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const createGroupSendAndConfirm = async (
  args: Omit<CreateGroupArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return createGroupBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type AddMemberArgs = {
  feePayer: web3.PublicKey;
  newMember: web3.PublicKey;
  groupAccountSeedGroupName: string;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Adds a new member to the group.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 *
 * Data:
 * - new_member: {@link PublicKey} Public key of the new member.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const addMemberBuilder = (
	args: AddMemberArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ExpenseSplitter, never> => {
    const [groupAccountPubkey] = pda.deriveGroupAccountPDA({
        groupName: args.groupAccountSeedGroupName,
    }, _program.programId);

  return _program
    .methods
    .addMember(
      args.newMember,
      args.groupAccountSeedGroupName,
    )
    .accounts({
      feePayer: args.feePayer,
      groupAccount: groupAccountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Adds a new member to the group.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 *
 * Data:
 * - new_member: {@link PublicKey} Public key of the new member.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const addMember = (
	args: AddMemberArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    addMemberBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Adds a new member to the group.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 *
 * Data:
 * - new_member: {@link PublicKey} Public key of the new member.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const addMemberSendAndConfirm = async (
  args: Omit<AddMemberArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return addMemberBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type RemoveMemberArgs = {
  feePayer: web3.PublicKey;
  member: web3.PublicKey;
  groupAccountSeedGroupName: string;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Removes a member from the group.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 *
 * Data:
 * - member: {@link PublicKey} Public key of the member to remove.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const removeMemberBuilder = (
	args: RemoveMemberArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ExpenseSplitter, never> => {
    const [groupAccountPubkey] = pda.deriveGroupAccountPDA({
        groupName: args.groupAccountSeedGroupName,
    }, _program.programId);

  return _program
    .methods
    .removeMember(
      args.member,
      args.groupAccountSeedGroupName,
    )
    .accounts({
      feePayer: args.feePayer,
      groupAccount: groupAccountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Removes a member from the group.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 *
 * Data:
 * - member: {@link PublicKey} Public key of the member to remove.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const removeMember = (
	args: RemoveMemberArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    removeMemberBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Removes a member from the group.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 *
 * Data:
 * - member: {@link PublicKey} Public key of the member to remove.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const removeMemberSendAndConfirm = async (
  args: Omit<RemoveMemberArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return removeMemberBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type LogPaymentArgs = {
  feePayer: web3.PublicKey;
  title: string;
  participants: web3.PublicKey[];
  amounts: bigint[];
  participationFactors: bigint[];
  groupAccountSeedGroupName: string;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Logs a payment made by or for group members, updating balances accordingly.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 *
 * Data:
 * - title: {@link string} Title or description of the payment.
 * - participants: {@link PublicKey[]} Array of participating member public keys.
 * - amounts: {@link BigInt[]} Array of amounts each participant gave to the group.
 * - participation_factors: {@link BigInt[]} Array of participation factors for each participant.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const logPaymentBuilder = (
	args: LogPaymentArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<ExpenseSplitter, never> => {
    const [groupAccountPubkey] = pda.deriveGroupAccountPDA({
        groupName: args.groupAccountSeedGroupName,
    }, _program.programId);

  return _program
    .methods
    .logPayment(
      args.title,
      args.participants,
      args.amounts.map(e => new BN(e.toString())),
      args.participationFactors.map(e => new BN(e.toString())),
      args.groupAccountSeedGroupName,
    )
    .accounts({
      feePayer: args.feePayer,
      groupAccount: groupAccountPubkey,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Logs a payment made by or for group members, updating balances accordingly.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 *
 * Data:
 * - title: {@link string} Title or description of the payment.
 * - participants: {@link PublicKey[]} Array of participating member public keys.
 * - amounts: {@link BigInt[]} Array of amounts each participant gave to the group.
 * - participation_factors: {@link BigInt[]} Array of participation factors for each participant.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const logPayment = (
	args: LogPaymentArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    logPaymentBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Logs a payment made by or for group members, updating balances accordingly.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` group_account: {@link GroupAccount} 
 *
 * Data:
 * - title: {@link string} Title or description of the payment.
 * - participants: {@link PublicKey[]} Array of participating member public keys.
 * - amounts: {@link BigInt[]} Array of amounts each participant gave to the group.
 * - participation_factors: {@link BigInt[]} Array of participation factors for each participant.
 * - group_account_seed_group_name: {@link string} Auto-generated, from the input "group_account" for the its seed definition "GroupAccount", sets the seed named "group_name"
 */
export const logPaymentSendAndConfirm = async (
  args: Omit<LogPaymentArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return logPaymentBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

// Getters

export const getGroupAccount = (
    publicKey: web3.PublicKey,
    commitment?: web3.Commitment
): Promise<IdlAccounts<ExpenseSplitter>["groupAccount"]> => _program.account.groupAccount.fetch(publicKey, commitment);
