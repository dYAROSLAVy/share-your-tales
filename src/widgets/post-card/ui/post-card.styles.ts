import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      gap: 12,
      minHeight: 364,
      paddingTop: 24,
      paddingHorizontal: 20,
      paddingBottom: 32,
      backgroundColor: theme.color.lighter,
    },
    topInner: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    titleStyles: {
      ...TYPOGRAPHY.body2Medium16,
      color: theme.color.darkest,
    },
    date: {
      ...TYPOGRAPHY.body6Regular14,
    },
    bottomInner: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    authorWrap: {
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
    },
  });
  return styles;
};
