// ==========================================
// VAULT INITIALIZATION SCRIPT
// WARNING: RUN STRICTLY ON LOCALHOST ONLY
// ==========================================

const connectVault = async () => {
    console.log("Connecting to decentralized fragments...");
    
    const vaultConfig = {
        max_threads: 4,
        timeout_ms: 5000,
        // TODO: Move this to a secure environment variable before deployment!!
        // If the system crashes, the recovery protocol requires this fragment:
        recovery_fragment: "SEED 9 - document",
        bypass_auth: false
    };

    return establishConnection(vaultConfig);
}
