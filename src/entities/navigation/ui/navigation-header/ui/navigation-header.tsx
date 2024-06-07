import { SvgBack } from "@shared/assets/icons/components/back";
import { SvgCross } from "@shared/assets/icons/components/cross";
import { ButtonIcon, ButtonText } from "@shared/ui/buttons";
import { Text, View } from "react-native";
import { useThemeObject } from "@shared/themes";
import { createStyles } from "./navigation-header.styles";
import { FC } from "react";

type NavigationHeaderProps = {
  tile: string;
  isCross?: boolean;
  navigation: any;
  text?: string;
  onPress?: () => void;
};

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  navigation,
  tile,
  isCross,
  text,
  onPress
}) => {
  const styles = useThemeObject(createStyles);
  return (
    <View style={styles.wrapper}>
      <ButtonIcon onPress={() => navigation.goBack()}>
        <SvgBack />
      </ButtonIcon>
      <Text style={styles.textStyles}>{tile}</Text>
      {!isCross && <ButtonText text={text} />}
      {isCross && (
        <ButtonIcon onPress={onPress}>
          <SvgCross />
        </ButtonIcon>
      )}
    </View>
  );
};
