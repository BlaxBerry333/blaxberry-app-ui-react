import * as React from "react";

import { BaseIconButton } from "@/@common/Buttons";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";

export type HeaderSideNavToggleButtonProps = {
  isExpanded?: boolean;
  toggleExpand?: () => void;
};

const iconStyles = { width: 18, height: 18 };

const HeaderSideNavToggleButton: React.FC<HeaderSideNavToggleButtonProps> = ({
  isExpanded,
  toggleExpand,
}) => {
  return (
    <BaseIconButton disableElevation onClick={toggleExpand} sx={{ mr: 2 }}>
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
