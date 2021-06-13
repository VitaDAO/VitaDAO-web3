import React, { useContext } from "react";
import useStyles from "./ipProposalStyles";
import IPProposalDetails from "../../components/ipProposalDetails/ipProposalDetails";
import { useParams } from "react-router-dom";
import VotingCard from "../../components/cards/votingCard";
import { StoreContext } from "../../store/store";

interface RouteParams {
  id: string;
}

export default function IPProposal() {
  const classes = useStyles();
  const params = useParams<RouteParams>();

  const { state } = useContext(StoreContext);

  const proposal = state.data.proposals.find(
    (proposal) => proposal.id === params.id
  );

  return (
    <div className={classes.IPDetails}>
      <div className={classes.leftContainer}>
        <IPProposalDetails
          heading={proposal.title}
          subHeading={"ip proposal"}
          requestSummary={proposal.summary}
          proposalDetails={proposal.details}
          link={proposal.link}
        />
      </div>
      <div className={classes.rightContainer}>
        <VotingCard
          id={params.id}
          startDate={proposal.voting_start_date}
          endDate={proposal.voting_end_date}
        />
      </div>
    </div>
  );
}
