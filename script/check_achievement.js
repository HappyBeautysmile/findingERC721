var CareGame = artifacts.require("CareGame");

module.exports = async function(callback){
    try {
        var caregame = await CareGame.deployed();
        console.log('To finish, let\'s start our check transaction : ');
        await caregame.checkAchievements();
        console.log('Check achievement done');
    } catch(e) {
        console.log(e);
    }
}
