import { ColorTheme } from "../model/types";

const DARK_COLOR_THEME: ColorTheme = {
  darkest: "#FFFFFF",
  darker: "#DEDEDE",
  dark: "#9B9B9B",
  medium: "#696969",
  light: "#303030",
  lighter: "#1b1b1b",
  lightest: "#131313",
  primary: "#91C521",
  primaryPress: "#7AA818",
  title: "#b8de64",
  titlePressed: "#b8de64",
  disabled: "#cfcfcf",
  primaryBtn: "#303030",
  primaryBtnText: "#b8de64",
  errorClr: "#C2534C",
  menu: "#696969",
  plus: "#131313",
  plusIcon: "#b8de64",
};

export const DARK_THEME_ID = "default-dark";

export const DARK_THEME = {
  id: DARK_THEME_ID,
  color: DARK_COLOR_THEME,
};
