import { ethers } from "ethers";
import { MULTICALL_ADDR } from "../config/contracts";
import MultiCallABI from "../config/abis/MultiCallABI.json";
import ERC20ABI from "../config/abis/ERC20ABI.json";

export const RPC_ENDPOINT = {
  1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  97: "https://data-seed-prebsc-1-s1.binance.org:8545",
};

export const getContract = (abi, address, signer, chainID) => {
  const simpleRpcProvider = new ethers.providers.JsonRpcProvider(
    RPC_ENDPOINT[chainID]
  );
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getNFTFeeTokenContract = (address, signer, chainID = 1) => {
  return getContract(ERC20ABI, address, signer, chainID);
};

export const getMulticallContract = (signer, chainID = 1) => {
  return getContract(MultiCallABI, MULTICALL_ADDR[chainID], signer, chainID);
};

export const multicall = async (abi, calls, chainID = 1) => {
  const itf = new ethers.utils.Interface(abi);
  const multi = getMulticallContract(null, chainID);
  const calldata = calls.map((call) => [
    call.address.toLowerCase(),
    itf.encodeFunctionData(call.name, call.params),
  ]);

  const { returnData } = await multi.aggregate(calldata);
  const res = returnData.map((call, i) =>
    itf.decodeFunctionResult(calls[i].name, call)
  );

  return res;
};
