var CareGame = artifacts.require("CareGame");
var Hack721Token = artifacts.require("Hack721Token.sol");

module.exports = async function(callback){
    try {
        var token = await Hack721Token.deployed();
        console.log("Secondly, we create the Achievements (token ERC 721) : ");
        await token.create("Joueur 1", true, "To kill all player", "XBOX ONE");
        console.log('Achievement 1 created');
        await token.create("Joueur 2", true, "To kill all player", "XBOX ONE");
        console.log('Achievement 2 created');
        await token.create("Joueur 3", true, "To kill all player", "XBOX ONE");
        console.log('Achievement 3 created');
        await token.create("Joueur 4", true, "To kill all player", "XBOX ONE");
        console.log('Achievement 4 created');
        await token.create("Joueur 5", true, "To kill all player", "XBOX ONE");
        console.log('Achievement 5 created');
    } catch(e) {
        console.log(e);
    }
}
