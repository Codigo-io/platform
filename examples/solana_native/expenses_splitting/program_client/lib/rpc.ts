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

export enum ExpenseSplitterInstruction {
/**
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
    CreateGroup = 0,

/**
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
    AddMember = 1,

/**
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
    RemoveMember = 2,

/**
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
    LogPayment = 3,
}

export type CreateGroupArgs = {
	feePayer: PublicKey;
	groupName: string;
	members: PublicKey[];
	initialBalances: bigint[];
	groupAccountSeedGroupName: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
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
export const createGroup = (args: CreateGroupArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								group_name: "string",
								members: { array: { type: { array: { type: "u8", len: 32 } } } },
								initial_balances: { array: { type: "i64" } },
								group_account_seed_group_name: "string",
            },
        },
        {
            id: ExpenseSplitterInstruction.CreateGroup,
						group_name: args.groupName,
						members: args.members.map(e => e.toBytes()),
						initial_balances: args.initialBalances,
						group_account_seed_group_name: args.groupAccountSeedGroupName,
        }
    );

		const [groupAccountPubkey] = pda.deriveGroupAccountPDA({
				groupName: args.groupAccountSeedGroupName,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: groupAccountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
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
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(createGroup({
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

export type AddMemberArgs = {
	feePayer: PublicKey;
	newMember: PublicKey;
	groupAccountSeedGroupName: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
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
export const addMember = (args: AddMemberArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								new_member: { array: { type: "u8", len: 32 } },
								group_account_seed_group_name: "string",
            },
        },
        {
            id: ExpenseSplitterInstruction.AddMember,
						new_member: args.newMember.toBytes(),
						group_account_seed_group_name: args.groupAccountSeedGroupName,
        }
    );

		const [groupAccountPubkey] = pda.deriveGroupAccountPDA({
				groupName: args.groupAccountSeedGroupName,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: groupAccountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
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
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(addMember({
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

export type RemoveMemberArgs = {
	feePayer: PublicKey;
	member: PublicKey;
	groupAccountSeedGroupName: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
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
export const removeMember = (args: RemoveMemberArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								member: { array: { type: "u8", len: 32 } },
								group_account_seed_group_name: "string",
            },
        },
        {
            id: ExpenseSplitterInstruction.RemoveMember,
						member: args.member.toBytes(),
						group_account_seed_group_name: args.groupAccountSeedGroupName,
        }
    );

		const [groupAccountPubkey] = pda.deriveGroupAccountPDA({
				groupName: args.groupAccountSeedGroupName,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: groupAccountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
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
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(removeMember({
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

export type LogPaymentArgs = {
	feePayer: PublicKey;
	title: string;
	participants: PublicKey[];
	amounts: bigint[];
	participationFactors: bigint[];
	groupAccountSeedGroupName: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
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
export const logPayment = (args: LogPaymentArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								title: "string",
								participants: { array: { type: { array: { type: "u8", len: 32 } } } },
								amounts: { array: { type: "u64" } },
								participation_factors: { array: { type: "u64" } },
								group_account_seed_group_name: "string",
            },
        },
        {
            id: ExpenseSplitterInstruction.LogPayment,
						title: args.title,
						participants: args.participants.map(e => e.toBytes()),
						amounts: args.amounts,
						participation_factors: args.participationFactors,
						group_account_seed_group_name: args.groupAccountSeedGroupName,
        }
    );

		const [groupAccountPubkey] = pda.deriveGroupAccountPDA({
				groupName: args.groupAccountSeedGroupName,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: groupAccountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
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
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(logPayment({
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

export const getGroupAccount = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.GroupAccount | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeGroupAccount(deserialize(T.GroupAccountSchema, buffer.data) as Record<string, unknown>);
}


// Websocket Events

