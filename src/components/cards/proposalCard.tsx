import React, { useContext, useEffect, useState } from "react";
import CardWrapper from "./cardWrapper/cardWrapper";
import CardHeader from "./cardHeader/cardHeader";
import CardBody from "./cardBody/proposal/cardBody";
import PillLink from "../pillLink/pillLink";
import { proposals } from "../icons/vita_dao/index";
import { StoreContext } from "../../store/store";

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
  const { state } = useContext(StoreContext);
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
          proposal !== null && proposal !== undefined ? proposal.yesVotes : 0
        }
        votesNo={
          proposal !== null && proposal !== undefined ? proposal.yesVotes : 0
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
