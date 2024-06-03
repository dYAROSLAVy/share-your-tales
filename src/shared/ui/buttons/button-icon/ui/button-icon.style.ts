import { TYPOGRAPHY } from "@shared/constants/lib/typography";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    textStyles: {
      color: theme.color.darkest,
    },
  });
  return styles;
};
