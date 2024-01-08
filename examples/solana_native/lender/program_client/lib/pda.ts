// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";

export const deriveBrokerPDA = (programId: PublicKey): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("broker"),
        ],
        programId,
    )
};

export type LoanSeeds = {
    client: PublicKey, 
    index: number, 
};

export const deriveLoanPDA = (
    seeds: LoanSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("loan"),
            seeds.client.toBuffer(),
            Buffer.from(Uint32Array.from([seeds.index]).buffer),
        ],
        programId,
    )
};

