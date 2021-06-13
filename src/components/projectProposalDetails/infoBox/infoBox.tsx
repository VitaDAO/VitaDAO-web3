import React, { useContext } from "react";
import { ThemeContext } from "../../../store/themeContext/themeContext";
import { Scientist, Building, Stage, Patent } from "../../icons";
import useStyles from "./infoBoxStyles";

export interface Props {
  researchLead: string;
  institution: string;
  ipStatus: string;
  clinicalStage: string;
}

function InfoBox(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.InfoBox}>
      {/* LEFT */}
      <div className={classes.column}>
        <div className={classes.row}>
          <div className={classes.iconContainer}>
            <Scientist className={classes.icon} />
          </div>
          <div className={classes.textContainer}>
            <p className={classes.subHeading}>research lead</p>
            <p className={classes.heading}>{props.researchLead}</p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.iconContainer}>
            <Stage className={classes.icon} />
          </div>
          <div className={classes.textContainer}>
            <p className={classes.subHeading}>clinical stage</p>
            <p className={classes.heading}>{props.clinicalStage}</p>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className={classes.column}>
        <div className={classes.row}>
          <div className={classes.iconContainer}>
            <Building className={classes.icon} />
          </div>
          <div className={classes.textContainer}>
            <p className={classes.subHeading}>institution</p>
            <p className={classes.heading}>{props.institution}</p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.iconContainer}>
            <Patent className={classes.icon} />
          </div>
          <div className={classes.textContainer}>
            <p className={classes.subHeading}>ip status</p>
            <p className={classes.heading}>{props.ipStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(InfoBox);
