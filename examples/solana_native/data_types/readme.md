# Data types template

Template that includes the CIDL, and the generated code with its business logic.

CIDL to validate all the supported data types

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
solana program deploy target/deploy/validate_data_types.so --program-id ../data_types_kp.josn
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