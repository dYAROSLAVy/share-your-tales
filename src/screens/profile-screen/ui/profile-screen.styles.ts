import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      gap: 12,
    },
    wrapper: {
      alignItems: "center",
      gap: 32,
      paddingHorizontal: 16,
    },
    formWrap: {
      width: "100%",
      gap: 32,
    },
  });
  return styles;
};
