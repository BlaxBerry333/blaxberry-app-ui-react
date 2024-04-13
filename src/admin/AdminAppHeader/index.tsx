import * as React from "react";

import Box from "@mui/material/Box";
import Paper, { type PaperProps } from "@mui/material/Paper";

import type {
  RefetchPageContentDataButtonProps,
  ToggleFullScreenButtonProps,
  ToggleTranslationButtonProps,
} from "../AdminLayout/widgets";
import { AdminAppStyle } from "../tools";
import {
  HeaderAccount,
  HeaderBreadcrumbs,
  HeaderSideNavToggleButton,
  type HeaderAccountProps,
  type HeaderBreadcrumbsProps,
  type HeaderSideNavToggleButtonProps,
} from "./widgets";

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

const AdminAppHeader: React.FC<AdminAppHeaderProps> = ({
  headerProps,
  headSideNav,
  headerBreadcrumbs,
  children,
  headAccount,
}) => {
  return (
    <Paper
      className="BlaxBerry-UI-AdminLayout-header"
      component="header"
      elevation={2}
      sx={(theme) => ({
        height: AdminAppStyle.AdminAppHeader.height,
        minWidth: "275px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: theme.shape.borderRadius,
        px: 2,
        backgroundColor: "background.paper",
        transition: theme.transitions.create(["color", "background-color"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      })}
      {...headerProps}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* AdminAppSideNav's toggle button */}
        <HeaderSideNavToggleButton {...headSideNav} />
        {/* header's Breadcrumbs */}
        <HeaderBreadcrumbs {...headerBreadcrumbs} />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {children}

        <HeaderAccount {...headAccount} />
      </Box>
    </Paper>
  );
};

const AdminAppHeaderMemo = React.memo(AdminAppHeader);
export default AdminAppHeaderMemo;
