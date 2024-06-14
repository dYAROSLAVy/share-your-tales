import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { ButtonBaseProps } from "../../button-base";
import { useThemeObject } from "@shared/themes";

export const getStyles = (isPressed: boolean) => {
  const { styles } = useThemeObject(createStyles);

  return {
    text: [styles.text, isPressed && styles.textActive],
    decor: [styles.decor, isPressed && styles.decorActive],
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
  });

  return { styles };
};
