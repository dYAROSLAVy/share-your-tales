import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CongratsScreen } from "@screens/congrats-screen";
import { PostsScreen } from "@screens/posts-screen";
import { DEFAULT_STACK_OPTIONS } from "@shared/constants/lib/navigation-config";
import { SideMenu } from "@widgets/side-menu";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const ProductListWithDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Main" drawerContent={SideMenu}>
      <Drawer.Screen
        name="Main"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={ProductListWithDrawer}
        options={DEFAULT_STACK_OPTIONS}
      />
      <Stack.Screen
        name="Status"
        component={CongratsScreen}
        options={DEFAULT_STACK_OPTIONS}
      />
    </Stack.Navigator>
  );
};
