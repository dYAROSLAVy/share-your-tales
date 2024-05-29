import { TYPOGRAPHY } from "@shared/constants/typography";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "space-between",
      paddingVertical: 16,
      paddingBottom: 8,
      paddingTop: 180,
      backgroundColor: theme.color.lightest
    },

    topInner: {
      gap: 40,
      paddingHorizontal: 16,
    },

    textWrapper: {
      gap: 4,
    },

    inputsWrapper: {
      gap: 16,
    },


    title: {
      color: theme.color.title,
      ...TYPOGRAPHY.title2Medium32,
    },

    text: {
      ...TYPOGRAPHY.body5Regular16,
      color: theme.color.darkest,
    },

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
