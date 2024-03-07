import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import {
    approveLoanSendAndConfirm,
    createBrokerSendAndConfirm,
    deriveBrokerPDA,
    deriveLoanPDA,
    getBroker,
    getLoan,
    initializeClient,
    payLoanSendAndConfirm,
    requestLoanSendAndConfirm,
} from "./index";

async function main(feePayer: Keypair) {
    const connection = new Connection("http://127.0.0.1:8899", {
        commitment: "confirmed"
    });

    // TODO: Specify the smart contract Program Id we saved from when we deploy the smart contract
    const progId = new PublicKey("DuinexyB5LLgp89t9enYFHUyWhM4bAkTiz5e9rdydwzM");

    initializeClient(progId, connection);

    /**
    * Create wallets to represent the broker creator and 2 clients
    */
    const delegate = Keypair.generate();
    const client1 = Keypair.generate();
    const client2 = Keypair.generate();

    const rent = await connection.getMinimumBalanceForRentExemption(0);
    const capital = 5 * LAMPORTS_PER_SOL;
    const interest = 5 * LAMPORTS_PER_SOL;

    await sendAndConfirmTransaction(
        connection,
        new Transaction()
            .add(
                SystemProgram.createAccount({
                    fromPubkey: feePayer.publicKey,
                    newAccountPubkey: delegate.publicKey,
                    space: 0,
                    lamports: rent + capital,
                    programId: progId,
                })
            )
            .add(
                SystemProgram.createAccount({
                    fromPubkey: feePayer.publicKey,
                    newAccountPubkey: client1.publicKey,
                    space: 0,
                    lamports: rent + interest,
                    programId: progId,
                })
            )
            .add(
                SystemProgram.createAccount({
                    fromPubkey: feePayer.publicKey,
                    newAccountPubkey: client2.publicKey,
                    space: 0,
                    lamports: rent + interest,
                    programId: progId,
                })
            ),
        [feePayer, delegate, client1, client2]
    );

    const [brokerPK] = deriveBrokerPDA(progId);
    let broker = await getBroker(brokerPK)

    // Broken can only exists once per contract
    // so let's check if we haven't created it
    if (!broker) {
        await createBrokerSendAndConfirm({
            amount: BigInt(capital),
            fee: 10,
            signers: {
                feePayer,
                delegate,
            }
        });
        broker = await getBroker(brokerPK)
    } 

    // Log current state of the broker
    console.log("+=====+BROKER STATE+=====+")
    console.info(broker);

    // Request loan 1 by client 1
    const [client1Loan1] = deriveLoanPDA({
        client: client1.publicKey,
        index: 1,
    }, progId)
    await requestLoanSendAndConfirm({
        amount: BigInt(2.5 * LAMPORTS_PER_SOL),
        kycUrl: "https://example.com",
        loanSeedIndex: 1,
        signers: {
            feePayer,
            client: client1,
        }
    });
    console.log("+=====+CLIENT ONE LOAN ONE STATE+=====+")
    let client1Loan1State = await getLoan(client1Loan1);
    console.info(client1Loan1State);

    // Aprove loan 1 by client 1
    await approveLoanSendAndConfirm({
        client: client1.publicKey,
        loanSeedIndex: 1,
        signers: {
            feePayer,
            delegate,
        }
    });
    console.log("+=====+CLIENT ONE LOAN ONE STATE+=====+")
    client1Loan1State = await getLoan(client1Loan1);
    console.info(client1Loan1State);

    console.log("+=====+BROKER STATE+=====+")
    broker = await getBroker(brokerPK)
    console.info(broker);

    // Request loan 2 by client 1
    const [client1Loan2] = deriveLoanPDA({
        client: client1.publicKey,
        index: 2,
    }, progId)
    await requestLoanSendAndConfirm({
        amount: BigInt(2 * LAMPORTS_PER_SOL),
        kycUrl: "https://example.com",
        loanSeedIndex: 2,
        signers: {
            feePayer,
            client: client1,
        }
    });
    console.log("+=====+CLIENT ONE LOAN TWO STATE+=====+")
    let client1Loan2State = await getLoan(client1Loan2);
    console.info(client1Loan2State);

    // Aprove loan 2 by client 1
    await approveLoanSendAndConfirm({
        client: client1.publicKey,
        loanSeedIndex: 2,
        signers: {
            feePayer,
            delegate,
        }
    });
    console.log("+=====+CLIENT ONE LOAN TWO STATE+=====+")
    client1Loan2State = await getLoan(client1Loan2);
    console.info(client1Loan2State);

    console.log("+=====+BROKER STATE+=====+")
    broker = await getBroker(brokerPK)
    console.info(broker);

    // Request loan 1 by client 2
    // This request must fail because broker doesn't have capital
    try {
        const [client2Loan1] = deriveLoanPDA({
            client: client2.publicKey,
            index: 1,
        }, progId)
        await requestLoanSendAndConfirm({
            amount: BigInt(2 * LAMPORTS_PER_SOL),
            kycUrl: "https://example.com",
            loanSeedIndex: 1,
            signers: {
                feePayer,
                client: client2,
            }
        });
        let client2Loan1State = await getLoan(client2Loan1);
        console.info(client2Loan1State);
    } catch (e) {
        console.info(`Broker doesn't have capital to lend: ${e}`)
    }

    // Pay the full amount of loan 1 by client 1
    await payLoanSendAndConfirm({
        amount: BigInt(2.5 * LAMPORTS_PER_SOL),
        loanSeedIndex: 1,
        signers: {
            feePayer,
            client: client1,
        }
    });
    console.log("+=====+CLIENT ONE LOAN ONE STATE+=====+")
    client1Loan1State = await getLoan(client1Loan1);
    console.info(client1Loan1State);

    console.log("+=====+BROKER STATE+=====+")
    broker = await getBroker(brokerPK)
    console.info(broker);

    // Pay the full amount of loan 2 by client 1
    await payLoanSendAndConfirm({
        amount: BigInt(2 * LAMPORTS_PER_SOL),
        loanSeedIndex: 2,
        signers: {
            feePayer,
            client: client1,
        }
    });
    console.log("+=====+CLIENT ONE LOAN TWO STATE+=====+")
    client1Loan2State = await getLoan(client1Loan2);
    console.info(client1Loan2State);

    console.log("+=====+BROKER STATE+=====+")
    broker = await getBroker(brokerPK)
    console.info(broker);

    // Request loan 1 by client 2
    const [client2Loan1] = deriveLoanPDA({
        client: client2.publicKey,
        index: 1,
    }, progId)
    await requestLoanSendAndConfirm({
        amount: BigInt(2 * LAMPORTS_PER_SOL),
        kycUrl: "https://example.com",
        loanSeedIndex: 1,
        signers: {
            feePayer,
            client: client2,
        }
    });
    console.log("+=====+CLIENT TWO LOAN ONE STATE+=====+")
    let client2Loan1State = await getLoan(client2Loan1);
    console.info(client2Loan1State);

    console.log("+=====+BROKER STATE+=====+")
    broker = await getBroker(brokerPK)
    console.info(broker);
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json"))
    .then(file => main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))));