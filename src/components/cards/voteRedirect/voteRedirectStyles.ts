import { makeStyles, createStyles } from "@material-ui/styles";
// import interface for component Props and Theme
import { Theme } from "../../../store/themeContext/themes";
import { Props } from "./voteRedirect";

const useStyles = makeStyles(() =>
  createStyles({
    BoilerPlate: {
      // we merge Props & Theme interfaces and call this merged object "style".
      //component props and ui theme properties are available on the style object (yay auto-complete!!).
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.h4,
    },
    link:{
      color: (style: Theme & Props) => style.colors["blue"],
      font: (style: Theme & Props) => style.typography.h4,
    }
  })
);

export default useStyles;
