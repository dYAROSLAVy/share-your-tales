import { FC } from "react";
import { Text, View } from "react-native";
import { createStyles } from "./auth-header.styles";
import { useThemeObject } from "@shared/themes";
import { Subtitle, SubtitleProps } from "@shared/ui/subtitle";

type AuthHeaderProps = {
  title: string;
} & SubtitleProps;

export const AuthHeader: FC<AuthHeaderProps> = ({ title, subtitle }) => {
  const styles = useThemeObject(createStyles);

  return (
    <View style={styles.textWrapper}>
      <Text style={styles.title}>{title}</Text>
      <Subtitle subtitle={subtitle} />
    </View>
  );
};
