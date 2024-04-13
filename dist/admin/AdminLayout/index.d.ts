import { type BoxProps } from "@mui/material/Box";
import { type PaletteOptions } from "@mui/material/styles";
import * as React from "react";
import { type AdminAppFooterProps } from "../AdminAppFooter";
import { type AdminAppHeaderProps } from "../AdminAppHeader";
import { type AdminAppSideNavProps } from "../AdminAppSideNav";
import { type ThemeMode } from "./context/ThemePaletteContext";
export type AdminLayoutProps = React.PropsWithChildren<{
    appLayoutProps?: BoxProps;
    appSideNavProps: Omit<AdminAppSideNavProps, "isExpanded">;
    appHeaderProps: AdminAppHeaderProps;
    appFooterProps: AdminAppFooterProps;
    customThemeOptions: {
        customThemeMode: ThemeMode;
        customThemePaletteOptions?: PaletteOptions;
    };
}>;
declare const AdminLayoutMemo: React.NamedExoticComponent<AdminLayoutProps>;
export default AdminLayoutMemo;
