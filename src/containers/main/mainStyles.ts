import { makeStyles, createStyles } from "@material-ui/styles";
import { Props } from "./main";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    Main: {
      width: "auto",
      minHeight: "100vh",
      position: "relative",
      overflowX: "hidden",
      overflowY: "auto",
      backgroundColor: (style: Theme & Props) => style.background1,
    },
    MainContainers: {
      width: "100vw",
      minHeight: "calc(100vh - 14rem)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background:
        "url(../media/images/vita_dao_image.png) bottom center no-repeat",
      marginTop: "14rem",
    },
  })
);

export default useStyles;
