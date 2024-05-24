import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    icon: {
      position: "absolute",
      right: 0,
      top: "50%",
    },
    root: {
      paddingRight: 25,
    },
  });

  return { styles };
};
