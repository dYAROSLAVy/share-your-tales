import { ButtonBase, ButtonBaseProps } from "../../button-base";
import { FC } from "react";
import { createStyles } from "./button-upload.styles";
import { useThemeObject } from "@shared/themes";
import { Text, View } from "react-native";
import { SvgCloud } from "@shared/assets/icons/components/cloud";

export const ButtonUpload: FC<ButtonBaseProps> = ({ onPress, ...props }) => {
  const styles = useThemeObject(createStyles);
  return (
    <View style={styles.wrapper}>
      <ButtonBase onPress={onPress} underlayColor="transparent" {...props}>
        <View style={styles.inner}>
          <SvgCloud />
          <Text style={styles.text}>Upload your photo here</Text>
        </View>
      </ButtonBase>
    </View>
  );
};
