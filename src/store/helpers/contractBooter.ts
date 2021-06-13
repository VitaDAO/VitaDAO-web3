import { AbiItem } from 'web3-utils';
import { Contract } from 'ethers';
import Web3 from 'web3';
import TokenABI from '../../interfaces/VITA.json';
import RaphaelABI from '../../interfaces/Raphael.json';
import StakingABI from '../../interfaces/Staking.json';

export interface Contracts {
	tokenContract: Contract;
	raphaelContract: Contract;
	stakingContract: Contract;
}

export const checksumAddress = (address: string) =>
	Web3.utils.toChecksumAddress(address);

// ? To "Boot" up a set of contracts, call this function and pass in a provider/web3 instance

export function getWeb3Contracts(web3) {
	// example contract creations
	const tokenContract = new web3.eth.Contract(
		TokenABI.abi as AbiItem[],
		checksumAddress(process.env.REACT_APP_TOKEN)
	);
	const daiContract = new web3.eth.Contract(
		TokenABI.abi as AbiItem[],
		checksumAddress(process.env.REACT_APP_MOCK_DAI)
	);

	const raphaelContract = new web3.eth.Contract(
		RaphaelABI.abi as AbiItem[],
		checksumAddress(process.env.REACT_APP_RAPHAEL_ADDRESS)
	);

	const stakingContract = new web3.eth.Contract(
		StakingABI.abi as AbiItem[],
		checksumAddress(process.env.REACT_APP_STAKING_ADDRESS)
	);
	const contracts = {
		tokenContract,
		raphaelContract,
		stakingContract,
		daiContract,
	};
	return contracts;
}

export function getEthersContracts(provider) {
	// example contract creations
	const tokenContract = new Contract(
		checksumAddress(process.env.REACT_APP_TOKEN_ADDRESS),
		TokenABI.abi as AbiItem[],
		provider
	);
	const raphaelContract = new Contract(
		checksumAddress(process.env.REACT_APP_RAPHAEL_ADDRESS),
		RaphaelABI.abi as AbiItem[],
		provider
	);
	const stakingContract = new Contract(
		checksumAddress(process.env.REACT_APP_STAKING_ADDRESS),
		StakingABI.abi as AbiItem[],
		provider
	);

	const daiContract = new Contract(
		checksumAddress(process.env.REACT_APP_MOCK_DAI),
		TokenABI.abi as AbiItem[],
		provider
	);

	const contracts = {
		tokenContract,
		raphaelContract,
		stakingContract,
		daiContract,
	};
	return contracts;
}
