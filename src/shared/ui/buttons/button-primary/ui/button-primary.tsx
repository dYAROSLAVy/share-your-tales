import { ButtonBase, ButtonBaseProps } from "../../button-base";
import { Text } from "react-native";
import { FC, useEffect, useState } from "react";
import { getStyles } from "./button-primary.styles";
import { SvgLoading } from "@shared/assets/icons/components/loading";
import { useTheme } from "@shared/themes";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
} from "react-native-reanimated";

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

  const sv = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  useEffect(() => {
    sv.value = withRepeat(
      withTiming(100, { duration: 100000, easing: Easing.linear })
    );
  }, [isLoading]);

  return (
    <ButtonBase
      style={rootStyles}
      underlayColor={theme.color.titlePressed}
      disabled={disabled}
      onShowUnderlay={() => setIsPressed(true)}
      onHideUnderlay={() => setIsPressed(false)}
      {...props}
    >
      {isLoading && (
        <Animated.View style={animatedStyle}>
          <SvgLoading color={theme.color.titlePressed} />
        </Animated.View>
      )}
      {!isLoading && <Text style={textStyle}>{text}</Text>}
    </ButtonBase>
  );
};
