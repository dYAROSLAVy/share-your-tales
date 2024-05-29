import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@screens/login-screen/login-screen";
import { RegistrationScreen } from "@screens/registration-screen/registration-screen";
import { StatusScreen } from "@screens/status-screen/status-screen";
import { DEFAULT_STACK_OPTIONS } from "@shared/navigation/navigation-config";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={DEFAULT_STACK_OPTIONS}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={DEFAULT_STACK_OPTIONS}
        />
        <Stack.Screen
          name="Status"
          component={StatusScreen}
          options={DEFAULT_STACK_OPTIONS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
