import { ButtonBase, ButtonBaseProps } from "../button-base";
import { Text } from "react-native";
import { FC } from "react";
import { getStyles } from "./button-primary.styles";

export const ButtonPrimary: FC<ButtonBaseProps> = ({
  text,
  disabled,
  ...props
}) => {
  const { rootStyles, textStyle } = getStyles({ disabled });
  return (
    <ButtonBase style={rootStyles} underlayColor={"#618909"} {...props}>
      <Text style={textStyle}>{text}</Text>
    </ButtonBase>
  );
};
