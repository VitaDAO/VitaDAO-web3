

import { makeStyles, createStyles } from "@material-ui/styles";
import { Props } from "./buyTokenModal";
import { Theme } from "../../store/themeContext/themes";

const useStyles = makeStyles(() =>
  createStyles({
    Main: {
      width: "auto",
      minHeight: "100vh",
      position: "relative",
      overflowX: "hidden",
      overflowY: "auto",
    },
    MainContainers: {
      width: "90vw",
      minHeight: "calc(100vh - 14rem)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background:
        "url(../media/images/vita_dao_image.png) bottom center no-repeat",
      marginTop: "14rem",
    },
    index: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "2px solid var(--grey3)",
			borderRadius: "2rem",
      padding:"4rem",
      backgroundColor: (style: Theme & Props) => style.background1,
    },
    title: {
      width: "100%",
      top: "-14rem",
      userSelect: "none",
      marginBottom:"2rem",
      font: (style: Theme & Props) => style.typography.h2,
      color: (style: Theme & Props) => style.textColor,

    },
    buySellContainer: {
      margin: "0 auto 1rem auto",
      height: "40rem",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    topTransaction: {
      height: "45%",
      width: "100%",
      margin: "0 auto auto auto",
    },
    bottomTransaction: {
      height: "40%",
      width: "100%",
      margin: "auto auto 0 auto",
    },
    switchIcon: {
      margin: "auto",
      width: "2rem",
      height: "2rem",
      cursor: "pointer",
      transform: "rotate(90deg)",
      "&:hover": {
        filter: "brightness(1.5)",
      },
    },
    conversionContainer: {
      width: "100%",
      height: "auto",
      padding: "1em",
      margin: "0 auto 2rem auto",
    },
    buttonContainer: {
      margin: "0 auto auto auto",
      width: "100%",
      height: "10rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      font: (style: Theme & Props) => style.typography.h2,
    },
    tradeCompleteContainer: {
      margin: "0 auto auto auto",
      width: "100%",
      height: "15rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      font: (style: Theme & Props) => style.typography.h2,
    },
    message: {
      font: "inherit",
    },
   
  })
);

export default useStyles;
