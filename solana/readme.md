The CIDLs present in this `solana` directory is
internalized into Código's Generator; thus, you can use any
of its instructions or types without explicitly importing them.

Check the `examples/basic_nft` for reference.

The CIDLs are prefixed with `csl_`; this stands for Código Standard Library. The purpose of this is to:

- Indicate that the CIDL is internalized into the generator.
- To avoid name clashing with possible libraries
