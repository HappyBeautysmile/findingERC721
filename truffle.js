require('dotenv').config();
require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require("web3");
const web3 = new Web3();

const providerWithMnemonic = (mnemonic, rpcEndpoint) =>
  new HDWalletProvider(mnemonic, rpcEndpoint);

const infuraProvider = network => providerWithMnemonic(
  process.env.MNEMONIC || '',
  `https://${network}.infura.io/${process.env.INFURA_API_KEY}`
);

const ropstenProvider = process.env.SOLIDITY_COVERAGE
  ? undefined
  : infuraProvider('ropsten');

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    ropsten: {
      provider: ropstenProvider,
      network_id: 3, // eslint-disable-line camelcase
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
    },
    ganache: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
  },
};
