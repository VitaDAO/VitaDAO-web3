import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./countdown";

const useStyles = makeStyles(() =>
  createStyles({
    Countdown: {
      font: (style: Theme & Props) => style.typography.c2,
      color: (style: Theme & Props) => style.color,
      padding: "5px 5px 5px 5px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    TimeIcon: {
      margin: "0rem 1rem",
      stroke: (style: Theme & Props) => style.color,
    },
    neutralOutcome: {
      color: "var(--blue)",
    },
    passedOutcome: {
      color: "var(--green)",
    },
    failedOutcome: {
      color: "var(--red)",
    },
  })
);

export default useStyles;
