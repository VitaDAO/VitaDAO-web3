import React, { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./navbarStyles";
import PillButton from "../pillButton/pillButton";
import { NavLink } from "react-router-dom";
import Hamburger from "../hamburger/hamburger";
import Menu from "../menu/menu";
import { useWeb3React } from "@web3-react/core";
import logo from "./vitadao-logo.png"

export interface Props {
  setShowWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
  disconnectWallet: (wallet: any) => void;
}

function Navbar(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });
  const { account } = useWeb3React();
  const [menuOpen, setMenuOpen] = useState(false);
  // const shortAddress = `${address.slice(0, 6)}...${address.slice(
  //   address.length - 5
  // )}`;
  const walletModal = account ? (
    <div className={classes.navItem}>
      <PillButton
        small
        color={"white"}
        label="disconnect"
        clickFunction={props.disconnectWallet}
      />
    </div>
  ) : (
    <div className={classes.navItem}>
      <PillButton
        small
        color={"green"}
        label={"connect wallet"}
        clickFunction={props.setShowWalletModal}
      />
    </div>
  );

  return (
    
    <div className={classes.Navbar}>
      <div className={classes.leftContainer}>
        <div className={classes.navItem}>
          <img src={logo} alt="" />
        </div>
        </div>
      <div className={classes.rightContainer}>
        <div className={classes.navItem}>
          <NavLink className={classes.navLink} to="/proposals">
            proposals
          </NavLink>
        </div>

        {walletModal}

        <div className={classes.navItem}>
          <Hamburger
            clickFunction={() => setMenuOpen(!menuOpen)}
            open={menuOpen}
            color="white"
          />
        </div>
      </div>
      <Menu setMenuOpen={setMenuOpen} open={menuOpen} />
    </div>
  );
}

export default React.memo(Navbar);
