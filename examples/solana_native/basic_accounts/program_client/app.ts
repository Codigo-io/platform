import {Connection, Keypair, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction} from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import {
    derivePdaaccountVerifiesSeedsTypesPDA,
    derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA,
    derivePdaaccountWithOneStaticSeedAndOneFieldPDA,
    getNonPdaaccountWithOneField,
    getPdaaccountVerifiesSeedsTypes,
    getPdaaccountWithOneStaticAndDynamicSeedAndOneField,
    getPdaaccountWithOneStaticSeedAndOneField,
    initializeClient,
    instruction10SendAndConfirm,
    instruction11SendAndConfirm,
    instruction12SendAndConfirm,
    instruction13SendAndConfirm,
    instruction14SendAndConfirm,
    instruction15SendAndConfirm,
    instruction16SendAndConfirm,
    instruction1SendAndConfirm,
    instruction2SendAndConfirm,
    instruction3SendAndConfirm,
    instruction4SendAndConfirm,
    instruction5SendAndConfirm,
    instruction6SendAndConfirm,
    instruction7SendAndConfirm,
    instruction8SendAndConfirm,
    instruction9SendAndConfirm
} from "./index";

async function main(feePayer: Keypair) {
    const connection = new Connection("http://127.0.0.1:8899", {
        commitment: "confirmed"
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
            account: ix9Kp
        }
    });
    const ix9Account = await getNonPdaaccountWithOneField(ix9Kp.publicKey);
    console.log(ix9Account);

    const [ix10Pk] = derivePdaaccountWithOneStaticSeedAndOneFieldPDA(progId);
    await instruction10SendAndConfirm({
        input1: 10,
        signers: {
            feePayer
        }
    });
    const ix10Account = await getPdaaccountWithOneStaticSeedAndOneField(ix10Pk);
    console.log(ix10Account);

    const [ix11Pk] = derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: 1,
    }, progId);
    await instruction11SendAndConfirm({
        input1: 11,
        accountSeedDynamic: 1,
        signers: {
            feePayer
        }
    });
    const ix11Account = await getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix11Pk)
    console.log(ix11Account);

    const [ix12Pk] = derivePdaaccountVerifiesSeedsTypesPDA({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "ix8",
        pubkeyType: feePayer.publicKey
    }, progId);
    await instruction12SendAndConfirm({
        input1: 12,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "ix8",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
        }
    });
    const ix12Account = await getPdaaccountVerifiesSeedsTypes(ix12Pk);
    console.log(ix12Account);

    /**
     * Mutable
     */
    const ix1AccountKp = await createAccount(connection, feePayer, 1, progId);
    await instruction1SendAndConfirm({
        account: ix1AccountKp.publicKey,
        input1: 1,
        signers: {
            feePayer
        }
    })
    const ix1Account = await getNonPdaaccountWithOneField(ix1AccountKp.publicKey);
    console.log(ix1Account);

    const [ix2Pk] = derivePdaaccountWithOneStaticSeedAndOneFieldPDA(progId);
    await instruction2SendAndConfirm({
        input1: 2,
        signers: {
            feePayer
        }
    });
    const ix2Account = await getPdaaccountWithOneStaticSeedAndOneField(ix2Pk);
    console.log(ix2Account);

    const [ix3Pk] = derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: 1,
    }, progId);
    await instruction3SendAndConfirm({
        accountSeedDynamic: 1,
        input1: 3,
        signers: {
            feePayer
        }
    });
    const ix3Account = await getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix3Pk)
    console.log(ix3Account);

    const [ix4Pk] = derivePdaaccountVerifiesSeedsTypesPDA({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "ix8",
        pubkeyType: feePayer.publicKey
    }, progId);
    await instruction4SendAndConfirm({
        input1: 4,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "ix8",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
        }
    });
    const ix4Account = await getPdaaccountVerifiesSeedsTypes(ix4Pk);
    console.log(ix4Account);

    /**
     * Immutable
     */
    const ix5AccountKp = await createAccount(connection, feePayer, 1, progId);
    await instruction5SendAndConfirm({
        account: ix5AccountKp.publicKey,
        signers: {
            feePayer
        }
    })
    const ix5Account = await getNonPdaaccountWithOneField(ix5AccountKp.publicKey);
    console.log(ix5Account);

    const [ix6Pk] = derivePdaaccountWithOneStaticSeedAndOneFieldPDA(progId);
    await instruction6SendAndConfirm({
        signers: {
            feePayer
        }
    });
    const ix6Account = await getPdaaccountWithOneStaticSeedAndOneField(ix6Pk);
    console.log(ix6Account);

    const [ix7Pk] = derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: 1,
    }, progId);
    await instruction7SendAndConfirm({
        accountSeedDynamic: 1,
        signers: {
            feePayer
        }
    });
    const ix7Account = await getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix7Pk)
    console.log(ix7Account);

    const [ix8Pk] = derivePdaaccountVerifiesSeedsTypesPDA({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "ix8",
        pubkeyType: feePayer.publicKey
    }, progId);
    await instruction8SendAndConfirm({
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "ix8",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
        }
    });
    const ix8Account = await getPdaaccountVerifiesSeedsTypes(ix8Pk);
    console.log(ix8Account);

    /**
     * Non-Singleton initialization
     */
    const ix13Kp = Keypair.generate();
    await instruction13SendAndConfirm({
        input1: 9,
        signers: {
            feePayer,
            account: ix13Kp
        }
    });
    const ix13Account = await getNonPdaaccountWithOneField(ix13Kp.publicKey);
    console.log(ix13Account);

    const [ix14Pk] = derivePdaaccountWithOneStaticSeedAndOneFieldPDA(progId);
    await instruction14SendAndConfirm({
        input1: 10,
        signers: {
            feePayer
        }
    });
    const ix14Account = await getPdaaccountWithOneStaticSeedAndOneField(ix14Pk);
    console.log(ix14Account);

    const [ix15Pk] = derivePdaaccountWithOneStaticAndDynamicSeedAndOneFieldPDA({
        dynamic: 15,
    }, progId);
    await instruction15SendAndConfirm({
        input1: 11,
        accountSeedDynamic: 15,
        signers: {
            feePayer
        }
    });
    const ix15Account = await getPdaaccountWithOneStaticAndDynamicSeedAndOneField(ix15Pk)
    console.log(ix15Account);

    const [ix16Pk] = derivePdaaccountVerifiesSeedsTypesPDA({
        i8Type: 8,
        u16Type: 16,
        u32Type: 32,
        u8Type: 8,
        i16Type: 16,
        i32Type: 32,
        stringType: "16",
        pubkeyType: feePayer.publicKey
    }, progId);
    await instruction16SendAndConfirm({
        input1: 12,
        accountSeedI8Type: 8,
        accountSeedI16Type: 16,
        accountSeedI32Type: 32,
        accountSeedU8Type: 8,
        accountSeedU16Type: 16,
        accountSeedU32Type: 32,
        accountSeedStringType: "16",
        accountSeedPubkeyType: feePayer.publicKey,
        signers: {
            feePayer,
        }
    });
    const ix16Account = await getPdaaccountVerifiesSeedsTypes(ix16Pk);
    console.log(ix16Account);

    /**
     * Close: TODO: Implement in contracts code to close the account
     */
}

async function createAccount(connection: Connection, feePayer: Keypair, space: number, owner: PublicKey): Promise<Keypair> {
    const keypair = Keypair.generate();

    const rentExemptionAmount = await connection.getMinimumBalanceForRentExemption(space);

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

fs.readFile(path.join(os.homedir(), ".config/solana/id.json"))
    .then(file => main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))));