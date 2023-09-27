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
import {getConcurrentMerkleTreeAccountSize} from "@solana/spl-account-compression"
import {Websocket} from "./websocket";


let _programId: PublicKey;
let _connection: Connection;

export const initializeClient = (
    programId: PublicKey,
    connection: Connection
) => {
    _programId = programId;
    _connection = connection;
};

export enum ValidateStateCompressionInstruction {
/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` account_compression: {@link PublicKey} Account Compression program it self
 * 5. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
    InitializeMerkleTree = 0,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
    AppendArticle = 1,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - root: {@link number[]} 
 * - index: {@link number} 
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
    InsertOrAppendArticle = 2,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - previous_leaf: {@link number[]} 
 * - root: {@link number[]} 
 * - index: {@link number} 
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
    ReplaceLeafArticle = 3,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` merkle_tree: {@link PublicKey} 
 * 2. `[]` noop: {@link PublicKey} Noop program
 * 3. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - leaf: {@link number[]} 
 * - root: {@link number[]} 
 * - index: {@link number} 
 */
    VerifyLeafArticle = 4,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - new_authority: {@link PublicKey} 
 */
    TransferAuthority = 5,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[writable]` recipient: {@link PublicKey} The SOL recevier.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
    CloseEmptyTree = 6,
}

export type InitializeMerkleTreeArgs = {
    feePayer: PublicKey;
    merkleTree: PublicKey;
};

export type CreateMerkleTreeAccountForInitializeMerkleTreeIxArgs = {
    feePayer: Keypair,
    keypair: Keypair,
}

export const createMerkleTreeAccountForInitializeMerkleTree = async (
    args: CreateMerkleTreeAccountForInitializeMerkleTreeIxArgs
): Promise<TransactionInstruction> => {
    const space = getConcurrentMerkleTreeAccountSize(14, 64, 6);
    const rentExemptionAmount = await _connection.getMinimumBalanceForRentExemption(space);

    return SystemProgram.createAccount({
        fromPubkey: args.feePayer.publicKey,
        newAccountPubkey: args.keypair.publicKey,
        lamports: rentExemptionAmount,
        space,
        programId: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"),
    });
}

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` account_compression: {@link PublicKey} Account Compression program it self
 * 5. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
export const initializeMerkleTree = (args: InitializeMerkleTreeArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateStateCompressionInstruction.InitializeMerkleTree,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.merkleTree, isSigner: false, isWritable: true},
            {pubkey: args.feePayer, isSigner: true, isWritable: false},
            {pubkey: new PublicKey("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` account_compression: {@link PublicKey} Account Compression program it self
 * 5. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
export const initializeMerkleTreeSendAndConfirm = async (
    args: Omit<InitializeMerkleTreeArgs, "feePayer"> & { 
        createMerkleTreeAccountForInitializeMerkleTree: CreateMerkleTreeAccountForInitializeMerkleTreeIxArgs,
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();

    if (!(await _connection.getAccountInfo(args.createMerkleTreeAccountForInitializeMerkleTree.keypair.publicKey))) {
        trx.add(await createMerkleTreeAccountForInitializeMerkleTree({
            feePayer: args.createMerkleTreeAccountForInitializeMerkleTree.feePayer,
            keypair: args.createMerkleTreeAccountForInitializeMerkleTree.keypair,
        }));
    }

    trx.add(initializeMerkleTree({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.createMerkleTreeAccountForInitializeMerkleTree.keypair,]
    );
};

export type AppendArticleArgs = {
    feePayer: PublicKey;
    merkleTree: PublicKey;
    name: string;
    description: string;
    thumbnail: string;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const appendArticle = (args: AppendArticleArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                name: "string",
                description: "string",
                thumbnail: "string",
            },
        },
        {
            id: ValidateStateCompressionInstruction.AppendArticle,
            name: args.name,
            description: args.description,
            thumbnail: args.thumbnail,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.merkleTree, isSigner: false, isWritable: true},
            {pubkey: args.feePayer, isSigner: true, isWritable: false},
            {pubkey: new PublicKey("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const appendArticleSendAndConfirm = async (
    args: Omit<AppendArticleArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(appendArticle({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type InsertOrAppendArticleArgs = {
    feePayer: PublicKey;
    merkleTree: PublicKey;
    root: number[];
    index: number;
    name: string;
    description: string;
    thumbnail: string;
    remainingAccounts: PublicKey[];
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - root: {@link number[]} 
 * - index: {@link number} 
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const insertOrAppendArticle = (args: InsertOrAppendArticleArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                root: { array: { type: "u8" } },
                index: "u32",
                name: "string",
                description: "string",
                thumbnail: "string",
            },
        },
        {
            id: ValidateStateCompressionInstruction.InsertOrAppendArticle,
            root: args.root,
            index: args.index,
            name: args.name,
            description: args.description,
            thumbnail: args.thumbnail,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.merkleTree, isSigner: false, isWritable: true},
            {pubkey: args.feePayer, isSigner: true, isWritable: false},
            {pubkey: new PublicKey("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
        ].concat(args.remainingAccounts.map((pubkey: PublicKey) => ({pubkey, isSigner: false, isWritable: false }))),
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - root: {@link number[]} 
 * - index: {@link number} 
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const insertOrAppendArticleSendAndConfirm = async (
    args: Omit<InsertOrAppendArticleArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(insertOrAppendArticle({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type ReplaceLeafArticleArgs = {
    feePayer: PublicKey;
    merkleTree: PublicKey;
    previousLeaf: number[];
    root: number[];
    index: number;
    name: string;
    description: string;
    thumbnail: string;
    remainingAccounts: PublicKey[];
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - previous_leaf: {@link number[]} 
 * - root: {@link number[]} 
 * - index: {@link number} 
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const replaceLeafArticle = (args: ReplaceLeafArticleArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                previous_leaf: { array: { type: "u8" } },
                root: { array: { type: "u8" } },
                index: "u32",
                name: "string",
                description: "string",
                thumbnail: "string",
            },
        },
        {
            id: ValidateStateCompressionInstruction.ReplaceLeafArticle,
            previous_leaf: args.previousLeaf,
            root: args.root,
            index: args.index,
            name: args.name,
            description: args.description,
            thumbnail: args.thumbnail,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.merkleTree, isSigner: false, isWritable: true},
            {pubkey: args.feePayer, isSigner: true, isWritable: false},
            {pubkey: new PublicKey("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
        ].concat(args.remainingAccounts.map((pubkey: PublicKey) => ({pubkey, isSigner: false, isWritable: false }))),
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - previous_leaf: {@link number[]} 
 * - root: {@link number[]} 
 * - index: {@link number} 
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const replaceLeafArticleSendAndConfirm = async (
    args: Omit<ReplaceLeafArticleArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(replaceLeafArticle({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type VerifyLeafArticleArgs = {
    feePayer: PublicKey;
    merkleTree: PublicKey;
    leaf: number[];
    root: number[];
    index: number;
    remainingAccounts: PublicKey[];
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` merkle_tree: {@link PublicKey} 
 * 2. `[]` noop: {@link PublicKey} Noop program
 * 3. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - leaf: {@link number[]} 
 * - root: {@link number[]} 
 * - index: {@link number} 
 */
export const verifyLeafArticle = (args: VerifyLeafArticleArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                leaf: { array: { type: "u8" } },
                root: { array: { type: "u8" } },
                index: "u32",
            },
        },
        {
            id: ValidateStateCompressionInstruction.VerifyLeafArticle,
            leaf: args.leaf,
            root: args.root,
            index: args.index,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.merkleTree, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
        ].concat(args.remainingAccounts.map((pubkey: PublicKey) => ({pubkey, isSigner: false, isWritable: false }))),
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` merkle_tree: {@link PublicKey} 
 * 2. `[]` noop: {@link PublicKey} Noop program
 * 3. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - leaf: {@link number[]} 
 * - root: {@link number[]} 
 * - index: {@link number} 
 */
export const verifyLeafArticleSendAndConfirm = async (
    args: Omit<VerifyLeafArticleArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(verifyLeafArticle({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type TransferAuthorityArgs = {
    feePayer: PublicKey;
    merkleTree: PublicKey;
    newAuthority: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - new_authority: {@link PublicKey} 
 */
export const transferAuthority = (args: TransferAuthorityArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                new_authority: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateStateCompressionInstruction.TransferAuthority,
            new_authority: args.newAuthority.toBytes(),
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.merkleTree, isSigner: false, isWritable: true},
            {pubkey: args.feePayer, isSigner: true, isWritable: false},
            {pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - new_authority: {@link PublicKey} 
 */
export const transferAuthoritySendAndConfirm = async (
    args: Omit<TransferAuthorityArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(transferAuthority({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type CloseEmptyTreeArgs = {
    feePayer: PublicKey;
    merkleTree: PublicKey;
    recipient: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[writable]` recipient: {@link PublicKey} The SOL recevier.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
export const closeEmptyTree = (args: CloseEmptyTreeArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateStateCompressionInstruction.CloseEmptyTree,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.merkleTree, isSigner: false, isWritable: true},
            {pubkey: args.feePayer, isSigner: true, isWritable: false},
            {pubkey: args.recipient, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[writable]` recipient: {@link PublicKey} The SOL recevier.
 * 4. `[]` csl_spl_account_compression_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
export const closeEmptyTreeSendAndConfirm = async (
    args: Omit<CloseEmptyTreeArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(closeEmptyTree({
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

export const getArticle = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Article | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeArticle(deserialize(T.ArticleSchema, buffer.data) as Record<string, unknown>);
}


// Websocket Events

/**
* Event registration method for Change Log events of the merkle tree MerkleTree
*
* @param publicKey - The public key of the merkle tree account
* @param callback - A callback which will be run on change log event receive
*/
export async function onChangelogForMerkleTree(
	publicKey: PublicKey,
	callback: T.StateCompressionAccountCallback,
) {
	const websocket = Websocket.getInstance();

	await websocket.onCompressedData(_connection, publicKey, callback);

	return {
	remove: () => {
		websocket.removeOnCompressData(_connection, publicKey, callback);
	},
	};
}

/**
* Event registration method for Applicaton Data events of the merkle tree MerkleTree
*
* @param publicKey - The public key of the merkle tree account
* @param callback - A callback which will be run on application data event receive
*/
export async function onApplicationDataForMerkleTree(
	publicKey: PublicKey,
	callback: T.StateCompressionAccountCallback,
) {
	const websocket = Websocket.getInstance();

	await websocket.onCompressedData(_connection, publicKey, callback, [
	"Article"
	]);

	return {
	remove: () => {
		websocket.removeOnCompressData(_connection, publicKey, callback);
	},
	};
}

/**
* Getter for past events for the merkle tree account MerkleTree
*
* @param publicKey - The public key of the merkle tree account
* @param until - Transaction signature that until which the history will fetched, otherwise up to 1000 past records recieved
*/
export async function getAccountCompressionHistoryForMerkleTree(
	publicKey: PublicKey,
	until: string = "",
) {
	const websocket = Websocket.getInstance();

	return await websocket.getCompressDataHistory(_connection, publicKey, until, [
	"Article"
	]);
}