import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    textStyles: {
      ...TYPOGRAPHY.body5Regular16,
      color: theme.color.darkest,
      textAlign: "center",
    },
  });
  return styles;
};
