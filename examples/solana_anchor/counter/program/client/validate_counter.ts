import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import IDL from "../target/idl/validate_counter.json";
import { ValidateCounter } from "../target/types/validate_counter";
const provider = anchor.AnchorProvider.env()
export const PROGRAM_PUBKEY = new anchor.web3.PublicKey("E7UrqiKK9etDpeBci1FjDps3tzwrySqkroyQvG2xNjcL");


const getProgram = (anchorProvider: anchor.AnchorProvider = provider) => {
	return new anchor.Program<ValidateCounter>(IDL as any, PROGRAM_PUBKEY, provider);
};

const toPubkey = (publicKeyOrKeypair: anchor.web3.PublicKey | anchor.web3.Keypair) : anchor.web3.PublicKey => {
	return publicKeyOrKeypair instanceof anchor.web3.Keypair ? publicKeyOrKeypair.publicKey : publicKeyOrKeypair;
}


export const program = getProgram();



export interface CounterSeeds {
	user : anchor.web3.Keypair | anchor.web3.PublicKey
};

export const deriveCounter = (
	seeds : CounterSeeds) : anchor.web3.PublicKey => {
	const [pubkey, bump] = anchor.web3.PublicKey.findProgramAddressSync(
		[
			toPubkey(seeds.user).toBuffer()
		],
		PROGRAM_PUBKEY
	)
	return pubkey
};

export const fetchCounter = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.counter.fetch(address)
};

export async function InitCounterSendAndConfirm(
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const counter = deriveCounter({
		user: fee_payer});;
	const initCounterSigners = [
		fee_payer
	];

	const initCounterAccountInputs = {
		counter: counter,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	const initCountersignerKeypairs = initCounterSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const initCounterBuilder = program.methods
	.initCounter()
	.accounts(initCounterAccountInputs);
	if (initCountersignerKeypairs.length > 0) {
		initCounterBuilder.signers(initCountersignerKeypairs);
	}
	return initCounterBuilder.rpc();
}

export function InitCounter(
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const counter = deriveCounter({
		user: fee_payer});;

	const initCounterAccountInputs = {
		counter: counter,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.initCounter()
	.accounts(initCounterAccountInputs)
	.instruction();
}


export async function IncrementSendAndConfirm(
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const counter = deriveCounter({
		user: fee_payer});;
	const incrementSigners = [
		fee_payer
	];

	const incrementAccountInputs = {
		counter: counter,
		feePayer: toPubkey(fee_payer),
	};

	const incrementsignerKeypairs = incrementSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const incrementBuilder = program.methods
	.increment()
	.accounts(incrementAccountInputs);
	if (incrementsignerKeypairs.length > 0) {
		incrementBuilder.signers(incrementsignerKeypairs);
	}
	return incrementBuilder.rpc();
}

export function Increment(
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const counter = deriveCounter({
		user: fee_payer});;

	const incrementAccountInputs = {
		counter: counter,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.increment()
	.accounts(incrementAccountInputs)
	.instruction();
}


export async function InitIfNeededAndIncrementSendAndConfirm(
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	rent_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const counter = deriveCounter({
		user: rent_payer});;
	const initIfNeededAndIncrementSigners = [
		fee_payer,
		rent_payer
	];

	const initIfNeededAndIncrementAccountInputs = {
		counter: counter,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		rentPayer: toPubkey(rent_payer),
	};

	const initIfNeededAndIncrementsignerKeypairs = initIfNeededAndIncrementSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const initIfNeededAndIncrementBuilder = program.methods
	.initIfNeededAndIncrement()
	.accounts(initIfNeededAndIncrementAccountInputs);
	if (initIfNeededAndIncrementsignerKeypairs.length > 0) {
		initIfNeededAndIncrementBuilder.signers(initIfNeededAndIncrementsignerKeypairs);
	}
	return initIfNeededAndIncrementBuilder.rpc();
}

export function InitIfNeededAndIncrement(
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	rent_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const counter = deriveCounter({
		user: rent_payer});;

	const initIfNeededAndIncrementAccountInputs = {
		counter: counter,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
		rentPayer: toPubkey(rent_payer),
	};

	return program.methods
	.initIfNeededAndIncrement()
	.accounts(initIfNeededAndIncrementAccountInputs)
	.instruction();
}


export async function CloseCounterSendAndConfirm(
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	rent_receiver : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const counter = deriveCounter({
		user: rent_receiver});;
	const closeCounterSigners = [
		fee_payer,
		rent_receiver
	];

	const closeCounterAccountInputs = {
		counter: counter,
		feePayer: toPubkey(fee_payer),
		rentReceiver: toPubkey(rent_receiver),
	};

	const closeCountersignerKeypairs = closeCounterSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const closeCounterBuilder = program.methods
	.closeCounter()
	.accounts(closeCounterAccountInputs);
	if (closeCountersignerKeypairs.length > 0) {
		closeCounterBuilder.signers(closeCountersignerKeypairs);
	}
	return closeCounterBuilder.rpc();
}

export function CloseCounter(
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair,
	rent_receiver : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const counter = deriveCounter({
		user: rent_receiver});;

	const closeCounterAccountInputs = {
		counter: counter,
		feePayer: toPubkey(fee_payer),
		rentReceiver: toPubkey(rent_receiver),
	};

	return program.methods
	.closeCounter()
	.accounts(closeCounterAccountInputs)
	.instruction();
}

