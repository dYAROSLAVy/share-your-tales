import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CongratsScreen } from "@screens/congrats-screen";
import { FavoritesScreen } from "@screens/favorites-screen";
import { MainScreen } from "@screens/main-screen";
import { MyPostsScreen } from "@screens/my-posts-screen";
import { DEFAULT_STACK_OPTIONS } from "@shared/constants";
import { SideMenu } from "@widgets/side-menu";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const ProductListWithDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Main" drawerContent={SideMenu}>
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="MyPosts"
        component={MyPostsScreen}
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
