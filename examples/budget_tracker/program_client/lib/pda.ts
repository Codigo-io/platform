// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";

export type RecordSeeds = {
    signer: PublicKey, 
    index: number, 
};

export const deriveRecordPDA = (
    seeds: RecordSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("record"),
            seeds.signer.toBuffer(),
            Buffer.from([seeds.index]),
        ],
        programId,
    )
};

