import { createDrawerNavigator } from "@react-navigation/drawer";
import { SideMenu } from "@widgets/side-menu";
import { MainTabs } from "../main-tabs/main-tabs";

const Drawer = createDrawerNavigator();

export const MainDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainDrawer"
      drawerContent={SideMenu}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
};
