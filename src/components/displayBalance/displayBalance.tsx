import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./displayBalanceStyles";

export interface Props {
  token: string;
}

function DisplayBalance(props: Props) {
  const { state } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });
  const { token } = props;
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    console.log(state.balances);
    setBalance(state.balances[`${token.toLowerCase()}Balance`]);
  }, [token, state.balances]);

  return (
    <div className={classes.DisplayBalance}>
      <p className={classes.text}>{`Balance: ${balance.toFixed(4)}`}</p>
    </div>
  );
}

export default React.memo(DisplayBalance);
