import { ButtonBase, ButtonBaseProps } from "../button-base";
import { Text, View } from "react-native";
import { FC } from "react";
import { createStyles } from "./button-text.styles";
import { useThemeObject } from "@shared/themes";

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
