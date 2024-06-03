import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "space-between",
      paddingVertical: 16,
      paddingBottom: 8,
      paddingTop: 180,
      backgroundColor: theme.color.lightest,
    },
  });
  return styles;
};
