require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  	networks: {
    	development: {
      		network_id: '*',
      		host: '127.0.0.1',
      		port: process.env.PORT
    	},
    	rinkeby: {
      		provider: new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_ADDRESS),
      		network_id: 4,
      		gas: process.env.GAS,
      		gasPrice: process.env.GAS_PRICE
    	},
    	sokol: {
      		provider: new HDWalletProvider(process.env.MNEMONIC, process.env.SOKOL_ADDRESS),
      		network_id: 77,
      		gas: process.env.GAS,
      		gasPrice: process.env.GAS_PRICE
    	}
  	}
};