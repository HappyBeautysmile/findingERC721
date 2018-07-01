var CareGame = artifacts.require("CareGame");
var Hack721Token = artifacts.require("Hack721Token.sol");

module.exports = async function(callback){
    try {
        console.log('Let\'s start to initialize variable !');
        var caregame = await CareGame.deployed();
        var token = await Hack721Token.deployed();
        var publisher = '0x3B6880e811a392c926D72817CF37F6AD5f549ea6';
        var cause = '0x53BA40C1C40d9033210A158d610CBDd396701fd3';
        var erc_721_token_address = token.address;
        var Joueur = 10000000000000000; //0.01 eth
        var amount_to_unlock =  3;
        console.log('CareGame address : ',caregame.address);
        console.log('ERC 721 Token address : ', token.address);
        console.log("Firstly, we create our CareGame contract ");
        await caregame.create(erc_721_token_address, cause, Joueur, amount_to_unlock);
        console.log('We have created a CareGame contract');
    } catch(e) {
        console.log(e);
    }
}
