import * as React from "react";

export type ThemeMode = "light" | "dark";

export const ThemePaletteContext = React.createContext<{
  toggleThemeMode: () => void;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}>({
  toggleThemeMode: () => {},
  setThemeMode: () => {},
});
