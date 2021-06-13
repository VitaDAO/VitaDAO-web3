import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./progressBubbles";

const useStyles = makeStyles(() =>
  createStyles({
    ProgressBubbles: {
      backgroundColor: "transparent",
      transition: (style: Theme & Props) => style.transition,
      color: (style: Theme & Props) => style.textColor,
      width: "70%",
      height: "3rem",
      margin: "2rem auto 0 auto",
      display: "flex",
    },
    bubble: {
      width: "3rem",
      height: "3rem",
      borderRadius: "50%",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: (style: Theme & Props) => style.typography.h3,
    },
    number: {
      height: "100%",
      width: "100%",
      color: "inherit",
      backgroundColor: "transparent",
      margin: "auto",
    },
    lineBig: {
      width: "calc(100% - 6rem)",
      height: "0.3rem",
      margin: "auto 0",
      backgroundColor: (style: Theme & Props) =>
        style.currentStep >= 1 ? "var(--green)" : "var(--lightgrey)",
    },
    lineSmall: {
      width: "calc(50% - 4.5rem)",
      height: "0.3rem",
      margin: "auto 0",
    },
    oneOfTwo: {
      backgroundColor: (style: Theme & Props) =>
        style.currentStep >= 1 ? "var(--green)" : "var(--lightgrey)",
    },
    twoOfTwo: {
      backgroundColor: (style: Theme & Props) =>
        style.currentStep >= 2 ? "var(--green)" : "var(--lightgrey)",
    },
    oneOfThree: {
      backgroundColor: (style: Theme & Props) =>
        style.currentStep >= 1 ? "var(--green)" : "var(--lightgrey)",
    },
    twoOfThree: {
      backgroundColor: (style: Theme & Props) =>
        style.currentStep >= 2 ? "var(--green)" : "var(--lightgrey)",
    },
    threeOfThree: {
      backgroundColor: (style: Theme & Props) =>
        style.currentStep >= 3 ? "var(--green)" : "var(--lightgrey)",
    },
    one: {
      backgroundColor: (style: Theme & Props) =>
        style.currentStep >= 1 ? "var(--green)" : "var(--lightgrey)",
    },
    two: {
      backgroundColor: (style: Theme & Props) =>
        style.currentStep >= 2 ? "var(--green)" : "var(--lightgrey)",
    },
  })
);

export default useStyles;
