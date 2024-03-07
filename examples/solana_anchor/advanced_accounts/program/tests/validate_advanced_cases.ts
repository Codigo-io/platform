import { AnchorProvider, setProvider, web3 } from "@coral-xyz/anchor";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import {
    deriveDynamicPdaPDA,
    derivePdaWithAllTypesPDA,
    deriveStaticPdaPDA,
    getState,
    initializeClient,
    instruction0OnlyMethodWithName,
    instruction10SendAndConfirm,
    instruction11SendAndConfirm,
    instruction12SendAndConfirm,
    instruction13SendAndConfirm,
    instruction14SendAndConfirm,
    instruction15SendAndConfirm,
    instruction16SendAndConfirm,
    instruction17SendAndConfirm,
    instruction18SendAndConfirm,
    instruction19SendAndConfirm,
    instruction1SendAndConfirm,
    instruction20SendAndConfirm,
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
    safeInstruction17SendAndConfirm,
    safeInstruction29SendAndConfirm,
    safeInstruction42SendAndConfirm,
} from "../app/program_client";

chai.use(chaiAsPromised);

const programId = new web3.PublicKey("AKe8PCZjyRuxUksNfFEZcpsLk9EKEnvoEEa7qRz88edg");
initializeClient(programId);

describe("Validate Advanced Cases Anchor Tests", () => {
    const provider = AnchorProvider.env();
    setProvider(provider);

    // Use the default system wallet
    const adminKeypair = (provider.wallet as NodeWallet).payer;

    const U8_DIN_SEED = 8;
    const U16_DIN_SEED = 16;
    const U32_DIN_SEED = 32;
    const U64_DIN_SEED = BigInt(64);
    const I8_DIN_SEED = -8;
    const I16_DIN_SEED = -16;
    const I32_DIN_SEED = -32;
    const I64_DIN_SEED = BigInt(-64);
    const STR_DIN_SEED = "string";
    const PK_DIN_SEED = web3.Keypair.generate().publicKey;

    const nonPdaKP = web3.Keypair.generate();
    const signer1KP = web3.Keypair.generate();
    const signer2KP = web3.Keypair.generate();
    const signer3KP = web3.Keypair.generate();

    let [pdaStaticAddr] = deriveStaticPdaPDA(programId);
    let [pdaStatic2Addr] = deriveStaticPdaPDA(programId);
    let [pdaDynAddr] = deriveDynamicPdaPDA(
        {
            dynamic: U8_DIN_SEED,
        },
        programId,
    );
    let [pdaDynVerSeedsAddr] = derivePdaWithAllTypesPDA(
        {
            u8Type: U8_DIN_SEED,
            u16Type: U16_DIN_SEED,
            u32Type: U32_DIN_SEED,
            u64Type: U64_DIN_SEED,
            i8Type: I8_DIN_SEED,
            i16Type: I16_DIN_SEED,
            i32Type: I32_DIN_SEED,
            i64Type: I64_DIN_SEED,
            stringType: STR_DIN_SEED,
            pubkeyType: PK_DIN_SEED,
        },
        programId,
    );

    before(async () => {
        // Request airdrop signer 2
        let txhash = await provider.connection.requestAirdrop(
            signer1KP.publicKey,
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

        // Request airdrop signer 3
        txhash = await provider.connection.requestAirdrop(signer2KP.publicKey, 1e9);

        // Get the latest blockhash from the validator
        blockHash = await provider.connection.getLatestBlockhashAndContext();

        // Await the tx confirmation
        await provider.connection.confirmTransaction({
            blockhash: blockHash.value.blockhash,
            lastValidBlockHeight: blockHash.value.lastValidBlockHeight,
            signature: txhash,
        });

        // Request airdrop signer 4
        txhash = await provider.connection.requestAirdrop(signer3KP.publicKey, 1e9);

        // Get the latest blockhash from the validator
        blockHash = await provider.connection.getLatestBlockhashAndContext();

        // Await the tx confirmation
        await provider.connection.confirmTransaction({
            blockhash: blockHash.value.blockhash,
            lastValidBlockHeight: blockHash.value.lastValidBlockHeight,
            signature: txhash,
        });
    });

    it("Can execute an Ix with no inputs", async () => {
        await expect(
            instruction0OnlyMethodWithName({ feePayer: adminKeypair.publicKey }),
        // @ts-ignore
        ).to.not.be.rejected;
    });

    it("Test init with Non-PDA account and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction9SendAndConfirm({
            input1: 9,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaKP,
            },
        });

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let nonPda = await getState(nonPdaKP.publicKey);

        expect(nonPda.field1).to.eq(9);

        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test init with PDA account that has one static seed, one field and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction10SendAndConfirm({
            input1: 10,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let pdaStatic = await getState(pdaStaticAddr);

        expect(pdaStatic.field1).to.eq(10);

        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test init with PDA account that has one static and dynamic seed, one field and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction11SendAndConfirm({
            input1: 11,
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let pdaDyn = await getState(pdaDynAddr);

        expect(pdaDyn.field1).to.eq(11);

        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Can init and mutate a PdaaccountVerifiesSeedsTypes with 4 signers, charging rent fees to feePayer", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction12SendAndConfirm({
            input1: 12,
            accountSeedU8Type: U8_DIN_SEED,
            accountSeedU16Type: U16_DIN_SEED,
            accountSeedU32Type: U32_DIN_SEED,
            accountSeedU64Type: U64_DIN_SEED,
            accountSeedI8Type: I8_DIN_SEED,
            accountSeedI16Type: I16_DIN_SEED,
            accountSeedI32Type: I32_DIN_SEED,
            accountSeedI64Type: I64_DIN_SEED,
            accountSeedStringType: STR_DIN_SEED,
            accountSeedPubkeyType: PK_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let pdaDynVerSeeds = await getState(pdaDynVerSeedsAddr);

        expect(pdaDynVerSeeds.field1).to.eq(12);

        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test close_uncheck with Non-PDA account and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction17SendAndConfirm({
            account: nonPdaKP.publicKey,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        // @ts-ignore
        await expect(getState(nonPdaKP.publicKey)).to.be.rejected;

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(adminBalanceAfter).to.gt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);

        // Rewind
        await instruction9SendAndConfirm({
            input1: 9,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaKP,
            },
        });
    });

    it("Test close with Non-PDA account and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await safeInstruction17SendAndConfirm({
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaKP,
            },
        });

        // @ts-ignore
        await expect(getState(nonPdaKP.publicKey)).to.be.rejected;

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(adminBalanceAfter).to.gt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test close with PDA account that has one static seed, one field and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction18SendAndConfirm({
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        // @ts-ignore
        await expect(getState(pdaStaticAddr)).to.be.rejected;

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(adminBalanceAfter).to.gt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test close with PDA account that has one static and dynamic seed, one field and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction19SendAndConfirm({
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        // @ts-ignore
        await expect(getState(pdaDynAddr)).to.be.rejected;

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(adminBalanceAfter).to.gt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test close with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction20SendAndConfirm({
            accountSeedU8Type: U8_DIN_SEED,
            accountSeedU16Type: U16_DIN_SEED,
            accountSeedU32Type: U32_DIN_SEED,
            accountSeedU64Type: U64_DIN_SEED,
            accountSeedI8Type: I8_DIN_SEED,
            accountSeedI16Type: I16_DIN_SEED,
            accountSeedI32Type: I32_DIN_SEED,
            accountSeedI64Type: I64_DIN_SEED,
            accountSeedStringType: STR_DIN_SEED,
            accountSeedPubkeyType: PK_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        // @ts-ignore
        await expect(getState(pdaDynVerSeedsAddr)).to.be.rejected;

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(adminBalanceAfter).to.gt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test init_if_needed with Non-PDA account and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction13SendAndConfirm({
            input1: 13,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaKP,
            },
        });

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let nonPda = await getState(nonPdaKP.publicKey);

        expect(nonPda.field1).to.eq(13);

        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test init_if_needed with PDA account that has one static seed, one field and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction14SendAndConfirm({
            input1: 14,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let pdaStatic = await getState(pdaStaticAddr);

        expect(pdaStatic.field1).to.eq(14);

        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test init_if_needed with PDA account that has one static and dynamic seed, one field and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction15SendAndConfirm({
            input1: 15,
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let pdaDyn = await getState(pdaDynAddr);

        expect(pdaDyn.field1).to.eq(15);

        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test init_if_needed with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction16SendAndConfirm({
            input1: 16,
            accountSeedU8Type: U8_DIN_SEED,
            accountSeedU16Type: U16_DIN_SEED,
            accountSeedU32Type: U32_DIN_SEED,
            accountSeedU64Type: U64_DIN_SEED,
            accountSeedI8Type: I8_DIN_SEED,
            accountSeedI16Type: I16_DIN_SEED,
            accountSeedI32Type: I32_DIN_SEED,
            accountSeedI64Type: I64_DIN_SEED,
            accountSeedStringType: STR_DIN_SEED,
            accountSeedPubkeyType: PK_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let pdaDynVerSeeds = await getState(pdaDynVerSeedsAddr);

        expect(pdaDynVerSeeds.field1).to.eq(16);

        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test mut with Non-PDA account and 4 signers", async () => {
        await instruction1SendAndConfirm({
            input1: 1,
            account: nonPdaKP.publicKey,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });
        let nonPda = await getState(nonPdaKP.publicKey);

        expect(nonPda.field1).to.eq(1);
    });

    it("Test mut with PDA account that has one static seed, one field and 4 signers", async () => {
        await instruction2SendAndConfirm({
            input1: 2,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let pdaStatic = await getState(pdaStaticAddr);

        expect(pdaStatic.field1).to.eq(2);
    });

    it("Test mut with PDA account that has one static and dynamic seed, one field and 4 signers", async () => {
        await instruction3SendAndConfirm({
            input1: 3,
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let pdaDyn = await getState(pdaDynAddr);

        expect(pdaDyn.field1).to.eq(3);
    });

    it("Test mut with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers", async () => {
        await instruction4SendAndConfirm({
            input1: 4,
            accountSeedU8Type: U8_DIN_SEED,
            accountSeedU16Type: U16_DIN_SEED,
            accountSeedU32Type: U32_DIN_SEED,
            accountSeedU64Type: U64_DIN_SEED,
            accountSeedI8Type: I8_DIN_SEED,
            accountSeedI16Type: I16_DIN_SEED,
            accountSeedI32Type: I32_DIN_SEED,
            accountSeedI64Type: I64_DIN_SEED,
            accountSeedStringType: STR_DIN_SEED,
            accountSeedPubkeyType: PK_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let pdaDynVerSeeds = await getState(pdaDynVerSeedsAddr);

        expect(pdaDynVerSeeds.field1).to.eq(4);
    });

    it("Test non-mut with Non-PDA account and 4 signers", async () => {
        // NOTICE: By 9/26/23, Anchor still does not throws an error when mutating a non mutable account, just fails silently.
        // https://github.com/coral-xyz/anchor/issues/326

        let nonPdaAccountBefore = await getState(nonPdaKP.publicKey);

        await instruction5SendAndConfirm({
            account: nonPdaKP.publicKey,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let nonPdaAccountAfter = await getState(nonPdaKP.publicKey);

        expect(nonPdaAccountBefore.field1.toString()).to.eq(
            nonPdaAccountAfter.field1.toString(),
        );
    });

    it("Test non-mut with PDA account that has one static seed, one field and 4 signers", async () => {
        // NOTICE: By 9/26/23, Anchor still does not throws an error when mutating a non mutable account, just fails silently.
        // https://github.com/coral-xyz/anchor/issues/326

        let pdaBefore = await getState(pdaStaticAddr);

        await instruction6SendAndConfirm({
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let pdaAfter = await getState(pdaStaticAddr);

        expect(pdaBefore.field1.toString()).to.eq(pdaAfter.field1.toString());
    });

    it("Test non-mut with PDA account that has one static and dynamic seed, one field and 4 signers", async () => {
        // NOTICE: By 9/26/23, Anchor still does not throws an error when mutating a non mutable account, just fails silently.
        // https://github.com/coral-xyz/anchor/issues/326

        let pdaBefore = await getState(pdaDynAddr);

        await instruction7SendAndConfirm({
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let pdaAfter = await getState(pdaDynAddr);

        expect(pdaBefore.field1.toString()).to.eq(pdaAfter.field1.toString());
    });

    it("Test non-mut with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers", async () => {
        // NOTICE: By 9/26/23, Anchor still does not throws an error when mutating a non mutable account, just fails silently.
        // https://github.com/coral-xyz/anchor/issues/326

        let pdaBefore = await getState(pdaDynVerSeedsAddr);

        await instruction8SendAndConfirm({
            accountSeedU8Type: U8_DIN_SEED,
            accountSeedU16Type: U16_DIN_SEED,
            accountSeedU32Type: U32_DIN_SEED,
            accountSeedU64Type: U64_DIN_SEED,
            accountSeedI8Type: I8_DIN_SEED,
            accountSeedI16Type: I16_DIN_SEED,
            accountSeedI32Type: I32_DIN_SEED,
            accountSeedI64Type: I64_DIN_SEED,
            accountSeedStringType: STR_DIN_SEED,
            accountSeedPubkeyType: PK_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let pdaAfter = await getState(pdaDynVerSeedsAddr);

        expect(pdaBefore.field1.toString()).to.eq(pdaAfter.field1.toString());
    });

    it("Test rent-receiver with Non-PDA account and 4 signer", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction29SendAndConfirm({
            account: nonPdaKP.publicKey,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        //@ts-ignore
        await expect(getState(nonPdaKP.publicKey)).to.be.rejected;

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(signer1BalanceAfter).to.gt(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);

        // Rewind
        await instruction13SendAndConfirm({
            input1: 13,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaKP,
            },
        });
    });

    it("Test rent-receiver with Non-PDA account and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await safeInstruction29SendAndConfirm({
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaKP,
            },
        });

        // @ts-ignore
        await expect(getState(nonPdaKP.publicKey)).to.be.rejected;

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(signer1BalanceAfter).to.gt(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test rent-receiver with PDA account that has one static seed, one field and 4 signers", async () => {
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction30SendAndConfirm({
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        // @ts-ignore
        await expect(getState(pdaStaticAddr)).to.be.rejected;

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.gt(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test rent-receiver with PDA account that has one static and dynamic seed, one field and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction31SendAndConfirm({
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        // @ts-ignore
        await expect(getState(pdaDynAddr)).to.be.rejected;

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.gt(signer3BalanceBefore);
    });

    it("Test rent-receiver with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers", async () => {
        let adminBalanceBefore = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction32SendAndConfirm({
            accountSeedU8Type: U8_DIN_SEED,
            accountSeedU16Type: U16_DIN_SEED,
            accountSeedU32Type: U32_DIN_SEED,
            accountSeedU64Type: U64_DIN_SEED,
            accountSeedI8Type: I8_DIN_SEED,
            accountSeedI16Type: I16_DIN_SEED,
            accountSeedI32Type: I32_DIN_SEED,
            accountSeedI64Type: I64_DIN_SEED,
            accountSeedStringType: STR_DIN_SEED,
            accountSeedPubkeyType: PK_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        // @ts-ignore
        await expect(getState(pdaDynVerSeedsAddr)).to.be.rejected;

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.gt(signer3BalanceBefore);
    });

    it("Test rent-payer using init with Non-PDA account and 4 signers", async () => {
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction21SendAndConfirm({
            input1: 21,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaKP,
            },
        });

        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let nonPda = await getState(nonPdaKP.publicKey);

        expect(nonPda.field1).to.eq(21);

        expect(signer1BalanceAfter).to.lt(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test rent-payer using init with PDA account that has one static seed, one field and 4 signers", async () => {
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction22SendAndConfirm({
            input1: 22,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let adminBalanceAfter = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let pdaStatic2 = await getState(pdaStatic2Addr);

        expect(pdaStatic2.field1).to.eq(22);

        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.lt(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Test rent-payer using init with PDA account that has one static and dynamic seed, one field and 4 signers", async () => {
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction23SendAndConfirm({
            input1: 23,
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let pdaDyn = await getState(pdaDynAddr);

        expect(pdaDyn.field1).to.eq(23);

        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.lt(signer3BalanceBefore);
    });

    it("Test rent-payer using init with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers", async () => {
        let signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction24SendAndConfirm({
            input1: 24,
            accountSeedU8Type: U8_DIN_SEED,
            accountSeedU16Type: U16_DIN_SEED,
            accountSeedU32Type: U32_DIN_SEED,
            accountSeedU64Type: U64_DIN_SEED,
            accountSeedI8Type: I8_DIN_SEED,
            accountSeedI16Type: I16_DIN_SEED,
            accountSeedI32Type: I32_DIN_SEED,
            accountSeedI64Type: I64_DIN_SEED,
            accountSeedStringType: STR_DIN_SEED,
            accountSeedPubkeyType: PK_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        let signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        let signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        let pdaDynVerSeeds = await getState(pdaDynVerSeedsAddr);

        expect(pdaDynVerSeeds.field1).to.eq(24);

        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.lt(signer3BalanceBefore);
    });

    it("Test rent-payer using init_if_needed with Non-PDA account and 4 signers", async () => {
        await instruction25SendAndConfirm({
            input1: 25,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaKP,
            },
        });

        let nonPda = await getState(nonPdaKP.publicKey);

        expect(nonPda.field1).to.eq(25);
    });

    it("Test rent-payer using init_if_needed with PDA account that has one static seed, one field and 4 signers", async () => {
        await instruction26SendAndConfirm({
            input1: 26,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let pdaStatic = await getState(pdaStaticAddr);

        expect(pdaStatic.field1).to.eq(26);
    });

    it("Test rent-payer using init_if_needed with PDA account that has one static and dynamic seed, one field and 4 signers", async () => {
        await instruction27SendAndConfirm({
            input1: 27,
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let pdaDyn = await getState(pdaDynAddr);

        expect(pdaDyn.field1).to.eq(27);
    });

    it("Test rent-payer using init_if_needed with PDA account that has one static seed, all the possible dynamic seeds data type, one field and 4 signers", async () => {
        await instruction28SendAndConfirm({
            input1: 28,
            accountSeedU8Type: U8_DIN_SEED,
            accountSeedU16Type: U16_DIN_SEED,
            accountSeedU32Type: U32_DIN_SEED,
            accountSeedU64Type: U64_DIN_SEED,
            accountSeedI8Type: I8_DIN_SEED,
            accountSeedI16Type: I16_DIN_SEED,
            accountSeedI32Type: I32_DIN_SEED,
            accountSeedI64Type: I64_DIN_SEED,
            accountSeedStringType: STR_DIN_SEED,
            accountSeedPubkeyType: PK_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        let pdaDynVerSeeds = await getState(pdaDynVerSeedsAddr);

        expect(pdaDynVerSeeds.field1).to.eq(28);
    });

    it("Test init with PDA account that maps seeds with signers and inputs", async () => {
        await instruction35SendAndConfirm({
            u8Type: U8_DIN_SEED,
            u16Type: U16_DIN_SEED,
            u32Type: U32_DIN_SEED,
            u64Type: U64_DIN_SEED,
            i8Type: I8_DIN_SEED,
            i16Type: I16_DIN_SEED,
            i32Type: I32_DIN_SEED,
            i64Type: I64_DIN_SEED,
            stringType: STR_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const [newPdaAddr] = derivePdaWithAllTypesPDA(
            {
                pubkeyType: signer1KP.publicKey,
                u8Type: U8_DIN_SEED,
                u16Type: U16_DIN_SEED,
                u32Type: U32_DIN_SEED,
                u64Type: U64_DIN_SEED,
                i8Type: I8_DIN_SEED,
                i16Type: I16_DIN_SEED,
                i32Type: I32_DIN_SEED,
                i64Type: I64_DIN_SEED,
                stringType: STR_DIN_SEED,
            },
            programId,
        );

        let newPda = await getState(newPdaAddr);

        expect(newPda.field1).to.eq(35);
    });

    it("Test non-mut with PDA account that maps seeds with signers and inputs", async () => {
        // Tries to set field1 to 33. Anchor fails silently.
        await instruction33SendAndConfirm({
            u8Type: U8_DIN_SEED,
            u16Type: U16_DIN_SEED,
            u32Type: U32_DIN_SEED,
            u64Type: U64_DIN_SEED,
            i8Type: I8_DIN_SEED,
            i16Type: I16_DIN_SEED,
            i32Type: I32_DIN_SEED,
            i64Type: I64_DIN_SEED,
            stringType: STR_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const [newPdaAddr] = derivePdaWithAllTypesPDA(
            {
                pubkeyType: signer1KP.publicKey,
                u8Type: U8_DIN_SEED,
                u16Type: U16_DIN_SEED,
                u32Type: U32_DIN_SEED,
                u64Type: U64_DIN_SEED,
                i8Type: I8_DIN_SEED,
                i16Type: I16_DIN_SEED,
                i32Type: I32_DIN_SEED,
                i64Type: I64_DIN_SEED,
                stringType: STR_DIN_SEED,
            },
            programId,
        );

        let newPda = await getState(newPdaAddr);

        expect(newPda.field1).to.eq(35);
    });

    it("Test mut with PDA account that maps seeds with signers and inputs", async () => {
        await instruction34SendAndConfirm({
            u8Type: U8_DIN_SEED,
            u16Type: U16_DIN_SEED,
            u32Type: U32_DIN_SEED,
            u64Type: U64_DIN_SEED,
            i8Type: I8_DIN_SEED,
            i16Type: I16_DIN_SEED,
            i32Type: I32_DIN_SEED,
            i64Type: I64_DIN_SEED,
            stringType: STR_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const [newPdaAddr] = derivePdaWithAllTypesPDA(
            {
                pubkeyType: signer1KP.publicKey,
                u8Type: U8_DIN_SEED,
                u16Type: U16_DIN_SEED,
                u32Type: U32_DIN_SEED,
                u64Type: U64_DIN_SEED,
                i8Type: I8_DIN_SEED,
                i16Type: I16_DIN_SEED,
                i32Type: I32_DIN_SEED,
                i64Type: I64_DIN_SEED,
                stringType: STR_DIN_SEED,
            },
            programId,
        );

        let newPda = await getState(newPdaAddr);

        expect(newPda.field1).to.eq(34);
    });

    it("Test init_if_needed with PDA account that maps seeds with signers and inputs", async () => {
        // init if needed
        await instruction36SendAndConfirm({
            u8Type: U8_DIN_SEED,
            u16Type: U16_DIN_SEED,
            u32Type: U32_DIN_SEED,
            u64Type: U64_DIN_SEED,
            i8Type: I8_DIN_SEED,
            i16Type: I16_DIN_SEED,
            i32Type: I32_DIN_SEED,
            i64Type: I64_DIN_SEED,
            stringType: STR_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const [newPdaAddr] = derivePdaWithAllTypesPDA(
            {
                pubkeyType: signer1KP.publicKey,
                u8Type: U8_DIN_SEED,
                u16Type: U16_DIN_SEED,
                u32Type: U32_DIN_SEED,
                u64Type: U64_DIN_SEED,
                i8Type: I8_DIN_SEED,
                i16Type: I16_DIN_SEED,
                i32Type: I32_DIN_SEED,
                i64Type: I64_DIN_SEED,
                stringType: STR_DIN_SEED,
            },
            programId,
        );

        let newPda = await getState(newPdaAddr);

        expect(newPda.field1).to.eq(36);
    });

    it("Test close with PDA account that maps seeds with signers and inputs", async () => {
        await instruction37SendAndConfirm({
            u8Type: U8_DIN_SEED,
            u16Type: U16_DIN_SEED,
            u32Type: U32_DIN_SEED,
            u64Type: U64_DIN_SEED,
            i8Type: I8_DIN_SEED,
            i16Type: I16_DIN_SEED,
            i32Type: I32_DIN_SEED,
            i64Type: I64_DIN_SEED,
            stringType: STR_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const [newPdaAddr] = derivePdaWithAllTypesPDA(
            {
                pubkeyType: signer1KP.publicKey,
                u8Type: U8_DIN_SEED,
                u16Type: U16_DIN_SEED,
                u32Type: U32_DIN_SEED,
                u64Type: U64_DIN_SEED,
                i8Type: I8_DIN_SEED,
                i16Type: I16_DIN_SEED,
                i32Type: I32_DIN_SEED,
                i64Type: I64_DIN_SEED,
                stringType: STR_DIN_SEED,
            },
            programId,
        );

        // @ts-ignore
        await expect(getState(newPdaAddr)).to.be.rejected;
    });

    it("Test non-mut Non-PDA account as a signer", async () => {
        await expect(
            instruction38SendAndConfirm({
                signers: {
                    feePayer: adminKeypair,
                    signer1: nonPdaKP,
                    signer2: signer2KP,
                    signer3: signer3KP,
                },
            }),
            // @ts-ignore
        ).to.not.be.rejected;
    });

    it("Test mut Non-PDA account as a signer", async () => {
        await expect(
            instruction39SendAndConfirm({
                signers: {
                    feePayer: adminKeypair,
                    signer1: nonPdaKP,
                    signer2: signer2KP,
                    signer3: signer3KP,
                },
            }),
            // @ts-ignore
        ).to.not.be.rejected;
    });

    it("Test close Non-PDA account as a signe", async () => {
        await expect(
            instruction42SendAndConfirm({
                signers: {
                    feePayer: adminKeypair,
                    signer1: nonPdaKP,
                    signer2: signer2KP,
                    signer3: signer3KP,
                },
            }),
            // @ts-ignore
        ).to.not.be.rejected;

        // Rewind
        await instruction25SendAndConfirm({
            input1: 25,
            signers: {
                feePayer: adminKeypair,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaKP,
            },
        });
    });

    it("Test close_uncheck Non-PDA account as a signer", async () => {
        await expect(
            safeInstruction42SendAndConfirm({
                signers: {
                    feePayer: adminKeypair,
                    signer1: nonPdaKP,
                    signer2: signer2KP,
                    signer3: signer3KP,
                },
            }),
            // @ts-ignore
        ).to.not.be.rejected;
    });

    it("Test init Non-PDA account as a signer", async () => {
        await expect(
            instruction40SendAndConfirm({
                signers: {
                    feePayer: adminKeypair,
                    signer1: nonPdaKP,
                    signer2: signer2KP,
                    signer3: signer3KP,
                },
            }),
            // @ts-ignore
        ).to.not.be.rejected;
    });

    it("Test init_if_needed Non-PDA account as a signer", async () => {
        await expect(
            instruction41SendAndConfirm({
                signers: {
                    feePayer: adminKeypair,
                    signer1: nonPdaKP,
                    signer2: signer2KP,
                    signer3: signer3KP,
                },
            }),
            // @ts-ignore
        ).to.not.be.rejected;
    });
});
