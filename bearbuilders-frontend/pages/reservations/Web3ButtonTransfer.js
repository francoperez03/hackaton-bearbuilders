import abiERC721 from "../../utils/abiERC721.json";
import abiERC20 from "../../utils/abiERC20.json";
import { useState, useEffect } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContract,
} from "wagmi";
import { Button } from "@nextui-org/react";

export default function Web3ButtonTransfer({
  approveContractAddress,
  contractAddress,
  functionName,
  idleText,
  pendingText,
  succesText,
}) {
  const [buttonText, setButtonText] = useState(idleText);

  const [buttonColor, setButtonColor] = useState("primary");

  //Approve
  const { config: configApprove } = usePrepareContractWrite({
    addressOrName: approveContractAddress,
    contractInterface: JSON.parse(abiERC20.result),
    functionName: "approve",
    args: [contractAddress, 10000],
    overrides: {
      gasLimit: 3000000,
    },
  });
  const { data: dataApprove, write: writeApprove } =
    useContractWrite(configApprove);

  const { isLoading: isLoadingApprove, isSuccess: isSuccessApprove } =
    useWaitForTransaction({
      hash: dataApprove?.hash,
    });
  const SELLER_ADDRESS = "0xA81895CE092398F043432bCe85D4579332aC61d8";
  const RESERVATION_ID = 3;
  const PRICE_ERC20 = 1;
  // //Reservation
  const {
    config: configReservation,
    error: errorApprove,
    isError: isErrorApprove,
  } = usePrepareContractWrite({
    addressOrName: contractAddress,
    contractInterface: JSON.parse(abiERC721.result),
    functionName: functionName,
    args: [SELLER_ADDRESS, RESERVATION_ID, PRICE_ERC20],
    overrides: {
      gasLimit: 3000000,
    },
  });

  const { data: dataReservation, write: writeReservation } =
    useContractWrite(configReservation);

  const { isLoading: isLoadingReservation, isSuccess: isSuccessReservation } =
    useWaitForTransaction({
      hash: dataReservation?.hash,
    });
  useEffect(() => {
    if (isLoadingApprove) {
      console.log("CARGANDO");
      setButtonColor("warning");
      setButtonText(pendingText);
    }
  }, [isLoadingApprove]);

  useEffect(() => {
    if (isSuccessApprove) {
      console.log("APROBADO", dataApprove?.hash);
      writeReservation();
    }
  }, [isSuccessApprove]);

  useEffect(() => {
    if (isSuccessReservation) {
      console.log("SUPER APROBADO", dataReservation?.hash);
      setButtonColor("#8a6445");
      setButtonText(succesText);
    }
  }, [isSuccessReservation]);

  const onClick = () => {
    writeApprove(contractAddress, 1, 1);
  };
  return (
    <div>
      <Button onClick={onClick} color={buttonColor}>
        {buttonText}
      </Button>
      {/* {isSuccess && (
        <div>
          {succesText}
          <div>
            <a href={`https://goerli.etherscan.io//tx/${data?.hash}`}>
              Etherscan
            </a>
          </div>
        </div>
      )} */}
    </div>
  );
}
