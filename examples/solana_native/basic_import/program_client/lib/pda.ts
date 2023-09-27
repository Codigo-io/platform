// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";

export module ValidateAccountsPDAs {
    export const derivePdaaccountWithOneStaticSeedAndOneFieldPDA = (): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("Static Value"),
            ],
            new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
        )
    };
    
    export type PdaaccountWithOneStaticAndDynamicSeedAndOneFieldSeeds = {
        dynamic: number, 
    };
    
    export const derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA = (seeds: PdaaccountWithOneStaticAndDynamicSeedAndOneFieldSeeds): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("Static Value"),
                Buffer.from([seeds.dynamic]),
            ],
            new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
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
    
    export const derivePdaaccountVerifiesSeedsTypesPDA = (seeds: PdaaccountVerifiesSeedsTypesSeeds): [PublicKey, number] => {
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
            new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
        )
    };
    
}

export module ValidateAdvancedCasesPDAs {
    export const derivePdaaccountWithOneStaticSeedAndOneFieldPDA = (): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("Static Value"),
            ],
            new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
        )
    };
    
    export type PdaaccountWithOneStaticAndDynamicSeedAndOneFieldSeeds = {
        dynamic: number, 
    };
    
    export const derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA = (seeds: PdaaccountWithOneStaticAndDynamicSeedAndOneFieldSeeds): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("Static Value"),
                Buffer.from([seeds.dynamic]),
            ],
            new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
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
    
    export const derivePdaaccountVerifiesSeedsTypesPDA = (seeds: PdaaccountVerifiesSeedsTypesSeeds): [PublicKey, number] => {
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
            new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
        )
    };
    
    export const derivePdaaccountWithOneStaticSeedAndOneFieldTwoPDA = (): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("Static Value 2"),
            ],
            new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
        )
    };
    
}

export module ValidateDataTypesPDAs {
    export const deriveMasterTypesPdaPDA = (): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                Buffer.from("master_type_pda"),
            ],
            new PublicKey("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY"),
        )
    };
    
}

