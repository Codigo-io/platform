// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";

export const derivePdaaccountWithOneStaticSeedAndOneFieldPDA = (programId: PublicKey): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("Static Value"),
        ],
        programId,
    )
};

export type PdaaccountWithOneStaticAndDynamicSeedAndOneFieldSeeds = {
    dynamic: number, 
};

export const derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA = (
    seeds: PdaaccountWithOneStaticAndDynamicSeedAndOneFieldSeeds,
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

export type PdaaccountVerifiesSeedsTypesSeeds = {
    u8Type: number, 
    u16Type: number, 
    u32Type: number, 
    i8Type: number, 
    i16Type: number, 
    i32Type: number, 
    stringType: string, 
    pubkeyType: PublicKey, 
};

export const derivePdaaccountVerifiesSeedsTypesPDA = (
    seeds: PdaaccountVerifiesSeedsTypesSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from([seeds.u8Type]),
            Buffer.from(Uint16Array.from([seeds.u16Type]).buffer),
            Buffer.from(Uint32Array.from([seeds.u32Type]).buffer),
            Buffer.from(Int8Array.from([seeds.i8Type]).buffer),
            Buffer.from(Int16Array.from([seeds.i16Type]).buffer),
            Buffer.from(Int32Array.from([seeds.i32Type]).buffer),
            Buffer.from(seeds.stringType, "utf8"),
            seeds.pubkeyType.toBuffer(),
        ],
        programId,
    )
};

