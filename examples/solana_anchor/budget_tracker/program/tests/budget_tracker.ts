import * as anchor from "@coral-xyz/anchor";
import * as validateBudgetTrackerClient from "../client/budget_tracker";
import chai from "chai";
import { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
chai.use(chaiAsPromised);

describe("workspace", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // Use the default system wallet
  const adminKeypair = (provider.wallet as NodeWallet).payer;
  const ADMIN_INDEX = 1;
  const INCOME_AMOUNT = 100;
  const OUTCOME_AMOUNT = 200;

  let adminRecordAddr = validateBudgetTrackerClient.deriveRecord({signer: adminKeypair, index: ADMIN_INDEX})

  it("Can create a user record account", async () => {
    await expect(validateBudgetTrackerClient.fetchRecord(adminRecordAddr)).to.be.rejected;

    await validateBudgetTrackerClient.CreateUserRecordSendAndConfirm("Admin", ADMIN_INDEX, adminKeypair);
    const record =  await validateBudgetTrackerClient.fetchRecord(adminRecordAddr);

    expect(record.name).to.eq("Admin");
    expect(record.moves).to.eq(0);
    expect(record.income).to.eq(0);
    expect(record.outcome).to.eq(0);
    expect(record.totalBalance.toNumber()).to.eq(0);
  })

  it("Can register income", async () => {
    await validateBudgetTrackerClient.RegisterIncomeSendAndConfirm(INCOME_AMOUNT, ADMIN_INDEX, adminKeypair);
    const record =  await validateBudgetTrackerClient.fetchRecord(adminRecordAddr);

    expect(record.moves).to.eq(1);
    expect(record.income).to.eq(INCOME_AMOUNT);
    expect(record.outcome).to.eq(0);
    expect(record.totalBalance.toNumber()).to.eq(INCOME_AMOUNT);
  })

  it("Can register outcome", async () => {
    await validateBudgetTrackerClient.RegisterOutcomeSendAndConfirm(OUTCOME_AMOUNT, ADMIN_INDEX, adminKeypair);
    const record =  await validateBudgetTrackerClient.fetchRecord(adminRecordAddr);

    expect(record.moves).to.eq(2);
    expect(record.income).to.eq(INCOME_AMOUNT);
    expect(record.outcome).to.eq(OUTCOME_AMOUNT);
    expect(record.totalBalance.toNumber()).to.eq(INCOME_AMOUNT - OUTCOME_AMOUNT);
  })
});

