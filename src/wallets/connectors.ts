import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const supportedChains = {
  0: "Not connected",
  //1: "mainnet",
  4: "rinkeby",
  1337: "development",
  31337: "hardhat",
};

const POLLING_INTERVAL = 12000;

// TODO: setup rpc urls
const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.RPC_URL_1 as string,
  4: process.env.RPC_URL_4 as string,
};

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});
export const chainIDToEndpoint = {
  "0": "",
  "1": process.env.REACT_APP_INFURA_ENDPOINT, // ethereum Mainnet
  "4": process.env.REACT_APP_INFURA_ENDPOINT, // ethereum Rinkeby
  "5": process.env.REACT_APP_INFURA_ENDPOINT, // ethereum Goerli
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

// local chain IDs like 1337 are not supported by default by web3-react's portis connector (kak dom).
// You must pass in the url and chain id for your local chain/node as third config argument in constructor.
