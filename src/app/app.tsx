import React from "react";
import { RootStack } from "./navigation/root-stack";
import { ApolloProvider } from "@apollo/client";
import { CLIENT } from "@shared/constants/apollo-client";
import { LIGHT_THEME, ThemeProvider } from "@shared/themes";

export function App(): React.JSX.Element {
  return (
    <ApolloProvider client={CLIENT}>
      <ThemeProvider initial={LIGHT_THEME}>
        <RootStack />
      </ThemeProvider>
    </ApolloProvider>
  );
}
