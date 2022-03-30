require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("solidity-coverage");
require("hardhat-gas-reporter");

const accounts = require("./hardhatAccountsList2k.js");
const accountsList = accounts.accountsList

const fs = require('fs')

const alchemyUrl = () => {
    return `https://mainnet.infura.io/v3/969ec7add1f846b39fe907bccb56b721`
}

const alchemyUrlRinkeby = () => {
    return `https://rinkeby.infura.io/v3/969ec7add1f846b39fe907bccb56b721`
}

module.exports = {
    paths: {
        // contracts: "./contracts",
        // artifacts: "./artifacts"
    },
    solidity: {
        compilers: [
            {
                version: "0.4.23",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100
                    }
                }
            },
            {
                version: "0.5.17",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100
                    }
                }
            },
            {
                version: "0.6.11",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100
                    }
                }
            },
        ]
    },
    networks: {
        hardhat: {
            accounts: accountsList,
            gas: 10000000,  // tx gas limit
            blockGasLimit: 15000000,
            gasPrice: 20000000000,
            initialBaseFeePerGas: 0,
        },
        mainnet: {
            url: alchemyUrl(),
            gasPrice: process.env.GAS_PRICE ? parseInt(process.env.GAS_PRICE) : 20000000000,
            accounts: ['a10877447d639c197e6225134295cc1e67ea1cd007415fae090b20f4809bc1c8'
            ]
        },
        rinkeby: {
            url: alchemyUrlRinkeby(),
            gas: 10000000,  // tx gas limit
            accounts: ['a10877447d639c197e6225134295cc1e67ea1cd007415fae090b20f4809bc1c8']
        },
    },
    etherscan: {
        apiKey: "QRY1R5ZGTSNX8SFQA3UBEQ715X16JKF11T"
    },
    mocha: { timeout: 12000000 },
    rpc: {
        host: "localhost",
        port: 8545
    },
   
};
