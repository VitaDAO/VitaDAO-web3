import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./countdown";

const useStyles = makeStyles(() =>
  createStyles({
    Countdown: {
      font: (style: Theme & Props) => style.typography.c2,
      color: (style: Theme & Props) => style.color,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    TimeIcon: {
      margin: "0rem 1rem",
      stroke: (style: Theme & Props) => style.color,
    },
    outcome: {
      color: "var(--blue)",
    },
  })
);

export default useStyles;
