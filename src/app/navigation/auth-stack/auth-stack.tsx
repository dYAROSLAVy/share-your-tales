import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@screens/login-screen";
import { RegistrationScreen } from "@screens/registration-screen";
import { DEFAULT_STACK_OPTIONS } from "@shared/constants";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
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
    </Stack.Navigator>
  );
};
