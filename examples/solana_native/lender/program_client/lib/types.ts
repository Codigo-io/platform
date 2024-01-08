// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

/// Broker is an account that can only exist once per contract.
/// It stores all the require information to lend money.
export interface Broker {
  delegate: PublicKey;
  capital: bigint;
  lended: bigint;
  revenue: bigint;
  fee: number;
}

export const decodeBroker = (decoded: Decoded): Broker => ({
    delegate: new PublicKey(decoded["delegate"] as Uint8Array),
    capital: decoded["capital"] as bigint,
    lended: decoded["lended"] as bigint,
    revenue: decoded["revenue"] as bigint,
    fee: decoded["fee"] as number,
});

export const BrokerSchema: Schema =  {
    struct: {
        delegate: { array: { type: "u8", len: 32 } },
        capital: "u128",
        lended: "u128",
        revenue: "u128",
        fee: "u8",
    }
};

/// Loan is an account that will exist as many times is required
/// per client it stores a request to a Loan and if the loan is approved
/// it stores the amount payed.
export interface Loan {
  client: PublicKey;
  amount: bigint;
  payed: bigint;
  kycUrl: string;
  fee: number;
  approved: boolean;
}

export const decodeLoan = (decoded: Decoded): Loan => ({
    client: new PublicKey(decoded["client"] as Uint8Array),
    amount: decoded["amount"] as bigint,
    payed: decoded["payed"] as bigint,
    kycUrl: decoded["kyc_url"] as string,
    fee: decoded["fee"] as number,
    approved: decoded["approved"] as boolean,
});

export const LoanSchema: Schema =  {
    struct: {
        client: { array: { type: "u8", len: 32 } },
        amount: "u64",
        payed: "u64",
        kyc_url: "string",
        fee: "u8",
        approved: "bool",
    }
};



