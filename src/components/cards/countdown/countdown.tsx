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
        return props.status
    default:                //all other statuses
      return status;
  }
}

function getCountdownText(props: Props) {
  let now = new Date().getTime();
  let timeDiffMilliseconds = new Date().getTime();
  let result = "Time to Update Proposal Status";
  if (now < props.startDate.getTime() && props.status == proposalStatus[1]){  //voting hasn't started yet
    timeDiffMilliseconds = props.startDate.getTime() - now;
    result = "Voting starts in " + getCountdown(timeDiffMilliseconds);
  }
  else if (now > props.startDate.getTime() && now < props.endDate.getTime()){ //in voting period
    if (props.status == proposalStatus[1]){                                     // in voting status
      timeDiffMilliseconds = props.endDate.getTime() - now;
      result = "Voting ends in " + getCountdown(timeDiffMilliseconds);
    }
  }
  else if (props.status != proposalStatus[0] && props.status != proposalStatus[1]){ // any status other than vote not started, or votingS
    result = "";
  }
  
  return result;
}

function getCountdown(timeDiffMilliseconds: number) {
  let timeDiffSeconds = timeDiffMilliseconds / 1000;
  let numdays = Math.floor(timeDiffSeconds / 86400);
  let numhours = Math.floor((timeDiffSeconds % 86400) / 3600);
  let numminutes = Math.floor(((timeDiffSeconds % 86400) % 3600) / 60);
  let s = (numdays > 1) ? "s" : "";
  let dayString = (numdays > 0) ? numdays + " day" + s : "";
  let hourString = (numhours > 0) ? numhours + " hours " : "";
  let minutesString = (numminutes > 0) ? numminutes + " mins" : "";
  let countdown = dayString + hourString + minutesString;
  return countdown;
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
    <div>
      <div className={classes.Countdown}>
        <p className={getStatusStyle(props, classes)}>
          {getStatusText(props, classes)}
        </p>
      </div>
        {(props.status == proposalStatus[1] || props.status == proposalStatus[2]) &&
          <div className={classes.Countdown}>
            <Time className={classes.TimeIcon} />
              {getCountdownText(props)}
          </div>
        }
      </div>
  );
}

export default React.memo(Countdown);
