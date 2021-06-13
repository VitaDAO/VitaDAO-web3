import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./projectProposalDetailsStyles";
import InfoBox from "./infoBox/infoBox";
import PillLink from "../pillLink/pillLink";

export interface Props {
  heading: string;
  subHeading: string;
  researchLead: string;
  institution: string;
  ipStatus: string;
  clinicalStage: string;
  budget: number;
  summary: string;
  projectSummary: string;
  aimsAndHypothesis: string;
}

function ProjectProposalDetails(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const formattedBudget = props.budget.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={classes.ProjectProposalDetails}>
      <h4 className={classes.subHeading}>{props.subHeading}</h4>
      <h1 className={classes.heading}>{props.heading}</h1>
      <InfoBox
        institution={props.institution}
        researchLead={props.researchLead}
        ipStatus={props.ipStatus}
        clinicalStage={props.clinicalStage}
      />
      <h4 className={classes.subHeading}>budget</h4>
      <h1 className={classes.budget}>{formattedBudget}</h1>
      <h4 className={classes.subHeading}>summary</h4>
      <p className={classes.summary}>{props.summary}</p>
      <h4 className={classes.subHeading}>project summary</h4>
      <p className={`${classes.summary} ${classes.small}`}>
        {props.projectSummary}
      </p>
      <h4 className={classes.subHeading}>aims & hypothesis</h4>
      <p className={`${classes.summary} ${classes.small}`}>
        {props.aimsAndHypothesis}
      </p>
      <PillLink
        label={"View project on"}
        color="moleculeGreen"
        path="https://www.molecule.to/"
        molecule={"molecule"}
      />
    </div>
  );
}

export default React.memo(ProjectProposalDetails);
