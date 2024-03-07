// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

export interface Warehouse {
  name: string;
  description: string;
  owner: PublicKey;
  delegates: PublicKey[];
}

export const decodeWarehouse = (decoded: Decoded): Warehouse => ({
    name: decoded["name"] as string,
    description: decoded["description"] as string,
    owner: new PublicKey(decoded["owner"] as Uint8Array),
    delegates: (decoded["delegates"] as Uint8Array[]).map(e => new PublicKey(e)),
});

export const WarehouseSchema: Schema =  {
    struct: {
        name: "string",
        description: "string",
        owner: { array: { type: "u8", len: 32 } },
        delegates: { array: { type: { array: { type: "u8", len: 32 } } } },
    }
};

export interface Article {
  name: string;
  description: string;
  thumbnail: string;
  mint: PublicKey;
  owner: PublicKey;
  currentWarehouse: PublicKey | undefined;
}

export const decodeArticle = (decoded: Decoded): Article => ({
    name: decoded["name"] as string,
    description: decoded["description"] as string,
    thumbnail: decoded["thumbnail"] as string,
    mint: new PublicKey(decoded["mint"] as Uint8Array),
    owner: new PublicKey(decoded["owner"] as Uint8Array),
    currentWarehouse: decoded["current_warehouse"] ? new PublicKey(decoded["current_warehouse"]) : undefined,
});

export const ArticleSchema: Schema =  {
    struct: {
        name: "string",
        description: "string",
        thumbnail: "string",
        mint: { array: { type: "u8", len: 32 } },
        owner: { array: { type: "u8", len: 32 } },
        current_warehouse: { option: { array: { type: "u8", len: 32 } } },
    }
};

export module CslSplTokenTypes {
    /// Mint data.
    export interface Mint {
      mintAuthority: PublicKey | undefined;
      supply: bigint;
      decimals: number;
      isInitialized: boolean;
      freezeAuthority: PublicKey | undefined;
    }
    
    export const decodeMint = (decoded: Decoded): Mint => ({
        mintAuthority: decoded["mint_authority"] ? new PublicKey(decoded["mint_authority"]) : undefined,
        supply: decoded["supply"] as bigint,
        decimals: decoded["decimals"] as number,
        isInitialized: decoded["is_initialized"] as boolean,
        freezeAuthority: decoded["freeze_authority"] ? new PublicKey(decoded["freeze_authority"]) : undefined,
    });
    
    export const MintSchema: Schema =  {
        struct: {
            mint_authority: { option: { array: { type: "u8", len: 32 } } },
            supply: "u64",
            decimals: "u8",
            is_initialized: "bool",
            freeze_authority: { option: { array: { type: "u8", len: 32 } } },
        }
    };
    
    /// Account data
    export interface Account {
      mint: PublicKey;
      owner: PublicKey;
      amount: bigint;
      delegate: PublicKey | undefined;
      state: number;
      isNative: bigint | undefined;
      delegatedAmount: bigint;
      closeAuthority: PublicKey | undefined;
    }
    
    export const decodeAccount = (decoded: Decoded): Account => ({
        mint: new PublicKey(decoded["mint"] as Uint8Array),
        owner: new PublicKey(decoded["owner"] as Uint8Array),
        amount: decoded["amount"] as bigint,
        delegate: decoded["delegate"] ? new PublicKey(decoded["delegate"]) : undefined,
        state: decoded["state"] as number,
        isNative: decoded["is_native"] as bigint | undefined,
        delegatedAmount: decoded["delegated_amount"] as bigint,
        closeAuthority: decoded["close_authority"] ? new PublicKey(decoded["close_authority"]) : undefined,
    });
    
    export const AccountSchema: Schema =  {
        struct: {
            mint: { array: { type: "u8", len: 32 } },
            owner: { array: { type: "u8", len: 32 } },
            amount: "u64",
            delegate: { option: { array: { type: "u8", len: 32 } } },
            state: "u8",
            is_native: { option: "u64" },
            delegated_amount: "u64",
            close_authority: { option: { array: { type: "u8", len: 32 } } },
        }
    };
    
}



// State Compression Types

export interface StateCompressionAccountPathNode {
	node: Array<number>; // size = 32, static array
	index: number;
}
	
export const decodeStateCompressionAccountPathNodeSchema = (decoded: Decoded): StateCompressionAccountPathNode => ({
	node: decoded["node"] as Array<number>,
	index: decoded["index"] as number,
});
	
export const StateCompressionAccountPathNodeSchema: Schema = {
	struct: {
		node: { array: { type: "u8", len: 32 } },
		index: "u32",
	},
};
	
export interface StateCompressionAccountChangelog {
	typeId: number;
	id: PublicKey;
	path: Array<StateCompressionAccountPathNode>;
	seq: bigint;
	index: number;
	
	transactionId: string;
	blockTime: number;
}
	
export const decodeStateCompressionAccountChangelog = (decoded: Decoded, transactionId: string, blockTime: number): StateCompressionAccountChangelog => ({
	transactionId,
	blockTime,
	typeId: 0,
	id: new PublicKey(decoded["id"] as Array<number>),
	path: decoded["path"] as Array<StateCompressionAccountPathNode>,
	seq: decoded["seq"] as bigint,
	index: decoded["index"] as number,
});
	
export const StateCompressionAccountChangelogSchema: Schema = {
	struct: {
		id: { array: { type: "u8", len: 32 } },
		path: { array: { type: StateCompressionAccountPathNodeSchema } },
		seq: "u64",
		index: "u32",
	},
};
	
export interface StateCompressionAccountApplicationData {
	typeId: number;
	newLeaf: Array<number>; // size = 30
	tree: PublicKey;
	data: any;
	
	transactionId: string;
	blockTime: number;
}
	
export const decodeStateCompressionAccountApplicationData = (decoded: Decoded, transactionId: string, blockTime: number, dataSchema: Schema): StateCompressionAccountApplicationData => {
	const dataDes = deserialize(
		dataSchema,
		decoded["data"] as Uint8Array
	) as Record<string, unknown>;
	return {
		transactionId,
		blockTime,
		typeId: decoded["index"] as number,
		newLeaf: decoded["newLeaf"] as Array<number>,
		tree: new PublicKey(decoded["tree"] as Array<number>),
		data: dataDes,
	}
};
	
export type StateCompressionAccountCallback = (
	data:
		| StateCompressionAccountChangelog
		| StateCompressionAccountApplicationData
) => void;