// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

export interface State {
  u8Type: number;
  u16Type: number;
  u32Type: number;
  u64Type: bigint;
  u128Type: bigint;
  i8Type: number;
  i16Type: number;
  i32Type: number;
  i64Type: bigint;
  i128Type: bigint;
  stringType: string;
  boolType: boolean;
  f32Type: number;
  f64Type: number;
  pubkeyType: PublicKey;
  u8TypeOption: number | undefined;
  u16TypeOption: number | undefined;
  u32TypeOption: number | undefined;
  u64TypeOption: bigint | undefined;
  u128TypeOption: bigint | undefined;
  i8TypeOption: number | undefined;
  i16TypeOption: number | undefined;
  i32TypeOption: number | undefined;
  i64TypeOption: bigint | undefined;
  i128TypeOption: bigint | undefined;
  stringTypeOption: string | undefined;
  boolTypeOption: boolean | undefined;
  f32TypeOption: number | undefined;
  f64TypeOption: number | undefined;
  pubkeyTypeOption: PublicKey | undefined;
  u8TypeVector: number[];
  u16TypeVector: number[];
  u32TypeVector: number[];
  u64TypeVector: bigint[];
  u128TypeVector: bigint[];
  i8TypeVector: number[];
  i16TypeVector: number[];
  i32TypeVector: number[];
  i64TypeVector: bigint[];
  i128TypeVector: bigint[];
  boolTypeVector: boolean[];
  f32TypeVector: number[];
  f64TypeVector: number[];
  pubkeyTypeVector: PublicKey[];
}

export const decodeState = (decoded: Decoded): State => ({
    u8Type: decoded["u8_type"] as number,
    u16Type: decoded["u16_type"] as number,
    u32Type: decoded["u32_type"] as number,
    u64Type: decoded["u64_type"] as bigint,
    u128Type: decoded["u128_type"] as bigint,
    i8Type: decoded["i8_type"] as number,
    i16Type: decoded["i16_type"] as number,
    i32Type: decoded["i32_type"] as number,
    i64Type: decoded["i64_type"] as bigint,
    i128Type: decoded["i128_type"] as bigint,
    stringType: decoded["string_type"] as string,
    boolType: decoded["bool_type"] as boolean,
    f32Type: decoded["f32_type"] as number,
    f64Type: decoded["f64_type"] as number,
    pubkeyType: new PublicKey(decoded["pubkey_type"] as Uint8Array),
    u8TypeOption: decoded["u8_type_option"] as number | undefined,
    u16TypeOption: decoded["u16_type_option"] as number | undefined,
    u32TypeOption: decoded["u32_type_option"] as number | undefined,
    u64TypeOption: decoded["u64_type_option"] as bigint | undefined,
    u128TypeOption: decoded["u128_type_option"] as bigint | undefined,
    i8TypeOption: decoded["i8_type_option"] as number | undefined,
    i16TypeOption: decoded["i16_type_option"] as number | undefined,
    i32TypeOption: decoded["i32_type_option"] as number | undefined,
    i64TypeOption: decoded["i64_type_option"] as bigint | undefined,
    i128TypeOption: decoded["i128_type_option"] as bigint | undefined,
    stringTypeOption: decoded["string_type_option"] as string | undefined,
    boolTypeOption: decoded["bool_type_option"] as boolean | undefined,
    f32TypeOption: decoded["f32_type_option"] as number | undefined,
    f64TypeOption: decoded["f64_type_option"] as number | undefined,
    pubkeyTypeOption: decoded["pubkey_type_option"] ? new PublicKey(decoded["pubkey_type_option"]) : undefined,
    u8TypeVector: decoded["u8_type_vector"] as number[],
    u16TypeVector: decoded["u16_type_vector"] as number[],
    u32TypeVector: decoded["u32_type_vector"] as number[],
    u64TypeVector: decoded["u64_type_vector"] as bigint[],
    u128TypeVector: decoded["u128_type_vector"] as bigint[],
    i8TypeVector: decoded["i8_type_vector"] as number[],
    i16TypeVector: decoded["i16_type_vector"] as number[],
    i32TypeVector: decoded["i32_type_vector"] as number[],
    i64TypeVector: decoded["i64_type_vector"] as bigint[],
    i128TypeVector: decoded["i128_type_vector"] as bigint[],
    boolTypeVector: decoded["bool_type_vector"] as boolean[],
    f32TypeVector: decoded["f32_type_vector"] as number[],
    f64TypeVector: decoded["f64_type_vector"] as number[],
    pubkeyTypeVector: (decoded["pubkey_type_vector"] as Uint8Array[]).map(e => new PublicKey(e)),
});

export const StateSchema: Schema =  {
    struct: {
        u8_type: "u8",
        u16_type: "u16",
        u32_type: "u32",
        u64_type: "u64",
        u128_type: "u128",
        i8_type: "i8",
        i16_type: "i16",
        i32_type: "i32",
        i64_type: "i64",
        i128_type: "i128",
        string_type: "string",
        bool_type: "bool",
        f32_type: "f32",
        f64_type: "f64",
        pubkey_type: { array: { type: "u8", len: 32 } },
        u8_type_option: { option: "u8" },
        u16_type_option: { option: "u16" },
        u32_type_option: { option: "u32" },
        u64_type_option: { option: "u64" },
        u128_type_option: { option: "u128" },
        i8_type_option: { option: "i8" },
        i16_type_option: { option: "i16" },
        i32_type_option: { option: "i32" },
        i64_type_option: { option: "i64" },
        i128_type_option: { option: "i128" },
        string_type_option: { option: "string" },
        bool_type_option: { option: "bool" },
        f32_type_option: { option: "f32" },
        f64_type_option: { option: "f64" },
        pubkey_type_option: { option: { array: { type: "u8", len: 32 } } },
        u8_type_vector: { array: { type: "u8" } },
        u16_type_vector: { array: { type: "u16" } },
        u32_type_vector: { array: { type: "u32" } },
        u64_type_vector: { array: { type: "u64" } },
        u128_type_vector: { array: { type: "u128" } },
        i8_type_vector: { array: { type: "i8" } },
        i16_type_vector: { array: { type: "i16" } },
        i32_type_vector: { array: { type: "i32" } },
        i64_type_vector: { array: { type: "i64" } },
        i128_type_vector: { array: { type: "i128" } },
        bool_type_vector: { array: { type: "bool" } },
        f32_type_vector: { array: { type: "f32" } },
        f64_type_vector: { array: { type: "f64" } },
        pubkey_type_vector: { array: { type: { array: { type: "u8", len: 32 } } } },
    }
};



