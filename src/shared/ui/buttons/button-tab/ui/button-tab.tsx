import { Text } from "react-native";
import { ButtonBase, ButtonBaseProps } from "@shared/ui/buttons/button-base";
import { getStyles } from "./button-tab.style";
import { FC } from "react";

export const ButtonTab: FC<ButtonTabProps> = ({
  isLeft,
  isRight,
  text,
  isActive,
  ...props
}) => {
  const { button, buttonText } = getStyles({ isLeft, isRight, isActive });
  return (
    <ButtonBase style={button} {...props}>
      <Text style={buttonText}>{text}</Text>
    </ButtonBase>
  );
};

export type ButtonTabProps = {
  isLeft?: boolean;
  isRight?: boolean;
  isActive?: boolean;
} & ButtonBaseProps;
