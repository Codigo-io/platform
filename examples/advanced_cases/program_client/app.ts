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
    derivePdaaccountVerifiesSeedsTypesPDA,
    derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA,
    derivePdaaccountWithOneStaticSeedAndOneFieldPDA,
    derivePdaaccountWithOneStaticSeedAndOneFieldTwoPDA,
    getNonPdaaccountWithOneField,
    getPdaaccountVerifiesSeedsTypes,
    getPdaaccountWithOneStaticAndDynamicSeedAndOneField,
    getPdaaccountWithOneStaticSeedAndOneField,
    getPdaaccountWithOneStaticSeedAndOneFieldTwo,
    initializeClient, instruction0OnlyMethodWithNameSendAndConfirm,
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
    instruction2SendAndConfirm,
    instruction33SendAndConfirm,
    instruction34SendAndConfirm,
    instruction35SendAndConfirm,
    instruction36SendAndConfirm,
    instruction37SendAndConfirm,
    instruction38SendAndConfirm,
    instruction39SendAndConfirm,
    instruction3SendAndConfirm,
    instruction40SendAndConfirm,
    instruction41SendAndConfirm,
    instruction42SendAndConfirm,
    instruction4SendAndConfirm,
    instruction5SendAndConfirm,
    instruction6SendAndConfirm,
    instruction7SendAndConfirm,
    instruction8SendAndConfirm,
    instruction9SendAndConfirm,
} from "./index";

async function main(feePayer: Keypair) {
    const connection = new Connection("http://127.0.0.1:8899", {
        commitment: "confirmed"
    });
    const progId = new PublicKey(new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm"));

    initializeClient(progId, connection);

    const sig = await instruction0OnlyMethodWithNameSendAndConfirm({
        signers: {
            feePayer
        }
    });
    console.log(`instruction0: ${sig}`);


    /**
     * Singleton initialization
     */
    const ix9Kp = Keypair.generate();
    let signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    let signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    let signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction9SendAndConfirm({
        input1: 9,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix9Kp,
        },
    });
    const ix9Account = await getNonPdaaccountWithOneField(ix9Kp.publicKey);
    console.log(`instruction9: ${JSON.stringify(ix9Account)}`);

    const [ix10Pk] = derivePdaaccountWithOneStaticSeedAndOneFieldPDA(progId);
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction10SendAndConfirm({
        input1: 10,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix10Account = await getPdaaccountWithOneStaticSeedAndOneField(ix10Pk);
    console.log(`instruction10: ${JSON.stringify(ix10Account)}`);

    const [ix11Pk] = derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 11,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction11SendAndConfirm({
        input1: 11,
        accountSeedDynamic: 11,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix11Account =
        await getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix11Pk);
    console.log(`instruction11: ${JSON.stringify(ix11Account)}`);

    const [ix12Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "pre-init",
            pubkeyType: feePayer.publicKey,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction12SendAndConfirm({
        input1: 12,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "pre-init",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix12Account = await getPdaaccountVerifiesSeedsTypes(ix12Pk);
    console.log(`instruction12: ${JSON.stringify(ix12Account)}`);

    /**
     * Mutable
     */
    const ix1AccountKp = await createAccount(connection, feePayer, 1, progId);
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction1SendAndConfirm({
        account: ix1AccountKp.publicKey,
        input1: 1,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix1Account = await getNonPdaaccountWithOneField(ix1AccountKp.publicKey);
    console.log(`instruction1: ${JSON.stringify(ix1Account)}`);

    const [ix2Pk] = derivePdaaccountWithOneStaticSeedAndOneFieldPDA(progId);
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction2SendAndConfirm({
        input1: 2,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix2Account = await getPdaaccountWithOneStaticSeedAndOneField(ix2Pk);
    console.log(`instruction2: ${JSON.stringify(ix2Account)}`);

    const [ix3Pk] = derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 11,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction3SendAndConfirm({
        accountSeedDynamic: 11,
        input1: 3,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix3Account =
        await getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix3Pk);
    console.log(`instruction3: ${JSON.stringify(ix3Account)}`);

    const [ix4Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "pre-init",
            pubkeyType: feePayer.publicKey,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction4SendAndConfirm({
        input1: 4,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "pre-init",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix4Account = await getPdaaccountVerifiesSeedsTypes(ix4Pk);
    console.log(`instruction4: ${JSON.stringify(ix4Account)}`);

    /**
     * Immutable
     */
    const ix5AccountKp = await createAccount(connection, feePayer, 1, progId);
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction5SendAndConfirm({
        account: ix5AccountKp.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix5Account = await getNonPdaaccountWithOneField(ix5AccountKp.publicKey);
    console.log(`instruction5: ${JSON.stringify(ix5Account)}`);

    const [ix6Pk] = derivePdaaccountWithOneStaticSeedAndOneFieldPDA(progId);
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction6SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix6Account = await getPdaaccountWithOneStaticSeedAndOneField(ix6Pk);
    console.log(`instruction6: ${JSON.stringify(ix6Account)}`);

    const [ix7Pk] = derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 11,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction7SendAndConfirm({
        accountSeedDynamic: 11,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix7Account =
        await getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix7Pk);
    console.log(`instruction7: ${JSON.stringify(ix7Account)}`);

    const [ix8Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "pre-init",
            pubkeyType: feePayer.publicKey,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction8SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "pre-init",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix8Account = await getPdaaccountVerifiesSeedsTypes(ix8Pk);
    console.log(`instruction8: ${JSON.stringify(ix8Account)}`);

    /**
     * Non-Singleton initialization
     */
    const ix13Kp = Keypair.generate();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction13SendAndConfirm({
        input1: 13,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix13Kp,
        },
    });
    const ix13Account = await getNonPdaaccountWithOneField(ix13Kp.publicKey);
    console.log(`instruction13: ${JSON.stringify(ix13Account)}`);

    const [ix14Pk] = derivePdaaccountWithOneStaticSeedAndOneFieldPDA(progId);
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction14SendAndConfirm({
        input1: 14,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix14Account = await getPdaaccountWithOneStaticSeedAndOneField(ix14Pk);
    console.log(`instruction14: ${JSON.stringify(ix14Account)}`);

    const [ix15Pk] = derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 15,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction15SendAndConfirm({
        input1: 15,
        accountSeedDynamic: 15,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix15Account =
        await getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix15Pk);
    console.log(`instruction15: ${JSON.stringify(ix15Account)}`);

    const [ix16Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "pre-init-if-needed",
            pubkeyType: feePayer.publicKey,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction16SendAndConfirm({
        input1: 16,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "pre-init-if-needed",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix16Account = await getPdaaccountVerifiesSeedsTypes(ix16Pk);
    console.log(`instruction16: ${JSON.stringify(ix16Account)}`);

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
    await instruction21SendAndConfirm({
        input1: 21,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix21Kp,
        },
    });
    const ix21KpAccount = await getNonPdaaccountWithOneField(ix21Kp.publicKey);
    console.log(`instruction21: ${JSON.stringify(ix21KpAccount)}`);

    const [ix22Pk] = derivePdaaccountWithOneStaticSeedAndOneFieldTwoPDA(progId);
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction22SendAndConfirm({
        input1: 22,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix22Account = await getPdaaccountWithOneStaticSeedAndOneFieldTwo(ix22Pk);
    console.log(`instruction22: ${JSON.stringify(ix22Account)}`);

    const [ix23Pk] = derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 23,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    await instruction23SendAndConfirm({
        input1: 23,
        accountSeedDynamic: 23,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix23Account =
        await getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix23Pk);
    console.log(`instruction23: ${JSON.stringify(ix23Account)}`);

    const [ix24Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "pre-init-with-custom-payer",
            pubkeyType: feePayer.publicKey,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    await instruction24SendAndConfirm({
        input1: 24,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "pre-init-with-custom-payer",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix24Account = await getPdaaccountVerifiesSeedsTypes(ix24Pk);
    console.log(`instruction24: ${JSON.stringify(ix24Account)}`);

    /**
     * Non-Singleton initialization with custom rent payer
     */
    const ix25Kp = Keypair.generate();
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction25SendAndConfirm({
        input1: 25,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix25Kp,
        },
    });
    const ix25KpAccount = await getNonPdaaccountWithOneField(ix25Kp.publicKey);
    console.log(`instruction25: ${JSON.stringify(ix25KpAccount)}`);

    const [ix26Pk] = derivePdaaccountWithOneStaticSeedAndOneFieldPDA(progId);
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction26SendAndConfirm({
        input1: 26,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix26Account = await getPdaaccountWithOneStaticSeedAndOneField(ix26Pk);
    console.log(`instruction26: ${JSON.stringify(ix26Account)}`);

    const [ix27Pk] = derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA(
        {
            dynamic: 27,
        },
        progId,
    );
    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    await instruction27SendAndConfirm({
        input1: 27,
        accountSeedDynamic: 27,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix27Account =
        await getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix27Pk);
    console.log(`instruction27: ${JSON.stringify(ix27Account)}`);

    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    const [ix28Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "pre-init-if-needed-with-payer",
            pubkeyType: signer1.publicKey,
        },
        progId,
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId, LAMPORTS_PER_SOL);
    await instruction28SendAndConfirm({
        input1: 28,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "pre-init-if-needed-with-payer",
        accountSeedPubkeyType: signer1.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix28Account = await getPdaaccountVerifiesSeedsTypes(ix28Pk);
    console.log(`instruction28: ${JSON.stringify(ix28Account)}`);

    /**
     * Close with custom rent-receiver: TODO: Implement in contracts code to close the account
     */

    /**
     * Verifies seed mapping
     */
    const [ix33Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "pre-init-if-needed-with-payer",
            pubkeyType: signer1.publicKey,
        },
        progId,
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction33SendAndConfirm({
        u8Type: 8,
        u16Type: 16,
        u32Type: 32,
        i8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "pre-init-if-needed-with-payer",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix33Account = await getPdaaccountVerifiesSeedsTypes(ix33Pk);
    console.log(`instruction33: ${JSON.stringify(ix33Account)}`);

    const [ix34Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "pre-init-if-needed-with-payer",
            pubkeyType: signer1.publicKey,
        },
        progId,
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction34SendAndConfirm({
        u8Type: 8,
        u16Type: 16,
        u32Type: 32,
        i8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "pre-init-if-needed-with-payer",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix34Account = await getPdaaccountVerifiesSeedsTypes(ix34Pk);
    console.log(`instruction34: ${JSON.stringify(ix34Account)}`);

    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    const [ix35Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "instruction35",
            pubkeyType: signer1.publicKey,
        },
        progId,
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction35SendAndConfirm({
        u8Type: 8,
        u16Type: 16,
        u32Type: 32,
        i8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "instruction35",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix35Account = await getPdaaccountVerifiesSeedsTypes(ix35Pk);
    console.log(`instruction35: ${JSON.stringify(ix35Account)}`);

    signer1 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    const [ix36Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "instruction36",
            pubkeyType: signer1.publicKey,
        },
        progId,
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction36SendAndConfirm({
        u8Type: 8,
        u16Type: 16,
        u32Type: 32,
        i8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "instruction36",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix36Account = await getPdaaccountVerifiesSeedsTypes(ix36Pk);
    console.log(`instruction36: ${JSON.stringify(ix36Account)}`);

    const [ix37Pk] = derivePdaaccountVerifiesSeedsTypesPDA(
        {
            i8Type: 8,
            u16Type: 16,
            u32Type: 32,
            u8Type: 8,
            i16Type: 16,
            i32Type: 32,
            stringType: "instruction36",
            pubkeyType: signer1.publicKey,
        },
        progId,
    );
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction37SendAndConfirm({
        u8Type: 8,
        u16Type: 16,
        u32Type: 32,
        i8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "instruction36",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix37Account = await getPdaaccountVerifiesSeedsTypes(ix37Pk);
    console.log(`instruction37: ${JSON.stringify(ix37Account)}`);

    /**
     * Verifies non-pda account can be signer in various scenarios
     */
    signer1 = await createAccount(connection, feePayer, 1, progId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction38SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix38Account = await getNonPdaaccountWithOneField(signer1.publicKey);
    console.log(`instruction38: ${JSON.stringify(ix38Account)}`);

    signer1 = await createAccount(connection, feePayer, 1, progId);
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction39SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix39Account = await getNonPdaaccountWithOneField(signer1.publicKey);
    console.log(`instruction39: ${JSON.stringify(ix39Account)}`);

    const ix40Kp = Keypair.generate();
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction40SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix40Kp,
            signer2,
            signer3,
        },
    });
    const ix40Account = await getNonPdaaccountWithOneField(ix40Kp.publicKey);
    console.log(`instruction40: ${JSON.stringify(ix40Account)}`);

    const ix41Kp = Keypair.generate();
    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction41SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    const ix41Account = await getNonPdaaccountWithOneField(ix41Kp.publicKey);
    console.log(`instruction41: ${JSON.stringify(ix41Account)}`);

    signer2 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    signer3 = await createAccount(connection, feePayer, 0, SystemProgram.programId);
    await instruction42SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    const ix42Account = await getNonPdaaccountWithOneField(ix41Kp.publicKey);
    console.log(`instruction42: ${JSON.stringify(ix42Account)}`);
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

fs.readFile(path.join(os.homedir(), ".config/solana/id.json")).then((file) =>
    main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))),
);
