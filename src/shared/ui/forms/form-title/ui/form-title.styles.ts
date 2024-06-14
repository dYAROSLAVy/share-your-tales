import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      ...TYPOGRAPHY.headline1Semibold18,
      color: theme.color.darkest,
    },
  });
  return styles;
};
