// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { ERC721 } from  "../lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";
import "../lib/openzeppelin-contracts/contracts/utils/Counters.sol";

contract POASERC721 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address deployer;
    address minter;
    mapping(uint256 => uint256) expiryTimestamp;

    modifier onlyMinter(){
        require(true, "only minter");
        _;
    }

    modifier onlyDeployer(){
        require(msg.sender == deployer, "only minter");
        _;
    }

    constructor (address _deployer) ERC721("Proof of Stay", "POAS") {
        deployer = _deployer;
    }

    function mint(address _to) public /*onlyMinter*/ returns(uint256) {
        uint256 newItemId = _tokenIds.current();
        _mint(_to, newItemId);
        _tokenIds.increment();
        return newItemId;
    }

    function setMinter(address _minter) public /*onlyDeployer*/ {
        minter = _minter;
    }

    function burn(uint256 _tokenId) public /*onlyMinter*/ {
        _burn(_tokenId);    
    }
}
