import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CongratsScreen } from "@screens/congrats-screen";
import { MainDrawer } from "../main-drawer/main-drawer";
import { CreatePostScreen } from "@screens/create-post-screen";
import { ProfileScreen } from "@screens/profile-screen";
import { FullPostScreen } from "@screens/full-post-screen";
import { DEFAULT_STACK_OPTIONS } from "@shared/navigation/navigation-config";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
      <Stack.Screen name="Main" component={MainDrawer} />
      <Stack.Screen name="Congrats" component={CongratsScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="FullPost" component={FullPostScreen} />
    </Stack.Navigator>
  );
};
