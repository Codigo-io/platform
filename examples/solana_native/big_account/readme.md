# Big account template

Template that includes the CIDL, and the generated code with its business logic.

Through this CIDL, we verify that big accounts a.k.a accounts greater than
10240 Kb are created in the client side. We also verify that accounts as big as 10Mb
are created.

## Generate code

```shell
codigo solana generate main.cidl
```

## Build contract

From within the program directory

```shell
cargo build-sbf
```

## Run solana validator

From another terminal (keep it open after running the command)

```shell
solana-test-validator
```

## Deploy to validator

From within the program directory

```shell
solana program deploy target/deploy/validate_big_account.so --program-id ../big_account_kp.json
```

## Install program client dependencies

From within the program_client directory

```shell
npm install
```

## Install ts-node for running `app.ts`

From within the program_client directory

```shell
npm install --save-dev ts-node
```

## Run client

From within the program_client directory

```shell
npx ts-node app.ts
```