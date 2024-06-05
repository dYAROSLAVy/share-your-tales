import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 20,
      paddingHorizontal: 16,
    },
    textStyles: {
      ...TYPOGRAPHY.headline1Semibold18,
      color: theme.color.darkest,
    },
  });
  return styles;
};
