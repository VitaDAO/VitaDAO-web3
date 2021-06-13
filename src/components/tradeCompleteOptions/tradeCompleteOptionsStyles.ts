import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./tradeCompleteOptions";

const useStyles = makeStyles(() =>
  createStyles({
    TradeCompleteOptions: {
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      margin: "0 auto auto auto",
      width: "100%",
      height: "20rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      font: (style: Theme & Props) => style.typography.h2,
    },
    flexItem: {
      width: "100%",
      height: "40%",
      margin: "auto",
      textAlign: "center",
    },
    message: {},
  })
);

export default useStyles;
