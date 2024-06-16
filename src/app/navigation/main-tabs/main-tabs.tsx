import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoritesScreen } from "@screens/favorites-screen";
import { MainScreen } from "@screens/main-screen";
import { MyPostsScreen } from "@screens/my-posts-screen";
import { SvgBookmark } from "@shared/assets/icons/components/bookmark";
import { SvgHome } from "@shared/assets/icons/components/home";
import { SvgPhoto } from "@shared/assets/icons/components/photo";
import { useTheme, useThemeObject } from "@shared/themes";
import { createStyles } from "./main-tabs.styles";

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  const { theme } = useTheme();

  const styles = useThemeObject(createStyles);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: theme.color.title,
        tabBarInactiveTintColor: theme.color.menu,
      }}
    >
      <Tab.Screen
        name="MainTab"
        component={MainScreen}
        options={{
          tabBarIcon: SvgHome,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: SvgBookmark,
        }}
      />
      <Tab.Screen
        name="MyPosts"
        component={MyPostsScreen}
        options={{
          tabBarIcon: SvgPhoto,
        }}
      />
    </Tab.Navigator>
  );
};
