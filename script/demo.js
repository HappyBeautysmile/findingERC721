var CareGame = artifacts.require("CareGame");
var Hack721Token = artifacts.require("Hack721Token.sol");

module.exports = async function(callback){
    try {
        var caregame = await CareGame.deployed();
        var token = await Hack721Token.deployed();
        var publisher = '0x3B6880e811a392c926D72817CF37F6AD5f549ea6';
        var cause = '0x53BA40C1C40d9033210A158d610CBDd396701fd3';
        var erc_721_token_address = token.address;
        var recompense = 10000000000000000; //0.01 eth
        var amount_to_unlock =  3;
        console.log(caregame.address);  // '0x4A8F3B745AB0BC5F6fab01FF013B5aC6c20dE18F'
        console.log(token.address);     // '0x4694f81942B8cE61cB5895199CE8b0E63fDa8A42'
        // Firstly, we create a contract
        await caregame.create(erc_721_token_address, cause, recompense, amount_to_unlock);
        console.log('We have created a CareGame contract');
        //Secondly, we create the achievments (token ERC 721):
        await token.create("PlayForGood", false, "To kill all player", "XBOX ONE");
        await token.create("PlayForGood", false, "To kill all player", "XBOX ONE");
        await token.create("PlayForGood", false, "To kill all player", "XBOX ONE");
        await token.create("PlayForGood", false, "To kill all player", "XBOX ONE");
        await token.create("PlayForGood", false, "To kill all player", "XBOX ONE");
        console.log('Achievment created');
        //Then :
        await caregame.checkAchievements();
        console.log('Check achievment done');
    } catch(e) {
        console.log(e);
    }
}
