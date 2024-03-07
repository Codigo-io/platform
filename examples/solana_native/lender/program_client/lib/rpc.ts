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

export enum InformalLenderInstruction {
/**
 * After deploying the contract this must be the first instruction
 * to call. It will configure the broker account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` delegate: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 2. `[writable]` broker: {@link Broker} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - amount: {@link BigInt} The amount to be added to the capital. It will be debited from the delegate account
 * - fee: {@link number} 
 */
    CreateBroker = 0,

/**
 * Through this instruction any one can add capital to the broker
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` delegate: {@link PublicKey} 
 * 2. `[writable]` broker: {@link Broker} 
 *
 * Data:
 * - amount: {@link BigInt} The amount to be added to the capital. It will be debited from the delegate account
 */
    AddCapitalToBroker = 1,

/**
 * This instruction is used by a client to request a loan
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` client: {@link PublicKey} 
 * 2. `[writable]` loan: {@link Loan} 
 * 3. `[]` broker: {@link Broker} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - amount: {@link BigInt} The request amount to borrow
 * - kyc_url: {@link string} 
 * - loan_seed_index: {@link number} Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
 */
    RequestLoan = 2,

/**
 * Through this instruction the delegate can approve a loan.
 * Upon approval, the funds will be transfer from the broker
 * account to the client's account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` delegate: {@link PublicKey} 
 * 2. `[writable]` loan: {@link Loan} 
 * 3. `[writable]` broker: {@link Broker} 
 * 4. `[writable]` client: {@link PublicKey} 
 *
 * Data:
 * - loan_seed_index: {@link number} Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
 */
    ApproveLoan = 3,

/**
 * A client can pay a loan through this instruction. When paying
 * the contract will calculate the interest based on the loan approved
 * fee. Additioanlly, it will transfer money from the client's account
 * to the broker account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` client: {@link PublicKey} 
 * 2. `[writable]` loan: {@link Loan} 
 * 3. `[writable]` broker: {@link Broker} 
 *
 * Data:
 * - amount: {@link BigInt} The amount to pay to the loan
 * - loan_seed_index: {@link number} Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
 */
    PayLoan = 4,
}

export type CreateBrokerArgs = {
	feePayer: PublicKey;
	delegate: PublicKey;
	amount: bigint;
	fee: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * After deploying the contract this must be the first instruction
 * to call. It will configure the broker account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` delegate: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 2. `[writable]` broker: {@link Broker} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - amount: {@link BigInt} The amount to be added to the capital. It will be debited from the delegate account
 * - fee: {@link number} 
 */
export const createBroker = (args: CreateBrokerArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								amount: "u64",
								fee: "u8",
            },
        },
        {
            id: InformalLenderInstruction.CreateBroker,
						amount: args.amount,
						fee: args.fee,
        }
    );

	const [brokerPubkey] = pda.deriveBrokerPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.delegate, isSigner: true, isWritable: true},
						{pubkey: brokerPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * After deploying the contract this must be the first instruction
 * to call. It will configure the broker account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` delegate: {@link PublicKey} This will be the account that has permission to update the broker and approved request.
 * 2. `[writable]` broker: {@link Broker} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - amount: {@link BigInt} The amount to be added to the capital. It will be debited from the delegate account
 * - fee: {@link number} 
 */
export const createBrokerSendAndConfirm = async (
	args: Omit<CreateBrokerArgs, "feePayer" | "delegate"> & {
	  signers: {
			feePayer: Keypair,
			delegate: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(createBroker({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		delegate: args.signers.delegate.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.delegate,
    ]
  );
};

export type AddCapitalToBrokerArgs = {
	feePayer: PublicKey;
	delegate: PublicKey;
	amount: bigint;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Through this instruction any one can add capital to the broker
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` delegate: {@link PublicKey} 
 * 2. `[writable]` broker: {@link Broker} 
 *
 * Data:
 * - amount: {@link BigInt} The amount to be added to the capital. It will be debited from the delegate account
 */
export const addCapitalToBroker = (args: AddCapitalToBrokerArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								amount: "u64",
            },
        },
        {
            id: InformalLenderInstruction.AddCapitalToBroker,
						amount: args.amount,
        }
    );

	const [brokerPubkey] = pda.deriveBrokerPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.delegate, isSigner: true, isWritable: true},
						{pubkey: brokerPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Through this instruction any one can add capital to the broker
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` delegate: {@link PublicKey} 
 * 2. `[writable]` broker: {@link Broker} 
 *
 * Data:
 * - amount: {@link BigInt} The amount to be added to the capital. It will be debited from the delegate account
 */
export const addCapitalToBrokerSendAndConfirm = async (
	args: Omit<AddCapitalToBrokerArgs, "feePayer" | "delegate"> & {
	  signers: {
			feePayer: Keypair,
			delegate: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(addCapitalToBroker({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		delegate: args.signers.delegate.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.delegate,
    ]
  );
};

export type RequestLoanArgs = {
	feePayer: PublicKey;
	client: PublicKey;
	amount: bigint;
	kycUrl: string;
	loanSeedIndex: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * This instruction is used by a client to request a loan
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` client: {@link PublicKey} 
 * 2. `[writable]` loan: {@link Loan} 
 * 3. `[]` broker: {@link Broker} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - amount: {@link BigInt} The request amount to borrow
 * - kyc_url: {@link string} 
 * - loan_seed_index: {@link number} Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
 */
export const requestLoan = (args: RequestLoanArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								amount: "u64",
								kyc_url: "string",
								loan_seed_index: "u32",
            },
        },
        {
            id: InformalLenderInstruction.RequestLoan,
						amount: args.amount,
						kyc_url: args.kycUrl,
						loan_seed_index: args.loanSeedIndex,
        }
    );

		const [loanPubkey] = pda.deriveLoanPDA({
				client: args.client,
				index: args.loanSeedIndex,
    }, _programId);
	const [brokerPubkey] = pda.deriveBrokerPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.client, isSigner: true, isWritable: false},
						{pubkey: loanPubkey, isSigner: false, isWritable: true},
						{pubkey: brokerPubkey, isSigner: false, isWritable: false},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * This instruction is used by a client to request a loan
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` client: {@link PublicKey} 
 * 2. `[writable]` loan: {@link Loan} 
 * 3. `[]` broker: {@link Broker} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - amount: {@link BigInt} The request amount to borrow
 * - kyc_url: {@link string} 
 * - loan_seed_index: {@link number} Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
 */
export const requestLoanSendAndConfirm = async (
	args: Omit<RequestLoanArgs, "feePayer" | "client"> & {
	  signers: {
			feePayer: Keypair,
			client: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(requestLoan({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		client: args.signers.client.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.client,
    ]
  );
};

export type ApproveLoanArgs = {
	feePayer: PublicKey;
	delegate: PublicKey;
	client: PublicKey;
	loanSeedIndex: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Through this instruction the delegate can approve a loan.
 * Upon approval, the funds will be transfer from the broker
 * account to the client's account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` delegate: {@link PublicKey} 
 * 2. `[writable]` loan: {@link Loan} 
 * 3. `[writable]` broker: {@link Broker} 
 * 4. `[writable]` client: {@link PublicKey} 
 *
 * Data:
 * - loan_seed_index: {@link number} Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
 */
export const approveLoan = (args: ApproveLoanArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								loan_seed_index: "u32",
            },
        },
        {
            id: InformalLenderInstruction.ApproveLoan,
						loan_seed_index: args.loanSeedIndex,
        }
    );

		const [loanPubkey] = pda.deriveLoanPDA({
				client: args.client,
				index: args.loanSeedIndex,
    }, _programId);
	const [brokerPubkey] = pda.deriveBrokerPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.delegate, isSigner: true, isWritable: false},
						{pubkey: loanPubkey, isSigner: false, isWritable: true},
						{pubkey: brokerPubkey, isSigner: false, isWritable: true},
						{pubkey: args.client, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Through this instruction the delegate can approve a loan.
 * Upon approval, the funds will be transfer from the broker
 * account to the client's account.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` delegate: {@link PublicKey} 
 * 2. `[writable]` loan: {@link Loan} 
 * 3. `[writable]` broker: {@link Broker} 
 * 4. `[writable]` client: {@link PublicKey} 
 *
 * Data:
 * - loan_seed_index: {@link number} Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
 */
export const approveLoanSendAndConfirm = async (
	args: Omit<ApproveLoanArgs, "feePayer" | "delegate"> & {
	  signers: {
			feePayer: Keypair,
			delegate: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(approveLoan({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		delegate: args.signers.delegate.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.delegate,
    ]
  );
};

export type PayLoanArgs = {
	feePayer: PublicKey;
	client: PublicKey;
	amount: bigint;
	loanSeedIndex: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * A client can pay a loan through this instruction. When paying
 * the contract will calculate the interest based on the loan approved
 * fee. Additioanlly, it will transfer money from the client's account
 * to the broker account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` client: {@link PublicKey} 
 * 2. `[writable]` loan: {@link Loan} 
 * 3. `[writable]` broker: {@link Broker} 
 *
 * Data:
 * - amount: {@link BigInt} The amount to pay to the loan
 * - loan_seed_index: {@link number} Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
 */
export const payLoan = (args: PayLoanArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								amount: "u64",
								loan_seed_index: "u32",
            },
        },
        {
            id: InformalLenderInstruction.PayLoan,
						amount: args.amount,
						loan_seed_index: args.loanSeedIndex,
        }
    );

		const [loanPubkey] = pda.deriveLoanPDA({
				client: args.client,
				index: args.loanSeedIndex,
    }, _programId);
	const [brokerPubkey] = pda.deriveBrokerPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.client, isSigner: true, isWritable: true},
						{pubkey: loanPubkey, isSigner: false, isWritable: true},
						{pubkey: brokerPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * A client can pay a loan through this instruction. When paying
 * the contract will calculate the interest based on the loan approved
 * fee. Additioanlly, it will transfer money from the client's account
 * to the broker account
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` client: {@link PublicKey} 
 * 2. `[writable]` loan: {@link Loan} 
 * 3. `[writable]` broker: {@link Broker} 
 *
 * Data:
 * - amount: {@link BigInt} The amount to pay to the loan
 * - loan_seed_index: {@link number} Auto-generated, from the input "loan" for the its seed definition "Loan", sets the seed named "index"
 */
export const payLoanSendAndConfirm = async (
	args: Omit<PayLoanArgs, "feePayer" | "client"> & {
	  signers: {
			feePayer: Keypair,
			client: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(payLoan({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		client: args.signers.client.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.client,
    ]
  );
};

// Getters

export const getBroker = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Broker | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeBroker(deserialize(T.BrokerSchema, buffer.data) as Record<string, unknown>);
}

export const getLoan = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Loan | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeLoan(deserialize(T.LoanSchema, buffer.data) as Record<string, unknown>);
}


// Websocket Events

