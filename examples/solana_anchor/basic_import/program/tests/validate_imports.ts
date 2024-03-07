import { AnchorProvider, setProvider, web3 } from "@coral-xyz/anchor";
import chai from "chai";
import { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewalconst";
import {
    initializeClient,
    instruction0SendAndConfirm,
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
    instruction43SendAndConfirm,
    instruction44SendAndConfirm,
    instruction45SendAndConfirm,
    instruction46SendAndConfirm,
    instruction47SendAndConfirm,
    instruction48SendAndConfirm,
    instruction49SendAndConfirm,
    instruction4SendAndConfirm,
    instruction50SendAndConfirm,
    instruction51SendAndConfirm,
    instruction52SendAndConfirm,
    instruction53SendAndConfirm,
    instruction54SendAndConfirm,
    instruction55SendAndConfirm,
    instruction56SendAndConfirm,
    instruction57SendAndConfirm,
    instruction58SendAndConfirm,
    instruction59SendAndConfirm,
    instruction5SendAndConfirm,
    instruction60SendAndConfirm,
    instruction61SendAndConfirm,
    instruction62SendAndConfirm,
    instruction63SendAndConfirm,
    instruction64SendAndConfirm,
    instruction6SendAndConfirm,
    instruction7SendAndConfirm,
    instruction8SendAndConfirm,
    instruction9SendAndConfirm,
    ValidateAccountsGetters,
    ValidateAccountsPDAs,
    ValidateAdvancedCasesGetters,
    ValidateAdvancedCasesPDAs,
    ValidateDataTypesGetters,
    ValidateDataTypesPDAs,
} from "../app/program_client";

chai.use(chaiAsPromised);

const programId = new web3.PublicKey(
    "2Eebu25YAYPPru4jo2oxS6g5rR79WFenff6Ejf7yoMnG",
);
initializeClient(programId);

const programIdValidateAccounts = new web3.PublicKey(
    "5wtHhpJfLMC5Gx6aLvmPyzSLedjybJesXcaoT9BMxj5J",
);
const programIdValidateAdvancedCases = new web3.PublicKey(
    "AKe8PCZjyRuxUksNfFEZcpsLk9EKEnvoEEa7qRz88edg",
);
const programIdValidateDataTypes = new web3.PublicKey(
    "Djj7zosfYLKGvcGXmxsnDnarLNXxiEPaZ5LP65JohWFS",
);

describe("Anchor Validate Imports Tests", () => {
    const provider = AnchorProvider.env();
    setProvider(provider);

    // Use the default system walconst
    const feePayer = (provider.wallet as NodeWallet).payer;

    const U8_VAL = 8;
    const U16_VAL = 16;
    const U32_VAL = 32;
    const U64_VAL = BigInt(64);
    const U128_VAL = BigInt(128);
    const I8_VAL = -8;
    const I16_VAL = -16;
    const I32_VAL = -32;
    const I64_VAL = BigInt(-64);
    const I128_VAL = BigInt(-128);
    const STR_VAL = "string";
    const BOOL_VAL = true;
    const F32_VAL = 3.14;
    const F64_VAL = 9.99;
    const PK_VAL = new web3.PublicKey(
        "DS2tt4BX7YwCw7yrDNwbAdnYrxjeCPeGJbHmZEYC8RTb",
    );
    const OPT_U8_VAL = 8;
    const OPT_U16_VAL = 16;
    const OPT_U32_VAL = 32;
    const OPT_U64_VAL = BigInt(64);
    const OPT_U128_VAL = BigInt(128);
    const OPT_I8_VAL = -8;
    const OPT_I16_VAL = -16;
    const OPT_I32_VAL = -32;
    const OPT_I64_VAL = BigInt(-64);
    const OPT_I128_VAL = BigInt(-128);
    const OPT_STR_VAL = "string";
    const OPT_BOOL_VAL = true;
    const OPT_F32_VAL = 3.14;
    const OPT_F64_VAL = 9.99;
    const OPT_PK_VAL = new web3.PublicKey(
        "DS2tt4BX7YwCw7yrDNwbAdnYrxjeCPeGJbHmZEYC8RTb",
    );
    const VEC_U8_VAL = Buffer.from([8, 8]);
    const VEC_U16_VAL = [16, 16];
    const VEC_U32_VAL = [32, 32];
    const VEC_U64_VAL = [BigInt(64), BigInt(64)];
    const VEC_U128_VAL = [BigInt(128), BigInt(128)];
    const VEC_I8_VAL = [-8, -8];
    const VEC_I16_VAL = [-16, -16];
    const VEC_I32_VAL = [-32, -32];
    const VEC_I64_VAL = [BigInt(-64), BigInt(-64)];
    const VEC_I128_VAL = [BigInt(-128), BigInt(-128)];
    const VEC_BOOL_VAL = [true, true];
    const VEC_F32_VAL = [3.14, 3.14];
    const VEC_F64_VAL = [9.99, 9.99];
    const VEC_PK_VAL = [
        new web3.PublicKey("DS2tt4BX7YwCw7yrDNwbAdnYrxjeCPeGJbHmZEYC8RTb"),
        new web3.PublicKey("DS2tt4BX7YwCw7yrDNwbAdnYrxjeCPeGJbHmZEYC8RTb"),
    ];

    const ACC_INFO = web3.Keypair.generate();
    const nonPdaKP = web3.Keypair.generate();
    const nonPdaForAdvancedCasesKP = web3.Keypair.generate();
    const nonPdaForDataTypesKP = web3.Keypair.generate();

    let valAccPdaStatAddr: web3.PublicKey;
    let valAccPdaDynAddr: web3.PublicKey;
    let valAccPdaVerSeedsAddr: web3.PublicKey;

    let valAdvPdaStatAddr: web3.PublicKey;
    let valAdvPdaStat2Addr: web3.PublicKey;
    let valAdvPdaDynAddr: web3.PublicKey;
    let valAdvPdaVerSeedsAddr: web3.PublicKey;

    const signer1KP = web3.Keypair.generate();
    const signer2KP = web3.Keypair.generate();
    const signer3KP = web3.Keypair.generate();

    before(async () => {
        [valAccPdaStatAddr] = ValidateAccountsPDAs.deriveStaticPdaPDA(
            programIdValidateAccounts,
        );
        [valAccPdaDynAddr] = ValidateAccountsPDAs.deriveDynamicPdaPDA(
            { dynamic: U8_VAL },
            programIdValidateAccounts,
        );
        [valAccPdaVerSeedsAddr] = ValidateAccountsPDAs.derivePdaWithAllTypesPDA(
            {
                u8Type: U8_VAL,
                u16Type: U16_VAL,
                u32Type: U32_VAL,
                u64Type: U64_VAL,
                i8Type: I8_VAL,
                i16Type: I16_VAL,
                i32Type: I32_VAL,
                i64Type: I64_VAL,
                stringType: STR_VAL,
                pubkeyType: PK_VAL,
            },
            programIdValidateAccounts,
        );

        [valAdvPdaStatAddr] = ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(
            programIdValidateAdvancedCases,
        );
        [valAdvPdaStat2Addr] = ValidateAdvancedCasesPDAs.deriveStaticPdaPDA(
            programIdValidateAdvancedCases,
        );
        [valAdvPdaDynAddr] = ValidateAdvancedCasesPDAs.deriveDynamicPdaPDA(
            { dynamic: U8_VAL },
            programIdValidateAdvancedCases,
        );
        [valAdvPdaVerSeedsAddr] =
            ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
                {
                    u8Type: U8_VAL,
                    u16Type: U16_VAL,
                    u32Type: U32_VAL,
                    u64Type: U64_VAL,
                    i8Type: I8_VAL,
                    i16Type: I16_VAL,
                    i32Type: I32_VAL,
                    i64Type: I64_VAL,
                    stringType: STR_VAL,
                    pubkeyType: PK_VAL,
                },
                programIdValidateAdvancedCases,
            );

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

    it("Reference validate_accounts_ref.instruction9, where caller doesn't have inputs", async () => {
        await instruction9SendAndConfirm({
            signers: {
                feePayer,
                account: nonPdaKP,
            },
        });
        const account = await ValidateAccountsGetters.getState(nonPdaKP.publicKey);
        expect(account.field1).to.eq(9);
    });

    it("Reference validate_accounts_ref.instruction10, where caller doesn't have inputs", async () => {
        await instruction10SendAndConfirm({
            signers: {
                feePayer,
            },
        });
        const account = await ValidateAccountsGetters.getState(valAccPdaStatAddr);
        expect(account.field1).to.eq(10);
    });

    it("Reference validate_accounts_ref.instruction11, where caller doesn't have inputs", async () => {
        await instruction11SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
            },
        });
        const account = await ValidateAccountsGetters.getState(valAccPdaDynAddr);
        expect(account.field1).to.eq(11);
    });

    it("Reference validate_accounts_ref.instruction12, where caller doesn't have inputs", async () => {
        await instruction12SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
            },
        });
        const account = await ValidateAccountsGetters.getState(
            valAccPdaVerSeedsAddr,
        );
        expect(account.field1).to.eq(12);
    });

    it("Reference validate_accounts_ref.instruction1, where caller doesn't have inputs", async () => {
        let account = await ValidateAccountsGetters.getState(nonPdaKP.publicKey);
        expect(account.field1).to.eq(9);

        await instruction1SendAndConfirm({
            account: nonPdaKP.publicKey,
            signers: {
                feePayer,
            },
        });
        account = await ValidateAccountsGetters.getState(nonPdaKP.publicKey);
        expect(account.field1).to.eq(1);
    });

    it("Reference validate_accounts_ref.instruction2, where caller doesn't have inputs", async () => {
        let account = await ValidateAccountsGetters.getState(valAccPdaStatAddr);
        expect(account.field1).to.eq(10);

        await instruction2SendAndConfirm({ signers: { feePayer } });
        account = await ValidateAccountsGetters.getState(valAccPdaStatAddr);
        expect(account.field1).to.eq(2);
    });

    it("Reference validate_accounts_ref.instruction3, where caller doesn't have inputs", async () => {
        let account = await ValidateAccountsGetters.getState(valAccPdaDynAddr);
        expect(account.field1).to.eq(11);

        await instruction3SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
            },
        });
        account = await ValidateAccountsGetters.getState(valAccPdaDynAddr);
        expect(account.field1).to.eq(3);
    });

    it("Reference validate_accounts_ref.instruction4, where caller doesn't have inputs", async () => {
        let account = await ValidateAccountsGetters.getState(valAccPdaVerSeedsAddr);
        expect(account.field1).to.eq(12);

        await instruction4SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
            },
        });
        account = await ValidateAccountsGetters.getState(valAccPdaVerSeedsAddr);
        expect(account.field1).to.eq(4);
    });

    it("Reference validate_accounts_ref.instruction5, where caller doesn't have inputs", async () => {
        await instruction5SendAndConfirm({
            account: nonPdaKP.publicKey,
            signers: {
                feePayer,
            },
        });
        const account = await ValidateAccountsGetters.getState(nonPdaKP.publicKey);
        expect(account.field1).to.eq(1);
    });

    it("Reference validate_accounts_ref.instruction6, where caller doesn't have inputs", async () => {
        await instruction6SendAndConfirm({ signers: { feePayer } });
        const account = await ValidateAccountsGetters.getState(valAccPdaStatAddr);
        expect(account.field1).to.eq(2);
    });

    it("Reference validate_accounts_ref.instruction7, where caller doesn't have inputs", async () => {
        await instruction7SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
            },
        });
        const account = await ValidateAccountsGetters.getState(valAccPdaDynAddr);
        expect(account.field1).to.eq(3);
    });

    it("Reference validate_accounts_ref.instruction8, where caller doesn't have inputs", async () => {
        await instruction8SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
            },
        });
        const state = await ValidateAccountsGetters.getState(valAccPdaVerSeedsAddr);
        expect(state.field1).to.eq(4);
    });

    it("Reference validate_accounts_ref.instruction17, where caller doesn't have input", async () => {
        const signerBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );

        await instruction17SendAndConfirm({
            account: nonPdaKP.publicKey,
            signers: {
                feePayer,
            },
        });

        await expect(ValidateAccountsGetters.getState(nonPdaKP.publicKey)).to.be
            // @ts-ignore
            .rejected;

        const signerAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        expect(signerAfter).to.gt(signerBefore);
    });

    it("Reference validate_accounts_ref.instruction18, where caller doesn't have inputs", async () => {
        const signerBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );

        await instruction18SendAndConfirm({ signers: { feePayer } });

        await expect(ValidateAccountsGetters.getState(valAccPdaStatAddr)).to.be
            // @ts-ignore
            .rejected;

        const signerAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        expect(signerAfter).to.gt(signerBefore);
    });

    it("Reference validate_accounts_ref.instruction19, where caller doesn't have inputs", async () => {
        const signerBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );

        await instruction19SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
            },
        });

        await expect(ValidateAccountsGetters.getState(valAccPdaDynAddr)).to.be
            // @ts-ignore
            .rejected;

        const signerAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        expect(signerAfter).to.gt(signerBefore);
    });

    it("Reference validate_accounts_ref.instruction20, where caller doesn't have inputs", async () => {
        const signerBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );

        await instruction20SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
            },
        });

        await expect(ValidateAccountsGetters.getState(valAccPdaVerSeedsAddr)).to.be
            // @ts-ignore
            .rejected;

        const signerAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        expect(signerAfter).to.gt(signerBefore);
    });

    it("Reference validate_accounts_ref.instruction13, where caller doesn't have inputs", async () => {
        await instruction13SendAndConfirm({
            signers: {
                feePayer,
                account: nonPdaKP,
            },
        });
        const nonPdaAccount = await ValidateAccountsGetters.getState(
            nonPdaKP.publicKey,
        );
        expect(nonPdaAccount.field1).to.eq(13);

        // The fn can be called even if account is already initialized
        await expect(
            instruction13SendAndConfirm({
                signers: {
                    feePayer,
                    account: nonPdaKP,
                },
            }),
            // @ts-ignore
        ).to.not.be.rejected;
    });

    it("Reference validate_accounts_ref.instruction14, where caller doesn't have inputs", async () => {
        await instruction14SendAndConfirm({ signers: { feePayer } });
        const account = await ValidateAccountsGetters.getState(valAccPdaStatAddr);
        expect(account.field1).to.eq(14);

        // The fn can be called even if account is already initialized
        await expect(instruction14SendAndConfirm({ signers: { feePayer } })).to.not
            // @ts-ignore
            .be.rejected;
    });

    it("Reference validate_accounts_ref.instruction15, where caller doesn't have inputs", async () => {
        await instruction15SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
            },
        });
        const account = await ValidateAccountsGetters.getState(valAccPdaDynAddr);
        expect(account.field1).to.eq(15);

        // The fn can be called even if account is already initialized
        await expect(
            instruction15SendAndConfirm({
                accountSeedDynamic: U8_VAL,
                signers: {
                    feePayer,
                },
            }),
            // @ts-ignore
        ).to.not.be.rejected;
    });

    it("Reference validate_accounts_ref.instruction16, where caller doesn't have inputs", async () => {
        await instruction16SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
            },
        });
        const account = await ValidateAccountsGetters.getState(
            valAccPdaVerSeedsAddr,
        );
        expect(account.field1).to.eq(16);

        // The fn can be called even if account is already initialized
        await expect(
            instruction16SendAndConfirm({
                accountSeedU8Type: U8_VAL,
                accountSeedU16Type: U16_VAL,
                accountSeedU32Type: U32_VAL,
                accountSeedU64Type: U64_VAL,
                accountSeedI8Type: I8_VAL,
                accountSeedI16Type: I16_VAL,
                accountSeedI32Type: I32_VAL,
                accountSeedI64Type: I64_VAL,
                accountSeedStringType: STR_VAL,
                accountSeedPubkeyType: PK_VAL,
                signers: {
                    feePayer,
                },
            }),
            // @ts-ignore
        ).to.not.be.rejected;
    });

    it("Reference validate_advanced_cases.instruction0_only_method_with_name, where caller doesn't have inputs", async () => {
        await expect(instruction0SendAndConfirm({ signers: { feePayer } })).to.not
            // @ts-ignore
            .be.rejected;
    });

    it("Reference validate_advanced_cases.instruction9, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction29SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaForAdvancedCasesKP,
            },
        });

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const nonPda = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );

        expect(nonPda.field1).to.eq(29);
        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction10, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction30SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const pdaStatic =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaStatAddr);

        expect(pdaStatic.field1).to.eq(30);
        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction11, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction31SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const pdaDyn =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaDynAddr);

        expect(pdaDyn.field1).to.eq(31);
        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction12, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction32SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const pdaDynVerSeeds = await ValidateAdvancedCasesGetters.getState(
            valAdvPdaVerSeedsAddr,
        );

        expect(pdaDynVerSeeds.field1).to.eq(32);
        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction17, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction37SendAndConfirm({
            account: nonPdaForAdvancedCasesKP.publicKey,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        await expect(
            ValidateAdvancedCasesGetters.getState(nonPdaForAdvancedCasesKP.publicKey),
        // @ts-ignore
        ).to.be.rejected;

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(adminBalanceAfter).to.gt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction18, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction38SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        await expect(ValidateAdvancedCasesGetters.getState(valAdvPdaStatAddr)).to.be
            // @ts-ignore
            .rejected;

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(adminBalanceAfter).to.gt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction19, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction39SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        await expect(ValidateAdvancedCasesGetters.getState(valAdvPdaDynAddr)).to.be
            // @ts-ignore
            .rejected;

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(adminBalanceAfter).to.gt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction20, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction40SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        await expect(ValidateAdvancedCasesGetters.getState(valAdvPdaVerSeedsAddr))
            // @ts-ignore
            .to.be.rejected;

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(adminBalanceAfter).to.gt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction13, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction33SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaForAdvancedCasesKP,
            },
        });

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const nonPda = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );

        expect(nonPda.field1).to.eq(33);
        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction14, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction34SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const pdaStatic =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaStatAddr);

        expect(pdaStatic.field1).to.eq(34);
        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction15, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction35SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const pdaDyn =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaDynAddr);

        expect(pdaDyn.field1).to.eq(35);
        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction16, where caller doesn't have inputs", async () => {
        const adminBalanceBefore = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction36SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const pdaDynVerSeeds = await ValidateAdvancedCasesGetters.getState(
            valAdvPdaVerSeedsAddr,
        );

        expect(pdaDynVerSeeds.field1).to.eq(36);
        expect(adminBalanceAfter).to.lt(adminBalanceBefore);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction1, where caller doesn't have inputs", async () => {
        await instruction21SendAndConfirm({
            account: nonPdaForAdvancedCasesKP.publicKey,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });
        const nonPda = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );
        expect(nonPda.field1).to.eq(21);
    });

    it("Reference validate_advanced_cases.instruction2, where caller doesn't have inputs", async () => {
        await instruction22SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const pdaStatic =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaStatAddr);
        expect(pdaStatic.field1).to.eq(22);
    });

    it("Reference validate_advanced_cases.instruction3, where caller doesn't have inputs", async () => {
        await instruction23SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const pdaDyn =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaDynAddr);
        expect(pdaDyn.field1).to.eq(23);
    });

    it("Reference validate_advanced_cases.instruction4, where caller doesn't have inputs", async () => {
        await instruction24SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const pdaDynVerSeeds = await ValidateAdvancedCasesGetters.getState(
            valAdvPdaVerSeedsAddr,
        );
        expect(pdaDynVerSeeds.field1).to.eq(24);
    });

    it("Reference validate_advanced_cases.instruction5, where caller doesn't have inputs", async () => {
        const nonPdaAccountBefore = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );
        await instruction25SendAndConfirm({
            account: nonPdaForAdvancedCasesKP.publicKey,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });
        const nonPdaAccountAfter = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );
        expect(nonPdaAccountBefore.field1.toString()).to.eq(
            nonPdaAccountAfter.field1.toString(),
        );
    });

    it("Reference validate_advanced_cases.instruction6, where caller doesn't have inputs", async () => {
        const pdaBefore =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaStatAddr);
        await instruction26SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const pdaAfter =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaStatAddr);
        expect(pdaBefore.field1.toString()).to.eq(pdaAfter.field1.toString());
    });

    it("Reference validate_advanced_cases.instruction7, where caller doesn't have inputs", async () => {
        const pdaBefore =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaDynAddr);
        await instruction27SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const pdaAfter =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaDynAddr);
        expect(pdaBefore.field1.toString()).to.eq(pdaAfter.field1.toString());
    });

    it("Reference validate_advanced_cases.instruction8, where caller doesn't have inputs", async () => {
        const pdaBefore = await ValidateAdvancedCasesGetters.getState(
            valAdvPdaVerSeedsAddr,
        );

        await instruction28SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const pdaAfter = await ValidateAdvancedCasesGetters.getState(
            valAdvPdaVerSeedsAddr,
        );
        expect(pdaBefore.field1.toString()).to.eq(pdaAfter.field1.toString());
    });

    it("Reference validate_advanced_cases.instruction29, where caller doesn't have inputs", async () => {
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction49SendAndConfirm({
            account: nonPdaForAdvancedCasesKP.publicKey,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        await expect(
            ValidateAdvancedCasesGetters.getState(nonPdaForAdvancedCasesKP.publicKey),
        // @ts-ignore
        ).to.be.rejected;

        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(signer1BalanceAfter).to.gt(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction30, where caller doesn't have inputs", async () => {
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction50SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        await expect(ValidateAdvancedCasesGetters.getState(valAdvPdaStatAddr)).to.be
            // @ts-ignore
            .rejected;

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.gt(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction31, where caller doesn't have inputs", async () => {
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction51SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        await expect(ValidateAdvancedCasesGetters.getState(valAdvPdaDynAddr)).to.be
            // @ts-ignore
            .rejected;

        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.gt(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction32, where caller doesn't have inputs", async () => {
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction52SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        await expect(ValidateAdvancedCasesGetters.getState(valAdvPdaVerSeedsAddr))
            // @ts-ignore
            .to.be.rejected;

        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.gt(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction21, where caller doesn't have inputs", async () => {
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction41SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaForAdvancedCasesKP,
            },
        });

        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const nonPda = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );

        expect(nonPda.field1).to.eq(41);
        expect(signer1BalanceAfter).to.lt(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction22, where caller doesn't have inputs", async () => {
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction42SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const adminBalanceAfter = await provider.connection.getBalance(
            feePayer.publicKey,
        );
        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const pdaStatic2 =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaStat2Addr);

        expect(pdaStatic2.field1).to.eq(42);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.lt(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.eq(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction23, where caller doesn't have inputs", async () => {
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction43SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const pdaDyn =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaDynAddr);

        expect(pdaDyn.field1).to.eq(43);
        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.lt(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction24, where caller doesn't have inputs", async () => {
        const signer1BalanceBefore = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceBefore = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceBefore = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        await instruction44SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const signer1BalanceAfter = await provider.connection.getBalance(
            signer1KP.publicKey,
        );
        const signer2BalanceAfter = await provider.connection.getBalance(
            signer2KP.publicKey,
        );
        const signer3BalanceAfter = await provider.connection.getBalance(
            signer3KP.publicKey,
        );

        const pdaDynVerSeeds = await ValidateAdvancedCasesGetters.getState(
            valAdvPdaVerSeedsAddr,
        );

        expect(pdaDynVerSeeds.field1).to.eq(44);

        expect(signer1BalanceAfter).to.eq(signer1BalanceBefore);
        expect(signer2BalanceAfter).to.eq(signer2BalanceBefore);
        expect(signer3BalanceAfter).to.lt(signer3BalanceBefore);
    });

    it("Reference validate_advanced_cases.instruction25, where caller doesn't have inputs", async () => {
        await instruction45SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
                account: nonPdaForAdvancedCasesKP,
            },
        });

        const nonPda = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );
        expect(nonPda.field1).to.eq(45);
    });

    it("Reference validate_advanced_cases.instruction26, where caller doesn't have inputs", async () => {
        await instruction46SendAndConfirm({
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const pdaStatic =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaStatAddr);
        expect(pdaStatic.field1).to.eq(46);
    });

    it("Can init_if_needed and mutate an external PDAAccountWithOneStaticAndDynamicSeedAndOneField with 4 signers, charging rent fees to signer3 if any through a cpi", async () => {
        await instruction47SendAndConfirm({
            accountSeedDynamic: U8_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const pdaDyn =
            await ValidateAdvancedCasesGetters.getState(valAdvPdaDynAddr);
        expect(pdaDyn.field1).to.eq(47);
    });

    it("Can init_if_needed and mutate an external PDAAccountVerifiesSeedsTypes with 4 signers, charging rent fees to signer 4 if any through a cpi", async () => {
        await instruction48SendAndConfirm({
            accountSeedU8Type: U8_VAL,
            accountSeedU16Type: U16_VAL,
            accountSeedU32Type: U32_VAL,
            accountSeedU64Type: U64_VAL,
            accountSeedI8Type: I8_VAL,
            accountSeedI16Type: I16_VAL,
            accountSeedI32Type: I32_VAL,
            accountSeedI64Type: I64_VAL,
            accountSeedStringType: STR_VAL,
            accountSeedPubkeyType: PK_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const pdaDynVerSeeds = await ValidateAdvancedCasesGetters.getState(
            valAdvPdaVerSeedsAddr,
        );

        expect(pdaDynVerSeeds.field1).to.eq(48);
    });

    it("Can map seeds to inputs & signers in the callee to init an account though a cpi", async () => {
        await instruction55SendAndConfirm({
            u8Type: U8_VAL,
            u16Type: U16_VAL,
            u32Type: U32_VAL,
            u64Type: U64_VAL,
            i8Type: I8_VAL,
            i16Type: I16_VAL,
            i32Type: I32_VAL,
            i64Type: I64_VAL,
            stringType: STR_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const [newPdaAddr] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
            {
                pubkeyType: signer1KP.publicKey,
                u8Type: U8_VAL,
                u16Type: U16_VAL,
                u32Type: U32_VAL,
                u64Type: U64_VAL,
                i8Type: I8_VAL,
                i16Type: I16_VAL,
                i32Type: I32_VAL,
                i64Type: I64_VAL,
                stringType: STR_VAL,
            },
            programIdValidateAdvancedCases,
        );

        const newPda = await ValidateAdvancedCasesGetters.getState(newPdaAddr);
        expect(newPda.field1).to.eq(35);
    });

    it("Can map seeds to inputs & signers in the callee to a non mut account in a cpi", async () => {
        await instruction53SendAndConfirm({
            u8Type: U8_VAL,
            u16Type: U16_VAL,
            u32Type: U32_VAL,
            u64Type: U64_VAL,
            i8Type: I8_VAL,
            i16Type: I16_VAL,
            i32Type: I32_VAL,
            i64Type: I64_VAL,
            stringType: STR_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const [newPdaAddr] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
            {
                pubkeyType: signer1KP.publicKey,
                u8Type: U8_VAL,
                u16Type: U16_VAL,
                u32Type: U32_VAL,
                u64Type: U64_VAL,
                i8Type: I8_VAL,
                i16Type: I16_VAL,
                i32Type: I32_VAL,
                i64Type: I64_VAL,
                stringType: STR_VAL,
            },
            programIdValidateAdvancedCases,
        );

        const newPda = await ValidateAdvancedCasesGetters.getState(newPdaAddr);
        expect(newPda.field1).to.eq(35);
    });

    it("Can map seeds to inputs & signers in the callee to mut an account through a cpi", async () => {
        await instruction54SendAndConfirm({
            u8Type: U8_VAL,
            u16Type: U16_VAL,
            u32Type: U32_VAL,
            u64Type: U64_VAL,
            i8Type: I8_VAL,
            i16Type: I16_VAL,
            i32Type: I32_VAL,
            i64Type: I64_VAL,
            stringType: STR_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const [newPdaAddr] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
            {
                pubkeyType: signer1KP.publicKey,
                u8Type: U8_VAL,
                u16Type: U16_VAL,
                u32Type: U32_VAL,
                u64Type: U64_VAL,
                i8Type: I8_VAL,
                i16Type: I16_VAL,
                i32Type: I32_VAL,
                i64Type: I64_VAL,
                stringType: STR_VAL,
            },
            programIdValidateAdvancedCases,
        );

        const newPda = await ValidateAdvancedCasesGetters.getState(newPdaAddr);
        expect(newPda.field1).to.eq(34);
    });

    it("Can map seeds to inputs & signers in the callee to init if needed an account through a cpi", async () => {
        await instruction56SendAndConfirm({
            u8Type: U8_VAL,
            u16Type: U16_VAL,
            u32Type: U32_VAL,
            u64Type: U64_VAL,
            i8Type: I8_VAL,
            i16Type: I16_VAL,
            i32Type: I32_VAL,
            i64Type: I64_VAL,
            stringType: STR_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const [newPdaAddr] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
            {
                pubkeyType: signer1KP.publicKey,
                u8Type: U8_VAL,
                u16Type: U16_VAL,
                u32Type: U32_VAL,
                u64Type: U64_VAL,
                i8Type: I8_VAL,
                i16Type: I16_VAL,
                i32Type: I32_VAL,
                i64Type: I64_VAL,
                stringType: STR_VAL,
            },
            programIdValidateAdvancedCases,
        );

        const newPda = await ValidateAdvancedCasesGetters.getState(newPdaAddr);
        expect(newPda.field1).to.eq(36);
    });

    it("Can map seeds to inputs & signers in the callee to close an account through a cpi", async () => {
        await instruction57SendAndConfirm({
            u8Type: U8_VAL,
            u16Type: U16_VAL,
            u32Type: U32_VAL,
            u64Type: U64_VAL,
            i8Type: I8_VAL,
            i16Type: I16_VAL,
            i32Type: I32_VAL,
            i64Type: I64_VAL,
            stringType: STR_VAL,
            signers: {
                feePayer,
                signer1: signer1KP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const [newPdaAddr] = ValidateAdvancedCasesPDAs.derivePdaWithAllTypesPDA(
            {
                pubkeyType: signer1KP.publicKey,
                u8Type: U8_VAL,
                u16Type: U16_VAL,
                u32Type: U32_VAL,
                u64Type: U64_VAL,
                i8Type: I8_VAL,
                i16Type: I16_VAL,
                i32Type: I32_VAL,
                i64Type: I64_VAL,
                stringType: STR_VAL,
            },
            programIdValidateAdvancedCases,
        );

        await expect(ValidateAdvancedCasesGetters.getState(newPdaAddr)).to.be
            // @ts-ignore
            .rejected;
    });

    it("A Non Pda Account can be non mut & signer in the callee during a cpi", async () => {
        await instruction58SendAndConfirm({
            signers: {
                feePayer,
                signer1: nonPdaForAdvancedCasesKP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const nonPda = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );
        expect(nonPda.field1).to.eq(45);
    });

    it("A Non Pda Account can be signer & mut in the callee during a cpi", async () => {
        await instruction59SendAndConfirm({
            signers: {
                feePayer,
                signer1: nonPdaForAdvancedCasesKP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const nonPda = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );

        expect(nonPda.field1).to.eq(39);
    });
    // First close, then init
    it("A Non Pda Account can be signer & close in the callee in a cpi", async () => {
        await instruction62SendAndConfirm({
            signers: {
                feePayer,
                signer1: nonPdaForAdvancedCasesKP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        await expect(
            ValidateAdvancedCasesGetters.getState(nonPdaForAdvancedCasesKP.publicKey),
        // @ts-ignore
        ).to.be.rejected;
    });

    it("A Non Pda Account can be signer & init in the callee in a cpi", async () => {
        await instruction60SendAndConfirm({
            signers: {
                feePayer,
                signer1: nonPdaForAdvancedCasesKP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const nonPda = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );

        expect(nonPda.field1).to.eq(40);
    });

    it("A Non Pda Account can be signer & init_if_needed in the callee in a cpi", async () => {
        await instruction61SendAndConfirm({
            signers: {
                feePayer,
                signer1: nonPdaForAdvancedCasesKP,
                signer2: signer2KP,
                signer3: signer3KP,
            },
        });

        const nonPda = await ValidateAdvancedCasesGetters.getState(
            nonPdaForAdvancedCasesKP.publicKey,
        );
        expect(nonPda.field1).to.eq(41);
    });

    it("Can set all possible types on an external NotPDA account through a cpi", async () => {
        await instruction63SendAndConfirm({
            accountInfoType: ACC_INFO.publicKey,
            accountInfoTypeMut: ACC_INFO.publicKey,
            signers: {
                feePayer,
                account: nonPdaForDataTypesKP,
            },
        });

        const account = await ValidateDataTypesGetters.getState(
            nonPdaForDataTypesKP.publicKey,
        );

        // We need to do this to discard presicion loss
        const formattedF32Arr = account.f32TypeVector.map((num) => num.toFixed(2));
        const formattedF64Arr = account.f64TypeVector.map((num) => num.toFixed(2));

        expect(account.u8Type).to.eq(U8_VAL);
        expect(account.u16Type).to.eq(U16_VAL);
        expect(account.u32Type).to.eq(U32_VAL);
        expect(account.u64Type.toString()).to.eq(U64_VAL.toString());
        expect(account.u128Type.toString()).to.eq(U128_VAL.toString());
        expect(account.i8Type).to.eq(I8_VAL);
        expect(account.i16Type).to.eq(I16_VAL);
        expect(account.i32Type).to.eq(I32_VAL);
        expect(account.i64Type.toString()).to.eq(I64_VAL.toString());
        expect(account.i128Type.toString()).to.eq(I128_VAL.toString());
        expect(account.stringType).to.eq(STR_VAL);
        expect(account.boolType).to.eq(BOOL_VAL);
        expect(account.f32Type.toFixed(2)).to.eq(F32_VAL.toString());
        expect(account.f64Type.toFixed(2)).to.eq(F64_VAL.toString());
        expect(account.pubkeyType.toString()).to.eq(PK_VAL.toString());

        // Option types
        expect(account.u8TypeOption).to.eq(OPT_U8_VAL);
        expect(account.u16TypeOption).to.eq(OPT_U16_VAL);
        expect(account.u32TypeOption).to.eq(OPT_U32_VAL);
        expect(account.u64TypeOption.toString()).to.eq(OPT_U64_VAL.toString());
        expect(account.u128TypeOption.toString()).to.eq(OPT_U128_VAL.toString());
        expect(account.i8TypeOption).to.eq(OPT_I8_VAL);
        expect(account.i16TypeOption).to.eq(OPT_I16_VAL);
        expect(account.i32TypeOption).to.eq(OPT_I32_VAL);
        expect(account.i64TypeOption.toString()).to.eq(OPT_I64_VAL.toString());
        expect(account.i128TypeOption.toString()).to.eq(OPT_I128_VAL.toString());
        expect(account.stringTypeOption).to.eq(OPT_STR_VAL);
        expect(account.boolTypeOption).to.eq(OPT_BOOL_VAL);
        expect(account.f32TypeOption.toFixed(2)).to.eq(OPT_F32_VAL.toString());
        expect(account.f64TypeOption.toFixed(2)).to.eq(OPT_F64_VAL.toString());
        expect(account.pubkeyTypeOption.toString()).to.eq(OPT_PK_VAL.toString());

        //Vec types
        expect(account.u8TypeVector.toString()).to.eq(VEC_U8_VAL.toString());
        expect(account.u16TypeVector.toString()).to.eq(VEC_U16_VAL.toString());
        expect(account.u32TypeVector.toString()).to.eq(VEC_U32_VAL.toString());
        expect(account.u64TypeVector.toString()).to.eq(VEC_U64_VAL.toString());
        expect(account.u128TypeVector.toString()).to.eq(VEC_U128_VAL.toString());
        expect(account.i8TypeVector.toString()).to.eq(VEC_I8_VAL.toString());
        expect(account.i16TypeVector.toString()).to.eq(VEC_I16_VAL.toString());
        expect(account.i32TypeVector.toString()).to.eq(VEC_I32_VAL.toString());
        expect(account.i64TypeVector.toString()).to.eq(VEC_I64_VAL.toString());
        expect(account.i128TypeVector.toString()).to.eq(VEC_I128_VAL.toString());
        expect(account.boolTypeVector.toString()).to.eq(VEC_BOOL_VAL.toString());
        expect(formattedF32Arr.toString()).to.eq(VEC_F32_VAL.toString());
        expect(formattedF64Arr.toString()).to.eq(VEC_F64_VAL.toString());
        expect(account.pubkeyTypeVector.toString()).to.eq(VEC_PK_VAL.toString());
    });

    it("Can set all possible types on an external PDA account through a cpi", async () => {
        const [pdaForDataTypes] = ValidateDataTypesPDAs.deriveMasterTypesPdaPDA(
            programIdValidateDataTypes,
        );

        await instruction64SendAndConfirm({
            accountInfoType: ACC_INFO.publicKey,
            accountInfoTypeMut: ACC_INFO.publicKey,
            signers: {
                feePayer,
            },
        });

        const pda = await ValidateDataTypesGetters.getState(pdaForDataTypes);

        // We need to do this to discard presicion loss
        const formattedF32Arr = pda.f32TypeVector.map((num) => num.toFixed(2));
        const formattedF64Arr = pda.f64TypeVector.map((num) => num.toFixed(2));

        expect(pda.u8Type).to.eq(U8_VAL);
        expect(pda.u16Type).to.eq(U16_VAL);
        expect(pda.u32Type).to.eq(U32_VAL);
        expect(pda.u64Type.toString()).to.eq(U64_VAL.toString());
        expect(pda.u128Type.toString()).to.eq(U128_VAL.toString());
        expect(pda.i8Type).to.eq(I8_VAL);
        expect(pda.i16Type).to.eq(I16_VAL);
        expect(pda.i32Type).to.eq(I32_VAL);
        expect(pda.i64Type.toString()).to.eq(I64_VAL.toString());
        expect(pda.i128Type.toString()).to.eq(I128_VAL.toString());
        expect(pda.stringType).to.eq(STR_VAL);
        expect(pda.boolType).to.eq(BOOL_VAL);
        expect(pda.f32Type.toFixed(2)).to.eq(F32_VAL.toString());
        expect(pda.f64Type.toFixed(2)).to.eq(F64_VAL.toString());
        expect(pda.pubkeyType.toString()).to.eq(PK_VAL.toString());

        // Option types
        expect(pda.u8TypeOption).to.eq(OPT_U8_VAL);
        expect(pda.u16TypeOption).to.eq(OPT_U16_VAL);
        expect(pda.u32TypeOption).to.eq(OPT_U32_VAL);
        expect(pda.u64TypeOption.toString()).to.eq(OPT_U64_VAL.toString());
        expect(pda.u128TypeOption.toString()).to.eq(OPT_U128_VAL.toString());
        expect(pda.i8TypeOption).to.eq(OPT_I8_VAL);
        expect(pda.i16TypeOption).to.eq(OPT_I16_VAL);
        expect(pda.i32TypeOption).to.eq(OPT_I32_VAL);
        expect(pda.i64TypeOption.toString()).to.eq(OPT_I64_VAL.toString());
        expect(pda.i128TypeOption.toString()).to.eq(OPT_I128_VAL.toString());
        expect(pda.stringTypeOption).to.eq(OPT_STR_VAL);
        expect(pda.boolTypeOption).to.eq(OPT_BOOL_VAL);
        expect(pda.f32TypeOption.toFixed(2)).to.eq(OPT_F32_VAL.toString());
        expect(pda.f64TypeOption.toFixed(2)).to.eq(OPT_F64_VAL.toString());
        expect(pda.pubkeyTypeOption.toString()).to.eq(OPT_PK_VAL.toString());

        //Vec types
        expect(pda.u8TypeVector.toString()).to.eq(VEC_U8_VAL.toString());
        expect(pda.u16TypeVector.toString()).to.eq(VEC_U16_VAL.toString());
        expect(pda.u32TypeVector.toString()).to.eq(VEC_U32_VAL.toString());
        expect(pda.u64TypeVector.toString()).to.eq(VEC_U64_VAL.toString());
        expect(pda.u128TypeVector.toString()).to.eq(VEC_U128_VAL.toString());
        expect(pda.i8TypeVector.toString()).to.eq(VEC_I8_VAL.toString());
        expect(pda.i16TypeVector.toString()).to.eq(VEC_I16_VAL.toString());
        expect(pda.i32TypeVector.toString()).to.eq(VEC_I32_VAL.toString());
        expect(pda.i64TypeVector.toString()).to.eq(VEC_I64_VAL.toString());
        expect(pda.i128TypeVector.toString()).to.eq(VEC_I128_VAL.toString());
        expect(pda.boolTypeVector.toString()).to.eq(VEC_BOOL_VAL.toString());
        expect(formattedF32Arr.toString()).to.eq(VEC_F32_VAL.toString());
        expect(formattedF64Arr.toString()).to.eq(VEC_F64_VAL.toString());
        expect(pda.pubkeyTypeVector.toString()).to.eq(VEC_PK_VAL.toString());
    });
});
