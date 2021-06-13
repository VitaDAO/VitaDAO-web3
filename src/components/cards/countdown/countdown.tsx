import React, { useContext } from "react";
import { ThemeContext } from "../../../store/themeContext/themeContext";
import useStyles from "./countdownStyles";
import { Time } from "../../icons";

export interface Props {
  daysRemaining: string;
  color: string;
  approved: boolean;
}

function Countdown(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  return (
    <div className={classes.Countdown}>
      {parseInt(props.daysRemaining) > 0 ? (
        <>
          <Time className={classes.TimeIcon} />
          {`Voting ends in ${props.daysRemaining} day${
            props.daysRemaining === "1" ? "" : "s"
          }`}
        </>
      ) : (
        // TODO: label below ("approved" or "rejected") must come from API
        <p className={classes.outcome}>
          {props.approved ? (
            <div>Approved</div>
          ) : (
            <div style={{ color: "#ff7272" }}>Failed</div>
          )}
        </p>
      )}
    </div>
  );
}

export default React.memo(Countdown);
