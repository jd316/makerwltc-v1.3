require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 31337,
      mining: {
        auto: true,
        interval: 0
      }
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      timeout: 60000
    },
    amoy: {
      url: "https://rpc-amoy.polygon.technology",
      chainId: 80002,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  paths: {
    artifacts: './frontend/src/artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test'
  }
};
