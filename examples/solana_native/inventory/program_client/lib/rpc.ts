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

export enum ValidateInventoryInstruction {
/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` warehouse: {@link Warehouse} 
 * 2. `[signer]` owner: {@link PublicKey} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 */
    CreateWarehouse = 0,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` warehouse: {@link Warehouse} 
 * 2. `[signer]` owner: {@link PublicKey} 
 *
 * Data:
 * - delegate: {@link PublicKey} 
 */
    AssignWarehouseDelegate = 1,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` warehouse: {@link Warehouse} 
 * 2. `[signer]` owner: {@link PublicKey} 
 *
 * Data:
 * - new_owner: {@link PublicKey} 
 */
    TransferWarehouseOwner = 2,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` merkle_tree: {@link PublicKey} 
 * 2. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 3. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 4. `[]` account_compression: {@link PublicKey} Account Compression program it self
 * 5. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 */
    InitializeMerkleTree = 3,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[]` warehouse: {@link Warehouse} 
 * 2. `[writable, signer]` mint: {@link Mint} 
 * 3. `[signer]` delegate: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 6. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 7. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 8. `[]` token_program: {@link PublicKey} SPL Token program
 * 9. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 10. `[writable]` merkle_tree: {@link PublicKey} The merkle tree account.
 * 11. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 12. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 13. `[]` csl_spl_token_v0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 14. `[]` csl_spl_assoc_token_v0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 15. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
    CreateArticle = 4,
}

export type CreateWarehouseArgs = {
	feePayer: PublicKey;
	owner: PublicKey;
	name: string;
	description: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` warehouse: {@link Warehouse} 
 * 2. `[signer]` owner: {@link PublicKey} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 */
export const createWarehouse = (args: CreateWarehouseArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								name: "string",
								description: "string",
            },
        },
        {
            id: ValidateInventoryInstruction.CreateWarehouse,
						name: args.name,
						description: args.description,
        }
    );

		const [warehousePubkey] = pda.deriveUniquePerUserPDA({
				owner: args.owner,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: warehousePubkey, isSigner: false, isWritable: true},
						{pubkey: args.owner, isSigner: true, isWritable: false},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` warehouse: {@link Warehouse} 
 * 2. `[signer]` owner: {@link PublicKey} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 */
export const createWarehouseSendAndConfirm = async (
	args: Omit<CreateWarehouseArgs, "feePayer" | "owner"> & {
	  signers: {
			feePayer: Keypair,
			owner: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(createWarehouse({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		owner: args.signers.owner.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.owner,
    ]
  );
};

export type AssignWarehouseDelegateArgs = {
	feePayer: PublicKey;
	owner: PublicKey;
	delegate: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` warehouse: {@link Warehouse} 
 * 2. `[signer]` owner: {@link PublicKey} 
 *
 * Data:
 * - delegate: {@link PublicKey} 
 */
export const assignWarehouseDelegate = (args: AssignWarehouseDelegateArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								delegate: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateInventoryInstruction.AssignWarehouseDelegate,
						delegate: args.delegate.toBytes(),
        }
    );

		const [warehousePubkey] = pda.deriveUniquePerUserPDA({
				owner: args.owner,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: warehousePubkey, isSigner: false, isWritable: true},
						{pubkey: args.owner, isSigner: true, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` warehouse: {@link Warehouse} 
 * 2. `[signer]` owner: {@link PublicKey} 
 *
 * Data:
 * - delegate: {@link PublicKey} 
 */
export const assignWarehouseDelegateSendAndConfirm = async (
	args: Omit<AssignWarehouseDelegateArgs, "feePayer" | "owner"> & {
	  signers: {
			feePayer: Keypair,
			owner: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(assignWarehouseDelegate({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		owner: args.signers.owner.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.owner,
    ]
  );
};

export type TransferWarehouseOwnerArgs = {
	feePayer: PublicKey;
	owner: PublicKey;
	newOwner: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` warehouse: {@link Warehouse} 
 * 2. `[signer]` owner: {@link PublicKey} 
 *
 * Data:
 * - new_owner: {@link PublicKey} 
 */
export const transferWarehouseOwner = (args: TransferWarehouseOwnerArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								new_owner: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateInventoryInstruction.TransferWarehouseOwner,
						new_owner: args.newOwner.toBytes(),
        }
    );

		const [warehousePubkey] = pda.deriveUniquePerUserPDA({
				owner: args.owner,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: warehousePubkey, isSigner: false, isWritable: true},
						{pubkey: args.owner, isSigner: true, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable]` warehouse: {@link Warehouse} 
 * 2. `[signer]` owner: {@link PublicKey} 
 *
 * Data:
 * - new_owner: {@link PublicKey} 
 */
export const transferWarehouseOwnerSendAndConfirm = async (
	args: Omit<TransferWarehouseOwnerArgs, "feePayer" | "owner"> & {
	  signers: {
			feePayer: Keypair,
			owner: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(transferWarehouseOwner({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		owner: args.signers.owner.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.owner,
    ]
  );
};

export const createMerkleTreeAccountForInitializeMerkleTree = async (newAccountPubkey: PublicKey, fromPubkey: PublicKey): Promise<TransactionInstruction> => {
    const space = getConcurrentMerkleTreeAccountSize(30, 512, 15);
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
            id: ValidateInventoryInstruction.InitializeMerkleTree,

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

	trx.add(await createMerkleTreeAccountForInitializeMerkleTree(
		args.signers.merkleTree.publicKey, 
		args.signers.feePayer.publicKey
	));
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

export type CreateArticleArgs = {
	feePayer: PublicKey;
	mint: PublicKey;
	delegate: PublicKey;
	funding: PublicKey;
	wallet: PublicKey;
	owner: PublicKey;
	merkleTree: PublicKey;
	authority: PublicKey;
	name: string;
	description: string;
	thumbnail: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[]` warehouse: {@link Warehouse} 
 * 2. `[writable, signer]` mint: {@link Mint} 
 * 3. `[signer]` delegate: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 6. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 7. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 8. `[]` token_program: {@link PublicKey} SPL Token program
 * 9. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 10. `[writable]` merkle_tree: {@link PublicKey} The merkle tree account.
 * 11. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 12. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 13. `[]` csl_spl_token_v0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 14. `[]` csl_spl_assoc_token_v0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 15. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const createArticle = (args: CreateArticleArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateInventoryInstruction.CreateArticle,
						name: args.name,
						description: args.description,
						thumbnail: args.thumbnail,
        }
    );

		const [warehousePubkey] = pda.deriveUniquePerUserPDA({
				owner: args.owner,
    }, _programId);
		const [assocTokenAccountPubkey] = pda.CslSplTokenPDAs.deriveAccountPDA({
				wallet: args.wallet,
				tokenProgram: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
				mint: args.mint,
    }, new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: warehousePubkey, isSigner: false, isWritable: false},
						{pubkey: args.mint, isSigner: true, isWritable: true},
						{pubkey: args.delegate, isSigner: true, isWritable: false},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: args.funding, isSigner: true, isWritable: true},
						{pubkey: assocTokenAccountPubkey, isSigner: false, isWritable: true},
						{pubkey: args.wallet, isSigner: false, isWritable: false},
						{pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
						{pubkey: args.owner, isSigner: true, isWritable: false},
						{pubkey: args.merkleTree, isSigner: false, isWritable: true},
						{pubkey: args.authority, isSigner: true, isWritable: false},
						{pubkey: new PublicKey("noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[]` warehouse: {@link Warehouse} 
 * 2. `[writable, signer]` mint: {@link Mint} 
 * 3. `[signer]` delegate: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 6. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 7. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 8. `[]` token_program: {@link PublicKey} SPL Token program
 * 9. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 10. `[writable]` merkle_tree: {@link PublicKey} The merkle tree account.
 * 11. `[signer]` authority: {@link PublicKey} Authority that controls write-access to the tree. Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
 * 12. `[]` noop: {@link PublicKey} Program used to emit changelogs as cpi instruction data.
 * 13. `[]` csl_spl_token_v0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 14. `[]` csl_spl_assoc_token_v0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 15. `[]` csl_spl_account_compression_v0_0_0: {@link PublicKey} Auto-generated, CslSplAccountCompressionProgram v0.0.0
 *
 * Data:
 * - name: {@link string} 
 * - description: {@link string} type
 * - thumbnail: {@link string} 
 */
export const createArticleSendAndConfirm = async (
	args: Omit<CreateArticleArgs, "feePayer" | "mint" | "delegate" | "funding" | "owner" | "authority"> & {
	  signers: {
			feePayer: Keypair,
			mint: Keypair,
			delegate: Keypair,
			funding: Keypair,
			owner: Keypair,
			authority: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(createArticle({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		mint: args.signers.mint.publicKey,
		delegate: args.signers.delegate.publicKey,
		funding: args.signers.funding.publicKey,
		owner: args.signers.owner.publicKey,
		authority: args.signers.authority.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.mint,
				args.signers.delegate,
				args.signers.funding,
				args.signers.owner,
				args.signers.authority,
    ]
  );
};

// Getters

export const getWarehouse = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Warehouse | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeWarehouse(deserialize(T.WarehouseSchema, buffer.data) as Record<string, unknown>);
}

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
export module CslSplTokenGetters {
    export const getMint = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.CslSplTokenTypes.Mint | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.CslSplTokenTypes.decodeMint(deserialize(T.CslSplTokenTypes.MintSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getAccount = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.CslSplTokenTypes.Account | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.CslSplTokenTypes.decodeAccount(deserialize(T.CslSplTokenTypes.AccountSchema, buffer.data) as Record<string, unknown>);
    }
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
	]);
}