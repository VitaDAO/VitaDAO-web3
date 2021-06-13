import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    IPDetails: {
      backgroundColor: "transparent",
      minHeight: "100%",
      height: "fit-content",
      display: "flex",
      width: "80%",
      margin: "0 auto auto auto",
    },
    leftContainer: {
      height: "auto",
      width: "60%",
      padding: "2rem",
    },
    rightContainer: {
      height: "auto",
      width: "40%",
      padding: "2rem",
    },
  })
);

export default useStyles;
