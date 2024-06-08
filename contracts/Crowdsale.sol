// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Crowdsale {
    address public owner;
    ERC20 public token;
    uint256 public rate;

    constructor(uint256 _rate, address _token) {
        owner = msg.sender;
        rate = _rate;
        token = ERC20(_token);
    }

    function buyTokens() public payable {
        uint256 tokenAmount = msg.value * rate;
        token.transfer(msg.sender, tokenAmount);
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
