import { FC } from "react";
import { Text } from "react-native";
import { useThemeObject } from "@shared/themes";
import { createStyles } from "./subtitle.styles";

export type SubtitleProps = {
  subtitle: string;
};

export const Subtitle: FC<SubtitleProps> = ({ subtitle }) => {
  const styles = useThemeObject(createStyles);

  return <Text style={styles.root}>{subtitle}</Text>;
};
