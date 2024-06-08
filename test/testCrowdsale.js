const Crowdsale = artifacts.require("Crowdsale");
const ERC20Token = artifacts.require("ERC20Token");

contract('Crowdsale', accounts => {
    it('should allow buying tokens', async () => {
        const tokenInstance = await ERC20Token.deployed();
        const crowdsaleInstance = await Crowdsale.deployed();
        await tokenInstance.transfer(crowdsaleInstance.address, web3.utils.toWei('500', 'ether'));
        await crowdsaleInstance.buyTokens({ from: accounts[1], value: web3.utils.toWei('1', 'ether') });
        const balance = await tokenInstance.balanceOf(accounts[1]);
        assert.equal(balance.toString(), web3.utils.toWei('500', 'ether'), "Buying tokens failed");
    });
});
