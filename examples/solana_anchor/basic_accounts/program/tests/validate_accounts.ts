import * as anchor from "@coral-xyz/anchor";
import * as validateAccountsClient from "../client/validate_accounts";
import chai from "chai";
import { assert, expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
chai.use(chaiAsPromised);

describe("validate_accounts Anchor Tests e2e", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // Use the default system wallet
  const adminKeypair = (provider.wallet as NodeWallet).payer;

  const U8_DIN_SEED = 8;
  const U16_DIN_SEED = 16;
  const U32_DIN_SEED = 32;
  const I8_DIN_SEED = -8;
  const I16_DIN_SEED = -16;
  const I32_DIN_SEED = -32;
  const STRING_DIN_SEED = "string";
  const PUBKEY_DIN_SEED = anchor.web3.Keypair.generate().publicKey;

  let nonPdaKP = anchor.web3.Keypair.generate();
  let pdaStaticSeedAddr: anchor.web3.PublicKey;
  let pdaStaticAndDynSeedAddr: anchor.web3.PublicKey;
  let pdaVerifiesSeedsAddr: anchor.web3.PublicKey;

  before(async () => {
    pdaStaticSeedAddr =
      await validateAccountsClient.derivePDAAccountWithOneStaticSeedAndOneField();
    pdaStaticAndDynSeedAddr =
      await validateAccountsClient.derivePDAAccountWithOneStaticAndDynamicSeedAndOneField(
        { dynamic: U8_DIN_SEED }
      );
    pdaVerifiesSeedsAddr =
      await validateAccountsClient.derivePDAAccountVerifiesSeedsTypes({
        u8_type: U8_DIN_SEED,
        u16_type: U16_DIN_SEED,
        u32_type: U32_DIN_SEED,
        i8_type: I8_DIN_SEED,
        i16_type: I16_DIN_SEED,
        i32_type: I32_DIN_SEED,
        string_type: STRING_DIN_SEED,
        pubkey_type: PUBKEY_DIN_SEED,
      });
  });

  // Account Initialization (Ixs 9 to 12)
  it("Inits and Mutates a NonPDAAccount", async () => {
    await validateAccountsClient.Instruction9SendAndConfirm(
      9,
      adminKeypair,
      nonPdaKP
    );
    let nonPdaAccount =
      await validateAccountsClient.fetchNonPDAAccountWithOneField(
        nonPdaKP.publicKey
      );
    expect(nonPdaAccount.field1).to.eq(9);
  });
  it("Inits and Mutates a PDAAccountWithOneStaticSeedAndOneField", async () => {
    await validateAccountsClient.Instruction10SendAndConfirm(
      10,
      pdaStaticSeedAddr,
      adminKeypair
    );
    let pdaStaticSeed =
      await validateAccountsClient.fetchPDAAccountWithOneStaticSeedAndOneField(
        pdaStaticSeedAddr
      );
    expect(pdaStaticSeed.field1).to.eq(10);
  });
  it("Inits and Mutates a PDAAccountWithOneStaticAndDynamicSeedAndOneField", async () => {
    await validateAccountsClient.Instruction11SendAndConfirm(
      11,
      U8_DIN_SEED,
      pdaStaticAndDynSeedAddr,
      adminKeypair
    );
    let pdaStaticAndDynSeed =
      await validateAccountsClient.fetchPDAAccountWithOneStaticAndDynamicSeedAndOneField(
        pdaStaticAndDynSeedAddr
      );
    expect(pdaStaticAndDynSeed.field1).to.eq(11);
  });
  it("Inits and Mutates a PDAAccountVerifiesSeedsTypes", async () => {
    await validateAccountsClient.Instruction12SendAndConfirm(
      12,
      U8_DIN_SEED,
      U16_DIN_SEED,
      U32_DIN_SEED,
      I8_DIN_SEED,
      I16_DIN_SEED,
      I32_DIN_SEED,
      STRING_DIN_SEED,
      PUBKEY_DIN_SEED,
      pdaVerifiesSeedsAddr,
      adminKeypair
    );
    let pdaVerifiesSeedsTypes =
      await validateAccountsClient.fetchPDAAccountVerifiesSeedsTypes(
        pdaVerifiesSeedsAddr
      );
    expect(pdaVerifiesSeedsTypes.field1).to.eq(12);
  });
  // Account Mutation (Ixs 1 to 4)
  it("Mutates a NonPDAAccount", async () => {
    let nonPdaAccountBefore =
      await validateAccountsClient.fetchNonPDAAccountWithOneField(
        nonPdaKP.publicKey
      );
    expect(nonPdaAccountBefore.field1).to.eq(9);

    await validateAccountsClient.Instruction1SendAndConfirm(
      1,
      nonPdaKP.publicKey,
      adminKeypair
    );
    let nonPdaAccountAfter =
      await validateAccountsClient.fetchNonPDAAccountWithOneField(
        nonPdaKP.publicKey
      );
    expect(nonPdaAccountAfter.field1).to.eq(1);
  });
  it("Mutates a PDAAccountWithOneStaticSeedAndOneField", async () => {
    let pdaStaticSeedBefore =
      await validateAccountsClient.fetchPDAAccountWithOneStaticSeedAndOneField(
        pdaStaticSeedAddr
      );
    expect(pdaStaticSeedBefore.field1).to.eq(10);

    await validateAccountsClient.Instruction2SendAndConfirm(
      2,
      pdaStaticSeedAddr,
      adminKeypair
    );
    let pdaStaticSeedAfter =
      await validateAccountsClient.fetchPDAAccountWithOneStaticSeedAndOneField(
        pdaStaticSeedAddr
      );
    expect(pdaStaticSeedAfter.field1).to.eq(2);
  });
  it("Mutates a PDAAccountWithOneStaticAndDynamicSeedAndOneField", async () => {
    let pdaStaticAndDynSeedBefore =
      await validateAccountsClient.fetchPDAAccountWithOneStaticAndDynamicSeedAndOneField(
        pdaStaticAndDynSeedAddr
      );
    expect(pdaStaticAndDynSeedBefore.field1).to.eq(11);

    await validateAccountsClient.Instruction3SendAndConfirm(
      3,
      U8_DIN_SEED,
      pdaStaticAndDynSeedAddr,
      adminKeypair
    );
    let pdaStaticAndDynSeedAfter =
      await validateAccountsClient.fetchPDAAccountWithOneStaticAndDynamicSeedAndOneField(
        pdaStaticAndDynSeedAddr
      );
    expect(pdaStaticAndDynSeedAfter.field1).to.eq(3);
  });
  it("Mutates a PDAAccountVerifiesSeedsTypes", async () => {
    let pdaVerifiesSeedsBefore =
      await validateAccountsClient.fetchPDAAccountVerifiesSeedsTypes(
        pdaVerifiesSeedsAddr
      );
    expect(pdaVerifiesSeedsBefore.field1).to.eq(12);

    await validateAccountsClient.Instruction4SendAndConfirm(
      4,
      U8_DIN_SEED,
      U16_DIN_SEED,
      U32_DIN_SEED,
      I8_DIN_SEED,
      I16_DIN_SEED,
      I32_DIN_SEED,
      STRING_DIN_SEED,
      PUBKEY_DIN_SEED,
      pdaVerifiesSeedsAddr,
      adminKeypair
    );
    let pdaVerifiesSeedsAfter =
      await validateAccountsClient.fetchPDAAccountVerifiesSeedsTypes(
        pdaVerifiesSeedsAddr
      );
    expect(pdaVerifiesSeedsAfter.field1).to.eq(4);
  });
  // Immutable Accounts (Ix 5 to 8)
  it("Cannot mutate a non-mutable NonPDAAccount", async () => {
    // NOTICE: By 9/19/23, Anchor still does not throws an error when mutating a non mutable account, just fails silently.
    // https://github.com/coral-xyz/anchor/issues/326
    let nonPdaAccountBefore =
      await validateAccountsClient.fetchNonPDAAccountWithOneField(
        nonPdaKP.publicKey
      );

    await validateAccountsClient.Instruction5SendAndConfirm(
      nonPdaKP.publicKey,
      adminKeypair
    );

    let nonPdaAccountAfter =
      await validateAccountsClient.fetchNonPDAAccountWithOneField(
        nonPdaKP.publicKey
      );

    expect(nonPdaAccountBefore.field1.toString()).to.eq(
      nonPdaAccountAfter.field1.toString()
    );
  });
  it("Cannot Mutate a non-mutable PDAAccountWithOneStaticSeedAndOneField", async () => {
    let pdaStaticSeedBefore =
      await validateAccountsClient.fetchPDAAccountWithOneStaticSeedAndOneField(
        pdaStaticSeedAddr
      );

    await validateAccountsClient.Instruction6SendAndConfirm(
      pdaStaticSeedAddr,
      adminKeypair
    );
    let pdaStaticSeedAfter =
      await validateAccountsClient.fetchPDAAccountWithOneStaticSeedAndOneField(
        pdaStaticSeedAddr
      );
    expect(pdaStaticSeedBefore.field1.toString()).to.eq(
      pdaStaticSeedAfter.field1.toString()
    );
  });
  it("Cannot Mutate a non-mutable PDAAccountWithOneStaticAndDynamicSeedAndOneField", async () => {
    let pdaStaticAndDynSeedBefore =
      await validateAccountsClient.fetchPDAAccountWithOneStaticAndDynamicSeedAndOneField(
        pdaStaticAndDynSeedAddr
      );

    await validateAccountsClient.Instruction7SendAndConfirm(
      U8_DIN_SEED,
      pdaStaticAndDynSeedAddr,
      adminKeypair
    );
    let pdaStaticAndDynSeedAfter =
      await validateAccountsClient.fetchPDAAccountWithOneStaticAndDynamicSeedAndOneField(
        pdaStaticAndDynSeedAddr
      );
    expect(pdaStaticAndDynSeedBefore.field1.toString()).to.eq(
      pdaStaticAndDynSeedAfter.field1.toString()
    );
  });
  it("Cannot Mutate a non-mutable PDAAccountVerifiesSeedsTypes", async () => {
    let pdaVerifiesSeedsBefore =
      await validateAccountsClient.fetchPDAAccountVerifiesSeedsTypes(
        pdaVerifiesSeedsAddr
      );

    await validateAccountsClient.Instruction8SendAndConfirm(
      U8_DIN_SEED,
      U16_DIN_SEED,
      U32_DIN_SEED,
      I8_DIN_SEED,
      I16_DIN_SEED,
      I32_DIN_SEED,
      STRING_DIN_SEED,
      PUBKEY_DIN_SEED,
      pdaVerifiesSeedsAddr,
      adminKeypair
    );
    let pdaVerifiesSeedsAfter =
      await validateAccountsClient.fetchPDAAccountVerifiesSeedsTypes(
        pdaVerifiesSeedsAddr
      );
    expect(pdaVerifiesSeedsBefore.field1.toString()).to.eq(
      pdaVerifiesSeedsAfter.field1.toString()
    );
  });
  // Close accounts (Ixs 17 to 20)
  it("Closes a NonPDAAccount & sends lamports to signer if rent-receiver not specified", async () => {
    let signerBefore = await provider.connection.getBalance(
      adminKeypair.publicKey
    );

    await validateAccountsClient.Instruction17SendAndConfirm(
      nonPdaKP.publicKey,
      adminKeypair
    );
    await expect(
      validateAccountsClient.fetchNonPDAAccountWithOneField(nonPdaKP.publicKey)
    ).to.be.rejected;

    let signerAfter = await provider.connection.getBalance(
      adminKeypair.publicKey
    );
    expect(signerAfter).to.gt(signerBefore);
  });
  it("Closes a PDAAccountWithOneStaticSeedAndOneField & sends lamports to signer if rent-receiver not specified", async () => {
    let signerBefore = await provider.connection.getBalance(
      adminKeypair.publicKey
    );

    await validateAccountsClient.Instruction18SendAndConfirm(
      pdaStaticSeedAddr,
      adminKeypair
    );
    await expect(
      validateAccountsClient.fetchPDAAccountWithOneStaticSeedAndOneField(
        pdaStaticSeedAddr
      )
    ).to.be.rejected;

    let signerAfter = await provider.connection.getBalance(
      adminKeypair.publicKey
    );
    expect(signerAfter).to.gt(signerBefore);
  });
  it("Closes a PDAAccountWithOneStaticAndDynamicSeedAndOneField & sends lamports to signer if rent-receiver not specified", async () => {
    let signerBefore = await provider.connection.getBalance(
      adminKeypair.publicKey
    );

    await validateAccountsClient.Instruction19SendAndConfirm(
      U8_DIN_SEED,
      pdaStaticAndDynSeedAddr,
      adminKeypair
    );
    await expect(
      validateAccountsClient.fetchPDAAccountWithOneStaticAndDynamicSeedAndOneField(
        pdaStaticAndDynSeedAddr
      )
    ).to.be.rejected;

    let signerAfter = await provider.connection.getBalance(
      adminKeypair.publicKey
    );
    expect(signerAfter).to.gt(signerBefore);
  });
  it("Closes a PDAAccountVerifiesSeedsTypes & sends lamports to signer if rent-receiver not specified", async () => {
    let signerBefore = await provider.connection.getBalance(
      adminKeypair.publicKey
    );

    await validateAccountsClient.Instruction20SendAndConfirm(
      U8_DIN_SEED,
      U16_DIN_SEED,
      U32_DIN_SEED,
      I8_DIN_SEED,
      I16_DIN_SEED,
      I32_DIN_SEED,
      STRING_DIN_SEED,
      PUBKEY_DIN_SEED,
      pdaVerifiesSeedsAddr,
      adminKeypair
    );
    await expect(
      validateAccountsClient.fetchPDAAccountVerifiesSeedsTypes(
        pdaVerifiesSeedsAddr
      )
    ).to.be.rejected;

    let signerAfter = await provider.connection.getBalance(
      adminKeypair.publicKey
    );
    expect(signerAfter).to.gt(signerBefore);
  });
  // Init if needed (Ixs 13 to 16)
  it("Inits_if_needed a NonPDAAccount", async () => {
    await validateAccountsClient.Instruction13SendAndConfirm(
      13,
      adminKeypair,
      nonPdaKP
    );
    let nonPdaAccount =
      await validateAccountsClient.fetchNonPDAAccountWithOneField(
        nonPdaKP.publicKey
      );
    expect(nonPdaAccount.field1).to.eq(13);

    // The fn can be called even if account is already initialized
    await validateAccountsClient.Instruction13SendAndConfirm(
      26,
      adminKeypair,
      nonPdaKP
    );
    nonPdaAccount = await validateAccountsClient.fetchNonPDAAccountWithOneField(
      nonPdaKP.publicKey
    );
    expect(nonPdaAccount.field1).to.eq(26);
  });
  it("Inits_if_needed a PDAAccountWithOneStaticSeedAndOneField", async () => {
    await validateAccountsClient.Instruction14SendAndConfirm(
      14,
      pdaStaticSeedAddr,
      adminKeypair
    );
    let pdaStaticSeed =
      await validateAccountsClient.fetchPDAAccountWithOneStaticSeedAndOneField(
        pdaStaticSeedAddr
      );
    expect(pdaStaticSeed.field1).to.eq(14);

    // The fn can be called even if account is already initialized
    await validateAccountsClient.Instruction14SendAndConfirm(
      28,
      pdaStaticSeedAddr,
      adminKeypair
    );
    pdaStaticSeed =
      await validateAccountsClient.fetchPDAAccountWithOneStaticSeedAndOneField(
        pdaStaticSeedAddr
      );
    expect(pdaStaticSeed.field1).to.eq(28);
  });
  it("Inits_if_needed a PDAAccountWithOneStaticAndDynamicSeedAndOneField", async () => {
    await validateAccountsClient.Instruction15SendAndConfirm(
      15,
      U8_DIN_SEED,
      pdaStaticAndDynSeedAddr,
      adminKeypair
    );
    let pdaStaticAndDynSeed =
      await validateAccountsClient.fetchPDAAccountWithOneStaticAndDynamicSeedAndOneField(
        pdaStaticAndDynSeedAddr
      );
    expect(pdaStaticAndDynSeed.field1).to.eq(15);

    // The fn can be called even if account is already initialized
    await validateAccountsClient.Instruction15SendAndConfirm(
      30,
      U8_DIN_SEED,
      pdaStaticAndDynSeedAddr,
      adminKeypair
    );
    pdaStaticAndDynSeed =
      await validateAccountsClient.fetchPDAAccountWithOneStaticAndDynamicSeedAndOneField(
        pdaStaticAndDynSeedAddr
      );
    expect(pdaStaticAndDynSeed.field1).to.eq(30);
  });
  it("Inits_if_needed a PDAAccountVerifiesSeedsTypes", async () => {
    await validateAccountsClient.Instruction16SendAndConfirm(
      16,
      U8_DIN_SEED,
      U16_DIN_SEED,
      U32_DIN_SEED,
      I8_DIN_SEED,
      I16_DIN_SEED,
      I32_DIN_SEED,
      STRING_DIN_SEED,
      PUBKEY_DIN_SEED,
      pdaVerifiesSeedsAddr,
      adminKeypair
    );
    let pdaVerifiesSeedsTypes =
      await validateAccountsClient.fetchPDAAccountVerifiesSeedsTypes(
        pdaVerifiesSeedsAddr
      );
    expect(pdaVerifiesSeedsTypes.field1).to.eq(16);

    // The fn can be called even if account is already initialized
    await validateAccountsClient.Instruction16SendAndConfirm(
      32,
      U8_DIN_SEED,
      U16_DIN_SEED,
      U32_DIN_SEED,
      I8_DIN_SEED,
      I16_DIN_SEED,
      I32_DIN_SEED,
      STRING_DIN_SEED,
      PUBKEY_DIN_SEED,
      pdaVerifiesSeedsAddr,
      adminKeypair
    );
    pdaVerifiesSeedsTypes =
      await validateAccountsClient.fetchPDAAccountVerifiesSeedsTypes(
        pdaVerifiesSeedsAddr
      );
    expect(pdaVerifiesSeedsTypes.field1).to.eq(32);
  });
});
