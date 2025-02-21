import { Text } from "react-native";
import { ButtonBase, ButtonBaseProps } from "@shared/ui/buttons/button-base";
import { getStyles } from "./button-tab.style";
import { FC } from "react";
import { useTheme } from "@shared/themes";

export const ButtonTab: FC<ButtonTabProps> = ({
  isLeft,
  isRight,
  text,
  isActive,
  ...props
}) => {
  const { button, buttonText } = getStyles({ isLeft, isRight, isActive });

  const { theme } = useTheme();
  return (
    <ButtonBase
      style={button}
      underlayColor={isActive ? theme.color.primaryBtn : theme.color.lighter}
      {...props}
    >
      <Text style={buttonText}>{text}</Text>
    </ButtonBase>
  );
};

export type ButtonTabProps = {
  isLeft?: boolean;
  isRight?: boolean;
  isActive?: boolean;
} & ButtonBaseProps;
