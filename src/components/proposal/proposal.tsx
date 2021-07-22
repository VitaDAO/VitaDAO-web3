import { useWeb3React } from "@web3-react/core";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContractContext } from "../../store/contractContext/contractContext";
import { StoreContext } from "../../store/store";
import { ThemeContext } from "../../store/themeContext/themeContext";
import VotingCard from "../cards/votingCard";
import useStyles from "./proposalStyles";
import PillLink from "../pillLink/pillLink";
import InfoBox from "../projectProposalDetails/infoBox/infoBox";
import ReactMarkdown from 'react-markdown';
var unwrapImages = require('remark-unwrap-images');

export interface Props {
  color: string;
}
interface RouteParams {
  id: string;
}

function Proposal(props: Props) {
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

  const proposal = state.data?.find(
    (p) => p.id.toString() === params.id
  );
  const project = proposal.project;
  const proposalType = proposal.proposal_type;

  // console.log(`PROPOSAL ${params.id}`);
  // console.log("___________________________")
  // if(project) {
  //   console.log("Project:", project);
  // }
  // console.log("Proposal Type:", proposalType);

  return (
    state.data !== null && (
      <div className={classes.GovernanceProposal}>
        <div className={classes.left}>
          <div className={classes.header}>
            <div className={classes.XSHeading}>
              {proposal.proposal_type} PROPOSAL
            </div>
            <h1 className={classes.title}>{proposal.title}</h1>
            <h2 className={classes.XSHeading}> Proposal no. {params.id}</h2>
          </div>

          {
            (proposalType === 'project') &&
            <InfoBox
              institution={project.institution}
              researchLead={project.research_lead}
              ipStatus={project.ip_status}
              clinicalStage={project.clinical_stage}
            />
          }

          {
            (proposalType === 'funding' || proposalType === 'project') &&
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={classes.ProposalBlock} style={{ width: "50%" }}>
                <div className={classes.SmallHeader}>
                  BUDGET
                </div>
                <div>
                  {project.budget}
                  {project.budget_currency}
                </div>
              </div>
              <div className={classes.ProposalBlock} style={{ width: "50%" }}>
                <div className={classes.SmallHeader}>
                  DURATION
                </div>
                <div>{project.duration}</div>
              </div>
            </div>
          }

          <div className={classes.SmallHeader}>PROPOSAL SUMMARY</div>
          <ReactMarkdown
            remarkPlugins={[unwrapImages]}
            skipHtml={true}
            className="customFormattedContent"
            children={proposal.summary}
            linkTarget="_blank"
          />

          <div className={classes.SmallHeader}>PROPOSAL DETAILS</div>
          <ReactMarkdown
            remarkPlugins={[unwrapImages]}
            skipHtml={true}
            className="customFormattedContent"
            children={proposal.details}
            linkTarget="_blank"
          />

          {
            (proposalType === 'funding' || proposalType === 'project') &&
            <div>
              <div className={classes.SmallHeader}>Project Title</div>
              <div className={classes.XSHeading}>{project.title}</div>
              <div className={classes.SmallHeader}>Project Summary</div>
              <ReactMarkdown
                remarkPlugins={[unwrapImages]}
                skipHtml={true}
                className="customFormattedContent"
                children={project.summary}
                linkTarget="_blank"
              />
              <div className={classes.SmallHeader}>Aims and Hypotheses?</div>
              <ReactMarkdown
                remarkPlugins={[unwrapImages]}
                skipHtml={true}
                className="customFormattedContent"
                children={project.aims_and_hypothesis}
                linkTarget="_blank"
              />
              <div style={{ margin: "1rem 0" }}>
                <PillLink
                  label={"View project on"}
                  color="moleculeGreen"
                  path="/projects"
                  molecule={"molecule"}
                />
              </div>
            </div>
          }

          <br></br>
          <br></br>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={proposal.link}
            className={classes.link}
          >
            {proposal.link}
          </a>
        </div>
        <div className={classes.right}>
          <VotingCard
            key={1}
            id={params.id}
            startDate={proposal.voting_start_date}
            endDate={proposal.voting_end_date}
            status={proposal.status}
            yesVotes={proposal.yesVotes}
            noVotes={proposal.noVotes}
            turnoutPercentage={proposal.turnoutPercentage}
          ></VotingCard>
        </div>
      </div>
    )
  );
}

export default React.memo(Proposal);
