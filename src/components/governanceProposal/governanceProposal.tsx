import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContractContext } from "../../store/contractContext/contractContext";
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
  const classes = useStyles({ ...props, ...theme });
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
  useEffect(() => {
    console.log(params.id);
  });
  const firstProposal = state.data?.find(
    (proposal) => proposal.id.toString() === params.id
  );
  return (
    state.data !== null && (
      <div className={classes.GovernanceProposal}>
        <div className={classes.left}>
          <div className={classes.header}>
            <div className={classes.SmallHeader}>
              {firstProposal.proposal_type} PROPOSAL
            </div>
            <h1 className={classes.title}>{firstProposal.title}</h1>
            <h2 className={classes.SmallHeader}> Proposal no. {params.id}</h2>
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
    )
  );
}

export default React.memo(GovernanceProposal);
