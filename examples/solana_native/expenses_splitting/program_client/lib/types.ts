// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

/// Represents a group account with members and their balances.
export interface GroupAccount {
  groupName: string;
  members: PublicKey[];
  balances: bigint[];
}

export const decodeGroupAccount = (decoded: Decoded): GroupAccount => ({
    groupName: decoded["group_name"] as string,
    members: (decoded["members"] as Uint8Array[]).map(e => new PublicKey(e)),
    balances: decoded["balances"] as bigint[],
});

export const GroupAccountSchema: Schema =  {
    struct: {
        group_name: "string",
        members: { array: { type: { array: { type: "u8", len: 32 } } } },
        balances: { array: { type: "i64" } },
    }
};



