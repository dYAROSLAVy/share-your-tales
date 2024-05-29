import { TYPOGRAPHY } from "@shared/constants/typography";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { InputBaseProps } from "./input-base";
import { useThemeObject } from "@shared/themes";

type PickedInputBaseProps = Pick<InputBaseProps, "style">;
export const getStyles = ({ style }: PickedInputBaseProps) => {
  const { styles } = useThemeObject(createStyles);

  return {
    root: [styles.root, style],
    input: styles.input,
    labelText: styles.labelText,
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
      ...TYPOGRAPHY.headline1Semibold14,
      color: theme.color.dark,
    },
  });

  return { styles };
};
