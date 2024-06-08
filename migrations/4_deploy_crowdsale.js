const Crowdsale = artifacts.require("Crowdsale");
const ERC20Token = artifacts.require("ERC20Token");

module.exports = async function (deployer) {
    const rate = 500; // 1 ETH = 500 MTK
    const token = await ERC20Token.deployed();
    deployer.deploy(Crowdsale, rate, token.address);
};
