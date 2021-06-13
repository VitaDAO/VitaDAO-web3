import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./slippageInputStyles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export interface Props {
  slippage: number;
  setSlippage: (slippage: number) => void;
  setShowSlippage: React.Dispatch<React.SetStateAction<boolean>>;
}

function SlippageInput(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  const handleChange = (e: any) => props.setSlippage(Number(e.target.value));

  return (
    <ClickAwayListener onClickAway={() => props.setShowSlippage(false)}>
      <div className={classes.SlippageInput}>
        <div className={classes.titleContainer}>
          <p className={classes.title}>Set Slippage</p>
          {props.slippage < 1 && (
            <p className={classes.warning}>Warning: Trade might fail!</p>
          )}
          <p className={classes.slippageOutput}>{`${props.slippage.toFixed(
            2
          )}%`}</p>
        </div>
        <div className={classes.inputContainer}>
          <p className={`${classes.label} ${classes.min}`}>min</p>
          <p className={`${classes.label} ${classes.max}`}>max</p>
          <input
            className={classes.slider}
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={props.slippage}
            onChange={handleChange}
          />
        </div>

        <div className={classes.greenStrip}></div>
      </div>
    </ClickAwayListener>
  );
}

export default React.memo(SlippageInput);
