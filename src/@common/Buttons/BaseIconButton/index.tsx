import * as React from "react";
import { BaseButton, type BaseButtonProps } from "..";

export type BaseIconButtonProps = BaseButtonProps;

const BaseIconButton: React.FC<BaseIconButtonProps> = (props) => {
  return (
    <BaseButton
      variant="outlined"
      disableElevation
      {...props}
      sx={{
        height: 35,
        width: 35,
        minWidth: 35,
        overflow: "hidden",
        ...props.sx,
      }}
    />
  );
};

const BaseIconButtonMemo = React.memo(BaseIconButton);
export default BaseIconButtonMemo;
