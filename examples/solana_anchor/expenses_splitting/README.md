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
codigo solana generate cidl.yaml -a
```

## Build contract

From within the program directory

```shell
anchor build
```

## Install program client dependencies

From within the program_client directory

```shell
npm install
```

## Test contract

From within the program directory

```shell
anchor test
```
