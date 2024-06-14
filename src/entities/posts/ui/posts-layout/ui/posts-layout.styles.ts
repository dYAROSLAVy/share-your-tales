import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      position: "relative",
      flex: 1,
      gap: 20,
      paddingBottom: 8,
      backgroundColor: theme.color.lightest,
    },
  });
  return styles;
};
