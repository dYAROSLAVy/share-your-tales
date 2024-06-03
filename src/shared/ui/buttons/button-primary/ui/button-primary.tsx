import { ButtonBase, ButtonBaseProps } from "../../button-base";
import { Text } from "react-native";
import { FC } from "react";
import { getStyles } from "./button-primary.styles";
import { SvgLoading } from "@shared/assets/icons/components/loading";
import { useTheme } from "@shared/themes";

export const ButtonPrimary: FC<ButtonBaseProps> = ({
  text,
  disabled,
  isLoading,
  ...props
}) => {
  const { theme } = useTheme();
  const { rootStyles, textStyle } = getStyles({ disabled, isLoading });

  return (
    <ButtonBase
      style={rootStyles}
      underlayColor={theme.color.primaryPress}
      disabled={disabled}
      {...props}
    >
      {isLoading && <SvgLoading />}
      {!isLoading && <Text style={textStyle}>{text}</Text>}
    </ButtonBase>
  );
};
