import {Connection, Keypair, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction,} from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import {
  assignWarehouseDelegateSendAndConfirm,
  createArticleSendAndConfirm,
  createWarehouseSendAndConfirm,
  deriveUniquePerUserPDA,
  getWarehouse,
  initializeClient,
  initializeMerkleTreeSendAndConfirm,
  onApplicationData,
  StateCompressionAccountApplicationData,
} from "./index";

async function main(feePayer: Keypair) {
  const connection = new Connection("http://127.0.0.1:8899", {
    commitment: "confirmed",
  });
  const progId = new PublicKey("GUXNGZ3swXnZgWAQ3eCdZAdFaJ8GUuU2bsaCHDbndnST");

  initializeClient(progId, connection);

  /**
   * Create wallets to represents numerous users
   */
  const owner = Keypair.generate();
  const delegate1 = Keypair.generate();
  const delegate2 = Keypair.generate();

  const rent = await connection.getMinimumBalanceForRentExemption(0);
  await sendAndConfirmTransaction(
    connection,
    new Transaction()
      .add(
        SystemProgram.createAccount({
          fromPubkey: feePayer.publicKey,
          newAccountPubkey: owner.publicKey,
          space: 0,
          lamports: rent,
          programId: SystemProgram.programId,
        })
      )
      .add(
        SystemProgram.createAccount({
          fromPubkey: feePayer.publicKey,
          newAccountPubkey: delegate1.publicKey,
          space: 0,
          lamports: rent,
          programId: SystemProgram.programId,
        })
      )
      .add(
        SystemProgram.createAccount({
          fromPubkey: feePayer.publicKey,
          newAccountPubkey: delegate2.publicKey,
          space: 0,
          lamports: rent,
          programId: SystemProgram.programId,
        })
      ),
    [feePayer, owner, delegate1, delegate2]
  );

  /**
   * Create a warehouse
   */
  const [receptionWarehousePk] = deriveUniquePerUserPDA(
    {
      owner: owner.publicKey,
    },
    progId
  );
  await createWarehouseSendAndConfirm({
    name: "Reception",
    description: "Warehouse to receive imported articles",
    signers: {
      feePayer,
      owner,
    },
  });
  let warehouse = await getWarehouse(receptionWarehousePk);
  console.log(warehouse);

  /**
   * Assign employees to the warehouse
   */
  await assignWarehouseDelegateSendAndConfirm({
    delegate: delegate1.publicKey,
    signers: {
      feePayer,
      owner,
    },
  });
  warehouse = await getWarehouse(receptionWarehousePk);
  console.log(warehouse);

  await assignWarehouseDelegateSendAndConfirm({
    delegate: delegate2.publicKey,
    signers: {
      feePayer,
      owner,
    },
  });
  warehouse = await getWarehouse(receptionWarehousePk);
  console.log(warehouse);

  /**
   * Start websocket to index compress data
   */
  let listener: { remove: () => void } | undefined = undefined;

  try {
    const merkleTree = Keypair.generate();
    await initializeMerkleTreeSendAndConfirm({
      signers: {
        feePayer,
        merkleTree,
        authority: feePayer
      }
    })
    listener = await onApplicationData(
      merkleTree.publicKey,
      (event) => {
        const article = ((event as StateCompressionAccountApplicationData).data);
        try {
          console.log({
            ...article,
            mint: new PublicKey(article.mint).toBase58(),
            owner: new PublicKey(article.owner).toBase58(),
            current_warehouse: article.current_warehouse ? new PublicKey(article.current_warehouse).toBase58() : undefined
          });
        } catch (e) {
          listener?.remove();
          console.error(e)
          process.exit(1)
        }
      }
    );

    /**
     * Create Article
     */
    for (let i = 0; i < 10; i++) {
      await createArticle(
        feePayer,
        merkleTree,
        owner,
        delegate1,
        "Article " + (i + 1),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "https://picsum.photos/200"
      );
    }

    await delay(5000);
  } finally {
    listener?.remove();
  }
}

async function createArticle(
  feePayer: Keypair,
  merkleTree: Keypair,
  owner: Keypair,
  delegate: Keypair,
  name: string,
  description: string,
  thumbnail: string,
): Promise<void> {
  const mint = Keypair.generate();
  await createArticleSendAndConfirm({
    name: name,
    description: description,
    thumbnail: thumbnail,
    merkleTree: merkleTree.publicKey,
    wallet: owner.publicKey,
    signers: {
      feePayer,
      owner,
      mint,
      authority: feePayer,
      funding: feePayer,
      delegate: delegate,
    },
  });
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json")).then((file) =>
  main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString()))))
);
