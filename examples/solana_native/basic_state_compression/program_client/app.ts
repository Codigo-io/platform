import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import {Connection, Keypair, PublicKey} from "@solana/web3.js";

import {
  appendArticleSendAndConfirm,
  closeEmptyTreeSendAndConfirm,
  initializeMerkleTreeSendAndConfirm,
  initializeClient,
  insertOrAppendArticleSendAndConfirm,
  onChangelog,
  replaceLeafArticleSendAndConfirm,
  StateCompressionAccountChangelog,
  transferAuthoritySendAndConfirm,
  verifyLeafArticleSendAndConfirm,
} from "./index";

import {
  MerkleTree,
  ConcurrentMerkleTreeAccount,
} from "@solana/spl-account-compression";

const MAX_DEPTH = 14;
const CANOPY_DEPTH = 6;

async function main(feePayer: Keypair) {
  const connection = new Connection("http://127.0.0.1:8899", {
    commitment: "confirmed",
  });
  const progId = new PublicKey("FGUWWHEVKi9rUqZEeNrcWSts2D9qFQnsebGVaYEABKTp");

  initializeClient(progId, connection);

  /**
   * Init Merkle Tree, Transfer Authority, Close Merkle Tree
   */
  const merkleTree = Keypair.generate();

  await initializeMerkleTreeSendAndConfirm({
    signers: {
      feePayer,
      merkleTree,
      authority: feePayer,
    },
  });

  await transferAuthoritySendAndConfirm({
    merkleTree: merkleTree.publicKey,
    newAuthority: feePayer.publicKey,
    signers: {
      feePayer,
      authority: feePayer,
    },
  });

  await closeEmptyTreeSendAndConfirm({
    merkleTree: merkleTree.publicKey,
    recipient: feePayer.publicKey,
    signers: {
      feePayer,
      authority: feePayer,
    },
  });

  /**
   * Append and Verify
   */
  await initializeMerkleTreeSendAndConfirm({
    signers: {
      feePayer,
      merkleTree,
      authority: feePayer,
    },
  });

  let appendChangeLogListener;

  const treeState: any[] = [];
  try {
    appendChangeLogListener = await onChangelog(
      merkleTree.publicKey,
      (data) => {
        const eventData = data as StateCompressionAccountChangelog;
        console.log(
          "Current tree state",
          treeState.map((item) => ({
            index: item.index,
            node: new PublicKey(item.node).toBase58(),
          }))
        );
        const leaf = eventData.path[0];
        if (leaf) {
          let leafNode = treeState.find(
            (item) => item.index === eventData.index
          );
          if (!leafNode) {
            leafNode = {node: Buffer.from(leaf.node), index: eventData.index};
            treeState.push(leafNode);
          } else {
            leafNode.node = Buffer.from(leaf.node);
          }
        }
        console.log(
          "Changed tree state",
          treeState.map((item) => ({
            index: item.index,
            node: new PublicKey(item.node).toBase58(),
          }))
        );
      }
    );

    await appendArticleSendAndConfirm({
      merkleTree: merkleTree.publicKey,
      name: "State Compression",
      description: "This is about state compresion",
      thumbnail: "image.png",
      signers: {
        feePayer,
        authority: feePayer,
      },
    });

    await delay(3000);

    await appendArticleSendAndConfirm({
      merkleTree: merkleTree.publicKey,
      name: "State Compression 2",
      description: "This is about state compresion 2",
      thumbnail: "image2.png",
      signers: {
        feePayer,
        authority: feePayer,
      },
    });

    await delay(3000);

    await appendArticleSendAndConfirm({
      merkleTree: merkleTree.publicKey,
      name: "State Compression 3",
      description: "This is about state compresion 3",
      thumbnail: "image3x.png",
      signers: {
        feePayer,
        authority: feePayer,
      },
    });

    await delay(3000);

    let tree = MerkleTree.sparseMerkleTreeFromLeaves(
      treeState.map((item) => item.node),
      MAX_DEPTH
    );

    let proof = tree.getProof(0);
    let trx = await verifyLeafArticleSendAndConfirm({
        merkleTree: merkleTree.publicKey,
        leaf: Array.from(proof.leaf),
        root: Array.from(proof.root),
        index: proof.leafIndex,
        signers: {feePayer},
      }, proof.proof
        .map((item: any) => new PublicKey(item))
        .slice(0, MAX_DEPTH - CANOPY_DEPTH)
    );
    console.log("Leaf 0 verified: ", trx);

    proof = tree.getProof(1);
    trx = await verifyLeafArticleSendAndConfirm({
        merkleTree: merkleTree.publicKey,
        leaf: Array.from(proof.leaf),
        root: Array.from(proof.root),
        index: proof.leafIndex,
        signers: {feePayer},
      }, proof.proof
        .map((item: any) => new PublicKey(item))
        .slice(0, MAX_DEPTH - CANOPY_DEPTH)
    );
    console.log("Leaf 1 verified: ", trx);

    proof = tree.getProof(2);
    trx = await verifyLeafArticleSendAndConfirm({
        merkleTree: merkleTree.publicKey,
        leaf: Array.from(proof.leaf),
        root: Array.from(proof.root),
        index: proof.leafIndex,
        signers: {feePayer},
      }, proof.proof
        .map((item: any) => new PublicKey(item))
        .slice(0, MAX_DEPTH - CANOPY_DEPTH)
    );
    console.log("Leaf 2 verified: ", trx);

    console.log("Replace Leaf At Index 1");

    proof = tree.getProof(1);

    await replaceLeafArticleSendAndConfirm({
        merkleTree: merkleTree.publicKey,
        previousLeaf: Array.from(proof.leaf),
        root: Array.from(proof.root),
        index: proof.leafIndex,
        name: "State Compression Replaced",
        description: "This is about a replacement",
        thumbnail: "replace.png",
        signers: {
          feePayer,
          authority: feePayer,
        },
      }, proof.proof
        .map((item: any) => new PublicKey(item))
        .slice(0, MAX_DEPTH - CANOPY_DEPTH)
    );

    await delay(3000);

    tree = MerkleTree.sparseMerkleTreeFromLeaves(
      treeState.map((item) => item.node),
      MAX_DEPTH
    );

    proof = tree.getProof(1);

    console.log("Verifiying");
    trx = await verifyLeafArticleSendAndConfirm({
        merkleTree: merkleTree.publicKey,
        leaf: Array.from(proof.leaf),
        root: Array.from(proof.root),
        index: proof.leafIndex,
        signers: {feePayer},
      },
      proof.proof
        .map((item: any) => new PublicKey(item))
        .slice(0, MAX_DEPTH - CANOPY_DEPTH)
    );
    console.log("Replaced leaf at Index 1 verified: ", trx);

    proof = tree.getProof(0);
    trx = await verifyLeafArticleSendAndConfirm({
        merkleTree: merkleTree.publicKey,
        leaf: Array.from(proof.leaf),
        root: Array.from(proof.root),
        index: proof.leafIndex,
        signers: {feePayer},
      }, proof.proof
        .map((item: any) => new PublicKey(item))
        .slice(0, MAX_DEPTH - CANOPY_DEPTH)
    );
    console.log("Leaf 0 verified again: ", trx);

    console.log("Insert or Append to Index 3: ");

    proof = tree.getProof(3);

    await insertOrAppendArticleSendAndConfirm({
        merkleTree: merkleTree.publicKey,
        root: Array.from(proof.root),
        index: proof.leafIndex,
        name: "State Compression InsertOrAppend",
        description: "This is about a insert_or_append",
        thumbnail: "insert_or_append.png",
        signers: {
          feePayer,
          authority: feePayer,
        },
      }, proof.proof
        .map((item: any) => new PublicKey(item))
        .slice(0, MAX_DEPTH - CANOPY_DEPTH)
    );

    await delay(3000);

    tree = MerkleTree.sparseMerkleTreeFromLeaves(
      treeState.map((item) => item.node),
      MAX_DEPTH
    );

    proof = tree.getProof(3);

    console.log("Verifiying");
    trx = await verifyLeafArticleSendAndConfirm({
        merkleTree: merkleTree.publicKey,
        leaf: Array.from(proof.leaf),
        root: Array.from(proof.root),
        index: proof.leafIndex,
        signers: {feePayer},
      }, proof.proof
        .map((item: any) => new PublicKey(item))
        .slice(0, MAX_DEPTH - CANOPY_DEPTH)
    );
    console.log("Insert or Append at Index 3 verified: ", trx);

    console.log("Get Concurrent Merke Tree Account Example");
    const concurrentMerkleTree =
      await ConcurrentMerkleTreeAccount.fromAccountAddress(
        connection,
        merkleTree.publicKey
      );
    console.log("Authority", concurrentMerkleTree.getAuthority().toBase58());
    console.log(
      "CurrentRoot",
      new PublicKey(concurrentMerkleTree.getCurrentRoot()).toBase58()
    );
    console.log("MaxDepth", concurrentMerkleTree.getMaxDepth());
    console.log("MaxBufferSize", concurrentMerkleTree.getMaxBufferSize());
    console.log("CanopyDepth", concurrentMerkleTree.getCanopyDepth());
  } catch (e) {
    console.log(e);
  } finally {
    appendChangeLogListener?.remove();
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const keyJsonFile = fs.readFileSync(
  path.join(os.homedir(), ".config/solana/id.json")
);

main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(keyJsonFile.toString()))));
