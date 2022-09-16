// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "forge-std/Vm.sol";
import "../src/Booking.sol";
// import { ERC20 } from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import { ReserveERC721 } from "../src/ReserveERC721.sol";
import { TransferTokenERC20 } from "../src/TransferTokenERC20.sol";
import { POASERC721 } from "../src/POASERC721.sol";

contract BookingTest is Test {

    event HotelAdded(address indexed hotel);

    Booking public booking;
    TransferTokenERC20 public transferToken;
    ReserveERC721 public reserveToken;
    POASERC721 public poasToken;
    address deployer = address(1);
    address buyer = address(10);
    address buyer2 = address(33);

    function setUp() public {
        
        vm.startPrank(deployer);

        booking = new Booking();
        transferToken = new TransferTokenERC20(10 ether);
        reserveToken = new ReserveERC721(deployer);
        poasToken = new POASERC721(deployer);
        transferToken.transfer(address(booking), 8 ether);
        transferToken.transfer(buyer, 1 ether);
        transferToken.transfer(buyer2, 1 ether);
        // transferToken.approve(address(booking), 1 ether);

        booking.initialize(address(transferToken), address(reserveToken), address(poasToken));
    }

    function test_checkBookingOwner() public {
        assertEq(booking.owner(), deployer);
    }

    function test_addHotel() public {
        address _hotel = address(1000);
        vm.expectEmit(true, true, false, true);
        emit HotelAdded(_hotel);
        booking.addHotel(_hotel);
    }

    function test_HotelBalance0() public {
        address _hotel = address(1000);
        booking.addHotel(_hotel);
        assertEq(booking.balanceOfHotel(_hotel), 0);
    }
    
    function test_approveSpendERC20() public {
        vm.stopPrank();
        vm.startPrank(buyer);

        transferToken.approve(address(booking), 1 ether);
        assertEq(transferToken.allowance(buyer, address(booking)), 1 ether);
    }

    function test_MakeAReservation() public {
        address _hotel = address(1000);
        booking.addHotel(_hotel);
        
        vm.stopPrank();
        vm.startPrank(buyer);

        transferToken.approve(address(booking), 1 ether);
        assertEq(transferToken.allowance(buyer, address(booking)), 1 ether);

        uint256 _tokenId = booking.makeAReservation(_hotel, 444444444444, 1 ether);
        assert(_tokenId != 0);
        assert(transferToken.balanceOf(buyer) == 0);
        assert(transferToken.balanceOf(_hotel) == 1 ether);
        assert(booking.getReservations(buyer).length == 1);
    }

    function test_MakeBuyAListing() public {
        address _hotel = address(1000);
        booking.addHotel(_hotel);
        
        vm.stopPrank();
        vm.startPrank(buyer);

        transferToken.approve(address(booking), 1 ether);
        assertEq(transferToken.allowance(buyer, address(booking)), 1 ether);

        uint256 _tokenId = booking.makeAReservation(_hotel, 444444444444, 1 ether);
        assert(_tokenId != 0);
        assert(transferToken.balanceOf(buyer) == 0);
        assert(transferToken.balanceOf(_hotel) == 1 ether);

        reserveToken.approve(address(booking), _tokenId);
        vm.stopPrank();
        vm.startPrank(buyer2);

        transferToken.approve(address(booking), 1 ether);
        assertEq(transferToken.allowance(buyer2, address(booking)), 1 ether);

        uint256 previousBalance = transferToken.balanceOf(address(booking));
        booking.changeReservationOwner(buyer, 1, 900000000000000000 wei);
        // console.log("###1");
        assert(transferToken.balanceOf(buyer) == (900000000000000000 wei / 100) * 90);
        // console.log("###2");
        assert(transferToken.balanceOf(buyer2) == 100000000000000000);
        // console.log("###3");
        assert(reserveToken.ownerOf(1) == buyer2);
        // console.log("###4", transferToken.balanceOf(address(booking)));
        assert(transferToken.balanceOf(address(booking)) > previousBalance);
        

    }

}
