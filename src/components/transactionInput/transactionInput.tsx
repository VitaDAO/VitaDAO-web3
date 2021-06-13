import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./transactionInputStyles";

export interface Props {
  onInputChange: (amount: number, token: string) => void;
  amount: number;
  defaultCurrency: string;
  token: string;
}

function TransactionInput(props: Props) {
  const { state } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  const { amount, token, onInputChange } = props;

  const checkIfNumber = (value: any) => {
    return /^[\d]*\.?[\d]{0,9}$/.test(value);
  };

  const eraseZeroIfFirstNonDecimalDigit = (value: any) => {
    return /^\d+$/.test(value[1]) ? value.replace(/^0+/, "") : value;
  };
  const handleChange = (e: any) => {
    let val = eraseZeroIfFirstNonDecimalDigit(e.target.value);
    if (checkIfNumber(val)) {
      onInputChange(val, token);
    }
  };
  return (
    <input
      disabled={state.flags.transactionInProgress}
      value={amount}
      onChange={handleChange}
      type="text"
      className={classes.TransacationInput}
      placeholder="0.00"
      autoComplete="off"
      autoCorrect="off"
      pattern="^[0-9]*[,.]?[0-9]*$"
    ></input>
  );
}

export default React.memo(TransactionInput);
