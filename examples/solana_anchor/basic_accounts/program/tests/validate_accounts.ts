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
    instruction2SendAndConfirm,
    instruction3SendAndConfirm,
    instruction4SendAndConfirm,
    instruction5SendAndConfirm,
    instruction6SendAndConfirm,
    instruction7SendAndConfirm,
    instruction8SendAndConfirm,
    instruction9SendAndConfirm,
    safeInstruction17SendAndConfirm,
} from "../app/program_client";

chai.use(chaiAsPromised);

const programId = new web3.PublicKey("5wtHhpJfLMC5Gx6aLvmPyzSLedjybJesXcaoT9BMxj5J");
initializeClient(programId);

describe("validate_accounts Anchor Tests e2e", () => {
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
    const STRING_DIN_SEED = "string";
    const PUBKEY_DIN_SEED = web3.Keypair.generate().publicKey;

    let nonPdaKP = web3.Keypair.generate();
    let pdaStaticSeedAddr: web3.PublicKey;
    let pdaStaticAndDynSeedAddr: web3.PublicKey;
    let pdaVerifiesSeedsAddr: web3.PublicKey;

    before(async () => {
        [pdaStaticSeedAddr] = deriveStaticPdaPDA(programId);
        [pdaStaticAndDynSeedAddr] = deriveDynamicPdaPDA(
            { dynamic: U8_DIN_SEED },
            programId,
        );
        [pdaVerifiesSeedsAddr] = derivePdaWithAllTypesPDA(
            {
                u8Type: U8_DIN_SEED,
                u16Type: U16_DIN_SEED,
                u32Type: U32_DIN_SEED,
                u64Type: U64_DIN_SEED,
                i8Type: I8_DIN_SEED,
                i16Type: I16_DIN_SEED,
                i32Type: I32_DIN_SEED,
                i64Type: I64_DIN_SEED,
                stringType: STRING_DIN_SEED,
                pubkeyType: PUBKEY_DIN_SEED,
            },
            programId,
        );
    });

    it("Test init using Non-PDA account that has one field", async () => {
        await instruction9SendAndConfirm({
            input1: 9,
            signers: {
                account: nonPdaKP,
                feePayer: adminKeypair,
            },
        });
        const state = await getState(nonPdaKP.publicKey);
        expect(state.field1).to.eq(9);
    });

    it("Test init using PDA account that has one static seed and one field", async () => {
        await instruction10SendAndConfirm({
            input1: 10,
            signers: {
                feePayer: adminKeypair,
            },
        });
        let state = await getState(pdaStaticSeedAddr);
        expect(state.field1).to.eq(10);
    });

    it("Test init using PDA account that has one static and dynamic seed, and one field", async () => {
        await instruction11SendAndConfirm({
            input1: 11,
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });
        let state = await getState(pdaStaticAndDynSeedAddr);
        expect(state.field1).to.eq(11);
    });

    it("Test init using PDA account that has all the possible data types for dynamic seeds", async () => {
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
            accountSeedStringType: STRING_DIN_SEED,
            accountSeedPubkeyType: PUBKEY_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });
        let state = await getState(pdaVerifiesSeedsAddr);
        expect(state.field1).to.eq(12);
    });

    it("Test mut using Non-PDA account that has one field", async () => {
        let state = await getState(nonPdaKP.publicKey);
        expect(state.field1).to.eq(9);

        await instruction1SendAndConfirm({
            input1: 1,
            account: nonPdaKP.publicKey,
            signers: {
                feePayer: adminKeypair,
            },
        });
        state = await getState(nonPdaKP.publicKey);
        expect(state.field1).to.eq(1);
    });

    it("Test mut using PDA account that has one static seed and one field", async () => {
        let state = await getState(pdaStaticSeedAddr);
        expect(state.field1).to.eq(10);

        await instruction2SendAndConfirm({
            input1: 2,
            signers: {
                feePayer: adminKeypair,
            },
        });
        state = await getState(pdaStaticSeedAddr);
        expect(state.field1).to.eq(2);
    });

    it("Test mut using PDA account that has one static and dynamic seed, and one field", async () => {
        let state = await getState(pdaStaticAndDynSeedAddr);
        expect(state.field1).to.eq(11);

        await instruction3SendAndConfirm({
            input1: 3,
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });
        state = await getState(pdaStaticAndDynSeedAddr);
        expect(state.field1).to.eq(3);
    });

    it("Test mut using PDA account that has all the possible data types for dynamic seeds", async () => {
        let state = await getState(pdaVerifiesSeedsAddr);
        expect(state.field1).to.eq(12);

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
            accountSeedStringType: STRING_DIN_SEED,
            accountSeedPubkeyType: PUBKEY_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });
        state = await getState(pdaVerifiesSeedsAddr);
        expect(state.field1).to.eq(4);
    });

    it("Test non-mut using Non-PDA account that has one field", async () => {
        await instruction5SendAndConfirm({
            account: nonPdaKP.publicKey,
            signers: {
                feePayer: adminKeypair,
            },
        });
        const state = await getState(nonPdaKP.publicKey);
        expect(state.field1).to.eq(1);
    });

    it("Test non-mut using PDA account that has one static seed and one field", async () => {
        await instruction6SendAndConfirm({
            signers: {
                feePayer: adminKeypair,
            },
        });
        let state = await getState(pdaStaticSeedAddr);
        expect(state.field1).to.eq(2);
    });

    it("Test non-mut using PDA account that has one static and dynamic seed, and one field", async () => {
        await instruction7SendAndConfirm({
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });
        const state = await getState(pdaStaticAndDynSeedAddr);
        expect(state.field1).to.eq(3);
    });

    it("Test non-mut using PDA account that has all the possible data types for dynamic seeds", async () => {
        await instruction8SendAndConfirm({
            accountSeedU8Type: U8_DIN_SEED,
            accountSeedU16Type: U16_DIN_SEED,
            accountSeedU32Type: U32_DIN_SEED,
            accountSeedU64Type: U64_DIN_SEED,
            accountSeedI8Type: I8_DIN_SEED,
            accountSeedI16Type: I16_DIN_SEED,
            accountSeedI32Type: I32_DIN_SEED,
            accountSeedI64Type: I64_DIN_SEED,
            accountSeedStringType: STRING_DIN_SEED,
            accountSeedPubkeyType: PUBKEY_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });
        const state = await getState(pdaVerifiesSeedsAddr);
        expect(state.field1).to.eq(4);
    });

    it("Test close_uncheck using Non-PDA account that has one field", async () => {
        const feePayerLamports = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        await instruction17SendAndConfirm({
            account: nonPdaKP.publicKey,
            signers: {
                feePayer: adminKeypair,
            },
        });

        // @ts-ignore
        await expect(getState(nonPdaKP.publicKey)).to.be.rejected;

        let currentFeePayerLamports = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        expect(currentFeePayerLamports).to.gt(feePayerLamports);

        // Recreate account
        await instruction9SendAndConfirm({
            input1: 9,
            signers: {
                account: nonPdaKP,
                feePayer: adminKeypair,
            },
        });
    });

    it("Test `close` using Non-PDA account that has one field", async () => {
        const feePayerLamports = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        await safeInstruction17SendAndConfirm({
            signers: {
                account: nonPdaKP,
                feePayer: adminKeypair,
            },
        });

        // @ts-ignore
        await expect(getState(nonPdaKP.publicKey)).to.be.rejected;

        let currentFeePayerLamports = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        expect(currentFeePayerLamports).to.gt(feePayerLamports);
    });

    it("Test close using PDA account that has one static seed and one field", async () => {
        const feePayerLamports = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        await instruction18SendAndConfirm({
            signers: {
                feePayer: adminKeypair,
            },
        });

        // @ts-ignore
        await expect(getState(pdaStaticSeedAddr)).to.be.rejected;

        let currentFeePayerLamports = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        expect(currentFeePayerLamports).to.gt(feePayerLamports);
    });

    it("Test close using PDA account that has one static and dynamic seed, and one field", async () => {
        const feePayerLamports = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        await instruction19SendAndConfirm({
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });

        // @ts-ignore
        await expect(getState(pdaStaticAndDynSeedAddr)).to.be.rejected;

        let currentFeePayerLamports = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        expect(currentFeePayerLamports).to.gt(feePayerLamports);
    });

    it("Test close using PDA account that has all the possible data types for dynamic seeds", async () => {
        const feePayerLamports = await provider.connection.getBalance(
            adminKeypair.publicKey,
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
            accountSeedStringType: STRING_DIN_SEED,
            accountSeedPubkeyType: PUBKEY_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });

        // @ts-ignore
        await expect(getState(pdaVerifiesSeedsAddr)).to.be.rejected;

        let currentFeePayerLamports = await provider.connection.getBalance(
            adminKeypair.publicKey,
        );
        expect(currentFeePayerLamports).to.gt(feePayerLamports);
    });

    it("Test init_if_needed using Non-PDA account that has one field", async () => {
        await instruction13SendAndConfirm({
            input1: 13,
            signers: {
                account: nonPdaKP,
                feePayer: adminKeypair,
            },
        });
        let state = await getState(nonPdaKP.publicKey);
        expect(state.field1).to.eq(13);

        await instruction13SendAndConfirm({
            input1: 26,
            signers: {
                account: nonPdaKP,
                feePayer: adminKeypair,
            },
        });
        state = await getState(nonPdaKP.publicKey);
        expect(state.field1).to.eq(26);
    });

    it("Test init_if_needed using PDA account that has one static seed and one field", async () => {
        await instruction14SendAndConfirm({
            input1: 14,
            signers: {
                feePayer: adminKeypair,
            },
        });
        let state = await getState(pdaStaticSeedAddr);
        expect(state.field1).to.eq(14);

        await instruction14SendAndConfirm({
            input1: 28,
            signers: {
                feePayer: adminKeypair,
            },
        });
        state = await getState(pdaStaticSeedAddr);
        expect(state.field1).to.eq(28);
    });

    it("Test init_if_needed using PDA account that has one static and dynamic seed, and one field", async () => {
        await instruction15SendAndConfirm({
            input1: 15,
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });
        let state = await getState(pdaStaticAndDynSeedAddr);
        expect(state.field1).to.eq(15);

        await instruction15SendAndConfirm({
            input1: 30,
            accountSeedDynamic: U8_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });
        state = await getState(pdaStaticAndDynSeedAddr);
        expect(state.field1).to.eq(30);
    });

    it("Inits_if_needed a PdaaccountVerifiesSeedsTypes", async () => {
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
            accountSeedStringType: STRING_DIN_SEED,
            accountSeedPubkeyType: PUBKEY_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });
        let state = await getState(pdaVerifiesSeedsAddr);
        expect(state.field1).to.eq(16);

        await instruction16SendAndConfirm({
            input1: 32,
            accountSeedU8Type: U8_DIN_SEED,
            accountSeedU16Type: U16_DIN_SEED,
            accountSeedU32Type: U32_DIN_SEED,
            accountSeedU64Type: U64_DIN_SEED,
            accountSeedI8Type: I8_DIN_SEED,
            accountSeedI16Type: I16_DIN_SEED,
            accountSeedI32Type: I32_DIN_SEED,
            accountSeedI64Type: I64_DIN_SEED,
            accountSeedStringType: STRING_DIN_SEED,
            accountSeedPubkeyType: PUBKEY_DIN_SEED,
            signers: {
                feePayer: adminKeypair,
            },
        });
        state = await getState(pdaVerifiesSeedsAddr);
        expect(state.field1).to.eq(32);
    });
});
