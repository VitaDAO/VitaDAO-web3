import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./walletModal";

const useStyles = makeStyles(() =>
  createStyles({
    WalletModal: {
      backgroundColor: "transparent",
      border: "1px solid var(--grey3)",
      width: "43.5rem",
      height: "20rem",
      display: "flex",
      flexDirection: "column",
      borderRadius: "1.2rem",
      position: "absolute",
      marginTop: "-8rem",
      color: (style: Theme & Props) => style.textColor,
      background: (style: Theme & Props) => style.cardGradient,
    },
    overlay: {
      position: "absolute",
      width: "100vw",
      height: "calc(100vh - 8rem)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      left: 0,
      top: "8rem",
      zIndex: 6,
      backgroundColor: (style: Theme & Props) => style.blackOverlay,
    },
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    text: {
      height: "45%",
      justifyContent: "space-evenly",
    },
    button: {
      height: "55%",
      justifyContent: "flex-start",
      paddingTop: "2rem",
    },
    title: {
      font: (style: Theme & Props) => style.typography.h2,
      paddingTop: "2rem",
    },
    secondaryTitle: {
      font: (style: Theme & Props) => style.typography.p3,
      color: (style: Theme & Props) => style.secondaryTextColor,
      paddingTop: "2rem",
    },
  })
);

export default useStyles;
