import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CongratsScreen } from "@screens/congrats-screen";
import { DEFAULT_STACK_OPTIONS } from "@shared/constants";
import { MainDrawer } from "../main-drawer/main-drawer";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
      <Stack.Screen name="Main" component={MainDrawer} />
      <Stack.Screen name="Congrats" component={CongratsScreen} />
    </Stack.Navigator>
  );
};
