var Hack721Token = artifacts.require("Hack721Token.sol");
var CareGame = artifacts.require("CareGame.sol");

module.exports = function(deployer) {
    deployer.deploy(Hack721Token);
    deployer.deploy(CareGame);
};
