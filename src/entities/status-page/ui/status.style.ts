import { TYPOGRAPHY } from "@shared/constants/typography";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "center",
      gap: 52,
      padding: 16,
      backgroundColor: theme.color.lightest,
    },
    topWrap: {
      alignItems: "center",
      gap: 14,
    },
    titleWrap: {
      backgroundColor: theme.color.primaryBtn,
      paddingVertical: 12,
      paddingHorizontal: 20,
      transform: [{ rotate: "-3deg" }],
    },
    title: {
      ...TYPOGRAPHY.title1Regular55,
      color: theme.color.lightest,
    },
    bottomWrap: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 6,
    },
    text: {
      ...TYPOGRAPHY.body5Regular16,
      color: theme.color.darkest,
    },
  });
  return styles;
};
