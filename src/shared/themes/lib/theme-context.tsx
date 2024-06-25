import {
  createContext,
  memo,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { LIGHT_THEME, LIGHT_THEME_ID } from "../model/light-theme";
import { DARK_THEME, DARK_THEME_ID } from "../model/dark-theme";
import { Theme } from "../model/types";

type ProvidedValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const Context = createContext<ProvidedValue>({
  theme: LIGHT_THEME,
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  initial: Theme;
  children?: ReactNode;
};

export const ThemeProvider = memo<ThemeProviderProps>((props) => {
  const [theme, setTheme] = useState<Theme>(props.initial);

  const ToggleThemeCallback = useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.id === LIGHT_THEME_ID) {
        return DARK_THEME;
      }
      if (currentTheme.id === DARK_THEME_ID) {
        return LIGHT_THEME;
      }
      return currentTheme;
    });
  }, []);

  const MemoizedValue = useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, ToggleThemeCallback]);
  return (
    <Context.Provider value={MemoizedValue}>{props.children}</Context.Provider>
  );
});

export const useTheme = () => useContext(Context);
