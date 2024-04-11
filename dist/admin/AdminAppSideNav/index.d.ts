import { type PaperProps } from "@mui/material/Paper";
import * as React from "react";
import type { SideNavigationProps } from "./widgets/SideNavigation";
export type AdminAppSideNavProps = {
    sideNavProps?: PaperProps;
    isExpanded: boolean;
    logo?: {
        url?: string;
        text?: string;
        onClick?: () => void;
    };
    navigation: {
        list: SideNavigationProps["data"];
    };
};
declare const AdminAppSideNavMemo: React.NamedExoticComponent<AdminAppSideNavProps>;
export default AdminAppSideNavMemo;
