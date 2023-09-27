import {decrementSendAndConfirm, getGreetingAccount, incrementSendAndConfirm, initializeClient} from "./index";
import {Connection, Keypair, PublicKey} from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";

async function main(feePayer: Keypair) {
    const progId = new PublicKey("k3m9uu48yeLWPcThMz8jA1JuwCMUiRMX6VjriPeDuw8");

    // Create a new Solana connection
    const connection = new Connection("http://127.0.0.1:8899", {
        commitment: "confirmed"
    });

    initializeClient(progId, connection);

    // 0. Create keypair for the Greeting account
    const greetingAccount = Keypair.generate();

    // 1. Increment the counter by 1
    await incrementSendAndConfirm({
        signers: {
            feePayer,
            greetingAccount
        }
    });
    let account = await getGreetingAccount(greetingAccount.publicKey);
    console.info(account);

    // 2. Decrement the count by 1
    await decrementSendAndConfirm({
        signers: {
            feePayer,
            greetingAccount
        }
    });
    account = await getGreetingAccount(greetingAccount.publicKey);
    console.info(account);
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json"))
    .then(file => main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))));