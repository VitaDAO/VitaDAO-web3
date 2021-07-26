import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./proposal";

const useStyles = makeStyles((theme) =>
  createStyles({
    GovernanceProposal: {
      background: "transparent",
      width: "100%",
      paddingLeft: "3rem",
      paddingRight: "3rem",
      position: "relative",
      display: "flex",
      overflowX: "hidden",
      overflowY: "auto",
      flexDirection: "column",
      zIndex: 2,
      [theme.breakpoints.up('md')]: {
        flexDirection: "row",
        width: "100%",
        zIndex: 5,
      },
    },
    left: {
      background: (style: Theme & Props) => style.background1,
      [theme.breakpoints.up('md')]: {
        width: "70%",
        maxWidth: "1200px",
        paddingRight: "2rem",
        paddingBottom: "10rem"
      },
    },
    right: {
      background: (style: Theme & Props) => style.background1,
      [theme.breakpoints.up('md')]: {
        minWith: "480px"
      },
    },
    header: {
      marginBottom: "2rem",
      borderBottom: (style: Theme & Props) => `1px solid ${style.divider}`,
    },

    SmallHeader: {
      font: (style: Theme & Props) => style.typography.h3,
      color: (style: Theme & Props) => style.colors.yellow,
      textTransform: "uppercase",
      margin: '2rem 0'
    },
    XSHeading: {
      font: (style: Theme & Props) => style.typography.h4,
      color: (style: Theme & Props) => style.colors.white,
      textTransform: "uppercase",
      margin: '1rem 0'
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
      font: (style: Theme & Props) => style.typography.c2,
      textAlign: "left",
      marginBottom: "2rem",
      lineHeight: "1.4 !important"
    },
    link: {
      marginTop: "1rem",
      color: (style: Theme & Props) => style.colors.blue,
      font: (style: Theme & Props) => style.typography.p3,
      textAlign: "left",
      cursor: "pointer",
    },
    ProposalBlock: {
      font: (style: Theme & Props) => style.typography.p1,
      color: (style: Theme & Props) => style.textColor,
    },
    Paragraph: {
      font: (style: Theme & Props) => style.typography.p3,
      color: (style: Theme & Props) => style.secondaryTextColor,
      margin: '3rem 0',
    },
  })
);

export default useStyles;
