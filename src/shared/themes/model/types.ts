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
  disabled: string;
  primaryBtn: string;
  primaryBtnText: string;
  errorClr: string;
};

export type Theme = {
  id: string;
  color: ColorTheme;
};
