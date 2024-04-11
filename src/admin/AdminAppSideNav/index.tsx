import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper, { type PaperProps } from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { AdminAppStyle } from "../tools";
import type { SideNavigationProps } from "./widgets/SideNavigation";
import SideNavigation from "./widgets/SideNavigation";

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

const logoHeight = AdminAppStyle.AdminAppHeader.height;
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
      component="aside"
      elevation={2}
      sx={(theme) => ({
        overflowX: "hidden",
        height: `calc(100vh - 32px)`,
        width: navWidth,
        minWidth: navWidth,
        backgroundColor: "background.paper",
        transition: theme.transitions.create("all", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        borderRadius: theme.shape.borderRadius,
      })}
      {...sideNavProps}
    >
      {/* logo */}
      <Box
        onClick={logo?.onClick}
        sx={{
          height: logoHeight,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          px: 2.2,
        }}
      >
        {logo?.url && (
          <Avatar
            src={logo?.url}
            sx={{ width: 35, height: 35, mr: 1 }}
            variant="square"
          />
        )}
        <Typography
          noWrap
          sx={(theme) => ({
            opacity: isExpanded ? 1 : 0,
            transition: theme.transitions.create("all", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            fontWeight: 600,
          })}
        >
          {logo?.text}
        </Typography>
      </Box>

      <Divider />

      {/* navigation list */}
      <SideNavigation
        data={navigation?.list}
        listProps={{
          sx: { p: 1 },
        }}
        listItemButtonProps={() => ({
          sx: (theme) => ({
            p: 1,
            borderRadius: theme.shape.borderRadius,
          }),
        })}
        listItemIconProps={(listItem) => ({
          sx: (theme) => ({
            justifyContent: "center",
            minWidth: 0,
            ml: 1,
            mr: 2,
            color: listItem?.isActive ? theme.palette.primary.main : "GrayText",
          }),
        })}
        listItemTextProps={(listItem) => ({
          noWrap: true,
          sx: (theme) => ({
            opacity: isExpanded ? 1 : 0,

            transition: theme.transitions.create("all", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            color: listItem?.isActive ? theme.palette.primary.main : "GrayText",
          }),
        })}
      />
    </Paper>
  );
};

const AdminAppSideNavMemo = React.memo(AdminAppSideNav);
export default AdminAppSideNavMemo;
