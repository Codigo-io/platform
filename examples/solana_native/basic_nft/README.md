# Código Platform

Código is an AI-Powered Code Generation Platform for blockchain developers and web3 teams that saves development time and increases the code's security across various blockchains.
## Getting started

- You can immediately start using [Código Studio](https://studio.codigo.ai). Código Studio is a web-based IDE environment that comes with all the tools and programs to develop Solana programs using the CIDL.
- You can work from your local environment by downloading the latest version of the [Código CLI](https://github.com/Codigo-io/platform/releases) that targets your operating system. After downloading, put the Código CLI in your preferred location and add this location to your environment PATH.

## CIDL Quickstart

In this Quickstart guide, you’ll learn how to start with Código’s Interface Description Language (CIDL) by building a simple Solana counter program.

> If you are following along from your local environment, this guide assumes you have successfully installed and configured the Solana tool suite. If you are working from Código Studio, you don’t need to worry; the Solana tool suite comes installed and configured. 

### 1. NFT Contract
Create a `nft.yaml` file and copy and paste the following CIDL.

```yaml
cidl: "0.8"
info:
  name: nft
  title: RiseIn NFT
  version: 0.0.1
  license:
    name: Unlicense
    identifier: Unlicense
types:
  GemMetadata:
    solana:
      seeds:
        - name: "gem"
        - name: mint
          type: sol:pubkey
    fields:
      - name: color
        type: string
        solana:
          attributes: [ cap:16 ]
      - name: rarity
        type: string
        solana:
          attributes: [ cap:16 ]
      - name: short_description
        type: string
        solana:
          attributes: [ cap:255 ]
      - name: mint
        type: sol:pubkey
      - name: assoc_account
        type: rs:option<sol:pubkey>
methods:
  - name: mint
    uses:
      - csl_spl_token.initialize_mint2
      - csl_spl_assoc_token.create
      - csl_spl_token.mint_to
      - csl_spl_token.set_authority
    inputs:
      - name: mint
        type: csl_spl_token.Mint
        solana:
          attributes: [ init ]
      - name: gem
        type: GemMetadata
        solana:
          attributes: [ init ]
          seeds:
            mint: mint
      - name: color
        type: string
      - name: rarity
        type: string
      - name: short_description
        type: string
  - name: transfer
    uses:
      - csl_spl_assoc_token.create
      - csl_spl_token.transfer_checked
    inputs:
      - name: mint
        type: csl_spl_token.Mint
      - name: gem
        type: GemMetadata
        solana:
          attributes: [ mut ]
          seeds:
            mint: mint
  - name: burn
    uses:
      - csl_spl_token.burn
    inputs:
      - name: mint
        type: csl_spl_token.Mint
      - name: gem
        type: GemMetadata
        solana:
          attributes: [ mut ]
          seeds:
            mint: mint
```

### 2. Generate the Solana program and client library

Open the terminal and type the following command

```shell
codigo solana generate nft.yaml
```

After generating the Solana program and client library, two new directories will be created relative to the `nft.yaml` file named `program_client` and `program`.

### 3. Implement the business logic

In the `program` directory, you will find a directory called `src`; inside this directory, there will be two `.rs` files named `mint.rs`, `burn.rs` and `transfer.rs`

#### Mint business logic

Copy and paste the following code just below the comment line `// Implement your business logic here...` in the file `mint.rs`

```rust
gem.data.color = color;
gem.data.rarity = rarity;
gem.data.short_description = short_description;
gem.data.mint = *mint.info.key;
gem.data.assoc_account = Some(*assoc_token_account.key);

csl_spl_token::src::cpi::initialize_mint_2(for_initialize_mint_2, 0, *wallet.key, None)?;
csl_spl_assoc_token::src::cpi::create(for_create)?;
csl_spl_token::src::cpi::mint_to(for_mint_to, 1)?;
csl_spl_token::src::cpi::set_authority(for_set_authority, 0, None)?;
```

#### Burn business logic

Copy and paste the following code just below the comment line `// Implement your business logic here...` in the file `burn.rs`

```rust
gem.data.assoc_account = None;
csl_spl_token::src::cpi::burn(for_burn, 1)?;
```

#### Transfer business logic

Copy and paste the following code just below the comment line `// Implement your business logic here...` in the file `transfer.rs`

```rust
gem.data.assoc_account = Some(*destination.key);

// Create the ATA account for new owner if it hasn't been created
if assoc_token_account.lamports() == 0 {
    csl_spl_assoc_token::src::cpi::create(for_create)?;
}

csl_spl_token::src::cpi::transfer_checked(for_transfer_checked, 1, 0)?;
```

### 4. Build and deploy the program

Open the terminal and navigate to the `program` directory, from there execute the following command:

```shell
cargo build-sbf
```
If it gives an error then run the following command:
```shell
cd program/
```
**I think this will work**

Run a local Solana validator by opening a new terminal and typing the command:

> Don’t close this terminal because it is required for the following steps

```shell
solana-test-validator
```

Deploy the program by opening a new terminal and navigating to the `program` directory; from there, execute the following command:

```shell
solana program deploy target/deploy/counter.so
```

After deploying the program, you will receive the program id; copy and paste it somewhere for later.

### 5. Test your contract

Create a new file named `app.ts` inside the directory `program_client` and copy and paste the following code into the `app.ts` file:

> Replace the “PASTE_YOUR_PROGRAM_ID” with the program id you got when deploying the Solana program.

```typescript
import {Connection, Keypair, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction,} from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import {
    burnSendAndConfirm,
    CslSplTokenPDAs,
    deriveGemMetadataPDA,
    getGemMetadata,
    initializeClient,
    mintSendAndConfirm,
    transferSendAndConfirm,
} from "./index";
import {getMinimumBalanceForRentExemptAccount, getMint, TOKEN_PROGRAM_ID,} from "@solana/spl-token";

async function main(feePayer: Keypair) {
    const args = process.argv.slice(2);
    const connection = new Connection("https://api.devnet.solana.com", {
        commitment: "confirmed",
    });

    const progId = new PublicKey(args[0]!);

    initializeClient(progId, connection);


    /**
     * Create a keypair for the mint
     */
    const mint = Keypair.generate();
    console.info("+==== Mint Address  ====+");
    console.info(mint.publicKey.toBase58());

    /**
     * Create two wallets
     */
    const johnDoeWallet = Keypair.generate();
    console.info("+==== John Doe Wallet ====+");
    console.info(johnDoeWallet.publicKey.toBase58());

    const janeDoeWallet = Keypair.generate();
    console.info("+==== Jane Doe Wallet ====+");
    console.info(janeDoeWallet.publicKey.toBase58());

    const rent = await getMinimumBalanceForRentExemptAccount(connection);
    await sendAndConfirmTransaction(
        connection,
        new Transaction()
            .add(
                SystemProgram.createAccount({
                    fromPubkey: feePayer.publicKey,
                    newAccountPubkey: johnDoeWallet.publicKey,
                    space: 0,
                    lamports: rent,
                    programId: SystemProgram.programId,
                }),
            )
            .add(
                SystemProgram.createAccount({
                    fromPubkey: feePayer.publicKey,
                    newAccountPubkey: janeDoeWallet.publicKey,
                    space: 0,
                    lamports: rent,
                    programId: SystemProgram.programId,
                }),
            ),
        [feePayer, johnDoeWallet, janeDoeWallet],
    );

    /**
     * Derive the Gem Metadata so we can retrieve it later
     */
    const [gemPub] = deriveGemMetadataPDA(
        {
            mint: mint.publicKey,
        },
        progId,
    );
    console.info("+==== Gem Metadata Address ====+");
    console.info(gemPub.toBase58());

    /**
     * Derive the John Doe's Associated Token Account, this account will be
     * holding the minted NFT.
     */
    const [johnDoeATA] = CslSplTokenPDAs.deriveAccountPDA({
        wallet: johnDoeWallet.publicKey,
        mint: mint.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
    });
    console.info("+==== John Doe ATA ====+");
    console.info(johnDoeATA.toBase58());

    /**
     * Derive the Jane Doe's Associated Token Account, this account will be
     * holding the minted NFT when John Doe transfer it
     */
    const [janeDoeATA] = CslSplTokenPDAs.deriveAccountPDA({
        wallet: janeDoeWallet.publicKey,
        mint: mint.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
    });
    console.info("+==== Jane Doe ATA ====+");
    console.info(janeDoeATA.toBase58());

    /**
     * Mint a new NFT into John's wallet (technically, the Associated Token Account)
     */
    console.info("+==== Minting... ====+");
    await mintSendAndConfirm({
        wallet: johnDoeWallet.publicKey,
        assocTokenAccount: johnDoeATA,
        color: "Purple",
        rarity: "Rare",
        shortDescription: "Only possible to collect from the lost temple event",
        signers: {
            feePayer: feePayer,
            funding: feePayer,
            mint: mint,
            owner: johnDoeWallet,
        },
    });
    console.info("+==== Minted ====+");

    /**
     * Get the minted token
     */
    let mintAccount = await getMint(connection, mint.publicKey);
    console.info("+==== Mint ====+");
    console.info(mintAccount);

    /**
     * Get the Gem Metadata
     */
    let gem = await getGemMetadata(gemPub);
    console.info("+==== Gem Metadata ====+");
    console.info(gem);
    console.assert(gem!.assocAccount!.toBase58(), johnDoeATA.toBase58());

    /**
     * Transfer John Doe's NFT to Jane Doe Wallet (technically, the Associated Token Account)
     */
    console.info("+==== Transferring... ====+");
    await transferSendAndConfirm({
        wallet: janeDoeWallet.publicKey,
        assocTokenAccount: janeDoeATA,
        mint: mint.publicKey,
        source: johnDoeATA,
        destination: janeDoeATA,
        signers: {
            feePayer: feePayer,
            funding: feePayer,
            authority: johnDoeWallet,
        },
    });
    console.info("+==== Transferred ====+");

    /**
     * Get the minted token
     */
    mintAccount = await getMint(connection, mint.publicKey);
    console.info("+==== Mint ====+");
    console.info(mintAccount);

    /**
     * Get the Gem Metadata
     */
    gem = await getGemMetadata(gemPub);
    console.info("+==== Gem Metadata ====+");
    console.info(gem);
    console.assert(gem!.assocAccount!.toBase58(), janeDoeATA.toBase58());

    /**
     * Burn the NFT
     */
    console.info("+==== Burning... ====+");
    await burnSendAndConfirm({
        mint: mint.publicKey,
        wallet: janeDoeWallet.publicKey,
        signers: {
            feePayer: feePayer,
            owner: janeDoeWallet,
        },
    });
    console.info("+==== Burned ====+");

    /**
     * Get the minted token
     */
    mintAccount = await getMint(connection, mint.publicKey);
    console.info("+==== Mint ====+");
    console.info(mintAccount);

    /**
     * Get the Gem Metadata
     */
    gem = await getGemMetadata(gemPub);
    console.info("+==== Gem Metadata ====+");
    console.info(gem);
    console.assert(typeof gem!.assocAccount, "undefined");
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json")).then((file) =>
    main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))),
);
```

Open the terminal, navigate to the `program_client` directory, and execute the following commands:

```shell
npm install ts-node --save-dev
```

Finally, to run the test, execute the following command:

```shell
npx ts-node app.ts
```

## Next steps

**Congratulations!** 🎉👏 you created your first Solana smart contract using the CIDL and integrated the generated TypeScript client library with an application. To summarize what we learned:

- CIDL stands for Código Interface Description Language, and it is the input for Código’s Generator.
- After completing the CIDL, developers only need to concentrate on implementing the business logic of the smart contract. 100% of the client libraries and smart contracts boilerplate are automatically generated.

These links may help you on your journey to writing smart contracts with the CIDL:

- [Overview](https://docs.codigo.ai/)
- [Learning the Basics](https://docs.codigo.ai/c%C3%B3digo-interface-description-language/learning-the-basics)
- [Part I - Building Solana Programs](https://docs.codigo.ai/guides/part-1-building-solana-programs)
