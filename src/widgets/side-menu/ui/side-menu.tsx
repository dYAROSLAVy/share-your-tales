import { Text, View } from "react-native";
import { createStyles } from "./side-menu.styles";
import { useTheme, useThemeObject } from "@shared/themes";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgUser } from "@shared/assets/icons/components/user";
import { SvgSun } from "@shared/assets/icons/components/sun";
import { SvgExit } from "@shared/assets/icons/components/exit";
import { ButtonIcon } from "@shared/ui/buttons";
import { Avatar } from "@shared/ui/avatar";

import { useAuthorization, useUserMe } from "@entities/user";
import { useState } from "react";
import { SvgMoon } from "@shared/assets/icons/components/moon";

export const SideMenu = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const { toggleTheme, theme } = useTheme();

  const { logout } = useAuthorization();

  const { data } = useUserMe();

  const [isLight, setIsLight] = useState(true);

  const onThemeClick = () => {
    if (!isLight) {
      setIsLight(true);
    }
    if (isLight) {
      setIsLight(false);
    }
    toggleTheme();
  };

  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.contentContainerStyle}
    >
      <SafeAreaView style={styles.root}>
        <View style={styles.topInner}>
          <View style={styles.userWrap}>
            <Avatar
              style={styles.avatar}
              avatarUrl={data?.userMe.avatarUrl}
              width={46}
              height={46}
              widthImg={80}
              heightImg={80}
            />
            <Text style={styles.name}>{`${
              data?.userMe.firstName !== null && data?.userMe.firstName?.length
                ? data?.userMe.firstName
                : "Anonymous"
            } ${
              data?.userMe.lastName !== null && data?.userMe.lastName?.length
                ? data?.userMe.lastName
                : ""
            }`}</Text>
          </View>
          <View style={styles.actionsWrap}>
            <ButtonIcon
              text="Profile"
              onPress={() => navigation.navigate("Profile")}
              icon={SvgUser}
              width={24}
              height={24}
            />
            <ButtonIcon
              text="Exit"
              onPress={logout}
              icon={SvgExit}
              width={24}
              height={24}
            />
          </View>
        </View>
        {isLight && (
          <ButtonIcon
            text="Light theme"
            onPress={onThemeClick}
            icon={SvgSun}
            width={24}
            height={24}
          />
        )}
        {!isLight && (
          <ButtonIcon
            text="Night theme"
            onPress={onThemeClick}
            icon={SvgMoon}
            width={24}
            height={24}
          />
        )}
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};
