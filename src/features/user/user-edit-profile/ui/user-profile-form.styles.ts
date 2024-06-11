import { Theme } from "@shared/themes";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      width: "100%",
      gap: 32,
    },
  });
  return styles;
};
