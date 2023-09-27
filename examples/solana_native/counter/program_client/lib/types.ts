// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

export interface GreetingAccount {
  counter: number;
}

export const decodeGreetingAccount = (decoded: Decoded): GreetingAccount => ({
    counter: decoded["counter"] as number,
});

export const GreetingAccountSchema: Schema =  {
    struct: {
        counter: "u32",
    }
};



