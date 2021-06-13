import { typography, Typography } from "./typography";

export interface Theme {
  name: string;
  textColor: string;
  secondaryTextColor: string;
  footerColor: string;
  background1: string;
  borderColor1: string;
  borderColor2: string;
  cardGradient: string;
  blackOverlay: string;
  walletButtonBorder: string;
  divider: string;
  transition: string;
  colors: {
    white: string;
    blue: string;
    green: string;
    yellow: string;
    red: string;
    grey: string;
    black: string;
    moleculeGreen: string;
  };
  typography: Typography;
}

export const themes = {
  dark: {
    name: "dark",
    textColor: "var(--white)",
    secondaryTextColor: "var(--grey1)",
    footerColor: "var(--grey1)",
    background1: "var(--black)",
    borderColor1: "var(--grey2)",
    borderColor2: "var(--grey3)",
    cardGradient: "var(--gradient-top-grey)",
    blackOverlay: "var(--blackOverlay)",
    walletButtonBorder: "var(--grey4)",
    divider: "var(--grey3)",
    transition: "var(--transition1)",
    colors: {
      white: "var(--white)",
      blue: "var(--blue)",
      green: "var(--green)",
      yellow: "var(--yellow)",
      red: "var(--red)",
      grey: "var(--grey2)",
      black: "var(-black)",
      moleculeGreen: "var(--moleculeGreen)",
    },
    typography,
  },
  light: {
    name: "light",
    textColor: "var(--black)",
    secondaryTextColor: "var(--grey1)",
    footerColor: "var(--grey1)",
    background1: "var(--white)",
    borderColor1: "var(--grey2)",
    borderColor2: "var(--grey3)",
    cardGradient: "var(--gradient-top-grey)",
    blackOverlay: "var(--blackOverlay)",
    walletButtonBorder: "var(--grey4)",
    divider: "var(--grey3)",
    transition: "var(--transition1)",
    colors: {
      white: "var(--white)",
      blue: "var(--blue)",
      green: "var(--green)",
      yellow: "var(--yellow)",
      red: "var(--red)",
      grey: "var(--grey2)",
      black: "var(-black)",
      moleculeGreen: "var(--moleculeGreen)",
    },
    typography,
  },
};
