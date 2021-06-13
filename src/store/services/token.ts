
import { Contract, ethers} from "ethers";

export interface TokenPayload {
    tokenContractInstance?: Contract;
    raphaelContractInstance?: Contract;
    stakingContractInstance?: Contract;
    address?: string;
    amount: number;
}

export const approveTokens = async (payload: any)=>{
  try {
    const { contracts, address, amount} = payload;
    const { tokenContract, stakingContract } = contracts;
    let changedAmount = amount + 1;
    const amountParsed = ethers.utils.parseUnits(changedAmount.toString());
    
    const res = await tokenContract.methods.approve(stakingContract._address, amountParsed).send({ from: address });

    return res.events;
  } catch (error) {
    console.log(error)
  }
}
export const allowance = async(payload: any)=>{
    const { contracts} = payload;
    const { tokenContract, stakingContract } = contracts;

    return await tokenContract.methods.allowance(stakingContract._address)
    .call();
}
export const balanceOf = async(payload: any)=>{
    const { contracts, address} = payload;
    const { tokenContract } = contracts;
    return await tokenContract.methods.balanceOf(address)
    .call();
}
export const increaseAllowance = async(payload: any) =>{
    const { contracts, address, amount} = payload;
    const { tokenContract, stakingContract } = contracts;
    let changedAmount = amount + 1;
    const amountParsed = ethers.utils.parseUnits(changedAmount.toString());
    return await tokenContract.methods.approve(stakingContract._address, amountParsed)
    .send({ from: address });
}
export const decreaseAllowance = async(payload: any) =>{
    const { contracts, address, amount} = payload;
    const { tokenContract, stakingContract } = contracts;
    let changedAmount = amount + 1;
    const amountParsed = ethers.utils.parseUnits(changedAmount.toString());
    return await tokenContract.methods.approve(stakingContract._address, amountParsed)
    .send({ from: address });
}