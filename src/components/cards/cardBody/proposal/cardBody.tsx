import React from "react";
import VoteCount from "../../voteCount/voteCount";
import Countdown from "../../countdown/countdown";

export interface Props {
  size?: string;
  startDate: string;
  endDate: string;
  votesYes: number;
  votesNo: number;
}

function CardBody(props: Props) {
  const { endDate, startDate, votesYes, votesNo } = props;

  const hasStarted = new Date().getTime() < new Date(startDate).getTime();
  const inProgress = new Date().getTime() < new Date(endDate).getTime();
  const daysRemaining = hasStarted
    ? (new Date(startDate).getTime() - Date.now()) / 86400000
    : inProgress
    ? (new Date(endDate).getTime() - Date.now()) / 864000000
    : 0;

  const color = daysRemaining < 3 ? "var(--red)" : "var(--grey1)";
  const approved = votesYes > votesNo;
  return (
    <>
      <Countdown
        color={color}
        approved={approved}
        hasStarted={hasStarted}
        daysRemaining={daysRemaining.toFixed()}
      />
      <VoteCount
        size={props.size}
        inProgress={inProgress}
        votesYes={votesYes}
        votesNo={votesNo}
      />
    </>
  );
}

export default React.memo(CardBody);
