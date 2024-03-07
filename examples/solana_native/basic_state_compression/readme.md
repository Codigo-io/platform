# State compression template

Template that includes the CIDL, and the generated code with its business logic.

This CIDL demonstrate how to use the multiple state compression methods

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
solana-test-validator --bpf-program cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK ./programs/account_compression.so --bpf-program noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV ./programs/noop.so
```

## Deploy to validator

From within the program directory

```shell
solana program deploy target/deploy/validate_state_compression.so --program-id ../state_compression_kp.json
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