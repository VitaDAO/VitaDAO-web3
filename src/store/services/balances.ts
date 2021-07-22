import { ethers, Contract } from "ethers";
import { IBalances } from "../reducers";

const getEthBalance = async (ethAddress: string, provider: any) => {
  try {
    const ethBalance = await getBalance(provider, ethAddress);
    return Number(ethers.utils.formatEther(ethBalance.toString()));
  } catch (error) {
    console.log(error);
    return 0;
  }
};

const getERC20Balance = async (
  ethAddress: string,
  contract: Contract,
  decimals: number
) => {
  try {
    const tokenBalance = await contract.methods.balanceOf(ethAddress).call();
    return Number(ethers.utils.formatUnits(tokenBalance.toString(), decimals));
  } catch (error) {
    console.log(error);
    return 0;
  }
};


const getAllowedBalance = async (
  ethAddress: string,
  contract: Contract,
  decimals: number
) => {
  try {
    const allowedBalance = await contract.methods.allowance(ethAddress, process.env.REACT_APP_STAKING_ADDRESS).call();
    return Number(ethers.utils.formatUnits(allowedBalance.toString(), decimals));
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export const getBalances = async (payload: any) => {
  const { ethAddress, contracts, provider } = payload;

  const [
    ethBalance,
    vitaBalance,
    allowedBalance,
  ] = await Promise.all([
    getEthBalance(ethAddress, provider),
    getERC20Balance(ethAddress, contracts.tokenContract, 18),
    getAllowedBalance(ethAddress, contracts.tokenContract, 18)
  ]);
  return {
    ethBalance,
    vitaBalance,
    allowedBalance
  } as IBalances;
};

async function getBalance(provider: any, ethAddress: any) {
  try {
    return await provider.getBalance(ethAddress);
  } catch (error) {
    console.log(error);
    return 0;
  }
}
