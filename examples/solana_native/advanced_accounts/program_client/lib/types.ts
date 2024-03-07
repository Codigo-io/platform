// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

export interface State {
  field1: number;
}

export const decodeState = (decoded: Decoded): State => ({
    field1: decoded["field_1"] as number,
});

export const StateSchema: Schema =  {
    struct: {
        field_1: "u8",
    }
};



