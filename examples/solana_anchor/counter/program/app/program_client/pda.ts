// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";
import {BN} from "@coral-xyz/anchor";

export type CounterSeeds = {
    user: PublicKey, 
};

export const deriveCounterPDA = (
    seeds: CounterSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            seeds.user.toBuffer(),
        ],
        programId,
    )
};

