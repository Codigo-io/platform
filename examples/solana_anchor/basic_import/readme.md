# Basic imports template

Template that includes the CIDL, and the generated code with its business logic.

Validate CPI of depth 1 using basic and advanced accounts CIDL in addition to data types.

> Prerequisite: Build and deploy the basic_accounts, advanced_accounts, and data_types program.

## Generate code

```shell
codigo solana generate main.cidl -a
```

## Build contract

From within the program directory

```shell
anchor build
```

## Run solana validator

From another terminal (keep it open after running the command)

```shell
solana-test-validator
```

## Deploy contract

From within the program directory

```shell
anchor deploy
```

## Install program client dependencies

From within the program_client directory

```shell
npm install
```

## Test contract

From within the program directory

```shell
anchor test --skip-build --skip-deploy --skip-local-validator
```
