import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./tokenDropdown";

const useStyles = makeStyles(() =>
  createStyles({
    TokenDropdownContainer: {
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      width: "60%",
      height: "50%",
      position: "relative",
      margin: "auto 0 auto auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    dropdownButton: {
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto 0 0",
      "&:hover": {
        filter: (style: Theme & Props) =>
          style.collapsible ? "brightness(1.2)" : "brightness(1)",
      },
    },
    tokenContainer: {
      margin: "auto 0 auto 0",
      font: (style: Theme & Props) => style.typography.h4,
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      alignSelf: "center",
      position: "relative",
    },
    buttonText: {
      margin: (style: Theme & Props) =>
        style.collapsible ? "auto 1rem auto auto" : "auto",
      font: (style: Theme & Props) => style.typography.h3,
      height: "100%",
      textAlign: "center",
      alignSelf: "center",
      fontWeight: "bold",
    },
    buttonIcon: {
      margin: "auto auto auto 1rem",
      height: "auto",
      width: "1.6rem",
      position: "absolute",
      top: "1.5",
      right: "-2rem",
    },
    dropdownMenu: {
      backgroundColor: (style: Theme & Props) => style.background1,
      border: "2px solid var(--grey3)",
      position: "absolute",
      top: "4.55rem",
      right: "-2.3rem",
      height: "fit-content",
      width: "22rem",
      display: "flex",
      flexDirection: "column",
      zIndex: 4,
      borderRadius: "10px",
      padding: "1rem 3rem",
    },
    dropdownItem: {
      width: "80%",
      height: "4rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0.5rem auto",
      cursor: "pointer",
      userSelect: "none",
      "&:hover": {
        filter: "brightness(1.2)",
      },
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
