import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./footer";

const useStyles = makeStyles(() =>
  createStyles({
    Footer: {
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.footerColor,
      font: (style: Theme & Props) => style.typography.footer,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      position: "absolute",
      zIndex: 1,
      left: "3rem",
      bottom: "3rem",
    },
    link: {
      textDecoration: "underline",
      "&:hover": {
        filter: "brightness(1.2)",
      },
    },
  })
);

export default useStyles;
