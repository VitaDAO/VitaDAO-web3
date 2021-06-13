import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./hamburger";

const lineStyles = {
  left: 0,
  width: "100%",
  display: "block",
  content: '""',
  height: "1px",
  transition: "all 200ms ease-in-out",
  backgroundColor: (style: Props & Theme) => style.colors[style.color],
};

const useStyles = makeStyles(() =>
  createStyles({
    Hamburger: {
      backgroundColor: "transparent",
      width: "2.7rem",
      height: "1.9rem",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    line: {
      position: "relative",
      ...lineStyles,
      "&::after": {
        ...lineStyles,
        position: "absolute",
        bottom: "1rem",
        transform: (style: Props & Theme) =>
          style.open && "translateY(1rem) rotate(180deg)",
      },
      "&::before": {
        ...lineStyles,
        position: "absolute",
        top: "1rem",
        transform: (style: Props & Theme) =>
          style.open && "translateY(-1rem) rotate(-180deg)",
      },
    },
  })
);

export default useStyles;
