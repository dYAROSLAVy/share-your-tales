import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { ButtonBaseProps } from "../../button-base";
import { useThemeObject } from "@shared/themes";

type PickedButtonBaseProps = Pick<ButtonBaseProps, "style">;

export const getStyles = ({ style }: PickedButtonBaseProps) => {
  const { styles } = useThemeObject(createStyles);

  return { rootStyles: [style, styles.root] };
};
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",
      width: 56,
      height: 56,
      borderRadius: 32,
      backgroundColor: theme.color.title,
    },
  });
  return { styles };
};
