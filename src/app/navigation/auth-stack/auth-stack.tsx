import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@screens/login-screen";
import { RegistrationScreen } from "@screens/registration-screen";
import { DEFAULT_STACK_OPTIONS } from "@shared/navigation/navigation-config";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};
