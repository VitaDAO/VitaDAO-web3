import React, { useEffect } from "react";
import VoteCount from "../../voteCount/voteCount";
import Countdown from "../../countdown/countdown";

export interface Props {
  size?: string;
  startDate: Date;
  endDate: Date;
  votesYes: number;
  votesNo: number;
  status: string;
}

function CardBody(props: Props) {
  const { endDate, startDate, votesYes, votesNo } = props;

  const hasStarted = new Date().getTime() < startDate.getTime();
  const inProgress = new Date().getTime() < endDate.getTime();

  const daysRemaining = !hasStarted
    ? (new Date(startDate).getTime() - Date.now()) / 864000
    : inProgress
    ? (new Date(endDate).getTime() - Date.now()) / 864000
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
        status={props.status}
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
