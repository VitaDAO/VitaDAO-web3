import React from "react";
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

  const color = "var(--grey1)";
  const approved = votesYes > votesNo;
  return (
    <>
      <Countdown
        color={color}
        approved={approved}
        hasStarted={hasStarted}
        startDate={startDate}
        endDate={endDate}
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
