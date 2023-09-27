import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import IDL from "../target/idl/validate_accounts.json";
import { ValidateAccounts } from "../target/types/validate_accounts";
const provider = anchor.AnchorProvider.env()
export const PROGRAM_PUBKEY = new anchor.web3.PublicKey("3PLVX53o6MmevYQZhYKJ2FJwLsv1FbM9tDgC24hegjmm");


const getProgram = (anchorProvider: anchor.AnchorProvider = provider) => {
	return new anchor.Program<ValidateAccounts>(IDL as any, PROGRAM_PUBKEY, provider);
};

const toPubkey = (publicKeyOrKeypair: anchor.web3.PublicKey | anchor.web3.Keypair) : anchor.web3.PublicKey => {
	return publicKeyOrKeypair instanceof anchor.web3.Keypair ? publicKeyOrKeypair.publicKey : publicKeyOrKeypair;
}


export const program = getProgram();



export interface PDAAccountWithOneStaticAndDynamicSeedAndOneFieldSeeds {
	dynamic : number
};

export interface PDAAccountVerifiesSeedsTypesSeeds {
	u8_type : number,
	u16_type : number,
	u32_type : number,
	i8_type : number,
	i16_type : number,
	i32_type : number,
	string_type : string,
	pubkey_type : anchor.web3.Keypair | anchor.web3.PublicKey
};

export const derivePDAAccountWithOneStaticSeedAndOneField = () : anchor.web3.PublicKey => {
	const [pubkey, bump] = anchor.web3.PublicKey.findProgramAddressSync(
		[
			Buffer.from("Static Value")
		],
		PROGRAM_PUBKEY
	)
	return pubkey
};

export const derivePDAAccountWithOneStaticAndDynamicSeedAndOneField = (
	seeds : PDAAccountWithOneStaticAndDynamicSeedAndOneFieldSeeds) : anchor.web3.PublicKey => {
	const [pubkey, bump] = anchor.web3.PublicKey.findProgramAddressSync(
		[
			Buffer.from("Static Value"),
			Buffer.from([seeds.dynamic])
		],
		PROGRAM_PUBKEY
	)
	return pubkey
};

export const derivePDAAccountVerifiesSeedsTypes = (
	seeds : PDAAccountVerifiesSeedsTypesSeeds) : anchor.web3.PublicKey => {
	const [pubkey, bump] = anchor.web3.PublicKey.findProgramAddressSync(
		[
			Buffer.from([seeds.u8_type]),
			Buffer.from(Uint16Array.from([seeds.u16_type]).buffer),
			Buffer.from(Uint32Array.from([seeds.u32_type]).buffer),
			Buffer.from(Int8Array.from([seeds.i8_type]).buffer),
			Buffer.from(Int16Array.from([seeds.i16_type]).buffer),
			Buffer.from(Int32Array.from([seeds.i32_type]).buffer),
			Buffer.from(seeds.string_type, 'utf8'),
			toPubkey(seeds.pubkey_type).toBuffer()
		],
		PROGRAM_PUBKEY
	)
	return pubkey
};

export const fetchNonPDAAccountWithOneField = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.nonPdaAccountWithOneField.fetch(address)
};
export const fetchPDAAccountWithOneStaticSeedAndOneField = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.pdaAccountWithOneStaticSeedAndOneField.fetch(address)
};
export const fetchPDAAccountWithOneStaticAndDynamicSeedAndOneField = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.pdaAccountWithOneStaticAndDynamicSeedAndOneField.fetch(address)
};
export const fetchPDAAccountVerifiesSeedsTypes = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.pdaAccountVerifiesSeedsTypes.fetch(address)
};

export async function Instruction1SendAndConfirm(
	input_1 : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction1Signers = [
		fee_payer
	];

	const instruction1AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction1signerKeypairs = instruction1Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction1Builder = program.methods
	.instruction1(input_1)
	.accounts(instruction1AccountInputs);
	if (instruction1signerKeypairs.length > 0) {
		instruction1Builder.signers(instruction1signerKeypairs);
	}
	return instruction1Builder.rpc();
}

export function Instruction1(
	input_1 : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction1AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction1(input_1)
	.accounts(instruction1AccountInputs)
	.instruction();
}


export async function Instruction2SendAndConfirm(
	input_1 : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction2Signers = [
		fee_payer
	];

	const instruction2AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction2signerKeypairs = instruction2Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction2Builder = program.methods
	.instruction2(input_1)
	.accounts(instruction2AccountInputs);
	if (instruction2signerKeypairs.length > 0) {
		instruction2Builder.signers(instruction2signerKeypairs);
	}
	return instruction2Builder.rpc();
}

export function Instruction2(
	input_1 : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction2AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction2(input_1)
	.accounts(instruction2AccountInputs)
	.instruction();
}


export async function Instruction3SendAndConfirm(
	input_1 : number,
	
	account_seed_dynamic : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction3Signers = [
		fee_payer
	];

	const instruction3AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction3signerKeypairs = instruction3Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction3Builder = program.methods
	.instruction3(input_1,account_seed_dynamic)
	.accounts(instruction3AccountInputs);
	if (instruction3signerKeypairs.length > 0) {
		instruction3Builder.signers(instruction3signerKeypairs);
	}
	return instruction3Builder.rpc();
}

export function Instruction3(
	input_1 : number,
	
	account_seed_dynamic : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction3AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction3(input_1,account_seed_dynamic)
	.accounts(instruction3AccountInputs)
	.instruction();
}


export async function Instruction4SendAndConfirm(
	input_1 : number,
	
	account_seed_u_8_type : number,
	
	account_seed_u_16_type : number,
	
	account_seed_u_32_type : number,
	
	account_seed_i_8_type : number,
	
	account_seed_i_16_type : number,
	
	account_seed_i_32_type : number,
	
	account_seed_string_type : string,
	
	account_seed_pubkey_type : anchor.web3.PublicKey,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction4Signers = [
		fee_payer
	];

	const instruction4AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction4signerKeypairs = instruction4Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction4Builder = program.methods
	.instruction4(input_1,account_seed_u_8_type,account_seed_u_16_type,account_seed_u_32_type,account_seed_i_8_type,account_seed_i_16_type,account_seed_i_32_type,account_seed_string_type,account_seed_pubkey_type)
	.accounts(instruction4AccountInputs);
	if (instruction4signerKeypairs.length > 0) {
		instruction4Builder.signers(instruction4signerKeypairs);
	}
	return instruction4Builder.rpc();
}

export function Instruction4(
	input_1 : number,
	
	account_seed_u_8_type : number,
	
	account_seed_u_16_type : number,
	
	account_seed_u_32_type : number,
	
	account_seed_i_8_type : number,
	
	account_seed_i_16_type : number,
	
	account_seed_i_32_type : number,
	
	account_seed_string_type : string,
	
	account_seed_pubkey_type : anchor.web3.PublicKey,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction4AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction4(input_1,account_seed_u_8_type,account_seed_u_16_type,account_seed_u_32_type,account_seed_i_8_type,account_seed_i_16_type,account_seed_i_32_type,account_seed_string_type,account_seed_pubkey_type)
	.accounts(instruction4AccountInputs)
	.instruction();
}


export async function Instruction5SendAndConfirm(account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction5Signers = [
		fee_payer
	];

	const instruction5AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction5signerKeypairs = instruction5Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction5Builder = program.methods
	.instruction5()
	.accounts(instruction5AccountInputs);
	if (instruction5signerKeypairs.length > 0) {
		instruction5Builder.signers(instruction5signerKeypairs);
	}
	return instruction5Builder.rpc();
}

export function Instruction5(account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction5AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction5()
	.accounts(instruction5AccountInputs)
	.instruction();
}


export async function Instruction6SendAndConfirm(account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction6Signers = [
		fee_payer
	];

	const instruction6AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction6signerKeypairs = instruction6Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction6Builder = program.methods
	.instruction6()
	.accounts(instruction6AccountInputs);
	if (instruction6signerKeypairs.length > 0) {
		instruction6Builder.signers(instruction6signerKeypairs);
	}
	return instruction6Builder.rpc();
}

export function Instruction6(account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction6AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction6()
	.accounts(instruction6AccountInputs)
	.instruction();
}


export async function Instruction7SendAndConfirm(
	account_seed_dynamic : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction7Signers = [
		fee_payer
	];

	const instruction7AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction7signerKeypairs = instruction7Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction7Builder = program.methods
	.instruction7(account_seed_dynamic)
	.accounts(instruction7AccountInputs);
	if (instruction7signerKeypairs.length > 0) {
		instruction7Builder.signers(instruction7signerKeypairs);
	}
	return instruction7Builder.rpc();
}

export function Instruction7(
	account_seed_dynamic : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction7AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction7(account_seed_dynamic)
	.accounts(instruction7AccountInputs)
	.instruction();
}


export async function Instruction8SendAndConfirm(
	account_seed_u_8_type : number,
	
	account_seed_u_16_type : number,
	
	account_seed_u_32_type : number,
	
	account_seed_i_8_type : number,
	
	account_seed_i_16_type : number,
	
	account_seed_i_32_type : number,
	
	account_seed_string_type : string,
	
	account_seed_pubkey_type : anchor.web3.PublicKey,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction8Signers = [
		fee_payer
	];

	const instruction8AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction8signerKeypairs = instruction8Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction8Builder = program.methods
	.instruction8(account_seed_u_8_type,account_seed_u_16_type,account_seed_u_32_type,account_seed_i_8_type,account_seed_i_16_type,account_seed_i_32_type,account_seed_string_type,account_seed_pubkey_type)
	.accounts(instruction8AccountInputs);
	if (instruction8signerKeypairs.length > 0) {
		instruction8Builder.signers(instruction8signerKeypairs);
	}
	return instruction8Builder.rpc();
}

export function Instruction8(
	account_seed_u_8_type : number,
	
	account_seed_u_16_type : number,
	
	account_seed_u_32_type : number,
	
	account_seed_i_8_type : number,
	
	account_seed_i_16_type : number,
	
	account_seed_i_32_type : number,
	
	account_seed_string_type : string,
	
	account_seed_pubkey_type : anchor.web3.PublicKey,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction8AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction8(account_seed_u_8_type,account_seed_u_16_type,account_seed_u_32_type,account_seed_i_8_type,account_seed_i_16_type,account_seed_i_32_type,account_seed_string_type,account_seed_pubkey_type)
	.accounts(instruction8AccountInputs)
	.instruction();
}


export async function Instruction9SendAndConfirm(
	input_1 : number,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	account : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction9Signers = [
		fee_payer,
		account
	];

	const instruction9AccountInputs = {
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		account: toPubkey(account),
	};

	const instruction9signerKeypairs = instruction9Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction9Builder = program.methods
	.instruction9(input_1)
	.accounts(instruction9AccountInputs);
	if (instruction9signerKeypairs.length > 0) {
		instruction9Builder.signers(instruction9signerKeypairs);
	}
	return instruction9Builder.rpc();
}

export function Instruction9(
	input_1 : number,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	account : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction9AccountInputs = {
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		account: toPubkey(account),
	};

	return program.methods
	.instruction9(input_1)
	.accounts(instruction9AccountInputs)
	.instruction();
}


export async function Instruction10SendAndConfirm(
	input_1 : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction10Signers = [
		fee_payer
	];

	const instruction10AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	const instruction10signerKeypairs = instruction10Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction10Builder = program.methods
	.instruction10(input_1)
	.accounts(instruction10AccountInputs);
	if (instruction10signerKeypairs.length > 0) {
		instruction10Builder.signers(instruction10signerKeypairs);
	}
	return instruction10Builder.rpc();
}

export function Instruction10(
	input_1 : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction10AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction10(input_1)
	.accounts(instruction10AccountInputs)
	.instruction();
}


export async function Instruction11SendAndConfirm(
	input_1 : number,
	
	account_seed_dynamic : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction11Signers = [
		fee_payer
	];

	const instruction11AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	const instruction11signerKeypairs = instruction11Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction11Builder = program.methods
	.instruction11(input_1,account_seed_dynamic)
	.accounts(instruction11AccountInputs);
	if (instruction11signerKeypairs.length > 0) {
		instruction11Builder.signers(instruction11signerKeypairs);
	}
	return instruction11Builder.rpc();
}

export function Instruction11(
	input_1 : number,
	
	account_seed_dynamic : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction11AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction11(input_1,account_seed_dynamic)
	.accounts(instruction11AccountInputs)
	.instruction();
}


export async function Instruction12SendAndConfirm(
	input_1 : number,
	
	account_seed_u_8_type : number,
	
	account_seed_u_16_type : number,
	
	account_seed_u_32_type : number,
	
	account_seed_i_8_type : number,
	
	account_seed_i_16_type : number,
	
	account_seed_i_32_type : number,
	
	account_seed_string_type : string,
	
	account_seed_pubkey_type : anchor.web3.PublicKey,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction12Signers = [
		fee_payer
	];

	const instruction12AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	const instruction12signerKeypairs = instruction12Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction12Builder = program.methods
	.instruction12(input_1,account_seed_u_8_type,account_seed_u_16_type,account_seed_u_32_type,account_seed_i_8_type,account_seed_i_16_type,account_seed_i_32_type,account_seed_string_type,account_seed_pubkey_type)
	.accounts(instruction12AccountInputs);
	if (instruction12signerKeypairs.length > 0) {
		instruction12Builder.signers(instruction12signerKeypairs);
	}
	return instruction12Builder.rpc();
}

export function Instruction12(
	input_1 : number,
	
	account_seed_u_8_type : number,
	
	account_seed_u_16_type : number,
	
	account_seed_u_32_type : number,
	
	account_seed_i_8_type : number,
	
	account_seed_i_16_type : number,
	
	account_seed_i_32_type : number,
	
	account_seed_string_type : string,
	
	account_seed_pubkey_type : anchor.web3.PublicKey,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction12AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction12(input_1,account_seed_u_8_type,account_seed_u_16_type,account_seed_u_32_type,account_seed_i_8_type,account_seed_i_16_type,account_seed_i_32_type,account_seed_string_type,account_seed_pubkey_type)
	.accounts(instruction12AccountInputs)
	.instruction();
}


export async function Instruction13SendAndConfirm(
	input_1 : number,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	account : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction13Signers = [
		fee_payer,
		account
	];

	const instruction13AccountInputs = {
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		account: toPubkey(account),
	};

	const instruction13signerKeypairs = instruction13Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction13Builder = program.methods
	.instruction13(input_1)
	.accounts(instruction13AccountInputs);
	if (instruction13signerKeypairs.length > 0) {
		instruction13Builder.signers(instruction13signerKeypairs);
	}
	return instruction13Builder.rpc();
}

export function Instruction13(
	input_1 : number,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	account : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction13AccountInputs = {
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		account: toPubkey(account),
	};

	return program.methods
	.instruction13(input_1)
	.accounts(instruction13AccountInputs)
	.instruction();
}


export async function Instruction14SendAndConfirm(
	input_1 : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction14Signers = [
		fee_payer
	];

	const instruction14AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	const instruction14signerKeypairs = instruction14Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction14Builder = program.methods
	.instruction14(input_1)
	.accounts(instruction14AccountInputs);
	if (instruction14signerKeypairs.length > 0) {
		instruction14Builder.signers(instruction14signerKeypairs);
	}
	return instruction14Builder.rpc();
}

export function Instruction14(
	input_1 : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction14AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction14(input_1)
	.accounts(instruction14AccountInputs)
	.instruction();
}


export async function Instruction15SendAndConfirm(
	input_1 : number,
	
	account_seed_dynamic : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction15Signers = [
		fee_payer
	];

	const instruction15AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	const instruction15signerKeypairs = instruction15Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction15Builder = program.methods
	.instruction15(input_1,account_seed_dynamic)
	.accounts(instruction15AccountInputs);
	if (instruction15signerKeypairs.length > 0) {
		instruction15Builder.signers(instruction15signerKeypairs);
	}
	return instruction15Builder.rpc();
}

export function Instruction15(
	input_1 : number,
	
	account_seed_dynamic : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction15AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction15(input_1,account_seed_dynamic)
	.accounts(instruction15AccountInputs)
	.instruction();
}


export async function Instruction16SendAndConfirm(
	input_1 : number,
	
	account_seed_u_8_type : number,
	
	account_seed_u_16_type : number,
	
	account_seed_u_32_type : number,
	
	account_seed_i_8_type : number,
	
	account_seed_i_16_type : number,
	
	account_seed_i_32_type : number,
	
	account_seed_string_type : string,
	
	account_seed_pubkey_type : anchor.web3.PublicKey,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction16Signers = [
		fee_payer
	];

	const instruction16AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	const instruction16signerKeypairs = instruction16Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction16Builder = program.methods
	.instruction16(input_1,account_seed_u_8_type,account_seed_u_16_type,account_seed_u_32_type,account_seed_i_8_type,account_seed_i_16_type,account_seed_i_32_type,account_seed_string_type,account_seed_pubkey_type)
	.accounts(instruction16AccountInputs);
	if (instruction16signerKeypairs.length > 0) {
		instruction16Builder.signers(instruction16signerKeypairs);
	}
	return instruction16Builder.rpc();
}

export function Instruction16(
	input_1 : number,
	
	account_seed_u_8_type : number,
	
	account_seed_u_16_type : number,
	
	account_seed_u_32_type : number,
	
	account_seed_i_8_type : number,
	
	account_seed_i_16_type : number,
	
	account_seed_i_32_type : number,
	
	account_seed_string_type : string,
	
	account_seed_pubkey_type : anchor.web3.PublicKey,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction16AccountInputs = {
		account: account,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction16(input_1,account_seed_u_8_type,account_seed_u_16_type,account_seed_u_32_type,account_seed_i_8_type,account_seed_i_16_type,account_seed_i_32_type,account_seed_string_type,account_seed_pubkey_type)
	.accounts(instruction16AccountInputs)
	.instruction();
}


export async function Instruction17SendAndConfirm(account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction17Signers = [
		fee_payer
	];

	const instruction17AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction17signerKeypairs = instruction17Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction17Builder = program.methods
	.instruction17()
	.accounts(instruction17AccountInputs);
	if (instruction17signerKeypairs.length > 0) {
		instruction17Builder.signers(instruction17signerKeypairs);
	}
	return instruction17Builder.rpc();
}

export function Instruction17(account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction17AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction17()
	.accounts(instruction17AccountInputs)
	.instruction();
}


export async function Instruction18SendAndConfirm(account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction18Signers = [
		fee_payer
	];

	const instruction18AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction18signerKeypairs = instruction18Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction18Builder = program.methods
	.instruction18()
	.accounts(instruction18AccountInputs);
	if (instruction18signerKeypairs.length > 0) {
		instruction18Builder.signers(instruction18signerKeypairs);
	}
	return instruction18Builder.rpc();
}

export function Instruction18(account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction18AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction18()
	.accounts(instruction18AccountInputs)
	.instruction();
}


export async function Instruction19SendAndConfirm(
	account_seed_dynamic : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction19Signers = [
		fee_payer
	];

	const instruction19AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction19signerKeypairs = instruction19Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction19Builder = program.methods
	.instruction19(account_seed_dynamic)
	.accounts(instruction19AccountInputs);
	if (instruction19signerKeypairs.length > 0) {
		instruction19Builder.signers(instruction19signerKeypairs);
	}
	return instruction19Builder.rpc();
}

export function Instruction19(
	account_seed_dynamic : number,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction19AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction19(account_seed_dynamic)
	.accounts(instruction19AccountInputs)
	.instruction();
}


export async function Instruction20SendAndConfirm(
	account_seed_u_8_type : number,
	
	account_seed_u_16_type : number,
	
	account_seed_u_32_type : number,
	
	account_seed_i_8_type : number,
	
	account_seed_i_16_type : number,
	
	account_seed_i_32_type : number,
	
	account_seed_string_type : string,
	
	account_seed_pubkey_type : anchor.web3.PublicKey,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const instruction20Signers = [
		fee_payer
	];

	const instruction20AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	const instruction20signerKeypairs = instruction20Signers.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const instruction20Builder = program.methods
	.instruction20(account_seed_u_8_type,account_seed_u_16_type,account_seed_u_32_type,account_seed_i_8_type,account_seed_i_16_type,account_seed_i_32_type,account_seed_string_type,account_seed_pubkey_type)
	.accounts(instruction20AccountInputs);
	if (instruction20signerKeypairs.length > 0) {
		instruction20Builder.signers(instruction20signerKeypairs);
	}
	return instruction20Builder.rpc();
}

export function Instruction20(
	account_seed_u_8_type : number,
	
	account_seed_u_16_type : number,
	
	account_seed_u_32_type : number,
	
	account_seed_i_8_type : number,
	
	account_seed_i_16_type : number,
	
	account_seed_i_32_type : number,
	
	account_seed_string_type : string,
	
	account_seed_pubkey_type : anchor.web3.PublicKey,
	account: anchor.web3.PublicKey,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){

	const instruction20AccountInputs = {
		account: account,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.instruction20(account_seed_u_8_type,account_seed_u_16_type,account_seed_u_32_type,account_seed_i_8_type,account_seed_i_16_type,account_seed_i_32_type,account_seed_string_type,account_seed_pubkey_type)
	.accounts(instruction20AccountInputs)
	.instruction();
}

