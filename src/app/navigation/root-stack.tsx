import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack } from "./auth-stack/auth-stack";
import { MainStack } from "./main-stack/main-stack";
import { useEffect, useState } from "react";
import { AsyncStorageService } from "@shared/utils";
import { DEFAULT_STACK_OPTIONS } from "@shared/constants";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const [isLogin, setIsLogin] = useState(false);

  const getToken = async () => {
    const token = await AsyncStorageService.getAccessToken();

    if (token !== null) {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    getToken();
  }, [isLogin]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLogin && (
          <Stack.Group>
            <Stack.Screen
              name={"AuthStack"}
              component={AuthStack}
              options={DEFAULT_STACK_OPTIONS}
            />
          </Stack.Group>
        )}
        {isLogin && (
          <Stack.Group>
            <Stack.Screen
              name={"MainStack"}
              component={MainStack}
              options={DEFAULT_STACK_OPTIONS}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
