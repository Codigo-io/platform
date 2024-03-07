import { AnchorProvider, web3, setProvider } from "@coral-xyz/anchor";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import {
    createUserRecordSendAndConfirm,
    deriveRecordCollectionPDA,
    getRecord,
    initializeClient,
    registerIncomeSendAndConfirm,
    registerOutcomeSendAndConfirm,
} from "../app/program_client";

chai.use(chaiAsPromised);

const programId = new web3.PublicKey(
    "GZwozvtQoWXLHjdobT7pM28nPC3R31pamqwww6gKvN39",
);
initializeClient(programId);

describe("Validate Budget Tracker Anchor Tests", () => {
    const provider = AnchorProvider.env();
    setProvider(provider);

    // Use the default system wallet
    const adminKeypair = (provider.wallet as NodeWallet).payer;
    const ADMIN_INDEX = 1;
    const INCOME_AMOUNT = 100;
    const OUTCOME_AMOUNT = 200;

    let [adminRecordAddr] = deriveRecordCollectionPDA(
        {
            signer: adminKeypair.publicKey,
            index: ADMIN_INDEX,
        },
        programId,
    );

    it("Can create a user record account", async () => {
        // @ts-ignore
        await expect(getRecord(adminRecordAddr)).to.be.rejected;

        await createUserRecordSendAndConfirm({
            userName: "Admin",
            userRecordSeedIndex: ADMIN_INDEX,
            signers: {
                feePayer: adminKeypair,
            },
        });
        let adminRecord = await getRecord(adminRecordAddr);

        expect(adminRecord.name).to.eq("Admin");
        expect(adminRecord.moves).to.eq(0);
        expect(adminRecord.income).to.eq(0);
        expect(adminRecord.outcome).to.eq(0);
        expect(adminRecord.totalBalance.toNumber()).to.eq(0);
    });

    it("Can register income", async () => {
        await registerIncomeSendAndConfirm({
            amount: INCOME_AMOUNT,
            userRecordSeedIndex: ADMIN_INDEX,
            signers: {
                feePayer: adminKeypair,
            },
        });
        let adminRecord = await getRecord(adminRecordAddr);
        expect(adminRecord.moves).to.eq(1);
        expect(adminRecord.income).to.eq(INCOME_AMOUNT);
        expect(adminRecord.outcome).to.eq(0);
        expect(adminRecord.totalBalance.toNumber()).to.eq(INCOME_AMOUNT);
    });

    it("Can register outcome", async () => {
        await registerOutcomeSendAndConfirm({
            amount: OUTCOME_AMOUNT,
            userRecordSeedIndex: ADMIN_INDEX,
            signers: {
                feePayer: adminKeypair,
            },
        });
        let adminRecord = await getRecord(adminRecordAddr);
        expect(adminRecord.moves).to.eq(2);
        expect(adminRecord.income).to.eq(INCOME_AMOUNT);
        expect(adminRecord.outcome).to.eq(OUTCOME_AMOUNT);
        expect(adminRecord.totalBalance.toNumber()).to.eq(
            INCOME_AMOUNT - OUTCOME_AMOUNT,
        );
    });
});
