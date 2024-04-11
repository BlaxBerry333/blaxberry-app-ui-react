import * as React from "react";

import Button, { type ButtonProps } from "@mui/material/Button";
import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogActions, {
  type DialogActionsProps,
} from "@mui/material/DialogActions";
import DialogContent, {
  type DialogContentProps,
} from "@mui/material/DialogContent";
import DialogTitle, { type DialogTitleProps } from "@mui/material/DialogTitle";

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

const BaseControlledDialog: React.FC<BaseControlledDialogProps> = ({
  dialog,
  dialogTitle,
  dialogContent,
  dialogActions,
  children,
  isOpen,
  handleClose,
  disableEscape = false,
  maxWidth = "sm",
  fullMaxWidth = true,
}) => {
  return (
    <Dialog
      keepMounted
      scroll="paper"
      {...dialog}
      open={isOpen}
      onClose={disableEscape ? undefined : handleClose}
      disableEscapeKeyDown={disableEscape}
      maxWidth={maxWidth}
      fullWidth={fullMaxWidth}
    >
      {/* custom content */}
      {children && <div>{children}</div>}

      {/* built-in contents */}
      {!children && (
        <>
          {/* dialogTitle */}
          {dialogTitle && <DialogTitle {...dialogTitle} />}

          {/* dialogContent */}
          {dialogContent && (
            <DialogContent {...dialogContent}>
              {dialogContent.children}
            </DialogContent>
          )}

          {/* dialogActions */}
          {dialogActions && (
            <DialogActions {...dialogActions}>
              <Button
                variant="outlined"
                {...dialogActions?.cancel?.props}
                onClick={() => dialogActions?.cancel?.callback(handleClose)}
              >
                {dialogActions?.cancel?.text || "Cancel"}
              </Button>
              <Button
                variant="contained"
                {...dialogActions?.ok?.props}
                onClick={() => dialogActions?.ok?.callback(handleClose)}
              >
                {dialogActions?.ok?.text || "Ok"}
              </Button>
            </DialogActions>
          )}
        </>
      )}
    </Dialog>
  );
};

const BaseControlledDialogMemo = React.memo(BaseControlledDialog);
export default BaseControlledDialogMemo;
