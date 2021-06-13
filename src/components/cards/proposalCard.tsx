import React, { useContext, useEffect, useState } from "react";
import CardWrapper from "./cardWrapper/cardWrapper";
import CardHeader from "./cardHeader/cardHeader";
import CardBody from "./cardBody/proposal/cardBody";
import PillLink from "../pillLink/pillLink";
import { proposals } from "../icons/vita_dao/index";
import { StoreContext } from "../../store/store";
import { ContractContext } from "../../store/contractContext/contractContext";
import { useWeb3React } from "@web3-react/core";

export interface Props {
  id: string;
  proposalTitle: string;
  proposalType: string;
  startDate: string;
  endDate: string;
  votesYes: number;
  votesNo: number;
}

function ProposalCard(props: Props) {
  const { state, actions } = useContext(StoreContext);
  const { contracts } = useContext(ContractContext);
  const { library } = useWeb3React();
  const { proposalTitle, proposalType, id } = props;
  const Icon = proposals[proposalType] ?? proposals.project;
  const [proposal, setProposal] = useState(null);

  useEffect(() => {
    loadProposalData();
  });

  const loadProposalData = async () => {
    const filterProposals = state.proposals.filter(
      (proposal) => proposal.id === id
    );
    if (filterProposals.length > 0) {
      setProposal(filterProposals[0]);
    } else {
      await actions.getProposalData({
        contracts,
        provider: library,
        proposalIndex: props.id,
      });
    }
  };
  return (
    <CardWrapper>
      <CardHeader
        Icon={Icon}
        heading={proposalTitle}
        subHeading={`${proposalType} proposal`}
      />
      <CardBody
        startDate={props.startDate}
        endDate={props.endDate}
        votesYes={
          proposal !== null && proposal !== undefined
            ? proposal.yesVotes
            : props.votesYes
        }
        votesNo={
          proposal !== null && proposal !== undefined
            ? proposal.yesVotes
            : props.votesNo
        }
      />
      <PillLink
        label="review"
        color="grey"
        path={`/proposals/${proposalType}/${id}`}
      />
    </CardWrapper>
  );
}

export default ProposalCard;
