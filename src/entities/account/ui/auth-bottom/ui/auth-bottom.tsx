import { FC } from "react";
import { Text, View } from "react-native";
import { createStyles } from "./auth-bottom.styles";
import { useThemeObject } from "@shared/themes";
import { Subtitle, SubtitleProps } from "@shared/ui/subtitle";
import { ButtonPrimary, ButtonText } from "@shared/ui/buttons";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

type AuthBottomProps = {
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  textButton: string;
  onTextBtnPress: () => void;
  loading: boolean;
} & SubtitleProps;

export const AuthBottom: FC<AuthBottomProps> = ({
  subtitle,
  onTextBtnPress,
  textButton,
  loading,
  onSubmit,
}) => {
  const styles = useThemeObject(createStyles);

  return (
    <View style={styles.bottomInner}>
      <View style={styles.registerWrap}>
        <Subtitle subtitle={subtitle} />
        <ButtonText text={textButton} onPress={onTextBtnPress} />
      </View>
      <ButtonPrimary text="Continue" onPress={onSubmit} isLoading={loading} />
    </View>
  );
};
