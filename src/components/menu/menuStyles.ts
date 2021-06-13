import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./menu";

const useStyles = makeStyles(() =>
  createStyles({
    Menu: {
      width: "37.5rem",
      height: "calc(100vh - 8rem)",
      position: "absolute",
      right: "-37.5rem",
      top: "8rem",
      backgroundColor: (style: Theme & Props) => style.blackOverlay,
      color: (style: Theme & Props) => style.textColor,
      zIndex: 4,
      font: (style: Theme & Props) => style.typography.nav1,
      transition: (style: Theme & Props) => style.transition,
      transform: (style: Theme & Props) =>
        style.open ? "translateX(-37.5rem)" : "translateX(0)",
    },
    menuList: {
      width: "84%",
      margin: "0 auto",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    menuItem: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      textTransform: "capitalize",
      margin: "1rem auto 1rem 0",
      position: "relative",
      "&:hover": {
        color: (style: Theme & Props) => style.colors.blue,
      },
      // ? ignore last element in list & select every 3rd sibling, starting with the first => (3n + 1)
      "&:not(:last-child):nth-child(3n + 1)": {
        marginBottom: "4rem",
        "&::after": {
          width: "100%",
          display: "block",
          content: '""',
          position: "absolute",
          height: "1px",
          bottom: "-2.8rem",
          backgroundColor: (style: Theme & Props) => style.divider,
        },
      },
    },
    link: {
      margin: "auto auto auto 0",
      width: "100%",
    },
    icon: {
      margin: "auto 0 auto auto",
      width: "2rem",
      height: "2rem",
    },
  })
);

export default useStyles;
