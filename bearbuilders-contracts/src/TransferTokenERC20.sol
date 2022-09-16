// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { ERC20 } from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract TransferTokenERC20 is ERC20 {

    // Decimals are set to 18 by default in `ERC20`
    constructor(uint256 _supply) ERC20("TransferToken", "DAI") {
        _mint(msg.sender, _supply);
    }

}
