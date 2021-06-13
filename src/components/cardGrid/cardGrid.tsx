import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./cardGridStyles";

export interface Props {
  title: string;
  children: React.ReactNode;
}

function CardGrid(props: Props) {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.CardGrid}>
      <h1 className={classes.Header}>{props.title}</h1>
      <div className={classes.HeaderDivider}></div>
      <div className={classes.grid}>{props.children}</div>
    </div>
  );
}

export default React.memo(CardGrid);
