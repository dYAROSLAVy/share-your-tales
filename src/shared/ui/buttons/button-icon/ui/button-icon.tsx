import { Text, View } from "react-native";
import { ButtonBase, ButtonBaseProps } from "@shared/ui/buttons/button-base";
import { FC, useState } from "react";
import { getStyles } from "./button-icon.style";
import { useTheme } from "@shared/themes";

export const ButtonIcon: FC<ButtonBaseProps> = ({
  text,
  children,
  icon: Icon,
  width,
  height,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const { theme } = useTheme();

  const styles = getStyles(isPressed);

  return (
    <ButtonBase
      {...props}
      underlayColor={styles.underlay.color}
      onShowUnderlay={() => setIsPressed(true)}
      onHideUnderlay={() => setIsPressed(false)}
    >
      <View style={styles.root}>
        {children}
        {Icon ? (
          <Icon
            color={isPressed ? styles.pressed.color : theme.color.darkest}
            width={width}
            height={height}
          />
        ) : (
          ""
        )}
        <Text style={styles.textStyles}>{text}</Text>
      </View>
    </ButtonBase>
  );
};
