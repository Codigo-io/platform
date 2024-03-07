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

export enum ValidateImportsInstruction {
/**
 * Reference `validate_accounts_ref.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction1 = 0,

/**
 * Reference `validate_accounts_ref.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction2 = 1,

/**
 * Reference `validate_accounts_ref.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction3 = 2,

/**
 * Reference `validate_accounts_ref.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
    Instruction4 = 3,

/**
 * Reference `validate_accounts_ref.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction5 = 4,

/**
 * Reference `validate_accounts_ref.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction6 = 5,

/**
 * Reference `validate_accounts_ref.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction7 = 6,

/**
 * Reference `validate_accounts_ref.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
    Instruction8 = 7,

/**
 * Reference `validate_accounts_ref.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction9 = 8,

/**
 * Reference `validate_accounts_ref.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction10 = 9,

/**
 * Reference `validate_accounts_ref.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction11 = 10,

/**
 * Reference `validate_accounts_ref.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
    Instruction12 = 11,

/**
 * Reference `validate_accounts_ref.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction13 = 12,

/**
 * Reference `validate_accounts_ref.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction14 = 13,

/**
 * Reference `validate_accounts_ref.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction15 = 14,

/**
 * Reference `validate_accounts_ref.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
    Instruction16 = 15,

/**
 * Reference `validate_accounts_ref.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction17 = 16,

/**
 * Reference `validate_accounts_ref.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    SafeInstruction17 = 17,

/**
 * Reference `validate_accounts_ref.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction18 = 18,

/**
 * Reference `validate_accounts_ref.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction19 = 19,

/**
 * Reference `validate_accounts_ref.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
    Instruction20 = 20,

/**
 * Reference `validate_advanced_cases.instruction0_only_method_with_name`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction0 = 21,

/**
 * Reference `validate_advanced_cases.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction21 = 22,

/**
 * Reference `validate_advanced_cases.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction22 = 23,

/**
 * Reference `validate_advanced_cases.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction23 = 24,

/**
 * Reference `validate_advanced_cases.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
    Instruction24 = 25,

/**
 * Reference `validate_advanced_cases.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction25 = 26,

/**
 * Reference `validate_advanced_cases.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction26 = 27,

/**
 * Reference `validate_advanced_cases.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction27 = 28,

/**
 * Reference `validate_advanced_cases.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
    Instruction28 = 29,

/**
 * Reference `validate_advanced_cases.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction29 = 30,

/**
 * Reference `validate_advanced_cases.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction30 = 31,

/**
 * Reference `validate_advanced_cases.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction31 = 32,

/**
 * Reference `validate_advanced_cases.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
    Instruction32 = 33,

/**
 * Reference `validate_advanced_cases.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction33 = 34,

/**
 * Reference `validate_advanced_cases.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction34 = 35,

/**
 * Reference `validate_advanced_cases.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction35 = 36,

/**
 * Reference `validate_advanced_cases.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
    Instruction36 = 37,

/**
 * Reference `validate_advanced_cases.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction37 = 38,

/**
 * Reference `validate_advanced_cases.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    SafeInstruction37 = 39,

/**
 * Reference `validate_advanced_cases.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction38 = 40,

/**
 * Reference `validate_advanced_cases.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction39 = 41,

/**
 * Reference `validate_advanced_cases.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
    Instruction40 = 42,

/**
 * Reference `validate_advanced_cases.instruction21`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction41 = 43,

/**
 * Reference `validate_advanced_cases.instruction22`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction42 = 44,

/**
 * Reference `validate_advanced_cases.instruction23`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction43 = 45,

/**
 * Reference `validate_advanced_cases.instruction24`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
    Instruction44 = 46,

/**
 * Reference `validate_advanced_cases.instruction25`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction45 = 47,

/**
 * Reference `validate_advanced_cases.instruction26`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction46 = 48,

/**
 * Reference `validate_advanced_cases.instruction27`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction47 = 49,

/**
 * Reference `validate_advanced_cases.instruction28`, where caller maps with a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
    Instruction48 = 50,

/**
 * Reference `validate_advanced_cases.instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction49 = 51,

/**
 * Reference `validate_advanced_cases.safe_instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    SafeInstruction49 = 52,

/**
 * Reference `validate_advanced_cases.instruction30`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction50 = 53,

/**
 * Reference `validate_advanced_cases.instruction31`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
    Instruction51 = 54,

/**
 * Reference `validate_advanced_cases.instruction32`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
    Instruction52 = 55,

/**
 * Reference `validate_advanced_cases.instruction33`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 */
    Instruction53 = 56,

/**
 * Reference `validate_advanced_cases.instruction34`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 */
    Instruction54 = 57,

/**
 * Reference `validate_advanced_cases.instruction35`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 */
    Instruction55 = 58,

/**
 * Reference `validate_advanced_cases.instruction36`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 */
    Instruction56 = 59,

/**
 * Reference `validate_advanced_cases.instruction37`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 */
    Instruction57 = 60,

/**
 * Reference `validate_advanced_cases.instruction38`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction58 = 61,

/**
 * Reference `validate_advanced_cases.instruction39`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction59 = 62,

/**
 * Reference `validate_advanced_cases.instruction40`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction60 = 63,

/**
 * Reference `validate_advanced_cases.instruction41`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction61 = 64,

/**
 * Reference `validate_advanced_cases.instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction62 = 65,

/**
 * Reference `validate_advanced_cases.safe_instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    SafeInstruction62 = 66,

/**
 * Reference `validate_data_types.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
    Instruction63 = 67,

/**
 * Reference `validate_data_types.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
    Instruction64 = 68,
}

export type Instruction1Args = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction1 = (args: Instruction1Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction1,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction1SendAndConfirm = async (
	args: Omit<Instruction1Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction1({
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

export type Instruction2Args = {
	feePayer: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction2 = (args: Instruction2Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction2,

        }
    );

	const [accountPubkey] = pda.ValidateAccountsPDAs.deriveStaticPdaPDA(new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction2SendAndConfirm = async (
	args: Omit<Instruction2Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction2({
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

export type Instruction3Args = {
	feePayer: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3 = (args: Instruction3Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction3,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAccountsPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction3SendAndConfirm = async (
	args: Omit<Instruction3Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction3({
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

export type Instruction4Args = {
	feePayer: PublicKey;
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
 * Reference `validate_accounts_ref.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction4 = (args: Instruction4Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction4,
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

		const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction4SendAndConfirm = async (
	args: Omit<Instruction4Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction4({
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

export type Instruction5Args = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction5 = (args: Instruction5Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction5,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction5SendAndConfirm = async (
	args: Omit<Instruction5Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction5({
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

export type Instruction6Args = {
	feePayer: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction6 = (args: Instruction6Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction6,

        }
    );

	const [accountPubkey] = pda.ValidateAccountsPDAs.deriveStaticPdaPDA(new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction6SendAndConfirm = async (
	args: Omit<Instruction6Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction6({
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

export type Instruction7Args = {
	feePayer: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
            id: ValidateImportsInstruction.Instruction7,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAccountsPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction7SendAndConfirm = async (
	args: Omit<Instruction7Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction7({
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

export type Instruction8Args = {
	feePayer: PublicKey;
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
 * Reference `validate_accounts_ref.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
            id: ValidateImportsInstruction.Instruction8,
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

		const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
	args: Omit<Instruction8Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction8({
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

export type Instruction9Args = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction9 = (args: Instruction9Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction9,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction9SendAndConfirm = async (
	args: Omit<Instruction9Args, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction9({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export type Instruction10Args = {
	feePayer: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction10 = (args: Instruction10Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction10,

        }
    );

	const [accountPubkey] = pda.ValidateAccountsPDAs.deriveStaticPdaPDA(new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction10SendAndConfirm = async (
	args: Omit<Instruction10Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction10({
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

export type Instruction11Args = {
	feePayer: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11 = (args: Instruction11Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction11,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAccountsPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction11SendAndConfirm = async (
	args: Omit<Instruction11Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction11({
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

export type Instruction12Args = {
	feePayer: PublicKey;
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
 * Reference `validate_accounts_ref.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction12 = (args: Instruction12Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction12,
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

		const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction12SendAndConfirm = async (
	args: Omit<Instruction12Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction12({
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

export type Instruction13Args = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction13 = (args: Instruction13Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction13,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction13SendAndConfirm = async (
	args: Omit<Instruction13Args, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction13({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export type Instruction14Args = {
	feePayer: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction14 = (args: Instruction14Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction14,

        }
    );

	const [accountPubkey] = pda.ValidateAccountsPDAs.deriveStaticPdaPDA(new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction14SendAndConfirm = async (
	args: Omit<Instruction14Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction14({
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

export type Instruction15Args = {
	feePayer: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15 = (args: Instruction15Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction15,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAccountsPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction15SendAndConfirm = async (
	args: Omit<Instruction15Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction15({
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

export type Instruction16Args = {
	feePayer: PublicKey;
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
 * Reference `validate_accounts_ref.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction16 = (args: Instruction16Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction16,
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

		const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
export const instruction16SendAndConfirm = async (
	args: Omit<Instruction16Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction16({
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

export type Instruction17Args = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction17 = (args: Instruction17Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction17,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction17SendAndConfirm = async (
	args: Omit<Instruction17Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction17({
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

export type SafeInstruction17Args = {
	feePayer: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const safeInstruction17 = (args: SafeInstruction17Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.SafeInstruction17,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const safeInstruction17SendAndConfirm = async (
	args: Omit<SafeInstruction17Args, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(safeInstruction17({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export type Instruction18Args = {
	feePayer: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction18 = (args: Instruction18Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction18,

        }
    );

	const [accountPubkey] = pda.ValidateAccountsPDAs.deriveStaticPdaPDA(new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction18SendAndConfirm = async (
	args: Omit<Instruction18Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction18({
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

export type Instruction19Args = {
	feePayer: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
            id: ValidateImportsInstruction.Instruction19,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAccountsPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction19SendAndConfirm = async (
	args: Omit<Instruction19Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction19({
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

export type Instruction20Args = {
	feePayer: PublicKey;
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
 * Reference `validate_accounts_ref.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
            id: ValidateImportsInstruction.Instruction20,
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

		const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_accounts_ref.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link State} 
 * 2. `[]` validate_accounts_v0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
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
	args: Omit<Instruction20Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction20({
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

export type Instruction0Args = {
	feePayer: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction0_only_method_with_name`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction0 = (args: Instruction0Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction0,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction0_only_method_with_name`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction0SendAndConfirm = async (
	args: Omit<Instruction0Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction0({
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

export type Instruction21Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction21 = (args: Instruction21Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction21,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction21SendAndConfirm = async (
	args: Omit<Instruction21Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction21({
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

export type Instruction22Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction22 = (args: Instruction22Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction22,

        }
    );

	const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction23 = (args: Instruction23Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction23,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
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
 * Reference `validate_advanced_cases.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction24 = (args: Instruction24Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction24,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction25 = (args: Instruction25Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction25,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction25SendAndConfirm = async (
	args: Omit<Instruction25Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction25({
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

export type Instruction26Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction26 = (args: Instruction26Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction26,

        }
    );

	const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction27 = (args: Instruction27Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction27,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
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
 * Reference `validate_advanced_cases.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction28 = (args: Instruction28Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction28,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
 * Reference `validate_advanced_cases.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction29 = (args: Instruction29Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction29,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction29SendAndConfirm = async (
	args: Omit<Instruction29Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


	trx.add(instruction29({
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
 * Reference `validate_advanced_cases.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction30 = (args: Instruction30Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction30,

        }
    );

	const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
 * Reference `validate_advanced_cases.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
            id: ValidateImportsInstruction.Instruction31,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
 * Reference `validate_advanced_cases.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
            id: ValidateImportsInstruction.Instruction32,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction33 = (args: Instruction33Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction33,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction33SendAndConfirm = async (
	args: Omit<Instruction33Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


	trx.add(instruction33({
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

export type Instruction34Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction34 = (args: Instruction34Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction34,

        }
    );

	const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction35 = (args: Instruction35Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction35,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
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
 * Reference `validate_advanced_cases.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction36 = (args: Instruction36Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction36,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction37 = (args: Instruction37Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction37,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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

export type SafeInstruction37Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction37 = (args: SafeInstruction37Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.SafeInstruction37,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.safe_instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction37SendAndConfirm = async (
	args: Omit<SafeInstruction37Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


	trx.add(safeInstruction37({
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

export type Instruction38Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction38 = (args: Instruction38Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction38,

        }
    );

	const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction38SendAndConfirm = async (
	args: Omit<Instruction38Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction38({
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

export type Instruction39Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction39 = (args: Instruction39Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction39,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction39SendAndConfirm = async (
	args: Omit<Instruction39Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction39({
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

export type Instruction40Args = {
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
 * Reference `validate_advanced_cases.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction40 = (args: Instruction40Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction40,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction40SendAndConfirm = async (
	args: Omit<Instruction40Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction40({
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

export type Instruction41Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction21`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction41 = (args: Instruction41Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction41,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction21`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction41SendAndConfirm = async (
	args: Omit<Instruction41Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


	trx.add(instruction41({
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

export type Instruction42Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction22`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction42 = (args: Instruction42Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction42,

        }
    );

	const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: true},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction22`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction42SendAndConfirm = async (
	args: Omit<Instruction42Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction42({
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

export type Instruction43Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction23`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction43 = (args: Instruction43Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction43,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction23`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction43SendAndConfirm = async (
	args: Omit<Instruction43Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction43({
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

export type Instruction44Args = {
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
 * Reference `validate_advanced_cases.instruction24`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction44 = (args: Instruction44Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction44,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction24`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction44SendAndConfirm = async (
	args: Omit<Instruction44Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction44({
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

export type Instruction45Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction25`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction45 = (args: Instruction45Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction45,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction25`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction45SendAndConfirm = async (
	args: Omit<Instruction45Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


	trx.add(instruction45({
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

export type Instruction46Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction26`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction46 = (args: Instruction46Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction46,

        }
    );

	const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: true},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction26`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction46SendAndConfirm = async (
	args: Omit<Instruction46Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction46({
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

export type Instruction47Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction27`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction47 = (args: Instruction47Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction47,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction27`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction47SendAndConfirm = async (
	args: Omit<Instruction47Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction47({
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

export type Instruction48Args = {
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
 * Reference `validate_advanced_cases.instruction28`, where caller maps with a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction48 = (args: Instruction48Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction48,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction28`, where caller maps with a signer
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction48SendAndConfirm = async (
	args: Omit<Instruction48Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction48({
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

export type Instruction49Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction49 = (args: Instruction49Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction49,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction49SendAndConfirm = async (
	args: Omit<Instruction49Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction49({
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

export type SafeInstruction49Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	account: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.safe_instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction49 = (args: SafeInstruction49Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.SafeInstruction49,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.safe_instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable, signer]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction49SendAndConfirm = async (
	args: Omit<SafeInstruction49Args, "feePayer" | "signer1" | "signer2" | "signer3" | "account"> & {
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


	trx.add(safeInstruction49({
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

export type Instruction50Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction30`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction50 = (args: Instruction50Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction50,

        }
    );

	const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: true},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction30`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction50SendAndConfirm = async (
	args: Omit<Instruction50Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction50({
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

export type Instruction51Args = {
	feePayer: PublicKey;
	signer1: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	accountSeedDynamic: number;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction31`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction51 = (args: Instruction51Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",
								account_seed_dynamic: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction51,
						account_seed_dynamic: args.accountSeedDynamic,
        }
    );

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA({
				dynamic: args.accountSeedDynamic,
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction31`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from the input "account" for the its seed definition "DynamicPda", sets the seed named "dynamic"
 */
export const instruction51SendAndConfirm = async (
	args: Omit<Instruction51Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction51({
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

export type Instruction52Args = {
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
 * Reference `validate_advanced_cases.instruction32`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction52 = (args: Instruction52Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction52,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction32`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
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
export const instruction52SendAndConfirm = async (
	args: Omit<Instruction52Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction52({
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

export type Instruction53Args = {
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
 * Reference `validate_advanced_cases.instruction33`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 */
export const instruction53 = (args: Instruction53Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction53,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction33`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction33.instruction33" because is linked to a seed.
 */
export const instruction53SendAndConfirm = async (
	args: Omit<Instruction53Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction53({
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

export type Instruction54Args = {
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
 * Reference `validate_advanced_cases.instruction34`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 */
export const instruction54 = (args: Instruction54Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction54,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction34`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction34.instruction34" because is linked to a seed.
 */
export const instruction54SendAndConfirm = async (
	args: Omit<Instruction54Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction54({
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

export type Instruction55Args = {
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
 * Reference `validate_advanced_cases.instruction35`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 */
export const instruction55 = (args: Instruction55Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction55,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction35`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction35.instruction35" because is linked to a seed.
 */
export const instruction55SendAndConfirm = async (
	args: Omit<Instruction55Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction55({
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

export type Instruction56Args = {
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
 * Reference `validate_advanced_cases.instruction36`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 */
export const instruction56 = (args: Instruction56Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction56,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction36`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PublicKey} 
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 6. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction36.instruction36" because is linked to a seed.
 */
export const instruction56SendAndConfirm = async (
	args: Omit<Instruction56Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction56({
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

export type Instruction57Args = {
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
 * Reference `validate_advanced_cases.instruction37`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 */
export const instruction57 = (args: Instruction57Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
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
            id: ValidateImportsInstruction.Instruction57,
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

		const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA({
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
    }, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction37`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link State} 
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - u8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - u64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i8_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i16_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i32_type: {@link number} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - i64_type: {@link BigInt} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 * - string_type: {@link string} This input is infer from the uses "instruction37.instruction37" because is linked to a seed.
 */
export const instruction57SendAndConfirm = async (
	args: Omit<Instruction57Args, "feePayer" | "signer1" | "signer2" | "signer3"> & {
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


	trx.add(instruction57({
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

export type Instruction58Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction38`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction58 = (args: Instruction58Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction58,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.signer1, isSigner: true, isWritable: false},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction38`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction58SendAndConfirm = async (
	args: Omit<Instruction58Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


	trx.add(instruction58({
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

export type Instruction59Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction39`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction59 = (args: Instruction59Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction59,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction39`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction59SendAndConfirm = async (
	args: Omit<Instruction59Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


	trx.add(instruction59({
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

export type Instruction60Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction40`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction60 = (args: Instruction60Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction60,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction40`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction60SendAndConfirm = async (
	args: Omit<Instruction60Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


	trx.add(instruction60({
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

export type Instruction61Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction41`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction61 = (args: Instruction61Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction61,

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
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction41`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction61SendAndConfirm = async (
	args: Omit<Instruction61Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


	trx.add(instruction61({
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

export type Instruction62Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction62 = (args: Instruction62Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction62,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction62SendAndConfirm = async (
	args: Omit<Instruction62Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


	trx.add(instruction62({
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

export type SafeInstruction62Args = {
	feePayer: PublicKey;
	signer2: PublicKey;
	signer3: PublicKey;
	signer1: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_advanced_cases.safe_instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction62 = (args: SafeInstruction62Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.SafeInstruction62,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.signer2, isSigner: true, isWritable: false},
						{pubkey: args.signer3, isSigner: true, isWritable: false},
						{pubkey: args.signer1, isSigner: true, isWritable: true},
						{pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_advanced_cases.safe_instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link State} 
 * 4. `[]` validate_advanced_cases_v0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const safeInstruction62SendAndConfirm = async (
	args: Omit<SafeInstruction62Args, "feePayer" | "signer2" | "signer3" | "signer1"> & {
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


	trx.add(safeInstruction62({
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

export type Instruction63Args = {
	feePayer: PublicKey;
	account: PublicKey;
	accountInfoType: PublicKey;
	accountInfoTypeMut: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_data_types.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction63 = (args: Instruction63Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction63,

        }
    );



    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: args.account, isSigner: true, isWritable: true},
						{pubkey: args.accountInfoType, isSigner: false, isWritable: false},
						{pubkey: args.accountInfoTypeMut, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_data_types.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction63SendAndConfirm = async (
	args: Omit<Instruction63Args, "feePayer" | "account"> & {
	  signers: {
			feePayer: Keypair,
			account: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction63({
		...args,
		feePayer: args.signers.feePayer.publicKey,
		account: args.signers.account.publicKey,
	}, remainingAccounts));

  return await sendAndConfirmTransaction(
    _connection,
    trx,
    [
				args.signers.feePayer,
				args.signers.account,
    ]
  );
};

export type Instruction64Args = {
	feePayer: PublicKey;
	accountInfoType: PublicKey;
	accountInfoTypeMut: PublicKey;
};

/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_data_types.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction64 = (args: Instruction64Args, remainingAccounts: Array<PublicKey> = []): TransactionInstruction => {
		const data = serialize(
        {
            struct: {
                id: "u8",

            },
        },
        {
            id: ValidateImportsInstruction.Instruction64,

        }
    );

	const [accountPubkey] = pda.ValidateDataTypesPDAs.deriveMasterTypesPdaPDA(new PublicKey("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY"));

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
						{pubkey: args.feePayer, isSigner: true, isWritable: true},
						{pubkey: accountPubkey, isSigner: false, isWritable: true},
						{pubkey: args.accountInfoType, isSigner: false, isWritable: false},
						{pubkey: args.accountInfoTypeMut, isSigner: false, isWritable: true},
						{pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
						{pubkey: new PublicKey("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY"), isSigner: false, isWritable: false},
            ...remainingAccounts.map(e => ({pubkey: e, isSigner: false, isWritable: false})),
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Reference `validate_data_types.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction64SendAndConfirm = async (
	args: Omit<Instruction64Args, "feePayer"> & {
	  signers: {
			feePayer: Keypair,
	  }
  }, 
  remainingAccounts: Array<PublicKey> = []
): Promise<TransactionSignature> => {
  const trx = new Transaction();


	trx.add(instruction64({
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

// Getters

export module ValidateAccountsGetters {
    export const getState = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAccountsTypes.State | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAccountsTypes.decodeState(deserialize(T.ValidateAccountsTypes.StateSchema, buffer.data) as Record<string, unknown>);
    }
}

export module ValidateAdvancedCasesGetters {
    export const getState = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAdvancedCasesTypes.State | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAdvancedCasesTypes.decodeState(deserialize(T.ValidateAdvancedCasesTypes.StateSchema, buffer.data) as Record<string, unknown>);
    }
}

export module ValidateDataTypesGetters {
    export const getState = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateDataTypesTypes.State | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateDataTypesTypes.decodeState(deserialize(T.ValidateDataTypesTypes.StateSchema, buffer.data) as Record<string, unknown>);
    }
}



// Websocket Events

