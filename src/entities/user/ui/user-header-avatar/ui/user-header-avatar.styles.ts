import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
    },
    avatar: {
      borderRadius: 32,
    },
  });
  return styles;
};
