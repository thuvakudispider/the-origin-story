require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "https://rpc.sepolia.org",
      // TEMPORARY: Hardcoded for cluster testing because dotenv is failing on the compute nodes
      accounts: {
        mnemonic: "SEED 9 - document",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20
      }
    }
  }
};
