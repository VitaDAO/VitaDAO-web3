import React, { useContext } from "react";
import { ThemeContext } from "../../../../store/themeContext/themeContext";
import useStyles from "./cardBodyStyles";

export interface Props {
  description: string;
  researchLead: string;
  institution: string;
}

function CardBody(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.CardBody}>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.researchContainer}>
        <p className={classes.researchLead}>{props.researchLead}</p>
        <p className={classes.institution}>{props.institution}</p>
      </div>
    </div>
  );
}

export default React.memo(CardBody);
