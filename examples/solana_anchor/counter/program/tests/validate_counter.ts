import * as anchor from "@coral-xyz/anchor";
import * as anchorCounterClient from "../client/validate_counter";
import chai from "chai";
import { assert, expect } from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

describe("workspace", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // Use the default system wallet
  const adminKeypair = (provider.wallet as NodeWallet).payer;

  let rentPayer;

  before(async ()=> {
    rentPayer = anchor.web3.Keypair.generate();

    // Request airdrop
    let txhash = await provider.connection.requestAirdrop(
      rentPayer.publicKey,
      1e9
    );

    // Get the latest blockhash from the validator
    let blockHash = await provider.connection.getLatestBlockhashAndContext();

    // Await the tx confirmation
    await provider.connection.confirmTransaction({
      blockhash: blockHash.value.blockhash,
      lastValidBlockHeight: blockHash.value.lastValidBlockHeight,
      signature: txhash,
    });
  })

  it("Initializes a counter", async ()=> {
    let counterAddress = anchorCounterClient.deriveCounter({user: adminKeypair.publicKey})

    await expect(anchorCounterClient.fetchCounter(counterAddress)).to.be.rejected;
    
    await anchorCounterClient.InitCounterSendAndConfirm(adminKeypair);

    await expect(anchorCounterClient.fetchCounter(counterAddress)).to.not.be.rejected;
  })
  it("increments a counter", async ()=> {
    await anchorCounterClient.IncrementSendAndConfirm(adminKeypair)
    let counterAddress = anchorCounterClient.deriveCounter({user: adminKeypair.publicKey})

    let counter = await anchorCounterClient.fetchCounter(counterAddress)
    expect(counter.count.toString()).to.eq("1");
  })
  it("Inits if needed and increments a counter", async ()=> {
    let rentPayerBefore = await provider.connection.getBalance(rentPayer.publicKey)
    
    await anchorCounterClient.InitIfNeededAndIncrementSendAndConfirm(adminKeypair, rentPayer)
    let rentPayerAfter = await provider.connection.getBalance(rentPayer.publicKey)
    
    let counterAddress = anchorCounterClient.deriveCounter({user: rentPayer.publicKey})
    let counter = await anchorCounterClient.fetchCounter(counterAddress)

    expect(counter.count.toString()).to.eq("1");
    expect(rentPayerBefore).to.gt(rentPayerAfter);
  })

  it("Closes an account and send lamports to specified rent-receiver", async ()=> {
    let rentPayerBefore = await provider.connection.getBalance(rentPayer.publicKey)
    
    await anchorCounterClient.CloseCounterSendAndConfirm(adminKeypair, rentPayer)
    let rentPayerAfter = await provider.connection.getBalance(rentPayer.publicKey)
    
    let counterAddress = anchorCounterClient.deriveCounter({user: rentPayer.publicKey})
    await expect(anchorCounterClient.fetchCounter(counterAddress)).to.be.rejected;

    expect(rentPayerBefore).to.lt(rentPayerAfter);
  })
  
});
