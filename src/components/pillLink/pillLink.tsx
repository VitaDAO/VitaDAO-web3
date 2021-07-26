import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./pillLinkStyles";
import { Link } from "react-router-dom";
import { Molecule } from "../../components/icons/index";
export interface Props {
  color: string;
  label: string;
  path: string;
  small?: boolean;
  icon?: React.ReactNode;
  molecule?: boolean;
}

function PillLink(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const { label, molecule, path, icon } = props;
  const moleculeLink = (
    <a
      href={path}
      className={classes.PillLink}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div style={{ display: "flex", alignItems: "center", margin: "0.5rem" }}>
        {label ? label : path}
        <Molecule className={classes.icon} />
        <span style={{ fontWeight: "bold" }}>Molecule</span>
      </div>
    </a>
  );

  const link = (
    <Link to={path} className={classes.PillLink}>
      {label}
      {icon && icon}
    </Link>
  );

  return molecule ? moleculeLink : link;
}

export default React.memo(PillLink);
