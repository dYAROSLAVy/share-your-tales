import { FC, PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";
import { createStyles } from "./posts-layout.styles";
import { useThemeObject } from "@shared/themes";

export const PostsLayout: FC<PropsWithChildren> = ({ children }) => {
  const styles = useThemeObject(createStyles);

  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
};
