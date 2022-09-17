import abi from "../../../utils/abi/Booking.sol/Booking.json";
import * as React from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { Button } from "@nextui-org/react";

export default function Web3Button({
  contractAddress,
  functionName,
  idleText,
  pendingText,
  succesText,
}) {
  const { config } = usePrepareContractWrite({
    addressOrName: contractAddress,
    contractInterface: abi.abi,
    functionName: functionName,
  });
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <Button disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? pendingText : idleText}
      </Button>
      {isSuccess && (
        <div>
          {succesText}
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </div>
  );
}
