import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    titleWrap: {
      backgroundColor: theme.color.title,
      paddingVertical: 12,
      paddingHorizontal: 20,
      transform: [{ rotate: "-3deg" }],
    },
    titleStyles: {
      ...TYPOGRAPHY.title1Regular55,
      color: theme.color.lightest,
    },
  });
  return styles;
};
