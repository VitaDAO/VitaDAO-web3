import React from "react";
import CardWrapper from "./cardWrapper/cardWrapper";
import CardHeader from "./cardHeader/cardHeader";
import CardBody from "./cardBody/project/cardBody";
import PillLink from "../pillLink/pillLink";
import { Project } from "../icons/vita_dao/";

export interface Props {
  id: string;
  projectTitle: string;
  researchLead: string;
  institution: string;
  fundingStage: string;
  projectSummary: string;
}

function ProjectCard(props: Props) {
  const {
    projectTitle,
    projectSummary,
    researchLead,
    institution,
    fundingStage,
    id,
  } = props;
  return (
    <CardWrapper>
      <CardHeader
        Icon={Project}
        subHeading={fundingStage}
        heading={projectTitle}
      />
      <CardBody
        description={projectSummary}
        researchLead={researchLead}
        institution={institution}
      />
      <PillLink color="grey" label="view project" path={`/projects/${id}`} />
    </CardWrapper>
  );
}

export default React.memo(ProjectCard);
