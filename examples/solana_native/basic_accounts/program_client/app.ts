import {
    Connection,
    Keypair,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction,
} from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import {
    deriveStaticPdaPDA,
    deriveDynamicPdaPDA,
    derivePdaWithAllTypesPDA,
    getState,
    initializeClient,
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
    instruction2SendAndConfirm,
    instruction3SendAndConfirm,
    instruction4SendAndConfirm,
    instruction5SendAndConfirm,
    instruction6SendAndConfirm,
    instruction7SendAndConfirm,
    instruction8SendAndConfirm,
    instruction9SendAndConfirm,
} from "./index";

async function main(feePayer: Keypair) {
    const connection = new Connection("http://127.0.0.1:8899", {
        commitment: "confirmed",
    });
    const progId = new PublicKey("8WtjCDLNXNKCDzQHro6vsQT3PTUX4TuLuTbFomMSoMrs");

    initializeClient(progId, connection);

    /**
     * Singleton initialization
     */
    const ix9Kp = Keypair.generate();
    await instruction9SendAndConfirm({
        input1: 9,
        signers: {
            feePayer,
            account: ix9Kp,
        },
    });
    const ix9Account = await getState(ix9Kp.publicKey);
    console.log(ix9Account);

    const [ix10Pk] = deriveStaticPdaPDA(progId);
    await instruction10SendAndConfirm({
        input1: 10,
        signers: {
            feePayer,
        },
    });
    const ix10Account = await getState(ix10Pk);
    console.log(ix10Account);

    const [ix11Pk] = deriveDynamicPdaPDA(
      {
          dynamic: 1,
      },
      progId
    );
    await instruction11SendAndConfirm({
        input1: 11,
        accountSeedDynamic: 1,
        signers: {
            feePayer,
        },
    });
    const ix11Account = await getState(
      ix11Pk
    );
    console.log(ix11Account);

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
          stringType: "ix8",
          pubkeyType: feePayer.publicKey,
      },
      progId
    );
    await instruction12SendAndConfirm({
        input1: 12,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedStringType: "ix8",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
        },
    });
    const ix12Account = await getState(ix12Pk);
    console.log(ix12Account);

    /**
     * Mutable
     */
    const ix1AccountKp = await createAccount(connection, feePayer, 1, progId);
    await instruction1SendAndConfirm({
        account: ix1AccountKp.publicKey,
        input1: 1,
        signers: {
            feePayer,
        },
    });
    const ix1Account = await getState(ix1AccountKp.publicKey);
    console.log(ix1Account);

    const [ix2Pk] = deriveStaticPdaPDA(progId);
    await instruction2SendAndConfirm({
        input1: 2,
        signers: {
            feePayer,
        },
    });
    const ix2Account = await getState(ix2Pk);
    console.log(ix2Account);

    const [ix3Pk] = deriveDynamicPdaPDA(
      {
          dynamic: 1,
      },
      progId
    );
    await instruction3SendAndConfirm({
        accountSeedDynamic: 1,
        input1: 3,
        signers: {
            feePayer,
        },
    });
    const ix3Account = await getState(
      ix3Pk
    );
    console.log(ix3Account);

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
          stringType: "ix8",
          pubkeyType: feePayer.publicKey,
      },
      progId
    );
    await instruction4SendAndConfirm({
        input1: 4,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedStringType: "ix8",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
        },
    });
    const ix4Account = await getState(ix4Pk);
    console.log(ix4Account);

    /**
     * Immutable
     */
    const ix5AccountKp = await createAccount(connection, feePayer, 1, progId);
    await instruction5SendAndConfirm({
        account: ix5AccountKp.publicKey,
        signers: {
            feePayer,
        },
    });
    const ix5Account = await getState(ix5AccountKp.publicKey);
    console.log(ix5Account);

    const [ix6Pk] = deriveStaticPdaPDA(progId);
    await instruction6SendAndConfirm({
        signers: {
            feePayer,
        },
    });
    const ix6Account = await getState(ix6Pk);
    console.log(ix6Account);

    const [ix7Pk] = deriveDynamicPdaPDA(
      {
          dynamic: 1,
      },
      progId
    );
    await instruction7SendAndConfirm({
        accountSeedDynamic: 1,
        signers: {
            feePayer,
        },
    });
    const ix7Account = await getState(
      ix7Pk
    );
    console.log(ix7Account);

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
          stringType: "ix8",
          pubkeyType: feePayer.publicKey,
      },
      progId
    );
    await instruction8SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedStringType: "ix8",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
        },
    });
    const ix8Account = await getState(ix8Pk);
    console.log(ix8Account);

    /**
     * Non-Singleton initialization
     */
    const ix13Kp = Keypair.generate();
    await instruction13SendAndConfirm({
        input1: 9,
        signers: {
            feePayer,
            account: ix13Kp,
        },
    });
    const ix13Account = await getState(ix13Kp.publicKey);
    console.log(ix13Account);

    const [ix14Pk] = deriveStaticPdaPDA(progId);
    await instruction14SendAndConfirm({
        input1: 10,
        signers: {
            feePayer,
        },
    });
    const ix14Account = await getState(ix14Pk);
    console.log(ix14Account);

    const [ix15Pk] = deriveDynamicPdaPDA(
      {
          dynamic: 15,
      },
      progId
    );
    await instruction15SendAndConfirm({
        input1: 11,
        accountSeedDynamic: 15,
        signers: {
            feePayer,
        },
    });
    const ix15Account = await getState(
      ix15Pk
    );
    console.log(ix15Account);

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
          stringType: "16",
          pubkeyType: feePayer.publicKey,
      },
      progId
    );
    await instruction16SendAndConfirm({
        input1: 12,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU64Type: BigInt(64),
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedI64Type: BigInt(64),
        accountSeedStringType: "16",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
        },
    });
    const ix16Account = await getState(ix16Pk);
    console.log(ix16Account);

    // Ix 17 close_unsafe Not PDA Test
    let balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction17SendAndConfirm({
        account: ix9Kp.publicKey,
        signers: {
            feePayer,
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
            account: ix9Kp,
        },
    });

    // safe Ix 17 Close Not PDA Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await safeInstruction17SendAndConfirm({
        signers: {
            feePayer,
            account: ix9Kp,
        },
    });

    ix9AccountAfterClose = await getState(
      ix9Kp.publicKey
    );
    balanceAfter = await connection.getBalance(feePayer.publicKey);

    console.log(
      "Close test safe Ix 17 Ok?: ",
      balanceAfter > balanceBefore && ix9AccountAfterClose == undefined
    );

    // Ix 18 Close State Test
    balanceBefore = await connection.getBalance(feePayer.publicKey);

    await instruction18SendAndConfirm({
        signers: {
            feePayer,
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
        accountSeedDynamic: 1,
        signers: {
            feePayer,
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
        accountSeedStringType: "ix8",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
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
}

async function createAccount(
  connection: Connection,
  feePayer: Keypair,
  space: number,
  owner: PublicKey
): Promise<Keypair> {
    const keypair = Keypair.generate();

    const rentExemptionAmount =
      await connection.getMinimumBalanceForRentExemption(space);

    const createAccountTransaction = new Transaction().add(
      SystemProgram.createAccount({
          fromPubkey: feePayer.publicKey,
          newAccountPubkey: keypair.publicKey,
          lamports: rentExemptionAmount,
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
