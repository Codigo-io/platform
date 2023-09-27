// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

/// Through this data structure we will store the relevant information to track the income and outcome of a given user.
export interface Record {
  name: string;
  moves: number;
  outcome: number;
  income: number;
  totalBalance: bigint;
}

export const decodeRecord = (decoded: Decoded): Record => ({
    name: decoded["name"] as string,
    moves: decoded["moves"] as number,
    outcome: decoded["outcome"] as number,
    income: decoded["income"] as number,
    totalBalance: decoded["total_balance"] as bigint,
});

export const RecordSchema: Schema =  {
    struct: {
        name: "string",
        moves: "u16",
        outcome: "u32",
        income: "u32",
        total_balance: "i64",
    }
};



