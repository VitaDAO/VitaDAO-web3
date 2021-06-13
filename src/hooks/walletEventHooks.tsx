import { useWeb3React } from "@web3-react/core";
import { useContext, useEffect } from "react";
import { injectedConnector } from "../wallets/connectors";
import { StoreContext } from "../store/store";

function useInactiveListener(suppress = false) {
  const { state, actions } = useContext(StoreContext);
  const { active, activate, deactivate } = useWeb3React();

  useEffect(() => {
    const ethereum = state.provider;
    if (ethereum && ethereum.on && active && !suppress) {
      const handleChainChanged = (chainId) => {
        console.log("chainChanged", chainId);
        activate(injectedConnector);
      };

      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts.length > 0) {
          activate(injectedConnector);
        } else {
          console.log("disconnected via wallet");
          deactivate();
          actions.setWalletDisconnected();
        }
      };

      const handleNetworkChanged = (networkId) => {
        console.log("networkChanged", networkId);
        activate(injectedConnector);
      };

      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);
      ethereum.on("networkChanged", handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
          ethereum.removeListener("networkChanged", handleNetworkChanged);
        }
      };
    }

    return () => {};
    // eslint-disable-next-line
  }, [state.isWalletConnected, active, suppress, activate]);
}

export default useInactiveListener;
