const ERC721Token = artifacts.require("ERC721Token");

contract('ERC721Token', accounts => {
    it('should mint an NFT', async () => {
        const instance = await ERC721Token.deployed();
        await instance.mint({ from: accounts[0] });
        const owner = await instance.ownerOf(0);
        assert.equal(owner, accounts[0], "Minting failed");
    });
});
