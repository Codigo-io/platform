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

export enum ValidateBigAccountInstruction {
/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - account_seed_index: {@link number} Auto-generated, from the input "account" for the its seed definition "Array", sets the seed named "index"
 */
    InitPdaOnContract = 0,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
    InitOnContract = 1,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
    InitOnClient = 2,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
    InitOnClientWithCustomOwner = 3,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
    InitAccountInfoOnClient = 4,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
    InitAccountInfoOnClientWithCustomOwner = 5,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
    InitAccountInfoOnContract = 6,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 * 2. `[signer]` account_info: {@link PublicKey} 
 */
    InitTwoBigAccountOnClient = 7,
}

export type InitPdaOnContractArgs = {
	feePayer: PublicKey;
	accountSeedIndex: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - account_seed_index: {@link number} Auto-generated, from the input "account" for the its seed definition "Array", sets the seed named "index"
 */
export const initPdaOnContract = (args: InitPdaOnContractArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_index: "u32",
            },
        },
        {
            id: ValidateBigAccountInstruction.InitPdaOnContract,
						account_seed_index: args.accountSeedIndex,
        }
    );

		const [accountPubkey] = pda.deriveArrayPDA({
				index: args.accountSeedIndex,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
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
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(initPdaOnContract({
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

export type InitOnContractArgs = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initOnContract = (args: InitOnContractArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateBigAccountInstruction.InitOnContract,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link Account10Kb} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initOnContractSendAndConfirm = async (
	args: Omit<InitOnContractArgs, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(initOnContract({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export const createAccountAccountForInitOnClient = async (newAccountPubkey: PublicKey, fromPubkey: PublicKey): Promise<TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _connection.getMinimumBalanceForRentExemption(space);

    return SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: _programId,
    });
}

export type InitOnClientArgs = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
export const initOnClient = (args: InitOnClientArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateBigAccountInstruction.InitOnClient,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
export const initOnClientSendAndConfirm = async (
	args: Omit<InitOnClientArgs, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();

	trx.add(await createAccountAccountForInitOnClient(
		args.signers.account.publicKey, 
		args.signers.feePayer.publicKey
	));
	trx.add(initOnClient({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export const createAccountAccountForInitOnClientWithCustomOwner = async (newAccountPubkey: PublicKey, fromPubkey: PublicKey): Promise<TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _connection.getMinimumBalanceForRentExemption(space);

    return SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: new PublicKey("11111111111111111111111111111111"),
    });
}

export type InitOnClientWithCustomOwnerArgs = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
export const initOnClientWithCustomOwner = (args: InitOnClientWithCustomOwnerArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateBigAccountInstruction.InitOnClientWithCustomOwner,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 */
export const initOnClientWithCustomOwnerSendAndConfirm = async (
	args: Omit<InitOnClientWithCustomOwnerArgs, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();

	trx.add(await createAccountAccountForInitOnClientWithCustomOwner(
		args.signers.account.publicKey, 
		args.signers.feePayer.publicKey
	));
	trx.add(initOnClientWithCustomOwner({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export const createAccountAccountForInitAccountInfoOnClient = async (newAccountPubkey: PublicKey, fromPubkey: PublicKey): Promise<TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _connection.getMinimumBalanceForRentExemption(space);

    return SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: _programId,
    });
}

export type InitAccountInfoOnClientArgs = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
export const initAccountInfoOnClient = (args: InitAccountInfoOnClientArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateBigAccountInstruction.InitAccountInfoOnClient,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
export const initAccountInfoOnClientSendAndConfirm = async (
	args: Omit<InitAccountInfoOnClientArgs, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();

	trx.add(await createAccountAccountForInitAccountInfoOnClient(
		args.signers.account.publicKey, 
		args.signers.feePayer.publicKey
	));
	trx.add(initAccountInfoOnClient({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export const createAccountAccountForInitAccountInfoOnClientWithCustomOwner = async (newAccountPubkey: PublicKey, fromPubkey: PublicKey): Promise<TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _connection.getMinimumBalanceForRentExemption(space);

    return SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: new PublicKey("11111111111111111111111111111111"),
    });
}

export type InitAccountInfoOnClientWithCustomOwnerArgs = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
export const initAccountInfoOnClientWithCustomOwner = (args: InitAccountInfoOnClientWithCustomOwnerArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateBigAccountInstruction.InitAccountInfoOnClientWithCustomOwner,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link PublicKey} 
 */
export const initAccountInfoOnClientWithCustomOwnerSendAndConfirm = async (
	args: Omit<InitAccountInfoOnClientWithCustomOwnerArgs, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();

	trx.add(await createAccountAccountForInitAccountInfoOnClientWithCustomOwner(
		args.signers.account.publicKey, 
		args.signers.feePayer.publicKey
	));
	trx.add(initAccountInfoOnClientWithCustomOwner({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export type InitAccountInfoOnContractArgs = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initAccountInfoOnContract = (args: InitAccountInfoOnContractArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateBigAccountInstruction.InitAccountInfoOnContract,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const initAccountInfoOnContractSendAndConfirm = async (
	args: Omit<InitAccountInfoOnContractArgs, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(initAccountInfoOnContract({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export const createAccountAccountForInitTwoBigAccountOnClient = async (newAccountPubkey: PublicKey, fromPubkey: PublicKey): Promise<TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _connection.getMinimumBalanceForRentExemption(space);

    return SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: _programId,
    });
}

export const createAccountInfoAccountForInitTwoBigAccountOnClient = async (newAccountPubkey: PublicKey, fromPubkey: PublicKey): Promise<TransactionInstruction> => {
    const space = 10485760;
    const rentExemptionAmount = await _connection.getMinimumBalanceForRentExemption(space);

    return SystemProgram.createAccount({
        fromPubkey,
        newAccountPubkey,
        lamports: rentExemptionAmount,
        space,
        programId: _programId,
    });
}

export type InitTwoBigAccountOnClientArgs = {
	feePayer: PublicKey;
	account: PublicKey;
	accountInfo: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 * 2. `[signer]` account_info: {@link PublicKey} 
 */
export const initTwoBigAccountOnClient = (args: InitTwoBigAccountOnClientArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateBigAccountInstruction.InitTwoBigAccountOnClient,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: false},
						{pubkey: args.accountInfo, isSigner: true, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` account: {@link Account10Mib} 
 * 2. `[signer]` account_info: {@link PublicKey} 
 */
export const initTwoBigAccountOnClientSendAndConfirm = async (
	args: Omit<InitTwoBigAccountOnClientArgs, "feePayer" | "account" | "accountInfo"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
			accountInfo: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();

	trx.add(await createAccountAccountForInitTwoBigAccountOnClient(
		args.signers.account.publicKey, 
		args.signers.feePayer.publicKey
	));

	if (!(await _connection.getAccountInfo(args.signers.accountInfo.publicKey))) {
		trx.add(await createAccountInfoAccountForInitTwoBigAccountOnClient(
			args.signers.accountInfo.publicKey, 
			args.signers.feePayer.publicKey
		));
	}

	trx.add(initTwoBigAccountOnClient({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
		accountInfo: args.signers.accountInfo.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
				args.signers.accountInfo,
    ]
  );
};

// Getters

export const getAccount10Kb = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Account10Kb | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeAccount10Kb(deserialize(T.Account10KbSchema, buffer.data) as Record<string, unknown>);
}

export const getAccount10Mib = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Account10Mib | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeAccount10Mib(deserialize(T.Account10MibSchema, buffer.data) as Record<string, unknown>);
}


// Websocket Events

