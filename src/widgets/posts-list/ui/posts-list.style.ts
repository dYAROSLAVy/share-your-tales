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
  });
  return styles;
};
