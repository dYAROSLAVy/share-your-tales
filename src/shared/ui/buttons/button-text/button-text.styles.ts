import { TYPOGRAPHY } from "@shared/constants/typography";
import { Theme } from "@shared/themes/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    text: {
      ...TYPOGRAPHY.body2Medium16,
      color: theme.color.primaryBtn,
    },
    decor: {
      marginTop: 2,
      height: 1,
      backgroundColor: theme.color.primaryBtn,
    },
  });
  return styles;
};

