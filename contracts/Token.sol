// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// import "hardhat/console.sol";

contract Token is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint initalSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, initalSupply);
    }
}
