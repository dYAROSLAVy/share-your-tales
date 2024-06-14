import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 16,
      paddingBottom: 20,
      backgroundColor: theme.color.lightest,
    },
    titleStyle: {
      ...TYPOGRAPHY.title2Medium32,
      color: theme.color.darkest,
    },
  });
  return styles;
};
