import { createStyles } from "./user-profile-avatar.styles";
import { useTheme, useThemeObject } from "@shared/themes";
import { Avatar } from "@shared/ui/avatar";
import { ButtonBase } from "@shared/ui/buttons";
import { View } from "react-native";
import { SvgCamera } from "@shared/assets/icons/components/camera";
import { useUserMe } from "@entities/user";
import { FC } from "react";

type UserProfileAvatarProps = {
  onPress: () => void;
  newImageURI: string | null | undefined;
};

export const UserProfileAvatar: FC<UserProfileAvatarProps> = ({
  onPress,
  newImageURI,
}) => {
  const styles = useThemeObject(createStyles);
  const { theme } = useTheme();

  const { data } = useUserMe();

  return (
    <ButtonBase style={styles.root} onPress={onPress}>
      <Avatar
        style={styles.avatar}
        avatarUrl={newImageURI !== null ? newImageURI : data?.userMe.avatarUrl}
        width={64}
        height={82}
        heightImg={160}
        widthImg={160}
        color={theme.color.dark}
      />
      <View style={styles.iconWrap}>
        <SvgCamera />
      </View>
    </ButtonBase>
  );
};
