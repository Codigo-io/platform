# Expenses splitting

This program does expenses splitting on Solana. The program manages group accounts.
Anyone can create a group by providing addresses and initial balances. The group account holds balances for each of its members.
The sum of balances of a group always sum zero.
Members can log payments by providing addresses, payments and participation factors.
Group members can add and remove members.

# Program template

Template that includes the CIDL, and the generated code with its business logic.

Creates a user, and tracks the income and outcome amount per user

## Generate code

```shell
codigo solana generate cidl.yaml
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
solana program deploy target/deploy/validate_expenses_splitting.so --program-id ../expenses_splitting_kp.josn
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
