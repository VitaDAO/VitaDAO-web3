import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./tradeCompleteOptionsStyles";
import PillButton from "../pillButton/pillButton";

export interface Props {
  resetFunction: () => void;
}

function TradeCompleteOptions(props: Props) {
  const { state } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  const handleClick = () => {
    props.resetFunction();
  };

  return (
    <div className={classes.TradeCompleteOptions}>
      <div className={classes.flexItem}>
        <PillButton
          color={"white"}
          label="Start Another Trade"
          clickFunction={handleClick}
          onMouseEnterFunction={null}
          onMouseLeaveFunction={null}
        />
      </div>

      <p className={`${classes.flexItem} ${classes.message}`}>{`Trade ${
        state.flags.transactionSuccess ? "Complete!" : "Failed"
      }`}</p>
    </div>
  );
}

export default React.memo(TradeCompleteOptions);
