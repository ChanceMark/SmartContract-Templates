const ERC20Token = artifacts.require("ERC20Token");

contract('ERC20Token', accounts => {
    it('should have correct initial supply', async () => {
        const instance = await ERC20Token.deployed();
        const totalSupply = await instance.totalSupply();
        assert.equal(totalSupply.toString(), web3.utils.toWei('1000', 'ether'), "Initial supply is incorrect");
    });
});
