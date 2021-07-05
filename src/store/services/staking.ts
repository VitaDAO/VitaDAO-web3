
import { Contract} from "ethers";
import web3 from "web3";

export interface StakingPayload {
    tokenContract?: Contract;
    raphaelContract?: Contract;
    stakingContract?: Contract;
    address?: string;
    withdrawalAmount?: number;
    stakingAmount?: number
}
export const getTokenAddress = async (payload: any) => {
// function getTokenAddress() public view returns (address)
    const { contracts} = payload;
    const {stakingContract} = contracts;

    return await stakingContract.methods.getTokenAddress()
    .call();
}
export const getDaoAddress = async (payload: any) => {
// function getDaoAddress() public view returns (address) 
    const { contracts} = payload;
    const {stakingContract} = contracts;

    return await stakingContract.methods.getDaoAddress()
    .call();
}
export const getStakedBalance = async (payload: any) => {
// function getStakedBalance(address staker) external view override returns(uint256) 
    const { contracts, address} = payload;
    const {stakingContract} = contracts;
    const res = await stakingContract.methods.getStakedBalance(address)
    .call();
    console.log(web3.utils.fromWei(res));

    return  web3.utils.fromWei(res);
}
export const getUnlockTime = async (payload: any) => {
// function getUnlockTime(address staker) external view override returns(uint256) 
    const { contracts, address, provider} = payload;
    const {stakingContract} = contracts;

    const unlockBlock =  await stakingContract.methods.getUnlockTime(address)
    .call();
    const web3Provider = provider();
    const blockNumber = await web3Provider.eth.getBlockNumber();
    var timeNow = new Date();
    const endBlock = (blockNumber - unlockBlock)*15;
    const unlockDate = endBlock > 0 ? new Date(timeNow.setSeconds(timeNow.getSeconds()+endBlock)):
        new Date(timeNow.setDate(timeNow.getDate() - 1));

    return unlockDate.toDateString();


}
export const isShutdown = async (payload: any) => {
// function isShutdown() public view override returns(bool) 
    const { contracts} = payload;
    const {stakingContract} = contracts;

    return await stakingContract.methods.isShutdown()
    .call();
}
export const voted = async (payload: any) => {
// function voted(address voter,uint256 endBlock) external onlyDao notShutdown override returns(bool) 
    const { contracts, address} = payload;
    const {stakingContract} = contracts;

    return await stakingContract.methods.voted(address, 1)
    .call({ from: address });
}
export const stake = async (payload: any) => {
// function stake(uint256 amount) external notShutdown override
    try{
        const { contracts, address, stakingAmount} = payload;
        const {stakingContract} = contracts;
        const amountParsed = web3.utils.toWei(stakingAmount.toString());
        return await stakingContract.methods.stake(amountParsed).send({ from: address });
    } catch(error){ console.log(error)}
}
export const withdraw = async (payload: any) => {
// function withdraw(uint256 amount) external override
    const { contracts, address, withdrawalAmount} = payload;
    const {stakingContract} = contracts;
    const amountParsed = web3.utils.toBN((withdrawalAmount).toString());
    
    return await stakingContract.methods.withdraw(amountParsed)
    .send({ from: address });
}
