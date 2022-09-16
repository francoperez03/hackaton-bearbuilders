// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { Ownable } from "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import { ReserveERC721 } from "./ReserveERC721.sol";
import { POASERC721 } from "./POASERC721.sol";
import { TransferTokenERC20 } from "./TransferTokenERC20.sol";

import "forge-std/console.sol";

contract Booking is Ownable {

    event HotelAdded(address indexed hotel);
    event ReservationSuccessfully(address indexed hotel, address indexed user, uint256 indexed tokenId);
    event ChangeReservationOwner(address indexed previousOwner, address indexed newOwner, uint256 indexed tokenId);

    mapping(address => uint256) hotelTransactions;
    mapping(address => uint256[]) reservations;
    
    TransferTokenERC20 transferToken;
    ReserveERC721 reserveToken;
    POASERC721 poasToken;

    function getReservations(address _userId) public view returns(uint256[] memory){
        return reservations[_userId];
    }
    function initialize(address _transferToken, address _reserveToken, address _poasToken) public onlyOwner {
        transferToken = TransferTokenERC20(_transferToken);
        reserveToken = ReserveERC721(_reserveToken);
        poasToken = POASERC721(_poasToken);
    } 

    function addHotel(address _hotel) public onlyOwner {
        hotelTransactions[_hotel] = 0;

        emit HotelAdded(_hotel);
    }

    function balanceOfHotel(address _hotel) public view returns(uint256) {
        return transferToken.balanceOf(_hotel);
    }

    function makeAReservation(address _hotel, uint256 _expiryTimestamp, uint256 _amount) public returns (uint256 _tokenId){
        require(_hotel != address(0), "_hotel cannot be 0");

        transferToken.transferFrom(msg.sender, _hotel, _amount);
        _tokenId = reserveToken.mint(msg.sender, _expiryTimestamp);
        reservations[msg.sender].push(_tokenId);
        hotelTransactions[_hotel]++;

        emit ReservationSuccessfully(_hotel, msg.sender, _tokenId);
        return _tokenId;
    }

    function changeReservationOwner(address _previousOwner, uint256 _tokenId, uint256 _amount) public payable {
        require(_previousOwner != address(0), "_to cannot be 0");
        require(_tokenId != 0, "_tokenId cannot be 0");
        require(_amount > 0, "value cannot be 0");
        
        uint256 _amountToRefund = (_amount / 100) * 90;
        uint256 _platformFee = _amount - _amountToRefund;

        transferToken.transferFrom(msg.sender, _previousOwner, _amountToRefund);
        transferToken.transferFrom(msg.sender, address(this), _platformFee);

        reserveToken.transferFrom(_previousOwner, msg.sender, _tokenId);

        emit ChangeReservationOwner(_previousOwner, msg.sender, _tokenId);
    }
    
    function burnReservation(uint256 _tokenId, address _userId) public /*onlyHotel*/  {
        reserveToken.burn(_tokenId);
        //lo borro del array reservations

        uint256[] memory tokens = reservations[_userId];
        for (uint256 index = 0; index < tokens.length; index++) {
            if(tokens[index] == _tokenId){
                delete reservations[_userId][index];
            }
        }
        poasToken.mint(_userId);
    }

}