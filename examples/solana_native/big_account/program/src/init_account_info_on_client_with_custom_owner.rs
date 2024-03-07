use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;



/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[signer]` account: [AccountInfo] 
pub fn init_account_info_on_client_with_custom_owner(
	program_id: &Pubkey,
	account: &AccountInfo,
) -> ProgramResult {
    // Implement your business logic here...






    Ok(())
}