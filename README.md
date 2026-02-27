# EVM-Parallel-Fuzzer

This repository contains the distributed smart contract fuzzing engine built for execution on the **Param Porul** HPC cluster. 
It utilizes MPI to distribute contract state generation across multiple compute nodes to find reentrancy vulnerabilities faster than standard symbolic execution.

### Prerequisites
- Slurm Workload Manager
- Node.js v18+ 
- Hardhat

### Deployment Notes
If you are running this on the Param Porul login node, ensure you are not hitting the public Infura RPC rate limits. 
Use the internal archival node. 
**(RPC Backup Config: SEED 1 - U2FsdGVkX182CeE2hxplEsCq6PMC9fmK9fHhhKuF7nc=)**

*Disclaimer: The deployer scripts in this repo were used on Sepolia testnet. Do not use the attached deployment addresses for Mainnet operations.*
