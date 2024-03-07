// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import * as pda from "./pda";
import * as T from "./types";
import {
    Commitment,
    Connection,
    GetAccountInfoConfig,
    Keypair,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction,
    TransactionInstruction,
    TransactionSignature,
} from "@solana/web3.js";
import {deserialize, serialize} from "borsh";


let _programId: PublicKey;
let _connection: Connection;

export const initializeClient = (
    programId: PublicKey,
    connection: Connection
) => {
    _programId = programId;
    _connection = connection;
};

export enum ValidateAdvancedCasesInstruction {
/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 */
    Instruction0OnlyMethodWithName = 0,

/**
 * Test `mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction1 = 1,

/**
 * Test `mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction2 = 2,

/**
 * Test `mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction3 = 3,

/**
 * Test `mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction4 = 4,

/**
 * Test `non-mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
    Instruction5 = 5,

/**
 * Test `non-mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
    Instruction6 = 6,

/**
 * Test `non-mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction7 = 7,

/**
 * Test `non-mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction8 = 8,

/**
 * Test `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction9 = 9,

/**
 * Test `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction10 = 10,

/**
 * Test `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction11 = 11,

/**
 * Test `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction12 = 12,

/**
 * Test `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction13 = 13,

/**
 * Test `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction14 = 14,

/**
 * Test `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction15 = 15,

/**
 * Test `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction16 = 16,

/**
 * Test `close_unsafe` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
    Instruction17 = 17,

/**
 * Test `close` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
    SafeInstruction17 = 18,

/**
 * Test `close` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
    Instruction18 = 19,

/**
 * Test `close` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction19 = 20,

/**
 * Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction20 = 21,

/**
 * Test `rent-payer` using `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction21 = 22,

/**
 * Test `rent-payer` using `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction22 = 23,

/**
 * Test `rent-payer` using `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction23 = 24,

/**
 * Test `rent-payer` using `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction24 = 25,

/**
 * Test `rent-payer` using `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction25 = 26,

/**
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
    Instruction26 = 27,

/**
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction27 = 28,

/**
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction28 = 29,

/**
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
    Instruction29 = 30,

/**
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
    SafeInstruction29 = 31,

/**
 * Test `rent-receiver` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
    Instruction30 = 32,

/**
 * Test `rent-receiver` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction31 = 33,

/**
 * Test `rent-receiver` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
    Instruction32 = 34,

/**
 * Test `non-mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
    Instruction33 = 35,

/**
 * Test `mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
    Instruction34 = 36,

/**
 * Test `init` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
    Instruction35 = 37,

/**
 * Test `init_if_needed` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
    Instruction36 = 38,

/**
 * Test `close` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
    Instruction37 = 39,

/**
 * Test `non-mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 */
    Instruction38 = 40,

/**
 * Test `mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
    Instruction39 = 41,

/**
 * Test `init` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
    Instruction40 = 42,

/**
 * Test `init_if_needed` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
    Instruction41 = 43,

/**
 * Test `close` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
    Instruction42 = 44,

/**
 * Test `close_uncheck` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
    SafeInstruction42 = 45,
}

export type Instruction0OnlyMethodWithNameArgs = {
	feePayer: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 */
export const instruction0OnlyMethodWithName = (args: Instruction0OnlyMethodWithNameArgs, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction0OnlyMethodWithName,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 */
export const instruction0OnlyMethodWithNameSendAndConfirm = async (
	args: Omit<Instruction0OnlyMethodWithNameArgs, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction0OnlyMethodWithName({
		...args,
		feePayer: args.signers.feePayer.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
    ]
  );
};

export type Instruction1Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction1 = (args: Instruction1Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction1,
						input_1: args.input1,
        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.account, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction1SendAndConfirm = async (
	args: Omit<Instruction1Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction1({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction2Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction2 = (args: Instruction2Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction2,
						input_1: args.input1,
        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction2SendAndConfirm = async (
	args: Omit<Instruction2Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction2({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction3Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3 = (args: Instruction3Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction3,
						input_1: args.input1,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3SendAndConfirm = async (
	args: Omit<Instruction3Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction3({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction4Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction4 = (args: Instruction4Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction4,
						input_1: args.input1,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction4SendAndConfirm = async (
	args: Omit<Instruction4Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction4({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction5Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `non-mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
export const instruction5 = (args: Instruction5Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction5,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.account, isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `non-mut` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
export const instruction5SendAndConfirm = async (
	args: Omit<Instruction5Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction5({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction6Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `non-mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
export const instruction6 = (args: Instruction6Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction6,

        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `non-mut` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 */
export const instruction6SendAndConfirm = async (
	args: Omit<Instruction6Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction6({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction7Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `non-mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction7 = (args: Instruction7Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction7,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `non-mut` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction7SendAndConfirm = async (
	args: Omit<Instruction7Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction7({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction8Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `non-mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction8 = (args: Instruction8Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction8,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `non-mut` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction8SendAndConfirm = async (
	args: Omit<Instruction8Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction8({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction9Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction9 = (args: Instruction9Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction9,
						input_1: args.input1,
        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction9SendAndConfirm = async (
	args: Omit<Instruction9Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction9({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.account,
    ]
  );
};

export type Instruction10Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction10 = (args: Instruction10Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction10,
						input_1: args.input1,
        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction10SendAndConfirm = async (
	args: Omit<Instruction10Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction10({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction11Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11 = (args: Instruction11Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction11,
						input_1: args.input1,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11SendAndConfirm = async (
	args: Omit<Instruction11Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction11({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction12Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction12 = (args: Instruction12Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction12,
						input_1: args.input1,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction12SendAndConfirm = async (
	args: Omit<Instruction12Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction12({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction13Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction13 = (args: Instruction13Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction13,
						input_1: args.input1,
        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction13SendAndConfirm = async (
	args: Omit<Instruction13Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction13({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.account,
    ]
  );
};

export type Instruction14Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction14 = (args: Instruction14Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction14,
						input_1: args.input1,
        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction14SendAndConfirm = async (
	args: Omit<Instruction14Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction14({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction15Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15 = (args: Instruction15Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction15,
						input_1: args.input1,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15SendAndConfirm = async (
	args: Omit<Instruction15Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction15({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction16Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction16 = (args: Instruction16Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction16,
						input_1: args.input1,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction16SendAndConfirm = async (
	args: Omit<Instruction16Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction16({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction17Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close_unsafe` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction17 = (args: Instruction17Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction17,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.account, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close_unsafe` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction17SendAndConfirm = async (
	args: Omit<Instruction17Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction17({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type SafeInstruction17Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction17 = (args: SafeInstruction17Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.SafeInstruction17,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.account, isSigner: true, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction17SendAndConfirm = async (
	args: Omit<SafeInstruction17Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(safeInstruction17({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.account,
    ]
  );
};

export type Instruction18Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction18 = (args: Instruction18Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction18,

        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction18SendAndConfirm = async (
	args: Omit<Instruction18Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction18({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction19Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction19 = (args: Instruction19Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction19,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction19SendAndConfirm = async (
	args: Omit<Instruction19Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction19({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction20Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction20 = (args: Instruction20Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction20,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction20SendAndConfirm = async (
	args: Omit<Instruction20Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction20({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction21Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-payer` using `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction21 = (args: Instruction21Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction21,
						input_1: args.input1,
        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-payer` using `init` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction21SendAndConfirm = async (
	args: Omit<Instruction21Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction21({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.account,
    ]
  );
};

export type Instruction22Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-payer` using `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction22 = (args: Instruction22Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction22,
						input_1: args.input1,
        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: true},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-payer` using `init` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction22SendAndConfirm = async (
	args: Omit<Instruction22Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction22({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction23Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-payer` using `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction23 = (args: Instruction23Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction23,
						input_1: args.input1,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-payer` using `init` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction23SendAndConfirm = async (
	args: Omit<Instruction23Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction23({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction24Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-payer` using `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction24 = (args: Instruction24Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction24,
						input_1: args.input1,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-payer` using `init` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction24SendAndConfirm = async (
	args: Omit<Instruction24Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction24({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction25Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-payer` using `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction25 = (args: Instruction25Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction25,
						input_1: args.input1,
        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-payer` using `init_if_needed` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction25SendAndConfirm = async (
	args: Omit<Instruction25Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction25({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.account,
    ]
  );
};

export type Instruction26Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction26 = (args: Instruction26Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction26,
						input_1: args.input1,
        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: true},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 */
export const instruction26SendAndConfirm = async (
	args: Omit<Instruction26Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction26({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction27Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction27 = (args: Instruction27Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction27,
						input_1: args.input1,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction27SendAndConfirm = async (
	args: Omit<Instruction27Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction27({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction28Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	input1: number;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction28 = (args: Instruction28Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								input_1: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction28,
						input_1: args.input1,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-payer` using `init_if_needed` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - input_1: {@link number} 
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction28SendAndConfirm = async (
	args: Omit<Instruction28Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction28({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction29Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction29 = (args: Instruction29Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction29,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.account, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction29SendAndConfirm = async (
	args: Omit<Instruction29Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction29({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type SafeInstruction29Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction29 = (args: SafeInstruction29Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.SafeInstruction29,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.account, isSigner: true, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-receiver` with Non-PDA account and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 */
export const safeInstruction29SendAndConfirm = async (
	args: Omit<SafeInstruction29Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(safeInstruction29({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.account,
    ]
  );
};

export type Instruction30Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-receiver` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction30 = (args: Instruction30Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction30,

        }
    );

	const [accountPubkey] = pda.deriveStaticPdaPDA(_programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: true},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-receiver` with PDA account that has one static seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 */
export const instruction30SendAndConfirm = async (
	args: Omit<Instruction30Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction30({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction31Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-receiver` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction31 = (args: Instruction31Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction31,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-receiver` with PDA account that has one static and dynamic seed, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction31SendAndConfirm = async (
	args: Omit<Instruction31Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction31({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction32Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	accountSeedU8Type: number;
	accountSeedU16Type: number;
	accountSeedU32Type: number;
	accountSeedU64Type: bigint;
	accountSeedI8Type: number;
	accountSeedI16Type: number;
	accountSeedI32Type: number;
	accountSeedI64Type: bigint;
	accountSeedStringType: string;
	accountSeedPubkeyType: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `rent-receiver` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction32 = (args: Instruction32Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_u8_type: "u8",
								account_seed_u16_type: "u16",
								account_seed_u32_type: "u32",
								account_seed_u64_type: "u64",
								account_seed_i8_type: "i8",
								account_seed_i16_type: "i16",
								account_seed_i32_type: "i32",
								account_seed_i64_type: "i64",
								account_seed_string_type: "string",
								account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction32,
						account_seed_u8_type: args.accountSeedU8Type,
						account_seed_u16_type: args.accountSeedU16Type,
						account_seed_u32_type: args.accountSeedU32Type,
						account_seed_u64_type: args.accountSeedU64Type,
						account_seed_i8_type: args.accountSeedI8Type,
						account_seed_i16_type: args.accountSeedI16Type,
						account_seed_i32_type: args.accountSeedI32Type,
						account_seed_i64_type: args.accountSeedI64Type,
						account_seed_string_type: args.accountSeedStringType,
						account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.accountSeedU8Type,
				u16Type: args.accountSeedU16Type,
				u32Type: args.accountSeedU32Type,
				u64Type: args.accountSeedU64Type,
				i8Type: args.accountSeedI8Type,
				i16Type: args.accountSeedI16Type,
				i32Type: args.accountSeedI32Type,
				i64Type: args.accountSeedI64Type,
				stringType: args.accountSeedStringType,
				pubkeyType: args.accountSeedPubkeyType,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `rent-receiver` with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - account_seed_u8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u8_type"
 * - account_seed_u16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u16_type"
 * - account_seed_u32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u32_type"
 * - account_seed_u64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "u64_type"
 * - account_seed_i8_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i8_type"
 * - account_seed_i16_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i16_type"
 * - account_seed_i32_type: {@link number} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i32_type"
 * - account_seed_i64_type: {@link BigInt} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "i64_type"
 * - account_seed_string_type: {@link string} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "string_type"
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from the input "account" for the its seed definition "PdaWithAllTypes", sets the seed named "pubkey_type"
 */
export const instruction32SendAndConfirm = async (
	args: Omit<Instruction32Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction32({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction33Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	u8Type: number;
	u16Type: number;
	u32Type: number;
	u64Type: bigint;
	i8Type: number;
	i16Type: number;
	i32Type: number;
	i64Type: bigint;
	stringType: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `non-mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction33 = (args: Instruction33Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								u8_type: "u8",
								u16_type: "u16",
								u32_type: "u32",
								u64_type: "u64",
								i8_type: "i8",
								i16_type: "i16",
								i32_type: "i32",
								i64_type: "i64",
								string_type: "string",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction33,
						u8_type: args.u8Type,
						u16_type: args.u16Type,
						u32_type: args.u32Type,
						u64_type: args.u64Type,
						i8_type: args.i8Type,
						i16_type: args.i16Type,
						i32_type: args.i32Type,
						i64_type: args.i64Type,
						string_type: args.stringType,
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.u8Type,
				u16Type: args.u16Type,
				u32Type: args.u32Type,
				u64Type: args.u64Type,
				i8Type: args.i8Type,
				i16Type: args.i16Type,
				i32Type: args.i32Type,
				i64Type: args.i64Type,
				stringType: args.stringType,
				pubkeyType: args.signer1,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `non-mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction33SendAndConfirm = async (
	args: Omit<Instruction33Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction33({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction34Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	u8Type: number;
	u16Type: number;
	u32Type: number;
	u64Type: bigint;
	i8Type: number;
	i16Type: number;
	i32Type: number;
	i64Type: bigint;
	stringType: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction34 = (args: Instruction34Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								u8_type: "u8",
								u16_type: "u16",
								u32_type: "u32",
								u64_type: "u64",
								i8_type: "i8",
								i16_type: "i16",
								i32_type: "i32",
								i64_type: "i64",
								string_type: "string",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction34,
						u8_type: args.u8Type,
						u16_type: args.u16Type,
						u32_type: args.u32Type,
						u64_type: args.u64Type,
						i8_type: args.i8Type,
						i16_type: args.i16Type,
						i32_type: args.i32Type,
						i64_type: args.i64Type,
						string_type: args.stringType,
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.u8Type,
				u16Type: args.u16Type,
				u32Type: args.u32Type,
				u64Type: args.u64Type,
				i8Type: args.i8Type,
				i16Type: args.i16Type,
				i32Type: args.i32Type,
				i64Type: args.i64Type,
				stringType: args.stringType,
				pubkeyType: args.signer1,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `mut` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction34SendAndConfirm = async (
	args: Omit<Instruction34Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction34({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction35Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	u8Type: number;
	u16Type: number;
	u32Type: number;
	u64Type: bigint;
	i8Type: number;
	i16Type: number;
	i32Type: number;
	i64Type: bigint;
	stringType: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction35 = (args: Instruction35Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								u8_type: "u8",
								u16_type: "u16",
								u32_type: "u32",
								u64_type: "u64",
								i8_type: "i8",
								i16_type: "i16",
								i32_type: "i32",
								i64_type: "i64",
								string_type: "string",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction35,
						u8_type: args.u8Type,
						u16_type: args.u16Type,
						u32_type: args.u32Type,
						u64_type: args.u64Type,
						i8_type: args.i8Type,
						i16_type: args.i16Type,
						i32_type: args.i32Type,
						i64_type: args.i64Type,
						string_type: args.stringType,
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.u8Type,
				u16Type: args.u16Type,
				u32Type: args.u32Type,
				u64Type: args.u64Type,
				i8Type: args.i8Type,
				i16Type: args.i16Type,
				i32Type: args.i32Type,
				i64Type: args.i64Type,
				stringType: args.stringType,
				pubkeyType: args.signer1,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction35SendAndConfirm = async (
	args: Omit<Instruction35Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction35({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction36Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	u8Type: number;
	u16Type: number;
	u32Type: number;
	u64Type: bigint;
	i8Type: number;
	i16Type: number;
	i32Type: number;
	i64Type: bigint;
	stringType: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init_if_needed` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction36 = (args: Instruction36Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								u8_type: "u8",
								u16_type: "u16",
								u32_type: "u32",
								u64_type: "u64",
								i8_type: "i8",
								i16_type: "i16",
								i32_type: "i32",
								i64_type: "i64",
								string_type: "string",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction36,
						u8_type: args.u8Type,
						u16_type: args.u16Type,
						u32_type: args.u32Type,
						u64_type: args.u64Type,
						i8_type: args.i8Type,
						i16_type: args.i16Type,
						i32_type: args.i32Type,
						i64_type: args.i64Type,
						string_type: args.stringType,
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.u8Type,
				u16Type: args.u16Type,
				u32Type: args.u32Type,
				u64Type: args.u64Type,
				i8Type: args.i8Type,
				i16Type: args.i16Type,
				i32Type: args.i32Type,
				i64Type: args.i64Type,
				stringType: args.stringType,
				pubkeyType: args.signer1,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init_if_needed` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction36SendAndConfirm = async (
	args: Omit<Instruction36Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction36({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction37Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	u8Type: number;
	u16Type: number;
	u32Type: number;
	u64Type: bigint;
	i8Type: number;
	i16Type: number;
	i32Type: number;
	i64Type: bigint;
	stringType: string;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction37 = (args: Instruction37Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								u8_type: "u8",
								u16_type: "u16",
								u32_type: "u32",
								u64_type: "u64",
								i8_type: "i8",
								i16_type: "i16",
								i32_type: "i32",
								i64_type: "i64",
								string_type: "string",
            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction37,
						u8_type: args.u8Type,
						u16_type: args.u16Type,
						u32_type: args.u32Type,
						u64_type: args.u64Type,
						i8_type: args.i8Type,
						i16_type: args.i16Type,
						i32_type: args.i32Type,
						i64_type: args.i64Type,
						string_type: args.stringType,
        }
    );

		const [accountPubkey] = pda.derivePdaWithAllTypesPDA({
				u8Type: args.u8Type,
				u16Type: args.u16Type,
				u32Type: args.u32Type,
				u64Type: args.u64Type,
				i8Type: args.i8Type,
				i16Type: args.i16Type,
				i32Type: args.i32Type,
				i64Type: args.i64Type,
				stringType: args.stringType,
				pubkeyType: args.signer1,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close` with PDA account that maps seeds with signers and inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 *
 * Data:
 * - u8_type: {@link number} 
 * - u16_type: {@link number} 
 * - u32_type: {@link number} 
 * - u64_type: {@link BigInt} 
 * - i8_type: {@link number} 
 * - i16_type: {@link number} 
 * - i32_type: {@link number} 
 * - i64_type: {@link BigInt} 
 * - string_type: {@link string} 
 */
export const instruction37SendAndConfirm = async (
	args: Omit<Instruction37Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
	  signers: {
			feePayer: Keypair,
			signer1: Keypair,
			signer2: Keypair,
			signer3: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction37({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer1: args.signers.signer1.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer1,
				args.signers.signer2,
				args.signers.signer3,
    ]
  );
};

export type Instruction38Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `non-mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 */
export const instruction38 = (args: Instruction38Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction38,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `non-mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 */
export const instruction38SendAndConfirm = async (
	args: Omit<Instruction38Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
	  signers: {
			feePayer: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			signer1: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction38({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		signer1: args.signers.signer1.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.signer1,
    ]
  );
};

export type Instruction39Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const instruction39 = (args: Instruction39Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction39,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `mut` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const instruction39SendAndConfirm = async (
	args: Omit<Instruction39Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
	  signers: {
			feePayer: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			signer1: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction39({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		signer1: args.signers.signer1.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.signer1,
    ]
  );
};

export type Instruction40Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const instruction40 = (args: Instruction40Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction40,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const instruction40SendAndConfirm = async (
	args: Omit<Instruction40Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
	  signers: {
			feePayer: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			signer1: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction40({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		signer1: args.signers.signer1.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.signer1,
    ]
  );
};

export type Instruction41Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `init_if_needed` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const instruction41 = (args: Instruction41Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction41,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `init_if_needed` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 */
export const instruction41SendAndConfirm = async (
	args: Omit<Instruction41Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
	  signers: {
			feePayer: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			signer1: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction41({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		signer1: args.signers.signer1.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.signer1,
    ]
  );
};

export type Instruction42Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const instruction42 = (args: Instruction42Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.Instruction42,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const instruction42SendAndConfirm = async (
	args: Omit<Instruction42Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
	  signers: {
			feePayer: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			signer1: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction42({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		signer1: args.signers.signer1.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.signer1,
    ]
  );
};

export type SafeInstruction42Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Test `close_uncheck` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const safeInstruction42 = (args: SafeInstruction42Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateAdvancedCasesInstruction.SafeInstruction42,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Test `close_uncheck` Non-PDA account as a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} 
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 */
export const safeInstruction42SendAndConfirm = async (
	args: Omit<SafeInstruction42Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
	  signers: {
			feePayer: Keypair,
			signer2: Keypair,
			signer3: Keypair,
			signer1: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(safeInstruction42({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		signer2: args.signers.signer2.publicKey,
		signer3: args.signers.signer3.publicKey,
		signer1: args.signers.signer1.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.signer2,
				args.signers.signer3,
				args.signers.signer1,
    ]
  );
};

// Getters

export const getState = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.State | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeState(deserialize(T.StateSchema, buffer.data) as Record<string, unknown>);
}


// Websocket Events

