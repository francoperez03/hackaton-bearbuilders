import abiERC721 from "../../utils/abiERC721.json";
import abiERC20 from "../../utils/abiERC20.json";
import { useState, useEffect } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { Button } from "@nextui-org/react";

export default function Web3Button({
  approveContractAddress,
  contractAddress,
  functionName,
  idleText,
  pendingText,
  succesText,
}) {
  const [buttonText, setButtonText] = useState(idleText);

  //Approve
  const { config: configApprove } = usePrepareContractWrite({
    addressOrName: approveContractAddress,
    contractInterface: JSON.parse(abiERC20.result),
    functionName: "approve",
    args: ["0xA10e86B3db3432aaB96Ae3827b162B42C3CDFE66", 10000],
    overrides: {
      gasLimit: 3000000,
    },
  });
  const { data, write: writeApprove } = useContractWrite(configApprove);

  const { isLoading: isLoadingApprove, isSuccess: isSuccessApprove } =
    useWaitForTransaction({
      hash: data?.hash,
    });

  // //Reservation
  const { config: configReservation } = usePrepareContractWrite({
    addressOrName: contractAddress,
    contractInterface: JSON.parse(abiERC721.result),
    functionName: functionName,
    args: ["0x737472c8f1283e0c3f7dd42658F2Aa1dA9f08249", 1663682648, 1000],
    overrides: {
      gasLimit: 3000000,
    },
  });
  const { write: writeReservation } = useContractWrite(configReservation);
  const { isLoading: isLoadingReservation, isSuccess: isSuccessReservation } =
    useWaitForTransaction({
      hash: data?.hash,
    });
  useEffect(() => {
    if (isLoadingApprove) {
      console.log("CARGANDO");
      setButtonText(pendingText);
    }
  }, [isLoadingApprove]);

  useEffect(() => {
    if (isSuccessApprove) {
      console.log("APROBADO");
      writeReservation();
    }
  }, [isSuccessApprove]);
  useEffect(() => {
    if (isSuccessApprove) {
      console.log("SUPER APROBADO");
      setButtonText(succesText);
    }
  }, [isSuccessReservation]);
  const onClick = () => {
    writeApprove(contractAddress, 1, 1);
  };
  return (
    <div>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
}
