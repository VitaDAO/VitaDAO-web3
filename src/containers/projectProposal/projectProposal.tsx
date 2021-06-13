import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import VotingCard from "../../components/cards/votingCard";
import ProjectProposalDetails from "../../components/projectProposalDetails/projectProposalDetails";
import { StoreContext } from "../../store/store";
import useStyles from "./projectProposalStyles";

interface RouteParams {
  id: string;
}

function ProjectProposal() {
  const { state } = useContext(StoreContext);
  const params = useParams<RouteParams>();
  const classes = useStyles();
  const project = state.data.proposals.find(
    (proposal) => proposal.id === params.id
  ).project;
  const proposal = state.data.proposals.find(
    (proposal) => proposal.id === params.id
  );

  return (
    <div className={classes.ProjectDetails}>
      <div className={classes.leftContainer}>
        <ProjectProposalDetails
          budget={project.budget}
          heading={project.title}
          subHeading={"project proposal"}
          institution={project.institution}
          researchLead={project.research_lead}
          ipStatus={project.ip_status}
          clinicalStage={project.clinical_stage}
          summary={project.summary}
          projectSummary={project.project_summary}
          aimsAndHypothesis={project.aims_and_hypothesis}
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

export default React.memo(ProjectProposal);
