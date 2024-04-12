import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import useTheme from "@mui/material/styles/useTheme";
import * as React from "react";

import { BaseIconButton } from "@/@common";
import { toggleFullScreen } from "@/admin/tools";

export type ToggleFullScreenButtonProps = {
  show?: boolean;
  onClick?: (isFullScreen: boolean) => void;
};

const ToggleFullScreenButton = ({
  show = true,
  onClick,
}: ToggleFullScreenButtonProps) => {
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  React.useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <BaseIconButton
      sx={{
        display: show ? "flex" : "none",
        mx: 0.5,
        color: isDarkMode ? "#fff" : "default",
      }}
      onClick={() => {
        toggleFullScreen();
        onClick?.(isFullScreen);
      }}
    >
      {isFullScreen ? <FullscreenExitRoundedIcon /> : <FullscreenRoundedIcon />}
    </BaseIconButton>
  );
};

const ToggleFullScreenButtonMemo = React.memo(ToggleFullScreenButton);
export default ToggleFullScreenButtonMemo;
