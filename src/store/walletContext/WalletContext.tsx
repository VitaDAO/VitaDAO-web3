import React, { useContext, useState, useEffect, createContext } from "react";
import { StoreContext } from "../store";
import { isMetamaskEnabled } from "../../wallets/utils";
import { useWeb3React } from "@web3-react/core";
import { useToggle } from "../../hooks";
import {
  injectedConnector,
  torus,
  portis,
  walletConnect,
} from "../../wallets/connectors";
import {
  Metamask,
  Portis,
  TorusLight,
  WalletConnect,
} from "../../components/icons";
import Web3 from "web3";
import { ContractContext } from "../contractContext/contractContext";

interface ContextProps {
  wallet: any;
  showWalletModal: boolean;
  toggleWalletModal: () => void;
  disconnectWallet: (wallet: any) => void;
  setShowWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
  activatingConnector: any;
  chainIdIsCorrect: boolean;
  wallets: {
    name: string;
    connectFunction: () => void;
    selected: boolean;
    activating: boolean;
    active: boolean;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }[];
}

interface Props {
  children: React.ReactNode;
}

export const WalletContext = createContext({} as ContextProps);

export default function WalletProvider(props: Props) {
  const { actions } = useContext(StoreContext);
  const { updateContractsWeb3 } = useContext(ContractContext);
  const [showWalletModal, setShowWalletModal, toggleWalletModal] =
    useToggle(false);
  const [wallet, setWallet] = useState<any>(undefined);
  const [metamaskEnabled, setMetamaskEnabled] = useState(false);
  const [activatingConnector, setActivatingConnector] = useState<any>();
  const { connector, activate, deactivate, active, chainId, account } =
    useWeb3React();

  useEffect(() => {
    const enabled = isMetamaskEnabled();
    setMetamaskEnabled(enabled);
  }, []);

  useEffect(() => {
    if (account) {
      actions.setWalletAddress(account);
    }
    // eslint-disable-next-line
  }, [account]);

  // ? if you want the modal to close when there is a completed connection, use this useEffect below
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
    active && setShowWalletModal(false);
  }, [activatingConnector, connector, active, setShowWalletModal]);

  const selectMetamask = () => {
    setWallet(injectedConnector);
    handleConnect(injectedConnector);
  };

  const selectPortis = () => {
    setWallet(portis);
    handleConnect(portis);
  };
  const selectTorus = () => {
    setWallet(torus);
    handleConnect(torus);
  };
  const selectWalletConnect = () => {
    setWallet(walletConnect);
    handleConnect(walletConnect);
  };
  const disconnectWallet = async (activeWallet: any) => {
    deactivate();
    setActivatingConnector(undefined);
    activeWallet !== injectedConnector && (await activeWallet.close());
    actions.setWalletDisconnected();
  };

  const handleConnect = async (activatingWallet: any) => {
    try {
      setActivatingConnector(activatingWallet);
      let web3 = new Web3(Web3.givenProvider);
      await activate(activatingWallet);
      let { provider } = await activatingWallet.activate();
      web3 = new Web3(provider);
      actions.setProvider(provider);
      actions.setWalletConnected();
      setActivatingConnector(null);
      updateContractsWeb3(web3);
    } catch (err) {
      // ? If user closes wallet popup modal, rejects connection
      disconnectWallet(activatingWallet);
    }
  };

  const wallets = [
    {
      name: "metamask",
      connectFunction: selectMetamask,
      selected: wallet === injectedConnector,
      activating: activatingConnector === injectedConnector,
      active: connector === injectedConnector,
      icon: Metamask,
    },
    {
      name: "portis",
      connectFunction: selectPortis,
      selected: wallet === portis,
      activating: activatingConnector === portis,
      active: connector === portis,
      icon: Portis,
    },
    {
      name: "torus",
      connectFunction: selectTorus,
      selected: wallet === torus,
      activating: activatingConnector === torus,
      active: connector === torus,
      icon: TorusLight,
    },
    {
      name: "walletConnect",
      connectFunction: selectWalletConnect,
      selected: wallet === walletConnect,
      activating: activatingConnector === walletConnect,
      active: connector === walletConnect,
      icon: WalletConnect,
    },
  ];

  // const enabledWallets = !metamaskEnabled
  //   ? wallets.filter((wallet) => wallet.name !== "metamask")
  //   : wallets;

  const chainIdIsCorrect =
    chainId && chainId.toString() === process.env.REACT_APP_CHAIN_ID;

  const value = {
    showWalletModal,
    setShowWalletModal,
    toggleWalletModal,
    disconnectWallet,
    wallets,
    activatingConnector,
    chainIdIsCorrect,
    wallet,
  };

  return (
    <WalletContext.Provider value={value}>
      {props.children}
    </WalletContext.Provider>
  );
}

export function useWallets() {
  return useContext(WalletContext);
}
