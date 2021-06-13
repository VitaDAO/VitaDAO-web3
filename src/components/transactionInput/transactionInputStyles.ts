import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./transactionInput";

const useStyles = makeStyles(() =>
  createStyles({
    TransacationInput: {
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.h3,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%",
      margin:"2rem auto auto 0"
    },
  })
);

export default useStyles;
