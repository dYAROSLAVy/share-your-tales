import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      width: "100%",
      gap: 32,
    },
    labelStyle: {
      ...TYPOGRAPHY.body5Regular16,
      color: theme.color.darkest,
    },
    checkContainer: {
      marginHorizontal: 0,
      paddingHorizontal: 0,
      gap: 0,
    },
    checkColor: {
      color: theme.color.darkest,
    },
    checkInner: {
      color: theme.color.title,
    },
  });
  return styles;
};
