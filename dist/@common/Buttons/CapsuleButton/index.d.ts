import { type ButtonGroupProps } from "@mui/material/ButtonGroup";
import React from "react";
import { type BaseButtonProps } from "../BaseButton";
export declare enum SelectedCapsuleButton {
    Left = "left",
    Right = "right"
}
export type CapsuleButtonProps = {
    onClick: (selected: SelectedCapsuleButton) => void;
    defaultSelected?: SelectedCapsuleButton;
    wrapperProps?: ButtonGroupProps;
    commonButtonProps?: BaseButtonProps;
    leftButtonProps?: BaseButtonProps;
    rightButtonProps?: BaseButtonProps;
};
declare const CapsuleButtonMemo: React.NamedExoticComponent<CapsuleButtonProps>;
export default CapsuleButtonMemo;
