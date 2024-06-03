import "react-native-gesture-handler";
import React from "react";
import { RootStack } from "./navigation/root-stack";
import { ApolloProvider } from "@apollo/client";
import { LIGHT_THEME, ThemeProvider } from "@shared/themes";
import { CLIENT } from "@shared/apollo/libs/apollo-client";

export function App(): React.JSX.Element {
  return (
    <ApolloProvider client={CLIENT}>
      <ThemeProvider initial={LIGHT_THEME}>
        <RootStack />
      </ThemeProvider>
    </ApolloProvider>
  );
}
