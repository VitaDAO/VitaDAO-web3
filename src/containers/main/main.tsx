import React, { useContext } from "react";
import WalletModal from "../../components/walletModal/walletModal";
import Navbar from "../../components/navbar/navbar";
import useStyles from "./mainStyles";
import Home from "../home/home";
import { ThemeContext } from "../../store/themeContext/themeContext";
import Footer from "../../components/footer/footer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Apply from "../apply/apply";
import Proposals from "../proposals/proposals";
import Projects from "../projects/projects";
import ProposeModal from "../proposeModal/proposeModal";
import ProjectProposal from "../projectProposal/projectProposal";
import FundingProposal from "../../components/fundingProposal/fundingProposal";
import GovernanceProposal from "../../components/governanceProposal/governanceProposal";
import IPProposal from "../ipProposal/ipProposal";
import BuyTokenModal from "../buyTokenModal/buyTokenModal";
import StakeToken from "../../components/stakeToken/stakeToken";
import { useWallets } from "../../store/walletContext/WalletContext";

export interface Props {}

export default function Main(props: Props) {
  const { theme } = useContext(ThemeContext);
  const { showWalletModal, setShowWalletModal, disconnectWallet } =
    useWallets();
  const classes = useStyles({ ...theme, ...props });

  return (
    <Router>
      <div className={classes.Main}>
        <Navbar
          setShowWalletModal={setShowWalletModal}
          disconnectWallet={disconnectWallet}
        />
        <div className={classes.MainContainers}>
          <Switch>
            {/* <Route exact path='/about' /> */}
            <Route exact path="/my_wallet" component={StakeToken} />
            {/* <Route exact path='/join_the_dao' /> */}
            <Route
              exact
              path="/proposals/project/:id"
              component={ProjectProposal}
            />
            <Route exact path="/proposals/ip/:id" component={IPProposal} />
            <Route
              exact
              path="/proposals/governance/:id"
              component={GovernanceProposal}
            />
            <Route
              exact
              path="/proposals/funding/:id"
              component={FundingProposal}
            />
            {/* <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/:id" component={GovernanceProposal} /> */}
            <Route exact path="/proposals" component={Proposals} />
            <Route exact path="/propose" component={ProposeModal} />
            {/* <Route exact path='/buy_vita_token' component={BuyTokenModal} /> */}
            <Route
              exact
              path="/proposals/funding/:id"
              component={FundingProposal}
            ></Route>
            <Route
              exact
              path="/proposals/governance/:id"
              component={GovernanceProposal}
            />
            <Route exact path="/proposals/ip/:id" component={IPProposal} />
            {/* <Route exact path='/apply' component={Apply} />
						<Route exact path='/apply_now' component={Apply} /> */}
            <Route path="/" component={Proposals} />
          </Switch>
        </div>

        {showWalletModal && <WalletModal />}
      </div>
      <Footer />
    </Router>
  );
}
