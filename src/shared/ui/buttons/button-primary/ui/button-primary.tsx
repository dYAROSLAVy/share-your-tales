import { ButtonBase, ButtonBaseProps } from "../../button-base";
import { Text } from "react-native";
import { FC, useState } from "react";
import { getStyles } from "./button-primary.styles";
import { SvgLoading } from "@shared/assets/icons/components/loading";
import { useTheme } from "@shared/themes";

export const ButtonPrimary: FC<ButtonBaseProps> = ({
  text,
  disabled,
  isMedium,
  isDelete,
  style,
  isLoading,
  ...props
}) => {
  const { theme } = useTheme();

  const [isPressed, setIsPressed] = useState(false);

  const { rootStyles, textStyle } = getStyles({
    disabled,
    isLoading,
    style,
    isDelete,
    isPressed,
    isMedium,
  });

  return (
    <ButtonBase
      style={rootStyles}
      underlayColor={theme.color.titlePressed}
      disabled={disabled}
      onShowUnderlay={() => setIsPressed(true)}
      onHideUnderlay={() => setIsPressed(false)}
      {...props}
    >
      {isLoading && <SvgLoading />}
      {!isLoading && <Text style={textStyle}>{text}</Text>}
    </ButtonBase>
  );
};
