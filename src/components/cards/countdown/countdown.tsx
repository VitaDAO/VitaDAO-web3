import React, { useContext } from "react";
import { ThemeContext } from "../../../store/themeContext/themeContext";
import useStyles from "./countdownStyles";
import { Time } from "../../icons";
import { proposalStatus } from "../../../store/services/raphael";
import { getHeapSpaceStatistics } from "v8";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

export interface Props {
  startDate: Date;
  endDate: Date;
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
        let timeDiffMilliseconds = props.endDate.getTime() - new Date().getTime();
        let timeDiffSeconds = timeDiffMilliseconds / 1000;
        var numdays = Math.floor(timeDiffSeconds / 86400); 
        var numhours = Math.floor((timeDiffSeconds % 86400) / 3600); 
        var numminutes = Math.floor(((timeDiffSeconds % 86400) % 3600) /60);
        let dayString = (numdays > 0) ? numdays + " day(s) " : "";
        let hourString = (numhours > 0) ? numhours +" hours " : "";
        let minutesString = (numminutes > 0) ? numminutes +" mins" : "";
        let countdown = dayString + hourString + minutesString;
        return props.status + " until " + props.endDate.toLocaleString() + " " + countdown
    default:                //all other statuses
      return status;
  }
}

function getStatusStyle(props: Props, classes){
  let status = props.status;
  switch(status) {
    case proposalStatus[3]: //resolved is passed and implemented - should be green
      return classes.passedOutcome;
    case proposalStatus[2]://voting finished
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
