import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoritesScreen } from "@screens/favorites-screen";
import { MainScreen } from "@screens/main-screen";
import { MyPostsScreen } from "@screens/my-posts-screen";
import { OUTFIT_FONT } from "@shared/assets/fonts";
import { SvgBookmark } from "@shared/assets/icons/components/bookmark";
import { SvgHome } from "@shared/assets/icons/components/home";
import { SvgPhoto } from "@shared/assets/icons/components/photo";
import { useTheme } from "@shared/themes";

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: theme.color.lightest,
          borderColor: "transparent",
          shadowColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: { height: 0, width: 0 },
          shadowRadius: 0,
          alignItems: "center",
          paddingTop: 15.5,
          paddingBottom: 36.5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 500,
          fontFamily: OUTFIT_FONT[500],
        },
        tabBarActiveTintColor: theme.color.primaryBtn,
        tabBarInactiveTintColor: theme.color.light,
      }}
    >
      <Tab.Screen
        name="Main"
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
