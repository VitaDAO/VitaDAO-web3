import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import { TorusConnector } from '@web3-react/torus-connector';
export const supportedChains = {
  0: "Not connected",
  1: "mainnet",
  4: "rinkeby",
  1337: "development",
  31337: "hardhat",
};

const POLLING_INTERVAL = 12000;

// TODO: setup rpc urls
const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.REACT_APP_RPC_URL_1 as string,
  4: process.env.REACT_APP_RPC_URL_4 as string,
};


export const chainIDToNetwork = {
  "0": "Not connected",
  "1": "Ethereum Mainnet",
  "4": "Rinkeby Testnet",
  "5": "Goerli Testnet",
  "77": "Sokol Testnet",
  "100": "xDai"
}


export const chainIDToEndpoint = {
  "0": "",
  "1": process.env.REACT_APP_INFURA_ENDPOINT_MAINNET, // ethereum Mainnet
  "4": process.env.REACT_APP_INFURA_ENDPOINT_RINKEBY, // ethereum Rinkeby
  "5": process.env.REACT_APP_INFURA_ENDPOINT_GOERLI, // ethereum Goerli
  "77": "https://sokol.poa.network",
  "100": "https://rpc.xdaichain.com/"
}
export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainnet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
    31337, // devChain
  ],
});

const initOptions = {
  enableLogging: process.env.NODE_ENV === 'production' ? false : true,
  network: {
    host: chainIDToEndpoint[process.env.REACT_APP_CHAIN_ID],
    chainId: parseInt(process.env.REACT_APP_CHAIN_ID),
    networkName: chainIDToNetwork[process.env.REACT_APP_CHAIN_ID]
  }
}

const constructorOptions = {
  buttonPosition: "bottom-right"
}

const loginOptions = {

}

export const torus = new TorusConnector({ chainId: parseInt(process.env.REACT_APP_CHAIN_ID), initOptions, constructorOptions, loginOptions });


// local chain IDs like 1337 are not supported by default by web3-react's portis connector (kak dom).
// You must pass in the url and chain id for your local chain/node as third config argument in constructor.
const infuraProvider = {
  nodeUrl: process.env.REACT_APP_INFURA_ENDPOINT as string,
  chainId: process.env.REACT_APP_CHAIN_ID,
};

export const portis = new PortisConnector({
  dAppId: process.env.REACT_APP_PORTIS_DAPP_ID as string,
  networks: [1,100],
  config: infuraProvider,
});

// For mainnet change to 1
export const walletConnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[process.env.REACT_APP_CHAIN_ID] },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

// local chain IDs like 1337 are not supported by default by web3-react's portis connector (kak dom).
// You must pass in the url and chain id for your local chain/node as third config argument in constructor.
