import React, { useContext } from "react";
import { ThemeContext } from "../../../store/themeContext/themeContext";
import useStyles from "./countdownStyles";
import { Time } from "../../icons";
import { proposalStatus } from "../../../store/services/raphael";
import { getHeapSpaceStatistics } from "v8";

export interface Props {
  hoursRemaining: any;
  color: string;
  approved: boolean;
  hasStarted: boolean;
  status: string;
}

function getStatusText(props: Props, classes){
  //debugger;
  let status = props.status;
  switch(status) {
    case proposalStatus[2]: //voting finished
      // Don't show voting finished status, interpret result
      if (props.approved) {return "Passed";}
      else {return 'Failed';}
    case proposalStatus[1]: //voting
        let hoursRemaining = parseInt(props.hoursRemaining);
        let daysRemaining = Math.floor(hoursRemaining/24);
        let hoursModulus = hoursRemaining%24;
        //show days remaining until only hours left
        if (daysRemaining > 0){ return daysRemaining + " Days Left to Vote"}
        else if (hoursModulus > 0) { return hoursRemaining + " Hours Left To Vote"}
        //remind that the status needs updated
        else {return props.status}
    default:                //all other statuses
      return status;
  }
}

function getStatusStyle(props: Props, classes){
  let status = props.status;
  switch(status) {
    case proposalStatus[3]:
      return classes.passedOutcome;
    case proposalStatus[2]://voting finished
      // Don't show voting finished status, interpret result
      if (props.approved) {return classes.passedOutcome;}
      else {return classes.failedOutcome;}
    case proposalStatus[5]: 
      return classes.failedOutcome
    default: 
      return classes.neutralOutcome;
  }
}

function Countdown(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  return (
    <div className={classes.Countdown}>
      <p className={getStatusStyle(props, classes)}>
        {getStatusText(props, classes)}
      </p>
    </div>
  );
}

export default React.memo(Countdown);
