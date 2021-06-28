import React, { useContext, useEffect } from "react";
import useStyles from "./ipProposalStyles";
import IPProposalDetails from "../../components/ipProposalDetails/ipProposalDetails";
import { useParams } from "react-router-dom";
import VotingCard from "../../components/cards/votingCard";
import { StoreContext } from "../../store/store";
import { ContractContext } from "../../store/contractContext/contractContext";
import { useWeb3React } from "@web3-react/core";

interface RouteParams {
  id: string;
}

export default function IPProposal() {
  const classes = useStyles();
  const params = useParams<RouteParams>();

  const { state, actions } = useContext(StoreContext);
  const { contracts } = useContext(ContractContext);
  const { library } = useWeb3React();
  const loadProposalData = async () => {
    actions.getAllProposals({ contracts: contracts, provider: library });
  };
  useEffect(() => {
    if (state.data === null) loadProposalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  const proposal = state.data.find((proposal) => proposal.id === params.id);

  return (
    state.data !== null && (
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
    )
  );
}
