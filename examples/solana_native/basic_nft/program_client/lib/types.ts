// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

export interface Gem {
  color: string;
  rarity: string;
  shortDescription: string;
  mint: PublicKey;
  assocAccount: PublicKey | undefined;
}

export const decodeGem = (decoded: Decoded): Gem => ({
    color: decoded["color"] as string,
    rarity: decoded["rarity"] as string,
    shortDescription: decoded["short_description"] as string,
    mint: new PublicKey(decoded["mint"] as Uint8Array),
    assocAccount: decoded["assoc_account"] ? new PublicKey(decoded["assoc_account"]) : undefined,
});

export const GemSchema: Schema =  {
    struct: {
        color: "string",
        rarity: "string",
        short_description: "string",
        mint: { array: { type: "u8", len: 32 } },
        assoc_account: { option: { array: { type: "u8", len: 32 } } },
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



