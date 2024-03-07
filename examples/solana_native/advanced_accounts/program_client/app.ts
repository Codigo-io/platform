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
    derivePdaWithAllTypesPDA,
    deriveDynamicPdaPDA,
    deriveStaticPdaPDA,
    getState,
    initializeClient,
    instruction0OnlyMethodWithNameSendAndConfirm,
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
    safeInstruction29SendAndConfirm,
    instruction30SendAndConfirm,
    instruction31SendAndConfirm,
    instruction32SendAndConfirm,
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
    safeInstruction42SendAndConfirm,
} from "./index";

async function main(feePayer: Keypair) {
    const connection = new Connection("http://127.0.0.1:8899", {
        commitment: "confirmed",
    });
    const progId = new PublicKey(
      new PublicKey("31j2cdxe2M9b9ZnwuRL6Qm4v5zp9v7WiNZDmP8YGweXm")
    );

    initializeClient(progId, connection);

    const sig = await instruction0OnlyMethodWithNameSendAndConfirm({
        signers: {
            feePayer,
        },
    });
    console.log(`instruction0: ${sig}`);

    /**
     * Singleton initialization
     */
    const ix9Kp = Keypair.generate();
    let signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    let signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    let signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
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
    const ix9Account = await getState(ix9Kp.publicKey);
    console.log(`instruction9: ${JSON.stringify(ix9Account)}`);

    const [ix10Pk] = deriveStaticPdaPDA(progId);
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction10SendAndConfirm({
        input1: 10,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix10Account = await getState(ix10Pk);
    console.log(`instruction10: ${JSON.stringify(ix10Account)}`);

    const [ix11Pk] = deriveDynamicPdaPDA(
      {
          dynamic: 11,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
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
    const ix11Account = await getState(
      ix11Pk
    );
    console.log(`instruction11: ${JSON.stringify(ix11Account)}`);

    const [ix12Pk] = derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "pre-init",
          pubkeyType: feePayer.publicKey,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction12SendAndConfirm({
        input1: 12,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "pre-init",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix12Account = await getState(ix12Pk);
    console.log(`instruction12: ${JSON.stringify(ix12Account)}`);

    /**
     * Mutable
     */
    const ix1AccountKp = await createAccount(connection, feePayer, 1, progId);
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
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
    const ix1Account = await getState(ix1AccountKp.publicKey);
    console.log(`instruction1: ${JSON.stringify(ix1Account)}`);

    const [ix2Pk] = deriveStaticPdaPDA(progId);
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction2SendAndConfirm({
        input1: 2,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix2Account = await getState(ix2Pk);
    console.log(`instruction2: ${JSON.stringify(ix2Account)}`);

    const [ix3Pk] = deriveDynamicPdaPDA(
      {
          dynamic: 11,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
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
    const ix3Account = await getState(
      ix3Pk
    );
    console.log(`instruction3: ${JSON.stringify(ix3Account)}`);

    const [ix4Pk] = derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "pre-init",
          pubkeyType: feePayer.publicKey,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction4SendAndConfirm({
        input1: 4,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "pre-init",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix4Account = await getState(ix4Pk);
    console.log(`instruction4: ${JSON.stringify(ix4Account)}`);

    /**
     * Immutable
     */
    const ix5AccountKp = await createAccount(connection, feePayer, 1, progId);
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction5SendAndConfirm({
        account: ix5AccountKp.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix5Account = await getState(ix5AccountKp.publicKey);
    console.log(`instruction5: ${JSON.stringify(ix5Account)}`);

    const [ix6Pk] = deriveStaticPdaPDA(progId);
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction6SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix6Account = await getState(ix6Pk);
    console.log(`instruction6: ${JSON.stringify(ix6Account)}`);

    const [ix7Pk] = deriveDynamicPdaPDA(
      {
          dynamic: 11,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction7SendAndConfirm({
        accountSeedDynamic: 11,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix7Account = await getState(
      ix7Pk
    );
    console.log(`instruction7: ${JSON.stringify(ix7Account)}`);

    const [ix8Pk] = derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "pre-init",
          pubkeyType: feePayer.publicKey,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
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
        accountSeedStringType: "pre-init",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix8Account = await getState(ix8Pk);
    console.log(`instruction8: ${JSON.stringify(ix8Account)}`);

    /**
     * Non-Singleton initialization
     */
    const ix13Kp = Keypair.generate();
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
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
    const ix13Account = await getState(ix13Kp.publicKey);
    console.log(`instruction13: ${JSON.stringify(ix13Account)}`);

    const [ix14Pk] = deriveStaticPdaPDA(progId);
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction14SendAndConfirm({
        input1: 14,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix14Account = await getState(ix14Pk);
    console.log(`instruction14: ${JSON.stringify(ix14Account)}`);

    const [ix15Pk] = deriveDynamicPdaPDA(
      {
          dynamic: 15,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
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
    const ix15Account = await getState(
      ix15Pk
    );
    console.log(`instruction15: ${JSON.stringify(ix15Account)}`);

    const [ix16Pk] = derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "pre-init-if-needed",
          pubkeyType: feePayer.publicKey,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction16SendAndConfirm({
        input1: 16,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "pre-init-if-needed",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix16Account = await getState(ix16Pk);
    console.log(`instruction16: ${JSON.stringify(ix16Account)}`);

    /**
     * Close accounts with 4 signers
     */

      // Ix 17 close_unsafe Not PDA Test
    let balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction17SendAndConfirm({
        account: ix9Kp.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix9AccountAfterClose = await getState(
      ix9Kp.publicKey
    );
    let balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 17 Ok?: ",
      balanceAfter > balanceBefore && ix9AccountAfterClose == undefined
    );

    // Rewind
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

    // Ix 17b close Not PDA Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await safeInstruction17SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix9Kp,
        },
    });

    ix9AccountAfterClose = await getState(
      ix9Kp.publicKey
    );
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 17b Ok?: ",
      balanceAfter > balanceBefore && ix9AccountAfterClose == undefined
    );

    // Ix 18 Close State Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction18SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix10AccountAfterClose = await getState(
      ix10Pk
    );
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 18 Ok?: ",
      balanceAfter > balanceBefore && ix10AccountAfterClose == undefined
    );

    // Ix 19 Close State Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction19SendAndConfirm({
        accountSeedDynamic: 11,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix11AccountAfterClose = await getState(
      ix11Pk
    );
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 19 Ok?: ",
      balanceAfter > balanceBefore && ix11AccountAfterClose == undefined
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
        accountSeedStringType: "pre-init",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix12AccountAfterClose = await getState(
      ix12Pk
    );
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 20 Ok?: ",
      balanceAfter > balanceBefore && ix12AccountAfterClose == undefined
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
      LAMPORTS_PER_SOL
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
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
    const ix21KpAccount = await getState(ix21Kp.publicKey);
    console.log(`instruction21: ${JSON.stringify(ix21KpAccount)}`);

    const [ix22Pk] = deriveStaticPdaPDA(progId);
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction22SendAndConfirm({
        input1: 22,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix22Account = await getState(
      ix22Pk
    );
    console.log(`instruction22: ${JSON.stringify(ix22Account)}`);

    const [ix23Pk] = deriveDynamicPdaPDA(
      {
          dynamic: 23,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL
    );
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
    const ix23Account = await getState(
      ix23Pk
    );
    console.log(`instruction23: ${JSON.stringify(ix23Account)}`);

    const [ix24Pk] = derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "pre-init-with-custom-payer",
          pubkeyType: feePayer.publicKey,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL
    );
    await instruction24SendAndConfirm({
        input1: 24,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "pre-init-with-custom-payer",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix24Account = await getState(ix24Pk);
    console.log(`instruction24: ${JSON.stringify(ix24Account)}`);

    /**
     * Non-Singleton initialization with custom rent payer
     */
    const ix25Kp = Keypair.generate();
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
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
    const ix25KpAccount = await getState(ix25Kp.publicKey);
    console.log(`instruction25: ${JSON.stringify(ix25KpAccount)}`);

    const [ix26Pk] = deriveStaticPdaPDA(progId);
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction26SendAndConfirm({
        input1: 26,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix26Account = await getState(ix26Pk);
    console.log(`instruction26: ${JSON.stringify(ix26Account)}`);

    const [ix27Pk] = deriveDynamicPdaPDA(
      {
          dynamic: 27,
      },
      progId
    );
    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL
    );
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
    const ix27Account = await getState(
      ix27Pk
    );
    console.log(`instruction27: ${JSON.stringify(ix27Account)}`);

    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL
    );
    const [ix28Pk] = derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "pre-init-if-needed-with-payer",
          pubkeyType: signer1.publicKey,
      },
      progId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId,
      LAMPORTS_PER_SOL
    );
    await instruction28SendAndConfirm({
        input1: 28,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "pre-init-if-needed-with-payer",
        accountSeedPubkeyType: signer1.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix28Account = await getState(ix28Pk);
    console.log(`instruction28: ${JSON.stringify(ix28Account)}`);

    /**
     * Close accounts with 4 signers and rent-receiver
     */

    // Ix 29 close_unsafe Not PDA Test
    balanceBefore = await connection.getBalance(signer1.publicKey);

    await instruction29SendAndConfirm({
        account: ix21Kp.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix21AccountAfterClose = await getState(
      ix21Kp.publicKey
    );
    balanceAfter = await connection.getBalance(signer1.publicKey);

    console.log(
      "Close test Ix 29 Ok?: ",
      balanceAfter > balanceBefore && ix21AccountAfterClose == undefined
    );

    // Rewind
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

    // Ix 29b Close Not PDA Test
    balanceBefore = await connection.getBalance(signer1.publicKey);

    await safeInstruction29SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
            account: ix21Kp,
        },
    });

    ix21AccountAfterClose = await getState(
      ix21Kp.publicKey
    );
    balanceAfter = await connection.getBalance(signer1.publicKey);

    console.log(
      "Close test Ix 29b Ok?: ",
      balanceAfter > balanceBefore && ix21AccountAfterClose == undefined
    );

    // Ix 30 Close State Test
    balanceBefore = await connection.getBalance(signer2.publicKey);

    await instruction30SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix26AccountAfterClose = await getState(
      ix26Pk
    );
    balanceAfter = await connection.getBalance(signer2.publicKey);

    console.log(
      "Close test Ix 30 Ok?: ",
      balanceAfter > balanceBefore && ix26AccountAfterClose == undefined
    );

    // Ix 31 Close State Test
    balanceBefore = await connection.getBalance(signer3.publicKey);

    await instruction31SendAndConfirm({
        accountSeedDynamic: 27,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix27AccountAfterClose =
      await getState(ix27Pk);
    balanceAfter = await connection.getBalance(signer3.publicKey);

    console.log(
      "Close test Ix 31 Ok?: ",
      balanceAfter > balanceBefore && ix27AccountAfterClose == undefined
    );

    // Ix 32 Close State Test
    balanceBefore = await connection.getBalance(signer3.publicKey);

    await instruction32SendAndConfirm({
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "pre-init-if-needed-with-payer",
        accountSeedPubkeyType: signer1.publicKey,
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });

    let ix28AccountAfterClose = await getState(ix28Pk);
    balanceAfter = await connection.getBalance(signer3.publicKey);

    console.log(
      "Close test Ix 32 Ok?: ",
      balanceAfter > balanceBefore && ix28AccountAfterClose == undefined
    );

    // Rewind
    await instruction28SendAndConfirm({
        input1: 28,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "pre-init-if-needed-with-payer",
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
    const [ix33Pk] = derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "pre-init-if-needed-with-payer",
          pubkeyType: signer1.publicKey,
      },
      progId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction33SendAndConfirm({
        u8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u64Type: BigInt(64),
        i8Type: 8,
        i16Type: 16,
        i32Type: 32,
        i64Type: BigInt(64),
        stringType: "pre-init-if-needed-with-payer",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix33Account = await getState(ix33Pk);
    console.log(`instruction33: ${JSON.stringify(ix33Account)}`);

    const [ix34Pk] = derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "pre-init-if-needed-with-payer",
          pubkeyType: signer1.publicKey,
      },
      progId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction34SendAndConfirm({
        u8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u64Type: BigInt(64),
        i8Type: 8,
        i16Type: 16,
        i32Type: 32,
        i64Type: BigInt(64),
        stringType: "pre-init-if-needed-with-payer",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix34Account = await getState(ix34Pk);
    console.log(`instruction34: ${JSON.stringify(ix34Account)}`);

    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    const [ix35Pk] = derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "instruction35",
          pubkeyType: signer1.publicKey,
      },
      progId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction35SendAndConfirm({
        u8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u64Type: BigInt(64),
        i8Type: 8,
        i16Type: 16,
        i32Type: 32,
        i64Type: BigInt(64),
        stringType: "instruction35",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix35Account = await getState(ix35Pk);
    console.log(`instruction35: ${JSON.stringify(ix35Account)}`);

    signer1 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    const [ix36Pk] = derivePdaWithAllTypesPDA(
      {
          i8Type: 8,
          u16Type: 16,
          u32Type: 32,
          u64Type: BigInt(64),
          u8Type: 8,
          i16Type: 16,
          i32Type: 32,
          i64Type: BigInt(64),
          stringType: "instruction36",
          pubkeyType: signer1.publicKey,
      },
      progId
    );
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction36SendAndConfirm({
        u8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u64Type: BigInt(64),
        i8Type: 8,
        i16Type: 16,
        i32Type: 32,
        i64Type: BigInt(64),
        stringType: "instruction36",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix36Account = await getState(ix36Pk);
    console.log(`instruction36: ${JSON.stringify(ix36Account)}`);

    // Ix 37 Close
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );

    let balanceBefore37 = await connection.getBalance(feePayer.publicKey);

    await instruction37SendAndConfirm({
        u8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u64Type: BigInt(64),
        i8Type: 8,
        i16Type: 16,
        i32Type: 32,
        i64Type: BigInt(64),
        stringType: "instruction36",
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix37AccountAfterClose = await getState(ix36Pk);
    let balanceAfter37 = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 37 Ok?: ",
      balanceAfter37 > balanceBefore37 && ix37AccountAfterClose == undefined
    );

    /**
     * Verifies non-pda account can be signer in various scenarios
     */
    signer1 = await createAccount(connection, feePayer, 1, progId);
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction38SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix38Account = await getState(signer1.publicKey);
    console.log(`instruction38: ${JSON.stringify(ix38Account)}`);

    signer1 = await createAccount(connection, feePayer, 1, progId);
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction39SendAndConfirm({
        signers: {
            feePayer,
            signer1,
            signer2,
            signer3,
        },
    });
    const ix39Account = await getState(signer1.publicKey);
    console.log(`instruction39: ${JSON.stringify(ix39Account)}`);

    const ix40Kp = Keypair.generate();
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction40SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix40Kp,
            signer2,
            signer3,
        },
    });
    const ix40Account = await getState(ix40Kp.publicKey);
    console.log(`instruction40: ${JSON.stringify(ix40Account)}`);

    const ix41Kp = Keypair.generate();
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    await instruction41SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    const ix41Account = await getState(ix41Kp.publicKey);
    console.log(`instruction41: ${JSON.stringify(ix41Account)}`);

    // Close Unsafe ix 42
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );

    let balanceBefore42 = await connection.getBalance(feePayer.publicKey);

    await instruction42SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    const ix42AccountAfterClose = await getState(
      ix41Kp.publicKey
    );
    let balanceAfter42 = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 42 Ok?: ",
      balanceAfter42 > balanceBefore42 && ix42AccountAfterClose == undefined
    );

    // Rewind
    await instruction41SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    // Close SAFE ix 42
    signer2 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );
    signer3 = await createAccount(
      connection,
      feePayer,
      0,
      SystemProgram.programId
    );

    balanceBefore42 = await connection.getBalance(feePayer.publicKey);

    await safeInstruction42SendAndConfirm({
        signers: {
            feePayer,
            signer1: ix41Kp,
            signer2,
            signer3,
        },
    });
    const safeIx42AccountAfterClose = await getState(
      ix41Kp.publicKey
    );
    balanceAfter42 = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test Ix 42 Ok?: ",
      balanceAfter42 > balanceBefore42 && safeIx42AccountAfterClose == undefined
    );
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
      })
    );

    await sendAndConfirmTransaction(connection, createAccountTransaction, [
        feePayer,
        keypair,
    ]);

    return keypair;
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json")).then((file) =>
  main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString()))))
);
