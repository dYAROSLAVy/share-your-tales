import { Text, View } from "react-native";
import { ButtonBase, ButtonBaseProps } from "@shared/ui/buttons/button-base";
import { FC, useState } from "react";
import { getStyles } from "./button-icon.style";

export const ButtonIcon: FC<ButtonBaseProps> = ({
  text,
  children,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

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
        <Text style={styles.textStyles}>{text}</Text>
      </View>
    </ButtonBase>
  );
};
