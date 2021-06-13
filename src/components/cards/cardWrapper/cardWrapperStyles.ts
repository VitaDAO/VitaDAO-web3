import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./cardWrapper";

const sizes = {
  regular: "62rem",
  small: "50rem",
  smallest: "29rem",
};
const useStyles = makeStyles(() =>
  createStyles({
    CardWrapper: {
      background: (style: Props & Theme) => style.cardGradient,
      backgroundColor: (style: Props & Theme) => style.background1,
      border: "1px solid var(--grey3)",
      borderRadius: "1.5rem",
      width: "45rem",
      height: (style: Props & Theme) => sizes[style.size] ?? sizes.regular,
      margin: "1.5rem",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "2.5rem",
    },
  })
);

export default useStyles;
