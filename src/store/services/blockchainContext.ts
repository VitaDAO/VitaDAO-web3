import { getNetwork } from 'ethers/utils';
import { getDefaultProvider, Signer, ethers, Contract } from "ethers";
import TokenABI from '../../interfaces/Token.json';
import RaphaelABI from "../../interfaces/Raphael.json";
import StakingABI from "../../interfaces/Staking.json";
export interface BlockchainContext {
isMetamaskInstalled: boolean;
  isAppAuthorised: boolean;
  approvedNetwork: boolean;
  approvedNetworkName: string;
  approvedChainId: number;
  chainId?: number;
  networkName?: string;
  provider: any;
  signer?: Signer;
  tokenInstanceContract: Contract,
  signerAddress?: string;
  walletAddress?: string;
  ethAddress?: string;
  web3Provider?: any;
}
export class BlockchainContext implements BlockchainContext {
    isMetamaskInstalled: boolean = false;
    isAppAuthorised: boolean = false;
    approvedNetwork: boolean = false;
    approvedNetworkName: string;
    approvedChainId: number;
    chainId?: number;
    networkName?: string;
    provider: any;
    signer?: Signer;
    tokenInstanceContract: Contract;
    raphaelInstanceContract: Contract;
    stakingInstanceContract: Contract;
    walletAddress?: string;
    ethAddress?: string;
    web3Provider?: any;
    constructor(web3Provider: any) {
        const network = getNetwork(parseInt(`${process.env.REACT_APP_CHAIN_ID}`));
        this.provider = network.name === 'unknown' ?
          new ethers.providers.JsonRpcProvider('http://localhost:8545/') :
          getDefaultProvider(network);
    
        this.approvedNetworkName = network.name;
        this.approvedChainId = network.chainId;
     
        // Arrange contracts here
        this.tokenInstanceContract = new Contract(`${process.env.REACT_APP_TOKEN}`,
        TokenABI.abi,
        this.provider);
        this.raphaelInstanceContract = new Contract(`${process.env.REACT_APP_RAPHAEL_ADDRESS}`,
        RaphaelABI.abi,
        this.provider);
        this.stakingInstanceContract  = new Contract(`${process.env.REACT_APP_STAKING_ADDRESS}`,
        StakingABI.abi,
        this.provider);

        if(web3Provider)
        {
          this.web3Provider = web3Provider;
          this.walletAddress = web3Provider.isPortis ? web3Provider._portis._selectedAddress : web3Provider.selectedAddress;
          this.ethAddress =  this.walletAddress
          // this.enableEthereum = this.enableEthereum.bind(this);
          // const { ethereum } = window as any;
          // if (ethereum && ethereum.isMetaMask) {
          //   this.isMetamaskInstalled = true;
          // }
          //
          
          setSigners(this);
        }
      }
}
async function setSigners(context : BlockchainContext): Promise<BlockchainContext> {
    
    const provider = new ethers.providers.Web3Provider(context.web3Provider);
    const network = await provider.getNetwork();
    context.chainId = network.chainId;
    context.networkName = network.name;
    context.approvedNetwork = (context.approvedChainId === context.chainId);
    context.signer = provider.getSigner()
  
      if (context.approvedNetwork && context.signer) {
        // @ts-ignore
        const writeableTokenContract = context.tokenInstanceContract.connect(context.signer);
        context.tokenInstanceContract = writeableTokenContract;
      }
    return context;
}