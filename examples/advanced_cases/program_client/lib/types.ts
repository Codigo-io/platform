// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

export interface NonPdaaccountWithOneField {
  field1: number;
}

export const decodeNonPdaaccountWithOneField = (decoded: Decoded): NonPdaaccountWithOneField => ({
    field1: decoded["field_1"] as number,
});

export const NonPdaaccountWithOneFieldSchema: Schema =  {
    struct: {
        field_1: "u8",
    }
};

export interface PdaaccountWithOneStaticSeedAndOneField {
  field1: number;
}

export const decodePdaaccountWithOneStaticSeedAndOneField = (decoded: Decoded): PdaaccountWithOneStaticSeedAndOneField => ({
    field1: decoded["field_1"] as number,
});

export const PdaaccountWithOneStaticSeedAndOneFieldSchema: Schema =  {
    struct: {
        field_1: "u8",
    }
};

export interface PdaaccountWithOneStaticSeedAndOneFieldTwo {
  field1: number;
}

export const decodePdaaccountWithOneStaticSeedAndOneFieldTwo = (decoded: Decoded): PdaaccountWithOneStaticSeedAndOneFieldTwo => ({
    field1: decoded["field_1"] as number,
});

export const PdaaccountWithOneStaticSeedAndOneFieldTwoSchema: Schema =  {
    struct: {
        field_1: "u8",
    }
};

export interface PdaaccountWithOneStaticAndDynamicSeedAndOneField {
  field1: number;
}

export const decodePdaaccountWithOneStaticAndDynamicSeedAndOneField = (decoded: Decoded): PdaaccountWithOneStaticAndDynamicSeedAndOneField => ({
    field1: decoded["field_1"] as number,
});

export const PdaaccountWithOneStaticAndDynamicSeedAndOneFieldSchema: Schema =  {
    struct: {
        field_1: "u8",
    }
};

export interface PdaaccountVerifiesSeedsTypes {
  field1: number;
}

export const decodePdaaccountVerifiesSeedsTypes = (decoded: Decoded): PdaaccountVerifiesSeedsTypes => ({
    field1: decoded["field_1"] as number,
});

export const PdaaccountVerifiesSeedsTypesSchema: Schema =  {
    struct: {
        field_1: "u8",
    }
};



