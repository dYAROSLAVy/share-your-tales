import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    postsList: {
      gap: 4,
    },
    deleteStyles: {
      width: 73,
      justifyContent: "center",

      backgroundColor: theme.color.errorClr,
    },
    deleteText: {
      ...TYPOGRAPHY.body3Medium14,
      color: "white",
    },
    deleteBtn: {
      flex: 1,
    },
    deleteInner: {
      gap: 8,
      alignItems: "center",
    },
  });
  return styles;
};
