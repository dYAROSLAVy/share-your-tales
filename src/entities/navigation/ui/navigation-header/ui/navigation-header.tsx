import { SvgBack } from "@shared/assets/icons/components/back";
import { SvgCross } from "@shared/assets/icons/components/cross";
import { ButtonIcon, ButtonText } from "@shared/ui/buttons";
import { Text, View } from "react-native";
import { FC } from "react";
import { getStyles } from "./navigation-header.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export type NavigationHeaderProps = {
  tile?: string;
  isFullPost?: boolean;
  isCross?: boolean;
  isDisabled?: boolean;
  navigation: NativeStackNavigationProp<ParamListBase, string>;
  text?: string;
  onPress?: () => void;
  onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>;
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
