import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./apply";

const useStyles = makeStyles(() =>
  createStyles({
    Apply: {
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      width: "70rem",
      height: "50rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    title: {
      marginBottom: "3rem",
      textTransform: "capitalize",
      font: (style: Theme & Props) => style.typography.h1,
    },
    subheading: {
      font: (style: Theme & Props) => style.typography.p2,
      margin: "3rem 0",
    },
    text: {
      font: (style: Theme & Props) => style.typography.p3,
      margin: "3rem 0",
    },
    buttonContainer: {
      margin: "3rem 0 0 0",
    },
  })
);

export default useStyles;
