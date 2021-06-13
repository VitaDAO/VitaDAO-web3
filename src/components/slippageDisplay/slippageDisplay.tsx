import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./slippageDisplayStyles";

export interface Props {
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSlippage: React.Dispatch<React.SetStateAction<boolean>>;
  showSlippage: boolean;
  slippage: number;
  showToast: boolean;
}

function SlippageDisplay(props: Props) {
  const { theme } = useContext(ThemeContext);
  const { setShowToast, setShowSlippage, showSlippage, slippage } = props;
  const classes = useStyles({ ...props, ...theme });

  // const toastMessage =
  //   "The difference between the expected price of a trade and execution price.";

  return (
    <div className={classes.SlippageDisplay}>
      <div className={classes.slippageTextBox}>
        <p>Slippage</p>
        <div
          onMouseEnter={() => setShowToast(true)}
          onMouseLeave={() => setShowToast(false)}
          className={classes.questionMarkContainer}
        ></div>
      </div>

      <button
        onClick={() => setShowSlippage(!showSlippage)}
        className={classes.slippageAmountButton}
      >{`${slippage.toFixed(2)}%`}</button>
    </div>
  );
}

export default React.memo(SlippageDisplay);
