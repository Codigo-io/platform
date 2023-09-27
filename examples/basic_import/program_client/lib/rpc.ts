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
 * 1. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction1 = 0,

/**
 * Reference `validate_accounts_ref.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction2 = 1,

/**
 * Reference `validate_accounts_ref.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
    Instruction3 = 2,

/**
 * Reference `validate_accounts_ref.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
    Instruction4 = 3,

/**
 * Reference `validate_accounts_ref.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link NonPdaaccountWithOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction5 = 4,

/**
 * Reference `validate_accounts_ref.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction6 = 5,

/**
 * Reference `validate_accounts_ref.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
    Instruction7 = 6,

/**
 * Reference `validate_accounts_ref.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
    Instruction8 = 7,

/**
 * Reference `validate_accounts_ref.instruction9`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction9 = 8,

/**
 * Reference `validate_accounts_ref.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction10 = 9,

/**
 * Reference `validate_accounts_ref.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction11 = 10,

/**
 * Reference `validate_accounts_ref.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction12 = 11,

/**
 * Reference `validate_accounts_ref.instruction13`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction13 = 12,

/**
 * Reference `validate_accounts_ref.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction14 = 13,

/**
 * Reference `validate_accounts_ref.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction15 = 14,

/**
 * Reference `validate_accounts_ref.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction16 = 15,

/**
 * Reference `validate_accounts_ref.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction17 = 16,

/**
 * Reference `validate_accounts_ref.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
    Instruction18 = 17,

/**
 * Reference `validate_accounts_ref.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
    Instruction19 = 18,

/**
 * Reference `validate_accounts_ref.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
    Instruction20 = 19,

/**
 * Reference `validate_advanced_cases.instruction0_only_method_with_name`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction0 = 20,

/**
 * Reference `validate_advanced_cases.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction21 = 21,

/**
 * Reference `validate_advanced_cases.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction22 = 22,

/**
 * Reference `validate_advanced_cases.instruction3`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
    Instruction23 = 23,

/**
 * Reference `validate_advanced_cases.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
    Instruction24 = 24,

/**
 * Reference `validate_advanced_cases.instruction5`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction25 = 25,

/**
 * Reference `validate_advanced_cases.instruction6`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction26 = 26,

/**
 * Reference `validate_advanced_cases.instruction7`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
    Instruction27 = 27,

/**
 * Reference `validate_advanced_cases.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
    Instruction28 = 28,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction29 = 29,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction30 = 30,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction31 = 31,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction32 = 32,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction33 = 33,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction34 = 34,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction35 = 35,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction36 = 36,

/**
 * Reference `validate_advanced_cases.instruction17`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction37 = 37,

/**
 * Reference `validate_advanced_cases.instruction18`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction38 = 38,

/**
 * Reference `validate_advanced_cases.instruction19`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
    Instruction39 = 39,

/**
 * Reference `validate_advanced_cases.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
    Instruction40 = 40,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction41 = 41,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction42 = 42,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction43 = 43,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction44 = 44,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction45 = 45,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction46 = 46,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction47 = 47,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction48 = 48,

/**
 * Reference `validate_advanced_cases.instruction29`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction49 = 49,

/**
 * Reference `validate_advanced_cases.instruction30`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[writable, signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction50 = 50,

/**
 * Reference `validate_advanced_cases.instruction31`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
    Instruction51 = 51,

/**
 * Reference `validate_advanced_cases.instruction32`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[writable, signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
    Instruction52 = 52,

/**
 * Reference `validate_advanced_cases.instruction33`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 */
    Instruction53 = 53,

/**
 * Reference `validate_advanced_cases.instruction34`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 */
    Instruction54 = 54,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction55 = 55,

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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction56 = 56,

/**
 * Reference `validate_advanced_cases.instruction37`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_1: {@link PublicKey} 
 * 2. `[signer]` signer_2: {@link PublicKey} 
 * 3. `[signer]` signer_3: {@link PublicKey} 
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 */
    Instruction57 = 57,

/**
 * Reference `validate_advanced_cases.instruction38`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[signer]` signer_1: {@link NonPdaaccountWithOneField} 
 * 4. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction58 = 58,

/**
 * Reference `validate_advanced_cases.instruction39`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link NonPdaaccountWithOneField} 
 * 4. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction59 = 59,

/**
 * Reference `validate_advanced_cases.instruction40`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction60 = 60,

/**
 * Reference `validate_advanced_cases.instruction41`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction61 = 61,

/**
 * Reference `validate_advanced_cases.instruction42`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[signer]` signer_2: {@link PublicKey} 
 * 2. `[signer]` signer_3: {@link PublicKey} 
 * 3. `[writable, signer]` signer_1: {@link NonPdaaccountWithOneField} 
 * 4. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
    Instruction62 = 62,

/**
 * Reference `validate_data_types.instruction1`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v_0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
    Instruction63 = 63,

/**
 * Reference `validate_data_types.instruction2`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` account_info_type: {@link PublicKey} 
 * 3. `[writable]` account_info_type_mut: {@link PublicKey} 
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 5. `[]` validate_data_types_v_0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
    Instruction64 = 64,
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
 * 1. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction1 = (args: Instruction1Args): TransactionInstruction => {
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
 * 1. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction1SendAndConfirm = async (
    args: Omit<Instruction1Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction1({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction2 = (args: Instruction2Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction2SendAndConfirm = async (
    args: Omit<Instruction2Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction2({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction3 = (args: Instruction3Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: args.accountSeedDynamic,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction3SendAndConfirm = async (
    args: Omit<Instruction3Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction3({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type Instruction4Args = {
    feePayer: PublicKey;
    accountSeedU8Type: number;
    accountSeedU16Type: number;
    accountSeedU32Type: number;
    accountSeedI8Type: number;
    accountSeedI16Type: number;
    accountSeedI32Type: number;
    accountSeedStringType: string;
    accountSeedPubkeyType: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction4`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction4 = (args: Instruction4Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                account_seed_u_8_type: "u8",
                account_seed_u_16_type: "u16",
                account_seed_u_32_type: "u32",
                account_seed_i_8_type: "i8",
                account_seed_i_16_type: "i16",
                account_seed_i_32_type: "i32",
                account_seed_string_type: "string",
                account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateImportsInstruction.Instruction4,
            account_seed_u_8_type: args.accountSeedU8Type,
            account_seed_u_16_type: args.accountSeedU16Type,
            account_seed_u_32_type: args.accountSeedU32Type,
            account_seed_i_8_type: args.accountSeedI8Type,
            account_seed_i_16_type: args.accountSeedI16Type,
            account_seed_i_32_type: args.accountSeedI32Type,
            account_seed_string_type: args.accountSeedStringType,
            account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        u8Type: args.accountSeedU8Type,
        u16Type: args.accountSeedU16Type,
        u32Type: args.accountSeedU32Type,
        i8Type: args.accountSeedI8Type,
        i16Type: args.accountSeedI16Type,
        i32Type: args.accountSeedI32Type,
        stringType: args.accountSeedStringType,
        pubkeyType: args.accountSeedPubkeyType,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 1. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction4SendAndConfirm = async (
    args: Omit<Instruction4Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction4({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 1. `[]` account: {@link NonPdaaccountWithOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction5 = (args: Instruction5Args): TransactionInstruction => {
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
 * 1. `[]` account: {@link NonPdaaccountWithOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction5SendAndConfirm = async (
    args: Omit<Instruction5Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction5({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 1. `[]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction6 = (args: Instruction6Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 1. `[]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction6SendAndConfirm = async (
    args: Omit<Instruction6Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction6({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 1. `[]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction7 = (args: Instruction7Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: args.accountSeedDynamic,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 1. `[]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction7SendAndConfirm = async (
    args: Omit<Instruction7Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction7({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type Instruction8Args = {
    feePayer: PublicKey;
    accountSeedU8Type: number;
    accountSeedU16Type: number;
    accountSeedU32Type: number;
    accountSeedI8Type: number;
    accountSeedI16Type: number;
    accountSeedI32Type: number;
    accountSeedStringType: string;
    accountSeedPubkeyType: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction8`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction8 = (args: Instruction8Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                account_seed_u_8_type: "u8",
                account_seed_u_16_type: "u16",
                account_seed_u_32_type: "u32",
                account_seed_i_8_type: "i8",
                account_seed_i_16_type: "i16",
                account_seed_i_32_type: "i32",
                account_seed_string_type: "string",
                account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateImportsInstruction.Instruction8,
            account_seed_u_8_type: args.accountSeedU8Type,
            account_seed_u_16_type: args.accountSeedU16Type,
            account_seed_u_32_type: args.accountSeedU32Type,
            account_seed_i_8_type: args.accountSeedI8Type,
            account_seed_i_16_type: args.accountSeedI16Type,
            account_seed_i_32_type: args.accountSeedI32Type,
            account_seed_string_type: args.accountSeedStringType,
            account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        u8Type: args.accountSeedU8Type,
        u16Type: args.accountSeedU16Type,
        u32Type: args.accountSeedU32Type,
        i8Type: args.accountSeedI8Type,
        i16Type: args.accountSeedI16Type,
        i32Type: args.accountSeedI32Type,
        stringType: args.accountSeedStringType,
        pubkeyType: args.accountSeedPubkeyType,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 1. `[]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction8SendAndConfirm = async (
    args: Omit<Instruction8Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction8({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction9 = (args: Instruction9Args): TransactionInstruction => {
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
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction9SendAndConfirm = async (
    args: Omit<Instruction9Args, "feePayer" |"account"> & { 
        signers: { feePayer: Keypair,  account: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction9({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        account: args.signers.account.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.account, ]
    );
};

export type Instruction10Args = {
    feePayer: PublicKey;
    account: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction10`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction10 = (args: Instruction10Args): TransactionInstruction => {
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


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction10SendAndConfirm = async (
    args: Omit<Instruction10Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction10({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type Instruction11Args = {
    feePayer: PublicKey;
    account: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction11`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction11 = (args: Instruction11Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction11,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction11SendAndConfirm = async (
    args: Omit<Instruction11Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction11({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type Instruction12Args = {
    feePayer: PublicKey;
    account: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction12`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction12 = (args: Instruction12Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction12,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction12SendAndConfirm = async (
    args: Omit<Instruction12Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction12({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction13 = (args: Instruction13Args): TransactionInstruction => {
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
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction13SendAndConfirm = async (
    args: Omit<Instruction13Args, "feePayer" |"account"> & { 
        signers: { feePayer: Keypair,  account: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction13({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        account: args.signers.account.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.account, ]
    );
};

export type Instruction14Args = {
    feePayer: PublicKey;
    account: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction14`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction14 = (args: Instruction14Args): TransactionInstruction => {
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


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction14SendAndConfirm = async (
    args: Omit<Instruction14Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction14({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type Instruction15Args = {
    feePayer: PublicKey;
    account: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction15`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction15 = (args: Instruction15Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction15,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction15SendAndConfirm = async (
    args: Omit<Instruction15Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction15({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type Instruction16Args = {
    feePayer: PublicKey;
    account: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction16`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PublicKey} 
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction16 = (args: Instruction16Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction16,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 3. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction16SendAndConfirm = async (
    args: Omit<Instruction16Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction16({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 1. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction17 = (args: Instruction17Args): TransactionInstruction => {
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
 * 1. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction17SendAndConfirm = async (
    args: Omit<Instruction17Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction17({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction18 = (args: Instruction18Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 */
export const instruction18SendAndConfirm = async (
    args: Omit<Instruction18Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction18({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction19 = (args: Instruction19Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: args.accountSeedDynamic,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 1. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction19SendAndConfirm = async (
    args: Omit<Instruction19Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction19({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type Instruction20Args = {
    feePayer: PublicKey;
    accountSeedU8Type: number;
    accountSeedU16Type: number;
    accountSeedU32Type: number;
    accountSeedI8Type: number;
    accountSeedI16Type: number;
    accountSeedI32Type: number;
    accountSeedStringType: string;
    accountSeedPubkeyType: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Reference `validate_accounts_ref.instruction20`, where caller doesn't have inputs
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction20 = (args: Instruction20Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                account_seed_u_8_type: "u8",
                account_seed_u_16_type: "u16",
                account_seed_u_32_type: "u32",
                account_seed_i_8_type: "i8",
                account_seed_i_16_type: "i16",
                account_seed_i_32_type: "i32",
                account_seed_string_type: "string",
                account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateImportsInstruction.Instruction20,
            account_seed_u_8_type: args.accountSeedU8Type,
            account_seed_u_16_type: args.accountSeedU16Type,
            account_seed_u_32_type: args.accountSeedU32Type,
            account_seed_i_8_type: args.accountSeedI8Type,
            account_seed_i_16_type: args.accountSeedI16Type,
            account_seed_i_32_type: args.accountSeedI32Type,
            account_seed_string_type: args.accountSeedStringType,
            account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

    const [accountPubkey] = pda.ValidateAccountsPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        u8Type: args.accountSeedU8Type,
        u16Type: args.accountSeedU16Type,
        u32Type: args.accountSeedU32Type,
        i8Type: args.accountSeedI8Type,
        i16Type: args.accountSeedI16Type,
        i32Type: args.accountSeedI32Type,
        stringType: args.accountSeedStringType,
        pubkeyType: args.accountSeedPubkeyType,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"), isSigner: false, isWritable: false},
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
 * 1. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 2. `[]` validate_accounts_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAccountsProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction20SendAndConfirm = async (
    args: Omit<Instruction20Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction20({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 1. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction0 = (args: Instruction0Args): TransactionInstruction => {
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
 * 1. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction0SendAndConfirm = async (
    args: Omit<Instruction0Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction0({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
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
 * 4. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction21 = (args: Instruction21Args): TransactionInstruction => {
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
 * 4. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction21SendAndConfirm = async (
    args: Omit<Instruction21Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction21({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction22 = (args: Instruction22Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction22SendAndConfirm = async (
    args: Omit<Instruction22Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction22({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction23 = (args: Instruction23Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: args.accountSeedDynamic,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction23SendAndConfirm = async (
    args: Omit<Instruction23Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction23({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
    accountSeedI8Type: number;
    accountSeedI16Type: number;
    accountSeedI32Type: number;
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
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction24 = (args: Instruction24Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                account_seed_u_8_type: "u8",
                account_seed_u_16_type: "u16",
                account_seed_u_32_type: "u32",
                account_seed_i_8_type: "i8",
                account_seed_i_16_type: "i16",
                account_seed_i_32_type: "i32",
                account_seed_string_type: "string",
                account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateImportsInstruction.Instruction24,
            account_seed_u_8_type: args.accountSeedU8Type,
            account_seed_u_16_type: args.accountSeedU16Type,
            account_seed_u_32_type: args.accountSeedU32Type,
            account_seed_i_8_type: args.accountSeedI8Type,
            account_seed_i_16_type: args.accountSeedI16Type,
            account_seed_i_32_type: args.accountSeedI32Type,
            account_seed_string_type: args.accountSeedStringType,
            account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        u8Type: args.accountSeedU8Type,
        u16Type: args.accountSeedU16Type,
        u32Type: args.accountSeedU32Type,
        i8Type: args.accountSeedI8Type,
        i16Type: args.accountSeedI16Type,
        i32Type: args.accountSeedI32Type,
        stringType: args.accountSeedStringType,
        pubkeyType: args.accountSeedPubkeyType,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction24SendAndConfirm = async (
    args: Omit<Instruction24Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction24({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction25 = (args: Instruction25Args): TransactionInstruction => {
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
 * 4. `[]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction25SendAndConfirm = async (
    args: Omit<Instruction25Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction25({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction26 = (args: Instruction26Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction26SendAndConfirm = async (
    args: Omit<Instruction26Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction26({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction27 = (args: Instruction27Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: args.accountSeedDynamic,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction27SendAndConfirm = async (
    args: Omit<Instruction27Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction27({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
    accountSeedI8Type: number;
    accountSeedI16Type: number;
    accountSeedI32Type: number;
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
 * 4. `[]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction28 = (args: Instruction28Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                account_seed_u_8_type: "u8",
                account_seed_u_16_type: "u16",
                account_seed_u_32_type: "u32",
                account_seed_i_8_type: "i8",
                account_seed_i_16_type: "i16",
                account_seed_i_32_type: "i32",
                account_seed_string_type: "string",
                account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateImportsInstruction.Instruction28,
            account_seed_u_8_type: args.accountSeedU8Type,
            account_seed_u_16_type: args.accountSeedU16Type,
            account_seed_u_32_type: args.accountSeedU32Type,
            account_seed_i_8_type: args.accountSeedI8Type,
            account_seed_i_16_type: args.accountSeedI16Type,
            account_seed_i_32_type: args.accountSeedI32Type,
            account_seed_string_type: args.accountSeedStringType,
            account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        u8Type: args.accountSeedU8Type,
        u16Type: args.accountSeedU16Type,
        u32Type: args.accountSeedU32Type,
        i8Type: args.accountSeedI8Type,
        i16Type: args.accountSeedI16Type,
        i32Type: args.accountSeedI32Type,
        stringType: args.accountSeedStringType,
        pubkeyType: args.accountSeedPubkeyType,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction28SendAndConfirm = async (
    args: Omit<Instruction28Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction28({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction29 = (args: Instruction29Args): TransactionInstruction => {
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction29SendAndConfirm = async (
    args: Omit<Instruction29Args, "feePayer" |"signer1" |"signer2" |"signer3" |"account"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair,  account: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction29({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
        account: args.signers.account.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, args.signers.account, ]
    );
};

export type Instruction30Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction30 = (args: Instruction30Args): TransactionInstruction => {
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


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction30SendAndConfirm = async (
    args: Omit<Instruction30Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction30({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction31Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction31 = (args: Instruction31Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction31,
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
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction31SendAndConfirm = async (
    args: Omit<Instruction31Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction31({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction32Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction32 = (args: Instruction32Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction32,
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
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction32SendAndConfirm = async (
    args: Omit<Instruction32Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction32({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction33 = (args: Instruction33Args): TransactionInstruction => {
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction33SendAndConfirm = async (
    args: Omit<Instruction33Args, "feePayer" |"signer1" |"signer2" |"signer3" |"account"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair,  account: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction33({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
        account: args.signers.account.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, args.signers.account, ]
    );
};

export type Instruction34Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction34 = (args: Instruction34Args): TransactionInstruction => {
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


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction34SendAndConfirm = async (
    args: Omit<Instruction34Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction34({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction35Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction35 = (args: Instruction35Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction35,
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
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction35SendAndConfirm = async (
    args: Omit<Instruction35Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction35({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction36Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction36 = (args: Instruction36Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction36,
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
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction36SendAndConfirm = async (
    args: Omit<Instruction36Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction36({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction37 = (args: Instruction37Args): TransactionInstruction => {
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
 * 4. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction37SendAndConfirm = async (
    args: Omit<Instruction37Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction37({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction38 = (args: Instruction38Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction38SendAndConfirm = async (
    args: Omit<Instruction38Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction38({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction39 = (args: Instruction39Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: args.accountSeedDynamic,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction39SendAndConfirm = async (
    args: Omit<Instruction39Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction39({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
    accountSeedI8Type: number;
    accountSeedI16Type: number;
    accountSeedI32Type: number;
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
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction40 = (args: Instruction40Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                account_seed_u_8_type: "u8",
                account_seed_u_16_type: "u16",
                account_seed_u_32_type: "u32",
                account_seed_i_8_type: "i8",
                account_seed_i_16_type: "i16",
                account_seed_i_32_type: "i32",
                account_seed_string_type: "string",
                account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateImportsInstruction.Instruction40,
            account_seed_u_8_type: args.accountSeedU8Type,
            account_seed_u_16_type: args.accountSeedU16Type,
            account_seed_u_32_type: args.accountSeedU32Type,
            account_seed_i_8_type: args.accountSeedI8Type,
            account_seed_i_16_type: args.accountSeedI16Type,
            account_seed_i_32_type: args.accountSeedI32Type,
            account_seed_string_type: args.accountSeedStringType,
            account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        u8Type: args.accountSeedU8Type,
        u16Type: args.accountSeedU16Type,
        u32Type: args.accountSeedU32Type,
        i8Type: args.accountSeedI8Type,
        i16Type: args.accountSeedI16Type,
        i32Type: args.accountSeedI32Type,
        stringType: args.accountSeedStringType,
        pubkeyType: args.accountSeedPubkeyType,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction40SendAndConfirm = async (
    args: Omit<Instruction40Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction40({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction41 = (args: Instruction41Args): TransactionInstruction => {
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction41SendAndConfirm = async (
    args: Omit<Instruction41Args, "feePayer" |"signer1" |"signer2" |"signer3" |"account"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair,  account: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction41({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
        account: args.signers.account.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, args.signers.account, ]
    );
};

export type Instruction42Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction42 = (args: Instruction42Args): TransactionInstruction => {
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


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: true},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction42SendAndConfirm = async (
    args: Omit<Instruction42Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction42({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction43Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction43 = (args: Instruction43Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction43,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction43SendAndConfirm = async (
    args: Omit<Instruction43Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction43({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction44Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction44 = (args: Instruction44Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction44,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction44SendAndConfirm = async (
    args: Omit<Instruction44Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction44({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction45 = (args: Instruction45Args): TransactionInstruction => {
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction45SendAndConfirm = async (
    args: Omit<Instruction45Args, "feePayer" |"signer1" |"signer2" |"signer3" |"account"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair,  account: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction45({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
        account: args.signers.account.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, args.signers.account, ]
    );
};

export type Instruction46Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction46 = (args: Instruction46Args): TransactionInstruction => {
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


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: true},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction46SendAndConfirm = async (
    args: Omit<Instruction46Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction46({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction47Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction47 = (args: Instruction47Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction47,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction47SendAndConfirm = async (
    args: Omit<Instruction47Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction47({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction48Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction48 = (args: Instruction48Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction48,
        }
    );


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction48SendAndConfirm = async (
    args: Omit<Instruction48Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction48({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction49 = (args: Instruction49Args): TransactionInstruction => {
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
 * 4. `[writable]` account: {@link NonPdaaccountWithOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction49SendAndConfirm = async (
    args: Omit<Instruction49Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction49({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction50 = (args: Instruction50Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: true},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction50SendAndConfirm = async (
    args: Omit<Instruction50Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction50({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction51 = (args: Instruction51Args): TransactionInstruction => {
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

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: args.accountSeedDynamic,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountWithOneStaticAndDynamicSeedAndOneField} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_dynamic: {@link number} Auto-generated, from input account of type [PdaaccountWithOneStaticAndDynamicSeedAndOneField] set the seed named dynamic, required by the type
 */
export const instruction51SendAndConfirm = async (
    args: Omit<Instruction51Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction51({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
    accountSeedI8Type: number;
    accountSeedI16Type: number;
    accountSeedI32Type: number;
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
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction52 = (args: Instruction52Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                account_seed_u_8_type: "u8",
                account_seed_u_16_type: "u16",
                account_seed_u_32_type: "u32",
                account_seed_i_8_type: "i8",
                account_seed_i_16_type: "i16",
                account_seed_i_32_type: "i32",
                account_seed_string_type: "string",
                account_seed_pubkey_type: { array: { type: "u8", len: 32 } },
            },
        },
        {
            id: ValidateImportsInstruction.Instruction52,
            account_seed_u_8_type: args.accountSeedU8Type,
            account_seed_u_16_type: args.accountSeedU16Type,
            account_seed_u_32_type: args.accountSeedU32Type,
            account_seed_i_8_type: args.accountSeedI8Type,
            account_seed_i_16_type: args.accountSeedI16Type,
            account_seed_i_32_type: args.accountSeedI32Type,
            account_seed_string_type: args.accountSeedStringType,
            account_seed_pubkey_type: args.accountSeedPubkeyType.toBytes(),
        }
    );

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        u8Type: args.accountSeedU8Type,
        u16Type: args.accountSeedU16Type,
        u32Type: args.accountSeedU32Type,
        i8Type: args.accountSeedI8Type,
        i16Type: args.accountSeedI16Type,
        i32Type: args.accountSeedI32Type,
        stringType: args.accountSeedStringType,
        pubkeyType: args.accountSeedPubkeyType,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 * - account_seed_pubkey_type: {@link PublicKey} Auto-generated, from input account of type [PdaaccountVerifiesSeedsTypes] set the seed named pubkey_type, required by the type
 */
export const instruction52SendAndConfirm = async (
    args: Omit<Instruction52Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction52({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction53Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    accountSeedU8Type: number;
    accountSeedU16Type: number;
    accountSeedU32Type: number;
    accountSeedI8Type: number;
    accountSeedI16Type: number;
    accountSeedI32Type: number;
    accountSeedStringType: string;
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
 * 4. `[]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 */
export const instruction53 = (args: Instruction53Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                account_seed_u_8_type: "u8",
                account_seed_u_16_type: "u16",
                account_seed_u_32_type: "u32",
                account_seed_i_8_type: "i8",
                account_seed_i_16_type: "i16",
                account_seed_i_32_type: "i32",
                account_seed_string_type: "string",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction53,
            account_seed_u_8_type: args.accountSeedU8Type,
            account_seed_u_16_type: args.accountSeedU16Type,
            account_seed_u_32_type: args.accountSeedU32Type,
            account_seed_i_8_type: args.accountSeedI8Type,
            account_seed_i_16_type: args.accountSeedI16Type,
            account_seed_i_32_type: args.accountSeedI32Type,
            account_seed_string_type: args.accountSeedStringType,
        }
    );

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        u8Type: args.accountSeedU8Type,
        u16Type: args.accountSeedU16Type,
        u32Type: args.accountSeedU32Type,
        i8Type: args.accountSeedI8Type,
        i16Type: args.accountSeedI16Type,
        i32Type: args.accountSeedI32Type,
        stringType: args.accountSeedStringType,
        pubkeyType: args.signer1,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 */
export const instruction53SendAndConfirm = async (
    args: Omit<Instruction53Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction53({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction54Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    accountSeedU8Type: number;
    accountSeedU16Type: number;
    accountSeedU32Type: number;
    accountSeedI8Type: number;
    accountSeedI16Type: number;
    accountSeedI32Type: number;
    accountSeedStringType: string;
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
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 */
export const instruction54 = (args: Instruction54Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                account_seed_u_8_type: "u8",
                account_seed_u_16_type: "u16",
                account_seed_u_32_type: "u32",
                account_seed_i_8_type: "i8",
                account_seed_i_16_type: "i16",
                account_seed_i_32_type: "i32",
                account_seed_string_type: "string",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction54,
            account_seed_u_8_type: args.accountSeedU8Type,
            account_seed_u_16_type: args.accountSeedU16Type,
            account_seed_u_32_type: args.accountSeedU32Type,
            account_seed_i_8_type: args.accountSeedI8Type,
            account_seed_i_16_type: args.accountSeedI16Type,
            account_seed_i_32_type: args.accountSeedI32Type,
            account_seed_string_type: args.accountSeedStringType,
        }
    );

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        u8Type: args.accountSeedU8Type,
        u16Type: args.accountSeedU16Type,
        u32Type: args.accountSeedU32Type,
        i8Type: args.accountSeedI8Type,
        i16Type: args.accountSeedI16Type,
        i32Type: args.accountSeedI32Type,
        stringType: args.accountSeedStringType,
        pubkeyType: args.signer1,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 */
export const instruction54SendAndConfirm = async (
    args: Omit<Instruction54Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction54({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction55Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction55 = (args: Instruction55Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction55,
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
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction55SendAndConfirm = async (
    args: Omit<Instruction55Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction55({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction56Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    account: PublicKey;
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction56 = (args: Instruction56Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction56,
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
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 6. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction56SendAndConfirm = async (
    args: Omit<Instruction56Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction56({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
    );
};

export type Instruction57Args = {
    feePayer: PublicKey;
    signer1: PublicKey;
    signer2: PublicKey;
    signer3: PublicKey;
    accountSeedU8Type: number;
    accountSeedU16Type: number;
    accountSeedU32Type: number;
    accountSeedI8Type: number;
    accountSeedI16Type: number;
    accountSeedI32Type: number;
    accountSeedStringType: string;
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
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 */
export const instruction57 = (args: Instruction57Args): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                account_seed_u_8_type: "u8",
                account_seed_u_16_type: "u16",
                account_seed_u_32_type: "u32",
                account_seed_i_8_type: "i8",
                account_seed_i_16_type: "i16",
                account_seed_i_32_type: "i32",
                account_seed_string_type: "string",
            },
        },
        {
            id: ValidateImportsInstruction.Instruction57,
            account_seed_u_8_type: args.accountSeedU8Type,
            account_seed_u_16_type: args.accountSeedU16Type,
            account_seed_u_32_type: args.accountSeedU32Type,
            account_seed_i_8_type: args.accountSeedI8Type,
            account_seed_i_16_type: args.accountSeedI16Type,
            account_seed_i_32_type: args.accountSeedI32Type,
            account_seed_string_type: args.accountSeedStringType,
        }
    );

    const [accountPubkey] = pda.ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        u8Type: args.accountSeedU8Type,
        u16Type: args.accountSeedU16Type,
        u32Type: args.accountSeedU32Type,
        i8Type: args.accountSeedI8Type,
        i16Type: args.accountSeedI16Type,
        i32Type: args.accountSeedI32Type,
        stringType: args.accountSeedStringType,
        pubkeyType: args.signer1,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.signer1, isSigner: true, isWritable: false},
            {pubkey: args.signer2, isSigner: true, isWritable: false},
            {pubkey: args.signer3, isSigner: true, isWritable: false},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"), isSigner: false, isWritable: false},
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
 * 4. `[writable]` account: {@link PdaaccountVerifiesSeedsTypes} 
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 *
 * Data:
 * - account_seed_u_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u8_type, required by the type
 * - account_seed_u_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u16_type, required by the type
 * - account_seed_u_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named u32_type, required by the type
 * - account_seed_i_8_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i8_type, required by the type
 * - account_seed_i_16_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i16_type, required by the type
 * - account_seed_i_32_type: {@link number} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named i32_type, required by the type
 * - account_seed_string_type: {@link string} Auto-generated, from input validate_advanced_cases.account of type [PdaaccountVerifiesSeedsTypes] set the seed named string_type, required by the type
 */
export const instruction57SendAndConfirm = async (
    args: Omit<Instruction57Args, "feePayer" |"signer1" |"signer2" |"signer3"> & { 
        signers: { feePayer: Keypair,  signer1: Keypair,  signer2: Keypair,  signer3: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction57({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer1: args.signers.signer1.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer1, args.signers.signer2, args.signers.signer3, ]
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
 * 3. `[signer]` signer_1: {@link NonPdaaccountWithOneField} 
 * 4. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction58 = (args: Instruction58Args): TransactionInstruction => {
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
 * 3. `[signer]` signer_1: {@link NonPdaaccountWithOneField} 
 * 4. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction58SendAndConfirm = async (
    args: Omit<Instruction58Args, "feePayer" |"signer2" |"signer3" |"signer1"> & { 
        signers: { feePayer: Keypair,  signer2: Keypair,  signer3: Keypair,  signer1: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction58({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
        signer1: args.signers.signer1.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1, ]
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
 * 3. `[writable, signer]` signer_1: {@link NonPdaaccountWithOneField} 
 * 4. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction59 = (args: Instruction59Args): TransactionInstruction => {
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
 * 3. `[writable, signer]` signer_1: {@link NonPdaaccountWithOneField} 
 * 4. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction59SendAndConfirm = async (
    args: Omit<Instruction59Args, "feePayer" |"signer2" |"signer3" |"signer1"> & { 
        signers: { feePayer: Keypair,  signer2: Keypair,  signer3: Keypair,  signer1: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction59({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
        signer1: args.signers.signer1.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1, ]
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
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction60 = (args: Instruction60Args): TransactionInstruction => {
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
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction60SendAndConfirm = async (
    args: Omit<Instruction60Args, "feePayer" |"signer2" |"signer3" |"signer1"> & { 
        signers: { feePayer: Keypair,  signer2: Keypair,  signer3: Keypair,  signer1: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction60({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
        signer1: args.signers.signer1.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1, ]
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
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction61 = (args: Instruction61Args): TransactionInstruction => {
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
 * 5. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction61SendAndConfirm = async (
    args: Omit<Instruction61Args, "feePayer" |"signer2" |"signer3" |"signer1"> & { 
        signers: { feePayer: Keypair,  signer2: Keypair,  signer3: Keypair,  signer1: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction61({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
        signer1: args.signers.signer1.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1, ]
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
 * 3. `[writable, signer]` signer_1: {@link NonPdaaccountWithOneField} 
 * 4. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction62 = (args: Instruction62Args): TransactionInstruction => {
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
 * 3. `[writable, signer]` signer_1: {@link NonPdaaccountWithOneField} 
 * 4. `[]` validate_advanced_cases_v_0_0_0: {@link PublicKey} Auto-generated, ValidateAdvancedCasesProgram v0.0.0
 */
export const instruction62SendAndConfirm = async (
    args: Omit<Instruction62Args, "feePayer" |"signer2" |"signer3" |"signer1"> & { 
        signers: { feePayer: Keypair,  signer2: Keypair,  signer3: Keypair,  signer1: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction62({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        signer2: args.signers.signer2.publicKey,
        signer3: args.signers.signer3.publicKey,
        signer1: args.signers.signer1.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.signer2, args.signers.signer3, args.signers.signer1, ]
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
 * 5. `[]` validate_data_types_v_0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction63 = (args: Instruction63Args): TransactionInstruction => {
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
 * 5. `[]` validate_data_types_v_0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction63SendAndConfirm = async (
    args: Omit<Instruction63Args, "feePayer" |"account"> & { 
        signers: { feePayer: Keypair,  account: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction63({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        account: args.signers.account.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.account, ]
    );
};

export type Instruction64Args = {
    feePayer: PublicKey;
    account: PublicKey;
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
 * 5. `[]` validate_data_types_v_0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction64 = (args: Instruction64Args): TransactionInstruction => {
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


    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.account, isSigner: false, isWritable: true},
            {pubkey: args.accountInfoType, isSigner: false, isWritable: false},
            {pubkey: args.accountInfoTypeMut, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY"), isSigner: false, isWritable: false},
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
 * 5. `[]` validate_data_types_v_0_0_0: {@link PublicKey} Auto-generated, ValidateDataTypesProgram v0.0.0
 */
export const instruction64SendAndConfirm = async (
    args: Omit<Instruction64Args, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(instruction64({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

// Getters

export module ValidateAccountsGetters {
    export const getNonPdaaccountWithOneField = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAccountsTypes.NonPdaaccountWithOneField | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAccountsTypes.decodeNonPdaaccountWithOneField(deserialize(T.ValidateAccountsTypes.NonPdaaccountWithOneFieldSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getPdaaccountWithOneStaticSeedAndOneField = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAccountsTypes.PdaaccountWithOneStaticSeedAndOneField | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAccountsTypes.decodePdaaccountWithOneStaticSeedAndOneField(deserialize(T.ValidateAccountsTypes.PdaaccountWithOneStaticSeedAndOneFieldSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getPdaaccountWithOneStaticAndDynamicSeedAndOneField = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAccountsTypes.PdaaccountWithOneStaticAndDynamicSeedAndOneField | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAccountsTypes.decodePdaaccountWithOneStaticAndDynamicSeedAndOneField(deserialize(T.ValidateAccountsTypes.PdaaccountWithOneStaticAndDynamicSeedAndOneFieldSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getPdaaccountVerifiesSeedsTypes = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAccountsTypes.PdaaccountVerifiesSeedsTypes | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAccountsTypes.decodePdaaccountVerifiesSeedsTypes(deserialize(T.ValidateAccountsTypes.PdaaccountVerifiesSeedsTypesSchema, buffer.data) as Record<string, unknown>);
    }
}

export module ValidateAdvancedCasesGetters {
    export const getNonPdaaccountWithOneField = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAdvancedCasesTypes.NonPdaaccountWithOneField | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAdvancedCasesTypes.decodeNonPdaaccountWithOneField(deserialize(T.ValidateAdvancedCasesTypes.NonPdaaccountWithOneFieldSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getPdaaccountWithOneStaticSeedAndOneField = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAdvancedCasesTypes.PdaaccountWithOneStaticSeedAndOneField | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAdvancedCasesTypes.decodePdaaccountWithOneStaticSeedAndOneField(deserialize(T.ValidateAdvancedCasesTypes.PdaaccountWithOneStaticSeedAndOneFieldSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getPdaaccountWithOneStaticAndDynamicSeedAndOneField = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAdvancedCasesTypes.PdaaccountWithOneStaticAndDynamicSeedAndOneField | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAdvancedCasesTypes.decodePdaaccountWithOneStaticAndDynamicSeedAndOneField(deserialize(T.ValidateAdvancedCasesTypes.PdaaccountWithOneStaticAndDynamicSeedAndOneFieldSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getPdaaccountVerifiesSeedsTypes = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAdvancedCasesTypes.PdaaccountVerifiesSeedsTypes | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAdvancedCasesTypes.decodePdaaccountVerifiesSeedsTypes(deserialize(T.ValidateAdvancedCasesTypes.PdaaccountVerifiesSeedsTypesSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getPdaaccountWithOneStaticSeedAndOneFieldTwo = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateAdvancedCasesTypes.PdaaccountWithOneStaticSeedAndOneFieldTwo | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateAdvancedCasesTypes.decodePdaaccountWithOneStaticSeedAndOneFieldTwo(deserialize(T.ValidateAdvancedCasesTypes.PdaaccountWithOneStaticSeedAndOneFieldTwoSchema, buffer.data) as Record<string, unknown>);
    }
}

export module ValidateDataTypesGetters {
    export const getMasterTypesNonPda = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateDataTypesTypes.MasterTypesNonPda | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateDataTypesTypes.decodeMasterTypesNonPda(deserialize(T.ValidateDataTypesTypes.MasterTypesNonPdaSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getMasterTypesPda = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.ValidateDataTypesTypes.MasterTypesPda | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.ValidateDataTypesTypes.decodeMasterTypesPda(deserialize(T.ValidateDataTypesTypes.MasterTypesPdaSchema, buffer.data) as Record<string, unknown>);
    }
}



// Websocket Events

