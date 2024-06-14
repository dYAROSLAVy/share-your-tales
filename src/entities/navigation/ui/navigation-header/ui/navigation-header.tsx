import { SvgBack } from "@shared/assets/icons/components/back";
import { SvgCross } from "@shared/assets/icons/components/cross";
import { ButtonIcon, ButtonText } from "@shared/ui/buttons";
import { Text, View } from "react-native";
import { FC } from "react";
import { getStyles } from "./navigation-header.styles";
import { useTheme } from "@shared/themes";

export type NavigationHeaderProps = {
  tile?: string;
  isFullPost?: boolean;
  isCross?: boolean;
  navigation: any;
  text?: string;
  onPress?: () => void;
  onSubmit?: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
};

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  navigation,
  tile,
  onSubmit,
  isFullPost,
  isCross,
  text,
  onPress,
}) => {
  const styles = getStyles({ isFullPost });
  const { theme } = useTheme();
  return (
    <View style={styles.wrapper}>
      <ButtonIcon onPress={() => navigation.goBack()}>
        <SvgBack color={theme.color.darkest} />
      </ButtonIcon>
      <Text style={styles.textStyles}>{tile}</Text>
      {!isCross && <ButtonText text={text} onPress={onSubmit} />}
      {isCross && (
        <ButtonIcon onPress={onPress}>
          <SvgCross />
        </ButtonIcon>
      )}
    </View>
  );
};
