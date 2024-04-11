import ButtonGroup, { type ButtonGroupProps } from "@mui/material/ButtonGroup";
import React from "react";
import BaseButton, { type BaseButtonProps } from "../BaseButton";

// eslint-disable-next-line react-refresh/only-export-components
export enum SelectedCapsuleButton {
  Left = "left",
  Right = "right",
}

const DEFAULT_SELECTED: SelectedCapsuleButton = SelectedCapsuleButton.Left;

export type CapsuleButtonProps = {
  onClick: (selected: SelectedCapsuleButton) => void;
  defaultSelected?: SelectedCapsuleButton;
  wrapperProps?: ButtonGroupProps;
  commonButtonProps?: BaseButtonProps;
  leftButtonProps?: BaseButtonProps;
  rightButtonProps?: BaseButtonProps;
};

const CapsuleButton: React.FC<CapsuleButtonProps> = ({
  onClick,
  defaultSelected = DEFAULT_SELECTED,
  wrapperProps,
  commonButtonProps,
  leftButtonProps,
  rightButtonProps,
}: CapsuleButtonProps) => {
  const [selectedButton, setSelectedButton] =
    React.useState<SelectedCapsuleButton>(DEFAULT_SELECTED);

  const handleClick = React.useCallback(
    (button: SelectedCapsuleButton) => {
      setSelectedButton(button);
      onClick(button);
    },
    [onClick],
  );

  React.useEffect(() => {
    if (defaultSelected) {
      setSelectedButton(defaultSelected);
    }
  }, [defaultSelected]);

  const isLeft = selectedButton === "left";
  const isRight = !isLeft;

  return (
    <ButtonGroup
      disableElevation
      variant="outlined"
      sx={{ ...wrapperProps?.sx }}
      {...wrapperProps}
    >
      {/* left */}
      <BaseButton
        variant={isLeft ? "contained" : "outlined"}
        {...commonButtonProps}
        {...leftButtonProps}
        onClick={() => handleClick(SelectedCapsuleButton.Left)}
      />
      {/* right */}
      <BaseButton
        variant={isRight ? "contained" : "outlined"}
        {...commonButtonProps}
        {...rightButtonProps}
        onClick={() => handleClick(SelectedCapsuleButton.Right)}
      />
    </ButtonGroup>
  );
};

const CapsuleButtonMemo = React.memo(CapsuleButton);
export default CapsuleButtonMemo;
