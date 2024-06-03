import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { useThemeObject } from "@shared/themes";
import { AvatarProps } from "./avatar";

type PickedAvatarProps = Pick<AvatarProps, "style">;

export const getStyles = ({ style }: PickedAvatarProps) => {
  const { styles } = useThemeObject(createStyles);

  return {
    rootStyles: [style, styles.root],
  };
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.color.light,
    },
  });

  return { styles };
};
