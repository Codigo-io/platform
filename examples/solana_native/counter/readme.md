# Counter template

Template that includes the CIDL, and the generated code with its business logic.

Creates an account that stores the current state of the incremented/decrement value.
Defined two methods, one for increment and another for decrement

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
solana program deploy target/deploy/counter.so --program-id ../counter_kp.josn
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