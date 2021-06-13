import React, { useContext } from "react";
import { ThemeContext } from "../../../store/themeContext/themeContext";
import useStyles from "./voteCountStyles";

export interface Props {
  size?: string;
  inProgress: boolean;
  votesYes: number;
  votesNo: number;
}

function VoteCount(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const totalVotes = props.votesYes + props.votesNo;
  const yesPercentage =
    totalVotes !== 0 ? ((props.votesYes / totalVotes) * 100).toFixed() : 0;
  const noPercentage =
    totalVotes !== 0 ? ((props.votesNo / totalVotes) * 100).toFixed() : 0;

  return (
    <div className={classes.VoteCount}>
      <div className={classes.topContainer}>
        <p className={classes.VoteYesPercentage}>
          {yesPercentage}%<span className={classes.VoteChoice}>Yes</span>
        </p>
        <p className={classes.VoteNoPercentage}>
          {noPercentage}%<span className={classes.VoteChoice}>No</span>
        </p>
      </div>
      <div className={classes.barContainer}>
        <div
          style={{
            width: `calc(${yesPercentage}% - 0.5rem)`,
            marginRight: "0.5rem",
          }}
          className={classes.BarVotesYes}
        ></div>
        <div
          style={{ width: `${noPercentage}%` }}
          className={classes.BarVotesNo}
        ></div>
      </div>
      <label className={classes.EndVoting}>
        <span style={{ fontWeight: "bold" }}>{totalVotes}</span> Total Votes
      </label>
    </div>
  );
}

export default React.memo(VoteCount);
