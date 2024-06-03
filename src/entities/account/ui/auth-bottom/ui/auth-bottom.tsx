import { FC } from "react";
import { Text, View } from "react-native";
import { createStyles } from "./auth-bottom.styles";
import { useThemeObject } from "@shared/themes";
import { Subtitle, SubtitleProps } from "@shared/ui/subtitle";
import { ButtonPrimary, ButtonText } from "@shared/ui/buttons";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

type AuthBottomProps = {
  onSubmit: any;
  textButton: string;
  onTextBtnPress: () => void;
  loading: boolean;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
} & SubtitleProps;

export const AuthBottom: FC<AuthBottomProps> = ({
  subtitle,
  onSubmit,
  onTextBtnPress,
  textButton,
  handleSubmit,
  loading,
}) => {
  const styles = useThemeObject(createStyles);

  return (
    <View style={styles.bottomInner}>
      <View style={styles.registerWrap}>
        <Subtitle subtitle={subtitle} />
        <ButtonText text={textButton} onPress={onTextBtnPress} />
      </View>
      <ButtonPrimary
        text="Continue"
        onPress={handleSubmit(onSubmit)}
        isLoading={loading}
      />
    </View>
  );
};
