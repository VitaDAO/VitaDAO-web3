import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./pillLink";

const useStyles = makeStyles(() =>
  createStyles({
    PillLink: {
      backgroundColor: "transparent",
      width: (style: Theme & Props) => (style.small ? "19.6rem" : "37.8rem"),
      height: (style: Theme & Props) => (style.small ? "3.4rem" : "6rem"),
      borderRadius: "3rem",
      display: "flex",
      justifyContent: "center",
      textTransform: (style: Theme & Props) =>
        style.molecule === "molecule" ? "capitalize" : "uppercase",
      alignItems: "center",
      color: (style: Theme & Props) =>
        style.color === "grey" ? style.colors.white : style.colors[style.color],
      font: (style: Theme & Props) =>
        style.molecule === "molecule"
          ? style.typography.button3
          : style.small
          ? style.typography.button1
          : style.typography.button2,
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
      height: "3.4rem",
      width: "2.23rem",
      margin: "auto 0.5rem",
    },
  })
);

export default useStyles;
