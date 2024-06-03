import { useThemeObject } from "@shared/themes";
import { FC } from "react";
import { Text, View } from "react-native";
import { createStyles } from "./status-title.styles";

type StatusTextProps = {
  title: string;
};

export const StatusTitle: FC<StatusTextProps> = ({ title }) => {
  const styles = useThemeObject(createStyles);
  return (
    <View style={styles.titleWrap}>
      <Text style={styles.titleStyles}>{title}</Text>
    </View>
  );
};
