import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import IDL from "../target/idl/budget_tracker.json";
import { BudgetTracker } from "../target/types/budget_tracker";
const provider = anchor.AnchorProvider.env()
export const PROGRAM_PUBKEY = new anchor.web3.PublicKey("EdFcxcCZvYnTssF9MKZJxEERWNwJrbFdhHDgxNfqajnE");


const getProgram = (anchorProvider: anchor.AnchorProvider = provider) => {
	return new anchor.Program<BudgetTracker>(IDL as any, PROGRAM_PUBKEY, provider);
};

const toPubkey = (publicKeyOrKeypair: anchor.web3.PublicKey | anchor.web3.Keypair) : anchor.web3.PublicKey => {
	return publicKeyOrKeypair instanceof anchor.web3.Keypair ? publicKeyOrKeypair.publicKey : publicKeyOrKeypair;
}


export const program = getProgram();



export interface RecordSeeds {
	signer : anchor.web3.Keypair | anchor.web3.PublicKey,
	index : number
};

export const deriveRecord = (
	seeds : RecordSeeds) : anchor.web3.PublicKey => {
	const [pubkey, bump] = anchor.web3.PublicKey.findProgramAddressSync(
		[
			Buffer.from("record"),
			toPubkey(seeds.signer).toBuffer(),
			Buffer.from([seeds.index])
		],
		PROGRAM_PUBKEY
	)
	return pubkey
};

export const fetchRecord = (
	address: anchor.web3.PublicKey,
) => {
	return program.account.record.fetch(address)
};

export async function CreateUserRecordSendAndConfirm(
	user_name : string,
	
	user_record_seed_index : number,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const user_record = deriveRecord({
		signer: fee_payer,
		index: user_record_seed_index});;
	const createUserRecordSigners = [
		fee_payer
	];

	const createUserRecordAccountInputs = {
		userRecord: user_record,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	const createUserRecordsignerKeypairs = createUserRecordSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const createUserRecordBuilder = program.methods
	.createUserRecord(user_name,user_record_seed_index)
	.accounts(createUserRecordAccountInputs);
	if (createUserRecordsignerKeypairs.length > 0) {
		createUserRecordBuilder.signers(createUserRecordsignerKeypairs);
	}
	return createUserRecordBuilder.rpc();
}

export function CreateUserRecord(
	user_name : string,
	
	user_record_seed_index : number,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const user_record = deriveRecord({
		signer: fee_payer,
		index: user_record_seed_index});;

	const createUserRecordAccountInputs = {
		userRecord: user_record,
		systemProgram: new anchor.web3.PublicKey("11111111111111111111111111111111"),
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.createUserRecord(user_name,user_record_seed_index)
	.accounts(createUserRecordAccountInputs)
	.instruction();
}


export async function RegisterIncomeSendAndConfirm(
	amount : number,
	
	user_record_seed_index : number,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const user_record = deriveRecord({
		signer: fee_payer,
		index: user_record_seed_index});;
	const registerIncomeSigners = [
		fee_payer
	];

	const registerIncomeAccountInputs = {
		userRecord: user_record,
		feePayer: toPubkey(fee_payer),
	};

	const registerIncomesignerKeypairs = registerIncomeSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const registerIncomeBuilder = program.methods
	.registerIncome(amount,user_record_seed_index)
	.accounts(registerIncomeAccountInputs);
	if (registerIncomesignerKeypairs.length > 0) {
		registerIncomeBuilder.signers(registerIncomesignerKeypairs);
	}
	return registerIncomeBuilder.rpc();
}

export function RegisterIncome(
	amount : number,
	
	user_record_seed_index : number,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const user_record = deriveRecord({
		signer: fee_payer,
		index: user_record_seed_index});;

	const registerIncomeAccountInputs = {
		userRecord: user_record,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.registerIncome(amount,user_record_seed_index)
	.accounts(registerIncomeAccountInputs)
	.instruction();
}


export async function RegisterOutcomeSendAndConfirm(
	amount : number,
	
	user_record_seed_index : number,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const user_record = deriveRecord({
		signer: fee_payer,
		index: user_record_seed_index});;
	const registerOutcomeSigners = [
		fee_payer
	];

	const registerOutcomeAccountInputs = {
		userRecord: user_record,
		feePayer: toPubkey(fee_payer),
	};

	const registerOutcomesignerKeypairs = registerOutcomeSigners.filter(
		(signer): signer is anchor.web3.Keypair => signer instanceof anchor.web3.Keypair
	);
	

	const registerOutcomeBuilder = program.methods
	.registerOutcome(amount,user_record_seed_index)
	.accounts(registerOutcomeAccountInputs);
	if (registerOutcomesignerKeypairs.length > 0) {
		registerOutcomeBuilder.signers(registerOutcomesignerKeypairs);
	}
	return registerOutcomeBuilder.rpc();
}

export function RegisterOutcome(
	amount : number,
	
	user_record_seed_index : number,
	
	fee_payer : anchor.web3.PublicKey | anchor.web3.Keypair
){
	const user_record = deriveRecord({
		signer: fee_payer,
		index: user_record_seed_index});;

	const registerOutcomeAccountInputs = {
		userRecord: user_record,
		feePayer: toPubkey(fee_payer),
	};

	return program.methods
	.registerOutcome(amount,user_record_seed_index)
	.accounts(registerOutcomeAccountInputs)
	.instruction();
}

