import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./home";

const useStyles = makeStyles(() =>
  createStyles({
    Home: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "55rem",
      height: "55rem",
      position: "absolute",
      left: "calc(50% - 27.5rem)",
      top: "calc(50% - 27.5rem)",
      justifyContent: "space-evenly",
      zIndex: 2,
      color: (style: Theme & Props) => style.textColor,
    },
    logo: {
      width: "33.8rem",
    },
    dataContainer: {
      width: "100%",
      height: "10rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    amount: {
      font: (style: Theme & Props) => style.typography.data1,
    },
    label: {
      font: (style: Theme & Props) => style.typography.c2,
      textTransform: "uppercase",
    },
  })
);

export default useStyles;
