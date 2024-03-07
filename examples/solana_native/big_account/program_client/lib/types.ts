// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

export interface Account10Kb {
  bigField: PublicKey[];
  completeTheBytes: string;
}

export const decodeAccount10Kb = (decoded: Decoded): Account10Kb => ({
    bigField: (decoded["big_field"] as Uint8Array[]).map(e => new PublicKey(e)),
    completeTheBytes: decoded["complete_the_bytes"] as string,
});

export const Account10KbSchema: Schema =  {
    struct: {
        big_field: { array: { type: { array: { type: "u8", len: 32 } } } },
        complete_the_bytes: "string",
    }
};

export interface Account10Mib {
  bigField: PublicKey[];
  completeTheBytes: string;
}

export const decodeAccount10Mib = (decoded: Decoded): Account10Mib => ({
    bigField: (decoded["big_field"] as Uint8Array[]).map(e => new PublicKey(e)),
    completeTheBytes: decoded["complete_the_bytes"] as string,
});

export const Account10MibSchema: Schema =  {
    struct: {
        big_field: { array: { type: { array: { type: "u8", len: 32 } } } },
        complete_the_bytes: "string",
    }
};



