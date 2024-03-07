# Big account template

Template that includes the CIDL, and the generated code with its business logic.

Through this CIDL, we verify that big accounts a.k.a accounts greater than
10240 Kb are created in the client side. We also verify that accounts as big as 10Mb
are created.

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
