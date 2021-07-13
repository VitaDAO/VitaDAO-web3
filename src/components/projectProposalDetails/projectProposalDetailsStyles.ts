import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./projectProposalDetails";

const useStyles = makeStyles(() =>
  createStyles({
    ProjectProposalDetails: {
      backgroundColor: "transparent",
      color: (style: Theme & Props) => style.textColor,
      marginBottom: "10rem",
    },
    heading: {
      margin: "1rem 0",
      font: (style: Theme & Props) => style.typography.h1,
    },
    subHeading: {
      color: (style: Theme & Props) => style.colors.grey,
      font: (style: Theme & Props) => style.typography.h4,
      textTransform: "uppercase",
      margin: "1.8rem 0 1.2rem 0",
    },
    budget: {
      font: (style: Theme & Props) => style.typography.p1,
    },
    summary: {
      color: (style: Theme & Props) => style.secondaryTextColor,
      font: (style: Theme & Props) => style.typography.p2,
      margin: "1rem 0",
    },
    small: {
      font: (style: Theme & Props) => style.typography.p3,
    },
  })
);

export default useStyles;
