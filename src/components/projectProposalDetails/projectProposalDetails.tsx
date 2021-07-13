import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./projectProposalDetailsStyles";
import InfoBox from "./infoBox/infoBox";
import PillLink from "../pillLink/pillLink";
import ReactMarkdown from 'react-markdown'
import projectCard from "../cards/projectCard";

export interface Props {
  heading: string;
  subHeading: string;
  researchLead: string;
  institution: string;
  ipStatus: string;
  clinicalStage: string;
  budget: number;
  summary: string;
  details: string;
  projectSummary: string;
  aimsAndHypothesis: string;
  projectTitle: string;
  id: any;
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
      <h2 className={classes.subHeading}> Proposal no. {props.id}</h2>

      <InfoBox
        institution={props.institution}
        researchLead={props.researchLead}
        ipStatus={props.ipStatus}
        clinicalStage={props.clinicalStage}
      />
      <h4 className={classes.subHeading}>budget</h4>
      <h1 className={classes.budget}>{formattedBudget}</h1>
      <h4 className={classes.subHeading}>proposal summary</h4>
      <ReactMarkdown className={`${classes.summary}`} children={props.summary}/>
      <h4 className={classes.subHeading}>proposal details</h4>
      <ReactMarkdown className={`${classes.summary}`} children={props.details}/>
      <h4 className={classes.subHeading}>project title</h4>
      <ReactMarkdown className={`${classes.summary}`} children={props.projectTitle}/>
      <h4 className={classes.subHeading}>project summary</h4>
      <ReactMarkdown className={`${classes.summary} ${classes.small}`} children={props.projectSummary}/>
      <h4 className={classes.subHeading}>aims & hypothesis</h4>
      <ReactMarkdown className={`${classes.summary} ${classes.small}`} children={props.aimsAndHypothesis}/>
      <br/>
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
