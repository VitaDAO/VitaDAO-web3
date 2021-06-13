import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./displayBalance";

const useStyles = makeStyles(() =>
  createStyles({
    DisplayBalance: {
      font: (style: Theme & Props) => style.typography.p2,
      color: "inherit",
      textTransform: "capitalize",
      display: "flex",
      justifyContent: "flex-end",
      margin: "auto 0 auto auto",

      alignItems: "flex-end",
      width: "100%",
      textAlign: "left",
    },
    text: {
      width: "100%",
      margin: "auto 0 1.5rem auto",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "end",
    },
    number: {
      font: (style: Theme & Props) => style.typography.h4,
    },
  })
);

export default useStyles;
