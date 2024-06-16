export type ColorTheme = {
  darkest: string;
  darker: string;
  dark: string;
  medium: string;
  light: string;
  lighter: string;
  lightest: string;
  primary: string;
  primaryPress: string;
  title: string;
  titlePressed: string;
  disabled: string;
  primaryBtn: string;
  primaryBtnText: string;
  errorClr: string;
  menu: string;
  plus: string;
  plusIcon: string;
};

export type Theme = {
  id: string;
  color: ColorTheme;
};
