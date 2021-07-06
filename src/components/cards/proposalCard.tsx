import React, { useContext, useEffect, useState } from "react";
import CardWrapper from "./cardWrapper/cardWrapper";
import CardHeader from "./cardHeader/cardHeader";
import CardBody from "./cardBody/proposal/cardBody";
import PillLink from "../pillLink/pillLink";
import { proposals } from "../icons/vita_dao/index";

export interface Props {
  id: string;
  proposalTitle: string;
  proposalType: string;
  startDate: Date;
  endDate: Date;
  votesYes: number;
  votesNo: number;
}

function ProposalCard(props: Props) {
  const { proposalTitle, proposalType, id } = props;
  const Icon = proposals[proposalType] ?? proposals.project;

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
        votesYes={props.votesYes}
        votesNo={props.votesNo}
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
