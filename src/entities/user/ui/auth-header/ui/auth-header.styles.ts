import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    textWrapper: {
      gap: 4,
      paddingTop: 180,
    },
    title: {
      color: theme.color.title,
      ...TYPOGRAPHY.title2Medium32,
    },

    text: {
      ...TYPOGRAPHY.body5Regular16,
      color: theme.color.darkest,
    },
  });
  return styles;
};
