import { FC, PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";
import { createStyles } from "./auth-layout.styles";
import { useThemeObject } from "@shared/themes";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const styles = useThemeObject(createStyles);

  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
};
