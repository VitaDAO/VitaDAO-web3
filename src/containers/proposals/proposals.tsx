import React, { useContext, useEffect } from "react";
import ProposalCard from "../../components/cards/proposalCard";
import CardGrid from "../../components/cardGrid/cardGrid";
import { StoreContext } from "../../store/store";
import { useWeb3React } from "@web3-react/core";
import { ContractContext } from "../../store/contractContext/contractContext";

function Proposals() {
  const { state, actions } = useContext(StoreContext);
  const { contracts } = useContext(ContractContext);
  const { library } = useWeb3React();

  const loadProposalData = async () => {
    state.data.proposals.forEach(async (proposal) =>
      actions.getProposalData({
        contracts,
        provider: library,
        proposalIndex: proposal.id,
      })
    );
  };
  useEffect(() => {
    if (state.loadingProposal) loadProposalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loadingProposal]);

  return (
    <CardGrid title="proposals">
      {state.data.proposals.map((proposal) => (
        <ProposalCard
          id={proposal.id}
          key={proposal.id}
          proposalTitle={proposal.title}
          proposalType={proposal.proposal_type}
          startDate={proposal.voting_start_date}
          endDate={proposal.voting_end_date}
          votesYes={proposal.votes_yes}
          votesNo={proposal.votes_no}
        />
      ))}
    </CardGrid>
  );
}

export default React.memo(Proposals);
