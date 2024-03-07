import {Connection, Keypair, PublicKey} from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import {
    deriveMasterTypesPdaPDA,
    getState,
    initializeClient,
    instruction1SendAndConfirm,
    instruction2SendAndConfirm
} from "./index";

async function main(feePayer: Keypair) {
    const connection = new Connection("http://127.0.0.1:8899", {
        commitment: "confirmed"
    });
    const progId = new PublicKey(new PublicKey("5sAHwE5ZoZNZwvfVPsMBCJqJCoHEV2wHHW7NJb3DWLRY"));

    initializeClient(progId, connection);

    const masterNonPDA = Keypair.generate();
    await instruction1SendAndConfirm({
        accountInfoType: Keypair.generate().publicKey,
        accountInfoTypeMut: Keypair.generate().publicKey,
        u8Type: 255,
        u16Type: 65535,
        u32Type: 4294967295,
        u64Type: 18446744073709551615n,
        u128Type: 340282366920938463463374607431768211455n,
        i8Type: 127,
        i16Type: 32767,
        i32Type: 2147483647,
        i64Type: 9223372036854775807n,
        i128Type: 170141183460469231731687303715884105727n,
        stringType: "Hello, World!",
        boolType: true,
        f32Type: 3.14,
        f64Type: 3.14,
        pubkeyType: Keypair.generate().publicKey,
        u8TypeOption: 255,
        u16TypeOption: 65535,
        u32TypeOption: 4294967295,
        u64TypeOption: 18446744073709551615n,
        u128TypeOption: 340282366920938463463374607431768211455n,
        i8TypeOption: -128,
        i16TypeOption: -32768,
        i32TypeOption: -2147483648,
        i64TypeOption: -9223372036854775808n,
        i128TypeOption: -170141183460469231731687303715884105728n,
        stringTypeOption: "Hello, World!",
        boolTypeOption: true,
        f32TypeOption: 3.40282347E+38,
        f64TypeOption: 1.7976931348623157E+308,
        pubkeyTypeOption: Keypair.generate().publicKey,
        u8TypeVector: [0, 255],
        u16TypeVector: [0, 65535],
        u32TypeVector: [0, 4294967295],
        u64TypeVector: [0n, 18446744073709551615n],
        u128TypeVector: [0n, 340282366920938463463374607431768211455n],
        i8TypeVector: [-128, 127],
        i16TypeVector: [-32768, 32767],
        i32TypeVector: [-2147483648, 2147483647],
        i64TypeVector: [-9223372036854775808n, 9223372036854775807n],
        i128TypeVector: [-170141183460469231731687303715884105728n, 170141183460469231731687303715884105727n],
        boolTypeVector: [true, false, false],
        f32TypeVector: [3.40282347E+38],
        f64TypeVector: [1.7976931348623157E+308],
        pubkeyTypeVector: [Keypair.generate().publicKey],
        signers: {
            account: masterNonPDA,
            feePayer,
        }
    });
    const masterNonPDAAccount = await getState(masterNonPDA.publicKey);
    console.log(masterNonPDAAccount);

    await instruction2SendAndConfirm({
        accountInfoType: Keypair.generate().publicKey,
        accountInfoTypeMut: Keypair.generate().publicKey,
        u8Type: 255,
        u16Type: 65535,
        u32Type: 4294967295,
        u64Type: 18446744073709551615n,
        u128Type: 340282366920938463463374607431768211455n,
        i8Type: 127,
        i16Type: 32767,
        i32Type: 2147483647,
        i64Type: 9223372036854775807n,
        i128Type: 170141183460469231731687303715884105727n,
        stringType: "Hello, World!",
        boolType: true,
        f32Type: 3.14,
        f64Type: 3.14,
        pubkeyType: Keypair.generate().publicKey,
        u8TypeOption: 255,
        u16TypeOption: 65535,
        u32TypeOption: 4294967295,
        u64TypeOption: 18446744073709551615n,
        u128TypeOption: 340282366920938463463374607431768211455n,
        i8TypeOption: -128,
        i16TypeOption: -32768,
        i32TypeOption: -2147483648,
        i64TypeOption: -9223372036854775808n,
        i128TypeOption: -170141183460469231731687303715884105728n,
        stringTypeOption: "Hello, World!",
        boolTypeOption: true,
        f32TypeOption: 3.40282347E+38,
        f64TypeOption: 1.7976931348623157E+308,
        pubkeyTypeOption: Keypair.generate().publicKey,
        u8TypeVector: [0, 255],
        u16TypeVector: [0, 65535],
        u32TypeVector: [0, 4294967295],
        u64TypeVector: [0n, 18446744073709551615n],
        u128TypeVector: [0n, 340282366920938463463374607431768211455n],
        i8TypeVector: [-128, 127],
        i16TypeVector: [-32768, 32767],
        i32TypeVector: [-2147483648, 2147483647],
        i64TypeVector: [-9223372036854775808n, 9223372036854775807n],
        i128TypeVector: [-170141183460469231731687303715884105728n, 170141183460469231731687303715884105727n],
        boolTypeVector: [true, false, false],
        f32TypeVector: [3.40282347E+38],
        f64TypeVector: [1.7976931348623157E+308],
        pubkeyTypeVector: [Keypair.generate().publicKey],
        signers: {
            feePayer
        }
    });
    const [masterTypesPdaPubKey] = deriveMasterTypesPdaPDA(progId);
    const masterPDA = await getState(masterTypesPdaPubKey);
    console.info(masterPDA);
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json"))
  .then(file => main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))));