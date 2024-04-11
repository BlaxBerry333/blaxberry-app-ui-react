import { type BoxProps } from "@mui/material/Box";
import * as React from "react";
export type AdminAppContentProps = React.PropsWithChildren<{
    contentProps?: BoxProps;
    headerComponent?: React.ReactNode;
}>;
declare const AdminAppContentMemo: React.NamedExoticComponent<AdminAppContentProps>;
export default AdminAppContentMemo;
