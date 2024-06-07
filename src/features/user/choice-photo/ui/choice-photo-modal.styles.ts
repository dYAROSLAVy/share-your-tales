import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.color.lightest,
    },
  });
  return styles;
};
