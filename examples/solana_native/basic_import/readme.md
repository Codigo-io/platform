# Basic imports template

Template that includes the CIDL, and the generated code with its business logic.

Validate CPI of depth 1 using basic and advanced accounts CIDL in addition to data types.

> Prerequisite: Build and deploy the basic_accounts, advanced_cases, and data_types program.

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
solana program deploy target/deploy/validate_imports.so --program-id ../imports_kp.json
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