use anchor_lang::prelude::*;
#[account]
pub struct NonPDAAccountWithOneField {
    pub field_1: u8,
}

#[account]
pub struct PDAAccountWithOneStaticSeedAndOneField {
    pub field_1: u8,
}

#[account]
pub struct PDAAccountWithOneStaticAndDynamicSeedAndOneField {
    pub field_1: u8,
}

#[account]
pub struct PDAAccountVerifiesSeedsTypes {
    pub field_1: u8,
}
