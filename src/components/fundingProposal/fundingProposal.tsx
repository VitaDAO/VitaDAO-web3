import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./fundingProposalStyles";
import { StoreContext } from "../../store/store";
import PillLink from "../pillLink/pillLink";
import VotingCard from "../cards/votingCard";

export interface Props {}
interface RouteParams {
  id: string;
}
function FundingProposal(props: Props) {
  const { state } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const fundingProposal = state.data.proposals[0];
  const project = fundingProposal.project;

  return (
    <div className={classes.Proposal}>
      <div style={{ width: "80rem", margin: "5rem" }}>
        <div className={classes.SmallHeader}>
          {fundingProposal.proposal_type} PROPOSAL
        </div>
        <h1 className={classes.Header}>{fundingProposal.title}</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={classes.ProposalBlock}>
            <div className={classes.SmallHeader} style={{ width: "40rem" }}>
              BUDGET
            </div>
            <div>
              {project.budget}
              {project.budget_currency}
            </div>
          </div>
          <div className={classes.ProposalBlock}>
            <div className={classes.SmallHeader} style={{ width: "40rem" }}>
              DURATION
            </div>
            <div>{project.duration}</div>
          </div>
        </div>
        <div className={classes.SmallHeader}>REQUEST SUMMARY</div>
        <div className={classes.SummaryParagraph}>
          {project.aims_and_hypothesis}
        </div>
        <div className={classes.SmallHeader}>REQUEST DETAILS</div>
        <p className={classes.Paragraph}>{fundingProposal.summary}</p>
        <div className={classes.SmallHeader}>WHY IS THIS IMPORTANT?</div>
        <p className={classes.Paragraph}>{fundingProposal.details}</p>
        <div style={{ margin: "1rem 0" }}>
          <PillLink
            label={"View project on"}
            color="moleculeGreen"
            path="/projects"
            molecule={"molecule"}
          />
        </div>
      </div>
      <VotingCard
        key={1}
        id={fundingProposal.id}
        startDate={fundingProposal.voting_start_date}
        endDate={fundingProposal.voting_end_date}
      ></VotingCard>
    </div>
  );
}

export default React.memo(FundingProposal);
