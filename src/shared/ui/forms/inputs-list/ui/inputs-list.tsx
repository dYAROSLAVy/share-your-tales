import { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { createStyles } from "./inputs-list.styles";

export const InputsList: FC<PropsWithChildren> = ({ children }) => {
  const styles = createStyles();

  return <View style={styles.inputsWrapper}>{children}</View>;
};
