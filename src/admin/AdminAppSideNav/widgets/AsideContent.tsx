import { memo, type FC } from "react";

import { AdminAppStyle } from "@/admin/tools";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import SideNavigation, { type SideNavigationProps } from "./SideNavigation";

export type AdminAppSideNavContentProps = {
  isExpanded: boolean;
  logo:
    | undefined
    | {
        url?: string;
        text?: string;
        onClick?: () => void;
      };
  navigation: {
    list: SideNavigationProps["data"];
  };
};

const logoHeight = AdminAppStyle.AdminAppHeader.height;

const AdminAppSideNavContent: FC<AdminAppSideNavContentProps> = ({
  logo,
  isExpanded,
  navigation,
}) => {
  return (
    <>
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
          fontWeight={600}
          sx={(theme) => ({
            opacity: isExpanded ? 1 : 0,
            transition: theme.transitions.create(
              ["color", "background-color"],
              {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              },
            ),
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
            transition: theme.transitions.create(
              ["color", "background-color"],
              {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              },
            ),
            color: listItem?.isActive ? theme.palette.primary.main : "GrayText",
          }),
        })}
      />
    </>
  );
};

const AdminAppSideNavContentMemo = memo(AdminAppSideNavContent);
export default AdminAppSideNavContentMemo;
