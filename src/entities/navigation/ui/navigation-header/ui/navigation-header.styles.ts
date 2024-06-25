import { TYPOGRAPHY } from "@shared/constants";
import { useThemeObject } from "@shared/themes";
import { Theme } from "@shared/themes/model/types";
import { StyleSheet } from "react-native";
import { NavigationHeaderProps } from "./navigation-header";

type PickedNavigationHeaderProps = Pick<NavigationHeaderProps, "isFullPost">;
export const getStyles = ({ isFullPost }: PickedNavigationHeaderProps) => {
  const { styles } = useThemeObject(createStyles);

  return {
    wrapper: styles.wrapper,
    textStyles: [styles.textStyles, isFullPost && styles.textStylesFullPost],
  };
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 20,
      paddingHorizontal: 16,
      height: 108,
    },
    textStyles: {
      ...TYPOGRAPHY.headline1Semibold18,
      color: theme.color.darkest,
    },
    textStylesFullPost: {
      marginLeft: -24,
    },
  });

  return { styles };
};
