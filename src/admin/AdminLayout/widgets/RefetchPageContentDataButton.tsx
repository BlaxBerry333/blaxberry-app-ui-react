import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import * as React from "react";

import { BaseButton } from "@/@common";

export type RefetchPageContentDataButtonProps = {
  show?: boolean;
  onClick?: () => void;
};

const RefetchPageContentDataButton = ({
  show = false,
  onClick,
}: RefetchPageContentDataButtonProps) => {
  return (
    <BaseButton
      sx={{
        display: show ? "flex" : "none",
        mx: 0.5,
      }}
      onClick={onClick}
    >
      <AutorenewRoundedIcon />
    </BaseButton>
  );
};

const RefetchPageContentDataButtonMemo = React.memo(
  RefetchPageContentDataButton,
);
export default RefetchPageContentDataButtonMemo;
