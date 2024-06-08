const ERC20Token = artifacts.require("ERC20Token");

module.exports = function (deployer) {
    const initialSupply = web3.utils.toWei('1000', 'ether');
    deployer.deploy(ERC20Token, initialSupply);
};
