import { Text } from "react-native";
import { createStyles } from "./form-title.styles";
import { FC } from "react";

type FormTitleProps = {
  title: string;
};

export const FormTitle: FC<FormTitleProps> = ({ title }) => {
  const styles = createStyles();

  return <Text style={styles.root}>{title}</Text>;
};
