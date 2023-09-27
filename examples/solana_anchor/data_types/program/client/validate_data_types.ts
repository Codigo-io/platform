import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import IDL from "../target/idl/validate_data_types.json";
import { ValidateDataTypes } from "../target/types/validate_data_types";
const provider = anchor.AnchorProvider.env()
export const PROGRAM_PUBKEY = new anchor.web3.PublicKey("9JuUEdvxQxjKgTJ6pyoGqaYAxxeaeeFdhA4TMWzEjqhs");


const getProgram = (anchorProvider: anchor.AnchorProvider = provider) => {
	return new anchor.Program<ValidateDataTypes>(IDL as any, PROGRAM_PUBKEY, provider);
};

const toPubkey = (publicKeyOrKeypair: anchor.web3.PublicKey | anchor.web3.Keypair) : anchor.web3.PublicKey => {
	return publicKeyOrKeypair instanceof anchor.web3.Keypair ? publicKeyOrKeypair.publicKey : publicKeyOrKeypair;
}


export const program = getProgram();



export const deriveMasterTypesPDA = () : anchor.web3.PublicKey => {
	const [pubkey, bump] = anchor.web3.PublicKey.findProgramAddressSync(
		[
			Buffer.from("master_type_pda")
		],
		PROGRAM_PUBKEY
	)
	return pubkey
};

export const fetchMasterTypesNonPDA = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.masterTypesNonPda.fetch(address)
};
export const fetchMasterTypesPDA = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.masterTypesPda.fetch(address)
};

export async function Instruction1SendAndConfirm(
	u8_type : number,
	
	u16_type : number,
	
	u32_type : number,
	
	u64_type : anchor.BN,
	
	u128_type : anchor.BN,
	
	i8_type : number,
	
	i16_type : number,
	
	i32_type : number,
	
	i64_type : anchor.BN,
	
	i128_type : anchor.BN,
	
	string_type : string,
	
	bool_type : boolean,
	
	f32_type : number,
	
	f64_type : number,
	
	pubkey_type : anchor.web3.PublicKey,
	
	u8_type_option : number | undefined,
	
	u16_type_option : number | undefined,
	
	u32_type_option : number | undefined,
	
	u64_type_option : anchor.BN | undefined,
	
	u128_type_option : anchor.BN | undefined,
	
	i8_type_option : number | undefined,
	
	i16_type_option : number | undefined,
	
	i32_type_option : number | undefined,
	
	i64_type_option : anchor.BN | undefined,
	
	i128_type_option : anchor.BN | undefined,
	
	string_type_option : string | undefined,
	
	bool_type_option : boolean | undefined,
	
	f32_type_option : number | undefined,
	
	f64_type_option : number | undefined,
	
	pubkey_type_option : anchor.web3.PublicKey | undefined,
	
	u8_type_vector : Buffer,
	
	u16_type_vector : number[],
	
	u32_type_vector : number[],
	
	u64_type_vector : anchor.BN[],
	
	u128_type_vector : anchor.BN[],
	
	i8_type_vector : number[],
	
	i16_type_vector : number[],
	
	i32_type_vector : number[],
	
	i64_type_vector : anchor.BN[],
	
	i128_type_vector : anchor.BN[],
	
	bool_type_vector : boolean[],
	
	f32_type_vector : number[],
	
	f64_type_vector : number[],
	
	pubkey_type_vector : anchor.web3.PublicKey[],
	account_info_type: anchor.web3.PublicKey,
	account_info_type_mut: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	account : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction1Signers = [
		fee_payer,
		account
	];

	const instruction1AccountInputs = {
		accountInfoType: account_info_type,
		accountInfoTypeMut: account_info_type_mut,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		account: toPubkey(account),
	};

	const instruction1signerKeypairs = instruction1Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction1Builder = program.methods
	.instruction1(u8_type,u16_type,u32_type,u64_type,u128_type,i8_type,i16_type,i32_type,i64_type,i128_type,string_type,bool_type,f32_type,f64_type,pubkey_type,u8_type_option,u16_type_option,u32_type_option,u64_type_option,u128_type_option,i8_type_option,i16_type_option,i32_type_option,i64_type_option,i128_type_option,string_type_option,bool_type_option,f32_type_option,f64_type_option,pubkey_type_option,u8_type_vector,u16_type_vector,u32_type_vector,u64_type_vector,u128_type_vector,i8_type_vector,i16_type_vector,i32_type_vector,i64_type_vector,i128_type_vector,bool_type_vector,f32_type_vector,f64_type_vector,pubkey_type_vector)
	.accounts(instruction1AccountInputs);
	if (instruction1signerKeypairs.length > 0) {
		instruction1Builder.signers(instruction1signerKeypairs);
	}
	return instruction1Builder.rpc();
}

export function Instruction1(
	u8_type : number,
	
	u16_type : number,
	
	u32_type : number,
	
	u64_type : anchor.BN,
	
	u128_type : anchor.BN,
	
	i8_type : number,
	
	i16_type : number,
	
	i32_type : number,
	
	i64_type : anchor.BN,
	
	i128_type : anchor.BN,
	
	string_type : string,
	
	bool_type : boolean,
	
	f32_type : number,
	
	f64_type : number,
	
	pubkey_type : anchor.web3.PublicKey,
	
	u8_type_option : number | undefined,
	
	u16_type_option : number | undefined,
	
	u32_type_option : number | undefined,
	
	u64_type_option : anchor.BN | undefined,
	
	u128_type_option : anchor.BN | undefined,
	
	i8_type_option : number | undefined,
	
	i16_type_option : number | undefined,
	
	i32_type_option : number | undefined,
	
	i64_type_option : anchor.BN | undefined,
	
	i128_type_option : anchor.BN | undefined,
	
	string_type_option : string | undefined,
	
	bool_type_option : boolean | undefined,
	
	f32_type_option : number | undefined,
	
	f64_type_option : number | undefined,
	
	pubkey_type_option : anchor.web3.PublicKey | undefined,
	
	u8_type_vector : Buffer,
	
	u16_type_vector : number[],
	
	u32_type_vector : number[],
	
	u64_type_vector : anchor.BN[],
	
	u128_type_vector : anchor.BN[],
	
	i8_type_vector : number[],
	
	i16_type_vector : number[],
	
	i32_type_vector : number[],
	
	i64_type_vector : anchor.BN[],
	
	i128_type_vector : anchor.BN[],
	
	bool_type_vector : boolean[],
	
	f32_type_vector : number[],
	
	f64_type_vector : number[],
	
	pubkey_type_vector : anchor.web3.PublicKey[],
	account_info_type: anchor.web3.PublicKey,
	account_info_type_mut: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	account : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction1AccountInputs = {
		accountInfoType: account_info_type,
		accountInfoTypeMut: account_info_type_mut,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		account: toPubkey(account),
	};

	return program.methods
	.instruction1(u8_type,u16_type,u32_type,u64_type,u128_type,i8_type,i16_type,i32_type,i64_type,i128_type,string_type,bool_type,f32_type,f64_type,pubkey_type,u8_type_option,u16_type_option,u32_type_option,u64_type_option,u128_type_option,i8_type_option,i16_type_option,i32_type_option,i64_type_option,i128_type_option,string_type_option,bool_type_option,f32_type_option,f64_type_option,pubkey_type_option,u8_type_vector,u16_type_vector,u32_type_vector,u64_type_vector,u128_type_vector,i8_type_vector,i16_type_vector,i32_type_vector,i64_type_vector,i128_type_vector,bool_type_vector,f32_type_vector,f64_type_vector,pubkey_type_vector)
	.accounts(instruction1AccountInputs)
	.instruction();
}


export async function Instruction2SendAndConfirm(
	u8_type : number,
	
	u16_type : number,
	
	u32_type : number,
	
	u64_type : anchor.BN,
	
	u128_type : anchor.BN,
	
	i8_type : number,
	
	i16_type : number,
	
	i32_type : number,
	
	i64_type : anchor.BN,
	
	i128_type : anchor.BN,
	
	string_type : string,
	
	bool_type : boolean,
	
	f32_type : number,
	
	f64_type : number,
	
	pubkey_type : anchor.web3.PublicKey,
	
	u8_type_option : number | undefined,
	
	u16_type_option : number | undefined,
	
	u32_type_option : number | undefined,
	
	u64_type_option : anchor.BN | undefined,
	
	u128_type_option : anchor.BN | undefined,
	
	i8_type_option : number | undefined,
	
	i16_type_option : number | undefined,
	
	i32_type_option : number | undefined,
	
	i64_type_option : anchor.BN | undefined,
	
	i128_type_option : anchor.BN | undefined,
	
	string_type_option : string | undefined,
	
	bool_type_option : boolean | undefined,
	
	f32_type_option : number | undefined,
	
	f64_type_option : number | undefined,
	
	pubkey_type_option : anchor.web3.PublicKey | undefined,
	
	u8_type_vector : Buffer,
	
	u16_type_vector : number[],
	
	u32_type_vector : number[],
	
	u64_type_vector : anchor.BN[],
	
	u128_type_vector : anchor.BN[],
	
	i8_type_vector : number[],
	
	i16_type_vector : number[],
	
	i32_type_vector : number[],
	
	i64_type_vector : anchor.BN[],
	
	i128_type_vector : anchor.BN[],
	
	bool_type_vector : boolean[],
	
	f32_type_vector : number[],
	
	f64_type_vector : number[],
	
	pubkey_type_vector : anchor.web3.PublicKey[],
	account: anchor.web3.PublicKey,
	account_info_type: anchor.web3.PublicKey,
	account_info_type_mut: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction2Signers = [
		fee_payer
	];

	const instruction2AccountInputs = {
		account: account,
		accountInfoType: account_info_type,
		accountInfoTypeMut: account_info_type_mut,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	const instruction2signerKeypairs = instruction2Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction2Builder = program.methods
	.instruction2(u8_type,u16_type,u32_type,u64_type,u128_type,i8_type,i16_type,i32_type,i64_type,i128_type,string_type,bool_type,f32_type,f64_type,pubkey_type,u8_type_option,u16_type_option,u32_type_option,u64_type_option,u128_type_option,i8_type_option,i16_type_option,i32_type_option,i64_type_option,i128_type_option,string_type_option,bool_type_option,f32_type_option,f64_type_option,pubkey_type_option,u8_type_vector,u16_type_vector,u32_type_vector,u64_type_vector,u128_type_vector,i8_type_vector,i16_type_vector,i32_type_vector,i64_type_vector,i128_type_vector,bool_type_vector,f32_type_vector,f64_type_vector,pubkey_type_vector)
	.accounts(instruction2AccountInputs);
	if (instruction2signerKeypairs.length > 0) {
		instruction2Builder.signers(instruction2signerKeypairs);
	}
	return instruction2Builder.rpc();
}

export function Instruction2(
	u8_type : number,
	
	u16_type : number,
	
	u32_type : number,
	
	u64_type : anchor.BN,
	
	u128_type : anchor.BN,
	
	i8_type : number,
	
	i16_type : number,
	
	i32_type : number,
	
	i64_type : anchor.BN,
	
	i128_type : anchor.BN,
	
	string_type : string,
	
	bool_type : boolean,
	
	f32_type : number,
	
	f64_type : number,
	
	pubkey_type : anchor.web3.PublicKey,
	
	u8_type_option : number | undefined,
	
	u16_type_option : number | undefined,
	
	u32_type_option : number | undefined,
	
	u64_type_option : anchor.BN | undefined,
	
	u128_type_option : anchor.BN | undefined,
	
	i8_type_option : number | undefined,
	
	i16_type_option : number | undefined,
	
	i32_type_option : number | undefined,
	
	i64_type_option : anchor.BN | undefined,
	
	i128_type_option : anchor.BN | undefined,
	
	string_type_option : string | undefined,
	
	bool_type_option : boolean | undefined,
	
	f32_type_option : number | undefined,
	
	f64_type_option : number | undefined,
	
	pubkey_type_option : anchor.web3.PublicKey | undefined,
	
	u8_type_vector : Buffer,
	
	u16_type_vector : number[],
	
	u32_type_vector : number[],
	
	u64_type_vector : anchor.BN[],
	
	u128_type_vector : anchor.BN[],
	
	i8_type_vector : number[],
	
	i16_type_vector : number[],
	
	i32_type_vector : number[],
	
	i64_type_vector : anchor.BN[],
	
	i128_type_vector : anchor.BN[],
	
	bool_type_vector : boolean[],
	
	f32_type_vector : number[],
	
	f64_type_vector : number[],
	
	pubkey_type_vector : anchor.web3.PublicKey[],
	account: anchor.web3.PublicKey,
	account_info_type: anchor.web3.PublicKey,
	account_info_type_mut: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction2AccountInputs = {
		account: account,
		accountInfoType: account_info_type,
		accountInfoTypeMut: account_info_type_mut,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction2(u8_type,u16_type,u32_type,u64_type,u128_type,i8_type,i16_type,i32_type,i64_type,i128_type,string_type,bool_type,f32_type,f64_type,pubkey_type,u8_type_option,u16_type_option,u32_type_option,u64_type_option,u128_type_option,i8_type_option,i16_type_option,i32_type_option,i64_type_option,i128_type_option,string_type_option,bool_type_option,f32_type_option,f64_type_option,pubkey_type_option,u8_type_vector,u16_type_vector,u32_type_vector,u64_type_vector,u128_type_vector,i8_type_vector,i16_type_vector,i32_type_vector,i64_type_vector,i128_type_vector,bool_type_vector,f32_type_vector,f64_type_vector,pubkey_type_vector)
	.accounts(instruction2AccountInputs)
	.instruction();
}

