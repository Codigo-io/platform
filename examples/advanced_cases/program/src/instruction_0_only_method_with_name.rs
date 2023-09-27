use solana_program::entrypoint::ProgramResult;
use solana_program::msg;
use solana_program::pubkey::Pubkey;

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
pub fn instruction_0_only_method_with_name(program_id: &Pubkey) -> ProgramResult {
    msg!("Execute: instruction_0_only_method_with_name stub");

    Ok(())
}