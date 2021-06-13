import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./fundingProposal";

const useStyles = makeStyles(() =>
  createStyles({
    Proposal: {
      backgroundColor: "transparent",
      top: "calc(50% - 35rem)",
      position: "absolute",
      minWidth: "100vw",
      minHeight: "100vh",
    //   alignItems: "center",
      overflowX: "hidden",
      overflowY: "auto",
      zIndex: 3,
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center'
    },
    SmallHeader: {
      font: (style: Theme & Props) => style.typography.h4,
      color: (style: Theme & Props) => style.secondaryTextColor,
      textTransform: "uppercase",
      margin: '2rem 0'
    },
    Header: {
      font: (style: Theme & Props) => style.typography.h1,
      color: (style: Theme & Props) => style.textColor,
      borderBottom: (style: Theme & Props) => `1px solid ${style.borderColor2}`,
      paddingBottom: '2rem'
    },
    ProposalBlock: {
      font: (style: Theme & Props) => style.typography.p1,
      color: (style: Theme & Props) => style.textColor,
    },
    SummaryParagraph: {
      font: (style: Theme & Props) => style.typography.p2,
      color: (style: Theme & Props) => style.secondaryTextColor,
    },
    Paragraph: {
      font: (style: Theme & Props) => style.typography.p3,
      color: (style: Theme & Props) => style.secondaryTextColor,
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
