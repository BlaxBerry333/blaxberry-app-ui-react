import { type AlertProps } from "@mui/material/Alert";
import { type SnackbarProps } from "@mui/material/Snackbar";
import { type PropsWithChildren } from "react";
export type BaseAlertProps = PropsWithChildren<{
    snackbarProps: SnackbarProps;
    alertProps: AlertProps;
    handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}>;
declare const BaseAlertMemo: import("react").NamedExoticComponent<BaseAlertProps>;
export default BaseAlertMemo;
