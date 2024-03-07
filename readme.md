# Código Platform

Código is an AI-Powered Code Generation Platform for blockchain developers and web3 teams that saves development time and increases the code's security across various blockchains.

## Getting started

- You can immediately start using [Código Studio](https://studio.codigo.ai). Código Studio is a web-based IDE environment that comes with all the tools and programs to develop Solana programs using the CIDL.
- You can work from your local environment by downloading the latest version of the [Código CLI]([https://github.com/Codigo-io/platform/releases](https://docs.codigo.ai/getting-started/installation#código-cli)) that targets your operating system.

## CIDL Quickstart

In this Quickstart guide, you’ll learn how to start with Código’s Interface Description Language (CIDL) by building a simple Solana counter program.

> If you are following along from your local environment, this guide assumes you have successfully installed and configured the Solana tool suite. If you are working from Código Studio, you don’t need to worry; the Solana tool suite comes installed and configured.

### 1. Counter Contract
Create a `counter.yaml` file and copy and paste the following CIDL.

```yaml
cidl: "0.8"
info:
  name: counter
  title: Counter
  version: 0.0.1
  license:
    name: Unlicense
    identifier: Unlicense
types:
  GreetingAccount:
    fields:
      - name: counter
        type: u32
methods:
  - name: increment
    inputs:
      - name: greeting_account
        type: sol:account<GreetingAccount>
        attributes: [ sol:writable, sol:init_if_needed]
  - name: decrement
    inputs:
      - name: greeting_account
        type: sol:account<GreetingAccount>
        attributes: [ sol:writable, sol:init_if_needed]
```

### 2. Generate the Solana program and client library

Open the terminal and type the following command

```shell
codigo solana generate counter.yaml
```

After generating the Solana program and client library, two new directories will be created relative to the `counter.yaml` file named `program_client` and `program`.

### 3. Implement the business logic

In the `program` directory, you will find a directory called `src`; inside this directory, there will be two `.rs` files named `increment.rs` and `decrement.rs`

#### Increment business logic

Copy and paste the following code just below the comment line `// Implement your business logic here...` in the file `increment.rs`

```rust
greeting_account.data.counter += 1;
```

#### Decrement business logic

Copy and paste the following code just below the comment line `// Implement your business logic here...` in the file `decrement.rs`

```rust
greeting_account.data.counter -= 1;
```

### 4. Build and deploy the program

Open the terminal and navigate to the `program` directory, from there execute the following command:

```shell
cargo build-sbf
```

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
import {decrementSendAndConfirm, getGreetingAccount, incrementSendAndConfirm, initializeClient} from "./index";
import {Connection, Keypair, PublicKey} from "@solana/web3.js";
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";

async function main(feePayer: Keypair) {
  // TODO: Specify the smart contract Program Id we saved from when we deploy the smart contract
  const progId = new PublicKey("PASTE_YOUR_PROGRAM_ID");

  // Create a new Solana connection
  const connection = new Connection("http://127.0.0.1:8899", {
    commitment: "confirmed"
  });

  initializeClient(progId, connection);

  // 0. Create keypair for the Greeting account
  const greetingAccount = Keypair.generate();

  // 1. Increment the counter by 1
  await incrementSendAndConfirm({
    signers: {
      feePayer,
      greetingAccount
    }
  });
  let account = await getGreetingAccount(greetingAccount.publicKey);
  console.info(account);

  // 2. Decrement the count by 1
  await decrementSendAndConfirm({
    signers: {
      feePayer,
      greetingAccount
    }
  });
  account = await getGreetingAccount(greetingAccount.publicKey);
  console.info(account);
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json"))
  .then(file => main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))));
```

Open the terminal, navigate to the `program_client` directory, and execute the following commands:

```shell
npm install ts-node --save-dev
```

Finally, to run the test, execute the following command:

```shell
npx ts-node app.ts
```

After the execution completes, you should receive the following output:

```shell
{ counter: 1 }
{ counter: 0 }
```

## Next steps

**Congratulations!** 🎉👏 you just created your first Solana program using the CIDL and integrated the generated
TypeScript client library with an application. To summarize what we learned:

- CIDL stands for Código Interface Description Language, and it is the input for Código’s AI Generator.
- After completing the CIDL, developers only need to implement the business logic of the program.
- 100% of the client libraries and program boilerplate are generated.
- Código Studio has all the tools and programs to develop Solana programs using the CIDL.

These links may help you on your journey to writing Solana programs with the CIDL:

- [Overview](https://docs.codigo.ai)
- [Learning the Basics](https://docs.codigo.ai/learning-the-basics/)
- [Implementing business logic](https://docs.codigo.ai/guides/implementing-business-logic)
- [Integrating client library](https://docs.codigo.ai/guides/integrating-the-sdk)
