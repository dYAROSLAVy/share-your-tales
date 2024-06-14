import { Text } from "react-native";
import { createStyles } from "./form-title.styles";
import { FC } from "react";
import { useTheme, useThemeObject } from "@shared/themes";

type FormTitleProps = {
  title: string;
};

export const FormTitle: FC<FormTitleProps> = ({ title }) => {
  const styles = useThemeObject(createStyles);

  return <Text style={styles.root}>{title}</Text>;
};
