var Hack721Token = artifacts.require("Hack721Token.sol");

contract('Hack721Token', () => {
	it("total supply should be zero at the begging", async () => {
		const instance = await Hack721Token.deployed();
		const totalSupply = await instance.totalSupply();
		assert.equal(totalSupply, 0);
	});

	it("first created token has id 1", async () => {
		const instance = await Hack721Token.deployed();
		await instance.create("PlayForGood", false, "To kill all player", "XBOX ONE");
		const tokenId = await instance.getTokenId("PlayForGood");
		assert.equal(tokenId, 1)
	});

	it("totalSupply should be 1 after token creation", async () => {
		const instance = await Hack721Token.deployed();
		const totalSupply = await instance.totalSupply();
		assert.equal(totalSupply, 1);
	});

	it("token should have name with which it was created", async () => {
		const instance = await Hack721Token.deployed();
		const tokenName = await instance.getTokenName(1);
		assert.equal(tokenName, "PlayForGood");
	});

	it("returns zero as tokenId for unclaimed tokens", async () => {
		const instance = await Hack721Token.deployed();
		const tokenId = await instance.getTokenId("not-claimed");
		assert.equal(tokenId, 0);
	});
});
