import * as React from "react";
import { type ButtonProps } from "@mui/material/Button";
import { type DialogProps } from "@mui/material/Dialog";
import { type DialogActionsProps } from "@mui/material/DialogActions";
import { type DialogContentProps } from "@mui/material/DialogContent";
import { type DialogTitleProps } from "@mui/material/DialogTitle";
export type BaseControlledDialogProps = React.PropsWithChildren<{
    dialog?: Omit<DialogProps, "open" | "fullWidth" | "maxWidth">;
    dialogTitle?: DialogTitleProps;
    dialogContent?: DialogContentProps;
    dialogActions?: DialogActionsProps & {
        cancel?: {
            text: string;
            callback: (close: () => void) => void;
            props?: ButtonProps;
        };
        ok?: {
            text: string;
            callback: (close: () => void) => void;
            props?: ButtonProps;
        };
    };
    isOpen: DialogProps["open"];
    handleClose: () => void;
    disableEscape?: boolean;
    maxWidth?: DialogProps["maxWidth"];
    fullMaxWidth?: DialogProps["fullWidth"];
}>;
declare const BaseControlledDialogMemo: React.NamedExoticComponent<BaseControlledDialogProps>;
export default BaseControlledDialogMemo;
