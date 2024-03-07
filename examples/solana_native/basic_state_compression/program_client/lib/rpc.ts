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
 * 1. `[writable, signer]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` account_compression: {@link PublicKey} Account Compression program it self
 * 5. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
    InitializeMerkleTree = 0,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
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
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
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
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
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
 * 2. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
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
 * 3. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
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
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
    CloseEmptyTree = 6,
}

export const createMerkleTreeAccountForInitializeMerkleTree = async (newAccountPubkey: PublicKey, fromPubkey: PublicKey): Promise<TransactionInstruction> => {
    const space = getConcurrentMerkleTreeAccountSize(14, 64, 6);
    const rentExemptionAmount = await _connection.getMinimumBalanceForRentExemption(space);

    return SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"),
    });
}

export type InitializeMerkleTreeArgs = {
	feePayer: PublicKey;
	merkleTree: PublicKey;
	authority: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` account_compression: {@link PublicKey} Account Compression program it self
 * 5. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
export const initializeMerkleTree = (args: InitializeMerkleTreeArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
						{pubkey: args.merkleTree, isSigner: true, isWritable: true},
						{pubkey: args.authority, isSigner: true, isWritable: false},
						{pubkey: new PublicKey("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` account_compression: {@link PublicKey} Account Compression program it self
 * 5. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
export const initializeMerkleTreeSendAndConfirm = async (
	args: Omit<InitializeMerkleTreeArgs, "feePayer" | "merkleTree" | "authority"> & {
	  signers: {
			feePayer: Keypair,
			merkleTree: Keypair,
			authority: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();



	if (!(await _connection.getAccountInfo(args.signers.merkleTree.publicKey))) {
		trx.add(await createMerkleTreeAccountForInitializeMerkleTree(
			args.signers.merkleTree.publicKey, 
			args.signers.feePayer.publicKey
		));
	}

	trx.add(initializeMerkleTree({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		merkleTree: args.signers.merkleTree.publicKey,
		authority: args.signers.authority.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.merkleTree,
				args.signers.authority,
    ]
  );
};

export type AppendArticleArgs = {
	feePayer: PublicKey;
	merkleTree: PublicKey;
	authority: PublicKey;
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
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const appendArticle = (args: AppendArticleArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
						{pubkey: args.authority, isSigner: true, isWritable: false},
						{pubkey: new PublicKey("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
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
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const appendArticleSendAndConfirm = async (
	args: Omit<AppendArticleArgs, "feePayer" | "authority"> & {
	  signers: {
			feePayer: Keypair,
			authority: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(appendArticle({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		authority: args.signers.authority.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.authority,
    ]
  );
};

export type InsertOrAppendArticleArgs = {
	feePayer: PublicKey;
	merkleTree: PublicKey;
	authority: PublicKey;
	root: number[];
	index: number;
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
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - root: {@link number[]} 
 * - index: {@link number} 
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const insertOrAppendArticle = (args: InsertOrAppendArticleArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
						{pubkey: args.authority, isSigner: true, isWritable: false},
						{pubkey: new PublicKey("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
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
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - root: {@link number[]} 
 * - index: {@link number} 
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const insertOrAppendArticleSendAndConfirm = async (
	args: Omit<InsertOrAppendArticleArgs, "feePayer" | "authority"> & {
	  signers: {
			feePayer: Keypair,
			authority: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(insertOrAppendArticle({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		authority: args.signers.authority.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.authority,
    ]
  );
};

export type ReplaceLeafArticleArgs = {
	feePayer: PublicKey;
	merkleTree: PublicKey;
	authority: PublicKey;
	previousLeaf: number[];
	root: number[];
	index: number;
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
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - previous_leaf: {@link number[]} 
 * - root: {@link number[]} 
 * - index: {@link number} 
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const replaceLeafArticle = (args: ReplaceLeafArticleArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
						{pubkey: args.authority, isSigner: true, isWritable: false},
						{pubkey: new PublicKey("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
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
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
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
	args: Omit<ReplaceLeafArticleArgs, "feePayer" | "authority"> & {
	  signers: {
			feePayer: Keypair,
			authority: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(replaceLeafArticle({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		authority: args.signers.authority.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.authority,
    ]
  );
};

export type VerifyLeafArticleArgs = {
	feePayer: PublicKey;
	merkleTree: PublicKey;
	leaf: number[];
	root: number[];
	index: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` merkle_tree: {@link PublicKey} 
 * 2. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - leaf: {@link number[]} 
 * - root: {@link number[]} 
 * - index: {@link number} 
 */
export const verifyLeafArticle = (args: VerifyLeafArticleArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
						{pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` merkle_tree: {@link PublicKey} 
 * 2. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - leaf: {@link number[]} 
 * - root: {@link number[]} 
 * - index: {@link number} 
 */
export const verifyLeafArticleSendAndConfirm = async (
	args: Omit<VerifyLeafArticleArgs, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(verifyLeafArticle({
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

export type TransferAuthorityArgs = {
	feePayer: PublicKey;
	merkleTree: PublicKey;
	authority: PublicKey;
	newAuthority: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - new_authority: {@link PublicKey} 
 */
export const transferAuthority = (args: TransferAuthorityArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
						{pubkey: args.authority, isSigner: true, isWritable: false},
						{pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
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
 * 3. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - new_authority: {@link PublicKey} 
 */
export const transferAuthoritySendAndConfirm = async (
	args: Omit<TransferAuthorityArgs, "feePayer" | "authority"> & {
	  signers: {
			feePayer: Keypair,
			authority: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(transferAuthority({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		authority: args.signers.authority.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.authority,
    ]
  );
};

export type CloseEmptyTreeArgs = {
	feePayer: PublicKey;
	merkleTree: PublicKey;
	authority: PublicKey;
	recipient: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[writable]` recipient: {@link PublicKey} The SOL recevier.
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
export const closeEmptyTree = (args: CloseEmptyTreeArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
						{pubkey: args.authority, isSigner: true, isWritable: false},
						{pubkey: args.recipient, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
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
 * 4. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
export const closeEmptyTreeSendAndConfirm = async (
	args: Omit<CloseEmptyTreeArgs, "feePayer" | "authority"> & {
	  signers: {
			feePayer: Keypair,
			authority: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(closeEmptyTree({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		authority: args.signers.authority.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.authority,
    ]
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
* Event registration method for state compression change Log events
*
* @param publicKey - The public key of the merkle tree account
* @param callback - A callback which will be run on change log event receive
*/
export async function onChangelog(
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
* Event registration method for state compression application data events
*
* @param publicKey - The public key of the merkle tree account
* @param callback - A callback which will be run on application data event receive
*/
export async function onApplicationData(
	publicKey: PublicKey,
	callback: T.StateCompressionAccountCallback,
) {
	const websocket = Websocket.getInstance();

	await websocket.onCompressedData(_connection, publicKey, callback, [
			"Article",
			"Article",
			"Article",
			"Article",
	]);

	return {
		remove: () => {
			websocket.removeOnCompressData(_connection, publicKey, callback);
		},
	};
}

/**
* Getter for past events for a merkle tree account
*
* @param publicKey - The public key of the merkle tree account
* @param until - Transaction signature that until which the history will fetched, otherwise up to 1000 past records recieved
*/
export async function getAccountCompressionHistory(
	publicKey: PublicKey,
	until: string = "",
) {
	return await Websocket.getInstance().getCompressDataHistory(_connection, publicKey, until, [
			"Article",
			"Article",
			"Article",
			"Article",
	]);
}