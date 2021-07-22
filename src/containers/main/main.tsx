import React, { useContext, useEffect } from "react";
import WalletModal from "../../components/walletModal/walletModal";
import Navbar from "../../components/navbar/navbar";
import useStyles from "./mainStyles";
//import Home from "../home/home";
import { ThemeContext } from "../../store/themeContext/themeContext";
import Footer from "../../components/footer/footer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//import Apply from "../apply/apply";
import Proposals from "../proposals/proposals";
//import Projects from "../projects/projects";
import ProposeModal from "../proposeModal/proposeModal";
import Proposal from "../../components/proposal/proposal";
//import BuyTokenModal from "../buyTokenModal/buyTokenModal";
import StakeToken from "../../components/stakeToken/stakeToken";
import { useWallets } from "../../store/walletContext/WalletContext";
import { StoreContext } from "../../store/store";
import { ContractContext } from "../../store/contractContext/contractContext";
import { useWeb3React } from "@web3-react/core";

export interface Props {}

export default function Main(props: Props) {
  const { state, actions } = useContext(StoreContext);
  const { contracts } = useContext(ContractContext);
  const { library } = useWeb3React();
  const { theme } = useContext(ThemeContext);
  const { showWalletModal, setShowWalletModal, disconnectWallet } =
    useWallets();
  const classes = useStyles({ ...theme, ...props });
  const loadProposalData = async () => {
    actions.getAllProposals({ contracts: contracts, provider: library });
  };
  useEffect(() => {
    if (state.data === null && contracts !== null && library !== undefined) {
      //debugger;
      loadProposalData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contracts, library]);
  return (
    <Router>
      <div className={classes.Main}>
        <Navbar
          setShowWalletModal={setShowWalletModal}
          disconnectWallet={disconnectWallet}
        />
        <div className={classes.MainContainers}>
          <Switch>
            <Route exact path="/my_wallet" component={StakeToken} />

            <Route
              exact
              path="/proposals/project/:id"
              component={Proposal}
            />
            <Route
              exact
              path="/proposals/governance/:id"
              component={Proposal}
            />
            <Route
              exact
              path="/proposals/funding/:id"
              component={Proposal}
            />
            <Route
              exact
              path="/proposals/ip/:id"
              component={Proposal}
            />

            <Route exact path="/proposals" component={Proposals} />
            <Route exact path="/propose" component={ProposeModal} />
            <Route path="/" component={Proposals} />

            {/* <Route exact path='/about' /> */}
            {/* <Route exact path='/join_the_dao' /> */}
            {/* <Route exact path="/projects" component={Projects} /> */}
            {/* <Route exact path='/buy_vita_token' component={BuyTokenModal} /> */}
            {/* <Route exact path='/apply' component={Apply} />
						<Route exact path='/apply_now' component={Apply} /> */}
          </Switch>
        </div>

        {showWalletModal && <WalletModal />}
      </div>
      <Footer />
    </Router>
  );
}
