import React, { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./buySellBoxStyles";
import TransactionInput from "../../components/transactionInput/transactionInput";
import TokenDropdown from "../tokenDropdown/tokenDropdown";
import DisplayBalance from "../displayBalance/displayBalance";
import SlippageDisplay from "./../../components/slippageDisplay/slippageDisplay";

import { Logo } from "../../components/icons";

export interface Props {
  transaction?: "From" | "To";
  token: string;
  amount: number;
  setSellAmount: any;
  onInputChange: (amount: number, token: string) => void;
  defaultCurrency: string;
  setBuyToken: (token: string) => void;
  showSpinner: boolean;
}

function BuySellBox(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const [showToast, setShowToast] = useState(false);
  const [showSlippage, setShowSlippage] = useState(false);
  const [slippage, setSlippage] = useState<number>(1);

  const {
    amount,
    token,
    transaction,
    defaultCurrency,
    setBuyToken,
    showSpinner,
    onInputChange,
  } = props;

  return (
    <div className={classes.BuySellBox}>
      <div className={classes.topContainer}>
        <div className={classes.leftContainer}>
          {transaction ? (
            <h2 className={classes.title}>{transaction}</h2>
          ) : (
            <div></div>
          )}
          <TransactionInput
            defaultCurrency={defaultCurrency}
            amount={amount}
            onInputChange={onInputChange}
            token={token}
          />
        </div>
        <div className={classes.rightContainer}>
          <DisplayBalance token={token} />
          {token !== "VITA" ? (
            <TokenDropdown
              token={token}
              setToken={setBuyToken}
              collapsible={token !== "VITA"}
            />
          ) : (
            <div className={classes.tokenContainer}>
              <Logo className={classes.tokenIcon} />
              <span className={classes.buttonText}>{token}</span>
            </div>
          )}
        </div>
      </div>
      {transaction === "From" && (
        <div className={classes.bottomContainer}>
          <SlippageDisplay
            setShowToast={setShowToast}
            setShowSlippage={setShowSlippage}
            showSlippage={showSlippage}
            slippage={slippage}
            showToast={showToast}
          />
        </div>
      )}
    </div>
  );
}

export default React.memo(BuySellBox);
