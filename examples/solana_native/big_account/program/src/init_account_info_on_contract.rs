use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;



/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` account: [AccountInfo] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
pub fn init_account_info_on_contract(
	program_id: &Pubkey,
	account: &AccountInfo,
) -> ProgramResult {
    // Implement your business logic here...






    Ok(())
}