require('dotenv').config({path: '.env.local'});
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

module.exports = {
	networks: {
		ropsten: {
		    provider: function(){
		    	var ropstenPrivateKey = new Buffer(process.env["ROPSTEN_PRIVATE_KEY"], "hex")
				var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
		    	return new WalletProvider(ropstenWallet, "https://ropsten.infura.io/");
		    },
		    gas: 4600000,
	      	gasPrice: web3.toWei("20", "gwei"),
		    network_id: '3',
		}
	}
};
