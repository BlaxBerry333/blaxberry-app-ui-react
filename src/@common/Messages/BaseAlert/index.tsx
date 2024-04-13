import Alert, { type AlertProps } from "@mui/material/Alert";
import Snackbar, { type SnackbarProps } from "@mui/material/Snackbar";
import { memo, type FC, type PropsWithChildren } from "react";

export type BaseAlertProps = PropsWithChildren<{
  snackbarProps?: SnackbarProps;
  alertProps?: AlertProps;
  handleClose?: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}>;

const BaseAlert: FC<BaseAlertProps> = ({
  snackbarProps,
  alertProps,
  handleClose,
  children,
}) => {
  return (
    <Snackbar autoHideDuration={6000} {...snackbarProps}>
      <Alert
        onClose={handleClose}
        severity={alertProps?.severity}
        variant={alertProps?.variant}
        sx={{ width: "100%", ...alertProps?.sx }}
        {...alertProps}
      >
        {children}
      </Alert>
    </Snackbar>
  );
};

const BaseAlertMemo = memo(BaseAlert);
export default BaseAlertMemo;
