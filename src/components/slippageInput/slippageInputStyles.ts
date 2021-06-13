import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./slippageInput";

const thumbStyles = {
  width: "1.6rem",
  height: "1.6rem",
  marginTop: "calc(-0.8rem + 0.3rem)",
  backgroundColor: "var(--green)",
  borderRadius: "50%",
  border: "none",
  "&:active": {
    transform: "scale(1.4)",
  },
};

const trackStyles = {
  width: "100%",
  height: "0.6rem",
  background: "var(--slider-track-gradient)",
  borderRadius: "2px",
  border: "none",
};

const useStyles = makeStyles(() =>
  createStyles({
    SlippageInput: {
      backgroundColor: (style: Theme & Props) => style.background1,
      justifyContent: "center",
      left: "-4rem",
      display: "flex",
      flexDirection: "column",
      width: "60rem",
      height: "14rem",
      fontSize: "2rem",
      position: "absolute",
      borderRadius: "10px",
      overflow: "hidden",
      zIndex: 3,
      bottom: "-20rem",
    },
    slippageOutput: {
      margin: "auto 0 auto auto",
      font: (style: Theme & Props) => style.typography.h6,
    },
    slider: {
      width: "80%",
      margin: "1.5rem auto auto auto",
      WebkitAppearance: "none",
      cursor: "grab",
      "&:focus": {
        cursor: "grabbing",
      },
      "&::-webkit-slider-runnable-track": {
        ...trackStyles,
      },
      "&::-moz-range-track": {
        ...trackStyles,
      },
      "&::-webkit-slider-thumb": {
        WebkitAppearance: "none",
        ...thumbStyles,
      },
      "&::-moz-range-thumb": {
        ...thumbStyles,
      },
    },
    titleContainer: {
      padding: "0 4rem",
      height: "40%",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    warning: {
      font: (style: Theme & Props) => style.typography.h6,
      color: (style: Theme & Props) => style.colors.red,
      margin: "auto auto auto 2rem",
    },
    title: {
      font: (style: Theme & Props) => style.typography.h5,
    },
    icon: {
      fill: (style: Theme & Props) => style.background1,
      marginLeft: "1rem",
      height: "40%",
      width: "auto",
    },
    label: {
      position: "absolute",
      top: "0.4rem",
      font: (style: Theme & Props) => style.typography.h7,
    },
    min: {
      left: "4rem",
      color: (style: Theme & Props) => style.colors.red,
    },
    max: {
      right: "4rem",
      color: (style: Theme & Props) => style.colors.green,
    },
    inputContainer: {
      position: "relative",
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      width: "100%",
      height: "50%",
      padding: "0 4rem",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    greenStrip: {
      width: "100%",
      height: "10%",
      backgroundColor: "var(--green)",
    },
  })
);

export default useStyles;
