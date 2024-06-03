import { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { createStyles } from "./form-wrapper.styles";

export const FormWrapper: FC<PropsWithChildren> = ({ children }) => {
  const styles = createStyles();

  return <View style={styles.root}>{children}</View>;
};
