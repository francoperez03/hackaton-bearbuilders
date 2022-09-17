import abi from "../../utils/abi.json";
import * as React from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContract,
} from "wagmi";
import { Button } from "@nextui-org/react";

export default function Web3Button({
  contractAddress,
  functionName,
  idleText,
  pendingText,
  succesText,
}) {
  const { config, isError, error, status } = usePrepareContractWrite({
    addressOrName: contractAddress,
    contractInterface: JSON.parse(abi.result),
    functionName: functionName,
    args: ["0x737472c8f1283e0c3f7dd42658F2Aa1dA9f08249", 1663682648, 1000],
    overrides: {
      gasLimit: 3000000,
    },
  });

  const { data, write } = useContractWrite(config);

  console.log({ write });
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <Button
        disabled={!write || isLoading}
        onClick={() => write(contractAddress, 1, 1)}
      >
        {isLoading ? pendingText : idleText}
      </Button>
      {isSuccess && (
        <div>
          {succesText}
          <div>
            <a href={`https://goerli.etherscan.io//tx/${data?.hash}`}>
              Etherscan
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
