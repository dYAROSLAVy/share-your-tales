import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: theme.color.lightest,
    },
    inner: {
      flex: 1,
      justifyContent: "center",
      gap: 52,
      padding: 16,
    },
    topWrap: {
      alignItems: "center",
      gap: 14,
    },
    bottomWrap: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 6,
    },
  });
  return styles;
};
