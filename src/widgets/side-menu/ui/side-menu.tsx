import { Text, View } from "react-native";
import { createStyles } from "./side-menu.styles";
import { useTheme, useThemeObject } from "@shared/themes";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgUser } from "@shared/assets/icons/components/user";
import { SvgSun } from "@shared/assets/icons/components/sun";
import { SvgExit } from "@shared/assets/icons/components/exit";
import { ButtonIcon } from "@shared/ui/buttons";
import { AsyncStorageService } from "@shared/utils";
import { Avatar } from "@shared/ui/avatar";
import { useUserMe } from "@shared/apollo";

export const SideMenu = ({ navigation }) => {
  const styles = useThemeObject(createStyles);

  const { toggleTheme } = useTheme();

  const { data } = useUserMe();

  const exit = () => {
    AsyncStorageService.clearStorage();
  };

  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
      <SafeAreaView style={styles.root}>
        <View style={styles.topInner}>
          <View style={styles.userWrap}>
            <Avatar
              style={styles.avatar}
              avatarUrl={data?.userMe.avatarUrl}
              width={46}
              height={46}
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
            >
              <SvgUser width={24} height={24} />
            </ButtonIcon>
            <ButtonIcon text="Exit" onPress={exit}>
              <SvgExit />
            </ButtonIcon>
          </View>
        </View>
        <ButtonIcon text="Light theme" onPress={toggleTheme}>
          <SvgSun />
        </ButtonIcon>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};
