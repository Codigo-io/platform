# Counter template

Template that includes the CIDL, and the generated code with its business logic.

Creates an account that stores the current state of the incremented/decrement value.
Defined two methods, one for increment and another for decrement

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
