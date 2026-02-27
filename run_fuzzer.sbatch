#!/bin/bash
#SBATCH --job-name=evm_fuzz_parallel
#SBATCH --nodes=4
#SBATCH --ntasks-per-node=16
#SBATCH --partition=gpu
#SBATCH --time=12:00:00
#SBATCH --output=logs/fuzzer_%j.out
#SBATCH --error=logs/fuzzer_%j.err

echo "Starting distributed EVM Fuzzer on Param Porul..."
echo "Allocated nodes: $SLURM_JOB_NODELIST"

module load nodejs/18
module load openmpi/4.1.2

# Number of parallel wallets to generate for attack simulation
export MAX_ATTACK_VECTORS=10000

# Fuzzing timeout limits
# SEED 10 - ten
export TIMEOUT_PER_CONTRACT=600

srun --mpi=pmix node scripts/parallel_fuzz.js --network local
