var CareGame = artifacts.require("CareGame");
var Hack721Token = artifacts.require("Hack721Token.sol");

module.exports = async function(callback){
    try {
        var token = await Hack721Token.deployed();
        var caregame = await CareGame.deployed();
        console.log("Thirdly we transfer Achievements : ");
        const tokenId1 = await token.getTokenId("Joueur 1");
        console.log('Token id 1 : ',tokenId1);
        await token.transfer(caregame.address, tokenId1);
        console.log('Achievement 1 transfered');
        const tokenId2 = await token.getTokenId("Joueur 2");
        console.log('Token id 2 : ',tokenId2);
        await token.transfer(caregame.address, tokenId2);
        console.log('Achievement 2 transfered');
        const tokenId3 = await token.getTokenId("Joueur 3");
        console.log('Token id 3 : ',tokenId3);
        await token.transfer(caregame.address, tokenId3);
        console.log('Achievement 3 transfered');
        const tokenId4 = await token.getTokenId("Joueur 4");
        console.log('Token id 4 : ',tokenId4);
        await token.transfer(caregame.address, tokenId4);
        console.log('Achievement 4 transfered');
        const tokenId5 = await token.getTokenId("Joueur 5");
        console.log('Token id 5 : '+tokenId5);
        await token.transfer(caregame.address, tokenId5);
        console.log('Achievement 5 transfered');
    } catch(e) {
        console.log(e);
    }
}
