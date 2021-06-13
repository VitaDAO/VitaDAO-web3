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
  const { endDate, votesYes, votesNo } = props;

  const inProgress = Date.now() < parseInt(endDate);
  const daysRemaining = inProgress
    ? (parseInt(endDate) - Date.now()) / 86400000
    : 0;

  const color = daysRemaining < 3 ? "var(--red)" : "var(--grey1)";
  const approved = votesYes > votesNo;
  return (
    <>
      <Countdown
        color={color}
        approved={approved}
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
