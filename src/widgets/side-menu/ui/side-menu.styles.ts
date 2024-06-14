import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "flex-start",
      paddingTop: 60,
      paddingHorizontal: 32,
      paddingBottom: 22,
      backgroundColor: theme.color.lightest,
    },
    userWrap: {
      gap: 12,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 41,
    },
    actionsWrap: {
      alignItems: "flex-start",
      gap: 32,
    },
    topInner: {
      gap: 60,
    },
    name: {
      ...TYPOGRAPHY.headline1Semibold18,
      fontSize: 20,
      color: theme.color.darkest,
    },
    contentContainerStyle: {
      flex: 1,
      backgroundColor: theme.color.lightest,
    },
  });
  return styles;
};
