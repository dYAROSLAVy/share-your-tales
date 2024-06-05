import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      gap: 28,
      backgroundColor: theme.color.lightest,
    },
    wrapper: {
      paddingHorizontal: 16,
      gap: 52,
    },
    inner: {
      gap: 40,
    },
  });
  return styles;
};
