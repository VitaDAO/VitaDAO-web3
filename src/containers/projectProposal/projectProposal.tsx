import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import VotingCard from "../../components/cards/votingCard";
import ProjectProposalDetails from "../../components/projectProposalDetails/projectProposalDetails";
import { ContractContext } from "../../store/contractContext/contractContext";
import { StoreContext } from "../../store/store";
import useStyles from "./projectProposalStyles";

interface RouteParams {
  id: string;
}

function ProjectProposal() {
  const { state, actions } = useContext(StoreContext);
  const { contracts } = useContext(ContractContext);
  const { library } = useWeb3React();
  const params = useParams<RouteParams>();
  const classes = useStyles();
  const loadProposalData = async () => {
    actions.getAllProposals({ contracts: contracts, provider: library });
  };
  useEffect(() => {
    if (state.data === null) loadProposalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  const proposal = state.data?.find(
    (proposal) => proposal.id.toString() === params.id
  );
  const project = proposal?.project;

  return (
    state.data !== null && (
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
            id={proposal.id}
          />
        </div>
        <div className={classes.rightContainer}>
          <VotingCard
            id={params.id}
            startDate={proposal.voting_start_date}
            endDate={proposal.voting_end_date}
            yesVotes={proposal.yesVotes}
            noVotes={proposal.noVotes}
          />
        </div>
      </div>
    )
  );
}

export default React.memo(ProjectProposal);
