import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { InputBaseProps } from "./input-base";
import { useThemeObject } from "@shared/themes";
import { TYPOGRAPHY } from "@shared/constants";

type PickedInputBaseProps = Pick<InputBaseProps, "style" | "error">;
export const getStyles = ({ style, error }: PickedInputBaseProps) => {
  const { styles } = useThemeObject(createStyles);

  return {
    root: [styles.root, error && styles.errorRoot, style],
    input: [styles.input, error && styles.errorInput],
    labelText: [styles.labelText, error && styles.errorLabel],
    errorText: styles.errorText,
  };
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      position: "relative",
      borderBottomColor: theme.color.dark,
      borderBottomWidth: 1.5,
    },
    input: {
      height: 49,
      padding: 0,
      color: theme.color.darkest,
    },
    labelText: {
      color: theme.color.dark,
      ...TYPOGRAPHY.headline1Semibold14,
    },
    errorText: {
      position: "absolute",
      bottom: -18,
      ...TYPOGRAPHY.body6Regular14,
      color: theme.color.errorClr,
    },
    errorInput: {
      color: theme.color.errorClr,
    },
    errorLabel: {
      color: theme.color.errorClr,
    },
    errorRoot: {
      borderBottomColor: theme.color.errorClr,
    },
  });

  return { styles };
};
