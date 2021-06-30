import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./ipProposalDetailsStyles";

export interface Props {
  heading: string;
  subHeading: string;
  requestSummary: string;
  proposalDetails: string;
  link?: string;
  id: string;
}

function IPProposalDetails(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.IPProposalDetails}>
      <h4 className={classes.subHeading}>{props.subHeading}</h4>
      <h1 className={classes.heading}>{props.heading}</h1>
      <h2 className={classes.subHeading}> Proposal no. {props.id}</h2>
      <h4 className={classes.subHeading}>Request Summary</h4>
      <p className={classes.summary}>{props.requestSummary}</p>
      <h4 className={classes.subHeading}>Proposal Details</h4>
      <p className={`${classes.summary} ${classes.small}`}>
        {props.proposalDetails}
      </p>
      <h4 className={classes.subHeading}>Dataset Previews</h4>

      {props.link && (
        <img alt="ip data graph" className={classes.image} src={props.link} />
      )}
    </div>
  );
}

export default React.memo(IPProposalDetails);
