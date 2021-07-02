import React, { useContext, useEffect } from "react";
import ProposalCard from "../../components/cards/proposalCard";
import CardGrid from "../../components/cardGrid/cardGrid";
import { StoreContext } from "../../store/store";
import { useWeb3React } from "@web3-react/core";
import { ContractContext } from "../../store/contractContext/contractContext";

function Proposals() {
  const { state, actions } = useContext(StoreContext);
  const { contracts, initializeWeb3 } = useContext(ContractContext);
  const { library } = useWeb3React();

  const loadProposalData = async () => {
    actions.getAllProposals({ contracts: contracts, provider: initializeWeb3 });
  };
  useEffect(() => {
    if (state.data === null && contracts !== null) loadProposalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contracts]);

  return (
    <CardGrid title="proposals">
      {state.data?.map((proposal) => (
        <ProposalCard
          id={proposal.id}
          key={proposal.id}
          proposalTitle={proposal.title}
          proposalType={proposal.proposal_type}
          startDate={proposal.voting_start_date}
          endDate={proposal.voting_end_date}
          votesYes={proposal.yesVotes}
          votesNo={proposal.noVotes}
        />
      ))}
    </CardGrid>
  );
}

export default React.memo(Proposals);
