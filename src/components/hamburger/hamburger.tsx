import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./hamburgerStyles";

export interface Props {
  clickFunction: () => void;
  open: boolean;
  color: string;
}

function Hamburger(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <button onClick={props.clickFunction} className={classes.Hamburger}>
      <span className={classes.line}></span>
    </button>
  );
}

export default React.memo(Hamburger);
