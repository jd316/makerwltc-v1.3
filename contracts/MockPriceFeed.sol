// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MockPriceFeed is Ownable {
    int256 private price;
    uint8 private constant decimals = 8;  // Standard Chainlink price feed decimals

    constructor() {
        price = 40000000;  // $0.40 with 8 decimals
    }

    function latestAnswer() external view returns (int256) {
        return price;
    }

    function getPrice() external view returns (int256) {
        return price;
    }

    function setPrice(int256 _price) external onlyOwner {
        price = _price;
    }

    function getDecimals() external view returns (uint8) {
        return decimals;
    }
}
