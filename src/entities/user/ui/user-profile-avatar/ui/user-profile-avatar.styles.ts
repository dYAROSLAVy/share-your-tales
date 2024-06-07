import { Theme } from "@shared/themes";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      width: 160,
      height: 160,
    },
    avatar: {
      width: 160,
      height: 160,
      borderRadius: 80,
    },
    iconWrap: {
      position: "absolute",
      bottom: 0,
      right: 0,
      alignItems: "center",
      justifyContent: "center",
      width: 38,
      height: 38,
      borderRadius: 20,
      backgroundColor: theme.color.primaryBtn,
    },
  });
  return styles;
};
