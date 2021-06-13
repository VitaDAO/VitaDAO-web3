import React, { createContext, useState, useEffect } from "react";
import Web3 from "web3";
import {
  getWeb3Contracts,
  getEthersContracts,
  Contracts,
} from "../helpers/contractBooter";
import { chainIDToEndpoint } from "../../wallets/connectors";

interface ContextProps {
  contracts: Contracts;
  updateContractsWeb3: (provider: any) => void;
  updateContractsEthers: (provider: any) => void;
}

export const ContractContext = createContext({} as ContextProps);

export function ContractProvider(props: any) {
  const [contracts, setContracts] = useState<Contracts>(null);

  const initializeWeb3 = () => {
    let web3 = new Web3(Web3.givenProvider || "http://localhost:8545/");

    if (process.env.REACT_APP_CHAIN_ID !== "1337") {
      //@ts-ignore
      if (process.env.REACT_APP_CHAIN_ID) {
        //@ts-ignore
        web3 = new Web3(chainIDToEndpoint[process.env.REACT_APP_CHAIN_ID]);
        //@ts-ignore
      } else {
        try {
          //@ts-ignore
          web3 = new Web3(window.ethereum);
          //@ts-ignore
          window.ethereum.enable();
        } catch (error) {
          console.log(`window.ethereum does not exist!! Error: ${error}`);
        }
      }
    }
    return web3;
  };

  const initializeContracts = () => {
    const web3 = initializeWeb3();
    const contracts = getWeb3Contracts(web3);
    setContracts(contracts);
  };

  const updateContractsWeb3 = (provider: any) => {
    // debugger;
    const contracts = getWeb3Contracts(provider);
    setContracts(contracts);
  };

  const updateContractsEthers = (provider: any) => {
    const contracts = getEthersContracts(provider);
    setContracts(contracts);
  };

  // ? on app start-up we use contractBooter to get web3 contracts. If you want ethers contracts on start-up call => getEthersContracts(provider)

  useEffect(() => {
    initializeContracts();
    // eslint-disable-next-line
  }, []);

  const value = { contracts, updateContractsWeb3, updateContractsEthers };
  return (
    <ContractContext.Provider value={value}>
      {props.children}
    </ContractContext.Provider>
  );
}
