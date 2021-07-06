import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./governanceProposal";

const useStyles = makeStyles((theme) =>
  createStyles({
    GovernanceProposal: {
      background: "transparent",
      width: "80%",
      height: "100vh",
      position: "relative",
      display: "flex",
      overflowX: "hidden",
      overflowY: "auto",
      flexDirection: "column",
      zIndex: 2,
      [theme.breakpoints.up('md')]: {
        flexDirection: "row",
        width: "100vw",
        zIndex: 5,
      },
    },
    header: {
      marginBottom: "2rem",
      borderBottom: (style: Theme & Props) => `1px solid ${style.divider}`,
    },

    SmallHeader: {
      font: (style: Theme & Props) => style.typography.h4,
      color: (style: Theme & Props) => style.secondaryTextColor,
      textTransform: "uppercase",
      margin: '2rem 0'
    },
    title: {
      color: (style: Theme & Props) => style.textColor,
      font: (style: Theme & Props) => style.typography.h1,
      marginBottom: "2rem",
      marginTop: "2rem",
    },
    line: {
      width: "100%",
      height: "1px",
      backgroundColor: (style: Props & Theme) => style.colors[style.color],
    },
    description: {
      color: (style: Theme & Props) => style.secondaryTextColor,
      font: (style: Theme & Props) => style.typography.p3,
      textAlign: "left",
      marginBottom: "2rem"
    },
    link: {
      marginTop: "1rem",
      color: (style: Theme & Props) => style.colors.blue,
      font: (style: Theme & Props) => style.typography.p3,
      textAlign: "left",
    },
    left: {
      background: (style: Theme & Props) => style.background1,
      [theme.breakpoints.up('md')]: {
        width: "60vw",
        marginLeft: "35rem",
      },
    },
    right: {
      background: (style: Theme & Props) => style.background1,
      [theme.breakpoints.up('md')]: {
        marginRight: "35rem",
      },
    },
  })
);

export default useStyles;
