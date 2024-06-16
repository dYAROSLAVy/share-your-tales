import { useThemeObject } from "@shared/themes";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";

export const getStyles = (isPressed: boolean) => {
  const { styles } = useThemeObject(createStyles);

  return {
    root: styles.root,
    textStyles: [styles.textStyles, isPressed && styles.textActive],
    underlay: styles.underlay,
    pressed: styles.pressed,
  };
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    textStyles: {
      color: theme.color.darkest,
    },
    underlay: {
      color: "transparent",
    },
    textActive: {
      color: theme.color.titlePressed,
    },
    pressed: {
      color: theme.color.titlePressed,
    },
  });

  return { styles };
};
