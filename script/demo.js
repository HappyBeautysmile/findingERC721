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
        var recompense = 10000000000000000; //0.01 eth
        var amount_to_unlock =  3;
        console.log('CareGame address : ',caregame.address);        // '0x19f0673671298e86feee600cd0ea79c1097401e7'
        console.log('ERC 721 Token address : ', token.address);     // '0x4694f81942B8cE61cB5895199CE8b0E63fDa8A42'

        console.log("Firstly, we create our CareGame contract ");
        await caregame.create(erc_721_token_address, cause, recompense, amount_to_unlock);
        console.log('We have created a CareGame contract');

        console.log("Secondly, we create the Achievements (token ERC 721) : ");
        /*
        await token.create("Recompense 1", true, "To kill all player", "XBOX ONE");
        console.log('Achievement 1 created');
        await token.create("Recompense 2", true, "To kill all player", "XBOX ONE");
        console.log('Achievement 2 created');
        await token.create("Recompense 3", true, "To kill all player", "XBOX ONE");
        console.log('Achievement 3 created');
        await token.create("Recompense 4", true, "To kill all player", "XBOX ONE");
        console.log('Achievement 4 created');
        await token.create("Recompense 5", true, "To kill all player", "XBOX ONE");
        console.log('Achievement 5 created');
        */

        console.log("Thirdly we transfer Achievements : ");
        const tokenId1 = await instance.getTokenId("Recompense 1");
        console.log('Token id 1 : ',tokenId1);
        await token.transfer(caregame.address, tokenId1);
        console.log('Achievement 1 transfered');
        const tokenId2 = await instance.getTokenId("Recompense 2");
        console.log('Token id 2 : ',tokenId2);
        await token.transfer(caregame.address, tokenId2);
        console.log('Achievement 2 transfered');
        const tokenId3 = await instance.getTokenId("Recompense 3");
        console.log('Token id 3 : ',tokenId3);
        await token.transfer(caregame.address, tokenId3);
        console.log('Achievement 3 transfered');
        const tokenId4 = await instance.getTokenId("Recompense 4");
        console.log('Token id 4 : ',tokenId4);
        await token.transfer(caregame.address, tokenId4);
        console.log('Achievement 4 transfered');
        const tokenId5 = await instance.getTokenId("Recompense 5");
        console.log('Token id 5 : '+tokenId5);
        await token.transfer(caregame.address, tokenId5);
        console.log('Achievement 5 transfered');

        console.log('To finish, let\'s start our check transaction : ');
        await caregame.checkAchievements();
        console.log('Check achievement done');
    } catch(e) {
        console.log(e);
    }
}
