import React, { useContext } from "react";
import { ThemeContext } from "../../../store/themeContext/themeContext";
import useStyles from "./cardHeaderStyles";

export interface Props {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  heading: string;
  subHeading?: string;
}

function CardHeader(props: Props) {
  const { theme } = useContext(ThemeContext);
  const { Icon, heading, subHeading } = props;
  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.CardHeader}>
      {props.Icon && (
        <div className={classes.iconContainer}>
          <Icon className={classes.Icon} />
        </div>
      )}

      {props.subHeading && <label className={classes.Type}>{subHeading}</label>}
      <h2 className={classes.Title}>{heading}</h2>
    </div>
  );
}

export default React.memo(CardHeader);
