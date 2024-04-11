import * as React from "react";
export type ThemeMode = "light" | "dark";
export declare const ThemePaletteContext: React.Context<{
    toggleThemeMode: () => void;
    setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}>;
