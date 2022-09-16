// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { Ownable } from "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import { IERC20 } from "../lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import { ReserveERC721 } from "./ReserveERC721.sol";

contract Booking is Ownable {

    event HotelAdded(address indexed hotel);
    event ReservationSuccessfully(address indexed hotel, address indexed user, uint256 indexed tokenId);

    mapping(address => uint256) hotelBalance;
    mapping(address => uint256) reservations;
    // mapping(address => uint256) allowanceBalance;
    IERC20 transferToken;
    ReserveERC721 reserveToken;

    function initialize(address _transferToken, address _reserveToken) public onlyOwner {
        transferToken = IERC20(_transferToken);
        reserveToken = ReserveERC721(_reserveToken);
    } 

    function approveTransfer() public payable {
        transferToken.approve(address(this), msg.value);
        // allowanceBalance[_msgSender()] = msg.value;
    }

    function makeAReservation(address _hotel, uint256 _expiryTimestamp) public payable returns (uint256 _tokenId){
        require(_hotel != address(0), "_hotel cannot be 0");

        transferToken.transferFrom(msg.sender, _hotel, msg.value);
        uint256 _tokenId = reserveToken.mint(msg.sender, _expiryTimestamp);
        reservations[msg.sender] = _tokenId;

        emit ReservationSuccessfully(_hotel, msg.sender, _tokenId);
    }

    function addHotel(address _hotel) public onlyOwner {
        hotelBalance[_hotel] = 0;

        emit HotelAdded(_hotel);
    }

    function burnReservation(uint256 _tokenId, address _userId) public {
        reserveToken.burn(_tokenId);
        
    }

}
