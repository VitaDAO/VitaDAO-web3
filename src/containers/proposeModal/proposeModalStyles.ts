import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./proposeModal";

const useStyles = makeStyles(() =>
  createStyles({
    Propose: {
      backgroundColor: "transparent",
      top: "calc(50% - 35rem)",
      position: "absolute",
      minWidth: "100vw",
      minHeight: "100vh",
      alignItems: "center",
      overflowX: "hidden",
      overflowY: "auto",
      zIndex: 3,
      display: "flex",
      flexDirection: "column",
    },
    Header: {
      font: (style: Theme & Props) => style.typography.h1,
      color: (style: Theme & Props) => style.textColor,
    },
    Paragraph: {
      font: (style: Theme & Props) => style.typography.p2,
      color: (style: Theme & Props) => style.textColor,
      margin: '3rem 0',
    },
    ParagraphAlert: {
      font: (style: Theme & Props) => style.typography.c2,
      color: (style: Theme & Props) => style.colors.red,
      margin: '3rem 0',
    },
  })
);

export default useStyles;
