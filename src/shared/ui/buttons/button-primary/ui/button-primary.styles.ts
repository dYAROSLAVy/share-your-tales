import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { useThemeObject } from "@shared/themes";
import { TYPOGRAPHY } from "@shared/constants";
import { ButtonBaseProps } from "../../button-base";

type PickedButtonBaseProps = Pick<
  ButtonBaseProps,
  "disabled" | "isLoading" | "isMedium"
>;
export const getStyles = ({
  disabled,
  isLoading,
  isMedium,
}: PickedButtonBaseProps) => {
  const { styles } = useThemeObject(createStyles);

  return {
    rootStyles: [
      styles.primary,
      disabled && styles.rootDisabled,
      isLoading && styles.rootLoading,
      isMedium && styles.medium,
    ],
    textStyle: [
      styles.textStyle,
      disabled && styles.textDisabled,
      isMedium && styles.mediumText,
    ],
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
    medium: {
      backgroundColor: theme.color.lightest,
      height: 44,
      padding: 10,
    },
    mediumText: {
      color: theme.color.primaryBtn,
    },
  });

  return { styles };
};
