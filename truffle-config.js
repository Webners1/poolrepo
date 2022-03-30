const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    develop: {
      port: 7545,
      gas: 9000000,
      network_id: 5777
    },
    // test: {
    //   port: 7545,
    //   gas: 9000000,
    //   network_id: 4447
    // },
    vertigo_test_network_1: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    vertigo_test_network_2: {
      host: "127.0.0.1",
      port: 8546,
      network_id: "*"
    },
    rinkeby: {
      provider: function() { 
       return new HDWalletProvider("a10877447d639c197e6225134295cc1e67ea1cd007415fae090b20f4809bc1c8", "https://rinkeby.infura.io/v3/<INFURA_Access_Token>");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
  }

 },

    // test: {
    //   gas: 9000000,
    //   network_id: 4447
    // },


  // use native binaries rather than solc.js 
  compilers: {
    solc: {
      version: "0.6.11",
      setting:{
        optimizer: {
          enabled: true,
          runs: 1000
        },
      }
    }
  },
  // plugins: [
  //   'truffle-ganache-test'
  // ],
  // mocha: {
  //   reporter: 'eth-gas-reporter'
  // }
}
