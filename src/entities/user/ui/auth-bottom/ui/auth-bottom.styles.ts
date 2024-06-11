import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    bottomInner: {
      alignItems: "center",
      gap: 17,
      paddingVertical: 20,
      paddingHorizontal: 16,
    },

    registerWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 4,
    },
  });
  return styles;
};
