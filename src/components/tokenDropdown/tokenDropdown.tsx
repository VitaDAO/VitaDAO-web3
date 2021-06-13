import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./tokenDropdownStyles";
import { options } from "./options";
import { tokens } from "../icons/tokens";
import useToggle from "../../hooks/useToggle";
import { ReactComponent as Chevron } from "../../media/UI/chevron_down.svg";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { StoreContext } from "../../store/store";

export interface Props {
  token: string;
  setToken: (token: string) => void;
  collapsible: boolean;
}

function TokenDropdown(props: Props) {
  const { theme } = useContext(ThemeContext);
  const [showDropdown, setShowDropdown, toggleDropdown] = useToggle(false);
  const { state } = useContext(StoreContext);

  const classes = useStyles({ ...props, ...theme });
  const { collapsible, setToken, token } = props;

  const handleClick = (token: string) => {
    setToken(token);
    setShowDropdown(false);
  };

  const dropdownItems = options.map((token) => {
    const { name, Icon } = token;
    return (
      <li
        key={name}
        onClick={() => handleClick(name)}
        className={classes.dropdownItem}
      >
        <Icon className={classes.tokenIcon} />
        <span className={classes.tokenName}>{name}</span>
      </li>
    );
  });

  const Icon = tokens[token.toLowerCase()];

  return (
    <div className={classes.TokenDropdownContainer}>
      <button
        className={classes.dropdownButton}
        disabled={state.flags.transactionInProgress || !collapsible}
        onClick={toggleDropdown}
      >
        <div className={classes.tokenContainer}>
          <Icon className={classes.tokenIcon} />
          <span className={classes.buttonText}>{token}</span>
          {collapsible && <Chevron className={classes.buttonIcon} />}
        </div>
      </button>

      {showDropdown && (
        <ClickAwayListener onClickAway={toggleDropdown}>
          <ul className={classes.dropdownMenu}>{dropdownItems}</ul>
        </ClickAwayListener>
      )}
    </div>
  );
}

export default React.memo(TokenDropdown);
