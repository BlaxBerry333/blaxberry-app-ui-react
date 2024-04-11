import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

import { BaseIconButton } from "@/@common";
import { ThemePaletteContext } from "../context/ThemePaletteContext";

const ToggleThemeModeButton = () => {
  const context = React.useContext(ThemePaletteContext);
  const theme = useTheme();

  return (
    <ButtonGroup disableElevation variant="outlined" sx={{ mx: 0.5 }}>
      {/* light */}
      <BaseIconButton
        variant={theme.palette.mode === "light" ? "contained" : "outlined"}
        onClick={() => context?.setThemeMode?.("light")}
      >
        <LightModeOutlinedIcon />
      </BaseIconButton>
      {/* dark */}
      <BaseIconButton
        variant={theme.palette.mode === "dark" ? "contained" : "outlined"}
        onClick={() => context?.setThemeMode?.("dark")}
      >
        <DarkModeOutlinedIcon />
      </BaseIconButton>
    </ButtonGroup>
  );
};

const ToggleThemeModeButtonMemo = React.memo(ToggleThemeModeButton);
export default ToggleThemeModeButtonMemo;
