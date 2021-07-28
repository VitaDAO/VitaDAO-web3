import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContractContext } from "../../store/contractContext/contractContext";
import { StoreContext } from "../../store/store";
import { ThemeContext } from "../../store/themeContext/themeContext";
import VotingCard from "../cards/votingCard";
import useStyles from "./proposalStyles";
import PillLink from "../pillLink/pillLink";
import InfoBox from "../projectProposalDetails/infoBox/infoBox";
import ReactMarkdown from "react-markdown";
var unwrapImages = require("remark-unwrap-images");

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
  const { contracts, initializeWeb3 } = useContext(ContractContext);
  const [proposal, setProposal] = useState(null);
  const [proposalLoaded, setProposalLoaded] = useState(false);

  useEffect(() => {
    if (
      (proposal !== null && params.id !== proposal.id) ||
      state.proposal === null
    ) {
      setProposalLoaded(false);
      actions.getProposalData({
        contracts: contracts,
        provider: initializeWeb3,
        proposalIndex: params.id,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [proposal, params.id, state.proposal, actions, contracts, initializeWeb3]);
  useEffect(() => {
    if (state.proposal !== null) {
      setProposalLoaded(true);
      setProposal(state.proposal);
    }
  }, [state.proposal]);

  // console.log(`PROPOSAL ${params.id}`);
  // console.log("___________________________")
  // if(project) {
  //   console.log("Project:", project);
  // }
  // console.log("Proposal Type:", proposalType);

  return (
    proposalLoaded && (
      <div className={classes.GovernanceProposal}>
        <div className={classes.left}>
          <div className={classes.header}>
            <div className={classes.XSHeading}>
              {proposal.proposal_type} PROPOSAL
            </div>
            <h1 className={classes.title}>{proposal.title}</h1>
            <h2 className={classes.XSHeading}> Proposal no. {params.id}</h2>
          </div>

          {state.proposal.proposalType === "project" && (
            <InfoBox
              institution={state.proposal.project.institution}
              researchLead={state.proposal.project.research_lead}
              ipStatus={state.proposal.project.ip_status}
              clinicalStage={state.proposal.project.clinical_stage}
            />
          )}

          {(state.proposal.proposalType === "funding" ||
            state.proposal.proposalType === "project") && (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={classes.ProposalBlock} style={{ width: "50%" }}>
                <div className={classes.SmallHeader}>BUDGET</div>
                <div>
                  {state.proposal.project.budget}
                  {state.proposal.project.budget_currency}
                </div>
              </div>
              <div className={classes.ProposalBlock} style={{ width: "50%" }}>
                <div className={classes.SmallHeader}>DURATION</div>
                <div>{state.proposal.project.duration}</div>
              </div>
            </div>
          )}

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

          {(proposal.proposalType === "funding" ||
            proposal.proposalType === "project") && (
            <div>
              <div className={classes.SmallHeader}>Project Title</div>
              <div className={classes.XSHeading}>{proposal.project.title}</div>
              <div className={classes.SmallHeader}>Project Summary</div>
              <ReactMarkdown
                remarkPlugins={[unwrapImages]}
                skipHtml={true}
                className="customFormattedContent"
                children={proposal.project.summary}
                linkTarget="_blank"
              />
              <div className={classes.SmallHeader}>Aims and Hypotheses?</div>
              <ReactMarkdown
                remarkPlugins={[unwrapImages]}
                skipHtml={true}
                className="customFormattedContent"
                children={proposal.project.aims_and_hypothesis}
                linkTarget="_blank"
              />
              { (proposal.moleculeLink) &&
              <div style={{ margin: "2rem 0" }}>
                <PillLink
                  label={"View project on"}
                  color="moleculeGreen"
                  path={proposal.moleculeLink}
                  molecule={ proposal.moleculeLink }
                />
              </div>
              }
              <br/>
              <br/>
              
            </div>
          )}

          <br></br>
          <br></br>
          { (proposal.link) &&
              <a href={proposal.link} className={classes.link} target="_blank" rel="noopener noreferrer">
                {proposal.linkText ? proposal.linkText : proposal.link}
              </a>
          }
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
