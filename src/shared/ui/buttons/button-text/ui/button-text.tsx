import { ButtonBase, ButtonBaseProps } from "../../button-base";
import { Text, View } from "react-native";
import { FC, useState } from "react";
import { getStyles } from "./button-text.styles";

export const ButtonText: FC<ButtonBaseProps> = ({
  text,
  disabled,
  onPress,
  onShowUnderlay,
  onHideUnderlay,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const styles = getStyles(isPressed, disabled);

  return (
    <ButtonBase
      onPress={onPress}
      underlayColor="transparent"
      onShowUnderlay={() => setIsPressed(true)}
      onHideUnderlay={() => setIsPressed(false)}
      {...props}
    >
      <Text style={styles.text}>{text}</Text>
      <View style={styles.decor}></View>
    </ButtonBase>
  );
};
