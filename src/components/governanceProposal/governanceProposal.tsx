import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../store/store";
import { ThemeContext } from "../../store/themeContext/themeContext";
import VotingCard from "../cards/votingCard";
import useStyles from "./governanceProposalStyles";

export interface Props {
  color: string;
}
interface RouteParams {
  id: string;
}

function GovernanceProposal(props: Props) {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(StoreContext);
  const classes = useStyles({ ...props, ...theme });
  const firstProposal = state.data.proposals[0];
  const params = useParams<RouteParams>();

  return (
    <div className={classes.GovernanceProposal}>
      <div className={classes.left}>
        <div className={classes.header}>
          <div className={classes.SmallHeader}>
            {firstProposal.proposal_type} PROPOSAL
          </div>
          <h1 className={classes.title}>{firstProposal.title}</h1>
        </div>
        <div className={classes.SmallHeader}>PROPOSAL DETAILS</div>
        <p className={classes.description}>
          {firstProposal.details}
          <br></br>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={firstProposal.link}
          >
            {firstProposal.link}
          </a>
        </p>
      </div>
      <div className={classes.right}>
        <VotingCard
          key={1}
          id={params.id}
          startDate={firstProposal.voting_start_date}
          endDate={firstProposal.voting_end_date}
        ></VotingCard>
      </div>
    </div>
  );
}

export default React.memo(GovernanceProposal);
