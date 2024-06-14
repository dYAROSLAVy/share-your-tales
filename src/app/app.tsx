import "react-native-gesture-handler";
if (__DEV__) {
  require("../../ReactotronConfig");
}
import React from "react";
import { RootStack } from "./navigation/root-stack";
import { ApolloProvider } from "@apollo/client";
import { LIGHT_THEME, ThemeProvider } from "@shared/themes";
import { CLIENT } from "@shared/apollo";
import { AuthorizationProvider } from "../entities/user/api/authorization-context/ authorization-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function App(): React.JSX.Element {
  return (
    <AuthorizationProvider>
      <GestureHandlerRootView>
        <ApolloProvider client={CLIENT}>
          <ThemeProvider initial={LIGHT_THEME}>
            <RootStack />
          </ThemeProvider>
        </ApolloProvider>
      </GestureHandlerRootView>
    </AuthorizationProvider>
  );
}
