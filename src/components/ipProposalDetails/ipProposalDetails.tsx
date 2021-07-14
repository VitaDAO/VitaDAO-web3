import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./ipProposalDetailsStyles";
import ReactMarkdown from 'react-markdown'

export interface Props {
  heading: string;
  subHeading: string;
  summary: string;
  details: string;
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
      <h4 className={classes.subHeading}>Proposal Summary</h4>
      <ReactMarkdown className={`${classes.summary}`} children={props.summary} />
      <h4 className={classes.subHeading}>Proposal Details</h4>
      <ReactMarkdown className={`${classes.summary} ${classes.small}`} children={props.details} />
      <h4 className={classes.subHeading}>Dataset Previews</h4>

      {props.link && (
        <img alt="ip data graph" className={classes.image} src={props.link} />
      )}
    </div>
  );
}

export default React.memo(IPProposalDetails);
