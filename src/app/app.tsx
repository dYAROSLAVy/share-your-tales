import React from "react";
import { RootStack } from "./navigation/root-stack";
import { ThemeProvider } from "@shared/themes/theme-context";
import { LIGHT_THEME } from "@shared/themes/light-theme";

export function App(): React.JSX.Element {
  return (
    <ThemeProvider initial={LIGHT_THEME}>
      <RootStack />
    </ThemeProvider>
  );
}
