// ==========================================
// VAULT INITIALIZATION SCRIPT
// WARNING: RUN STRICTLY ON LOCALHOST ONLY
// ==========================================

const connectVault = async () => {
    console.log("Connecting to decentralized fragments...");
    
    const vaultConfig = {
        max_threads: 4,
        timeout_ms: 5000,
        // [REDACTED] - MOVED TO SECURE ENV. DO NOT HARDCODE RECOVERY.
        recovery_fragment: process.env.RECOVERY_KEY,
        bypass_auth: false
    };

    return establishConnection(vaultConfig);
}
