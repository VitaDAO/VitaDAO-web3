import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./buySellBox";

const useStyles = makeStyles(() =>
  createStyles({
    BuySellBox: {
      backgroundColor: "transparent",
      transition: (style: Theme & Props) => style.transition,
      color: (style: Theme & Props) => style.textColor,
      width: "100%",
      height:"100%",
      borderRadius: "2rem",
      border: "2px solid var(--grey3)",
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
    },
    leftContainer: {
      height: "100%",
      width: "50%",
      margin: "0 auto 0 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    rightContainer: {
      height: "100%",
      width: "50%",
      margin: "0 0 0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    topContainer:{
      display: "flex",
      marginBottom:"2rem"
    },
    bottomContainer:{
      width:"100%",
      borderTop: "2px solid var(--grey3)",
      paddingTop:"1rem",
      marginBottom:"1rem"
    },
    title: {
      font: (style: Theme & Props) => style.typography.h4,
      color: "inherit",
      textTransform: "capitalize",
      userSelect: "none",
      margin: "0 auto auto 0",
    },
    tokenContainer: {
      font: (style: Theme & Props) => style.typography.h4,
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      alignSelf: "center",
      position: "relative",
      width: "60%",
      margin: "auto 0 auto auto",
    },
    buttonText: {
      margin: "auto",
      font: (style: Theme & Props) => style.typography.h3,
      height: "100%",
      textAlign: "center",
      alignSelf: "center",
      fontWeight: "bold",
    },
    tokenName: {
      font: (style: Theme & Props) => style.typography.h3,
      margin: "auto auto auto 1rem",
    },
    tokenIcon: {
      width: "3rem",
      height: "3rem",
      margin: "auto 1rem",
    },
  })
);

export default useStyles;
