import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./voteCount";

const useStyles = makeStyles(() =>
  createStyles({
    VoteCount: {
      width: "100%",
      height: "14rem",
      marginBottom:"1rem",
      borderTop: (style: Theme & Props) => `1px solid ${style.divider}`,
      borderBottom: (style: Theme & Props) =>
        style.size === "small" || style.size === "smallest"
          ? style.inProgress
            ? `1px solid ${style.divider}`
            : "none"
          : `1px solid ${style.divider}`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "2rem 0rem",
    },
    topContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    barContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    VoteYesPercentage: {
      color: (style: Theme & Props) =>
        style.inProgress ? style.colors.blue : style.textColor,
      font: (style: Theme & Props) => style.typography.h2,
    },
    VoteNoPercentage: {
      color: (style: Theme & Props) =>
        style.inProgress ? style.colors.yellow : style.textColor,
      font: (style: Theme & Props) => style.typography.h2,
    },
    VoteChoice: {
      // color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.c2,
      marginLeft: "1rem",
    },
    BarVotesYes: {
      background: (style: Theme & Props) =>
        style.inProgress ? style.colors.blue : style.textColor,
      height: "0.5rem",
      width: "17rem",
    },
    BarVotesNo: {
      background: (style: Theme & Props) =>
        style.inProgress ? style.colors.yellow : style.textColor,
      height: "0.5rem",
      width: "20rem",
    },
    EndVoting: {
      color: "var(--grey1)",
      font: (style: Theme & Props) => style.typography.c2,
    },
  })
);

export default useStyles;
