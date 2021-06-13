import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./cardGrid";

const useStyles = makeStyles(() =>
  createStyles({
    CardGrid: {
      backgroundColor: "transparent",
      minWidth: "100vw",
      minHeight: "100vh",
      alignItems: "center",
      overflowX: "hidden",
      overflowY: "auto",
      justifyContent: "space-evenly",
      display: "flex",
      flexDirection: "column",
    },
    Header: {
      font: (style: Theme & Props) => style.typography.h1,
      color: (style: Theme & Props) => style.textColor,
      textTransform: "capitalize",
    },
    HeaderDivider: {
      background: (style: Theme & Props) => style.borderColor2,
      width: "10rem",
      height: "0.05rem",
      margin: "3rem 0",
    },
    grid: {
      maxWidth: "1500px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "8rem 0 20rem 0",
    },
  })
);

export default useStyles;
