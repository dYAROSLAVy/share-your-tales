import { ButtonBase, ButtonBaseProps } from "../button-base";
import { Text, View } from "react-native";
import { FC } from "react";
import { useThemeObject } from "@shared/themes/theme-object.hook";
import { createStyles } from "./button-text.styles";

export const ButtonText: FC<ButtonBaseProps> = ({
  text,
  onPress,
  ...props
}) => {
  const styles = useThemeObject(createStyles);
  return (
    <ButtonBase onPress={onPress} underlayColor="transparent" {...props}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.decor}></View>
    </ButtonBase>
  );
};
