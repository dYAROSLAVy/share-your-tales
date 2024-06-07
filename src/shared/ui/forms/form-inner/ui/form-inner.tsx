import { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { createStyles } from "./form-inner.styles";

export const FormInner: FC<PropsWithChildren> = ({ children }) => {
  const styles = createStyles();

  return <View style={styles.inputsWrapper}>{children}</View>;
};
