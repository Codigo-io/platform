import {
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction,
} from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import {
    initializeClient,
    instruction0SendAndConfirm,
    instruction10SendAndConfirm,
    instruction11SendAndConfirm,
    instruction12SendAndConfirm,
    instruction13SendAndConfirm,
    instruction14SendAndConfirm,
    instruction15SendAndConfirm,
    instruction16SendAndConfirm,
    instruction17SendAndConfirm,
    safeInstruction17SendAndConfirm,
    instruction18SendAndConfirm,
    instruction19SendAndConfirm,
    instruction20SendAndConfirm,
    instruction1SendAndConfirm,
    instruction21SendAndConfirm,
    instruction22SendAndConfirm,
    instruction23SendAndConfirm,
    instruction24SendAndConfirm,
    instruction25SendAndConfirm,
    instruction26SendAndConfirm,
    instruction27SendAndConfirm,
    instruction28SendAndConfirm,
    instruction29SendAndConfirm,
    instruction2SendAndConfirm,
    instruction30SendAndConfirm,
    instruction31SendAndConfirm,
    instruction32SendAndConfirm,
    instruction33SendAndConfirm,
    instruction34SendAndConfirm,
    instruction35SendAndConfirm,
    instruction36SendAndConfirm,
    instruction37SendAndConfirm,
    safeInstruction37SendAndConfirm,
    instruction38SendAndConfirm,
    instruction39SendAndConfirm,
    instruction40SendAndConfirm,
    instruction3SendAndConfirm,
    instruction41SendAndConfirm,
    instruction42SendAndConfirm,
    instruction43SendAndConfirm,
    instruction44SendAndConfirm,
    instruction45SendAndConfirm,
    instruction46SendAndConfirm,
    instruction47SendAndConfirm,
    instruction48SendAndConfirm,
    instruction49SendAndConfirm,
    safeInstruction49SendAndConfirm,
    instruction50SendAndConfirm,
    instruction51SendAndConfirm,
    instruction52SendAndConfirm,
    instruction4SendAndConfirm,
    instruction53SendAndConfirm,
    instruction54SendAndConfirm,
    instruction55SendAndConfirm,
    instruction56SendAndConfirm,
    instruction57SendAndConfirm,
    instruction58SendAndConfirm,
    instruction59SendAndConfirm,
    instruction5SendAndConfirm,
    instruction60SendAndConfirm,
    instruction61SendAndConfirm,
    instruction62SendAndConfirm,
    instruction63SendAndConfirm,
    instruction64SendAndConfirm,
    instruction6SendAndConfirm,
    instruction7SendAndConfirm,
    instruction8SendAndConfirm,
    instruction9SendAndConfirm,
    ValidateAccountsGetters,
    ValidateAccountsPDAs,
    ValidateAdvancedCasesGetters,
    ValidateAdvancedCasesPDAs,
    ValidateDataTypesGetters,
    ValidateDataTypesPDAs,
    safeInstruction62SendAndConfirm,
} from "./index";
import * as console from "console";

const VALIDATE_ACCOUNTS_PROG_ID = new PublicKey(
  "8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs",
);
const VALIDATE_ADVANCED_CASES_PROG_ID = new PublicKey(
  "31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm",
);
const VALIDATE_DATA_TYPES_PROG_ID = new PublicKey(
  "5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY",
);

async function main(feePayer: Keypair) {
    const connection = new Connection("http://127.0.0.1:8899", {
        commitment: "confirmed",
    });
    const progId = new PublicKey("6Jiwh1MQAR6mKvEmAHtEucVtVNf7bnkgK6wQwo5ocgw5");

    initializeClient(progId, connection);

    console.info("Validate Accounts...");
    await validateAccounts(connection, progId, feePayer);

    console.info("Validate Advanced Cases...");
    await validateAdvancedCases(connection, progId, feePayer);

    console.info("Validate DataTypes...");
    await validateDataTypes(feePayer);
}

async function validateAccounts(
  connection: Connection,
  progId: PublicKey,
  feePayer: Keypair,
) {
    /**
     * Singleton initialization
     */
    const ix9Kp = Keypair.generate();
    await instruction9SendAndConfirm({
        signers: {
            feePayer,
            account: ix9Kp,
        },
    });
    const ix9Account = await ValidateAccountsGetters.getState(ix9Kp.publicKey);
    console.info(`ix9: ${JSON.stringify(ix9Account)}`);

    const [ix10Pk] = ValidateAccountsPDAs.deriveStaticPdaPDA(
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction10SendAndConfirm({
        signers: {
            feePayer,
        },
    });
    const ix10Account = await ValidateAccountsGetters.getState(ix10Pk);
    console.info(`ix10: ${JSON.stringify(ix10Account)}`);

    const [ix11Pk] = ValidateAccountsPDAs.deriveDynamicPdaPDA(
      {
          dynamic: 11,
      },
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction11SendAndConfirm({
        accountSeedDynamic: 11,
        signers: {
            feePayer,
        },
    });
    const ix11Account = await ValidateAccountsGetters.getState(ix11Pk);
    console.info(`ix11: ${JSON.stringify(ix11Account)}`);

    const [ix12Pk] = ValidateAccountsPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix12",
          pubkeyType: progId,
      },
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction12SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix12",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
        },
    });
    const ix12Account = await ValidateAccountsGetters.getState(ix12Pk);
    console.info(`ix12: ${JSON.stringify(ix12Account)}`);

    /**
     * Mutable
     */
    const ix1AccountKp = await createAccount(
      connection,
      feePayer,
      1,
      new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    );
    await instruction1SendAndConfirm({
        account: ix1AccountKp.publicKey,
        signers: {
            feePayer,
        },
    });
    const ix1Account = await ValidateAccountsGetters.getState(
      ix1AccountKp.publicKey,
    );
    console.info(`ix1: ${JSON.stringify(ix1Account)}`);

    const [ix2Pk] = ValidateAccountsPDAs.deriveStaticPdaPDA(
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction2SendAndConfirm({
        signers: {
            feePayer,
        },
    });
    const ix2Account = await ValidateAccountsGetters.getState(ix2Pk);
    console.info(`ix2: ${JSON.stringify(ix2Account)}`);

    const [ix3Pk] = ValidateAccountsPDAs.deriveDynamicPdaPDA(
      {
          dynamic: 11,
      },
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction3SendAndConfirm({
        accountSeedDynamic: 11,
        signers: {
            feePayer,
        },
    });
    const ix3Account = await ValidateAccountsGetters.getState(ix3Pk);
    console.info(`ix3: ${JSON.stringify(ix3Account)}`);

    const [ix4Pk] = ValidateAccountsPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix12",
          pubkeyType: progId,
      },
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction4SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedStringType: "ix12",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
        },
    });
    const ix4Account = await ValidateAccountsGetters.getState(ix4Pk);
    console.info(`ix4: ${JSON.stringify(ix4Account)}`);

    /**
     * Immutable
     */
    const ix5AccountKp = await createAccount(
      connection,
      feePayer,
      1,
      new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"),
    );
    await instruction5SendAndConfirm({
        account: ix5AccountKp.publicKey,
        signers: {
            feePayer,
        },
    });
    const ix5Account = await ValidateAccountsGetters.getState(
      ix5AccountKp.publicKey,
    );
    console.info(`ix5: ${JSON.stringify(ix5Account)}`);

    const [ix6Pk] = ValidateAccountsPDAs.deriveStaticPdaPDA(
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction6SendAndConfirm({
        signers: {
            feePayer,
        },
    });
    const ix6Account = await ValidateAccountsGetters.getState(ix6Pk);
    console.info(`ix6: ${JSON.stringify(ix6Account)}`);

    const [ix7Pk] = ValidateAccountsPDAs.deriveDynamicPdaPDA(
      {
          dynamic: 11,
      },
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction7SendAndConfirm({
        accountSeedDynamic: 11,
        signers: {
            feePayer,
        },
    });
    const ix7Account = await ValidateAccountsGetters.getState(ix7Pk);
    console.info(`ix7: ${JSON.stringify(ix7Account)}`);

    const [ix8Pk] = ValidateAccountsPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix12",
          pubkeyType: progId,
      },
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction8SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix12",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
        },
    });
    const ix8Account = await ValidateAccountsGetters.getState(ix8Pk);
    console.info(`ix8: ${JSON.stringify(ix8Account)}`);

    /**
     * Non-Singleton initialization
     */
    const ix13Kp = Keypair.generate();
    await instruction13SendAndConfirm({
        signers: {
            feePayer,
            account: ix13Kp,
        },
    });
    const ix13Account = await ValidateAccountsGetters.getState(ix13Kp.publicKey);
    console.info(`ix13: ${JSON.stringify(ix13Account)}`);

    const [ix14Pk] = ValidateAccountsPDAs.deriveStaticPdaPDA(
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction14SendAndConfirm({
        signers: {
            feePayer,
        },
    });
    const ix14Account = await ValidateAccountsGetters.getState(ix14Pk);
    console.info(`ix14: ${JSON.stringify(ix14Account)}`);

    const [ix15Pk] = ValidateAccountsPDAs.deriveDynamicPdaPDA(
      {
          dynamic: 15,
      },
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction15SendAndConfirm({
        accountSeedDynamic: 15,
        signers: {
            feePayer,
        },
    });
    const ix15Account = await ValidateAccountsGetters.getState(ix15Pk);
    console.info(`ix15: ${JSON.stringify(ix15Account)}`);

    const [ix16Pk] = ValidateAccountsPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix16",
          pubkeyType: progId,
      },
      VALIDATE_ACCOUNTS_PROG_ID,
    );
    await instruction16SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix16",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
        },
    });
    const ix16Account = await ValidateAccountsGetters.getState(ix16Pk);
    console.info(`ix16: ${JSON.stringify(ix16Account)}`);

    // Ix 17 close_unsafe Not PDA Test
    let balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction17SendAndConfirm({
        account: ix9Kp.publicKey,
        signers: {
            feePayer,
        },
    });

    let ix9AccountAfterClose = await ValidateAccountsGetters.getState(
      ix9Kp.publicKey,
    );
    let balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close unsafe test Ix 17 Ok?: ",
      balanceAfter > balanceBefore && ix9AccountAfterClose == undefined,
    );

    // Rewind
    await instruction9SendAndConfirm({
        signers: {
            feePayer,
            account: ix9Kp,
        },
    });

    // Ix safe 17 Close Not PDA Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await safeInstruction17SendAndConfirm({
        signers: {
            feePayer,
            account: ix9Kp,
        },
    });

    ix9AccountAfterClose = await ValidateAccountsGetters.getState(
      ix9Kp.publicKey,
    );
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close SAFE test Ix 17 Ok?: ",
      balanceAfter > balanceBefore && ix9AccountAfterClose == undefined,
    );

    // Ix 18 Close State Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction18SendAndConfirm({
        signers: {
            feePayer,
        },
    });

    let ix10AccountAfterClose = await ValidateAccountsGetters.getState(ix10Pk);
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 18 Ok?: ",
      balanceAfter > balanceBefore && ix10AccountAfterClose == undefined,
    );

    // Ix 19 Close State Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction19SendAndConfirm({
        accountSeedDynamic: 11,
        signers: {
            feePayer,
        },
    });

    let ix11AccountAfterClose = await ValidateAccountsGetters.getState(ix11Pk);
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 19 Ok?: ",
      balanceAfter > balanceBefore && ix11AccountAfterClose == undefined,
    );

    // Ix 20 Close State Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction20SendAndConfirm({
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix12",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
        },
    });

    let ix12AccountAfterClose = await ValidateAccountsGetters.getState(ix12Pk);
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 20 Ok?: ",
      balanceAfter > balanceBefore && ix12AccountAfterClose == undefined,
    );
}

async function validateDataTypes(feePayer: Keypair) {
    const masterNonPDA = Keypair.generate();
    await instruction63SendAndConfirm({
        accountInfoType: Keypair.generate().publicKey,
        accountInfoTypeMut: Keypair.generate().publicKey,
        signers: {
            account: masterNonPDA,
            feePayer,
        },
    });
    const masterNonPDAAccount = await ValidateDataTypesGetters.getState(
      masterNonPDA.publicKey,
    );
    console.info(`ix63: `, masterNonPDAAccount);

    const [masterTypesPdaPubKey] = ValidateDataTypesPDAs.deriveMasterTypesPdaPDA(
      VALIDATE_DATA_TYPES_PROG_ID,
    );
    await instruction64SendAndConfirm({
        accountInfoType: Keypair.generate().publicKey,
        accountInfoTypeMut: Keypair.generate().publicKey,
        signers: {
            feePayer,
        },
    });
    const masterPDA =
      await ValidateDataTypesGetters.getState(masterTypesPdaPubKey);
    console.info(`ix64: `, masterPDA);
}

async function validateAdvancedCases(
  connection: Connection,
  progId: PublicKey,
  feePayer: Keypair,
) {
    const sig = await instruction0SendAndConfirm({
        signers: {
            feePayer,
        },
    });
    console.info(`instruction0: ${sig}`);

    /**
     * Singleton initialization
     */
    const ix9Kp = Keypair.generate();
    let signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    let signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    let signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction29SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix9Kp,
        },
    });
    const ix9Account = await ValidateAdvancedCasesGetters.getState(
      ix9Kp.publicKey,
    );
    console.info(`instruction29: ${JSON.stringify(ix9Account)}`);

    const [ix10Pk] = ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction30SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix10Account = await ValidateAdvancedCasesGetters.getState(ix10Pk);
    console.info(`instruction30: ${JSON.stringify(ix10Account)}`);

    const [ix11Pk] = ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA(
      {
          dynamic: 31,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction31SendAndConfirm({
        accountSeedDynamic: 31,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix11Account = await ValidateAdvancedCasesGetters.getState(ix11Pk);
    console.log(`instruction31: ${JSON.stringify(ix11Account)}`);

    const [ix12Pk] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix32",
          pubkeyType: progId,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction32SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix32",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix12Account = await ValidateAdvancedCasesGetters.getState(ix12Pk);
    console.log(`instruction32: ${JSON.stringify(ix12Account)}`);

    /**
     * Mutable
     */
    const ix1AccountKp = await createAccount(
      connection,
      feePayer,
      1,
      new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction21SendAndConfirm({
        account: ix1AccountKp.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix1Account = await ValidateAdvancedCasesGetters.getState(
      ix1AccountKp.publicKey,
    );
    console.log(`instruction21: ${JSON.stringify(ix1Account)}`);

    const [ix2Pk] = ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction22SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix2Account = await ValidateAdvancedCasesGetters.getState(ix2Pk);
    console.log(`instruction22: ${JSON.stringify(ix2Account)}`);

    const [ix3Pk] = ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA(
      {
          dynamic: 31,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction23SendAndConfirm({
        accountSeedDynamic: 31,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix3Account = await ValidateAdvancedCasesGetters.getState(ix3Pk);
    console.log(`instruction23: ${JSON.stringify(ix3Account)}`);

    const [ix4Pk] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix32",
          pubkeyType: progId,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction24SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedStringType: "ix32",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix4Account = await ValidateAdvancedCasesGetters.getState(ix4Pk);
    console.log(`instruction24: ${JSON.stringify(ix4Account)}`);

    /**
     * Immutable
     */
    const ix5AccountKp = await createAccount(
      connection,
      feePayer,
      1,
      new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction25SendAndConfirm({
        account: ix5AccountKp.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix5Account = await ValidateAdvancedCasesGetters.getState(
      ix5AccountKp.publicKey,
    );
    console.log(`instruction25: ${JSON.stringify(ix5Account)}`);

    const [ix6Pk] = ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction26SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix6Account = await ValidateAdvancedCasesGetters.getState(ix6Pk);
    console.log(`instruction26: ${JSON.stringify(ix6Account)}`);

    const [ix7Pk] = ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA(
      {
          dynamic: 31,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction27SendAndConfirm({
        accountSeedDynamic: 31,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix7Account = await ValidateAdvancedCasesGetters.getState(ix7Pk);
    console.log(`instruction27: ${JSON.stringify(ix7Account)}`);

    const [ix8Pk] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix32",
          pubkeyType: progId,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction28SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedStringType: "ix32",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix8Account = await ValidateAdvancedCasesGetters.getState(ix8Pk);
    console.log(`instruction28: ${JSON.stringify(ix8Account)}`);

    /**
     * Non-Singleton initialization
     */
    const ix13Kp = Keypair.generate();
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction33SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix13Kp,
        },
    });
    const ix13Account = await ValidateAdvancedCasesGetters.getState(
      ix13Kp.publicKey,
    );
    console.log(`instruction33: ${JSON.stringify(ix13Account)}`);

    const [ix14Pk] = ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction34SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix14Account = await ValidateAdvancedCasesGetters.getState(ix14Pk);
    console.log(`instruction34: ${JSON.stringify(ix14Account)}`);

    const [ix15Pk] = ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA(
      {
          dynamic: 35,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction35SendAndConfirm({
        accountSeedDynamic: 35,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix15Account = await ValidateAdvancedCasesGetters.getState(ix15Pk);
    console.log(`instruction35: ${JSON.stringify(ix15Account)}`);

    const [ix16Pk] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix36",
          pubkeyType: progId,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction36SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix36",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix16Account = await ValidateAdvancedCasesGetters.getState(ix16Pk);
    console.log(`instruction36: ${JSON.stringify(ix16Account)}`);

    /**
     * Close
     */
      // Ix 37 Close_unsafe Not PDA Test
    let balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction37SendAndConfirm({
        account: ix9Kp.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix9AccountAfterClose = await ValidateAdvancedCasesGetters.getState(
      ix9Kp.publicKey,
    );
    let balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close unsafe test Ix 37 Ok?: ",
      balanceAfter > balanceBefore && ix9AccountAfterClose == undefined,
    );

    // Rewind
    await instruction29SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix9Kp,
        },
    });

    // Ix 37 Close SAFE Not PDA Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await safeInstruction37SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix9Kp,
        },
    });

    ix9AccountAfterClose = await ValidateAdvancedCasesGetters.getState(
      ix9Kp.publicKey,
    );
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close SAFE test Ix 37 Ok?: ",
      balanceAfter > balanceBefore && ix9AccountAfterClose == undefined,
    );

    // Ix 38 Close State Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction38SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix14AccountAfterClose =
      await ValidateAdvancedCasesGetters.getState(ix14Pk);
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 38 Ok?: ",
      balanceAfter > balanceBefore && ix14AccountAfterClose == undefined,
    );

    // Ix 39 Close State Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction39SendAndConfirm({
        accountSeedDynamic: 35,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix15AccountAfterClose =
      await ValidateAdvancedCasesGetters.getState(ix15Pk);
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 39 Ok?: ",
      balanceAfter > balanceBefore && ix15AccountAfterClose == undefined,
    );

    // Ix 40 Close State Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction40SendAndConfirm({
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix36",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix16AccountAfterClose =
      await ValidateAdvancedCasesGetters.getState(ix16Pk);
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 40 Ok?: ",
      balanceAfter > balanceBefore && ix16AccountAfterClose == undefined,
    );

    /**
     * Singleton initialization with custom rent payer
     */
    const ix21Kp = Keypair.generate();
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction41SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix21Kp,
        },
    });
    const ix21KpAccount = await ValidateAdvancedCasesGetters.getState(
      ix21Kp.publicKey,
    );
    console.log(`instruction41: ${JSON.stringify(ix21KpAccount)}`);

    const [ix22Pk] = ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction42SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix22Account = await ValidateAdvancedCasesGetters.getState(ix22Pk);
    console.log(`instruction42: ${JSON.stringify(ix22Account)}`);

    const [ix23Pk] = ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA(
      {
          dynamic: 43,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL,
    );
    await instruction43SendAndConfirm({
        accountSeedDynamic: 43,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix23Account = await ValidateAdvancedCasesGetters.getState(ix23Pk);
    console.log(`instruction43: ${JSON.stringify(ix23Account)}`);

    const [ix24Pk] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix44",
          pubkeyType: progId,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL,
    );
    await instruction44SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix44",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix24Account = await ValidateAdvancedCasesGetters.getState(ix24Pk);
    console.log(`instruction44: ${JSON.stringify(ix24Account)}`);

    /**
     * Non-Singleton initialization with custom rent payer
     */
    const ix25Kp = Keypair.generate();
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction45SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix25Kp,
        },
    });
    const ix25KpAccount = await ValidateAdvancedCasesGetters.getState(
      ix25Kp.publicKey,
    );
    console.log(`instruction45: ${JSON.stringify(ix25KpAccount)}`);

    const [ix26Pk] = ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction46SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix26Account = await ValidateAdvancedCasesGetters.getState(ix26Pk);
    console.log(`instruction46: ${JSON.stringify(ix26Account)}`);

    const [ix27Pk] = ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA(
      {
          dynamic: 47,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL,
    );
    await instruction47SendAndConfirm({
        accountSeedDynamic: 47,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix27Account = await ValidateAdvancedCasesGetters.getState(ix27Pk);
    console.log(`instruction47: ${JSON.stringify(ix27Account)}`);

    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL,
    );
    const [ix28Pk] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix48",
          pubkeyType: signer1.publicKey,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL,
    );
    await instruction48SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix48",
        accountSeedPubkeyType: signer1.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix28Account = await ValidateAdvancedCasesGetters.getState(ix28Pk);
    console.log(`instruction48: ${JSON.stringify(ix28Account)}`);

    /**
     * Close with custom rent-receiver: TODO
     */

    // Ix 49 close_unsafe Not PDA Test
    balanceBefore = await connection.getBalance(signer1.publicKey);

    await instruction49SendAndConfirm({
        account: ix21Kp.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix21AccountAfterClose = await ValidateAdvancedCasesGetters.getState(
      ix21Kp.publicKey,
    );
    balanceAfter = await connection.getBalance(signer1.publicKey);

    console.log(
      "Close unsafe test Ix 49 Ok?: ",
      balanceAfter > balanceBefore && ix21AccountAfterClose == undefined,
    );

    // Rewind
    await instruction41SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix21Kp,
        },
    });

    // Ix Safe 49 Close Not PDA Test
    balanceBefore = await connection.getBalance(signer1.publicKey);

    await safeInstruction49SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix21Kp,
        },
    });

    ix21AccountAfterClose = await ValidateAdvancedCasesGetters.getState(
      ix21Kp.publicKey,
    );
    balanceAfter = await connection.getBalance(signer1.publicKey);

    console.log(
      "Close SAFE test Ix 49 Ok?: ",
      balanceAfter > balanceBefore && ix21AccountAfterClose == undefined,
    );

    // Ix 50 Close State Test
    balanceBefore = await connection.getBalance(signer2.publicKey);

    await instruction50SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix26AccountAfterClose =
      await ValidateAdvancedCasesGetters.getState(ix26Pk);
    balanceAfter = await connection.getBalance(signer2.publicKey);

    console.log(
      "Close test Ix 50 Ok?: ",
      balanceAfter > balanceBefore && ix26AccountAfterClose == undefined,
    );

    // Ix 51 Close State Test
    balanceBefore = await connection.getBalance(signer3.publicKey);

    await instruction51SendAndConfirm({
        accountSeedDynamic: 47,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix27AccountAfterClose =
      await ValidateAdvancedCasesGetters.getState(ix27Pk);
    balanceAfter = await connection.getBalance(signer3.publicKey);

    console.log(
      "Close test Ix 51 Ok?: ",
      balanceAfter > balanceBefore && ix27AccountAfterClose == undefined,
    );

    // Ix 52 Close State Test
    balanceBefore = await connection.getBalance(signer3.publicKey);

    await instruction52SendAndConfirm({
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix48",
        accountSeedPubkeyType: signer1.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix28AccountAfterClose =
      await ValidateAdvancedCasesGetters.getState(ix28Pk);
    balanceAfter = await connection.getBalance(signer3.publicKey);

    console.log(
      "Close test Ix 52 Ok?: ",
      balanceAfter > balanceBefore && ix28AccountAfterClose == undefined,
    );

    // Rewind
    await instruction48SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "ix48",
        accountSeedPubkeyType: signer1.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    /**
     * Verifies seed mapping
     */
    const [ix33Pk] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix48",
          pubkeyType: signer1.publicKey,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction53SendAndConfirm({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u64Type: BigInt(64),
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        i64Type: BigInt(64),
        stringType: "ix48",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix33Account = await ValidateAdvancedCasesGetters.getState(ix33Pk);
    console.log(`instruction53: ${JSON.stringify(ix33Account)}`);

    const [ix34Pk] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix48",
          pubkeyType: signer1.publicKey,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction54SendAndConfirm({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u64Type: BigInt(64),
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        i64Type: BigInt(64),
        stringType: "ix48",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix34Account = await ValidateAdvancedCasesGetters.getState(ix34Pk);
    console.log(`instruction54: ${JSON.stringify(ix34Account)}`);

    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    const [ix35Pk] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix55",
          pubkeyType: signer1.publicKey,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction55SendAndConfirm({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u64Type: BigInt(64),
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        i64Type: BigInt(64),
        stringType: "ix55",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix35Account = await ValidateAdvancedCasesGetters.getState(ix35Pk);
    console.log(`instruction55: ${JSON.stringify(ix35Account)}`);

    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    const [ix36Pk] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "ix56",
          pubkeyType: signer1.publicKey,
      },
      VALIDATE_ADVANCED_CASES_PROG_ID,
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction56SendAndConfirm({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u64Type: BigInt(64),
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        i64Type: BigInt(64),
        stringType: "ix56",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix36Account = await ValidateAdvancedCasesGetters.getState(ix36Pk);
    console.log(`instruction56: ${JSON.stringify(ix36Account)}`);

    // Ix 57 Close
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );

    let balanceBefore57 = await connection.getBalance(feePayer.publicKey);

    await instruction57SendAndConfirm({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u64Type: BigInt(64),
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        i64Type: BigInt(64),
        stringType: "ix56",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix36AccountAfterClose =
      await ValidateAdvancedCasesGetters.getState(ix36Pk);
    let balanceAfter57 = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 57 Ok?: ",
      balanceAfter57 > balanceBefore57 && ix36AccountAfterClose == undefined,
    );

    /**
     * Verifies non-pda account can be signer in various scenarios
     */
    signer1 = await createAccount(
      connection,
      feePayer,
      1,
      new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction58SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix38Account = await ValidateAdvancedCasesGetters.getState(
      signer1.publicKey,
    );
    console.log(`instruction58: ${JSON.stringify(ix38Account)}`);

    signer1 = await createAccount(
      connection,
      feePayer,
      1,
      new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"),
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction59SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix39Account = await ValidateAdvancedCasesGetters.getState(
      signer1.publicKey,
    );
    console.log(`instruction59: ${JSON.stringify(ix39Account)}`);

    const ix40Kp = Keypair.generate();
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction60SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix40Kp,
            signer2,
            signer3,
        },
    });
    const ix40Account = await ValidateAdvancedCasesGetters.getState(
      ix40Kp.publicKey,
    );
    console.log(`instruction60: ${JSON.stringify(ix40Account)}`);

    const ix41Kp = Keypair.generate();
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    await instruction61SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    const ix41Account = await ValidateAdvancedCasesGetters.getState(
      ix41Kp.publicKey,
    );
    console.log(`instruction61: ${JSON.stringify(ix41Account)}`);

    // Close unsafe ix 62
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );

    let balanceBefore62 = await connection.getBalance(feePayer.publicKey);

    await instruction62SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    let ix62AccountAfterClose = await ValidateAdvancedCasesGetters.getState(
      ix41Kp.publicKey,
    );
    let balanceAfter62 = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close unsafe test Ix 62 Ok?: ",
      balanceAfter62 > balanceBefore62 && ix62AccountAfterClose == undefined,
    );

    // Rewind
    await instruction61SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });

    // Close SAFE ix 62
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
    );

    balanceBefore62 = await connection.getBalance(feePayer.publicKey);

    await safeInstruction62SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    ix62AccountAfterClose = await ValidateAdvancedCasesGetters.getState(
      ix41Kp.publicKey,
    );
    balanceAfter62 = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close SAFE test Ix 62 Ok?: ",
      balanceAfter62 > balanceBefore62 && ix62AccountAfterClose == undefined,
    );
}

async function createAccount(
  connection: Connection,
  feePayer: Keypair,
  space: number,
  owner: PublicKey,
  additionalLamports: number = 0,
): Promise<Keypair> {
    const keypair = Keypair.generate();

    const rentExemptionAmount =
      await connection.getMinimumBalanceForRentExemption(space);

    const createAccountTransaction = new Transaction().add(
      SystemProgram.createAccount({
          fromPubkey: feePayer.publicKey,
          newAccountPubkey: keypair.publicKey,
          lamports: rentExemptionAmount + additionalLamports,
          space,
          programId: owner,
      }),
    );

    await sendAndConfirmTransaction(connection, createAccountTransaction, [
        feePayer,
        keypair,
    ]);

    return keypair;
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json")).then((file) =>
  main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))),
);
