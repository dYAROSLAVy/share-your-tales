import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.color.lightest,
    },
    cancel: {
      borderRadius: 15,
    },
    middle: {
      borderRadius: 0,
      borderColor: theme.color.menu,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
    top: {
      borderRadius: 0,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    bottom: {
      borderRadius: 0,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
  });
  return styles;
};
