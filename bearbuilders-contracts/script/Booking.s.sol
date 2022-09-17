// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/Booking.sol";
import { ReserveERC721 } from "../src/ReserveERC721.sol";
import { TransferTokenERC20 } from "../src/TransferTokenERC20.sol";
import { POASERC721 } from "../src/POASERC721.sol";

contract BookingScript is Script {
    function setUp() public {}

    function run() public {
        vm.broadcast();
        //Buyer 1 FRAN 0xA81895CE092398F043432bCe85D4579332aC61d8
        //Buyer 2 LEO  0x1649BC2c95C7A022D2707De29AA7Ed380796aE33
        //Owner MIGUE  0x6a98C2Ddcb72912ECcf0Af62A4F95917E8Bfbe16
        //hotel LAUTA  0x737472c8f1283e0c3f7dd42658F2Aa1dA9f08249
        Booking booking = new Booking();
        TransferTokenERC20 transferToken = new TransferTokenERC20(1000000 gwei);
        ReserveERC721 reserveToken = new ReserveERC721(0x6a98C2Ddcb72912ECcf0Af62A4F95917E8Bfbe16);
        POASERC721 poasToken = new POASERC721(0x6a98C2Ddcb72912ECcf0Af62A4F95917E8Bfbe16);
        transferToken.transfer(address(booking), 800000 gwei);
        transferToken.transfer(0xA81895CE092398F043432bCe85D4579332aC61d8, 100000 gwei);
        transferToken.transfer(0x1649BC2c95C7A022D2707De29AA7Ed380796aE33, 100000 gwei);
        // transferToken.approve(address(booking), 1 ether);

        booking.initialize(address(transferToken), address(reserveToken), address(poasToken));

        booking.addHotel(0x737472c8f1283e0c3f7dd42658F2Aa1dA9f08249);
    }
}
