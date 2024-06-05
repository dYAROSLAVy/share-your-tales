import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    wrapper: {
      justifyContent: "center",
      height: 166,
      backgroundColor: theme.color.lighter,
      borderRadius: 24,
      borderWidth: 1.5,
      borderStyle: "dashed",
      borderColor: theme.color.primaryBtn,
    },
    text: {
      ...TYPOGRAPHY.body3Medium14,
      color: theme.color.darkest,
    },
    inner: {
      alignItems: "center",
      gap: 8,
    },
  });
  return styles;
};
