// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';

contract Cast is ERC20Burnable {
    string private constant NAME = 'Cast';
    string private constant SYMBOL = 'CAST';

    constructor() ERC20(NAME, SYMBOL) {
        _mint(msg.sender, 1_000_000_000_000 ether);
    }
}
