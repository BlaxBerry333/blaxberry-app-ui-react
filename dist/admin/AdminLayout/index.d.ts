import * as React from "react";
import { type AdminAppFooterProps } from "../AdminAppFooter";
import { type AdminAppHeaderProps } from "../AdminAppHeader";
import { type AdminAppSideNavProps } from "../AdminAppSideNav";
import { type ThemeMode } from "./context/ThemePaletteContext";
export type AdminLayoutProps = React.PropsWithChildren<{
    appSideNavProps: Omit<AdminAppSideNavProps, "isExpanded">;
    appHeaderProps: AdminAppHeaderProps;
    appFooterProps: AdminAppFooterProps;
    customThemeOptions: {
        customThemeMode: ThemeMode;
    };
}>;
declare const AdminLayoutMemo: React.NamedExoticComponent<AdminLayoutProps>;
export default AdminLayoutMemo;
