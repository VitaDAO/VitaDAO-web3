import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./walletButton";

const useStyles = makeStyles(() =>
  createStyles({
    WalletButton: {
      backgroundColor: "transparent",
      width: "37.8rem",
      height: "6rem",
      borderRadius: "3rem",
      margin: "0 auto auto auto",
      display: "flex",
      padding: "0 3.2rem",
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.button2,
      border: (style: Theme & Props) =>
        style.active
          ? `1px solid var(--green)`
          : `1px solid ${style.walletButtonBorder}`,
      "&:hover": {
        filter: "brightness(1.2)",
      },
    },
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    labelContainer: {
      width: "28.4rem",
      height: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    iconContainer: {
      width: "3rem",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      margin: "auto 2rem auto 0",
      textTransform: "capitalize",
    },
    icon: {
      width: "3rem",
      height: "3rem",
      margin: "auto",
    },
    check: {
      margin: "auto auto auto 2rem",
      width: "3rem",
      height: "3rem",
      color: "var(--green)",
    },
  })
);

export default useStyles;
