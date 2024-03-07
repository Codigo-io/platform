// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";

export type UniquePerUserSeeds = {
    owner: PublicKey, 
};

export const deriveUniquePerUserPDA = (
    seeds: UniquePerUserSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            seeds.owner.toBuffer(),
        ],
        programId,
    )
};

export module CslSplAccountCompressionPDAs {
    
}

export module CslSplTokenPDAs {
    export type AccountSeeds = {
        wallet: PublicKey, 
        tokenProgram: PublicKey, 
        mint: PublicKey, 
    };
    
    export const deriveAccountPDA = (
        seeds: AccountSeeds,
        programId: PublicKey
    ): [PublicKey, number] => {
        return PublicKey.findProgramAddressSync(
            [
                seeds.wallet.toBuffer(),
                seeds.tokenProgram.toBuffer(),
                seeds.mint.toBuffer(),
            ],
            programId,
        )
    };
    
}

export module CslSplAssocTokenPDAs {
    export module CslSplTokenPDAs {
        export type AccountSeeds = {
            wallet: PublicKey, 
            tokenProgram: PublicKey, 
            mint: PublicKey, 
        };
        
        export const deriveAccountPDA = (
            seeds: AccountSeeds,
            programId: PublicKey
        ): [PublicKey, number] => {
            return PublicKey.findProgramAddressSync(
                [
                    seeds.wallet.toBuffer(),
                    seeds.tokenProgram.toBuffer(),
                    seeds.mint.toBuffer(),
                ],
                programId,
            )
        };
        
    }
    
}

