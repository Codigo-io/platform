import * as anchor from "@coral-xyz/anchor";
import * as validateDataTypesClient from "../client/validate_data_types";
import chai, {expect} from "chai";
import chaiAsPromised from "chai-as-promised";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";

chai.use(chaiAsPromised);

describe("Anchor Data Types Tests", async () => {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    // Use the default system wallet
    const adminKeypair = (provider.wallet as NodeWallet).payer;
    const U8_VAL = 8;
    const U16_VAL = 16;
    const U32_VAL = 32;
    const U64_VAL = new anchor.BN(64);
    const U128_VAL = new anchor.BN(128);
    const I8_VAL = -8;
    const I16_VAL = -16;
    const I32_VAL = -32;
    const I64_VAL = new anchor.BN(-64);
    const I128_VAL = new anchor.BN(-128);
    const STR_VAL = "string";
    const BOOL_VAL = true;
    const F32_VAL = 3.14;
    const F64_VAL = 9.99;
    const PK_VAL = anchor.web3.Keypair.generate().publicKey;
    const OPT_U8_VAL = 8;
    const OPT_U16_VAL = 16;
    const OPT_U32_VAL = 32;
    const OPT_U64_VAL = new anchor.BN(64);
    const OPT_U128_VAL = new anchor.BN(128);
    const OPT_I8_VAL = -8;
    const OPT_I16_VAL = -16;
    const OPT_I32_VAL = -32;
    const OPT_I64_VAL = new anchor.BN(-64);
    const OPT_I128_VAL = new anchor.BN(-128);
    const OPT_STR_VAL = "string";
    const OPT_BOOL_VAL = true;
    const OPT_F32_VAL = 3.14;
    const OPT_F64_VAL = 9.99;
    const OPT_PK_VAL = anchor.web3.Keypair.generate().publicKey;
    const VEC_U8_VAL = Buffer.from([8, 8]);
    const VEC_U16_VAL = [16, 16];
    const VEC_U32_VAL = [32, 32];
    const VEC_U64_VAL = [new anchor.BN(64), new anchor.BN(64)];
    const VEC_U128_VAL = [new anchor.BN(128), new anchor.BN(128)];
    const VEC_I8_VAL = [-8, -8];
    const VEC_I16_VAL = [-16, -16];
    const VEC_I32_VAL = [-32, -32];
    const VEC_I64_VAL = [new anchor.BN(-64), new anchor.BN(-64)];
    const VEC_I128_VAL = [new anchor.BN(-128), new anchor.BN(-128)];
    const VEC_BOOL_VAL = [true, true];
    const VEC_F32_VAL = [3.14, 3.14];
    const VEC_F64_VAL = [9.99, 9.99];
    const VEC_PK_VAL = [
        anchor.web3.Keypair.generate().publicKey,
        anchor.web3.Keypair.generate().publicKey,
    ];
    const ACC_INFO = anchor.web3.Keypair.generate();

    const nonPdaAccount = anchor.web3.Keypair.generate();
    const pdaAccount = validateDataTypesClient.deriveMasterTypesPDA();

    it("Can set all possible types on a NotPDA account", async () => {
        await validateDataTypesClient.Instruction1SendAndConfirm(
            U8_VAL,
            U16_VAL,
            U32_VAL,
            U64_VAL,
            U128_VAL,
            I8_VAL,
            I16_VAL,
            I32_VAL,
            I64_VAL,
            I128_VAL,
            STR_VAL,
            BOOL_VAL,
            F32_VAL,
            F64_VAL,
            PK_VAL,
            OPT_U8_VAL,
            OPT_U16_VAL,
            OPT_U32_VAL,
            OPT_U64_VAL,
            OPT_U128_VAL,
            OPT_I8_VAL,
            OPT_I16_VAL,
            OPT_I32_VAL,
            OPT_I64_VAL,
            OPT_I128_VAL,
            OPT_STR_VAL,
            OPT_BOOL_VAL,
            OPT_F32_VAL,
            OPT_F64_VAL,
            OPT_PK_VAL,
            VEC_U8_VAL,
            VEC_U16_VAL,
            VEC_U32_VAL,
            VEC_U64_VAL,
            VEC_U128_VAL,
            VEC_I8_VAL,
            VEC_I16_VAL,
            VEC_I32_VAL,
            VEC_I64_VAL,
            VEC_I128_VAL,
            VEC_BOOL_VAL,
            VEC_F32_VAL,
            VEC_F64_VAL,
            VEC_PK_VAL,
            ACC_INFO.publicKey,
            ACC_INFO.publicKey,
            adminKeypair,
            nonPdaAccount
        );

        let account = await validateDataTypesClient.fetchMasterTypesNonPDA(
            nonPdaAccount.publicKey
        );

        // We need to do this to discard presicion loss
        let formattedF32Arr = account.f32TypeVector.map(num => num.toFixed(2))
        let formattedF64Arr = account.f64TypeVector.map(num => num.toFixed(2))

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

    it("Can set all possible types on a PDA account", async () => {
        await validateDataTypesClient.Instruction2SendAndConfirm(
            U8_VAL,
            U16_VAL,
            U32_VAL,
            U64_VAL,
            U128_VAL,
            I8_VAL,
            I16_VAL,
            I32_VAL,
            I64_VAL,
            I128_VAL,
            STR_VAL,
            BOOL_VAL,
            F32_VAL,
            F64_VAL,
            PK_VAL,
            OPT_U8_VAL,
            OPT_U16_VAL,
            OPT_U32_VAL,
            OPT_U64_VAL,
            OPT_U128_VAL,
            OPT_I8_VAL,
            OPT_I16_VAL,
            OPT_I32_VAL,
            OPT_I64_VAL,
            OPT_I128_VAL,
            OPT_STR_VAL,
            OPT_BOOL_VAL,
            OPT_F32_VAL,
            OPT_F64_VAL,
            OPT_PK_VAL,
            VEC_U8_VAL,
            VEC_U16_VAL,
            VEC_U32_VAL,
            VEC_U64_VAL,
            VEC_U128_VAL,
            VEC_I8_VAL,
            VEC_I16_VAL,
            VEC_I32_VAL,
            VEC_I64_VAL,
            VEC_I128_VAL,
            VEC_BOOL_VAL,
            VEC_F32_VAL,
            VEC_F64_VAL,
            VEC_PK_VAL,
            pdaAccount,
            ACC_INFO.publicKey,
            ACC_INFO.publicKey,
            adminKeypair
        );

        let account = await validateDataTypesClient.fetchMasterTypesPDA(
            pdaAccount
        );

        // We need to do this to discard presicion loss
        let formattedF32Arr = account.f32TypeVector.map(num => num.toFixed(2))
        let formattedF64Arr = account.f64TypeVector.map(num => num.toFixed(2))

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
});
