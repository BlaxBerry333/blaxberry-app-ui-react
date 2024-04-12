import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ButtonGroup from "@mui/material/ButtonGroup";
import useTheme from "@mui/material/styles/useTheme";
import * as React from "react";

import { BaseIconButton } from "@/@common";
import {
  ThemePaletteContext,
  type ThemeMode,
} from "../context/ThemePaletteContext";

const ToggleThemeModeButton = () => {
  const context = React.useContext(ThemePaletteContext);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const Buttons = React.useMemo<
    Array<{ buttonType: ThemeMode; icon: JSX.Element }>
  >(
    () => [
      { buttonType: "light", icon: <LightModeOutlinedIcon /> },
      { buttonType: "dark", icon: <DarkModeOutlinedIcon /> },
    ],
    [],
  );

  return (
    <ButtonGroup disableElevation variant="outlined" sx={{ mx: 0.5 }}>
      {Buttons.map(({ buttonType, icon }) => {
        const isSelected = theme.palette.mode === buttonType;
        return (
          <BaseIconButton
            key={buttonType}
            variant={isSelected ? "contained" : "outlined"}
            sx={{ color: isDarkMode || isSelected ? "#fff" : "default" }}
            onClick={() => context?.setThemeMode?.(buttonType)}
          >
            {icon}
          </BaseIconButton>
        );
      })}
    </ButtonGroup>
  );
};

const ToggleThemeModeButtonMemo = React.memo(ToggleThemeModeButton);
export default ToggleThemeModeButtonMemo;
