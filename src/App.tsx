import React from "react";
import "./App.css";
import { StoreProvider } from "./store/store";
import { ThemeProvider } from "./store/themeContext/themeContext";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { ContractProvider } from "./store/contractContext/contractContext";
import WalletProvider from "./store/walletContext/WalletContext";
import Main from "./containers/main/main";

const App = () => {
  function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  }

  return (
    <div className="App">
      <StoreProvider>
        <ThemeProvider>
          <Web3ReactProvider getLibrary={getLibrary}>
            <ContractProvider>
              <WalletProvider>
                <Main />
              </WalletProvider>
            </ContractProvider>
          </Web3ReactProvider>
        </ThemeProvider>
      </StoreProvider>
    </div>
  );
};

export default App;
