import { OUTFIT_FONT } from "@shared/assets/fonts";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    tabBarStyle: {
      height: 100,
      backgroundColor: theme.color.lightest,
      borderColor: "transparent",
      shadowColor: "transparent",
      borderTopWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
      shadowOffset: { height: 0, width: 0 },
      shadowRadius: 0,
      alignItems: "center",
      paddingTop: 15.5,
      paddingBottom: 36.5,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 500,
      fontFamily: OUTFIT_FONT[500],
    },
  });
  return styles;
};
