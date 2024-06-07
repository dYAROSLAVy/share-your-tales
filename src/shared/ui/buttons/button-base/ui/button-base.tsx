import { getStyles } from "./button-base.styles";
import {
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import { FC } from "react";
import { SvgProps } from "react-native-svg";

export type ButtonBaseProps = {
  text?: string;
  isMedium?: boolean;
  isLoading?: boolean;
  icon?: (props: SvgProps) => JSX.Element;
} & TouchableHighlightProps;

export const ButtonBase: FC<ButtonBaseProps> = (
  { children, style, underlayColor, disabled, onPress },
  ...props
) => {
  const { rootStyles } = getStyles({ style });

  return (
    <TouchableHighlight
      onPress={onPress}
      style={rootStyles}
      underlayColor={underlayColor}
      activeOpacity={1}
      disabled={disabled}
      {...props}
    >
      <View>{children}</View>
    </TouchableHighlight>
  );
};
