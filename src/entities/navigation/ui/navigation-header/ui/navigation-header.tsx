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
  isDisabled?: boolean;
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
  isDisabled,
  isCross,
  text,
  onPress,
}) => {
  const styles = getStyles({ isFullPost });
  const { theme } = useTheme();
  return (
    <View style={styles.wrapper}>
      <ButtonIcon
        onPress={() => navigation.goBack()}
        icon={SvgBack}
        width={24}
        height={24}
      />
      <Text style={styles.textStyles}>{tile}</Text>
      {!isCross && (
        <ButtonText text={text} onPress={onSubmit} disabled={isDisabled} />
      )}
      {isCross && (
        <ButtonIcon onPress={onPress} icon={SvgCross} width={24} height={24} />
      )}
    </View>
  );
};
