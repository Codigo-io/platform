import {Connection, Keypair, PublicKey} from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import {
  deriveArrayPDA,
  getAccount10Kb,
  getAccount10Mib,
  initAccountInfoOnClientSendAndConfirm,
  initAccountInfoOnContractSendAndConfirm,
  initializeClient,
  initOnClientSendAndConfirm,
  initOnClientWithCustomOwnerSendAndConfirm,
  initOnContractSendAndConfirm,
  initPdaOnContractSendAndConfirm,
  initTwoBigAccountOnClientSendAndConfirm
} from "./index";

async function main(feePayer: Keypair) {
  const connection = new Connection("http://127.0.0.1:8899", {
    commitment: "confirmed"
  });
  const progId = new PublicKey("GpenPM6dy1oA94ab3nZqVCT4ApkrhFHqHTE76fr863ez");

  initializeClient(progId, connection);

  /**
   * Create a 10Kb PDA account in contract
   */
  const [pdaPK] = deriveArrayPDA({
    index: 0,
  }, progId)
  await initPdaOnContractSendAndConfirm({
    accountSeedIndex: 0,
    signers: {
      feePayer
    }
  });
  const ix1Account = await getAccount10Kb(pdaPK);
  console.log(`ix1: ${JSON.stringify(ix1Account)}`)

  /**
   * Create a 10Kb Non-PDA account in contract
   */
  const ix2Keypair = Keypair.generate()
  await initOnContractSendAndConfirm({
    signers: {
      feePayer,
      account: ix2Keypair
    }
  });
  const ix2Account = await getAccount10Kb(ix2Keypair.publicKey);
  console.log(`ix2: ${JSON.stringify(ix2Account)}`)

  /**
   * Create a 10Mib account in client
   */
  const ix3Keypair = Keypair.generate();
  await initOnClientSendAndConfirm({
    signers: {
      feePayer,
      account: ix3Keypair,
    }
  })
  const ix3Account = await getAccount10Mib(ix3Keypair.publicKey)
  console.log(`ix3: ${JSON.stringify(ix3Account)}`)

  /**
   * Create a 10Mib account in client with custom owner
   */
  const ix4Keypair = Keypair.generate();
  await initOnClientWithCustomOwnerSendAndConfirm({
    signers: {
      feePayer,
      account: ix4Keypair,
    }
  })
  const ix4Account = await getAccount10Mib(ix4Keypair.publicKey);
  console.log(`ix4: ${JSON.stringify(ix4Account)}`)

  /**
   * Create a 10Mib account info
   */
  const ix5Keypair = Keypair.generate();
  await initAccountInfoOnClientSendAndConfirm({
    signers: {
      feePayer,
      account: ix5Keypair,
    }
  });
  const ix5Account = await connection.getAccountInfo(ix5Keypair.publicKey);
  console.log(`ix5: ${JSON.stringify({
    lamports: ix5Account!.lamports,
    owner: ix5Account!.owner,
    executable: ix5Account!.executable,
    rentEpoch: ix5Account!.rentEpoch,
  })}`)

  /**
   * Create a 10Mib account info with custom owner
   */
  const ix6Keypair = Keypair.generate();
  await initAccountInfoOnClientSendAndConfirm({
    signers: {
      feePayer,
      account: ix6Keypair,
    }
  });
  const ix6Account = await connection.getAccountInfo(ix6Keypair.publicKey);
  console.log(`ix6: ${JSON.stringify({
    lamports: ix6Account!.lamports,
    owner: ix6Account!.owner,
    executable: ix6Account!.executable,
    rentEpoch: ix6Account!.rentEpoch,
  })}`)

  /**
   * Create a 10Kb account info in contract
   */
  const ix7Keypair = Keypair.generate();
  await initAccountInfoOnContractSendAndConfirm({
    signers: {
      feePayer,
      account: ix7Keypair
    }
  });
  const ix7Account = await connection.getAccountInfo(ix7Keypair.publicKey);
  console.log(`ix7: ${JSON.stringify({
    lamports: ix7Account!.lamports,
    owner: ix7Account!.owner,
    executable: ix7Account!.executable,
    rentEpoch: ix7Account!.rentEpoch,
  })}`)

  /**
   * Create two big accounts in the same instruction
   */
  const ix8AccountKP = Keypair.generate();
  const ix8AccountInfoKP = Keypair.generate();
  await initTwoBigAccountOnClientSendAndConfirm({
    signers: {
      feePayer,
      account: ix8AccountKP,
      accountInfo: ix8AccountInfoKP,
    }
  })
  const ix8Account = await getAccount10Mib(ix8AccountKP.publicKey);
  const ix8AccountInfo = await connection.getAccountInfo(ix8AccountInfoKP.publicKey);
  console.log(`ix8: ${JSON.stringify(ix8Account)}`)
  console.log(`ix8: ${JSON.stringify({
    lamports: ix8AccountInfo!.lamports,
    owner: ix8AccountInfo!.owner,
    executable: ix8AccountInfo!.executable,
    rentEpoch: ix8AccountInfo!.rentEpoch,
  })}`)
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json"))
  .then(file => main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))));
