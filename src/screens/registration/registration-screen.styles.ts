import { COLORS } from "@shared/constants/colors";
import { TYPOGRAPHY } from "@shared/constants/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    gap: 154,
    paddingVertical: 16,
    paddingBottom: 8,
  },

  topInner: {
    gap: 4,
    paddingHorizontal: 16,
  },

  title: {
    color: COLORS.light.title,
    ...TYPOGRAPHY.title2Medium32,
  },

  text: {
    ...TYPOGRAPHY.body5Regular16,
    color: COLORS.light.darkest,
  },

  bottomInner: {
    alignItems: "center",
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },

  registerWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
});
