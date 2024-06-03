import { useMemo } from "react";
import { Theme } from "../model/types";
import { useTheme } from "./theme-context";

type Generator<T extends {}> = (theme: Theme) => T;
export const useThemeObject = <T extends {}>(fn: Generator<T>) => {
  const { theme } = useTheme();

  const ThemeObject = useMemo(() => fn(theme), [fn, theme]);
  return ThemeObject;
};
