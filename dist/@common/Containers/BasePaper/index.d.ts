import { type BoxProps } from "@mui/material/Box";
import { type PaperProps } from "@mui/material/Paper";
import React, { type PropsWithChildren } from "react";
export type BasePaperProps = PropsWithChildren<{
    wrapperProps?: BoxProps;
    contentProps?: PaperProps;
}>;
declare const BasePaperMemo: React.NamedExoticComponent<BasePaperProps>;
export default BasePaperMemo;
