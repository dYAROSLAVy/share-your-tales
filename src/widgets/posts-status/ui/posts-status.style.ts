import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    wrap: {
      flex: 1,
      alignItems: "center",
      gap: 24,
      marginTop: 152,
      paddingHorizontal: 16,
    },
    bottomWrap: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 6,
    },
  });
  return styles;
};
