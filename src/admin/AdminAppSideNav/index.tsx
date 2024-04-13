import Paper, { type PaperProps } from "@mui/material/Paper";
import * as React from "react";

import { AdminAppStyle } from "../tools";
import { AdminAppSideNavContent, type SideNavigationProps } from "./widgets";

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

const smallWidth = AdminAppStyle.AdminAppSideNav.smallWidth;
const largeWidth = AdminAppStyle.AdminAppSideNav.largeWidth;

const AdminAppSideNav: React.FC<AdminAppSideNavProps> = ({
  sideNavProps,
  isExpanded,
  logo,
  navigation,
}) => {
  // const theme = useTheme();
  // const isBreakpointXS = useMediaQuery(theme.breakpoints.up("xs"));

  const navWidth = React.useMemo<number>(
    () => (isExpanded ? largeWidth : smallWidth),
    [isExpanded],
  );

  return (
    <Paper
      className="BlaxBerry-UI-AdminLayout-aside"
      component="aside"
      elevation={2}
      sx={(theme) => ({
        display: {
          xs: "none",
          md: "block",
        },
        mr: 2,

        overflowX: "hidden",
        height: `calc(100vh - 32px)`,
        width: navWidth,
        minWidth: smallWidth,
        backgroundColor: "background.paper",
        color: "text.secondary",
        transition: theme.transitions.create(
          ["width", "minWidth", "color", "background-color"],
          {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          },
        ),
        borderRadius: theme.shape.borderRadius,
      })}
      {...sideNavProps}
    >
      {/* common side nav content */}
      <AdminAppSideNavContent
        isExpanded={isExpanded}
        logo={logo}
        navigation={navigation}
      />
    </Paper>
  );
};

const AdminAppSideNavMemo = React.memo(AdminAppSideNav);
export default AdminAppSideNavMemo;
