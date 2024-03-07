import {AnchorProvider, setProvider, web3} from "@coral-xyz/anchor";
import chai from "chai";
import {expect} from "chai";
import chaiAsPromised from "chai-as-promised";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import {
    deriveArrayPDA,
    initAccountInfoOnClientSendAndConfirm,
    initAccountInfoOnClientWithCustomOwnerSendAndConfirm,
    initAccountInfoOnContractSendAndConfirm,
    initializeClient, initOnClientSendAndConfirm, initOnClientWithCustomOwnerSendAndConfirm,
    initOnContractSendAndConfirm,
    initPdaOnContractSendAndConfirm, initTwoBigAccountOnClientSendAndConfirm
} from "../app/program_client";

chai.use(chaiAsPromised);

const programId = new web3.PublicKey("6ZgubyS8iKZFJYX2LtoshNgp9jMazoLepyfKoM2YPeQH");
initializeClient(programId);

describe("validate_big_account_for_anchor tests", () => {
    const provider = AnchorProvider.env();
    setProvider(provider);

    const feePayer = (provider.wallet as NodeWallet).payer;

    const MAX_SIZE_INIT_ON_CONTRACT = 10240
    const MAX_SIZE_INIT_ON_CLIENT = 10485760

    it("Create a 10Kb PDA account WITH layout on CONTRACT", async () => {
        await initPdaOnContractSendAndConfirm({
            accountSeedIndex: 1,
            signers: {
                feePayer
            }
        });
        const [pubkey] = deriveArrayPDA({index: 1,}, programId);
        const tenKbPda = await provider.connection.getAccountInfo(pubkey);
        expect(tenKbPda.data.length).to.equal(MAX_SIZE_INIT_ON_CONTRACT);
    });

    it("Create a 10Kb Non-PDA account WITH layout on CONTRACT", async () => {
        const keypair = web3.Keypair.generate();
        await initOnContractSendAndConfirm({
            signers: {
                feePayer,
                account: keypair
            }
        });
        const account = await provider.connection.getAccountInfo(keypair.publicKey);
        expect(account.data.length).to.equal(MAX_SIZE_INIT_ON_CONTRACT);
    });

    it("Create a 10MB Non-PDA account WITH layout on CLIENT", async () => {
        const keypair = web3.Keypair.generate();
        await initOnClientSendAndConfirm({
            signers: {
                feePayer,
                account: keypair,
            }
        });
        const account = await provider.connection.getAccountInfo(keypair.publicKey);
        expect(account.data.length).to.equal(MAX_SIZE_INIT_ON_CLIENT);
    });

    // Anchor generated code panics for this use case, we need to fix it
    // it("Create a 10MB Non-PDA account WITH layout on CLIENT with custom owner", async () => {
    //     const keypair = web3.Keypair.generate();
    //     await initOnClientWithCustomOwnerSendAndConfirm({
    //         signers: {
    //             feePayer,
    //             account: keypair,
    //         }
    //     });
    //     const account = await provider.connection.getAccountInfo(keypair.publicKey);
    //     expect(account.data.length).to.equal(MAX_SIZE_INIT_ON_CLIENT);
    // });

    it("Create a 10MB Non-PDA account WITHOUT layout on CLIENT", async () => {
        const keypair = web3.Keypair.generate();
        await initAccountInfoOnClientSendAndConfirm({
            signers: {
                feePayer,
                account: keypair,
            }
        });
        const account = await provider.connection.getAccountInfo(keypair.publicKey);
        expect(account.data.length).to.equal(MAX_SIZE_INIT_ON_CLIENT);
    });

    // Anchor generated code panics for this use case, we need to fix it
    // it("Create a 10MB Non-PDA account WITHOUT layout on CLIENT with custom owner", async () => {
    //     const keypair = web3.Keypair.generate();
    //     await initAccountInfoOnClientWithCustomOwnerSendAndConfirm({
    //         signers: {
    //             feePayer,
    //             account: keypair,
    //         }
    //     });
    //     const account = await provider.connection.getAccountInfo(keypair.publicKey);
    //     expect(account.data.length).to.equal(MAX_SIZE_INIT_ON_CLIENT);
    // });

    it("Create a 10Kb Non-PDA account WITHOUT layout on CONTRACT", async () => {
        const keypair = web3.Keypair.generate();
        await initAccountInfoOnContractSendAndConfirm({
            signers: {
                feePayer,
                account: keypair,
            }
        });
        const account = await provider.connection.getAccountInfo(keypair.publicKey);
        expect(account.data.length).to.equal(MAX_SIZE_INIT_ON_CONTRACT);
    });

    it("Create a two 10MB Non-PDA account WITH and WITHOUT layout on CLIENT", async () => {
        const keypair = web3.Keypair.generate();
        const keypair2 = web3.Keypair.generate();
        await initTwoBigAccountOnClientSendAndConfirm({
            signers: {
                feePayer,
                account: keypair,
                accountInfo: keypair2,
            }
        });
        const account = await provider.connection.getAccountInfo(keypair.publicKey);
        expect(account.data.length).to.equal(MAX_SIZE_INIT_ON_CLIENT);

        const account2 = await provider.connection.getAccountInfo(keypair2.publicKey);
        expect(account2.data.length).to.equal(MAX_SIZE_INIT_ON_CLIENT);
    });
});
