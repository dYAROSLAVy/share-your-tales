import { Text, View } from "react-native";
import { ButtonBase, ButtonBaseProps } from "@shared/ui/buttons/button-base";
import { createStyles } from "./button-icon.style";
import { FC } from "react";
import { useThemeObject } from "@shared/themes";

export const ButtonIcon: FC<ButtonBaseProps> = ({
  text,
  children,
  ...props
}) => {
  const styles = useThemeObject(createStyles);
  return (
    <ButtonBase {...props}>
      <View style={styles.root}>
        {children}
        <Text style={styles.textStyles}>{text}</Text>
      </View>
    </ButtonBase>
  );
};
