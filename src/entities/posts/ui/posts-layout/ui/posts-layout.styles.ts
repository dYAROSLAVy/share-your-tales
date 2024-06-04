import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      gap: 20,
      paddingVertical: 16,
      paddingBottom: 8,
      backgroundColor: theme.color.lightest,
    },
  });
  return styles;
};
