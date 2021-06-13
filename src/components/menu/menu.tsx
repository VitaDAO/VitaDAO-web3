import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./menuStyles";
import { NavLink } from "react-router-dom";
import menuItems from "./menuItems";
import { Wallet } from "../icons";
import ClickAwayListener from "react-click-away-listener";

export interface Props {
  open: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const handleClickAway = () => {
    props.open && props.setMenuOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.Menu}>
        <ul className={classes.menuList}>
          <li className={classes.menuItem}>
            <NavLink
              onClick={handleClickAway}
              className={classes.link}
              to="/my_wallet"
            >
              my wallet
            </NavLink>
            <Wallet />
          </li>
          {menuItems.map((item) => (
            <li key={item.label} className={classes.menuItem}>
              <NavLink
                onClick={handleClickAway}
                className={classes.link}
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </ClickAwayListener>
  );
}

export default React.memo(Menu);
