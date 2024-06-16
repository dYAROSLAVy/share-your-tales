import { getStyles } from "./button-base.styles";
import {
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import React, { FC } from "react";
import { SvgProps } from "react-native-svg";

export type ButtonBaseProps = {
  text?: string;
  isMedium?: boolean;
  isPressed?: boolean;
  isDelete?: boolean;
  isLoading?: boolean;
  icon?: (props: SvgProps) => JSX.Element;
} & TouchableHighlightProps &
  SvgProps;

export const ButtonBase: FC<ButtonBaseProps> = (
  {
    children,
    style,
    underlayColor,
    disabled,
    onPress,
    onShowUnderlay,
    onHideUnderlay,
  },
  ...props
) => {
  const { rootStyles } = getStyles({ style });

  return (
    <TouchableHighlight
      onPress={onPress}
      style={rootStyles}
      onShowUnderlay={onShowUnderlay}
      onHideUnderlay={onHideUnderlay}
      underlayColor={underlayColor}
      activeOpacity={1}
      disabled={disabled}
      {...props}
    >
      <View>{children}</View>
    </TouchableHighlight>
  );
};
