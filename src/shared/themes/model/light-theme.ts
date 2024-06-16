import { ColorTheme } from "../model/types";

const LIGHT_COLOR_THEME: ColorTheme = {
  darkest: "#131313",
  darker: "#696969",
  dark: "#9B9B9B",
  medium: "#D0D1D0",
  light: "#DEDEDE",
  lighter: "#F4F5F4",
  lightest: "#FFFFFF",
  primary: "#02FF3A",
  primaryPress: "#75C537",
  title: "#87b71f",
  titlePressed: "#618909",
  disabled: "#cfcfcf",
  primaryBtn: "#87b71f",
  primaryBtnText: "#FFFFFF",
  errorClr: "#C2534C",
  menu: "#dedede",
  plus: "#618909",
  plusIcon: "#f4f5f4",
};

export const LIGHT_THEME_ID = "default-light";

export const LIGHT_THEME = {
  id: LIGHT_THEME_ID,
  color: LIGHT_COLOR_THEME,
};
