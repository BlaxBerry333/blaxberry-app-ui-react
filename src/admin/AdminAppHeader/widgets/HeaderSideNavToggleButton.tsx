import * as React from "react";

import { BaseIconButton } from "@/@common/Buttons";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import useTheme from "@mui/material/styles/useTheme";

export type HeaderSideNavToggleButtonProps = {
  isExpanded?: boolean;
  toggleExpand?: () => void;
};

const iconStyles = { width: 18, height: 18 };

const HeaderSideNavToggleButton: React.FC<HeaderSideNavToggleButtonProps> = ({
  isExpanded,
  toggleExpand,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <BaseIconButton
      disableElevation
      onClick={toggleExpand}
      variant={isExpanded ? "contained" : "outlined"}
      sx={{ color: isDarkMode || isExpanded ? "#fff" : "default" }}
    >
      {isExpanded ? (
        <FormatIndentDecreaseIcon style={iconStyles} />
      ) : (
        <FormatIndentIncreaseIcon style={iconStyles} />
      )}
    </BaseIconButton>
  );
};

const HeaderSideNavToggleButtonMemo = React.memo(HeaderSideNavToggleButton);
export default HeaderSideNavToggleButtonMemo;
