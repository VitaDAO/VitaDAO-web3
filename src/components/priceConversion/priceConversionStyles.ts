import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./priceConversion";

const useStyles = makeStyles(() =>
  createStyles({
    priceConversionContainer: {
      backgroundColor: "transparent",
      transition: (style: Theme & Props) => style.transition,
      color: (style: Theme & Props) => style.textColor,
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      font: (style: Theme & Props) => style.typography.h3,
    },
  })
);

export default useStyles;
