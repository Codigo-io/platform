// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";

export type ArraySeeds = {
    index: number, 
};

export const deriveArrayPDA = (
    seeds: ArraySeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from(Uint32Array.from([seeds.index]).buffer),
        ],
        programId,
    )
};

