
import { Contract} from "ethers";
import web3 from "web3";

export interface RaphaelPayload {
    tokenContract?: Contract;
    raphaelContract?: Contract;
    stakingContract?: Contract;
    address?: string;
    proposalIndex?: string;
}


//Getter functions
export const getProposalStatus = async (payload: any) => {
// function getProposalStatus(uint256 proposalIndex) external view returns(uint256);
    const { contracts, proposalIndex} = payload;
    const {raphaelContract} = contracts;
	return await raphaelContract.methods.getProposalStatus(proposalIndex).call();

}

export const getProposalData = async(payload: any) => {
    // function getProposalData(uint256 proposalIndex) returns (string memory,uint256,uint256,uint256,uint256, uint8)
    // details, votesFor, votesAgainst, startBlock, endBlock, status
    const { contracts, proposalIndex} = payload;
    const {raphaelContract} = contracts;
	const res = (await raphaelContract.methods.getProposalData(proposalIndex).call());
    const yesVotes = Number(web3.utils.fromWei(res[1]));
    const noVotes = Number(web3.utils.fromWei(res[2]));
    const startBlock = res[3];
    const endBlock = res[4];
    const proposalName = res[0];
    const id = proposalIndex;
    return {proposalName, id, yesVotes, noVotes, startBlock, endBlock}
  
}

export const getProposalVotes = async (payload: any) => {
//     function getProposalVotes(uint256 proposalIndex) external view returns(uint256, uint256);
    const { contracts, proposalIndex} = payload;
    const {raphaelContract} = contracts;
    return  await raphaelContract.methods.getProposalVotes(proposalIndex).call();
}

export const getProposalResult = async (payload: any) => {
//     function getProposalResult(uint256 proposalIndex) external view returns(bool);
    const { contracts, proposalIndex} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.getProposalResult(proposalIndex).call();
}

//General DAO information

export const getMinVotesNeeded = async(payload: any) => {
//     function getMinVotesNeeded() external view returns(uint256);
    const { contracts} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.getMinVotesNeeded()
    .call();
}

export const getNativeTokenAddress = async(payload: any) => {
    // function getNativeTokenAddress() external view returns(address);
    const { contracts} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.getNativeTokenAddress()
    .call();
}

export const getNativeTokenBalance = async(payload: any) => {
// function getNativeTokenBalance() public view returns (uint256)
    const { contracts} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.getNativeTokenBalance()
    .call();
}


export const getNftContractAddresses = async(payload: any) => {
//     function getNftContractAddresses() external returns(address[] memory);
    const { contracts} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.getNftContractAddresses()
    .call();
}

export const getStakingAddress = async(payload: any) => {
//     function getStakingAddress() external view returns(address);
    const { contracts} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.getStakingAddress()
    .call();
}

export const isShutdown = async(payload: any) => {
//     function isShutdown() external view returns(bool);
    const { contracts } = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.isShutdown()
    .call();
}

// Platform Variable Setters

export const setVotingDelayDuration = async(payload: any) => {
//     function setVotingDelayDuration(uint256 newDuration) external;
    const { contracts, address} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.setVotingDelayDuration()
    .call({ from: address });
}

export const setVotingDuration = async(payload: any) => {
//     function setVotingDuration(uint256 newDuration) external;
    const { contracts, address} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.setVotingDuration()
    .call({ from: address });
}

export const setStakingAddress = async(payload: any) => {
//     function setStakingAddress(address _stakingContractAddress) external;
    const { contracts, address} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.setStakingAddress()
    .call({ from: address });
}
export const setNativeTokenAddress = async(payload: any) => {
//     function setNativeTokenAddress(address tokenContractAddress) external;
    const { contracts, address, tokenAddress} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.setNativeTokenAddress(tokenAddress)
    .call({ from: address });
}

// Proposal functionsKU


export const createProposal = async(payload: any) => {
//     function createProposal(string memory details) external;
    const { contracts, address} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.createProposal("Awesome Project 3").send({from:address});
   
}

export const updateProposalStatus = async(payload: any) => {
//     function updateProposalStatus(uint256 proposalIndex) external;
    const { contracts, address, proposalIndex} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.updateProposalStatus(proposalIndex).send({ from: address });
}
export const setProposalToResolved = async(payload: any) => {
//     function setProposalToResolved(uint256 proposalIndex) external;
        const { contracts, address, proposalIndex} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.setProposalToResolved(proposalIndex)
    .call({ from: address });
}

export const setProposalToCancelled = async(payload: any) => {
//     function setProposalToCancelled(uint256 proposalIndex) external;
    const { contracts, address, proposalIndex} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.setProposalToCancelled(proposalIndex)
    .call({ from: address });
}

export const vote = async(payload: any) => {
//     function vote(uint256 proposalIndex, bool _vote) external;
    const { contracts, address, vote, proposalIndex} = payload;
    const {raphaelContract} = contracts;
    debugger;
    // createProposal(payload)
    // updateProposalStatus(payload);
    return await raphaelContract.methods.vote(proposalIndex, vote)
    .send({ from: address });
}
export const delegate = async(payload: any) => {
//     function delegate(address delegateAddress) external;
    const { contracts, address,delegateAddress} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.delegate(delegateAddress)
    .send({ from: address });
}
    
export const transferNativeToken = async(payload: any) => {
//     function transferNativeToken(address to, uint256 amount) external returns(bool);
    const { contracts, address,receiver, amount} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.transferNativeToken(receiver, amount)
    .send({ from: address });
}

export const transferNFT = async(payload: any) => {
//     function transferNFT(address nftContractAddress, address recipient, uint256 tokenId) external;
    const { contracts, address} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.transferNFT()
    .send({ from: address });
}

