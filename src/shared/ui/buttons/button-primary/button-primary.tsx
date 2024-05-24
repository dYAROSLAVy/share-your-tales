import { ButtonBase, ButtonBaseProps } from "../button-base";
import { Text } from "react-native";
import { FC, useState } from "react";
import { getStyles } from "./button-primary.styles";
import { SvgLoading } from "@shared/assets/icons/components/loading";

export const ButtonPrimary: FC<ButtonBaseProps> = ({
  text,
  disabled,
  isLoading,
  ...props
}) => {
  const { rootStyles, textStyle } = getStyles({ disabled, isLoading });
  const [isPressed, setIsPressed] = useState(false);
  return (
    <ButtonBase
      style={rootStyles}
      underlayColor={"#618909"}
      disabled={disabled}
      {...props}
    >
      {isLoading && <SvgLoading />}
      {!isLoading && <Text style={textStyle}>{text}</Text>}
    </ButtonBase>
  );
};
