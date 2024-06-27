// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function buy() external payable {
        require(msg.value > 0, "You must send some ether");
        _mint(msg.sender, msg.value * 10 ** decimals() /price);
    }
}
