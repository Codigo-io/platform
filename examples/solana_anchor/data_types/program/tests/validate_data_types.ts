import { AnchorProvider, setProvider, web3 } from "@coral-xyz/anchor";
import {
    deriveMasterTypesPdaPDA,
    getState,
    initializeClient,
    instruction1SendAndConfirm,
    instruction2SendAndConfirm,
} from "../app/program_client";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";

chai.use(chaiAsPromised);

const programId = new web3.PublicKey(
    "Djj7zosfYLKGvcGXmxsnDnarLNXxiEPaZ5LP65JohWFS",
);
initializeClient(programId);

describe("Anchor Data Types Tests", async () => {
    const provider = AnchorProvider.env();
    setProvider(provider);

    // Use the default system wallet
    const adminKeypair = (provider.wallet as NodeWallet).payer;
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
    const PK_VAL = web3.Keypair.generate().publicKey;
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
    const OPT_PK_VAL = web3.Keypair.generate().publicKey;
    const VEC_U8_VAL = [8];
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
        web3.Keypair.generate().publicKey,
        web3.Keypair.generate().publicKey,
    ];
    const ACC_INFO = web3.Keypair.generate();

    const nonPdaAccount = web3.Keypair.generate();
    const [pdaAccount] = deriveMasterTypesPdaPDA(programId);

    it("Can set all possible types on a NotPDA account", async () => {
        await instruction1SendAndConfirm({
            u8Type: U8_VAL,
            u16Type: U16_VAL,
            u32Type: U32_VAL,
            u64Type: U64_VAL,
            u128Type: U128_VAL,
            i8Type: I8_VAL,
            i16Type: I16_VAL,
            i32Type: I32_VAL,
            i64Type: I64_VAL,
            i128Type: I128_VAL,
            stringType: STR_VAL,
            boolType: BOOL_VAL,
            f32Type: F32_VAL,
            f64Type: F64_VAL,
            pubkeyType: PK_VAL,
            u8TypeOption: OPT_U8_VAL,
            u16TypeOption: OPT_U16_VAL,
            u32TypeOption: OPT_U32_VAL,
            u64TypeOption: OPT_U64_VAL,
            u128TypeOption: OPT_U128_VAL,
            i8TypeOption: OPT_I8_VAL,
            i16TypeOption: OPT_I16_VAL,
            i32TypeOption: OPT_I32_VAL,
            i64TypeOption: OPT_I64_VAL,
            i128TypeOption: OPT_I128_VAL,
            stringTypeOption: OPT_STR_VAL,
            boolTypeOption: OPT_BOOL_VAL,
            f32TypeOption: OPT_F32_VAL,
            f64TypeOption: OPT_F64_VAL,
            pubkeyTypeOption: OPT_PK_VAL,
            u8TypeVector: VEC_U8_VAL,
            u16TypeVector: VEC_U16_VAL,
            u32TypeVector: VEC_U32_VAL,
            u64TypeVector: VEC_U64_VAL,
            u128TypeVector: VEC_U128_VAL,
            i8TypeVector: VEC_I8_VAL,
            i16TypeVector: VEC_I16_VAL,
            i32TypeVector: VEC_I32_VAL,
            i64TypeVector: VEC_I64_VAL,
            i128TypeVector: VEC_I128_VAL,
            boolTypeVector: VEC_BOOL_VAL,
            f32TypeVector: VEC_F32_VAL,
            f64TypeVector: VEC_F64_VAL,
            pubkeyTypeVector: VEC_PK_VAL,
            accountInfoType: ACC_INFO.publicKey,
            accountInfoTypeMut: ACC_INFO.publicKey,
            signers: {
                account: nonPdaAccount,
                feePayer: adminKeypair,
            }
        });

        let account = await getState(nonPdaAccount.publicKey);

        // We need to do this to discard precision loss
        let formattedF32Arr = account.f32TypeVector.map((num) => num.toFixed(2));
        let formattedF64Arr = account.f64TypeVector.map((num) => num.toFixed(2));

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
        expect(account.u8TypeVector[0]).to.eq(VEC_U8_VAL[0]);
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
        await instruction2SendAndConfirm({
            u8Type: U8_VAL,
            u16Type: U16_VAL,
            u32Type: U32_VAL,
            u64Type: U64_VAL,
            u128Type: U128_VAL,
            i8Type: I8_VAL,
            i16Type: I16_VAL,
            i32Type: I32_VAL,
            i64Type: I64_VAL,
            i128Type: I128_VAL,
            stringType: STR_VAL,
            boolType: BOOL_VAL,
            f32Type: F32_VAL,
            f64Type: F64_VAL,
            pubkeyType: PK_VAL,
            u8TypeOption: OPT_U8_VAL,
            u16TypeOption: OPT_U16_VAL,
            u32TypeOption: OPT_U32_VAL,
            u64TypeOption: OPT_U64_VAL,
            u128TypeOption: OPT_U128_VAL,
            i8TypeOption: OPT_I8_VAL,
            i16TypeOption: OPT_I16_VAL,
            i32TypeOption: OPT_I32_VAL,
            i64TypeOption: OPT_I64_VAL,
            i128TypeOption: OPT_I128_VAL,
            stringTypeOption: OPT_STR_VAL,
            boolTypeOption: OPT_BOOL_VAL,
            f32TypeOption: OPT_F32_VAL,
            f64TypeOption: OPT_F64_VAL,
            pubkeyTypeOption: OPT_PK_VAL,
            u8TypeVector: VEC_U8_VAL,
            u16TypeVector: VEC_U16_VAL,
            u32TypeVector: VEC_U32_VAL,
            u64TypeVector: VEC_U64_VAL,
            u128TypeVector: VEC_U128_VAL,
            i8TypeVector: VEC_I8_VAL,
            i16TypeVector: VEC_I16_VAL,
            i32TypeVector: VEC_I32_VAL,
            i64TypeVector: VEC_I64_VAL,
            i128TypeVector: VEC_I128_VAL,
            boolTypeVector: VEC_BOOL_VAL,
            f32TypeVector: VEC_F32_VAL,
            f64TypeVector: VEC_F64_VAL,
            pubkeyTypeVector: VEC_PK_VAL,
            accountInfoType: ACC_INFO.publicKey,
            accountInfoTypeMut: ACC_INFO.publicKey,
            signers: {
                feePayer: adminKeypair,
            }
        });

        let account = await getState(pdaAccount);

        // We need to do this to discard presicion loss
        let formattedF32Arr = account.f32TypeVector.map((num) => num.toFixed(2));
        let formattedF64Arr = account.f64TypeVector.map((num) => num.toFixed(2));

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
        expect(account.u8TypeVector[0]).to.eq(VEC_U8_VAL[0]);
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
