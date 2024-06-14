import { Theme } from "@shared/themes";
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
    underlay: {
      color: "transparent",
    },
  });
  return styles;
};
