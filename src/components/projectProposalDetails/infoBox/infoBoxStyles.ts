import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./infoBox";

const useStyles = makeStyles(() =>
  createStyles({
    InfoBox: {
      padding: "2rem 1rem",
      display: "flex",
      width: "100%",
      height: "16rem",
      border: "1px solid var(--grey3)",
      borderRadius: "1.2rem",
      backgroundColor: (style: Theme & Props) => style.blackOverlay,
      overflow: "hidden",
      margin: "2rem 0",

      fill: (style: Theme & Props) => style.secondaryTextColor,
      stroke: (style: Theme & Props) => style.secondaryTextColor,
    },
    column: {
      width: "50%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    row: {
      width: "100%",
      height: "50%",
      display: "flex",
    },
    iconContainer: {
      width: "15%",
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    icon: {
      height: "50%",
      width: "50%",
      margin: "auto",
      fill: "transparent",
      stroke: (style: Theme & Props) => style.secondaryTextColor,
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      width: "85%",
      height: "100%",
    },
    subHeading: {
      font: (style: Theme & Props) => style.typography.h4,
      display: "flex",
      textTransform: "uppercase",
      height: "50%",
      width: "100%",
      alignItems: "flex-end",
      color: "var(--grey2)",
    },
    heading: {
      height: "50%",
      width: "100%",
      display: "flex",
      textTransform: "capitalize",
      alignItems: "flex-start",
      font: (style: Theme & Props) => style.typography.c2,
      color: "var(--grey1)",
    },
  })
);

export default useStyles;
