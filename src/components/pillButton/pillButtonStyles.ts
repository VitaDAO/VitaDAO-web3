import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./pillButton";

const useStyles = makeStyles(() =>
  createStyles({
    PillButton: {
      backgroundColor: "transparent",
      width: (style: Theme & Props) => (style.small ? "19.6rem" : "37.8rem"),
      height: (style: Theme & Props) => (style.small ? "3.4rem" : "6rem"),
      borderRadius: "3rem",
      display: "flex",
      justifyContent: "center",
      textTransform: "uppercase",
      alignItems: "center",
      color: (style: Theme & Props) =>
        style.color === "grey" ? style.colors.grey : style.colors[style.color],
      font: (style: Theme & Props) =>
        style.small ? style.typography.button1 : style.typography.button2,
      border: (style: Theme & Props) =>
        `1px solid ${style.colors[style.color]}`,
      "&:hover": {
        borderColor: (style: Theme & Props) =>
          style.color === "grey" && style.colors.white,
        filter: (style: Theme & Props) =>
          style.color !== "grey" && "brightness(1.2)",
      },

    },
    icon: {
      color: "inherit",
      margin: "auto auto auto 1rem",
      width: "2rem",
    },
    rotate: {
      animation: `rotate 1s infinite`,
    },
  })
);

export default useStyles;
