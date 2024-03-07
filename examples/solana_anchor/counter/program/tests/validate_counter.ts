import { AnchorProvider, setProvider, web3 } from "@coral-xyz/anchor";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import {
    closeCounterSendAndConfirm,
    deriveCounterPDA,
    getCounter,
    incrementSendAndConfirm,
    initCounterSendAndConfirm,
    initializeClient,
    initIfNeededAndIncrementSendAndConfirm,
} from "../app/program_client";

chai.use(chaiAsPromised);

const programId = new web3.PublicKey("CLXWjLcyiRMLucSyugrFP1dhSghDaq5qGn1JrceJjynV");
initializeClient(programId);

describe("Validate Counter Anchor Tests", () => {
    const provider = AnchorProvider.env();
    setProvider(provider);

    // Use the default system wallet
    const adminKeypair = (provider.wallet as NodeWallet).payer;

    let rentPayer;

    before(async () => {
        rentPayer = web3.Keypair.generate();

        // Request airdrop
        let txhash = await provider.connection.requestAirdrop(
            rentPayer.publicKey,
            1e9,
        );

        // Get the latest blockhash from the validator
        let blockHash = await provider.connection.getLatestBlockhashAndContext();

        // Await the tx confirmation
        await provider.connection.confirmTransaction({
            blockhash: blockHash.value.blockhash,
            lastValidBlockHeight: blockHash.value.lastValidBlockHeight,
            signature: txhash,
        });
    });

    it("Initializes a counter", async () => {
        const [counterAddress] = deriveCounterPDA(
            { user: adminKeypair.publicKey },
            programId,
        );

        // @ts-ignore
        await expect(getCounter(counterAddress)).to.be.rejected;

        await initCounterSendAndConfirm({
            signers: {
                feePayer: adminKeypair,
            },
        });

        // @ts-ignore
        await expect(getCounter(counterAddress)).to.not.be.rejected;
    });

    it("increments a counter", async () => {
        await incrementSendAndConfirm({
            signers: {
                feePayer: adminKeypair,
            },
        });
        let [counterAddress] = deriveCounterPDA(
            { user: adminKeypair.publicKey },
            programId,
        );

        const counter = await getCounter(counterAddress);
        expect(counter.count.toString()).to.eq("1");
    });

    it("Inits if needed and increments a counter", async () => {
        const rentPayerBefore = await provider.connection.getBalance(
            rentPayer.publicKey,
        );

        await initIfNeededAndIncrementSendAndConfirm({
            signers: {
                feePayer: adminKeypair,
                rentPayer,
            },
        });
        let rentPayerAfter = await provider.connection.getBalance(
            rentPayer.publicKey,
        );

        const [counterAddress] = deriveCounterPDA(
            { user: rentPayer.publicKey },
            programId,
        );
        const counter = await getCounter(counterAddress);

        expect(counter.count.toString()).to.eq("1");
        expect(rentPayerBefore).to.gt(rentPayerAfter);
    });

    it("Closes an account and send lamports to specified rent-receiver", async () => {
        const rentPayerBefore = await provider.connection.getBalance(
            rentPayer.publicKey,
        );

        await closeCounterSendAndConfirm({
            signers: {
                feePayer: adminKeypair,
                rentReceiver: rentPayer,
            },
        });
        let rentPayerAfter = await provider.connection.getBalance(
            rentPayer.publicKey,
        );

        let [counterAddress] = deriveCounterPDA(
            { user: rentPayer.publicKey },
            programId,
        );

        // @ts-ignore
        await expect(getCounter(counterAddress)).to.be.rejected;

        expect(rentPayerBefore).to.lt(rentPayerAfter);
    });
});
