import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { useThemeObject } from "@shared/themes";

export const getStyles = (
  isPressed: boolean,
  disabled: boolean | undefined
) => {
  const { styles } = useThemeObject(createStyles);

  return {
    text: [
      styles.text,
      isPressed && styles.textActive,
      disabled && styles.disabled,
    ],
    decor: [
      styles.decor,
      isPressed && styles.decorActive,
      disabled && styles.disabledDecor,
    ],
  };
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    text: {
      ...TYPOGRAPHY.body2Medium16,
      color: theme.color.title,
    },
    decor: {
      marginTop: 2,
      height: 1,
      backgroundColor: theme.color.title,
    },
    textActive: {
      color: theme.color.titlePressed,
    },
    decorActive: {
      backgroundColor: theme.color.titlePressed,
    },
    disabled: {
      color: theme.color.darker,
    },
    disabledDecor: {
      backgroundColor: theme.color.darker,
    },
  });

  return { styles };
};
