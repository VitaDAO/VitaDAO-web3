
import { Contract} from "ethers";
import web3 from "web3";
import { uploadDataToIpfs, getProposalDataFromIPFS } from './ipfs';

export interface RaphaelPayload {
    tokenContract?: Contract;
    raphaelContract?: Contract;
    stakingContract?: Contract;
    address?: string;
    proposalIndex?: string;
}
const proposalData = {
    project: {
        id: "1",
        funding_stage: "funded project",
        title: "The Longevity Molecule",
        research_lead: "Morten Scheibye-Knudsen",
        institution: "University of Copenhagen",
        clinical_stage: "preclinical",
        ip_status: "patent not filled",
        budget: 1200000,
        budget_currency: "USD",
        summary:
          "The global elderly population is projected to substantially increase throughout the 21st century. By the year 2100 a fifth of the total world population will be aged 65 or older posing a serious socio-economic challenge to societies world wide.",

        project_summary:
          "What if therapeutics to slow down the aging process and prevent age-related disease already existed? Recently, in an unprecedented effort, a large-scale study employing advanced machine learning methods analyzed medical records from over 4 million individuals in the Danish Health System’s medical and prescription records. The study, consisting of over 1.4 billion prescriptions, found that a number of prescription drugs were highly associated with longer life- and health-span in long-live populations. Here, we present a unique investment opportunity. We seek to validate these observations through a series of carefully conducted wet lab experiments. If successful, this work could result in the repurposing of several FDA-approved therapeutics for the purpose of extending human lifespan, at a lower cost and over faster timelines than conceivably possible with de novo drug discovery. This unique investment opportunity allows savvy longevity investors the chance to own a share of the potential intellectual property generated from these studies, and in turn, a potential share in the future of life extension.",
        aims_and_hypothesis:
          "The global elderly population is projected to substantially increase throughout the 21st century. By the year 2100 a fifth of the total world population will be aged 65 or older posing a serious socioeconomic challenge to societies world-wide. Interventions that ensure healthy aging are therefore of critical importance.",
      },
    proposal_type: "project",
    title: "New members & minimum contributions",
    summary:
      "The global elderly population is projected to substantially increase throughout the 21st century. By the year 2100 a fifth of the total world population will be aged 65 or older posing a serious socio-economic challenge to societies world wide.",
    details:
      "As originally conceived, VitaDAO provided Members with 1% interests in VitaDAO in exchange for contributions to projects. Each 1% interest represented 100,000 units in the underlying legal entity sitting beneath VitaDAO and there were 10,000,00 units in VitaDAO in total. As of several weeks ago, all current interests in VitaDAO have been sold. And, there are currently a growing number of people (and entities) that would like to join VitaDAO as Members. The following proposal would enable VitaDAO to accept new Members, if so desired, by authorizing an increase in the number of units in VitaDAO This proposal would also authorize the Members to: (a) determine the appropriate process for admitting new Members or enable existing Members to increase their respective interest in VitaDAO; and (b) enable the Members to set a minimum contribution amount. Votes to admit new members or set minimum contribution amounts would not be based on a majority vote. Rather, like decisions to support projects, these votes would be based on whether there are more “Yes” votes than “No” votes during a given voting period. This process would be facilitated via a separate governance proposal through the dApp.",
    link: "https://docs.google.com/documents/d/",
};

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
    const data = JSON.parse(await getProposalDataFromIPFS(proposalName));
    const id = proposalIndex;
    return {proposalName, id, yesVotes, noVotes, startBlock, endBlock,
        link: data.link, proposal_type: data.proposal_type, summary: data.summary, 
        title: data.title, voting_start_date: data.voting_start_date, voting_end_date: data.voting_end_date, project: data.project === undefined? null: data.project};
  
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
export const getProposalCount = async(payload: any) =>{
    const { contracts} = payload;
    const {raphaelContract} = contracts;
    return await raphaelContract.methods.proposalCount().call();

}

export const getAllProposals = async(payload: any) =>{
    const { contracts} = payload;
    const numberOfProposals = await getProposalCount(payload);
    let data = [];
    for(let i = 0; i<numberOfProposals; i++){
        const res = await getProposalData({contracts, proposalIndex: i+1});
        data.push(res);
    }
    debugger;
    return data;
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
    // const { contracts, address, proposalData} = payload;
    const { contracts, address} = payload;
    const {raphaelContract} = contracts;
    const numberOfProposals = await getProposalCount(payload);
    
    const contentHash = await uploadDataToIpfs(proposalData, numberOfProposals);
    return await raphaelContract.methods.createProposal(contentHash).send({from:address});
   
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

