import * as React from "react";

import List, { type ListProps } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
  type ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon, {
  type ListItemIconProps,
} from "@mui/material/ListItemIcon";
import Typography, { type TypographyProps } from "@mui/material/Typography";

import type { HeaderAccountListItemData } from "../../AdminAppHeader/widgets/HeaderAccountListItem";

export type SideNavigationProps = {
  data: Array<HeaderAccountListItemData>;
  listProps?: ListProps;
  listItemButtonProps?: (
    listItem?: HeaderAccountListItemData,
  ) => ListItemButtonProps;
  listItemIconProps?: (
    listItem?: HeaderAccountListItemData,
  ) => ListItemIconProps;
  listItemTextProps?: (listItem?: HeaderAccountListItemData) => TypographyProps;
};

const SideNavigation: React.FC<SideNavigationProps> = ({
  data,
  listProps,
  listItemButtonProps,
  listItemIconProps,
  listItemTextProps,
}) => {
  return (
    <List {...listProps}>
      {data?.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton
            onClick={item.onClick}
            {...listItemButtonProps?.(item)}
          >
            {/* icon */}
            <ListItemIcon {...listItemIconProps?.(item)}>
              {item.icon}
            </ListItemIcon>

            {/* text */}
            <Typography {...listItemTextProps?.(item)}>{item.text}</Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

const SideNavigationMemo = React.memo(SideNavigation);
export default SideNavigationMemo;
