import * as React from "react";
import { type BaseControlledDialogProps } from "../BaseControlledDialog";
type DialogIsOpen = BaseControlledDialogProps["isOpen"];
export type BaseUncontrolledDialogRef = {
    isOpen: DialogIsOpen;
    setIsOpen: React.Dispatch<React.SetStateAction<DialogIsOpen>>;
    handleOpen: () => void;
    handleClose: () => void;
};
export type BaseUncontrolledDialogProps = Omit<BaseControlledDialogProps, "isOpen" | "handleClose">;
declare const BaseUncontrolledDialogMemo: React.MemoExoticComponent<React.ForwardRefExoticComponent<BaseUncontrolledDialogProps & React.RefAttributes<BaseUncontrolledDialogRef>>>;
export default BaseUncontrolledDialogMemo;
