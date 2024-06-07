import { useUserMe } from "@shared/apollo";
import { createStyles } from "./user-header-avatar.styles";
import { useThemeObject } from "@shared/themes";
import { Avatar } from "@shared/ui/avatar";
import { ButtonBase } from "@shared/ui/buttons";

export const UserHeaderAvatar = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const { data } = useUserMe();

  return (
    <ButtonBase style={styles.root} onPress={() => navigation.openDrawer()}>
      <Avatar
        style={styles.avatar}
        avatarUrl={data?.userMe.avatarUrl}
        width={24}
        height={24}
      />
    </ButtonBase>
  );
};
