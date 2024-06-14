import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(48, 48, 48, 0.8)",
    },
    inner: {
      paddingHorizontal: 16,
      gap: 8,
    },
  });
  return styles;
};
