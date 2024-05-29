import { TYPOGRAPHY } from "@shared/constants/typography";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { ButtonBaseProps } from "../button-base";
import { useThemeObject } from "@shared/themes";

type PickedButtonBaseProps = Pick<ButtonBaseProps, "disabled" | "isLoading">;
export const getStyles = ({ disabled, isLoading }: PickedButtonBaseProps) => {
  const { styles } = useThemeObject(createStyles);

  return {
    rootStyles: [
      styles.primary,
      disabled && styles.rootDisabled,
      isLoading && styles.rootLoading,
    ],
    textStyle: [styles.textStyle, disabled && styles.textDisabled],
  };
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    primary: {
      height: 56,
      padding: 16,
      borderRadius: 21,
      backgroundColor: theme.color.primaryBtn,
      width: "100%",
    },
    textStyle: {
      ...TYPOGRAPHY.body2Medium16,
      color: theme.color.primaryBtnText,
    },
    rootDisabled: {
      backgroundColor: theme.color.disabled,
    },
    textDisabled: {
      color: theme.color.dark,
    },
    rootLoading: {
      pointerEvents: "none",
    },
  });

  return { styles };
};
