import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { useThemeObject } from "@shared/themes";
import { ButtonTabProps } from "./button-tab";
import { TYPOGRAPHY } from "@shared/constants";

type PickedButtonTabProps = Pick<
  ButtonTabProps,
  "isLeft" | "isRight" | "isActive"
>;

export const getStyles = ({
  isLeft,
  isRight,
  isActive,
}: PickedButtonTabProps) => {
  const { styles } = useThemeObject(createStyles);

  return {
    button: [
      styles.button,
      isLeft && styles.leftBtn,
      isRight && styles.rightBtn,
      isActive && styles.active,
    ],
    buttonText: [styles.buttonText, isActive && styles.activeText],
  };
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    button: {
      width: "50%",
      justifyContent: "center",
      height: 47,
      backgroundColor: theme.color.lighter,
    },
    buttonText: {
      ...TYPOGRAPHY.body4Regular18,
      color: theme.color.darkest,
    },
    leftBtn: {
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
    },
    rightBtn: {
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
    },
    active: {
      backgroundColor: theme.color.primaryBtn,
    },
    activeText: {
      color: theme.color.lightest,
    },
  });

  return { styles };
};
