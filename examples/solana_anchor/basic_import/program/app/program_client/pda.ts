// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";
import {BN} from "@coral-xyz/anchor";

export module ValidateAccountsPDAs {
    export const deriveStaticPdaPDA = (programId: PublicKey): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("Static Value"),
            ],
            programId,
        )
    };
    
    export type DynamicPdaSeeds = {
        dynamic: number, 
    };
    
    export const deriveDynamicPdaPDA = (
        seeds: DynamicPdaSeeds,
        programId: PublicKey
    ): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("Static Value"),
                Buffer.from([seeds.dynamic]),
            ],
            programId,
        )
    };
    
    export type PdaWithAllTypesSeeds = {
        u8Type: number, 
        u16Type: number, 
        u32Type: number, 
        u64Type: bigint, 
        i8Type: number, 
        i16Type: number, 
        i32Type: number, 
        i64Type: bigint, 
        stringType: string, 
        pubkeyType: PublicKey, 
    };
    
    export const derivePdaWithAllTypesPDA = (
        seeds: PdaWithAllTypesSeeds,
        programId: PublicKey
    ): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from([seeds.u8Type]),
                Buffer.from(Uint16Array.from([seeds.u16Type]).buffer),
                Buffer.from(Uint32Array.from([seeds.u32Type]).buffer),
                Buffer.from(BigUint64Array.from([seeds.u64Type]).buffer),
                Buffer.from(Int8Array.from([seeds.i8Type]).buffer),
                Buffer.from(Int16Array.from([seeds.i16Type]).buffer),
                Buffer.from(Int32Array.from([seeds.i32Type]).buffer),
                Buffer.from(BigInt64Array.from([seeds.i64Type]).buffer),
                Buffer.from(seeds.stringType, "utf8"),
                seeds.pubkeyType.toBuffer(),
            ],
            programId,
        )
    };
    
}

export module ValidateAdvancedCasesPDAs {
    export const deriveStaticPdaPDA = (programId: PublicKey): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("Static Value"),
            ],
            programId,
        )
    };
    
    export type DynamicPdaSeeds = {
        dynamic: number, 
    };
    
    export const deriveDynamicPdaPDA = (
        seeds: DynamicPdaSeeds,
        programId: PublicKey
    ): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("Static Value"),
                Buffer.from([seeds.dynamic]),
            ],
            programId,
        )
    };
    
    export type PdaWithAllTypesSeeds = {
        u8Type: number, 
        u16Type: number, 
        u32Type: number, 
        u64Type: bigint, 
        i8Type: number, 
        i16Type: number, 
        i32Type: number, 
        i64Type: bigint, 
        stringType: string, 
        pubkeyType: PublicKey, 
    };
    
    export const derivePdaWithAllTypesPDA = (
        seeds: PdaWithAllTypesSeeds,
        programId: PublicKey
    ): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from([seeds.u8Type]),
                Buffer.from(Uint16Array.from([seeds.u16Type]).buffer),
                Buffer.from(Uint32Array.from([seeds.u32Type]).buffer),
                Buffer.from(BigUint64Array.from([seeds.u64Type]).buffer),
                Buffer.from(Int8Array.from([seeds.i8Type]).buffer),
                Buffer.from(Int16Array.from([seeds.i16Type]).buffer),
                Buffer.from(Int32Array.from([seeds.i32Type]).buffer),
                Buffer.from(BigInt64Array.from([seeds.i64Type]).buffer),
                Buffer.from(seeds.stringType, "utf8"),
                seeds.pubkeyType.toBuffer(),
            ],
            programId,
        )
    };
    
}

export module ValidateDataTypesPDAs {
    export const deriveMasterTypesPdaPDA = (programId: PublicKey): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("master_type_pda"),
            ],
            programId,
        )
    };
    
}

