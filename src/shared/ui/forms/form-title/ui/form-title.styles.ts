import { TYPOGRAPHY } from "@shared/constants";
import { StyleSheet } from "react-native";

export const createStyles = () => {
  const styles = StyleSheet.create({
    root: {
      ...TYPOGRAPHY.headline1Semibold18,
    },
  });
  return styles;
};
