import { TYPOGRAPHY } from "@shared/constants";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { PostProps } from "./post-card";
import { useThemeObject } from "@shared/themes";

type PickedPostProps = Pick<PostProps, "isBig">;
export const getStyles = ({ isBig }: PickedPostProps) => {
  const { styles } = useThemeObject(createStyles);

  return {
    root: [styles.root, isBig && styles.isBig],
    topInner: [styles.topInner, isBig && styles.topInnerPrimary],
    titleStyles: styles.titleStyles,
    date: styles.date,
    bottomInner: styles.bottomInner,
    authorWrap: styles.authorWrap,
    interactionWrap: styles.interactionWrap,
    imageStyles: styles.imageStyles,
    btnShared: styles.btnShared,
    btnLike: styles.btnLike,
    avatarStyles: styles.avatarStyles,
    author: styles.author,
    textStyles: styles.textStyles,
  };
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    root: {
      gap: 20,
      minHeight: 364,
      paddingTop: 24,
      paddingHorizontal: 20,
      paddingBottom: 32,
      backgroundColor: theme.color.lighter,
    },
    topInner: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    titleStyles: {
      ...TYPOGRAPHY.body2Medium16,
      color: theme.color.darkest,
    },
    date: {
      ...TYPOGRAPHY.body6Regular14,
      color: theme.color.dark,
    },
    bottomInner: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    authorWrap: {
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
    },
    interactionWrap: {
      flexDirection: "row",
      gap: 12,
      flexWrap: "wrap",
    },
    imageStyles: {
      minWidth: 335,
      height: 226,
      marginBottom: 8,
      borderRadius: 17,
    },
    btnShared: {
      width: 28,
      height: 28,
    },
    btnLike: {
      width: 52,
      height: 28,
    },
    avatarStyles: {
      width: 24,
      height: 24,
      borderRadius: 12,
    },
    author: {
      color: theme.color.dark,
    },
    isBig: {
      backgroundColor: theme.color.lightest,
    },
    topInnerPrimary: {
      justifyContent: "center",
    },
    textStyles: {
      color: theme.color.darker,
    },
  });

  return { styles };
};
