import { useThemeObject } from "@shared/themes";
import { FC } from "react";
import { Text } from "react-native";
import { createStyles } from "./status-text.styles";

type StatusTextProps = {
  text: string;
};

export const StatusText: FC<StatusTextProps> = ({ text }) => {
  const styles = useThemeObject(createStyles);
  return <Text style={styles.textStyles}>{text}</Text>;
};
