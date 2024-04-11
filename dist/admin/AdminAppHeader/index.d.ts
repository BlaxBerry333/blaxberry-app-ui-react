import * as React from "react";
import { type PaperProps } from "@mui/material/Paper";
import type { RefetchPageContentDataButtonProps, ToggleFullScreenButtonProps, ToggleTranslationButtonProps } from "../AdminLayout/widgets";
import { type HeaderAccountProps, type HeaderBreadcrumbsProps, type HeaderSideNavToggleButtonProps } from "./widgets";
export type AdminAppHeaderProps = React.PropsWithChildren<{
    headerProps?: PaperProps;
    headSideNav?: HeaderSideNavToggleButtonProps;
    headerBreadcrumbs?: HeaderBreadcrumbsProps;
    headAccount?: HeaderAccountProps;
    headerActions?: {
        toggleFullScreen?: ToggleFullScreenButtonProps;
        toggleTranslation?: ToggleTranslationButtonProps;
        refetchPageContentData?: RefetchPageContentDataButtonProps;
    };
}>;
declare const AdminAppHeaderMemo: React.NamedExoticComponent<AdminAppHeaderProps>;
export default AdminAppHeaderMemo;
