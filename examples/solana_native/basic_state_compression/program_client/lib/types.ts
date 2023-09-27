// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

export interface Article {
  name: string;
  description: string;
  thumbnail: string;
}

export const decodeArticle = (decoded: Decoded): Article => ({
    name: decoded["name"] as string,
    description: decoded["description"] as string,
    thumbnail: decoded["thumbnail"] as string,
});

export const ArticleSchema: Schema =  {
    struct: {
        name: "string",
        description: "string",
        thumbnail: "string",
    }
};



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