import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    text: {
      ...TYPOGRAPHY.body2Medium16,
      color: theme.color.title,
    },
    decor: {
      marginTop: 2,
      height: 1,
      backgroundColor: theme.color.title,
    },
  });
  return styles;
};
