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

export enum BudgetTrackerInstruction {
/**
 * To call once per account. Initialize a Record account. The total_balance of the account will be set to 0.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - user_name: {@link string} The username to be assigned to the Record.name property
 * - user_record_seed_index: {@link number} Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
 */
    CreateUserRecord = 0,

/**
 * Register the given amount as an income for the given record account. The total total_balance of the account will be increased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 *
 * Data:
 * - amount: {@link number} The amount to be registered as the income.
 * - user_record_seed_index: {@link number} Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
 */
    RegisterIncome = 1,

/**
 * Register the given amount as an outcome for the given record account. The total total_balance of the account will be decreased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} The user record account
 *
 * Data:
 * - amount: {@link number} Number to be added to the outcome accumulator
 * - user_record_seed_index: {@link number} Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
 */
    RegisterOutcome = 2,
}

export type CreateUserRecordArgs = {
    feePayer: PublicKey;
    userName: string;
    userRecordSeedIndex: number;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * To call once per account. Initialize a Record account. The total_balance of the account will be set to 0.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - user_name: {@link string} The username to be assigned to the Record.name property
 * - user_record_seed_index: {@link number} Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
 */
export const createUserRecord = (args: CreateUserRecordArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                user_name: "string",
                user_record_seed_index: "u8",
            },
        },
        {
            id: BudgetTrackerInstruction.CreateUserRecord,
            user_name: args.userName,
            user_record_seed_index: args.userRecordSeedIndex,
        }
    );

    const [userRecordPubkey] = pda.deriveRecordPDA({
        signer: args.feePayer,
        index: args.userRecordSeedIndex,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: userRecordPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * To call once per account. Initialize a Record account. The total_balance of the account will be set to 0.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - user_name: {@link string} The username to be assigned to the Record.name property
 * - user_record_seed_index: {@link number} Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
 */
export const createUserRecordSendAndConfirm = async (
    args: Omit<CreateUserRecordArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createUserRecord({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type RegisterIncomeArgs = {
    feePayer: PublicKey;
    amount: number;
    userRecordSeedIndex: number;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Register the given amount as an income for the given record account. The total total_balance of the account will be increased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 *
 * Data:
 * - amount: {@link number} The amount to be registered as the income.
 * - user_record_seed_index: {@link number} Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
 */
export const registerIncome = (args: RegisterIncomeArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                amount: "u32",
                user_record_seed_index: "u8",
            },
        },
        {
            id: BudgetTrackerInstruction.RegisterIncome,
            amount: args.amount,
            user_record_seed_index: args.userRecordSeedIndex,
        }
    );

    const [userRecordPubkey] = pda.deriveRecordPDA({
        signer: args.feePayer,
        index: args.userRecordSeedIndex,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: userRecordPubkey, isSigner: false, isWritable: true},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Register the given amount as an income for the given record account. The total total_balance of the account will be increased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} 
 *
 * Data:
 * - amount: {@link number} The amount to be registered as the income.
 * - user_record_seed_index: {@link number} Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
 */
export const registerIncomeSendAndConfirm = async (
    args: Omit<RegisterIncomeArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(registerIncome({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type RegisterOutcomeArgs = {
    feePayer: PublicKey;
    amount: number;
    userRecordSeedIndex: number;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Register the given amount as an outcome for the given record account. The total total_balance of the account will be decreased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} The user record account
 *
 * Data:
 * - amount: {@link number} Number to be added to the outcome accumulator
 * - user_record_seed_index: {@link number} Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
 */
export const registerOutcome = (args: RegisterOutcomeArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                amount: "u32",
                user_record_seed_index: "u8",
            },
        },
        {
            id: BudgetTrackerInstruction.RegisterOutcome,
            amount: args.amount,
            user_record_seed_index: args.userRecordSeedIndex,
        }
    );

    const [userRecordPubkey] = pda.deriveRecordPDA({
        signer: args.feePayer,
        index: args.userRecordSeedIndex,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: userRecordPubkey, isSigner: false, isWritable: true},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Register the given amount as an outcome for the given record account. The total total_balance of the account will be decreased.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` user_record: {@link Record} The user record account
 *
 * Data:
 * - amount: {@link number} Number to be added to the outcome accumulator
 * - user_record_seed_index: {@link number} Auto-generated, from input user_record of type [Record] set the seed named index, required by the type
 */
export const registerOutcomeSendAndConfirm = async (
    args: Omit<RegisterOutcomeArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(registerOutcome({
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

export const getRecord = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Record | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeRecord(deserialize(T.RecordSchema, buffer.data) as Record<string, unknown>);
}


// Websocket Events

