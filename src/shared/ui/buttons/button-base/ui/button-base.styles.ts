import { StyleSheet } from "react-native";
import { ButtonBaseProps } from "./button-base";

type PickedButtonBaseProps = Pick<ButtonBaseProps, "style">;
export const getStyles = ({ style }: PickedButtonBaseProps) => {
  const { styles } = createStyles();

  return { rootStyles: [style, styles.root] };
};

const createStyles = () => {
  const styles = StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return { styles };
};
