// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";
import {BN} from "@coral-xyz/anchor";

export type GroupAccountSeeds = {
    groupName: string, 
};

export const deriveGroupAccountPDA = (
    seeds: GroupAccountSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from(seeds.groupName, "utf8"),
        ],
        programId,
    )
};

