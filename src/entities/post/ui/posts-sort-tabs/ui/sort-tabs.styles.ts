import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flexDirection: "row",
      paddingHorizontal: 16,
      paddingVertical: 20,
      backgroundColor: theme.color.lightest,
    },
    button: {
      width: "50%",
      justifyContent: "center",
      height: 47,
      backgroundColor: theme.color.lighter,
    },
    buttonText: {
      ...TYPOGRAPHY.body4Regular18,
      color: theme.color.darkest,
    },
    leftBtn: {
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
    },
    rightBtn: {
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
    },
  });
  return styles;
};
