import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./navbar";

const useStyles = makeStyles(() =>
  createStyles({
    Navbar: {
      width: "100%",
      height: "8rem",
      position: "absolute",
      display: "flex",
      justifyContent: "space-between",
      left: 0,
      top: 0,
      padding: "0 1rem",
    },
    rightContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      height: "100%",
    },
    leftContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      margin: "0 0 0 0",
      height: "100%",
    },
    navLink: {
      font: (style: Theme & Props) => style.typography.button1,
      color: (style: Theme & Props) => style.textColor,
      textTransform: "uppercase",
    },
    navItem: {
      margin: "auto 1.5rem ",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      height: "50%",
      margin: "auto auto auto 5rem",
    },
  })
);

export default useStyles;
