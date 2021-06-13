import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./actionButtons";

const useStyles = makeStyles(() =>
  createStyles({
    ActionButtons: {
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    button: {
      borderRadius: "2rem",
      width: "100%",
      height: "100%",
    },
  })
);

export default useStyles;
