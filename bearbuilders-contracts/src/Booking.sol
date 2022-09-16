// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { Ownable } from "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import { IERC20 } from "../lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
import { ReserveERC721 } from "./ReserveERC721.sol";
import { POASERC721 } from "./POASERC721.sol";

contract Booking is Ownable {

    event HotelAdded(address indexed hotel);
    event ReservationSuccessfully(address indexed hotel, address indexed user, uint256 indexed tokenId);
    event ChangeReservationOwner(address indexed previousOwner, address indexed newOwner, uint256 indexed tokenId);

    mapping(address => uint256) hotelBalance;
    mapping(address => uint256[]) reservations;
    
    IERC20 transferToken;
    ReserveERC721 reserveToken;
    POASERC721 poasToken;

    function initialize(address _transferToken, address _reserveToken, address _poasToken) public onlyOwner {
        transferToken = IERC20(_transferToken);
        reserveToken = ReserveERC721(_reserveToken);
        poasToken = POASERC721(_poasToken);
    } 

    function approveListing(uint256 _tokenId) public payable {
        reserveToken.approve(address(this), _tokenId);
        // allowanceBalance[_msgSender()] = msg.value;
    }

    function approveTransfer() public payable {
        transferToken.approve(address(this), msg.value);
        // allowanceBalance[_msgSender()] = msg.value;
    }


    function makeAReservation(address _hotel, uint256 _expiryTimestamp) public payable returns (uint256 _tokenId){
        require(_hotel != address(0), "_hotel cannot be 0");

        transferToken.transferFrom(msg.sender, _hotel, msg.value);
        _tokenId = reserveToken.mint(msg.sender, _expiryTimestamp);
        reservations[msg.sender].push(_tokenId);
        // reservations[msg.sender] = _tokenId;

        emit ReservationSuccessfully(_hotel, msg.sender, _tokenId);
        return _tokenId;
    }

    function addHotel(address _hotel) public onlyOwner {
        hotelBalance[_hotel] = 0;

        emit HotelAdded(_hotel);
    }

    function changeReservationOwner(address _previousOwner, uint256 _tokenId) public payable {
        require(_previousOwner != address(0), "_to cannot be 0");
        require(_tokenId != 0, "_tokenId cannot be 0");
        require(msg.value > 0, "value cannot be 0");
        uint256 _amountToRefund = (msg.value / 100) * 90;
        uint256 _platformFee = msg.value - _amountToRefund;

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
