import { useUserMe } from "@shared/apollo";
import { createStyles } from "./user-profile-avatar.styles";
import { useTheme, useThemeObject } from "@shared/themes";
import { Avatar } from "@shared/ui/avatar";
import { ButtonBase } from "@shared/ui/buttons";
import { View } from "react-native";
import { SvgCamera } from "@shared/assets/icons/components/camera";

export const UserProfileAvatar = () => {
  const styles = useThemeObject(createStyles);
  const { theme } = useTheme();

  const { data } = useUserMe();

  return (
    <ButtonBase style={styles.root}>
      <Avatar
        style={styles.avatar}
        avatarUrl={data?.userMe.avatarUrl}
        width={64}
        height={82}
        color={theme.color.dark}
      />
      <View style={styles.iconWrap}>
        <SvgCamera />
      </View>
    </ButtonBase>
  );
};
