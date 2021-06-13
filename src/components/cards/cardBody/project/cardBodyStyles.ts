import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../../../store/themeContext/themes";
import { Props } from "./cardBody";

const useStyles = makeStyles(() =>
  createStyles({
    CardBody: {
      width: "100%",
      height: "auto",
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      margin: "auto 0 3rem 0",
    },
    description: {
      color: (style: Theme & Props) => style.secondaryTextColor,
      font: (style: Theme & Props) => style.typography.p3,
      textAlign: "center",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      // truncate text after 3 lines of text
      "-webkit-line-clamp": 3,
      "-webkit-box-orient": "vertical",
    },

    researchContainer: {
      height: "9.6rem",
      width: "100%",
      borderTop: (style: Theme & Props) => `1px solid ${style.divider}`,
      borderBottom: (style: Theme & Props) => `1px solid ${style.divider}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      margin: "3rem 0 0 0",
    },
    researchLead: {
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.c1,
    },
    institution: {
      color: (style: Theme & Props) => style.secondaryTextColor,
      font: (style: Theme & Props) => style.typography.p3,
    },
  })
);

export default useStyles;
