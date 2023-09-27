import {
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction
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
    instruction3SendAndConfirm,
    instruction41SendAndConfirm,
    instruction42SendAndConfirm,
    instruction43SendAndConfirm,
    instruction44SendAndConfirm,
    instruction45SendAndConfirm,
    instruction46SendAndConfirm,
    instruction47SendAndConfirm,
    instruction48SendAndConfirm,
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
    ValidateDataTypesPDAs
} from "./index";

async function main(feePayer: Keypair) {
    const connection = new Connection("http://127.0.0.1:8899", {
        commitment: "confirmed"
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

async function validateAccounts(connection: Connection, progId: PublicKey, feePayer: Keypair) {
    /**
     * Singleton initialization
     */
    const ix9Kp = Keypair.generate();
    await instruction9SendAndConfirm({
        signers: {
            feePayer,
            account: ix9Kp
        }
    });
    const ix9Account = await ValidateAccountsGetters.getNonPdaaccountWithOneField(ix9Kp.publicKey);
    console.info(`ix9: ${JSON.stringify(ix9Account)}`);

    const [ix10Pk] = ValidateAccountsPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();
    await instruction10SendAndConfirm({
        account: new PublicKey(ix10Pk.toString()),
        signers: {
            feePayer
        }
    });
    const ix10Account = await ValidateAccountsGetters.getPdaaccountWithOneStaticSeedAndOneField(ix10Pk);
    console.info(`ix10: ${JSON.stringify(ix10Account)}`);

    const [ix11Pk] = ValidateAccountsPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: 11,
    });
    await instruction11SendAndConfirm({
        account: new PublicKey(ix11Pk.toString()),
        signers: {
            feePayer
        }
    });
    const ix11Account = await ValidateAccountsGetters.getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix11Pk)
    console.info(`ix11: ${JSON.stringify(ix11Account)}`);

    const [ix12Pk] = ValidateAccountsPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "ix12",
        pubkeyType: progId
    });
    await instruction12SendAndConfirm({
        account: ix12Pk,
        signers: {
            feePayer,
        }
    });
    const ix12Account = await ValidateAccountsGetters.getPdaaccountVerifiesSeedsTypes(ix12Pk);
    console.info(`ix12: ${JSON.stringify(ix12Account)}`);

    /**
     * Mutable
     */
    const ix1AccountKp = await createAccount(connection, feePayer, 1, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));
    await instruction1SendAndConfirm({
        account: ix1AccountKp.publicKey,
        signers: {
            feePayer
        }
    })
    const ix1Account = await ValidateAccountsGetters.getNonPdaaccountWithOneField(ix1AccountKp.publicKey);
    console.info(`ix1: ${JSON.stringify(ix1Account)}`);

    const [ix2Pk] = ValidateAccountsPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();
    await instruction2SendAndConfirm({
        signers: {
            feePayer
        }
    });
    const ix2Account = await ValidateAccountsGetters.getPdaaccountWithOneStaticSeedAndOneField(ix2Pk);
    console.info(`ix2: ${JSON.stringify(ix2Account)}`);

    const [ix3Pk] = ValidateAccountsPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: 11,
    });
    await instruction3SendAndConfirm({
        accountSeedDynamic: 11,
        signers: {
            feePayer
        }
    });
    const ix3Account = await ValidateAccountsGetters.getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix3Pk)
    console.info(`ix3: ${JSON.stringify(ix3Account)}`);

    const [ix4Pk] = ValidateAccountsPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "ix12",
        pubkeyType: progId
    });
    await instruction4SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "ix12",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
        }
    });
    const ix4Account = await ValidateAccountsGetters.getPdaaccountVerifiesSeedsTypes(ix4Pk);
    console.info(`ix4: ${JSON.stringify(ix4Account)}`);

    /**
     * Immutable
     */
    const ix5AccountKp = await createAccount(connection, feePayer, 1, new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs"));
    await instruction5SendAndConfirm({
        account: ix5AccountKp.publicKey,
        signers: {
            feePayer
        }
    })
    const ix5Account = await ValidateAccountsGetters.getNonPdaaccountWithOneField(ix5AccountKp.publicKey);
    console.info(`ix5: ${JSON.stringify(ix5Account)}`);

    const [ix6Pk] = ValidateAccountsPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();
    await instruction6SendAndConfirm({
        signers: {
            feePayer
        }
    });
    const ix6Account = await ValidateAccountsGetters.getPdaaccountWithOneStaticSeedAndOneField(ix6Pk);
    console.info(`ix6: ${JSON.stringify(ix6Account)}`);

    const [ix7Pk] = ValidateAccountsPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: 11,
    });
    await instruction7SendAndConfirm({
        accountSeedDynamic: 11,
        signers: {
            feePayer
        }
    });
    const ix7Account = await ValidateAccountsGetters.getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix7Pk)
    console.info(`ix7: ${JSON.stringify(ix7Account)}`);

    const [ix8Pk] = ValidateAccountsPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "ix12",
        pubkeyType: progId
    });
    await instruction8SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "ix12",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
        }
    });
    const ix8Account = await ValidateAccountsGetters.getPdaaccountVerifiesSeedsTypes(ix8Pk);
    console.info(`ix8: ${JSON.stringify(ix8Account)}`);


    /**
     * Non-Singleton initialization
     */
    const ix13Kp = Keypair.generate();
    await instruction13SendAndConfirm({
        signers: {
            feePayer,
            account: ix13Kp
        }
    });
    const ix13Account = await ValidateAccountsGetters.getNonPdaaccountWithOneField(ix13Kp.publicKey);
    console.info(`ix13: ${JSON.stringify(ix13Account)}`);


    const [ix14Pk] = ValidateAccountsPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();
    await instruction14SendAndConfirm({
        account: ix14Pk,
        signers: {
            feePayer
        }
    });
    const ix14Account = await ValidateAccountsGetters.getPdaaccountWithOneStaticSeedAndOneField(ix14Pk);
    console.info(`ix14: ${JSON.stringify(ix14Account)}`);

    const [ix15Pk] = ValidateAccountsPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: 15,
    });
    await instruction15SendAndConfirm({
        account: ix15Pk,
        signers: {
            feePayer
        }
    });
    const ix15Account = await ValidateAccountsGetters.getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix15Pk)
    console.info(`ix15: ${JSON.stringify(ix15Account)}`);

    const [ix16Pk] = ValidateAccountsPDAs.derivePdaaccountVerifiesSeedsTypesPDA({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "ix16",
        pubkeyType: progId
    });
    await instruction16SendAndConfirm({
        account: ix16Pk,
        signers: {
            feePayer,
        }
    });
    const ix16Account = await ValidateAccountsGetters.getPdaaccountVerifiesSeedsTypes(ix16Pk);
    console.info(`ix16: ${JSON.stringify(ix16Account)}`);

    /**
     * Close: TODO: Implement in contracts code to close the account
     */
}

async function validateDataTypes(feePayer: Keypair) {
    const masterNonPDA = Keypair.generate();
    await instruction63SendAndConfirm({
        accountInfoType: Keypair.generate().publicKey,
        accountInfoTypeMut: Keypair.generate().publicKey,
        signers: {
            account: masterNonPDA,
            feePayer,
        }
    });
    const masterNonPDAAccount = await ValidateDataTypesGetters.getMasterTypesNonPda(masterNonPDA.publicKey);
    console.info(`ix63: `, masterNonPDAAccount);

    const [masterTypesPdaPubKey] = ValidateDataTypesPDAs.deriveMasterTypesPdaPDA();
    await instruction64SendAndConfirm({
        accountInfoType: Keypair.generate().publicKey,
        accountInfoTypeMut: Keypair.generate().publicKey,
        account: masterTypesPdaPubKey,
        signers: {
            feePayer
        }
    });
    const masterPDA = await ValidateDataTypesGetters.getMasterTypesPda(masterTypesPdaPubKey);
    console.info(`ix64: `, masterPDA);
}

async function validateAdvancedCases(connection: Connection, progId: PublicKey, feePayer: Keypair) {
    const sig = await instruction0SendAndConfirm({
        signers: {
            feePayer
        }
    });
    console.info(`instruction0: ${sig}`);

    /**
     * Singleton initialization
     */
    const ix9Kp = Keypair.generate();
    let signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    let signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    let signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction29SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix9Kp,
        },
    });
    const ix9Account = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(ix9Kp.publicKey);
    console.info(`instruction29: ${JSON.stringify(ix9Account)}`);

    const [ix10Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction30SendAndConfirm({
        account: ix10Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix10Account = await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticSeedAndOneField(ix10Pk);
    console.info(`instruction30: ${JSON.stringify(ix10Account)}`);

    const [ix11Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 31,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction31SendAndConfirm({
        account: ix11Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix11Account =
        await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix11Pk);
    console.log(`instruction31: ${JSON.stringify(ix11Account)}`);

    const [ix12Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix32",
            pubkeyType: progId,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction32SendAndConfirm({
        account: ix12Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix12Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix12Pk);
    console.log(`instruction32: ${JSON.stringify(ix12Account)}`);

    /**
     * Mutable
     */
    const ix1AccountKp = await createAccount(connection, feePayer, 1, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction21SendAndConfirm({
        account: ix1AccountKp.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix1Account = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(ix1AccountKp.publicKey);
    console.log(`instruction21: ${JSON.stringify(ix1Account)}`);

    const [ix2Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction22SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix2Account = await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticSeedAndOneField(ix2Pk);
    console.log(`instruction22: ${JSON.stringify(ix2Account)}`);

    const [ix3Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 31,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction23SendAndConfirm({
        accountSeedDynamic: 31,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix3Account =
        await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix3Pk);
    console.log(`instruction23: ${JSON.stringify(ix3Account)}`);

    const [ix4Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix32",
            pubkeyType: progId,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction24SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "ix32",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix4Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix4Pk);
    console.log(`instruction24: ${JSON.stringify(ix4Account)}`);

    /**
     * Immutable
     */
    const ix5AccountKp = await createAccount(connection, feePayer, 1, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction25SendAndConfirm({
        account: ix5AccountKp.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix5Account = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(ix5AccountKp.publicKey);
    console.log(`instruction25: ${JSON.stringify(ix5Account)}`);

    const [ix6Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction26SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix6Account = await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticSeedAndOneField(ix6Pk);
    console.log(`instruction26: ${JSON.stringify(ix6Account)}`);

    const [ix7Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 31,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction27SendAndConfirm({
        accountSeedDynamic: 31,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix7Account =
        await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix7Pk);
    console.log(`instruction27: ${JSON.stringify(ix7Account)}`);

    const [ix8Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix32",
            pubkeyType: progId,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction28SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "ix32",
        accountSeedPubkeyType: progId,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix8Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix8Pk);
    console.log(`instruction28: ${JSON.stringify(ix8Account)}`);

    /**
     * Non-Singleton initialization
     */
    const ix13Kp = Keypair.generate();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction33SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix13Kp,
        },
    });
    const ix13Account = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(ix13Kp.publicKey);
    console.log(`instruction33: ${JSON.stringify(ix13Account)}`);

    const [ix14Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction34SendAndConfirm({
        account: ix14Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix14Account = await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticSeedAndOneField(ix14Pk);
    console.log(`instruction34: ${JSON.stringify(ix14Account)}`);

    const [ix15Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 35,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction35SendAndConfirm({
        account: ix15Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix15Account =
        await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix15Pk);
    console.log(`instruction35: ${JSON.stringify(ix15Account)}`);

    const [ix16Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix36",
            pubkeyType: progId,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction36SendAndConfirm({
        account: ix16Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix16Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix16Pk);
    console.log(`instruction36: ${JSON.stringify(ix16Account)}`);

    /**
     * Close: TODO: Implement in contracts code to close the account
     */

    /**
     * Singleton initialization with custom rent payer
     */
    const ix21Kp = Keypair.generate();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction41SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix21Kp,
        },
    });
    const ix21KpAccount = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(ix21Kp.publicKey);
    console.log(`instruction41: ${JSON.stringify(ix21KpAccount)}`);

    const [ix22Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldTwoPDA();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction42SendAndConfirm({
        account: ix22Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix22Account = await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticSeedAndOneFieldTwo(ix22Pk);
    console.log(`instruction42: ${JSON.stringify(ix22Account)}`);

    const [ix23Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 43,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    await instruction43SendAndConfirm({
        account: ix23Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix23Account =
        await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix23Pk);
    console.log(`instruction43: ${JSON.stringify(ix23Account)}`);

    const [ix24Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix44",
            pubkeyType: progId,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    await instruction44SendAndConfirm({
        account: ix24Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix24Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix24Pk);
    console.log(`instruction44: ${JSON.stringify(ix24Account)}`);

    /**
     * Non-Singleton initialization with custom rent payer
     */
    const ix25Kp = Keypair.generate();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction45SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix25Kp,
        },
    });
    const ix25KpAccount = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(ix25Kp.publicKey);
    console.log(`instruction45: ${JSON.stringify(ix25KpAccount)}`);

    const [ix26Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticSeedAndOneFieldPDA();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction46SendAndConfirm({
        account: ix26Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix26Account = await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticSeedAndOneField(ix26Pk);
    console.log(`instruction46: ${JSON.stringify(ix26Account)}`);

    const [ix27Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 47,
        },
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    await instruction47SendAndConfirm({
        account: ix27Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix27Account =
        await ValidateAdvancedCasesGetters.getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix27Pk);
    console.log(`instruction47: ${JSON.stringify(ix27Account)}`);

    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    const [ix28Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix48",
            pubkeyType: signer1.publicKey,
        },
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    await instruction48SendAndConfirm({
        account: ix28Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix28Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix28Pk);
    console.log(`instruction48: ${JSON.stringify(ix28Account)}`);

    /**
     * Close with custom rent-receiver: TODO: Implement in contracts code to close the account
     */

    /**
     * Verifies seed mapping
     */
    const [ix33Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix48",
            pubkeyType: signer1.publicKey,
        },
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction53SendAndConfirm({
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedStringType: "ix48",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix33Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix33Pk);
    console.log(`instruction53: ${JSON.stringify(ix33Account)}`);

    const [ix34Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix48",
            pubkeyType: signer1.publicKey,
        },
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction54SendAndConfirm({
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedStringType: "ix48",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix34Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix34Pk);
    console.log(`instruction54: ${JSON.stringify(ix34Account)}`);

    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    const [ix35Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix55",
            pubkeyType: signer1.publicKey,
        },
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction55SendAndConfirm({
        account: ix35Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix35Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix35Pk);
    console.log(`instruction55: ${JSON.stringify(ix35Account)}`);

    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    const [ix36Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix56",
            pubkeyType: signer1.publicKey,
        },
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction56SendAndConfirm({
        account: ix36Pk,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix36Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix36Pk);
    console.log(`instruction56: ${JSON.stringify(ix36Account)}`);

    const [ix37Pk] = ValidateAdvancedCasesPDAs.derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "ix56",
            pubkeyType: signer1.publicKey,
        },
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction57SendAndConfirm({
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedStringType: "ix56",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix37Account = await ValidateAdvancedCasesGetters.getPdaaccountVerifiesSeedsTypes(ix37Pk);
    console.log(`instruction57: ${JSON.stringify(ix37Account)}`);

    /**
     * Verifies non-pda account can be signer in various scenarios
     */
    signer1 = await createAccount(connection, feePayer, 1, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction58SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix38Account = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(signer1.publicKey);
    console.log(`instruction58: ${JSON.stringify(ix38Account)}`);

    signer1 = await createAccount(connection, feePayer, 1, new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction59SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix39Account = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(signer1.publicKey);
    console.log(`instruction59: ${JSON.stringify(ix39Account)}`);

    const ix40Kp = Keypair.generate();
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction60SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix40Kp,
            signer2,
            signer3,
        },
    });
    const ix40Account = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(ix40Kp.publicKey);
    console.log(`instruction60: ${JSON.stringify(ix40Account)}`);

    const ix41Kp = Keypair.generate();
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction61SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    const ix41Account = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(ix41Kp.publicKey);
    console.log(`instruction61: ${JSON.stringify(ix41Account)}`);

    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction62SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    const ix42Account = await ValidateAdvancedCasesGetters.getNonPdaaccountWithOneField(ix41Kp.publicKey);
    console.log(`instruction62: ${JSON.stringify(ix42Account)}`);
}

async function createAccount(
    connection: Connection,
    feePayer: Keypair,
    space: number,
    owner: PublicKey,
    additionalLamports: number = 0
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

fs.readFile(path.join(os.homedir(), ".config/solana/id.json"))
    .then(file => main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))));