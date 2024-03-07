# Advanced account attributes & signers template

Template that includes the CIDL, and the generated code with its business logic.

Validates the advanced accounts attributes in simple scenarios, and multiple signers

## Generate code

```shell
codigo solana generate main.cidl -a
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
